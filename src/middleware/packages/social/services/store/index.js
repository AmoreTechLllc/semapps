const { MIME_TYPES } = require('@semapps/mime-types');
const { ControlledContainerMixin, arrayOf } = require('@semapps/ldp');
const { sanitizeSparqlQuery } = require('@semapps/triplestore');
const getAction = require('./actions/get');

/**
 * This service is used to replace triplestore services
 */
const StoreService = {
  name: 'social.store',
  dependencies: ['triplestore'],
  mixins: [ControlledContainerMixin],
  settings: {
    selectActorData: null,
    // ControlledContainerMixin settings
    path: '/as/collection',
    acceptedTypes: [
      'https://www.w3.org/ns/activitystreams#Collection',
      'https://www.w3.org/ns/activitystreams#OrderedCollection'
    ],
    accept: MIME_TYPES.JSON,
    activateTombstones: false,
    permissions: {},
    // These default permissions can be overridden by providing
    // a `permissions` param when calling activitypub.collection.post
    newResourcesPermissions: webId => {
      switch (webId) {
        case 'anon':
        case 'system':
          return {
            anon: {
              read: true,
              write: true
            }
          };

        default:
          return {
            anon: {
              read: true
            },
            user: {
              uri: webId,
              read: true,
              write: true,
              control: true
            }
          };
      }
    },
    excludeFromMirror: true
  },
  actions: {
    get: getAction,

    post: {
      visibility: 'public',
      params: {
        resource: { type: 'object' },
        webId: { type: 'string', optional: true },
        containerUri: { type: 'string', optional: true }
      },
      /**
       * Posts a resource to a container
       * @param {Context<{ resource: object, webId: string, containerUri: string }>} ctx - Moleculer context with params
       * @returns {Promise<unknown>} - Returns the created resource
       */
      async handler(ctx) {
        let { containerUri, resource, webId } = ctx.params;
        if (!containerUri) {
          containerUri = await this.actions.getContainerUri({ webId }, { parentCtx: ctx });
        }

        await this.actions.waitForContainerCreation({ containerUri });

        const ordered = arrayOf(resource.type).includes('OrderedCollection');

        // TODO Use ShEx to check collection validity
        if (!ordered && (resource['semapps:sortPredicate'] || resource['semapps:sortOrder'])) {
          throw new Error(
            `Non-ordered collections cannot include semapps:sortPredicate or semapps:sortOrder predicates`
          );
        }

        // Set default values
        if (!resource['semapps:dereferenceItems']) resource['semapps:dereferenceItems'] = false;
        if (ordered) {
          if (!resource['semapps:sortPredicate']) resource['semapps:sortPredicate'] = 'as:published';
          if (!resource['semapps:sortOrder']) resource['semapps:sortOrder'] = 'semapps:DescOrder';
        }

        return await ctx.call('ldp.container.post', { ...ctx.params, containerUri });
      }
    },
    /**
     * Get the owner of collections attached to actors
     * @param {Context<{ collectionUri: string, collectionKey: string }>} ctx - Context object with params
     * @param {string} collectionUri - The full URI of the collection
     * @param {string} collectionKey - The key of the collection (eg. inbox)
     * @returns {Promise<string|null>} - Returns the owner of the collection or null if not found
     */
    getOwner: {
      visibility: 'public',
      params: {
        collectionUri: { type: 'string' },
        collectionKey: { type: 'string' }
      },
      async handler(ctx) {
        const { collectionUri, collectionKey } = ctx.params;

        // Inboxes use the LDP ontology (LDN)
        const prefix = collectionKey === 'inbox' ? 'ldp' : 'as';

        const results = await ctx.call('triplestore.query', {
          query: `
          PREFIX as: <https://www.w3.org/ns/activitystreams#> 
          PREFIX ldp: <http://www.w3.org/ns/ldp#>
          SELECT ?actorUri
          WHERE { 
            ?actorUri ${prefix}:${collectionKey} <${collectionUri}>
          }
        `,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });

        return results.length > 0 ? results[0].actorUri.value : null;
      }
    },
    /**
     * Checks if the collection is empty
     * @param {Context<{ collectionUri: string }>} ctx - Context object with params
     * @param {string} collectionUri - The full URI of the collection
     * @returns {Promise<boolean>} - Returns true if the collection is empty
     */
    isEmpty: {
      visibility: 'public',
      params: {
        collectionUri: { type: 'string' }
      },
      async handler(ctx) {
        const { collectionUri } = ctx.params;
        const res = await ctx.call('triplestore.query', {
          query: sanitizeSparqlQuery`
            PREFIX as: <https://www.w3.org/ns/activitystreams#>
            SELECT ( Count(?items) as ?count )
            WHERE {
              <${collectionUri}> as:items ?items .
            }
          `,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });
        return Number(res[0].count.value) === 0;
      }
    },
    /**
     * Checks if an item is in a collection
     * @param {Context<{ collectionUri: string, itemUri: string }>} ctx - Context object with params
     * @param {string} collectionUri - The full URI of the collection
     * @param {string} itemUri - The full URI of the item
     * @returns {Promise<boolean>} - Returns true if the collection exists
     */
    includes: {
      visibility: 'public',
      params: {
        collectionUri: { type: 'string' },
        itemUri: { type: 'string' }
      },
      async handler(ctx) {
        const { collectionUri, itemUri } = ctx.params;

        if (!itemUri) throw new Error('No valid item URI provided for social.store.includes');
        return await ctx.call('triplestore.query', {
          query: sanitizeSparqlQuery`
            PREFIX as: <https://www.w3.org/ns/activitystreams#>
            ASK
            WHERE {
              <${collectionUri}> a as:Collection .
              <${collectionUri}> as:items <${itemUri}> .
            }
          `,
          accept: MIME_TYPES.JSON,
          webId: 'system'
        });
      }
    },
    /**
     * Attach an object to a collection
     * @param {Context<{ collectionUri: string, item: any, itemUri?: string }>} ctx - Context object with params
     * @param {string} collectionUri - The full URI of the collection
     * @param {any} item - The resource to add to the collection
     * @param {string} itemUri - The full URI of the item
     * @returns {Promise<void>}
     */
    add: {
      visibility: 'public',
      params: {
        collectionUri: { type: 'string' },
        item: { type: 'any' },
        itemUri: { type: 'string', optional: true }
      },
      async handler(ctx) {
        let { collectionUri, item, itemUri } = ctx.params;
        if (!itemUri && item) itemUri = typeof item === 'object' ? item.id || item['@id'] : item;
        if (!itemUri) throw new Error('No valid item URI provided for activitypub.collection.add');

        // TODO also check external resources
        // const resourceExist = await ctx.call('ldp.resource.exist', { resourceUri: itemUri });
        // if (!resourceExist) throw new Error('Cannot attach a non-existing resource !')

        // TODO check why thrown error is lost and process is stopped
        const collectionExist = await ctx.call('social.store.exist', { resourceUri: collectionUri });
        if (!collectionExist)
          throw new Error(
            `Cannot attach to a non-existing collection: ${collectionUri} (dataset: ${ctx.meta.dataset})`
          );

        await ctx.call('triplestore.insert', {
          resource: sanitizeSparqlQuery`<${collectionUri}> <https://www.w3.org/ns/activitystreams#items> <${itemUri}>`,
          webId: 'system'
        });
      }
    },
    /**
     * Detach an object from a collection
     * @param {Context<{ collectionUri: string, item: any, itemUri?: string }>} ctx - Context object with params
     * @param {string} collectionUri - The full URI of the collection
     * @param {any} item - The resource to remove from the collection
     * @param {string} itemUri - The full URI of the item
     * @returns {Promise<void>}
     */
    remove: {
      visibility: 'public',
      params: {
        collectionUri: { type: 'string' },
        item: { type: 'any' },
        itemUri: { type: 'string', optional: true }
      },
      async handler(ctx) {
        let { collectionUri, item, itemUri } = ctx.params;
        if (!itemUri && item) itemUri = typeof item === 'object' ? item.id || item['@id'] : item;
        if (!itemUri) throw new Error('No valid item URI provided for social.store.remove');

        const collectionExist = await ctx.call('social.store.exist', { resourceUri: collectionUri });
        if (!collectionExist) throw new Error(`Cannot detach from a non-existing collection: ${collectionUri}`);

        await ctx.call('triplestore.update', {
          query: sanitizeSparqlQuery`
            DELETE
            WHERE
            { <${collectionUri}> <https://www.w3.org/ns/activitystreams#items> <${itemUri}> }
          `,
          webId: 'system'
        });
      }
    },
    /**
     * Empty the collection, deleting all items it contains.
     * @param {Context<{ collectionUri: string }>} ctx - Context object with params
     * @param {string} collectionUri - The full URI of the collection
     * @returns {Promise<void>}
     */
    clear: {
      visibility: 'public',
      params: {
        collectionUri: { type: 'string' }
      },
      async handler(ctx) {
        let { collectionUri } = ctx.params;
        collectionUri = collectionUri.replace(/\/+$/, '');
        await ctx.call('triplestore.query', {
          query: sanitizeSparqlQuery`
            PREFIX as: <https://www.w3.org/ns/activitystreams#> 
            DELETE {
              ?s1 ?p1 ?o1 .
            }
            WHERE { 
              FILTER(?container IN (<${collectionUri}>, <${`${collectionUri}/`}>)) .
              ?container as:items ?s1 .
              ?s1 ?p1 ?o1 .
            } 
          `
        });
      }
    }
  }
};

module.exports = StoreService;

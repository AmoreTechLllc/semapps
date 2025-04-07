const { namedNode, literal, triple } = require('@rdfjs/data-model');
const { ACTOR_TYPES, AS_PREFIX } = require('@semapps/activitypub');
const { arrayOf } = require('@semapps/ldp');
const { MIME_TYPES } = require('@semapps/mime-types');

const { getSlugFromUri } = require('../util');

const ResourceService = {
  name: 'social.resource',
  dependencies: ['ldp.resource', 'signature'],
  settings: {
    selectActorData: null,
    activateTombstones: true
  },
  actions: {
    get: {
      visibility: 'public',
      params: {
        resourceUri: { type: 'string' },
        webId: { type: 'string', optional: true },
        accept: { type: 'string', optional: true }
      },
      /**
       * Get a resource from the given URI
       * @param {Context<{ resourceUri: string, webId: string, accept: string }>} ctx - Moleculer context with params
       * @returns {Promise<unknown>} - Returns the resource
       */
      async handler(ctx) {
        const { resourceUri, webId, accept } = ctx.params;
        const resource = await ctx.call('ldp.resource.get', { resourceUri, accept, webId });
        return resource;
      }
    },
    appendActorData: {
      visibility: 'public',
      params: {
        actorUri: { type: 'string', optional: false }
      },
      /**
       * Append actor default data to the given actor
       * @param {Context<{ actorUri: string }>} ctx - Moleculer context with params
       * @returns {Promise<void>} - Returns a Promise that resolves when the actor data is appended
       */
      async handler(ctx) {
        const { actorUri } = ctx.params;
        const userData = await ctx.call('social.getActor', { actorUri, webId: 'system' }, { parentCtx: ctx });
        const propertiesToAdd = this.settings.selectActorData ? this.settings.selectActorData(userData) : {};

        if (!propertiesToAdd['http://www.w3.org/1999/02/22-rdf-syntax-ns#type']) {
          // Ensure at least one actor type, otherwise ActivityPub-specific properties (inbox, public key...) will not be added
          const resourceType = arrayOf(userData.type || userData['@type']);
          const includeActorType = resourceType.some(type => Object.values(ACTOR_TYPES).includes(type));
          if (!includeActorType) {
            propertiesToAdd['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'] = `${AS_PREFIX}Person`;
          }
        }

        if (!propertiesToAdd['https://www.w3.org/ns/activitystreams#preferredUsername']) {
          propertiesToAdd['https://www.w3.org/ns/activitystreams#preferredUsername'] = getSlugFromUri(
            userData.id || userData['@id']
          );
        }

        if (Object.keys(propertiesToAdd).length > 0) {
          await ctx.call('ldp.resource.patch', {
            resourceUri: actorUri,
            triplesToAdd: Object.entries(propertiesToAdd).map(([predicate, subject]) =>
              triple(
                namedNode(actorUri),
                namedNode(predicate),
                typeof subject === 'string' && subject.startsWith('http') ? namedNode(subject) : literal(subject)
              )
            ),
            webId: 'system'
          });
        }
      }
    },
    createTombstone: {
      visibility: 'public',
      params: {
        resourceUri: 'string',
        formerType: [
          { type: 'array', optional: true },
          { type: 'string', optional: true }
        ],
        containersUris: {
          type: 'array',
          items: 'string',
          optional: true
        },
        dataset: {
          type: 'string',
          optional: true
        }
      },
      /**
       * Replaces the given resource with a Tombstone
       * @param {Context<{ resourceUri: string, formerType: string[] | string }>} ctx - Moleculer context with params
       * @returns {Promise<void>} - Returns a Promise that resolves when the tombstone is created
       */
      async handler(ctx) {
        const { resourceUri, formerType, containersUris, dataset } = ctx.params;
        // If the resource was in no container, skip...
        if (containersUris.length > 0) {
          // Check if tombstones are activated for this specific container
          const containerOptions = await ctx.call('ldp.registry.getByUri', {
            containerUri: containersUris[0],
            dataset
          });

          if (containerOptions.activateTombstones !== false && ctx.meta.activateTombstones !== false) {
            const expandedFormerTypes = await ctx.call('jsonld.parser.expandTypes', { types: formerType });

            // Insert directly the Tombstone in the triple store to avoid resource creation side-effects
            await ctx.call('triplestore.insert', {
              resource: {
                '@id': resourceUri,
                '@type': 'https://www.w3.org/ns/activitystreams#Tombstone',
                'https://www.w3.org/ns/activitystreams#formerType': expandedFormerTypes.map(type => ({ '@id': type })),
                'https://www.w3.org/ns/activitystreams#deleted': {
                  '@value': new Date().toISOString(),
                  '@type': 'http://www.w3.org/2001/XMLSchema#dateTime'
                }
              },
              contentType: MIME_TYPES.JSON,
              webId: 'system'
            });
          }
        }
      }
    }
  },
  methods: {
    isActor(resource) {
      return arrayOf(resource['@type'] || resource.type).some(type => Object.values(ACTOR_TYPES).includes(type));
    }
  },
  events: {
    async 'ldp.resource.created'(ctx) {
      const { resourceUri, newData } = ctx.params;
      if (this.isActor(newData)) {
        await this.actions.appendActorData({ actorUri: resourceUri }, { parentCtx: ctx });
        await ctx.call('signature.keypair.generate', { actorUri: resourceUri });
        await ctx.call('signature.keypair.attachPublicKey', { actorUri: resourceUri });
      }
    },
    async 'ldp.resource.deleted'(ctx) {
      const { resourceUri, oldData } = ctx.params;
      // When resource is a actor, delete the keypair
      if (this.isActor(oldData)) {
        await ctx.call('signature.keypair.delete', { actorUri: resourceUri });
      }
    },
    async 'auth.registered'(ctx) {
      const { webId } = ctx.params;
      await this.actions.appendActorData({ actorUri: webId }, { parentCtx: ctx });
    }
  }
};

module.exports = ResourceService;

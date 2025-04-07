const { MoleculerError } = require('moleculer').Errors;
const { Errors: E } = require('moleculer-web');

const CollectionService = {
  name: 'activitypub.collection',
  settings: {
    podProvider: false
  },
  dependencies: ['social.resource', 'social.store'],
  actions: {
    put() {
      throw new E.ForbiddenError();
    },
    async patch(ctx) {
      const { resourceUri: collectionUri, triplesToAdd, triplesToRemove } = ctx.params;
      const webId = ctx.params.webId || ctx.meta.webId || 'anon';

      const collectionExist = await ctx.call('activitypub.collection.exist', { resourceUri: collectionUri, webId });
      if (!collectionExist) {
        throw new MoleculerError(
          `Cannot update content of non-existing collection ${collectionUri}`,
          400,
          'BAD_REQUEST'
        );
      }

      if (triplesToAdd) {
        for (const triple of triplesToAdd) {
          if (
            triple.subject.value === collectionUri &&
            triple.predicate.value === 'https://www.w3.org/ns/activitystreams#items'
          ) {
            const itemUri = triple.object.value;
            await ctx.call('activitypub.collection.add', { collectionUri, itemUri });
          }
        }
      }

      if (triplesToRemove) {
        for (const triple of triplesToRemove) {
          if (
            triple.subject.value === collectionUri &&
            triple.predicate.value === 'https://www.w3.org/ns/activitystreams#items'
          ) {
            const itemUri = triple.object.value;
            await ctx.call('activitypub.collection.remove', { collectionUri, itemUri });
          }
        }
      }
    },
    get(ctx) {
      return ctx.call('social.store.get', ctx.params);
    },
    exist(ctx) {
      const { resourceUri, webId } = ctx.params;
      return ctx.call('social.store.exist', { resourceUri, webId });
    },
    async post(ctx) {
      return await ctx.call('social.store.post', ctx.params);
    },
    /*
     * Checks if the collection is empty
     * @param collectionUri The full URI of the collection
     * @return true if the collection is empty
     */
    async isEmpty(ctx) {
      const { collectionUri } = ctx.params;
      return ctx.call('social.store.isEmpty', { collectionUri });
    },
    /**
     * Checks if an item is in a collection
     * @param {Context<{ collectionUri: string, itemUri: string }>} ctx - Context object with params
     * @param {string} collectionUri - The full URI of the collection
     * @param {string} itemUri - The full URI of the item
     * @returns {Promise<boolean>} true if the collection exists
     */
    async includes(ctx) {
      const { collectionUri, itemUri } = ctx.params;

      return ctx.call('social.store.includes', { collectionUri, itemUri });
    },
    /**
     * Attach an object to a collection
     * @param {Context<{ collectionUri: string, item: any, itemUri?: string }>} ctx - Context object with params
     * @param {string} collectionUri - The full URI of the collection
     * @param {any} item - The resource to add to the collection
     * @param {string} itemUri - The full URI of the item
     * @returns {Promise<void>}
     */
    async add(ctx) {
      let { collectionUri, item, itemUri } = ctx.params;

      await ctx.call('social.store.add', { collectionUri, item, itemUri });

      await ctx.emit('activitypub.collection.added', {
        collectionUri,
        itemUri
      });
    },
    /*
     * Detach an object from a collection
     * @param collectionUri The full URI of the collection
     * @param item The resource to remove from the collection
     */
    async remove(ctx) {
      let { collectionUri, item, itemUri } = ctx.params;

      await ctx.call('social.store.remove', { collectionUri, item, itemUri });

      await ctx.emit('activitypub.collection.removed', {
        collectionUri,
        itemUri
      });
    },
    /*
     * Empty the collection, deleting all items it contains.
     * @param collectionUri The full URI of the collection
     */
    async clear(ctx) {
      const { collectionUri } = ctx.params;
      await ctx.call('social.store.clear', { collectionUri });
    },
    /*
     * Get the owner of collections attached to actors
     * @param collectionUri - The full URI of the collection
     * @param collectionKey - The key of the collection (eg. inbox)
     */
    async getOwner(ctx) {
      const { collectionUri, collectionKey } = ctx.params;

      return ctx.call('social.store.getOwner', { collectionUri, collectionKey });
    }
  },
  hooks: {
    before: {
      '*'(ctx) {
        // If we have a pod provider, guess the dataset from the collection URI
        if (this.settings.podProvider && ctx.params.collectionUri) {
          const collectionPath = new URL(ctx.params.collectionUri).pathname;
          const parts = collectionPath.split('/');
          if (parts.length > 1) {
            [, ctx.meta.dataset] = parts;
          }
        }
      }
    }
  }
};

module.exports = CollectionService;

const { MIME_TYPES } = require('@semapps/mime-types');

const ObjectService = {
  name: 'activitypub.object',
  settings: {
    baseUri: null,
    podProvider: false,
    activateTombstones: true
  },
  dependencies: ['social.resource'],
  actions: {
    /**
     * Get a resource from the store
     * @param {Context<{ objectUri: string, actorUri: string, webId: string }>} ctx - Context object with params
     * @returns {Promise<unknown>} - Returns the resource
     */
    async get(ctx) {
      const { objectUri, actorUri, ...rest } = ctx.params;

      // If the object is already dereferenced, return it
      if (typeof objectUri !== 'string') return objectUri;

      return await ctx.call('social.resource.get', {
        resourceUri: objectUri,
        webId: actorUri,
        ...rest,
        accept: MIME_TYPES.JSON
      });
    },
    /**
     * Process an activity
     * @param {Context<{ activity: object, actorUri: string }>} ctx - Moleculer context with params
     * @returns {Promise<unknown>} - Returns the processed activity
     * @deprecated - use social.processObject instead
     */
    async process(ctx) {
      return await ctx.call('social.processObject', ctx.params);
    },
    /**
     * Create a tombstone for a resource
     * @param {Context<{ resourceUri: string, formerType: string[] }>} ctx - Moleculer context with params
     * @returns {Promise<void>} - Returns a Promise that resolves when the tombstone is created
     */
    async createTombstone(ctx) {
      await ctx.call('social.resource.createTombstone', ctx.params);
    }
  },
  events: {
    // TODO: check if this can be moved away
    async 'ldp.resource.deleted'(ctx) {
      // Check if tombstones are globally activated
      if (this.settings.activateTombstones) {
        const { resourceUri, containersUris, oldData, dataset } = ctx.params;

        const formerType = oldData.type || oldData['@type'];
        await this.actions.createTombstone(
          { resourceUri, formerType, containersUris, dataset },
          { meta: { dataset }, parentCtx: ctx }
        );
      }
    }
  }
};

module.exports = ObjectService;

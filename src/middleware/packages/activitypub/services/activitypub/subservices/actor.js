const { MIME_TYPES } = require('@semapps/mime-types');
const { waitForResource } = require('../../../utils');

/** @type {import('moleculer').ServiceSchema} */
const ActorService = {
  name: 'activitypub.actor',
  dependencies: ['activitypub.collection', 'social'],
  settings: {
    baseUri: null,
    selectActorData: null,
    podProvider: false
  },
  actions: {
    /**
     * @param {Context<{actorUri: string, webId?: string}>} ctx - Context object with params
     * @returns {Promise<Actor|void>} - Returns the actor or void if nothe actor is not found
     */
    async get(ctx) {
      const { actorUri, webId } = ctx.params;

      return await ctx.call('social.getActor', { actorUri, webId }, { parentCtx: ctx });
    },
    async getProfile(ctx) {
      const { actorUri, webId } = ctx.params;
      const actor = await this.actions.get({ actorUri, webId }, { parentCtx: ctx });

      // If the URL is not in the same domain as the actor, it is most likely not a profile
      if (actor.url && new URL(actor.url).host === new URL(actorUri).host) {
        return await ctx.call('social.resource.get', {
          resourceUri: actor.url,
          accept: MIME_TYPES.JSON,
          webId: actorUri
        });
      }
    },
    async addEndpoint(ctx) {
      const { actorUri, predicate, endpoint } = ctx.params;

      await ctx.call('social.addEndpoint', { actorUri, predicate, endpoint });
    },
    /**
     * Wait for the actor to be created and all required keys to be added.
     * @param {Context<{actorUri: string, additionalKeys?: string[], delayMs?: number, maxTries?: number}>} ctx - Context object
     * @returns {Promise<waitForResource<any>>} - Promise that resolves when the actor is created and all required keys are added
     */
    async awaitCreateComplete(ctx) {
      const { actorUri, additionalKeys = [], delayMs = 1000, maxTries = 20 } = ctx.params;
      const keysToCheck = ['publicKey', 'outbox', 'inbox', 'followers', 'following', ...additionalKeys];

      return await waitForResource(
        delayMs,
        keysToCheck,
        maxTries,
        async () => await this.actions.get({ actorUri, webId: 'system' }, { parentCtx: ctx, meta: { $cache: false } })
      );
    },
    getCollectionUri: {
      cache: true,
      async handler(ctx) {
        const { actorUri, predicate, webId } = ctx.params;
        const actor = await this.actions.get({ actorUri, webId }, { parentCtx: ctx });
        return actor && actor[predicate];
      }
    }
  }
};

module.exports = ActorService;

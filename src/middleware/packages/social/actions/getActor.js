const { MIME_TYPES } = require('@semapps/mime-types');
const fetch = require('node-fetch');

const getActor = {
  visibility: 'public',
  params: {
    actorUri: { type: 'string', optional: false },
    webId: { type: 'string', optional: true }
  },
  /**
   * Gets the actor from a remote resource
   * @param {Context<{actorUri: string, webId?: string}>} ctx - Context object with params
   * @returns {Promise<false|Actor>} - Returns the actor or false if the actor is not remote or not found
   */
  async handler(ctx) {
    const { actorUri, webId } = ctx.params;

    // If dataset is not in the meta, assume that actor is remote
    if (ctx.meta.dataset && !(await ctx.call('ldp.remote.isRemote', { resourceUri: actorUri }))) {
      try {
        // Don't return immediately the promise, or we won't be able to catch errors
        const actor = await ctx.call('ldp.resource.get', { resourceUri: actorUri, accept: MIME_TYPES.JSON, webId });
        return actor;
      } catch (e) {
        console.error(e);
        return false;
      }
    } else {
      const response = await fetch(actorUri, { headers: { Accept: 'application/json' } });
      if (!response.ok) return false;
      const actor = await response.json();
      return actor;
    }
  }
};

module.exports = getActor;

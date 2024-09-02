const urlJoin = require('url-join');

/**
 * Get the container URI based on its path
 * In Pod provider config, the webId is required to find the Pod root
 */
module.exports = {
  visibility: 'public',
  params: {
    path: { type: 'string' },
    webId: { type: 'string', optional: true }
  },
  async handler(ctx) {
    const { path, webId } = ctx.params;

    if (this.settings.podProvider) {
      const podUrl = await ctx.call('pod.getUrl', { webId });
      return urlJoin(podUrl, path);
    } else {
      return urlJoin(this.settings.baseUrl, path);
    }
  }
};

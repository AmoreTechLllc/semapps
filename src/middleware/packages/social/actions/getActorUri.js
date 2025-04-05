const { MIME_TYPES } = require('@semapps/mime-types');
const { ACTOR_TYPES } = require('@semapps/activitypub');
const urlJoin = require('url-join');
const { delay } = require('../util');

module.export = {
  visibility: 'public',
  params: {
    actorSettings: { type: 'object', optional: false }
  },
  async handler(ctx) {
    const { actorSettings } = ctx.params;

    let appsContainer;
    do {
      appsContainer = await this.broker.call('ldp.registry.getByType', { type: ACTOR_TYPES.APPLICATION });
      if (!appsContainer) {
        this.logger.warn("Waiting for a container that accepts the 'Application' type...");
        await delay(3000);
      }
    } while (!appsContainer);

    const actorExist = await this.broker.call('auth.account.usernameExists', { username: actorSettings.username });
    const containerUri = await this.broker.call('ldp.registry.getUri', { path: appsContainer.path });
    const actorUri = urlJoin(containerUri, actorSettings.username);

    // Creating the local actor 'relay'
    if (!actorExist) {
      const account = await ctx.broker.call(
        'auth.account.create',
        {
          username: actorSettings.username,
          webId: actorUri
        },
        { meta: { isSystemCall: true } }
      );

      try {
        // Wait until relay container has been created (needed for integration tests)
        let containerExist;
        do {
          containerExist = await ctx.broker.call('ldp.container.exist', { containerUri });
        } while (!containerExist);

        await ctx.broker.call('ldp.container.post', {
          containerUri,
          slug: actorSettings.username,
          resource: {
            '@context': 'https://www.w3.org/ns/activitystreams',
            type: ACTOR_TYPES.APPLICATION,
            preferredUsername: actorSettings.username,
            name: actorSettings.name
          },
          contentType: MIME_TYPES.JSON,
          webId: 'system'
        });
      } catch (e) {
        // Delete account if resource creation failed, or it may cause problems when retrying
        await this.broker.call('auth.account.remove', { id: account['@id'] });
        throw e;
      }
      return actorUri;
    }
  }
};

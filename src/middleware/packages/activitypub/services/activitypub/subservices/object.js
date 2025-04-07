const { MIME_TYPES } = require('@semapps/mime-types');
const { OBJECT_TYPES, ACTIVITY_TYPES } = require('../../../constants');

const ObjectService = {
  name: 'activitypub.object',
  settings: {
    baseUri: null,
    podProvider: false,
    activateTombstones: true
  },
  dependencies: ['ldp.resource'],
  actions: {
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
    async process(ctx) {
      let { activity, actorUri } = ctx.params;

      return await ctx.call('social.processObject', { activity, actorUri });
    },
    async createTombstone(ctx) {
      const { resourceUri, formerType } = ctx.params;
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
  },
  events: {
    async 'ldp.resource.deleted'(ctx) {
      // Check if tombstones are globally activated
      if (this.settings.activateTombstones) {
        const { resourceUri, containersUris, oldData, dataset } = ctx.params;

        // If the resource was in no container, skip...
        if (containersUris.length > 0) {
          // Check if tombstones are activated for this specific container
          const containerOptions = await ctx.call('ldp.registry.getByUri', {
            containerUri: containersUris[0],
            dataset
          });

          if (containerOptions.activateTombstones !== false && ctx.meta.activateTombstones !== false) {
            const formerType = oldData.type || oldData['@type'];
            await this.actions.createTombstone({ resourceUri, formerType }, { meta: { dataset }, parentCtx: ctx });
          }
        }
      }
    }
  }
};

module.exports = ObjectService;

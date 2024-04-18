const { MIME_TYPES } = require('@semapps/mime-types');
const { getSlugFromUri } = require('@semapps/ldp');
const { OBJECT_TYPES, ACTIVITY_TYPES, ACTOR_TYPES } = require('../../../constants');

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

      return await ctx.call('ldp.resource.get', {
        resourceUri: objectUri,
        webId: actorUri,
        ...rest,
        accept: MIME_TYPES.JSON
      });
    },
    async process(ctx) {
      let { activity, actorUri } = ctx.params;
      let activityType = activity.type || activity['@type'];
      let objectUri;

      // If an object is passed directly, first wrap it in a Create activity
      if (Object.values(OBJECT_TYPES).includes(activityType)) {
        const { to, '@id': id, ...object } = activity;
        activityType = ACTIVITY_TYPES.CREATE;
        activity = {
          '@context': object['@context'],
          type: activityType,
          to,
          actor: object.attributedTo,
          object
        };
      }

      switch (activityType) {
        case ACTIVITY_TYPES.CREATE: {
          // If the object passed is an URI, this is an announcement and there is nothing to process
          if (typeof activity.object === 'string') break;

          const types = await ctx.call('jsonld.parser.expandTypes', {
            types: activity.object.type || activity.object['@type'],
            context: activity['@context']
          });

          // Get the first matching container
          // TODO: attach to all matching containers
          const container = await ctx.call('ldp.registry.getByType', {
            type: types,
            dataset: this.settings.podProvider ? getSlugFromUri(actorUri) : undefined
          });

          if (!container)
            throw new Error(`Cannot create resource of type "${types.join(', ')}", no matching containers were found!`);

          const containerUri = await ctx.call('ldp.registry.getUri', { path: container.path, webId: actorUri });

          objectUri = await ctx.call(
            container.controlledActions?.post || 'ldp.container.post',
            {
              containerUri,
              resource: activity.object,
              contentType: MIME_TYPES.JSON,
              webId: actorUri
            },
            {
              meta: {
                skipObjectsWatcher: true // We don't want to trigger another Create action
              }
            }
          );
          break;
        }

        case ACTIVITY_TYPES.UPDATE: {
          // If the object passed is an URI, this is an announcement and there is nothing to process
          if (typeof activity.object === 'string') break;

          objectUri = activity.object['@id'] || activity.object.id;

          const { controlledActions } = await ctx.call('ldp.registry.getByUri', { resourceUri: objectUri });

          await ctx.call(
            controlledActions?.put || 'ldp.resource.put',
            {
              resource: activity.object,
              contentType: MIME_TYPES.JSON,
              webId: actorUri
            },
            {
              meta: {
                skipObjectsWatcher: true // We don't want to trigger another Create action
              }
            }
          );

          break;
        }

        case ACTIVITY_TYPES.DELETE: {
          if (activity.object) {
            const resourceUri = typeof activity.object === 'string' ? activity.object : activity.object.id;
            // If the resource is already deleted, it means it was an announcement
            if (await ctx.call('ldp.resource.exist', { resourceUri, webId: actorUri })) {
              const { controlledActions } = await ctx.call('ldp.registry.getByUri', { resourceUri });

              await ctx.call(
                controlledActions?.delete || 'ldp.resource.delete',
                { resourceUri, webId: actorUri },
                {
                  meta: {
                    skipObjectsWatcher: true // We don't want to trigger another Create action
                  }
                }
              );
            }
          } else {
            this.logger.warn('Cannot delete object as it is undefined');
          }
          break;
        }

        default:
          break;
      }

      if (objectUri) {
        activity.object = await ctx.call(
          'ldp.resource.get',
          {
            resourceUri: objectUri,
            accept: MIME_TYPES.JSON,
            webId: actorUri
          },
          { meta: { $cache: false } }
        );
      }

      return activity;
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

        // Check if tombstones are activated for this specific container
        const containerOptions = await ctx.call('ldp.registry.getByUri', {
          containerUri: containersUris[0],
          dataset
        });

        if (containerOptions.activateTombstones !== false) {
          const formerType = oldData.type || oldData['@type'];
          await this.actions.createTombstone({ resourceUri, formerType }, { meta: { dataset }, parentCtx: ctx });
        }
      }
    }
  },
  methods: {
    isLocal(uri) {
      return uri.startsWith(this.settings.baseUri);
    }
  }
};

module.exports = ObjectService;

const { namedNode, literal, triple } = require('@rdfjs/data-model');
const { arrayOf } = require('@semapps/ldp');
const { ACTOR_TYPES, AS_PREFIX } = require('@semapps/activitypub');
const { getSlugFromUri } = require('../util');

const ResourceService = {
  name: 'social.resource',
  dependencies: ['ldp.resource', 'signature'],
  settings: {
    selectActorData: null
  },
  actions: {
    get: {
      visibility: 'public',
      params: {
        resourceUri: { type: 'string' },
        webId: { type: 'string', optional: true },
        accept: { type: 'string', optional: true }
      },
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

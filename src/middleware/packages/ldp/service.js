const LdpApiService = require('./services/api');
const LdpContainerService = require('./services/container');
const LdpCacheService = require('./services/cache');
const LdpRegistryService = require('./services/registry');
const LdpRemoteService = require('./services/remote');
const LdpResourceService = require('./services/resource');

module.exports = {
  name: 'ldp',
  settings: {
    baseUrl: null,
    ontologies: [],
    containers: [],
    podProvider: false,
    mirrorGraphName: 'http://semapps.org/mirror',
    defaultContainerOptions: {},
    preferredViewForResource: null,
    resourcesWithContainerPath: true
  },
  dependencies: ['ldp.container', 'ldp.resource', 'ldp.registry'],
  async created() {
    const {
      baseUrl,
      containers,
      ontologies,
      podProvider,
      defaultContainerOptions,
      mirrorGraphName,
      preferredViewForResource,
      resourcesWithContainerPath
    } = this.settings;

    await this.broker.createService(LdpContainerService, {
      settings: {
        baseUrl,
        ontologies,
        podProvider,
        mirrorGraphName
      },
      hooks: this.schema.hooksContainer || {}
    });

    await this.broker.createService(LdpResourceService, {
      settings: {
        baseUrl,
        ontologies,
        podProvider,
        mirrorGraphName,
        preferredViewForResource,
        resourcesWithContainerPath
      },
      hooks: this.schema.hooksResource || {}
    });

    await this.broker.createService(LdpRemoteService, {
      settings: {
        baseUrl,
        ontologies,
        podProvider,
        mirrorGraphName
      }
    });

    await this.broker.createService(LdpRegistryService, {
      settings: {
        baseUrl,
        containers,
        defaultOptions: defaultContainerOptions,
        podProvider
      }
    });

    await this.broker.createService(LdpApiService, {
      settings: {
        baseUrl,
        podProvider
      }
    });

    // Only create this service if a cacher is defined
    if (this.broker.cacher) {
      await this.broker.createService(LdpCacheService);
    }
  }
};

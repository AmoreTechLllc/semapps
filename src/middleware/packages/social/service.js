const getActorUri = require('./actions/getActorUri');
const getActor = require('./actions/getActor');
const addEndpoint = require('./actions/addEndpoint');

const ResourceService = require('./services/resource');
const StoreService = require('./services/store');

const SocialService = {
  name: 'social',
  dependencies: ['ldp', 'auth'],
  settings: {},
  created() {
    this.broker.createService({
      mixins: [ResourceService]
    });
    this.broker.createService({
      mixins: [StoreService]
    });
  },
  actions: {
    getActorUri,
    getActor,
    addEndpoint
  }
};

module.exports = SocialService;

const validateSignature = require('./actions/validateSignature');
const getActorUri = require('./actions/getActorUri');
const getActor = require('./actions/getActor');
const addEndpoint = require('./actions/addEndpoint');
const processObject = require('./actions/processObject');

const ResourceService = require('./services/resource');
const StoreService = require('./services/store');
const AuthService = require('./services/auth');

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
    this.broker.createService({
      mixins: [AuthService]
    });
  },
  actions: {
    getActorUri,
    getActor,
    addEndpoint,
    processObject,
    validateSignature
  }
};

module.exports = SocialService;

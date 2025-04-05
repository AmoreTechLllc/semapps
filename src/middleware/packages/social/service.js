const getActorUri = require('./actions/getActorUri');

const SocialService = {
  name: 'social',
  dependencies: ['auth.account', 'ldp.container', 'ldp.registry'],
  settings: {},
  actions: {
    getActorUri
  }
};

module.exports = SocialService;

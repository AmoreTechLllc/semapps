const RelayService = {
  name: 'activitypub.relay',
  settings: {
    actor: {
      username: 'relay',
      name: 'Relay actor for instance'
    }
  },
  dependencies: ['activitypub', 'activitypub.follow', 'social'],
  async started() {
    const actorUri = await this.broker.call('social.getActorUri', { actorSettings: this.settings.actor });

    // Wait until the relay actor is fully created
    this.relayActor = await this.broker.call('activitypub.actor.awaitCreateComplete', { actorUri });
  },
  actions: {
    getActor: {
      visibility: 'public',
      handler() {
        return this.relayActor;
      }
    }
  }
};

module.exports = RelayService;

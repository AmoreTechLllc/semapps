const ActivitiesHandlerMixin = {
  dependencies: ['activitypub.activities-watcher'],
  async started() {
    if (!this.schema.activities || this.schema.activities.length === 0) {
      throw new Error(`ActivitiesHandlerMixin: no activities defined in the service ${this.name}`);
    }

    for (const [key, activityHandler] of Object.entries(this.schema.activities)) {
      const boxTypes = [];
      if (activityHandler.onReceive) boxTypes.push('inbox');
      if (activityHandler.onEmit) boxTypes.push('outbox');

      await this.broker.call('activitypub.activities-watcher.watch', {
        matcher: typeof activityHandler.match === 'function' ? activityHandler.match.bind(this) : activityHandler.match,
        actionName: `${this.name}.processActivity`,
        boxTypes,
        key
      });
    }
  },
  actions: {
    async processActivity(ctx) {
      const { key, boxType, dereferencedActivity, actorUri } = ctx.params;

      const activityHandler = this.schema.activities[key];

      if (!activityHandler) {
        this.logger.warn(`Cannot process activity because no handler with key ${key} found`);
        return;
      }

      ctx.meta.webId = actorUri;

      if (boxType === 'inbox' && activityHandler.onReceive) {
        await activityHandler.onReceive.bind(this)(ctx, dereferencedActivity, actorUri);
      } else if (boxType === 'outbox' && activityHandler.onEmit) {
        await activityHandler.onEmit.bind(this)(ctx, dereferencedActivity, actorUri);
      } else {
        this.logger.warn(
          `Cannot process activity because no onReceive or onEmit methods are associated with with key ${key}`
        );
      }
    }
  }
};

module.exports = ActivitiesHandlerMixin;

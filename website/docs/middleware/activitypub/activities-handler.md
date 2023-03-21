---
title: ActivitiesHandlerMixin
---

Watch for ActivityPub activities matching certain patterns and easily handle side effects.


## Usage

```js
const { ActivitiesHandlerMixin, ACTIVITY_TYPES, OBJECT_TYPES } = require('@semapps/activitypub');

module.exports = {
  mixins: [ActivitiesHandlerMixin],
  activities: {
    joinEvent: {
      match: {
        type: ACTIVITY_TYPES.JOIN,
        object: {
          type: OBJECT_TYPES.EVENT
        }
      },
      async onEmit(ctx, activity, emitterUri) {
        // Handle side effects on emit
      },
      async onReceive(ctx, activity, recipients) {
        // Handle side effects on receive
      }
    },
    myAnnounceActivity: {
      async match(activity) {
        if (activity.actor !== 'http://localhost:3000/myself') {
          return false;
        } else {
          const dereferenceActivityOrFalse = await this.matchActivity({ type: ACTIVITY_TYPES.ANNOUNCE }, activity);
          return dereferenceActivityOrFalse;
        }
      },
      async onEmit(ctx, activity, emitterUri) {
        // Handle side effects on emit
      },
      async onReceive(ctx, activity, recipients) {
        // Handle side effects on receive
      }
    }
  }
};
```

> The `activity` object passed to the `onEmit` and `onReceive` functions is dereferenced according to the pattern. In the above case, the Event object will be dereferenced, even if on the original activity, it included only an URI. If you use a function for the `match` property, the value you return will passed to the `onEmit` and `onReceive` functions.

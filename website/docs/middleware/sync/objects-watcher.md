---
title: ObjectsWatcherMiddleware
---

Watch for changes (create / update / delete) in the LDP server and send corresponding ActivityPub activities.
If a private data becomes public, it is considered a new resource. 
If a public data becomes private, it is considered as being deleted. 


## Features

- Watch for changes to the LDP servers (create, patch, put, delete...)
- Generate corresponding ActivityPub activities (Create, Update, Delete)
- Send them through the instance (Relay) actor or, in POD provider config, through the Pod actor.
- Send them to:
    - All actors who have read permissions on the resource
    - Emitter followers and [as:Public](https://www.w3.org/TR/activitypub/#public-addressing)


## Usage

```js
const { ObjectsWatcherMiddleware } = require('@semapps/sync');
module.exports = {
  middlewares: [
    CacherMiddleware({ ... }),
    WebAclMiddleware({ baseUrl: CONFIG.HOME_URL, podProvider: false }),
    ObjectsWatcherMiddleware({ podProvider: false }) // This middleware should come after the WebAclMiddleware
  ],
  ...
};
```

### Excluding containers

If you don't want a container with public data to be mirrored, you can add the `excludeMirror: true` option.

This choice will appear on the [VoID endpoint](../void.md), so that mirrors ignore them.


## Settings

| Property          | Type      | Default | Description                                      |
|-------------------|-----------|---------|--------------------------------------------------|
| `podProvider`     | `Boolean` | false   | If your instance is a Pods provider, set to true |            



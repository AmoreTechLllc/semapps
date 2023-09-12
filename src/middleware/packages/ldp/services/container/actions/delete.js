module.exports = {
  visibility: 'public',
  params: {
    containerUri: 'string',
    webId: { type: 'string', optional: true },
  },
  async handler(ctx) {
    const { containerUri } = ctx.params;
    const webId = ctx.params.webId || ctx.meta.webId || 'anon';

    await ctx.call('triplestore.update', {
      query: `
        DELETE
        WHERE {
          <${containerUri}> ?p1 ?o1 .
        }
      `,
      webId,
    });

    // Detach the container from parent containers after deletion, otherwise the permissions may fail
    const parentContainers = await ctx.call('ldp.resource.getContainers', { resourceUri: containerUri });
    for (const parentContainerUri of parentContainers) {
      await ctx.call('ldp.container.detach', {
        containerUri: parentContainerUri,
        resourceUri: containerUri,
        webId: 'system',
      });
    }

    const returnValues = {
      containerUri,
      webId,
    };

    ctx.emit('ldp.container.deleted', returnValues, { meta: { webId: null } });

    return returnValues;
  },
};

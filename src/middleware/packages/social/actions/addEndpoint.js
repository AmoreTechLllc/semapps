const { namedNode, triple, variable } = require('@rdfjs/data-model');

const addEndpoint = {
  visibility: 'public',
  params: {
    actorUri: { type: 'string', optional: false },
    predicate: { type: 'string', optional: false },
    endpoint: { type: 'string', optional: false }
  },
  async handler(ctx) {
    const { actorUri, predicate, endpoint } = ctx.params;

    const account = await ctx.call('auth.account.findByWebId', { webId: actorUri });
    const dataset = account.username;

    await ctx.call('triplestore.update', {
      query: {
        type: 'update',
        updates: [
          {
            updateType: 'insertdelete',
            insert: [
              {
                type: 'bgp',
                triples: [
                  triple(
                    namedNode(actorUri),
                    namedNode('https://www.w3.org/ns/activitystreams#endpoints'),
                    variable('endpoints')
                  ),
                  triple(variable('endpoints'), namedNode(predicate), namedNode(endpoint))
                ]
              }
            ],
            delete: [],
            where: [
              {
                type: 'optional',
                patterns: [
                  {
                    type: 'bgp',
                    triples: [
                      triple(
                        namedNode(actorUri),
                        namedNode('https://www.w3.org/ns/activitystreams#endpoints'),
                        variable('b0')
                      )
                    ]
                  }
                ]
              },
              {
                type: 'bind',
                variable: variable('endpoints'),
                expression: {
                  type: 'operation',
                  operator: 'if',
                  args: [
                    {
                      type: 'operation',
                      operator: 'bound',
                      args: [variable('b0')]
                    },
                    variable('b0'),
                    {
                      type: 'operation',
                      operator: 'BNODE',
                      args: []
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      webId: 'system',
      dataset
    });
  }
};

module.exports = addEndpoint;

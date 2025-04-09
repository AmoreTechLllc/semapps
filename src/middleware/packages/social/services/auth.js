const AuthService = {
  name: 'social.auth',
  dependencies: ['auth.account'],
  settings: {},
  actions: {
    findByWebId: {
      visibility: 'public',
      params: {
        webId: { type: 'string' }
      },
      async handler(ctx) {
        const { webId } = ctx.params;
        return await ctx.call('auth.account.findByWebId', { webId });
      }
    }
  }
};

module.exports = AuthService;

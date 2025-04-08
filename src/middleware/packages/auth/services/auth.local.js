const path = require('path');
const { Strategy } = require('passport-local');
const AuthMixin = require('../mixins/auth');
const sendToken = require('../middlewares/sendToken');
const { MoleculerError } = require('moleculer').Errors;
const AuthMailService = require('./mail');

/** @type {import('moleculer').ServiceSchema} */
const AuthLocalService = {
  name: 'auth',
  mixins: [AuthMixin],
  settings: {
    baseUrl: null,
    jwtPath: null,
    registrationAllowed: true,
    reservedUsernames: [],
    minPasswordLength: 1,
    minUsernameLength: 1,
    webIdSelection: [],
    accountSelection: [],
    formUrl: null,
    mail: {
      from: null,
      transport: {
        host: null,
        port: null
      },
      defaults: {
        locale: null,
        frontUrl: null
      }
    }
  },
  dependencies: ['webid'],
  async created() {
    const { mail } = this.settings;

    this.passportId = 'local';

    if (mail !== false) {
      this.broker.createService({
        mixins: [AuthMailService],
        settings: {
          ...mail
        }
      });
    }
  },
  actions: {
    async signup(ctx) {
      const { username, email, password, ...rest } = ctx.params;

      // This is going to get in our way otherwise when waiting for completions.
      ctx.meta.skipObjectsWatcher = true;

      let accountData = await ctx.call('auth.account.create', {
        username,
        email,
        password,
        ...this.pickAccountData(rest)
      });

      try {
        const profileData = { nick: accountData.username, email: accountData.email, ...rest };
        const webId = await ctx.call('webid.createWebId', this.pickWebIdData(profileData), {
          meta: {
            isSignup: true // Allow services to handle directly the webId creation if it is generated by the AuthService
          }
        });

        // Link the webId with the account
        accountData = await ctx.call('auth.account.attachWebId', { accountUri: accountData['@id'], webId });

        ctx.emit('auth.registered', { webId, profileData, accountData });

        const token = await ctx.call('auth.jwt.generateServerSignedToken', { payload: { webId } });

        return { token, webId, newUser: true };
      } catch (e) {
        // Delete account if resource creation failed, or it may cause problems when retrying
        await ctx.call('auth.account.remove', { id: accountData['@id'] });
        throw e;
      }
    },
    async login(ctx) {
      const { username, password } = ctx.params;

      const accountData = await ctx.call('auth.account.verify', { username, password });

      ctx.emit('auth.connected', { webId: accountData.webId, accountData }, { meta: { webId: null, dataset: null } });

      const token = await ctx.call('auth.jwt.generateServerSignedToken', { payload: { webId: accountData.webId } });

      return { token, webId: accountData.webId, newUser: false };
    },
    async logout(ctx) {
      ctx.meta.$statusCode = 302;
      ctx.meta.$location = ctx.params.redirectUrl || this.settings.formUrl;
      ctx.emit('auth.disconnected', { webId: ctx.meta.webId });
    },
    async redirectToForm(ctx) {
      if (this.settings.formUrl) {
        const formUrl = new URL(this.settings.formUrl);
        if (ctx.params) {
          for (const [key, value] of Object.entries(ctx.params)) {
            formUrl.searchParams.set(key, value);
          }
        }
        ctx.meta.$statusCode = 302;
        ctx.meta.$location = formUrl.toString();
      } else {
        throw new Error('No formUrl defined in auth.local settings');
      }
    },
    async resetPassword(ctx) {
      const { email } = ctx.params;

      const account = await ctx.call('auth.account.findByEmail', { email });

      if (!account) {
        throw new MoleculerError('email.not.exists', 400, 'BAD_REQUEST');
      }

      const token = await ctx.call('auth.account.generateResetPasswordToken', { webId: account.webId });

      await ctx.call('auth.mail.sendResetPasswordEmail', {
        account,
        token
      });
    },
    async setNewPassword(ctx) {
      const { email, token, password } = ctx.params;

      const account = await ctx.call('auth.account.findByEmail', { email });

      if (!account) {
        throw new MoleculerError('email.not.exists', 400, 'BAD_REQUEST');
      }

      await ctx.call('auth.account.setNewPassword', { webId: account.webId, token, password });
    }
  },
  methods: {
    getStrategy() {
      return new Strategy(
        {
          passReqToCallback: true // We want to have access to req below
        },
        (req, username, password, done) => {
          req.$ctx
            .call('auth.login', req.$params)
            .then(returnedData => {
              done(null, returnedData);
            })
            .catch(e => {
              done(new MoleculerError(e.message, 401), false);
            });
        }
      );
    },
    getApiRoutes(basePath) {
      const loginRoute = {
        path: path.join(basePath, '/auth/login'),
        name: 'auth-login',
        use: [this.passport.initialize()],
        aliases: {
          'POST /': [this.passport.authenticate(this.passportId, { session: false }), sendToken]
        }
      };

      const logoutRoute = {
        path: path.join(basePath, '/auth/logout'),
        name: 'auth-logout',
        aliases: {
          'GET /': 'auth.logout'
        }
      };

      const signupRoute = {
        path: path.join(basePath, '/auth/signup'),
        name: 'auth-signup',
        aliases: {
          'POST /': 'auth.signup'
        }
      };

      const formRoute = {
        path: path.join(basePath, '/auth'),
        name: 'auth',
        aliases: {
          'GET /': 'auth.redirectToForm'
        }
      };

      const resetPasswordRoute = {
        path: path.join(basePath, '/auth/reset_password'),
        name: 'auth-reset-password',
        aliases: {
          'POST /': 'auth.resetPassword'
        }
      };
      const setNewPasswordRoute = {
        path: path.join(basePath, '/auth/new_password'),
        name: 'auth-new-password',
        aliases: {
          'POST /': 'auth.setNewPassword'
        }
      };

      const accountSettingsRoute = {
        path: path.join(basePath, '/auth/account'),
        name: 'auth-account',
        aliases: {
          'GET /': 'auth.account.findSettingsByWebId',
          'POST /': 'auth.account.updateAccountSettings'
        },
        authorization: true
      };

      const routes = [
        loginRoute,
        logoutRoute,
        formRoute,
        resetPasswordRoute,
        setNewPasswordRoute,
        accountSettingsRoute
      ];

      if (this.settings.registrationAllowed) {
        return [...routes, signupRoute];
      }

      return routes;
    }
  }
};

module.exports = AuthLocalService;

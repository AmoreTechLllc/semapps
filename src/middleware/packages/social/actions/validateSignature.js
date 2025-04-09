const { Errors: E } = require('moleculer-web');

const validateSignature = {
  visibility: 'public',
  description: 'Validates the signature of a POST request',
  dependencies: ['signature'],
  params: {
    meta: {
      type: 'object',
      minProps: 1,
      props: {
        rawBody: { type: 'string', optional: true },
        originalHeaders: { type: 'object', optional: true }
      }
    },
    collectionUri: { type: 'string' }
  },
  async handler(ctx) {
    const { meta, collectionUri } = ctx.params;
    if (!meta.rawBody || !meta.originalHeaders)
      throw new Error(`Cannot validate HTTP signature because of missing meta (rawBody or originalHeaders)`);

    const validDigest = await ctx.call('signature.verifyDigest', {
      body: meta.rawBody, // Stored by parseJson middleware
      headers: meta.originalHeaders
    });

    const { isValid: validSignature } = await ctx.call('signature.verifyHttpSignature', {
      url: collectionUri,
      method: 'POST',
      headers: meta.originalHeaders
    });

    if (!validDigest || !validSignature) {
      throw new E.UnAuthorizedError('INVALID_SIGNATURE');
    }
  }
};

module.exports = validateSignature;

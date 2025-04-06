/**
 * Delay the execution of the function by t ms
 * @param {number} t - time in ms to wait
 * @returns {Promise<void>}
 */
async function delay(t) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), t);
  });
}

/**
 * Get the slug from a uri
 * @param {string} uri - given uri
 * @returns {string} slug
 */
function getSlugFromUri(uri) {
  return uri.match(new RegExp(`.*/(.*)`))[1];
}

module.exports = {
  delay,
  getSlugFromUri
};

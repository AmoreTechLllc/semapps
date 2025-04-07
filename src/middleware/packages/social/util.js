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

const getValueFromDataType = result => {
  switch (result.datatype?.value) {
    case 'http://www.w3.org/2001/XMLSchema#boolean':
      return result.value === 'true';

    case 'http://www.w3.org/2001/XMLSchema#integer':
      return parseInt(result.value, 10);

    default:
      return result.value;
  }
};

module.exports = {
  delay,
  getSlugFromUri,
  getValueFromDataType
};

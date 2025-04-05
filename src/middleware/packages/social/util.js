async function delay(t) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), t);
  });
}

module.exports = {
  delay
};

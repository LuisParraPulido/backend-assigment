

module.exports = (injectedStore) => {
  let store = injectedStore;

  if(!store) {
    store = require('../../../store/dummy');
  }

  async function report() {
    return true
  }

  return {
    report,
  };
};

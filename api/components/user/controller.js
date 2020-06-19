

module.exports = (injectedStore) => {
  let store = injectedStore;

  if(!store) {
    store = require('../../../store/dummy');
  }

  async function report(body) {
    if(!body.problem) {
      throw new Error('There is not data')
    }
    const response = await store.report(body);
    return response;
  };

  return {
    report,
  };
};

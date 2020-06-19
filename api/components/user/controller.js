

module.exports = (injectedStore) => {
  let store = injectedStore;

  if(!store) {
    store = require('../../../store/dummy');
  }

  async function report(body) {
    if(!body.problem) {
      throw new Error('There is not data')
    }
    const problem = {
      info: body.problem,
      resolve: false,
    }
    const response = await store.report(problem);
    const agent = await asignProblem(response.id);
    return response;
  };

  async function asignProblem(id) {
    if(!id) {
      throw new Error('There is not id');
    }
    const asing = await store.asing(id);
    return asing;
  }

  async function resolve(body, agentId) {
    if(!body.answer || !body.problemId || !agentId) {
      throw new Error('There is not data');
    }
    const response = await store.resolve(body, agentId);
    return response;
  };

  async function list(collection) {
    if(!collection) {
      throw new Error('There is not data');
    }
    const list = await store.list(collection);
    return list;
  }

  return {
    report,
    resolve,
    list,
  };
};

const db = {
  agents: [
    {
      _id: '1',
      agent: '1',
      free: false,
      problemId: '1'
    },
    {
      _id: '2',
      agent: '2',
      free: true,
    }
  ],
  problems: [
    {
      _id: '1',
      info: 'bug',
      resolve: false,
    }
  ]
}

async function report(problem) {
  problem._id = 2
  db['problems'].push(problem);
  return problem;
}

async function asing(id) {
  const agent = db['agents'].filter(agent => agent.free === true)
  agent[0].problemId = id;
  agent[0].free = false;
  return agent
}

async function resolve(data, angetId) {
  return data.problemId
}

async function list(data) {
  return db[data.collection] || [];
}

async function create(data) {
  return data;
}


module.exports = {
  report,
  asing,
  resolve,
  list,
  create,
};
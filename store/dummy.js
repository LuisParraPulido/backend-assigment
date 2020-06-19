const db = {
  agents: [
    {
      id: '1',
      agent: '1',
      free: false,
      problemId: '1'
    },
    {
      id: '2',
      agent: '2',
      free: true,
    }
  ],
  problems: [
    {
      id: '1',
      info: 'bug',
      resolve: false,
    }
  ]
}

async function report(problem) {
  problem.id = '2';
  db['problems'].push(problem);
  return problem;
}

async function asing(id) {
  const agent = db['agents'].filter(agent => agent.free === true)
  agent[0].problemId = id;
  agent[0].free = false;
  return agent
}

async function resolve(answer, angetId) {
  const agent = db['agents'].filter(agent => agent.id === angetId)
  const problem = db['problems'].filter(problem => problem.id === answer.problemId)
  agent[0].free = true;
  agent[0].problemId = '';
  problem[0].resolve = true;
  problem[0].answer = answer.answer;
  const response = {
    problem,
    agent
  }
  return response
}

async function list(data) {
  return db[data.collection] || [];
}


module.exports = {
  report,
  asing,
  resolve,
  list,
};
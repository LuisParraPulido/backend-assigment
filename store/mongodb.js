const db = require('mongoose');
const config = require('../config');

const { AgentModel } = require('../api/components/user/model');
const { ProblemModel } = require('../api/components/user/model');

db.Promise = global.Promise;

db.connect(
  `mongodb+srv://${config.database.user}:${config.database.pass}@${config.database.host}/${config.database.name}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

console.info('[DB Connection] successfully');

async function report(problem) {
  const newProblem = new ProblemModel(problem)
  return newProblem.save()
}

async function asing(id) {
  const data = {
    free: false,
    problemId: id,
  }
  const agent = await AgentModel.updateOne({ free: true }, data)
  return agent
}

async function resolve(data, angetId) {
  const { problemId, answer } = data
  const agent = await AgentModel.updateOne({ _id: angetId }, { free: true, problemId: '' });
  const problem = await ProblemModel.updateOne({ _id: problemId }, { resolve: true, answer: answer });
  return problemId;
}

async function list(data) {
  if(data.collection === 'agents') {
    const agents = AgentModel.find();
    return agents;
  }
  if(data.collection === 'problems') {
    const problems = ProblemModel.find();
    return problems;
  }
}

async function create(data) {
  const agent = new AgentModel(data);
  return agent.save();
}


module.exports = {
  report,
  asing,
  resolve,
  list,
  create,
};
const mongoose = require('mongoose');

const { Schema } = mongoose;

const agentSchema = new Schema({
  name: String,
  free: Boolean,
  problemId: String,
});

const problemSchema = new Schema({
  info: String,
  resolve: Boolean,
  answer: String,
});

const AgentModel = mongoose.model('agent', agentSchema);
const ProblemModel = mongoose.model('problem', problemSchema);
module.exports = {
  AgentModel,
  ProblemModel,
};

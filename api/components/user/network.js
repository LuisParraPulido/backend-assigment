const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

function list(req, res) {
  const { query } = req;
  Controller.list(query)
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((error) => {
      response.error(req, res, error.message, 500);
    });
}

function reportProblem(req, res) {
  const problem = req.body;
  Controller.report(problem)
    .then((list) => {
      response.success(req, res, list, 201);
    })
    .catch((error) => {
      response.error(req, res, error.message, 500);
    });
};

function resolveProblem(req, res) {
  const answer = req.body;
  const { agentId } = req.params;
  Controller.resolve(answer, agentId)
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((error) => {
      response.error(req, res, error.message, 500);
    });
};

function createAgent(req, res) {
  const agent = req.body;
  Controller.create(agent)
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((error) => {
      response.error(req, res, error.message, 500);
    });
}
 
router.post('/agent', createAgent);
router.get('/list', list);
router.post('/user', reportProblem);
router.post('/agent/:agentId', resolveProblem);

module.exports = router;
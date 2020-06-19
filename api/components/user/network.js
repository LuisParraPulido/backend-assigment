const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');
const { Router } = require('express');

const router = express.Router();

function reportProblem(req, res) {
  const problem = req.body
  Controller.report(problem)
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((error) => {
      response.error(req, res, error.message, 500);
    });
};

router.post('/user', reportProblem);

module.exports = router;
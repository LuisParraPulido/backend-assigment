const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const config = require('../config');
const user = require('./components/user/network');

app.use(cors())
app.use(bodyParser.json());

//Routes
app.use(user);

app.listen(config.api.port, () => {
  console.log(`App listening at ${config.api.host}:${config.api.port}`);
});
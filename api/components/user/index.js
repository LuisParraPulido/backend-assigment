const controller = require('./controller');
// const store = require('../../../store/dummy');
const store = require('../../../store/mongodb');

module.exports = controller(store);

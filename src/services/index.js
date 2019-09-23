const rfids = require('./rfids/rfids.service.js');
const logs = require('./logs/logs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(rfids);
  app.configure(logs);
};

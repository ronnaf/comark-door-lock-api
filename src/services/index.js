const rfids = require('./rfids/rfids.service.js');
const logs = require('./rfid-logs/logs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(rfids);
  app.configure(logs);
};

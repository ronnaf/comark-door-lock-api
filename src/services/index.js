const rfids = require('./rfids/rfids.service.js');
const rfidLogs = require('./rfid-logs/rfid-logs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(rfids);
  app.configure(rfidLogs);
};

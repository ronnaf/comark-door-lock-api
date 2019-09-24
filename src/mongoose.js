const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  mongoose.connect(
    'mongodb://ronna-v2:JP8_uX3Pc6FQkBd@ds055722.mlab.com:55722/comark-door-lock-db',
    { useCreateIndex: true, useNewUrlParser: true }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};

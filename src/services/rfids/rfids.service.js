// Initializes the `rfids` service on path `/rfids`
const { Rfids } = require('./rfids.class');
const createModel = require('../../models/rfids.model');
const hooks = require('./rfids.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate: {
      default: 50,
      max: 100
    }
  };

  // Initialize our service with any options it requires
  app.use('/rfids', new Rfids(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('rfids');

  service.hooks(hooks);
};

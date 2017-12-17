// Initializes the `sensordata` service on path `/sensordata`
const createService = require('feathers-mongodb');
const hooks = require('./sensordata.hooks');
const filters = require('./sensordata.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/sensordata', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sensordata');

  mongoClient.then(db => {
    service.Model = db.collection('sensordata');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};

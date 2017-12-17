// Initializes the `materials` service on path `/materials`
const createService = require('feathers-mongodb');
const hooks = require('./materials.hooks');
const filters = require('./materials.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/materials', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('materials');

  mongoClient.then(db => {
    service.Model = db.collection('materials');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};

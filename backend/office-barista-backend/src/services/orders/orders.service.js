// Initializes the `orders` service on path `/orders`
const createService = require('feathers-mongodb');
const hooks = require('./orders.hooks');
const filters = require('./orders.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/orders', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('orders');

  mongoClient.then(db => {
    service.Model = db.collection('orders');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};

// Initializes the `favProducts` service on path `/fav-products`
const createService = require('feathers-mongodb');
const hooks = require('./fav-products.hooks');
const filters = require('./fav-products.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/fav-products', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('fav-products');

  mongoClient.then(db => {
    service.Model = db.collection('fav-products');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};

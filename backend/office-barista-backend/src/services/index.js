const users = require('./users/users.service.js');
const orders = require('./orders/orders.service.js');
const favProducts = require('./fav-products/fav-products.service.js');
const materials = require('./materials/materials.service.js');
const sensordata = require('./sensordata/sensordata.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(orders);
  app.configure(favProducts);
  app.configure(materials);
  app.configure(sensordata);
};

const { authenticate } = require('feathers-authentication').hooks;
const { populate, dePopulate } = require('feathers-hooks-common');

const makeCoffee = require('../../hooks/make-coffee');

const buyerUserSchema = {
  include: {
    service: 'users',
    nameAs: 'user',
    parentField: 'buyer',
    childField: '_id'
  }
};


module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [populate({schema: buyerUserSchema}), makeCoffee(), dePopulate()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

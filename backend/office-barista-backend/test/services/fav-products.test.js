const assert = require('assert');
const app = require('../../src/app');

describe('\'favProducts\' service', () => {
  it('registered the service', () => {
    const service = app.service('fav-products');

    assert.ok(service, 'Registered the service');
  });
});

const assert = require('assert');
const app = require('../../src/app');

describe('\'sensordata\' service', () => {
  it('registered the service', () => {
    const service = app.service('sensordata');

    assert.ok(service, 'Registered the service');
  });
});

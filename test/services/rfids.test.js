const app = require('../../src/app');

describe('\'rfids\' service', () => {
  it('registered the service', () => {
    const service = app.service('rfids');
    expect(service).toBeTruthy();
  });
});

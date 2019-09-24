const app = require('../../src/app');

describe('\'rfid-logs\' service', () => {
  it('registered the service', () => {
    const service = app.service('logs');
    expect(service).toBeTruthy();
  });
});

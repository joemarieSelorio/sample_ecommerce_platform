const SystemError = require('../../../api/responses/SystemError');
const fixtures = require('./fixtures/HttpErrorConfig.json');


describe('#SystemError', () => {
  describe('#constructor', () => {
    it('should return an instance of SystemError ' +
    'with default values', () => {
      const errorObj = new SystemError();
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('code');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.message).toBe(fixtures.defaultMessage);
    });
    it('should return an instance of SystemError ' +
    'with default timestamp, custom code, status and custom message',
    () => {
      const customMessage = 'This is a custom message';
      const errorObj = new SystemError(customMessage);
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('code');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.message).toBe(customMessage);
    });
  });
});

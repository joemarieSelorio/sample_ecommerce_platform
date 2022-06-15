const ValidationError = require('../../../api/responses/ValidationError');
const fixtures =
  require('./fixtures/ValidationErrorConfig');

describe('#ValidationError', () => {
  describe('#constructor', () => {
    it('should return an instance of ValidationError ' +
    'with default message and no error array', () => {
      const errorObj = new ValidationError();
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.message).toBe(fixtures.defaultMessage);
    });
    it('should return an instance of ValidationError ' +
    'with custom message and no error array', () => {
      const customMessage = 'This is a custom message';
      const errorObj = new ValidationError(customMessage);
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.message).toBe(customMessage);
    });
    it('should return an instance of ValidationError ' +
    'with default message and with error array for body fields', () => {
      const errorObj =
        new ValidationError(undefined, fixtures.errorArrBody);
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj).toHaveProperty('errors');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.message).toBe(fixtures.defaultMessage);
    });
    it('should return an instance of ValidationError ' +
    'with default message and with error array for path fields', () => {
      const errorObj =
        new ValidationError(undefined, fixtures.errorArrPath);
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj).toHaveProperty('errors');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.message).toBe(fixtures.defaultMessage);
    });
  });
});

const HttpError = require('../../../api/responses/HttpError');
const fixtures = require('./fixtures/HttpErrorConfig.json');

describe('#HttpError', () => {
  describe('#constructor', () => {
    test('should return an instance of HttpError ' +
    'with default values', () => {
      const errorObj = new HttpError();
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('code');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.message).toBe(fixtures.defaultMessage);
    });
    test('should return an instance of HttpError ' +
    'with custom timestamp, default code, status and message', () => {
      const customTimestamp = new Date('2019-01-10');
      const errorObj = new HttpError(customTimestamp);
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('code');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj.timestamp).toBe(customTimestamp);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.message).toBe(fixtures.defaultMessage);
    });
    test('should return an instance of HttpError ' +
    'with default timestamp, code, custom status and default message',
    () => {
      const customStatus = 100;
      const errorObj = new HttpError(undefined, customStatus);
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('code');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.code).toBe(fixtures.defaultCode);
      expect(errorObj.status).toBe(customStatus);
      expect(errorObj.message).toBe(fixtures.defaultMessage);
    });
    test('should return an instance of HttpError ' +
    'with default timestamp, custom code, default status and message',
    () => {
      const customCode = 1111;
      const errorObj = new HttpError(undefined, undefined, customCode);
      expect(errorObj).toHaveProperty('timestamp');
      expect(errorObj).toHaveProperty('code');
      expect(errorObj).toHaveProperty('message');
      expect(errorObj).toHaveProperty('status');
      expect(errorObj.timestamp).toBeInstanceOf(Date);
      expect(errorObj.code).toBe(customCode);
      expect(errorObj.status).toBe(fixtures.defaultStatus);
      expect(errorObj.message).toBe(fixtures.defaultMessage);
    });
    test('should return an instance of HttpError ' +
    'with default timestamp, custom code, status and custom message',
    () => {
      const customMessage = 'This is a custom message';
      const errorObj = new HttpError(undefined, undefined,
          undefined, customMessage);
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

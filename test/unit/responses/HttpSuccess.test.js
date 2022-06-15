const HttpSuccess = require('../../../api/responses/HttpSuccess');
const fixtures =
  require('./fixtures/HttpSuccessConfig.json');


describe('#HttpSuccess', () => {
  describe('#constructor', () => {
    test('should return an instance of HttpSuccess ' +
    'with default status, message and no additionalData', () => {
      const successObj = new HttpSuccess();
      expect(successObj).toHaveProperty('timestamp');
      expect(successObj).toHaveProperty('status');
      expect(successObj).toHaveProperty('message');
      expect(successObj.timestamp).toBeInstanceOf(Date);
      expect(successObj.status).toBe(fixtures.defaultStatus);
      expect(successObj.message).toBe(fixtures.defaultMessage);
    });
    test('should return an instance of HttpSuccess ' +
    'with default status, message and with additionalData', () => {
      const successObj = new HttpSuccess(undefined,
          undefined, fixtures.validAdditionalData);
      expect(successObj).toHaveProperty('timestamp');
      expect(successObj).toHaveProperty('status');
      expect(successObj).toHaveProperty('message');
      expect(successObj).toHaveProperty('key');
      expect(successObj.timestamp).toBeInstanceOf(Date);
      expect(successObj.status).toBe(fixtures.defaultStatus);
      expect(successObj.message).toBe(fixtures.defaultMessage);
      expect(successObj.key).toBe(fixtures.validAdditionalData.key);
    });
    test('should return an instance of HttpSuccess ' +
    'with custom status, default message', () => {
      const customStatus = 100;
      const successObj = new HttpSuccess(customStatus);
      expect(successObj).toHaveProperty('timestamp');
      expect(successObj).toHaveProperty('status');
      expect(successObj).toHaveProperty('message');
      expect(successObj.timestamp).toBeInstanceOf(Date);
      expect(successObj.status).toBe(customStatus);
      expect(successObj.message).toBe(fixtures.defaultMessage);
    });
    test('should return an instance of HttpSuccess ' +
    'with default status, custom message', () => {
      const customMessage = 'This is a custom message';
      const successObj = new HttpSuccess(undefined, customMessage);
      expect(successObj).toHaveProperty('timestamp');
      expect(successObj).toHaveProperty('status');
      expect(successObj).toHaveProperty('message');
      expect(successObj.timestamp).toBeInstanceOf(Date);
      expect(successObj.status).toBe(fixtures.defaultStatus);
      expect(successObj.message).toBe(customMessage);
    });
  });
});

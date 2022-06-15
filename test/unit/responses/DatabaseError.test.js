const DatabaseError = require('../../../api/responses/DatabaseError');
const fixtures =
  require('./fixtures/DatabaseErrorConfig.json');

describe('#DatabaseError', () => {
  describe('#constructor', () => {
    test(
        'should return an instance of DatabaseError with default values',
        () => {
          const errorObj = new DatabaseError();
          expect(errorObj).toHaveProperty('timestamp');
          expect(errorObj).toHaveProperty('code');
          expect(errorObj).toHaveProperty('message');
          expect(errorObj).toHaveProperty('status');
          expect(errorObj.timestamp).toBeInstanceOf(Date);
          expect(errorObj.code).toBe(fixtures.defaultCode);
          expect(errorObj.status).toBe(fixtures.defaultStatus);
          expect(errorObj.message).toBe(fixtures.defaultMessage);
        }
    );
    test(
        'should return an instance of DatabaseError ' +
        'with default timestamp, custom code, status and custom message',
        () => {
          const customMessage = 'This is a custom message';
          const errorObj = new DatabaseError(customMessage);
          expect(errorObj).toHaveProperty('timestamp');
          expect(errorObj).toHaveProperty('code');
          expect(errorObj).toHaveProperty('message');
          expect(errorObj).toHaveProperty('status');
          expect(errorObj.timestamp).toBeInstanceOf(Date);
          expect(errorObj.code).toBe(fixtures.defaultCode);
          expect(errorObj.status).toBe(fixtures.defaultStatus);
          expect(errorObj.message).toBe(customMessage);
        }
    );
  });
});

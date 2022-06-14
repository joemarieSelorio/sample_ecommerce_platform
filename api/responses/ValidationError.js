const HttpError = require('./HttpError');
const {compact, map} = require('lodash');

/**
 * Class to provide uniform instance/formatting for validation error responses
 * @module ValidationError
 */
class ValidationError extends HttpError {
  /**
   * @constructor
   * @param {string} message - Custom error message
   * @param {array} errorArr - AJV validation errors array,
   * see https://github.com/epoberezkin/ajv#validation-errors
   */
  constructor(message = 'Validation Error', errorArr) {
    super(new Date(), 400, 9997, message);
    if (errorArr) {
      this.errors = compact(
          map(errorArr, (obj) => {
            return {
              errCode: obj.code,
              errMessage: obj.message,
              path: obj.path,
            };
          })
      );
    }
  }
}

module.exports = ValidationError;

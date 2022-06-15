require('dotenv').config();

const TAG = '[MongoDBService]';
const log = require('../utilities/LoggerUtil');
const ValidationError = require('../responses/ValidationError');
const DatabaseError = require('../responses/DatabaseError');
const mongoose = require('mongoose');


const DUPLICATE_ERROR = 11000;


class MongoDBService {
  /**
   * construct mongoDB service from a schema.
   *
   * @param {Object} schema:
   * Required object attributes: {
   *   name: 'collection name',
   *   schema: 'mongoose schema object',
   * }
   */
     constructor(schema) {
      this.schema = schema;
      this.model = mongoose.model(schema.name, schema.schema);
    }

    /**
   * Get a document
   * @param {Object} filter - query filter.
   * @param {String} fields - fields to return.
   */
     async findOne(filter, fields) {
      const METHOD = '[findOne]';
      log.info(`${TAG} ${METHOD} [${this.schema.name}]`);
  
      try {
        return this.model
            .findOne(filter)
            .select(fields)
            .lean();
      } catch (DbError) {
        log.error(`${TAG} ${METHOD} ${DbError}`);
        throw new DatabaseError();
      }
    }
  

    /**
   * insert object to collection.
   *
   * @param {Object} obj - object to insert.
   * @return {Object} insertedObj._doc - the inserted object with _id.
   */
     async insert(obj) {
      const METHOD = '[insert]';
      log.info(`${TAG} ${METHOD} [${this.schema.name}]`);
  
      try {
        const insertedObj = await this.model.create(obj);
        return insertedObj._doc;
      } catch (error) {
        log.error(`${TAG} ${METHOD} ${error}`);
  
        const code = error.code || null;
        const name = error.name || null;
  
        if (code === DUPLICATE_ERROR) {
          throw new ValidationError(`Duplicate ID`);
        } else if (name === 'ValidationError') {
          throw new ValidationError(
              error.errors[Object.keys(error.errors)[0]].message
          );
        } else {
          throw new DatabaseError('Failed to save object');
        }
      }
    }

     /**
   * update object in the collection.
   *
   * @param {String} filter - "where" query.
   * @param {Object} obj - new object info
   * @return {Object} updated object
   */
  async update(filter, obj) {
    const METHOD = '[update]';
    log.info(`${TAG} ${METHOD} [${this.schema.name}]`);

    let updatedObj;
    try {
      updatedObj = await this.model.findOneAndUpdate(
          filter,
          obj,
      );
    } catch (error) {
      log.error(`${TAG} ${METHOD} ${error}`);

      const name = error.name || null;

      if (name === 'ValidationError') {
        throw new ValidationError(
            error.errors[Object.keys(error.errors)[0]].message
        );
      } else {
        throw new DatabaseError('Failed to update object');
      }
    }

    if (updatedObj && updatedObj.hasOwnProperty('_doc')) {
      return updatedObj._doc;
    } else {
      log.error(
          `${TAG} ${METHOD} Object does not exist: ${JSON.stringify(filter)}`
      );
      throw new ValidationError(`Object does not exist`);
    }
  }

  /**
   * delete multiple documents 
   * @param {Object} filter - query filter.
   */
     async deleteMany(filter) {
      const METHOD = '[delete]';
      log.info(`${TAG} ${METHOD} [${this.schema.name}]`);
  
      try {
        await this.model.deleteMany(filter);
      } catch (DbError) {
        log.error(`${TAG} ${METHOD} ${DbError}`);
        throw new DatabaseError();
      }
    }

  /**
   * Retrieve list of documents
   * @param {Object} filter - query filter.
   * Example: {key: 'value to filter'}
   * SQL equivalent: SELECT * FROM collection WHERE key='value to filter'
   * @param {String} fields - fields to return.
   * Example: 'a b c d'
   * Example: {page: 1, count: 1}
   * @return {Array} array of objects from collection.
   */
  async find(filter, fields) {
    const METHOD = '[find]';
    log.info(`${TAG} ${METHOD} [${this.schema.name}]`);

    try {
      return this.model
          .find(filter)
          .select(fields)
          .lean();
    } catch (DbError) {
      log.error(`${TAG} ${METHOD} ${DbError}`);
      throw new DatabaseError();
    }
  }
}

module.exports = MongoDBService;
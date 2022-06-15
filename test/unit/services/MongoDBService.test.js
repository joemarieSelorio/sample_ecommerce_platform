const mongoose = require('mongoose');

const MongoDBService = require('../../../api/services/MongoDBService');
const DatabaseError = require('../../../api/responses/DatabaseError');
const ValidationError = require('../../../api/responses/ValidationError');

jest.mock('mongoose');

describe('MongoDBService', () => {
  describe('#insert', () => {
    const create = jest.fn();
    let service;

    beforeEach(() => {
      mongoose.model.mockImplementation(() => {
        return {
          create,
        };
      });

      service = new MongoDBService({name: 'schema name', schema: 'schema'});
    });

    afterEach(() => {
      mongoose.model.mockClear();
      create.mockClear();
    });

    test('should insert successfully', async () => {
      create.mockImplementation(async () => {
        return {
          _doc: {
            key: 'key',
            value: 'value',
          },
          test: 'should not be included on return',
        };
      });

      const result = await service.insert({});

      expect(result).toEqual({
        key: 'key',
        value: 'value',
      });
    });

    test('should throw ValidationError if duplicate', async () => {
      create.mockImplementation(async () => {
        /**
         * mock error
         */
        class MockError extends Error {
          /**
           * mock error
           */
          constructor() {
            super();
            this.code = 11000;
            this.name = 'Mock Error';
          }
        };

        throw new MockError();
      });

      let error;
      try {
        await service.insert({});
      } catch (e) {
        error = e;
      }
      expect(error).toBeInstanceOf(ValidationError);
    });

    test('should throw ValidationError if error name is ValidationError',
        async () => {
          create.mockImplementation(async () => {
            /**
             * mock error
             */
            class MockError extends Error {
              /**
               * mock error
               */
              constructor() {
                super();
                this.code = 0;
                this.name = 'ValidationError';
                this.errors = {
                  key: {
                    message: 'error test',
                  },
                };
              }
            };

            throw new MockError();
          });

          let error;
          try {
            await service.insert({});
          } catch (e) {
            error = e;
          }

          expect(error.message).toEqual('error test');
        });

    test('should throw DatabaseError if unhandled error', async () => {
      create.mockImplementation(async () => {
        throw new Error();
      });

      let error;
      try {
        await service.insert({});
      } catch (e) {
        error = e;
      }

      expect(error).toBeInstanceOf(DatabaseError);
    });
  });

  describe('#update', () => {
    const findOneAndUpdate = jest.fn();
    let service;

    beforeEach(() => {
      mongoose.model.mockImplementation(() => {
        return {
          findOneAndUpdate,
        };
      });

      service = new MongoDBService({name: 'schema name', schema: 'schema'});
    });

    afterEach(() => {
      mongoose.model.mockClear();
      findOneAndUpdate.mockClear();
    });

    test('should update successfully', async () => {
      findOneAndUpdate.mockImplementation(async () => {
        return {
          _doc: {
            key: 'key',
            value: 'value',
          },
        };
      });

      const result = await service.update('', {});

      expect(result).toEqual({
        key: 'key',
        value: 'value',
      });
    });

    test('should throw ValidationError if object does not exist', async () => {
      findOneAndUpdate.mockImplementation(async () => {
        return {};
      });

      let error;
      try {
        await service.update('', {});
      } catch (e) {
        error = e;
      }

      expect(error.message).toEqual('Object does not exist');
    });

    test('should throw ValidationError if error name is ValidationError',
        async () => {
          findOneAndUpdate.mockImplementation(async () => {
            /**
             * mock error
             */
            class MockError extends Error {
              /**
               * mock error
               */
              constructor() {
                super();
                this.code = 0;
                this.name = 'ValidationError';
                this.errors = {
                  key: {
                    message: 'error test',
                  },
                };
              }
            };

            throw new MockError();
          });

          let error;
          try {
            await service.update('', {});
          } catch (e) {
            error = e;
          }

          expect(error.message).toEqual('error test');
        });

    test('should throw DatabaseError if unhandled error', async () => {
      findOneAndUpdate.mockImplementation(async () => {
        throw new Error();
      });

      let error;
      try {
        await service.update('', {});
      } catch (e) {
        error = e;
      }

      expect(error).toBeInstanceOf(DatabaseError);
    });
  });

  describe('#findOne', () => {
    const findOne = jest.fn();
    const select = jest.fn();
    const lean = jest.fn();
    let service;

    beforeEach(() => {
      lean.mockImplementation(() => {
        return {
          a: 1,
        };
      });

      select.mockImplementation(() => {
        return {
          lean,
        };
      });

      findOne.mockImplementation(() => {
        return {
          select,
        };
      });

      mongoose.model.mockImplementation(() => {
        return {
          findOne,
        };
      });

      service = new MongoDBService({name: 'schema name', schema: 'schema'});
    });

    afterEach(() => {
      mongoose.model.mockClear();
      findOne.mockClear();
      select.mockClear();
      lean.mockClear();
    });

    test('finds one document', async () => {
      const document = await service.findOne({id: 1});

      expect(document).toEqual({a: 1});
      expect(service.model.findOne).toHaveBeenCalledWith({id: 1});
    });
  });

  describe('#deleteMany', () => {
    const deleteMany = jest.fn();
    let service;

    beforeEach(() => {
      mongoose.model.mockImplementation(() => {
        return {
          deleteMany,
        };
      });

      service = new MongoDBService({name: 'schema name', schema: 'schema'});
    });

    afterEach(() => {
      mongoose.model.mockClear();
      deleteMany.mockClear();
    });

    test('deletes a document', async () => {
      deleteMany.mockImplementation(async () => {});

      await service.deleteMany({id: 1});

      expect(service.model.deleteMany).toHaveBeenCalledWith(
          {id: 1}
      );
    });

    test('throws a DatabaseError if delete fails', async () => {
      deleteMany.mockImplementation(async () => {
        throw new Error();
      });

      let error;
      try {
        await service.deleteMany();
      } catch (e) {
        error = e;
      }

      expect(error).toBeInstanceOf(DatabaseError);
    });
  });
});

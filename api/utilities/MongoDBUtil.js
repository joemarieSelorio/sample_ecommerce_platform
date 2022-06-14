const mongoose = require('mongoose');

const log = require('./LoggerUtil');

const db = process.env.MONGO_DATABASE;
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

const TAG = '[MongoDBUtil]';

/**
 * no need to close according here: https://stackoverflow.com/a/15792502/9038584
 * @return {Promise} mongoose connection result
 */
function connect() {
  const METHOD = '[connect]';
  log.info(`${TAG} ${METHOD}`);

  if (username && password) {
    connStr = `mongodb+srv://${username}:${password}@${db}.rqev28y.mongodb.net/?retryWrites=true&w=majority`;
  }

  // TODO: Add connection with SSL cert

  log.silly(`${TAG} ${METHOD} Connecting to: ${connStr}`);
  return mongoose.connect(connStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  connect,
};


const TAG = '[ContentsManager]';

const assert = require('assert');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');

const UsersSchema = require('../../common/schemas/UserSchema');
const MongoDBService = require('../../services/MongoDBService');
const userService = new MongoDBService(UsersSchema);
const log = require('../../utilities/LoggerUtil');


/**
 * add new user resource.
 *
 * @param {String} email - user email
 * @param {String} password - user's unhashed password
 * @return {Object} the added string resource.
 */
 async function addUser(email, password) {
  const METHOD = '[addUser]';
  log.info(`${TAG} ${METHOD}`);

  const id = uuidv4();
  const hashedPassword= await bcrypt.hash(password, 10);

  const addedUser = await userService.insert({
    uuid: id,
    email: email,
    password: hashedPassword,
  });

  log.info(`${TAG} ${METHOD} [addedContent] ${JSON.stringify(addedUser)}`);

  return addedUser;
}

/**
 * add new user resource.
 *
 * @param {String} uuid - user email
 * @return {Object} the user object resource.
 */
 async function getUserByUuid(uuid) {
  const METHOD = '[getUserByUuid]';
  log.info(`${TAG} ${METHOD}`);

  const id = uuidv4();
  const hashedPassword= await bcrypt.hash(password, 10);


  const addedUser = await userService.findOne({uuid: id}, 'uuid email');

  log.info(`${TAG} ${METHOD} [addedContent] ${JSON.stringify(addedUser)}`);

  return addedUser;
}

module.exports = {
  addUser,
  getUserByUuid,
};



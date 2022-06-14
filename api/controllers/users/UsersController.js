const HttpSuccess = require('../../responses/HttpSuccess');
const log = require('../../utilities/LoggerUtil');

const TAG = '[usersController]';

const {
  addUser,
  getUserByUuid,
} = require('./UsersManager');


/**
 * Controller for adding new string resource
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function to execute
 */
 async function postUserController(req, res, next) {
  const METHOD = '[postUserController]';
  log.info(`${TAG} ${METHOD}`);

  /* get params */
  const {email, password} = req.body;

  let user;
  try {
    user = await addUser(email, password);
  } catch (error) {
    log.error(`${TAG} ${METHOD} [addUser] ${error}`);
    return next(error);
  }

  res.locals.respObj = new HttpSuccess(201, 'Successfully register user', {
    user,
  });

  return next();
}

/**
 * Controller for retrieving string resources
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function to execute
 */
 async function getUserController(req, res, next) {
  const METHOD = '[getUserController]';
  log.info(`${TAG} ${METHOD}`);

  /* get params */
  const {uuid} = req.params;


  let result;
  try {
    result = await getUser(uuid);
  } catch (error) {
    log.error(`${TAG} ${METHOD} [getContents] ${error}`);
    return next(error);
  }

  res.locals.respObj = new HttpSuccess(200, `Successfully retrieved user`, {
    result,
  });

  return next();
}

module.exports = {
  postUser: postUserController,
  getUser: getUserController,
};



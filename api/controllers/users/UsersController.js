const HttpSuccess = require('../../responses/HttpSuccess');
const log = require('../../utilities/LoggerUtil');

const TAG = '[UsersController]';

const {
  addUser,
  getUserByUuid,
} = require('./UsersManager');


/**
 * Controller for adding new user
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

  res.locals.respObj = new HttpSuccess(201, 'Successfully added new user', {
    user,
  });

  return next();
}

/**
 * Controller for retrieving user details
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function to execute
 */
 async function getUserController(req, res, next) {
  const METHOD = '[getUserController]';
  log.info(`${TAG} ${METHOD}`);

  /* get params */
  const {id} = req.params;


  let user;
  try {
    user = await getUserByUuid(id);
  } catch (error) {
    log.error(`${TAG} ${METHOD} [getContents] ${error}`);
    return next(error);
  }

  res.locals.respObj = new HttpSuccess(200, `Successfully retrieved user`, {
    user,
  });

  return next();
}

module.exports = {
  postUser: postUserController,
  getUser: getUserController,
};



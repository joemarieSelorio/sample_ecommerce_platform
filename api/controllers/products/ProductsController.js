const HttpSuccess = require('../../responses/HttpSuccess');
const log = require('../../utilities/LoggerUtil');

const TAG = '[usersController]';

const {
  getProducts,
  getProductsByName,
} = require('./ProductsManager');


/**
 * Controller for retrieving string resources
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function to execute
 */
 async function getProductsController(req, res, next) {
  const METHOD = '[getProducstController]';
  log.info(`${TAG} ${METHOD}`);


  let result;

  try {
    products = await getProducts();
  } catch (error) {
    log.error(`${TAG} ${METHOD} [getContents] ${error}`);
    return next(error);
  }

  res.locals.respObj = new HttpSuccess(200, `Successfully retrieved products`, {
    products,
  });

  return next();
}


/**
 * Controller for retrieving string resources
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function to execute
 */
 async function getProductByNameController(req, res, next) {
  const METHOD = '[getProductByNameController]';
  log.info(`${TAG} ${METHOD}`);

  /* get params */
  const {name} = req.params;

  let result;

  try {
    product = await getProductsByName(name);
  } catch (error) {
    log.error(`${TAG} ${METHOD} [getContents] ${error}`);
    return next(error);
  }

  res.locals.respObj = new HttpSuccess(200, `Successfully retrieved product`, {
    product,
  });

  return next();
}

module.exports = {
  getProducts: getProductsController,
  getProduct: getProductByNameController,
};



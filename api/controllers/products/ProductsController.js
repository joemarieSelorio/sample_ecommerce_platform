const HttpSuccess = require('../../responses/HttpSuccess');
const log = require('../../utilities/LoggerUtil');

const TAG = '[ProductsController]';

const {
  getProducts,
  getProductById,
} = require('./ProductsManager');


/**
 * Controller for retrieving products
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
 * Controller for retrieving specific product
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function to execute
 */
 async function getProductController(req, res, next) {
  const METHOD = '[getProductByNameController]';
  log.info(`${TAG} ${METHOD}`);

  /* get params */
  const {id} = req.params;

  let product;

  try {
    product = await getProductById(id);
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
  getProduct: getProductController,
};



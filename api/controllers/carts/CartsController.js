const HttpSuccess = require('../../responses/HttpSuccess');
const log = require('../../utilities/LoggerUtil');

const TAG = '[CartsController]';

const {
  addProductToCart,
  getCartDetails,
} = require('./CartsManager');


/**
 * Controller for adding new string resource
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function to execute
 */
 async function patchCartController(req, res, next) {
  const METHOD = '[patchCartController]';
  log.info(`${TAG} ${METHOD}`);

  /* get params */
  const {cartId} = req.params;

  let cart;
  let updates;

  const {
    id,
    name,
    image,
  } = req.body;

  
  const currentCart = await getCartDetails(cartId);

  const [filteredProduct] = currentCart.products.filter((product) => product.id === id);

  const product = {
    id,
    name,
    image,
    quantity: 1,
  }

  filteredProduct ? updates = {
    filter: {'products.id': id},
    details:{
      '$set': {
        'products.$.quantity': filteredProduct.quantity + 1,
      }
    }
  } :  updates = {
    filter: {id: cartId},
    details: { $push: { products: product}},
  }

  try {
    cart = await addProductToCart(updates.filter, updates.details);
  } catch (error) {
    log.error(`${TAG} ${METHOD} [addUser] ${error}`);
    return next(error);
  }

  res.locals.respObj = new HttpSuccess(201, 'Successfully added the product to cart', {
    cart,
  });

  return next();
 }


/**
 * Controller for retrieving string resources
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @param {function} next - The next function to execute
 */
 async function getCartController(req, res, next) {
  const METHOD = '[getUserController]';
  log.info(`${TAG} ${METHOD}`);

  /* get params */
  const {id} = req.params;

  try {
    result = await getCartDetails(id);
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
  patchCart: patchCartController,
  getCart: getCartController,
};



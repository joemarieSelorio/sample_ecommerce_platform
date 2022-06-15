const CartSchema = require('../../common/schemas/CartSchema');
const MongoDBService = require('../../services/MongoDBService');
const cartService = new MongoDBService(CartSchema);
const log = require('../../utilities/LoggerUtil');

const TAG = '[CartsManager]';


/**
 * add product to a cart
 * @param {object} filter - cart details to be use for filter
 * @param {Object} updatedDetails - cart's updated 
 * @return {Object}
 */
 async function addProductToCart(filter, updatedDetails) {
  const METHOD = '[addProductToCart]';
  log.info(`${TAG} ${METHOD}`);

  const addedToCart = await cartService.update(
    filter,
    updatedDetails,
  );

  log.info(`${TAG} ${METHOD} [addProductToCart] `);

  return addedToCart;
}

/**
 * add get cart using id.
 * @param {String} id - cart id
 * @return {Object} the product object resource.
 */
 async function getCartDetails(id) {
  const METHOD = '[getCart]';
  log.info(`${TAG} ${METHOD}`);

  const cart = await cartService.findOne({id}, 'id products');

  log.info(`${TAG} ${METHOD} [getCartDetails]`);

  return cart;
}

module.exports = {
  addProductToCart,
  getCartDetails,
};



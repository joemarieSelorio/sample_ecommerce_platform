const ProductSchema = require('../../common/schemas/ProductSchema');
const MongoDBService = require('../../services/MongoDBService');
const productService = new MongoDBService(ProductSchema);

const log = require('../../utilities/LoggerUtil');

const TAG = '[ContentsManager]';


/**
 * get all products
 * @return {Object} the added string resource.
 */
 async function getProducts() {
  const METHOD = '[getProducts]';
  log.info(`${TAG} ${METHOD}`);

  const products = await productService.find({}, 'id name image quantity description');

  log.info(`${TAG} ${METHOD} [getProducts] `);

  return products;
}

/**
 * add new user resource.
 *
 * @param {String} id - product id
 * @return {Object} the product object resource.
 */
 async function getProductById(id) {
  const METHOD = '[getProductsByName]';
  log.info(`${TAG} ${METHOD}`);

  const product = await productService.findOne({id}, 'id name image quantity price description');

  log.info(`${TAG} ${METHOD} [getProductById]`);

  return product;
}

module.exports = {
  getProducts,
  getProductById,
};



const TAG = '[ContentsManager]';

const assert = require('assert');
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');

const ProductSchema = require('../../common/schemas/ProductSchema');
const MongoDBService = require('../../services/MongoDBService');
const productService = new MongoDBService(ProductSchema);
const log = require('../../utilities/LoggerUtil');


/**
 * get all products
 * @return {Object} the added string resource.
 */
 async function getProducts() {
  const METHOD = '[getProducts]';
  log.info(`${TAG} ${METHOD}`);

  const products = await productService.find({}, 'id name image quantity');

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

  const product = await productService.findOne({id}, 'id name image quantity price');

  log.info(`${TAG} ${METHOD} [getProductById]`);

  return product;
}

module.exports = {
  getProducts,
  getProductById,
};



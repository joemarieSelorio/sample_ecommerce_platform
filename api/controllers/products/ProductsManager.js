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


  const products = await productService.find({}, 'name image quantity');

  log.info(`${TAG} ${METHOD} [getProducts] `);

  return products;
}

/**
 * add new user resource.
 *
 * @param {String} name - product name
 * @return {Object} the product object resource.
 */
 async function getProductsByName(name) {
  const METHOD = '[getProductsByName]';
  log.info(`${TAG} ${METHOD}`);

  const product = await productService.findOne({name}, 'name image quantity');

  log.info(`${TAG} ${METHOD} [getProductsByName]`);

  return product;
}

module.exports = {
  getProducts,
  getProductsByName,
};



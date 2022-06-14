const {
  getProducts,
  getProduct,
} = require('../controllers/products/ProductsController');

const express = require('express');
const router = new express.Router();

router.get('/', getProducts);

router.get('/:name', getProduct);

module.exports = router;

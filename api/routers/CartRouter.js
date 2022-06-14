const {
  patchCart,
  getCart,
} = require('../controllers/carts/CartsController');

const express = require('express');
const router = new express.Router();

router.get('/:id', getCart);
router.patch('/:cartId/products/', patchCart);


module.exports = router;

const {
  postUser,
  getUser,
} = require('../controllers/users/UsersController');

const express = require('express');
const router = new express.Router();

router.post('/', postUser);

router.get('/:id', getUser);

module.exports = router;

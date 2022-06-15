const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  image: {
    type: String,
    default: false,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = {
  schema,
  name: 'Product',
};

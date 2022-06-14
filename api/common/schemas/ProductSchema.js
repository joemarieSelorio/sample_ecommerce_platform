const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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
}, {
  timestamps: true,
});

module.exports = {
  schema,
  name: 'Product',
};

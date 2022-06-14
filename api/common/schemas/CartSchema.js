const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    products: [
      {
        id: Number,
        name: String,
        image: String,
        quantity: Number,
        price: Number
      }
    ],
    active: {
      type: Boolean,
      default: true
    },
    modifiedOn: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = {
  schema,
  name: 'Cart',
};

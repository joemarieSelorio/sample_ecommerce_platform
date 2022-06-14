const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  uuid: {
    type: String,
    index: {unique: true},
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
    minlength: 1,
    maxlength: 32,
  },
  password: {
    type: String,
    required: true,
    default: false,
    minlength: 1,
    maxlength: 128,
  },
}, {
  timestamps: true,
});

module.exports = {
  schema,
  name: 'User',
};


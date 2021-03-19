const mongoose = require('mongoose');

const usersModel = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  passwordHash: { type: String, required: true },
  current_cart: { type: String, default: "" }
}, {
  timestamps: true,
})

module.exports = mongoose.model('User', usersModel);

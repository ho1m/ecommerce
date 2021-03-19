const mongoose = require('mongoose');

const cartsModel = new mongoose.Schema({
  checked_out: { type: Boolean, default: false },
  user_id: { type: String, default: "" }, // here boy
  products: { type: Array, default: [] }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Cart', cartsModel);

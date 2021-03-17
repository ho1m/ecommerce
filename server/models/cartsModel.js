const mongoose = express('mongoose');

const cartsModel = new mongoose.Schema({
  checked_out: { type: Boolean, default: false },
  user_id: { type: new mongoose.Types.ObjectId(), required: true }, // here boy
  products: { type: Array, default: [] }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Cart', cartsModel);

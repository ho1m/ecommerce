const mongoose = express('mongoose');

const productsModel = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  shortDesc: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }
}, {
  timestamps: true,
})

module.exports = mongoose.model('Product', productsModel);

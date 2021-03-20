const Cart = require('../../models/cartsModel');

module.exports = {
  getOrders (req, res) {

  },
  getCart (req, res) {
    Cart.findOne({ _id: req.params.cartid })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json(err))
  },
  createCart (req, res) {
    Cart.create(req.body)
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).json(err))
  },
  createCartProduct (req, res) {
    Cart.updateOne({ _id: req.params.cartId }, { $push: { 
      products: {product: req.body, quantity: 1} 
    }})
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).json(err))
  },
  changeCartProduct (req, res) {
    const type = req.params.type;
    Cart.updateOne({
      _id: req.params.cartId,
      products: {
        $elemMatch: {'product._id': req.params.productId}
      }
    }, {
      $inc: {
        'products.$.quantity': type === 'add' ? 1 : -1
      }
    })
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).json(err))
  },
  deleteCartProduct (req, res) {

  },
}

// ({products: { $elemMatch: {'product._id': req.params.productId} }}).quantity: 
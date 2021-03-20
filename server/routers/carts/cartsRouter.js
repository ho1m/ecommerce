const router = require('express').Router();
const cartsMethods = require('./cartsMethods');
const { verifyToken } = require('../../authentication/auth');

router.get('/checkedout/:userid', verifyToken, cartsMethods.getOrders);
router.get('/one/:cartid', cartsMethods.getCart);
router.post('/create', cartsMethods.createCart);
router.patch('/:cartId/products/create', cartsMethods.createCartProduct);
router.patch('/:cartId/products/:productId/:type', cartsMethods.changeCartProduct);
router.delete('/:cartId/products/:productId', cartsMethods.deleteCarProduct);

module.exports = router;
const router = require('express').Router();
const cartsMethods = require('./cartsMethods');
const { verifyToken } = require('../../authentication/auth');

router.get('/checkedout/:userId', verifyToken, cartsMethods.getOrders);
router.get('/one/:cartid', cartsMethods.getCart);
router.post('/create', cartsMethods.createCart);
router.patch('/checkedout/:cartId', cartsMethods.cartCheckedOut);
router.patch('/:cartId/products/create', cartsMethods.createCartProduct);
router.patch('/:cartId/products/:productId/:type', cartsMethods.changeCartProduct);
router.delete('/:cartId/products/:productId', cartsMethods.deleteCartProduct);

module.exports = router;
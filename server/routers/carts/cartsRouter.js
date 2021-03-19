const router = require('express').Router();
const cartsMethods = require('./cartsMethods');
const { verifyToken } = require('../../authentication/auth');

router.get('/checkedout/:userid', verifyToken, cartsMethods.getOrders);
router.get('/one/:checkoutid', verifyToken, cartsMethods.getCart);
router.post('/create', verifyToken, cartsMethods.createCart);
router.patch('/products/:checkoutid/:productid', verifyToken, cartsMethods.changeCartProduct);
router.delete('/products/:checkoutid/:productid', verifyToken, cartsMethods.deleteCarProduct);

module.exports = router;
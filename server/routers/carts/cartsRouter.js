const router = require('express').Router();
const chatsMethods = require('./chatsMethods');
const { verifyToken } = require('../../authentication/auth');

router.get('/checkedout/:userid', verifyToken, chatsMethods.getOrders);
router.get('/one/:checkoutid', verifyToken, chatsMethods.getCart);
router.post('/create', verifyToken, chatsMethods.createCart);
router.patch('/products/:checkoutid/:productid', verifyToken, chatsMethods.changeCartProduct);
router.delete('/products/:checkoutid/:productid', verifyToken, chatsMethods.deleteCarProduct);

module.exports = router;
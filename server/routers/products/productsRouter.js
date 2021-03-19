const router = require('express').Router();
const productsMethods = require('./productsMethods');
const { verifyToken } = require('../../authentication/auth');

router.get('/getall', productsMethods.getProducts);
router.get('/getone/:productid', productsMethods.getProduct)
router.post('/create', verifyToken, productsMethods.createProduct)
router.patch('/update/:productid', verifyToken, productsMethods.updateProduct)
router.delete('/delete', verifyToken, productsMethods.deleteProduct)

module.exports = router;
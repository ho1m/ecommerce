const router = require('express').Router();
const usersMethods = require('./usersMethods');
const { verifyToken } = require('../../authentication/auth');

router.post('/register', usersMethods.registerUser);
router.post('/login', usersMethods.loginUser);
router.patch('/updatecartid/:userId', verifyToken, usersMethods.updateCart);

module.exports = router;
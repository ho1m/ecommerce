const router = require('express').Router();
const usersMethods = require('./usersMethods');

router.post('/register', usersMethods.registerUser);
router.post('/login', usersMethods.loginUser);
router.patch('/updatecart/:userid', usersMethods.updateCart);

module.exports = router;
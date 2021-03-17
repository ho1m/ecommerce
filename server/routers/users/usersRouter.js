const router = require('express').Router();
const usersMethods = require('./usersMethods');

router.post('/register', usersModel.registerUser);
router.post('/login', usersModel.loginUser);
router.patch('/updatecart/:userid', usersModel.updateCart);

module.exports = router;
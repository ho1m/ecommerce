require('dotenv').config();
const jwt = require('jsonwebtoken');

const key = process.env.SECRET_KEY;

module.exports = {
  generateToken (id) {
    return jwt.sign({id}, key);
  },

  verifyToken (req, res, next) {
    try {
      const token = req.headers.Authorization.split(' ')[1];
      if (jwt.verify(token, key)) next();
    } catch (error) {
      res.status(409).json({
        ...error,
        message: 'Unauthorized'
      });
    }
  }
};

const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = async (req, res, next) => {
    const token = req.header('Authorization');
    const secret = process.env.JWT_SECRET;
  
    if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
      jwt.verify(token, secret);
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
  };

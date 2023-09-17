const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const middlewareAuth = {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;

    console.log('token', token);
    if (token) {
      const accessToken = token.split(' ')[1];
      jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
        if (err) {
          return res.status(403).json('Token is not valid!');
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json({ err: 'You are not authenticated!' });
    }
  },
  verifyTokenAndAdminAuth: (req, res, next) => {
    middlewareAuth.verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      }
    });
  },
};

module.exports = middlewareAuth;

const User = require('../models/user');
const Verify = require('../models/verify');
const bcrypt = require('bcryptjs');
const { sendEmail1 } = require('../config/mail');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const authController = {
  getgenreAccesstoken: (user) => {
    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '365d',
      },
    );
    return accessToken;
  },
  getgenreRefreshtoken: (user) => {
    const refreshToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.REFRESH_KEY,
      {
        expiresIn: '365d',
      },
    );
    return refreshToken;
  },

  signin: async (req, res) => {
    try {
      res.json({ message: 'login' });
    } catch (error) {
      console.log(error);
    }
  },
  signup: async (req, res) => {
    try {
      res.json({ message: 'signup' });
    } catch (error) {
      console.log(error);
    }
  },
  resetPassword: async (req, res) => {
    try {
      res.json({ message: 'resetPassword' });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = authController;

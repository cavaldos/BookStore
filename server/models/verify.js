const mongoose = require('mongoose');

const verifySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  confirmationCode: {
    type: String,
    required: true,
  },
});

const Verify = mongoose.model('Verify', verifySchema);

module.exports = Verify;

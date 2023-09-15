const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

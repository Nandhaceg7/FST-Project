// models/User.js
const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  Username: String,
  email: String,
  password: String,
  confirmpassword: String,
});

module.exports = mongoose.model("AddAccount1", AccountSchema);

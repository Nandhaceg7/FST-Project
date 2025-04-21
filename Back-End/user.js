const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("User", userSchema);

//"mongodb+srv://nandha:123nandha@cluster0.lqtgmgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

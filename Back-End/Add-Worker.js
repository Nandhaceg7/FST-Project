const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: String,
  phoneno: String,
  age: Number,
  categoryOfWork: String,
  address: String,
  pincode: String,
});

module.exports = mongoose.model("Worker", workerSchema);


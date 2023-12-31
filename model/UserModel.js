const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, require: true, unique: true },
  mobileNo: { type: String, require: true, unique: true },
  password: { type: String },
});

let userModel = mongoose.model("user", userSchema);

module.exports = userModel;

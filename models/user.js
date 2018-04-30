const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  context: { type: String, required: true },
  type: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  publicKey: { type: String, required: true },
  publicEncKey: { type: String, required: true },
  email: { type: String, required: true },
  avatar: {
    uri: { type: String, required: true }
  },
  phone: { type: Number, required: true },
  pushToken: { type: String, required: true },
  networkAddress: { type: String, required: true },
  rinkebyID: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpassword: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  collage: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },

});

const User = mongoose.model("User", schema);

module.exports = User






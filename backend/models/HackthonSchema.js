const mongoose = require("mongoose");


const hackathonSchema = new mongoose.Schema({
  hackathonName: {
    type: String,
    required: true,
  },
  mainTechStack: {
    type: String,
    required: true,
  },
  sideTechStack: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Hackathon = mongoose.model("Hackathon", hackathonSchema);

module.exports = Hackathon;

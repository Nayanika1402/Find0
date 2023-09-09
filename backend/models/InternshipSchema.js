const mongoose = require("mongoose");


const jobSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  companyName: {
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


const Internship = mongoose.model("internships", jobSchema);

module.exports = Internship;

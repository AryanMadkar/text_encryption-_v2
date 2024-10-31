const mongoose = require("mongoose");

const maintext = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    key:{
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

const textmodel = mongoose.models("text", maintext);

module.exports = textmodel;

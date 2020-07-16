const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  Email: {
    type: String
},
  Password: {
    type: Number
  }
});

module.exports = mongoose.model("detail", detail);
const mongoose = require("mongoose");

const Repository = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
});

module.exports = mongoose.model("Repository", Repository);

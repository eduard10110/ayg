const mongoose = require("mongoose");

const Test = new mongoose.Schema({
  products: [{ type: Object }],
  name: { type: String },
  type: { type: String },
  dateOfEntry: { type: String },
  deviceName: { type: String },
  packingType: { type: String },
  price: { type: String },
  isMaked: { type: Boolean, default: false },
});

module.exports = mongoose.model("Test", Test);

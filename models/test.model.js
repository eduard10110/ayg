const mongoose = require("mongoose")

const Test = new mongoose.Schema({
  productQuantity: {type: Number, required:true},
  unit: {type: String, required: true},
  quantity: {type: Number, required: true},
})

module.exports = mongoose.model('Test', Test)
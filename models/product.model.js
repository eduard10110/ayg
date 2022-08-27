const mongoose = require("mongoose")

const Product = new mongoose.Schema({
  name: {type: String, required:true},
  type: {type: String, required: true},
  quantity: {type: Number, required: true},
  unit: {type: String, required: true},
  expirationDate: {type: Date, required: true},
  price: {type: Number, required: true},
  supplier: {type: String, required: true},
  storage: {type: String},
  dateOfEntry: {type: Date, required:true},
  material: {type: String},
  lot: {type: String}
})

module.exports = mongoose.model('Product', Product)

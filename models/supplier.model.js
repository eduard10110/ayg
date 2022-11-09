const mongoose = require("mongoose")

const Supplier = new mongoose.Schema({
  name: {type: String, required:true},
  brand: {type: String, required: true},
  unit: {type: String},
})

module.exports = mongoose.model('Supplier', Supplier)
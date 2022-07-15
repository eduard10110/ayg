const mongoose = require("mongoose")

const Supplier = new mongoose.Schema({
  name: {type: String, required:true},
  brand: {type: String, required: true},
})

module.exports = mongoose.model('Supplier', Supplier)
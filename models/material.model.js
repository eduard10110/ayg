const mongoose = require("mongoose")

const Material = new mongoose.Schema({
  name: {type: String, required:true},
  type: {type: String, required: true},
  quantity: {type: Number, required: true},
  unit: {type: String, required: true},
  expirationDate: {type: Date, required: true},
  price: {type: Number, required: true},
  supplier: {type: String, required: true},
  dateOfEntry: {type: Date, required:true}
})

module.exports = mongoose.model('Material', Material)

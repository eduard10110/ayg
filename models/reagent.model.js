const mongoose = require("mongoose") 

const Reagent = new mongoose.Schema({
  name: {type: String},
  quantity: {type: Number}
})

module.exports = mongoose.model('Reagent', Reagent)
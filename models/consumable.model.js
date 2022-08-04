const mongoose = require("mongoose") 

const Consumable = new mongoose.Schema({
  name: {type: String},
  quantity: {type: Number}
})

module.exports = mongoose.model('Consumable', Consumable)
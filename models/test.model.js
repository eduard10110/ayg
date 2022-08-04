const mongoose = require("mongoose")

const Test = new mongoose.Schema({
  products: [{type: Object}],
  quantity: {type: String},
})

module.exports = mongoose.model('Test', Test)
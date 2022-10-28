const mongoose = require("mongoose")

const Test = new mongoose.Schema({
  products: [{type: Object}],
  quantity: {type: String},
  name: {type: String},
  type: {type: String},
  dateOfEntry: {type: String},

})

module.exports = mongoose.model('Test', Test)
const mongoose = require("mongoose")

const Test = new mongoose.Schema({
  products: [{type: Object}],
  name: {type: String},
  type: {type: String},
  dateOfEntry: {type: String},

})

module.exports = mongoose.model('Test', Test)
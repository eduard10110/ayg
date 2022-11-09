const mongoose = require("mongoose")

const Test = new mongoose.Schema({
  products: [{type: Object}],
  name: {type: String},
  type: {type: String},
  dateOfEntry: {type: String},
  deviceName: {type: String},
  isMaked: {type: Boolean, default: false}

})

module.exports = mongoose.model('Test', Test)
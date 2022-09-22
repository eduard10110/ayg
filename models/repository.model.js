const mongoose = require("mongoose")

const Repository = new mongoose.Schema({
  name: {type: String, required:true},
  product: [{type: Object}]
})

module.exports = mongoose.model('Repository', Repository)

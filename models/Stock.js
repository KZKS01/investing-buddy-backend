const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema ({
  name: {type: String, required: true},
  symbol: String,
  price: String,
  qty: String
});

module.exports = mongoose.model('Stock', stockSchema);
const {Schema, model} = require('mongoose');

const schema = Schema({
  "price": {type: Number, required: true},
  "carrier": {type: String, required: true},
  "segments": [{
    origin: String,
    destination: String,
    date: Date,
    stops: [String],
    duration: Number
  }]
});

module.exports = model('Tickets', schema);
const mongoose = require('mongoose');
const uri = 'mongodb://localhost/fec';

module.exports.db = mongoose.connect(uri);

const locationSchema = new mongoose.Schema({
  city: String,
  state: String,
  country: String,
  desc: String,
});

const hostSchema = new mongoose.Schema({
  name: String,
  verified: Boolean,
  photo: String,
  joinDate: String,
  desc: String,
  reviews: Number,
  contact: {
    email: String,
    phone: String
  },
  response: {
    rate: Number,
    time: String
  },
  properties: [String]
});

const toKnowSchema = new mongoose.Schema({
  name: String,
  rules: {
    house: [String],
    additional: [String]
  },
  health: {
    safety: [String],
    acknowledge: [String]
  },
  cancelPolicy: [String]
});


module.exports.Hosts = mongoose.model('host', hostSchema);
module.exports.Locations = mongoose.model('location', locationSchema);
module.exports.ToKnow = mongoose.model('to_know', toKnowSchema);
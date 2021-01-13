const mongoose = require('mongoose');
const uri = 'mongodb://localhost/fec';

mongoose.connect(uri);

const locationSchema = new mongoose.Schema({
  city: String,
  state: String,
  country: String
});

const hostSchema = new mongoose.Schema({
  name: String,
  verified: Boolean,
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
  }
});

const toKnowSchema = new mongoose.Schema({
  rules: [String],
  heatlh: {
    safety: [String],
    acknowledge: [String]
  },
  cancelPolicy: String
});


module.exports.Hosts = mongoose.model('host', hostSchema);
module.exports.Locations = mongoose.model('location', locationSchema);
module.exports.ToKnoW = mongoose.model('to_know', toKnowSchema);
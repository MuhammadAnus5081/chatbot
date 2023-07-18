const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  howManyNights: {
    type: Number,
    required: true
  },
  honeymoonPackage: {
    type: String
  },
  moreDetails: {
    type: String
  },
  resorts: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  flightTimings: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

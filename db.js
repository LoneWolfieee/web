const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/festivalDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  teamSize: Number
});

const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  registration_number: Number,
  email: String,
  password: String,
  isAdmin: Boolean
});

const merchSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});

const Event = mongoose.model('Event', eventSchema);
const User = mongoose.model('User', userSchema);
const Merch = mongoose.model('Merch', merchSchema);

module.exports = { Event, User, Merch };

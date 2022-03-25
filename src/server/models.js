
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  customerId: {
    type: Number,
    required: true,
  },
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;

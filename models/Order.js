const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderno: {
    type: Number,
    unique: true,
  },
  placedat: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  items: [{
      name: {
        type: String,
        required: true
      },
      quantity: { 
        type: Number,
        required: true
      }
  }],
  subtotal: {
    type: Number,
    required: true
  }
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;

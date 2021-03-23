const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  orderNumber: {
    type: String,
    default: Date.now()
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  sum: {
    type: Number,
    required: true,
  },
  cart: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String,
  }
})

const OrderModel = mongoose.model('orders', OrderSchema);

module.exports = OrderModel;
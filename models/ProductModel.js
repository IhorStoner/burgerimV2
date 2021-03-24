const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  titleUKR: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  descriptionUKR: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  view: {
    type: String,
    required: true,
  },
})

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;
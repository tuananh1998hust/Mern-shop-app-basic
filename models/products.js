const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create ProductSchema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  product_type: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create Product Model
const Product = mongoose.model("products", ProductSchema);

module.exports = Product;

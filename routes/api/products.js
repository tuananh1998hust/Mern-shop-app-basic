const express = require("express");
const router = express.Router();

// Product Model
const Product = require("../../models/products");

// @route    GET api/products
// @desc     Get All Products
// @acess    Public
router.get("/", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then(products => res.json(products));
});

// @route    POST api/products
// @desc     Create New Item
// @access   Private
router.post("/", (req, res) => {
  const { name, product_type, price, description, imgUrl } = req.body;

  // Validation
  if (!name || !product_type || !price || !description || !imgUrl) {
    return res.json({ msg: "Please Enter All Fields" });
  }

  const newProduct = new Product({
    name,
    product_type,
    price,
    description,
    imgUrl
  });

  newProduct.save().then(product => res.json(product));
});

// @route    DELETE api/items/:id
// @desc     Delete A Item
// @access   Private
router.delete("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product =>
      product.remove().then(() => res.json({ msg: "Delete Success" }))
    )
    .catch(err => res.status(404).json({ msg: "Delete Failed" }));
});

module.exports = router;

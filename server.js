const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// API
const products = require("./routes/api/products");

// Keys
const keys = require("./config/keys");

// Connect MongoDB
mongoose
  .connect(keys.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected"))
  .catch(err => console.log(err));

// bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/products", products);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

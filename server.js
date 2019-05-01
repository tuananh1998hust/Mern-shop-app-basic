const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

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

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

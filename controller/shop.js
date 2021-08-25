const Product = require("../models/product");

const path = require("path");

const rootPath = require("../util/path");

exports.getProducts = (req, res, next) => {
  // mongodb logic
  // Product.fetchAll()
  //   .then((products) => {
  //     console.log(products);
  //     res.sendFile(path.join(rootPath, "views", "shop.html"));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // mongoose logic for fetching products
  // Product.find()
  //   .then((products) => {
  //     console.log(products);
  //     res.sendFile(path.join(rootPath, "views", "shop.html"));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // mongoose logic for fetching a single product

  // Product.findById(prodId)
  //   .then((products) => {
  //     console.log(products);
  //     res.sendFile(path.join(rootPath, "views", "shop.html"));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // sql logic for fetching products
  Product.fetchAll().then(([rows, fieldData]) => {
    console.log(rows);
    console.log(fieldData);
    res.sendFile(path.join(rootPath, "views", "shop.html"));
  });
};

const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  // <------------------ mongodb logic ------------------->

  // const product = new Product(title, price, description, imageUrl);

  // product
  //   .save()
  //   .then((result) => {
  //     console.log("Created product..");
  //     res.redirect("/");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // <------------------ mongoose logic ------------------->

  // const product = new Product({
  //   title: title,
  //   price: price,
  //   description: description,
  //   imageUrl: imageUrl,
  // });

  // // Add products into db
  // product
  //   .save()
  //   .then((result) => {
  //     console.log("Created product..");
  //     res.redirect("/");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // <------------------ sql logic ------------------->
  const product = new Product(title, Number(price), description, imageUrl);

  console.log(product)
  product
    .save()
    .then((result) => {
      console.log("Created product..");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });

};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  Product.findById(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.imageUrl = updatedImageUrl;
      product.price = updatedPrice;
      product.description = updatedDescription;

      return product.save();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  // Delete products from db
  Product.findByIdAndRemove(prodId)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// const mongoConnect = require("./util/database").mongoConnect;

const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).send('<h1>Page not found</h1>');
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

// mongoConnect(() => {
//   app.listen(3000);
// })

// mongoose
//   .connect(
//     "mongodb+srv://saroj:9kiX8py7BzNbVgSI@node-sgx7x.mongodb.net/shop?retryWrites=true&w=majority"
//   )
//   .then((result) => {
//     app.listen(3000);
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

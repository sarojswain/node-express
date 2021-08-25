const db = require("../util/database-sql");

// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const ProductSchema = new Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   imageUrl: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model('Products', ProductSchema);

// const getDb = require("../util/database").getDb;

// class Product {
//   constructor(title, price, description, imageUrl) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//   }

//   save() {
//     const db = getDb();
//     return db
//       .collection("products")
//       .insertOne(this)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("products")
//       .find()
//       .toArray()
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static deleteById(prodId) {
//     const db = getDb();
//     return db
//        .collection("products")
//        .deleteOne({_id: new mongodb.ObjectId(prodId)})
//        .then(result => {
//            console.log('Deleted');
//        })
//        .catch(err => {
//            console.log(err);
//        })
//   }
// }

// module.exports = Product;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, price, description, imageUrl) VALUES (?,?,?,?)",
      [this.title, this.price, this.description, this.imageUrl]
    );
  }
}

module.exports = Product;
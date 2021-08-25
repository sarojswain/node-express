const express = require("express");

const router = express.Router();

const path = require("path");

const rootPath = require("../util/path");
const adminController = require("../controller/admin");

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'></input><button type='submit'>Send</button></form>");
    // next(); // Allows the request to continue to the next middleware 
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
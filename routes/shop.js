const express = require("express");

const shopController = require("../controller/shop");

const router = express.Router();

router.get('/products', shopController.getProducts);

module.exports = router;
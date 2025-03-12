var express = require('express');
var router = express.Router();
let productController = require('../controller/ProductController');

/* GET users listing. */
router.get('/all',productController.getAllProducts);
router.post("/save",productController.saveProducts);
router.get("/getProductById/:id",productController.getProductById);

module.exports = router;

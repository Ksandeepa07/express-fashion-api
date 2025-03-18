var express = require('express');
var router = express.Router();
let orderController = require('../controller/OrderController');
const {verify} = require("jsonwebtoken");
const verifyToken = require("../middleware/authMiddleware");


router.post('/save',verifyToken, orderController.saveOrder);
router.get('/all', verifyToken,orderController.getAllOrders);

module.exports = router;

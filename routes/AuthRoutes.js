var express = require('express');
var router = express.Router();
let authController = require('../controller/AuthController');


router.post('/register', authController.register);


module.exports = router;

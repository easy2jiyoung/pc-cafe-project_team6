const express = require('express');
const userController = require('../controllers/user.controller.js');
const UserController = new userController();
const router = express.Router();

router.get('/', UserController.getUserInfo);

module.exports = router;
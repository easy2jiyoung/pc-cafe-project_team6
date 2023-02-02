const express = require('express');
const userController = require('../controllers/user.controller.js');
const UserController = new userController();
const router = express.Router();

router.post('/login', UserController.login);

module.exports = router;
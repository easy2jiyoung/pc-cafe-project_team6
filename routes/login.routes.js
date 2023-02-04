const express = require('express');
const UserController = require('../controllers/user.controller.js');
const userController = new UserController();
const router = express.Router();

router.post('/login', userController.login);

router.get('/logout', userController.logout)

module.exports = router;
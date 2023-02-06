const express = require('express');
const userController = require('../controllers/user.controller.js');
const UserController = new userController();
const router = express.Router();

router.get('/', UserController.getUserInfo);

router.get('/users', UserController.getUserInfo);

router.delete('/users/:userId', UserController.deleteUser)

module.exports = router;
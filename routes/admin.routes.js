const express = require('express');
const userController = require('../controllers/user.controller.js');
const UserController = new userController();
const router = express.Router();

router.get('/', UserController.getUserInfo);

router.get('/users', UserController.getUserInfo);

router.delete('/:userId', UserController.deleteUser)

router.put('/:userId', UserController.updateUserPoint)

module.exports = router;
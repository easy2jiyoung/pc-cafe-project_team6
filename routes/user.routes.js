const express = require('express')
const router = express.Router()

// controllers
const UserController = require('../controllers/user.controller.js')
const userController = new UserController()


module.exports = router
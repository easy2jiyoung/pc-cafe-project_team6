const express = require("express");
const auth_middlewares = require("../middlewares/auth-middlewares");
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");



module.exports = router;
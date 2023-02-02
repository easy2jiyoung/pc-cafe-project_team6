const express = require("express");
const auth_middlewares = require("../middlewares/auth-middlewares");
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");

const UserController = require('../controllers/product.controller.js')
const userController = new UserController()

// 이름과 핸드폰 번호로 아이디 찾기
router.get('/:name/:phone', userController.findByNameAndPhone)




module.exports = router;
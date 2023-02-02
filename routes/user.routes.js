const express = require("express");
const auth_middlewares = require("../middlewares/auth-middlewares");
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/user.controller");
const {Users} = require('../models/index.js')
const { Op } = require("sequelize");

const UserController = require('../controllers/user.controller.js')
const userController = new UserController()

// 이름과 핸드폰 번호로 아이디 찾기
router.get('/:name/:phone', userController.findByNameAndPhone)

// ID, 이름, 휴대폰 번호로 비밀번호 재설정
router.put('/password', userController.putPasswordByIdNamePhone)


router.get('/points/:userId',getUserPoints = async (req,res)=>{

   const users = await Users.findAll()
   console.log(users)
})

module.exports = router;
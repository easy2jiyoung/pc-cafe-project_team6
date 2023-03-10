const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller.js");
const userController = new UserController();

// 회원가입
router.post("/signup", userController.registerUser);

// 이름과 핸드폰 번호로 아이디 찾기
router.get("/findBy/:name/:phone", userController.findByIdNameAndPhone);

// ID, 이름, 휴대폰 번호로 비밀번호 재설정
router.put("/password", userController.putPasswordByIdNamePhone);

//userId로 소지 포인트 조회
router.get("/points/:userId", userController.getMyPoint);

//userId로 내 정보 변경
router.put("/update/:userId", userController.updateUser);

module.exports = router;

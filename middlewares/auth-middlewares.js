// 추후 config.json 참고하여 SECRET_KEY: "teamSparta6" 변경할 것. + User.controller도 변경.

const jwt = require("jsonwebtoken");
const { User } = require("../models");

async function auth_middleware(req, res, next) {
  try {

    // 쿠키 존재 여부 & 쿠키 jwt 여부 확인 후 없으면 -> 로그인 후 이용하세요 메시지 보내기
    if(!req.cookies || !req.cookies.jwt) {
      return res.status(400).send({ message: "로그인 후 사용가능합니다." })
    }

    const token = req.cookies.jwt
    // jwt.verify를 이용해 쿠키 토큰값 인증
    const { userId } = jwt.verify(token, "teamSparta6")

    const user = await User.findByPk(userId)
    res.locals.user = user;
    next();
    
  } catch (error) {
    console.log(error)
    res.status(500).send({ errorMessage });
  }
}




module.exports = { auth_middleware };
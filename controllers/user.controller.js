const UserService = require('../services/user.service.js')
const jwt = require('jsonwebtoken');

class UserController {
    userService = new UserService();

    // 로그인
    login = async (req, res) => {
        const { id, password } = req.body;
        const userInfo = await this.userService.findOneUser(id, password);
        const token = jwt.sign({ userId: userInfo.userId }, "teamSparta6");
        try {

            res.cookie('jwt', token, {
                maxAge: 1000 * 60 * 10, // 1초(6000) * 60 = 1분 * 10 = 10분
            });

            res.status(200).send('PC방에 오신 것을 환영합니다.');
        } catch (error) {
            console.error(error);
            res.status(500).send({ errorMessage });

        }
    }
}

module.exports = UserController;
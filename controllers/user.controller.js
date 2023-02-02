const UserService = require('../services/user.service.js')

class UserController {
    userService = new UserService()

    // 이름과 핸드폰 번호로 아이디 찾기
    findByNameAndPhone = async (req, res) => {
        try {
            const {name, phone} = req.params

            const id = await this.userService.findByNameAndPhone(name,phone)

            res.status(200).json(id)
        } catch (error) {
            return error   
        }
    }
}

module.exports = UserController;
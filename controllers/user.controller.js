const UserService = require('../services/user.service.js')

class UserController {
    userService = new UserService()

    // 이름과 핸드폰 번호로 아이디 찾기
    findByNameAndPhone = async (req, res) => {
        try {
            const {name, phone} = req.params

            const id = await this.userService.findByNameAndPhone(name,phone)

            if (id === undefined) {
                const error = new Error('User does not exist')
                error.status = 404
                error.message = '해당 이름과 핸드폰으로 등록된 계정이 없습니다.'
                throw(error)
            }

            res.status(200).json(id)
        } catch (error) {
            return res.status(error.status).json({errorMessage: error.message})
        }
    }
}

module.exports = UserController;
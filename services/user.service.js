const UserRepository = require('../services/user.repository.js')
const {Users} = require('../models/index.js')

class UserService {
    userRepository = new UserRepository(Users)

    // 여기에 함수 작성해주세요
}

module.exports = UserService;
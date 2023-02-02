const UserRepository = require('../repositories/user.repository')
const {Users} = require('../models/index.js')

class UserService {
    userRepository = new UserRepository(Users)

    // 이름과 핸드폰 번호로 아이디 찾기
    findByNameAndPhone = async (name,phone) => {
        try {
            const id = await this.userRepository.findByNameAndPhone(name,phone)

            return id

        } catch (error) {
            throw error   
        }
    }
}

module.exports = UserService;
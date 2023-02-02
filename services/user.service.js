const UserRepository = require('../repositories/user.repository')
const { Users } = require('../models/index.js')

class UserService {
    userRepository = new UserRepository(Users)


    // 유저 생성
    createUser = async (userId, id, password, name, phone, email, role, points, createdAt, updatedAt) => {
        const createUserData = await Users.userRepository.createUser( userId, id, password, name, phone, email, role, points, createdAt, updatedAt );
        
        return {
            userId: createUserData.userId,
            id: createUserData.id,
            password: createUserData.password,
            name: createUserData.name,
            phone: createUserData.phone,
            email: createUserData.email,
            role: createUserData.role,
            points: createUserData.points,
            createdAt: createUserData.createdAt,
            updatedAt: createUserData.updatedAt,
        }
    }


    // 유저 수정
    updateUser = async (password, name, phone, email, points, updatedAt) => {
        const updateUserData = await Users.userRepository.updateUser( password, name, phone, email, points, updatedAt );

        return {
            password: updateUserData.password,
            name: updateUserData.name,
            phone: updateUserData.phone,
            email: updateUserData.email,
            points: updateUserData.points,
            updatedAt: updateUserData.updatedAt,
        }
    }


    // 유저 삭제
    deleteUser = async (userId) => {
        const deleteUserData = await Users.userRepository.deleteUser( userId );

        return deleteUserData;
    }

    // 이름과 핸드폰 번호로 아이디 찾기
    findByNameAndPhone = async (name,phone) => {
        try {
            const id = await this.userRepository.findByNameAndPhone(name,phone)

            return id
        } catch (error) {
            throw error   
        }
    }

    // ID, 이름, 휴대폰 번호로 비밀번호 재설정
    putPasswordByIdNamePhone = async (id,name,phone,password) => {
        try {
            const userIdUpdatedPassword = await this.userRepository.putPasswordByIdNamePhone(id,name,phone,password)

            return userIdUpdatedPassword
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService;
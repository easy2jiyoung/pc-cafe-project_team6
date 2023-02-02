const UserRepository = require('../repositories/user.repository')
const { Users } = require('../models/index.js')

class UserService {
    userRepository = new UserRepository(Users)

    // 유저 전체 조회
    findUsers = async (id) => {
        const allUser = await Users.userRepository.findUsers( id );
        
        return allUser.map(users => {
            return {
                userId: users.userId,
                id: users.id,
                password: users.password,
                name: users.name,
                phone: users.phone,
                email: users.email,
                role: users.role,
                points: users.points,
            }
        });
    }


    // 특정 유저 조회
    findOneUser = async (id, userId) => {
        const oneUser = await Users.userRepository.findOneUser( id, userId );
        
        return {
            userId: oneUser.userId,
            id: oneUser.id,
            password: oneUser.password,
            name: oneUser.name,
            phone: oneUser.phone,
            email: oneUser.email,
            role: oneUser.role,
            points: oneUser.points,
            createdAt: oneUser.createdAt,
            updatedAt: oneUser.updatedAt,
        };
    }


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
}

module.exports = UserService;
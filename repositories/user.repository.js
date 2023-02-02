class UserRepository {
    constructor(UserModel) {
        this.userModel = UserModel
    }

    // 유저 조회
    findUsers = async (id) => {
        const users = await this.userModel.findAll({where: { id }});
        return users;
    }

    // 특정 유저 조회
    findOneUser = async (id, userId) => {
        const oneUser = await this.userModel.findOne({where: { id, userId }});
        return oneUser;
    }


    // 유저 생성
    createUser = async (id, password, name, phone, email, role, points) => {
        const createUserData = await this.userModel.create({ id, password, name, phone, email, role, points });
        return createUserData;
    }


    // 유저 수정
    updateUser = async (password, name, phone, email, role, points) => {
        const updateUserData = await this.userModel.update({ id, password, name, phone, email, role, points });
        return updateUserData;
    }

    
    // 유저 삭제
    deleteUser = async (userId) => {
        const deleteUserData = await this.userModel.destroy({where: { userId }});
        return deleteUserData;
    }
}

module.exports = UserRepository;
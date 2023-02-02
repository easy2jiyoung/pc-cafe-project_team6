// User.findOne() -> this.userModel.findOne()

class UserRepository {
    constructor(UserModel) {
        this.userModel = UserModel
    }

    
    findUsers = async (id) => {
        const users = await this.userModel.findAll({where: { id }});
        return users;
    }

    findOneUser = async (id, userId) => {
        const oneUser = await this.userModel.findOne({where: { id, userId }});
        return oneUser;
    }

    createUser = async (id, password, name, phone, email, role, points) => {
        const createUserData = await this.userModel.create({ id, password, name, phone, email, role, points });
        return createUserData;
    }

    updateUser = async (password, name, phone, email, role, points) => {
        const updateUserData = await this.userModel.update({ id, password, name, phone, email, role, points });
        return updateUserData;
    }

    deleteUser = async (userId) => {
        const deleteUserData = await this.userModel.destroy({where: { userId }});
        return deleteUserData;
    }

    // 이름과 핸드폰 번호로 아이디 찾기
    findByNameAndPhone = async (name,phone) => {
        try {
            const id = await this.userModel.findAll({
                where: {
                    name: name,
                    phone: phone
                },
                attributes: [userId, id]
            })

            return id
        } catch (error) {
            return error   
        }
    }
}

module.exports = UserRepository;
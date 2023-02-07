// const { Users } = require('../models/index.js')
const { Op } = require("sequelize");

class UserRepository {
  constructor(UserModel) {
    this.userModel = UserModel;
  }

  // 회원가입
  registerUser = async (id, password, phone, name, email, role, points) => {
    const registerData = await this.userModel.create({
      id: id,
      password: password,
      phone: phone,
      name: name,
      email: email,
      role: role,
      points: points,
    });
    return registerData;
  };

  // 회원가입시 이메일 또는 아이디 중복 조회
  findByEmailAndId = async (email, id) => {
    const finduser = await this.userModel.findAll({
      where: { [Op.or]: [{ email: email }, { id: id }] },
    });
    return finduser;
  };

  // (관리자) role=customer 유저 조회
  findUsers = async () => {
    const users = await this.userModel.findAll({ where: { role: "customer" } });
    return users;
  };

  // 특정 유저 조회
  findOneUser = async (id) => {
    try {
      const oneUser = await this.userModel.findOne({ where: { id } });
      if (oneUser === null) {
        const error = new Error(
          "계정이 존재하지 않습니다. ID와 패스워드를 확인해주세요."
        );
        error.status = 404;
        throw error;
      }

      return oneUser;
    } catch (error) {
      error.status = error.status ?? 400;
      throw error;
    }
  };

  // 유저 생성
  createUser = async (id, password, name, phone, email, role, points) => {
    const createUserData = await this.userModel.create({
      id,
      password,
      name,
      phone,
      email,
      role,
      points,
    });
    return createUserData;
  };

  //id로 나의 정보 수정
  updateUser = async (userId, id, phone, email, hashpassword) => {
    try {
      const updateUserData = await this.userModel.update(
        {
          phone: phone,
          email: email,
          password: hashpassword,
        },
        {
          where: { userId: userId },
        }
      );

      return updateUserData;
    } catch (error) {
      error.status = 400;
      throw error;
    }
  };

  // 유저 삭제
  deleteUser = async (userId) => {
    const deleteUserData = await this.userModel.destroy({ where: { userId } });
    return deleteUserData;
  };

  // 이름과 핸드폰 번호로 아이디 찾기
  findByNameAndPhone = async (name, phone) => {
    try {
      const [id] = await this.userModel.findAll({
        where: {
          name: name,
          phone: phone,
        },
        attributes: ["userId", "id"],
      });

      return id;
    } catch (error) {
      error.status = 400;
      throw error;
    }
  };

  // ID, 이름, 휴대폰 번호로 비밀번호 재설정
  putPasswordByIdNamePhone = async (id, name, phone, password) => {
    try {
      const [doesUserExist] = await this.userModel.findAll({
        where: {
          id: id,
          name: name,
          phone: phone,
        },
        attributes: ["userId"],
      });

      // If user does not exist
      if (doesUserExist === undefined) {
        const error = new Error(
          "아이디, 이름과 핸드폰 번호와 일치하는 계정이 없습니다."
        );
        error.status = 404;
        throw error;
      }

      const userIdUpdatedPassword = await this.userModel.update(
        { password: password },
        {
          where: {
            id: id,
          },
          attributes: ["userId"],
        }
      );

      return userIdUpdatedPassword;
    } catch (error) {
      error.status = error.status ?? 400;
      throw error;
    }
  };

  //id로 나의 포인트 조회 /api/users/points/:userId
  getMyPoint = async (userId) => {
    try {
      const myPoint = await this.userModel.findOne({
        where: { userId: userId },
        attributes: ["userId", "points"],
      });
      return myPoint;
    } catch (error) {
      error.status = 400;
      throw error;
    }
  };

  updatePoint = async (userId , points) => {
    try {
      const userUpdatePoint = await this.userModel.update(
        { points: points }, { where: { userId } }
      )
      
      return userUpdatePoint;
    } catch (error) {
      error.status = 400;
      throw error;
    }
  }
}

module.exports = UserRepository;

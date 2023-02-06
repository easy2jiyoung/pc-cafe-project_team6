const UserRepository = require("../repositories/user.repository");
const { Users } = require("../models/index.js");

class UserService {
  userRepository = new UserRepository(Users);

  // 회원가입
  registerUser = async (id, password, phone, name, email, role, points) => {
    const registerData = await this.userRepository.registerUser(
      id,
      password,
      phone,
      name,
      email,
      role,
      points
    );

    return {
      id: registerData.id,
      password: registerData.password,
      phone: registerData.phone,
      name: registerData.name,
      email: registerData.email,
      role: registerData.role,
      points: registerData.points,
    };
  };

  findByEmailAndId = async (email, id) => {
    const EmailAndIdData = await this.userRepository.findByEmailAndId(
      email,
      id
    );

    return EmailAndIdData.map((user) => {
      return {
        userId: user.userId,
        id: user.id,
        password: user.password,
        phone: user.phone,
        name: user.name,
        email: user.email,
        role: user.role,
        points: user.points,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    });
  };

  // 유저 전체 조회
  findUsers = async () => {
    const allUser = await this.userRepository.findUsers();

    return allUser.map((users) => {
      return {
        // 프론트 진행하면서 필요한 부분 추가 또는 삭제
        userId: users.userId,
        id: users.id,
        password: users.password,
        name: users.name,
        phone: users.phone,
        email: users.email,
        role: users.role,
        points: users.points,
      };
    });
  };

  // 특정 유저 조회
  findOneUser = async (id) => {
    try {
      const oneUser = await this.userRepository.findOneUser(id);

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
    } catch (error) {
      throw error;
    }
  };

  // 유저 생성
  createUser = async (
    userId,
    id,
    password,
    name,
    phone,
    email,
    role,
    points,
    createdAt,
    updatedAt
  ) => {
    const createUserData = await this.userRepository.createUser(
      userId,
      id,
      password,
      name,
      phone,
      email,
      role,
      points,
      createdAt,
      updatedAt
    );

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
    };
  };

  //id로 나의 정보 수정
  updateUser = async (userId, id, phone, email, password) => {
    try {
      const updateUserData = await this.userRepository.updateUser(
        userId,
        id,
        phone,
        email,
        password
      );
      return {
        id: updateUserData.id,
        password: updateUserData.password,
        name: updateUserData.name,
        phone: updateUserData.phone,
        email: updateUserData.email,
        points: updateUserData.points,
        updatedAt: updateUserData.updatedAt,
      };
    } catch (error) {
      throw error;
    }
  };

  // 유저 삭제
  deleteUser = async (userId) => {
    const deleteUserData = await this.userRepository.deleteUser(userId);

    return deleteUserData;
  };

  // 이름과 핸드폰 번호로 아이디 찾기
  findByNameAndPhone = async (name, phone) => {
    try {
      const id = await this.userRepository.findByNameAndPhone(name, phone);

      return id;
    } catch (error) {
      throw error;
    }
  };

  // ID, 이름, 휴대폰 번호로 비밀번호 재설정
  putPasswordByIdNamePhone = async (id, name, phone, password) => {
    try {
      const userIdUpdatedPassword =
        await this.userRepository.putPasswordByIdNamePhone(
          id,
          name,
          phone,
          password
        );

      return userIdUpdatedPassword;
    } catch (error) {
      throw error;
    }
  };

  //id로 포인트 조회
  getMyPoint = async (userId) => {
    try {
      const getMyPoint = await this.userRepository.getMyPoint(userId);

      return getMyPoint;
    } catch (error) {
      throw error;
    }
  };

  // (관리자) 포인트 변경
  updatePoint = async (userId, points) => {
    try {
      const updatePoint = await this.userRepository.updatePoint(userId, points);

      return {
        userId: updatePoint.userId,
        points: updatePoint.points,
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;

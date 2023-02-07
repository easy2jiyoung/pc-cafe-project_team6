const UserService = require('../../services/user.service')


let mockUserRepository = {
    registerUser: jest.fn(),
    findUsers: jest.fn(),
}

let userService = new UserService()
userService.userRepository = mockUserRepository

describe('3계층 아키텍처 User service 유닛 테스트', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    // 회원가입 유닛 테스트
    test('User service registerUser method', async () => {
        const repositoryRegisterUserReturnValue = {
            id: 'id',
            password: 'hashedpassword',
            phone: '010-0123-1230',
            name: '이름',
            email: 'test@asdf.com',
            role: 'customer',
            points: 10000
        }

        mockUserRepository.registerUser = jest.fn(() => {
            return repositoryRegisterUserReturnValue
        })

        const serviceRegisterUser = await userService.registerUser(
            repositoryRegisterUserReturnValue.id,
            repositoryRegisterUserReturnValue.password,
            repositoryRegisterUserReturnValue.phone,
            repositoryRegisterUserReturnValue.name,
            repositoryRegisterUserReturnValue.email,
            repositoryRegisterUserReturnValue.role,
            repositoryRegisterUserReturnValue.points)

        expect(serviceRegisterUser).toEqual(repositoryRegisterUserReturnValue)
        expect(mockUserRepository.registerUser).toHaveBeenCalledTimes(1)
        expect(mockUserRepository.registerUser).toHaveBeenCalledWith(
            repositoryRegisterUserReturnValue.id,
            repositoryRegisterUserReturnValue.password,
            repositoryRegisterUserReturnValue.phone,
            repositoryRegisterUserReturnValue.name,
            repositoryRegisterUserReturnValue.email,
            repositoryRegisterUserReturnValue.role,
            repositoryRegisterUserReturnValue.points
        )
    })

    // 유저 전체 조회 유닛 테스트
    test('User service findUsers method', async () => {
        const repositoryFindUsersReturnValue = [
            {
                userId: 1,
                id: 'id',
                password: 'hashedpassword',
                phone: '010-0123-1230',
                name: '이름',
                email: 'test@asdf.com',
                role: 'customer',
                points: 10000,
                createdAt: new Date,
                updatedAt: new Date
            }
        ]

        mockUserRepository.findUsers = jest.fn(() => {
            return repositoryFindUsersReturnValue
        })

        const serviceFindUsers = await userService.findUsers()

        expect(serviceFindUsers).toEqual([{
            userId: 1,
            id: 'id',
            password: 'hashedpassword',
            phone: '010-0123-1230',
            name: '이름',
            email: 'test@asdf.com',
            role: 'customer',
            points: 10000
        }])
        expect(mockUserRepository.findUsers).toHaveBeenCalledTimes(1)

    })

})
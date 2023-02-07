const UserService = require('../../services/user.service')


let mockUserRepository = {
    registerUser: jest.fn(),
    findUsers: jest.fn(),
    updateUser: jest.fn(),
    deleteUser: jest.fn(),
    findByNameAndPhone: jest.fn()
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

    // id로 나의 정보 수정
    test('User service updateUser method', async () => {
        const date = new Date

        const repositoryUpdateUserReturnValue = {
            userId: 1,
            id: 'id',
            hashpassword: 'hashedpassword',
            phone: '010-0123-1230',
            name: '이름',
            email: 'test@asdf.com',
            role: 'customer',
            points: 10000,
            createdAt: date,
            updatedAt: date
        }

        mockUserRepository.updateUser = jest.fn(() => {
            return repositoryUpdateUserReturnValue
        })

        const serviceUpdateUser = await userService.updateUser(1,'id','010-0123-1230','test@asdf.com','hashedpassword')

        expect(serviceUpdateUser).toEqual({
            id: 'id',
            hashpassword: 'hashedpassword',
            name: '이름',
            phone: '010-0123-1230',
            email: 'test@asdf.com',
            points: 10000,
            updatedAt: date
        })
        expect(mockUserRepository.updateUser).toHaveBeenCalledTimes(1)
        expect(mockUserRepository.updateUser).toHaveBeenCalledWith(1,'id','010-0123-1230','test@asdf.com','hashedpassword')
    })

    // 유저 삭제
    test('User service deleteUser method', async () => {
        const repositoryDeleteUserReturnValue = 1
        const userId = 1

        mockUserRepository.deleteUser = jest.fn(() => {
            return repositoryDeleteUserReturnValue
        })

        const serviceDeleteUser = await userService.deleteUser(userId)

        expect(serviceDeleteUser).toEqual(repositoryDeleteUserReturnValue)
        expect(mockUserRepository.deleteUser).toHaveBeenCalledTimes(1)
        expect(mockUserRepository.deleteUser).toHaveBeenCalledWith(userId)

    })

    // 이름과 핸드폰 번호로 아이디 찾기
    test('User service findByNameAndPhone method', async () => {
        const returnId = 'id'

        mockUserRepository.findByNameAndPhone = jest.fn(() => {
            return returnId
        })

        const serviceFindByNameAndPhone = await userService.findByNameAndPhone('이름','012-123-123')

        expect(serviceFindByNameAndPhone).toEqual(returnId)
        expect(mockUserRepository.findByNameAndPhone).toHaveBeenCalledTimes(1)
        expect(mockUserRepository.findByNameAndPhone).toHaveBeenCalledWith('이름','012-123-123')

    })
})
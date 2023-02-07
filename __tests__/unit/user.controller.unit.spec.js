const UserController = require('../../controllers/user.controller.js')


let mockUserService = {
    registerUser: jest.fn(),
    findByEmailAndId: jest.fn()
}

let mockRequest = {
    params: jest.fn(),
    body: jest.fn()
}

let mockResponse = {
    status: jest.fn(),
    json: jest.fn()
}


let userController = new UserController()
userController.userService = mockUserService

describe('3계층 아키텍처 User controller 유닛 테스트', () => {
    beforeEach(() => {
        jest.resetAllMocks()

        // mockResponse.status의 경우 메서드 체이닝으로 인해 반환값이 Response(자신: this)로 설정되어야합니다.
        mockResponse.status = jest.fn().mockReturnThis()
    })

    test('User controller registerUser method', async () => {
        // mockUserService.findByEmailAndId = jest.fn(() => {
        //     return null
        // })
        
        // mockUserService.registerUser = jest.fn(() => {
        //     return 'user registered'
        // })

        // mockRequest.body = jest.fn(() => {
        //     return {
        //         id:'id',
        //         password:'password',
        //         passwordCheck: 'password',
        //         phone:'010-123-1231',
        //         name:'이름',
        //         email:'asdf@asdf.com',
        //         role:'customer',
        //         points:10000
        //     }
        // })

        // const controllerRegisterUser = await userController.registerUser(mockRequest, mockResponse)

        // // expect(mockUserService.registerUser).toHaveBeenCalledWith(
        // //     'id',
        // //     'password',
        // //     '010-123-1231',
        // //     '이름',
        // //     'asdf@asdf.com',
        // //     'customer',
        // //     10000
        // // )
        // expect(mockResponse.status).toHaveBeenCalledTimes(1)
        // expect(mockResponse.status).toHaveBeenCalledWith(201)

        // expect(mockResponse.json).toHaveBeenCalledWith({
        //     result: 'success',
        //     data: 'user registered'
        // })

    })
})
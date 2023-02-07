const PCController = require('../../controllers/pc.controller.js')


let mockPcService = {
    getPCList: jest.fn(),
    updatePcStatus: jest.fn()
}

let mockRequest = {
    params: jest.fn(),
    body: jest.fn()
}

let mockResponse = {
    status: jest.fn(),
    json: jest.fn(),
    locals: jest.fn()
}


let pcController = new PCController()
pcController.pcService = mockPcService

describe('3계층 아키텍처 PC controller 유닛 테스트', () => {
    beforeEach(() => {
        jest.resetAllMocks()

        // mockResponse.status의 경우 메서드 체이닝으로 인해 반환값이 Response(자신: this)로 설정되어야합니다.
        mockResponse.status = jest.fn().mockReturnThis()
    })

    test('PC controller getPCList method', async () => {
        const serviceGetPcListReturnValue = [
            {pcId: 1, pcStatus: true},
            {pcId: 2, pcStatus: false}
        ]

        mockPcService.getPCList = jest.fn(() => {
            return serviceGetPcListReturnValue
        })

        await pcController.getPCList(mockRequest, mockResponse)

        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(200)
        
        expect(mockPcService.getPCList).toHaveBeenCalledTimes(1)

        expect(mockResponse.json).toHaveBeenCalledWith(
            [
                {pcId: 1, pcStatus: true},
                {pcId: 2, pcStatus: false}
            ]
        )
    })

    test('PC controller getPCList method', async () => {
        mockPcService.updatePcStatus = jest.fn(() => {
            return '1'
        })

        await pcController.updatePcStatus(mockRequest, mockResponse)

        expect(mockResponse.status).toHaveBeenCalledTimes(1)
        expect(mockResponse.status).toHaveBeenCalledWith(200)

        expect(mockPcService.updatePcStatus).toHaveBeenCalledTimes(1)
        expect(mockResponse.json).toHaveBeenCalledWith({message:'업데이트 되었습니다.'})
    })
})
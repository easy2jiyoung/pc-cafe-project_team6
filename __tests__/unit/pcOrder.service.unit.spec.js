const PCOrderService = require('../../services/pcOrder.service')

let mockPCOrderRepository = {
    postPCOrder: jest.fn(),
}

let pcOrderService = new PCOrderService()
pcOrderService.pcOrderRepository = mockPCOrderRepository

describe('3계층 아키텍처 PC Order service 유닛 테스트', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    // PC 이용시간 결제 유닛 테스트
    test('PC Order service postPCOrder method', async () => {
        const date = new Date
        const repositoryPostPCOrderReturnValue = {
            pcOrderId: 1,
            userId: 2,
            pcId: 3,
            startDateTime: date,
            endDateTime: date,
            deductedPoints: 1000
        }

        mockPCOrderRepository.postPCOrder = jest.fn(() => {
            return repositoryPostPCOrderReturnValue
        })

        const servicePostPCOrder = await mockPCOrderRepository.postPCOrder(
            2, 3, date, date, 1000
        )

        expect(servicePostPCOrder).toEqual(repositoryPostPCOrderReturnValue)

        expect(mockPCOrderRepository.postPCOrder).toHaveBeenCalledTimes(1)
        expect(mockPCOrderRepository.postPCOrder).toHaveBeenCalledWith(2, 3, date, date, 1000)

    })
})
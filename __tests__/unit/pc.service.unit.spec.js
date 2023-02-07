const PCService = require('../../services/pc.service')


let mockPCRepository = {
    getPCList: jest.fn(),
    updatePcStatus: jest.fn()
}

let pcService = new PCService()
pcService.pcRepository = mockPCRepository

describe('3계층 아키텍처 PC service 유닛 테스트', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    // PC 목록 조회 테스트
    test('PC service getPCList method', async () => {
        const repositoryGetPcListReturnValue = [
            {pcId: 1, pcStatus: true},
            {pcId: 2, pcStatus: false}
        ]
        
        mockPCRepository.getPCList = jest.fn(() => {
            return repositoryGetPcListReturnValue
        })

        const serviceGetPcList = await pcService.getPCList()

        expect(serviceGetPcList).toEqual([
            {pcId: 1, pcStatus: true},
            {pcId: 2, pcStatus: false}
        ])
        expect(mockPCRepository.getPCList).toHaveBeenCalledTimes(1)
    })
})
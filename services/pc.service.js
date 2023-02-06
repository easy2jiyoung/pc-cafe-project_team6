const PCRepository = require('../repositories/pc.repository.js')
const {PCs,PCOrders} = require('../models/index.js')

class PCService {
    pcRepository = new PCRepository(PCs,PCOrders)

    // PC 목록 조회
    getPCList = async () => {
        try {
            const pcList = await this.pcRepository.getPCList()

            return pcList
        } catch (error) {
            throw error
        }
    }

    // PC status 업데이트
    updatePcStatus = async () => {
        try {
            const pcList = await this.pcRepository.updatePcStatus()

            return
        } catch (error) {
            throw error
        }
    }
}

module.exports = PCService;
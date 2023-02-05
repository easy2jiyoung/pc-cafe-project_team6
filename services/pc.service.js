const PCRepository = require('../repositories/pc.repository.js')
const {PCs} = require('../models/index.js')

class PCService {
    pcRepository = new PCRepository(PCs)

    // PC 목록 조회
    getPCList = async () => {
        try {
            const pcList = await this.pcRepository.getPCList()

            return pcList
        } catch (error) {
            throw error
        }
    }
}

module.exports = PCService;
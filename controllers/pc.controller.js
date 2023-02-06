const PCService = require('../services/pc.service.js')

class PCController {
    pcService = new PCService()

    // PC 목록 조회
    getPCList = async (req,res) => {
        try {
            const pcList = await this.pcService.getPCList()

            res.status(200).json(pcList)
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }

    // PC status 업데이트
    updatePcStatus = async (req,res) => {
        try {
            const pcList = await this.pcService.updatePcStatus()

            return res.status(200).json({message:'업데이트 되었습니다.'})
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
}

module.exports = PCController
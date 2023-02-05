const PCOrderService = require('../services/pcOrder.service.js')

class PCOrderController {
    pcOrderService = new PCOrderService()

    postPCOrder = async (req,res) => {
        try {
            const {userId, pcId} = req.params
            const {startDateTime, endDateTime, deductedPoints} = req.body

            const newPCOrder = await this.pcOrderService.postPCOrder(userId, pcId, startDateTime, endDateTime, deductedPoints)

            res.status(201).json({message: `PC ${pcId}번을 예약했습니다.`})
        } catch (error) {
            res.status(error.status).json({message: error.message})
        }
    }
}

module.exports = PCOrderController
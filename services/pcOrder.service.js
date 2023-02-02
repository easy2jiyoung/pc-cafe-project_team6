const PCOrderRepository = require('../repositories/pcOrder.repository.js')
const {PCOrders, Users, PCs} = require('../models/index.js')

class PCOrderService {
    pcOrderRepository = new PCOrderRepository(PCOrders, Users, PCs)

    postPCOrder = async (userId, pcId, startDateTime, endDateTime, deductedPoints) => {
        try {
            const newPCOrder = await this.pcOrderRepository.postPCOrder(userId, pcId, startDateTime, endDateTime, deductedPoints)

            return newPCOrder
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = PCOrderService;
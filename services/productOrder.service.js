const ProductOrderRepository = require('../repositories/productOrder.repository.js')
const {ProductOrders, Products, Users, PCOrders} = require('../models/index.js')

class ProductOrderService {
    productOrderRepository = new ProductOrderRepository(ProductOrders, Products, Users, PCOrders)

    // 상품 구매 등록
    postProductOrder = async (userId, orders, remainingPoints) => {
        try {
            orders = JSON.parse(orders)
            const newProductOrder = await this.productOrderRepository.postProductOrder(userId, orders, remainingPoints)
            return newProductOrder
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductOrderService;
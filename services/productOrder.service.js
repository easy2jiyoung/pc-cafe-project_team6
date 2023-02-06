const ProductOrderRepository = require('../repositories/productOrder.repository.js')
const {ProductOrders, Products} = require('../models/index.js')

class ProductOrderService {
    productOrderRepository = new ProductOrderRepository(ProductOrders, Products)

    // 상품 구매 등록
    postProductOrder = async (userId, orders) => {
        try {
            orders = JSON.parse(orders)
            const newProductOrder = await this.productOrderRepository.postProductOrder(userId, orders)
            return newProductOrder
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductOrderService;
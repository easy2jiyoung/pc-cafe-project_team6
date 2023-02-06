const ProductOrderRepository = require('../repositories/productOrder.repository.js')
const {ProductOrders} = require('../models/index.js')

class ProductOrderService {
    productOrderRepository = new ProductOrderRepository(ProductOrders)

    // 상품 구매 등록
    postProductOrder = async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = ProductOrderService;
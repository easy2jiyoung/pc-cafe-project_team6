const ProductOrderService = require('../services/productOrder.service.js')

class ProductOrderController {
    productOrderService = new ProductOrderService()

    // 상품 구매 등록
    postProductOrder = async (req, res, next) => {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = ProductOrderController;
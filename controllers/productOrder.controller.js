const ProductOrderService = require('../services/productOrder.service.js')

class ProductOrderController {
    productOrderService = new ProductOrderService()

    // 상품 구매 등록
    postProductOrder = async (req, res) => {
        try {
            const {userId} = req.params
            const {orders, remainingPoints} = req.body

            await this.productOrderService.postProductOrder(userId, orders, remainingPoints)
            
            return res.status(201).json({message: '구매 내용이 성공적으로 등록되었습니다.'})
        } catch (error) {
            console.log(error)
            return res.status(error.status).send({message:error.message})
        }
    }
}

module.exports = ProductOrderController;
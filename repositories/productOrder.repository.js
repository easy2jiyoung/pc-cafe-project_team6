class ProductOrderRepository {
    constructor(ProductOrderModel, ProductModel) {
        this.productOrderModel = ProductOrderModel
        this.productModel = ProductModel
    }

    // 상품 구매 등록
    postProductOrder = async (userId, orders) => {
        try {            
            for(let i=0; i<orders.length; i++) {
                let product = await this.productModel.findByPk(orders[i].productId, {attributes: ['productId','productStock'], raw:true})

                if (product.productStock - orders[i].purchasedUnits < 0) {
                    const error = new Error(`재고가 부족합니다. ${orders[i].productName}의 재고가 ${product.productStock}개 입니다.`)
                    error.status = 412
                    throw error
                }

                orders[i].deductedPoints = Number(orders[i].productPrice) * orders[i].purchasedUnits
                orders[i].userId = Number(userId)
                orders[i].productId = Number(orders[i].productId)

                delete orders[i].productPrice
                delete orders[i].productImgUrl
            }

            await this.productOrderModel.bulkCreate(orders)
            
            return orders
        } catch (error) {
            error.status = error.status ?? 400
            throw error
        }
    }
}

module.exports = ProductOrderRepository;
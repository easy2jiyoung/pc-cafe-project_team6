const luxon = require('luxon')
const { Op } = require('sequelize')

class ProductOrderRepository {
    constructor(ProductOrderModel, ProductModel, UserModel, PCOrderModel) {
        this.productOrderModel = ProductOrderModel
        this.productModel = ProductModel
        this.userModel = UserModel
        this.pcOrderModel = PCOrderModel
    }

    // 상품 구매 등록
    postProductOrder = async (userId, orders, remainingPoints) => {
        try {
            console.log(userId)
            
            let additionalTime
            for(let i=0; i<orders.length; i++) {
                if(orders[i].productName.includes('이용시간')) {
                    additionalTime = orders[i].purchasedUnits
                    orders.splice(i,1)
                    continue
                }
                let product = await this.productModel.findByPk(orders[i].productId, {attributes: ['productId','productStock'], raw:true})
                let newProductStock = product.productStock - orders[i].purchasedUnits

                if (newProductStock < 0) {
                    const error = new Error(`재고가 부족합니다. ${orders[i].productName}의 재고가 ${product.productStock}개 입니다.`)
                    error.status = 412
                    throw error
                }

                // 제고 업데이트
                await this.productModel.update({productStock: newProductStock},{where:{productId: product.productId}})

                orders[i].deductedPoints = Number(orders[i].productPrice) * orders[i].purchasedUnits
                orders[i].userId = Number(userId)
                orders[i].productId = Number(orders[i].productId)

                delete orders[i].productPrice
                delete orders[i].productImgUrl
            }

            console.warn(orders)
            await this.productOrderModel.bulkCreate(orders)

            await this.userModel.update({points: remainingPoints}, {where:{userId}})

            if (additionalTime) {
                const date = new Date
                let {endDateTime} = await this.pcOrderModel.findOne({
                    where: {userId: userId, endDateTime: {[Op.gte]: date}},
                    attributes: ['endDateTime'],
                    raw:true
                })
                endDateTime = luxon.DateTime.fromJSDate(endDateTime)
                let newEndDateTime = endDateTime.plus({hours: Number(additionalTime)}).toFormat('yyyy-MM-dd HH:mm:ss')
                await this.pcOrderModel.update({endDateTime: newEndDateTime},{
                    where: {userId: userId, endDateTime: {[Op.gte]: date}}
                })
            }
            
            return orders
        } catch (error) {
            error.status = error.status ?? 400
            throw error
        }
    }
}

module.exports = ProductOrderRepository;
const { type } = require("os")
const { Op } = require("sequelize")

class ProductRepository {
    constructor(ProductModel) {
        this.productModel = ProductModel
    }

    // 상품 등록
    productRegister = async(productName, productStock, productPrice, productImgUrl, productType) => {
        try {
            const newProduct = await this.productModel.create({
                productName,
                productStock,
                productPrice,
                productImgUrl,
                productType
            }, {
                raw: true
            })
            return {status: 201, success: true, message: "상품이 등록되었습니다."}
        } catch (error) {
            error.name = "database error"
            error.status = 404
            throw error
        }
    }

    // 상품 조회 (페이지네이션)
    readProducts = async(limit, offset, type) => {
        try {
            let products
            if (type === "all") { 
                products = await this.productModel.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        productStock: {[Op.gt]: 0},
                    }
                })
                console.log("all",type, products)
            } else if (type === "food") {
                products = await this.productModel.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        productType: "먹거리",
                        productStock: {[Op.gt]: 0}
                    }
                })
                console.log("eat"+ products)
            } else if (type === "drink") {
                products = await this.productModel.findAndCountAll({
                    offset,
                    limit,
                    where: {
                        productType: "음료",
                        productStock: {[Op.gt]: 0}
                    }
                })
                console.log(type+ products)
            } 
            // else if (type === "time") {
            //     products = await this.productModel.findAndCountAll({
            //         offset,
            //         limit,
            //         where: {
            //             productType: "이용시간",
            //             productStock: {[Op.gt]: 0}
            //         }
            //     })
            // }
            // console.log(products)
            return products
        } catch (error) {
            error.status = 400
            throw error
        }
    }

    // 전체 상품 조회 (관리자 페이지)
    allProductsList = async() => {
        try {
            const products = await this.productModel.findAll({
                attributes:['productName','productStock','productPrice','productType','productImgUrl'],
                order: [['productName', 'ASC']],
                raw:true
            })
            return products
        } catch (error) {
            error.status = 400
            throw error
        }
    }

    // 상품 상세 조회
    getOneProduct = async(productId) => {
        try {
            const oneProduct = await this.productModel.findOne({
                where: {productId}
            })
            return oneProduct
        } catch (error) {
            error.status = 400;
            throw error;
        }
    }

    // 상품 수정
    getUpdateProduct = async(productId, productName, productStock, productPrice, productImgUrl, productType) => {
        try {
            const updateProduct = await this.productModel.update({
                productName,
                productStock,
                productPrice,
                productImgUrl,
                productType
            }, {
                where: {productId}
            })
            return updateProduct
        } catch (error) {
            error.status = 400;
            throw error
        }
    }

    // 상품 삭제
    getXProduct = async(productId) => {
        try {
            const xProduct = await this.productModel.destroy({
                where: {productId}
            })
            return xProduct
        } catch (error) {
            error.status = 400;
            throw error
        }
    }
}

module.exports = ProductRepository;
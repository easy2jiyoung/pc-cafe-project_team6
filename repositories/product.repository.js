// const {sequelize, DatabaseError} = require('sequelize')
// const {Review, sequelize} = require('../models/index.js')

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
            error.status = 400
            throw error
        }
    }

    // 상품 조회
    readProduct = async() => {
        try {
            const products = await this.productModel.findAll({
            }, {
                raw: true
            })
            return {status: 200, success: true, message: "상품 조회"}
        } catch (error) {
            error.name = "database error"
            error.status = 400
            throw error
        }
    }
}

module.exports = ProductRepository;
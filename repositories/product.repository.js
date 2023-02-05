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
            error.status = 404
            throw error
        }
    }

    // 상품 조회
    readProduct = async() => {
        try {
            const products = await this.productModel.findAll({})
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
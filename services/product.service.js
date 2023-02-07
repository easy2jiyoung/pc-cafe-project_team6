const ProductRepository = require('../repositories/product.repository.js')
const {Products} = require('../models/index.js')
const { response } = require('express')

class ProductService {
    productRepository = new ProductRepository(Products)

    // 상품 등록
    productRegister = async(productName, productStock, productPrice, productImgUrl, productType) => {
        try {
            const newProduct = await this.productRepository.productRegister(
                productName,
                productStock,
                productPrice,
                productImgUrl,
                productType
            )
            return newProduct
        } catch (error) {
            throw error;
        }
    }

    // 상품 조회 (페이지네이션)
    readProducts = async(pageNum) => {
        try {
            const limit = 8
            const offset = (pageNum -1) * limit
            const allProduct = await this.productRepository.readProducts(limit, offset)
            const lastPage = Math.ceil(allProduct.count / limit)
            return { allProduct, lastPage }
        } catch (error) {
            throw error;
        }
    }

    // 상품 전체 조회 (관리자 페이지)
    allProductsList = async() => {
        try {
            const products = await this.productRepository.allProductsList()
            return products
        } catch (error) {
            throw error;
        }
    }

    // 상품 상세 조회
    getOneProduct = async(productId) => {
        try {
            const getOneProduct = await this.productRepository.getOneProduct(productId);
            return getOneProduct;
        } catch (error) {
            throw error;
        }
    }

    // 상품 수정
    getUpdateProduct = async(productId, productName, productStock, productPrice, productImgUrl, productType) => {
        try {
            const updateProduct = await this.productRepository.getUpdateProduct(
                productId,
                productName,
                productStock,
                productPrice,
                productImgUrl,
                productType
            )
            return updateProduct
        } catch (error) {
            throw error
        }
    }

    // 상품 삭제
    getXProduct = async(productId) => {
        try {
            const getXProduct = await this.productRepository.getXProduct(productId)
            return getXProduct
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductService;
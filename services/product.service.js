const ProductRepository = require('../repositories/product.repository.js')
const {Products} = require('../models/index.js')

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

    // 상품 조회
    readProduct = async() => {
        
    }
}

module.exports = ProductService;
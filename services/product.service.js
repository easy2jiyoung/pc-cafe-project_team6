const ProductRepository = require('../repositories/product.repository.js')
const {Products} = require('../models/index.js')

class ProductService {
    productRepository = new ProductRepository(Products)

    // 여기에 함수 작성해주세요
}

module.exports = ProductService;
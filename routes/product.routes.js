const express = require('express')
const router = express.Router()
const { Products } = require('../models/index.js')

// upload
const setUpload = require('../middlewares/uploadImage-middleware')

// controllers
const ProductController = require('../controllers/product.controller.js')
const productController = new ProductController()

// 이미지 업로드
router.post('/image', setUpload('file'), productController.imageUpload)

// 상품 등록
router.post('/', productController.addNewProduct)

// 상품 조회
router.get('/', productController.productList)

// 상품 상세 조회
router.get('/:productId', productController.oneProduct)

// 상품 수정
router.put('/:productId', productController.modifyProduct)

// 상품 삭제
router.delete('/:productId', productController.deleteProduct)

module.exports = router
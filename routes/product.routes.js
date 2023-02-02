const express = require('express')
const router = express.Router()

// upload
const setUpload = require('../middlewares/uploadImage-middleware')

// controllers
const ProductController = require('../controllers/product.controller.js')
const productController = new ProductController()

// 이미지 업로드
router.post('/image', setUpload('file'), productController.imageUpload)

// 상품 등록
router.post('/', registerProduct = async (req, res) => {
    
})

module.exports = router
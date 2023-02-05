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
router.get('/:productId', oneProduct = async (req, res) => {
    const {productId} = req.params
    const product = await Products.findOne({
        where: {productId}
    });
    res.status(200).send(product)
})

// 상품 수정
router.put('/:productId', modifyProduct = async (req, res) => {
    const {productName, productStock, productPrice, productImgUrl, productType} = req.body
    const {productId} = req.params
    const updateProduct = await Products.update({
        productName,
        productStock,
        productPrice,
        productImgUrl,
        productType
        }, {
            where: {productId}
        })
    res.status(201).send(updateProduct)
})

// 상품 삭제
router.delete('/:productId', deleteProduct = async (req, res) => {
    const {productId} = req.params
    const deleteProduct = await Products.destroy({
        where: {productId}
    })
    res.status(200).send({message:"성공적으로 삭제되었습니다."})
})

module.exports = router
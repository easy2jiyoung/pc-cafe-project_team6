const ProductService = require('../services/product.service.js')
const {publicBucketURL} = require('../config/config.json').Cloudflare

class ProductController {
    productService = new ProductService()

    // 이미지 업로드
    imageUpload = async (req, res, next) => {
        return res.status(200).json({ success: true, productImgUrl: `${publicBucketURL}/${res.req.file.key}` });
    }

    // 상품 등록
    addNewProduct = async (req, res) => {
        try {
            const {productName, productStock, productPrice, productImgUrl, productType} = req.body
            const productInfo = await this.productService.productRegister(
                productName,
                productStock,
                productPrice,
                productImgUrl,
                productType
            )
            res.status(201).json(productInfo)
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
    }

    // 상품 조회 (페이지네이션)
    productList = async (req, res) => {
        try {
            const pageNum = req.query.page || 1
            const type = req.query.type
            console.log("😀",type)
            const products = await this.productService.readProducts(pageNum, type)
            res.status(200).json(products)
        } catch (error) {
            console.log(error)
            return res.status(error.status).json({message: error.message})
        }
    }

    // 전체 상품 조회 (관리자 페이지)
    allProductsList = async (req, res) => {
        try {
            const products = await this.productService.allProductsList()
            res.status(200).json(products)
        } catch (error) {
            console.log(error)
            return res.status(error.status).json({message: error.message})
        }
    }
    
    // 상품 상세 조회
    oneProduct = async (req, res) => {
        try {
            const { productId } = req.params;
            const oneProduct = await this.productService.getOneProduct(productId)
            res.status(200).json(oneProduct)
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
    }

    // 상품 수정
    modifyProduct = async (req, res) => {
        try {
            const {productName, productStock, productPrice, productImgUrl, productType} = req.body
            const {productId} = req.params
            const updateProduct = await this.productService.getUpdateProduct(
                productId,
                productName,
                productStock,
                productPrice,
                productImgUrl,
                productType
            );
            res.status(201).json({updateProduct})
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
    }

    // 상품 삭제
    deleteProduct = async (req, res, next) => {
        try {
            const {productId} = req.params
            const xProduct = await this.productService.getXProduct(productId)
            res.status(200).json(xProduct)
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
    }    
}

module.exports = ProductController;
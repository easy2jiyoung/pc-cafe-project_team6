const ProductService = require('../services/product.service.js')
const {publicBucketURL} = require('../config/config.json').Cloudflare

class ProductController {
    productService = new ProductService()

    // 이미지 업로드
    imageUpload = async (req, res, next) => {
        return res.status(200).json({ success: true, productImgUrl: `${publicBucketURL}/${res.req.file.key}` });
    }

    // 상품 등록
    addNewProduct = async (req, res, next) => {
        try {
            const {productName, productStock, productPrice, productImgUrl, productType} = req.body
            const productInfo = await this.productService.productRegister(
                productName,
                productStock,
                productPrice,
                productImgUrl,
                productType
            )
            return res.status(201).json({message: "성공적으로 등록되었습니다."})
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
    }

    // 상품 조회
    productList = async (req, res, next) => {
        try {
            const products = await this.productService.readProduct()
            return res.status(200).json({products})
        } catch (error) {
            return res.status(error.status).json({message: error.message})
        }
    }
    
}

module.exports = ProductController;
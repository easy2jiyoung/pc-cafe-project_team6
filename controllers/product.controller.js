const ProductService = require('../services/product.service.js')
const {publicBucketURL} = require('../config/config.json').Cloudflare

class ProductController {
    productService = new ProductService()

    // 이미지 업로드
    imageUpload = async (req, res, next) => {
        return res.status(200).json({ success: true, productImgUrl: `${publicBucketURL}/${res.req.file.key}` });
    }
}

module.exports = ProductController;
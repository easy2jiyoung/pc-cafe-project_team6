const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes')
router.use('/users', userRouter)

const productRouter = require('./product.routes')
router.use('/products', productRouter)

module.exports = router;
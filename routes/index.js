const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes')
const loginRouter = require("./login.routes")
router.use('/users', [userRouter, loginRouter])

const productRouter = require('./product.routes')
router.use('/products', productRouter)

const PCController = require('../controllers/pc.controller.js')
const pcController = new PCController()
router.get('/pcs', pcController.getPCList)
router.get('/pcs/updatePcStatus', pcController.updatePcStatus)
router.put('/pcs/:pcId', pcController.logoutPCstatus)

const PCOrderController = require('../controllers/pcOrder.controller.js')
const pcOrderController = new PCOrderController()
router.post('/pcOrder/:userId/:pcId', pcOrderController.postPCOrder)

const ProductOrderController = require('../controllers/productOrder.controller.js')
const productOrderController = new ProductOrderController()
router.post('/productOrder/:userId', productOrderController.postProductOrder)

const adminRouter = require('./admin.routes')
router.use('/admin', adminRouter)

const auth_middleware = require("../middlewares/auth-middlewares")
router.get('/auth',auth_middleware)

module.exports = router;
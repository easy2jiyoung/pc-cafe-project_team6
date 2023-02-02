const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes')
router.use('/users', userRouter)

const productRouter = require('./product.routes')
router.use('/products', productRouter)

const PCController = require('../controllers/pc.controller.js')
const pcController = new PCController()
router.get('/pcs', pcController.getPCList)

const loginRouter = require("./login.routes");
router.use('/login', loginRouter)


module.exports = router;
const router = require('express').Router()
const orderController = require('../../controller/order.controller')

router.get('/', orderController.createOrder)
    .post('/create', orderController.createOrder)


module.exports = router
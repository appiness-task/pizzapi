const router = require('express').Router()
const productController = require('../../controller/product.controller')

router.get('/', productController.getAllProducts)
    .post('/', productController.addProduct)
    .put('/', productController.updateProduct)
    .delete('/:product_id', productController.deleteProduct)

module.exports = router
const router = require('express').Router()
const productController = require('../../controller/product.controller')

router.get('/', productController.getAllCategory)
    .post('/create', productController.createCategory)
    .put('/update', productController.updateCategory)
    .patch('/test', productController.updateCategory)
    .delete('/remove', productController.deleteCategory)

module.exports = router
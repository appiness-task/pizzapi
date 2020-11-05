const router = require('express').Router()
const categoryController = require('../../controller/category.controller')

router.get('/', categoryController.getAllCategory)
    .post('/', categoryController.createCategory)
    .put('/', categoryController.updateCategory)
    .delete('/', categoryController.deleteCategory)

router.get('/all',categoryController.getProductByCategory)

module.exports = router
const router = require('express').Router()
const categoryController = require('../../controller/category.controller')

router.get('/', categoryController.getAllCategory)
    .post('/create', categoryController.createCategory)
    .put('/update', categoryController.updateCategory)
    .patch('/test', categoryController.updateCategory)
    .delete('/remove', categoryController.deleteCategory)

module.exports = router
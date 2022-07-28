const createProduct = require('../../controller/products/createProductController')
const express = require('express')
const router = express.Router()


router.post('/create', createProduct.create)
router.post('/get', createProduct.show)

module.exports = router

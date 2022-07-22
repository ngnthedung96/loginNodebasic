const homeController = require('../../controller/home/homeController')
const express = require('express')
const router = express.Router()


router.get('/', homeController.show)

module.exports = router
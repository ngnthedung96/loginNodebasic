const inforController = require('../../controller/infor/inforController')
const express = require('express')
const router = express.Router()

router.post('/update', inforController.update)
router.get('/', inforController.show)

module.exports = router
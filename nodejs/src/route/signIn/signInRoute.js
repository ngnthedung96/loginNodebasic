const signInController = require('../../controller/signIn/signInController')
const express = require('express')
const router = express.Router()


router.post('/', signInController.send)

module.exports = router

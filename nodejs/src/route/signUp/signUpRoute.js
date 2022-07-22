const signUpController = require('../../controller/signUp/signUpController')
const express = require('express')
const router = express.Router()


router.post('/', signUpController.send)

module.exports = router
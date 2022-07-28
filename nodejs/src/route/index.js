const signInRoute = require('./signIn/signInRoute')
const signUpRoute = require('./signUp/signUpRoute')
const homeRoute = require('./home/homeRoute')
const inforRoute = require('./infor/inforRoute')
const productRoute = require('./products/createProduct')


function Route(app) {
    app.use('/signin', signInRoute)
    app.use('/signup', signUpRoute)
    app.use('/infor', inforRoute)
    app.use('/home', homeRoute)
    app.use('/product', productRoute)
}

module.exports = Route
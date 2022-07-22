const signInRoute = require('./signIn/signInRoute')
const signUpRoute = require('./signUp/signUpRoute')
const homeRoute = require('./home/homeRoute')
const inforRoute = require('./infor/inforRoute')


function Route(app) {
    app.use('/signin', signInRoute)
    app.use('/signup', signUpRoute)
    app.use('/infor', inforRoute)
    app.use('/', homeRoute)
}

module.exports = Route
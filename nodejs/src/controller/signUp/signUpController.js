const connection = require('../../config/connectDb')
class signUpController {
    send(req, res, next) {
        const dataUser = req.body
        connection.connect(function () {
            connection.query("INSERT INTO accounts (username,password) VALUES (?,?)", [dataUser.username, dataUser.password], function (error, result) {

            })
        })
    }
}

module.exports = new signUpController
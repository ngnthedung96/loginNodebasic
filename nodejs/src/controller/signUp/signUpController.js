const connection = require('../../config/connectDb')
class signUpController {
    send(req, res, next) {
        const dataUser = req.body
        connection.query("SELECT * FROM accounts", function (err, result, fields) {
            const check = result.find(function (account) {
                return account.username === dataUser.username
            })
            if (check) {
                res.json({
                    "check": false
                })
            }
            else {
                connection.connect(function () {
                    connection.query("INSERT INTO accounts (username,password) VALUES (?,?)", [dataUser.username, dataUser.password], function (error, result) {
                        res.json({
                            "check": true
                        });
                    })
                })
            }
        })
    }
}

module.exports = new signUpController
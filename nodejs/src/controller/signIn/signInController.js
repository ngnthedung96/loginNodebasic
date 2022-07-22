const connection = require('../../config/connectDb')
class signInController {
    send(req, res, next) {
        const dataUser = req.body
        connection.connect(function () {
            connection.query("SELECT * FROM accounts", function (err, result, fields) {
                const check = result.find(function (account) {
                    return account.username === dataUser.username && account.password === dataUser.password
                })
                if (check) {
                    req.session.userLogin = check
                    res.json({
                        "check": true,
                        "dataUser": check
                    });
                }
                else {
                    res.json({
                        "check": false
                    })
                }
            })
        })

    }
}

module.exports = new signInController
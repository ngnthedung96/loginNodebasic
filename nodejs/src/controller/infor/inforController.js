const connection = require('../../config/connectDb')
class inforController {
    show(req, res, next) {
        if (req.session.userLogin) {
            res.json(req.session.userLogin)
        }
    }
    update(req, res, next) {
        var a = "`${}`"
        const dataUser = req.body
        connection.connect(function () {
            connection.query(`UPDATE accounts SET username =?, password =?  WHERE id = ?`, [req.body.username, req.body.id, req.session.userLogin.dataUser.id], function (err, result, fields) {
                if (err) throw err;
            })
        })
        // update lại req.session.userlogin
    }
}

module.exports = new inforController
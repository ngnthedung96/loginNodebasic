const connection = require('../../config/connectDb')
class homeController {
    show(req, res, next) {
        console.log("home", req.session.userLogin)
        if (req.session.userLogin) {
            res.json({
                "check": false,
                "dataUser": require.session.userLogin
            })
        }
        else {
            res.json({
                'check': false
            })
        }
    }
}

module.exports = new homeController
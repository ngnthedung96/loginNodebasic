const connection = require('../../config/connectDb')
const { users } = require("../../model/users")

class inforController {
    show(req, res, next) {
        if (req.session.userLogin) {
            res.json(req.session.userLogin)
        }
    }
    async update(req, res, next) {
        const userId = req.query.id
        const userUpdate = await users.findOne({ where: { username: username } })

    }
}

module.exports = new inforController
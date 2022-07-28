const { users } = require("../../model/users")
class homeController {
    async show(req, res, next) {
        try {
            let data = await users.findAll()
            res.json(data)
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports = new homeController
const connection = require('../../config/connectDb')
const { users } = require("../../model/users")
class signUpController {
    async send(req, res, next) {
        const { username, password } = req.body;
        const check = await users.findOne({ where: { username: username } });
        if (check === null) {
            // Create a new user
            const newUser = await users.create({ username: username, password: password });
            res.json({
                msg: "đăng ký thành công",
                id: newUser.id,
                email: newUser.username
            })
        } else {
            res.json('email da ton tai')
        }


    }
}


module.exports = new signUpController
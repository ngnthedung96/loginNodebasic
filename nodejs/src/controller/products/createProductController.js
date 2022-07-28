const { Products } = require("../../model/users")
class productController {
    async show(req, res, next) {
        try {
            let data = await Products.findAll(
                {
                    where: { user_id: `${req.body.user_id}` },
                }
            )
            res.json(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    async create(req, res, next) {
        const { user_id, name, price } = req.body;
        const newProduct = await Products.create({
            user_id: user_id,
            name: name,
            price: price
        });
        res.json({
            msg: "đăng ký thành công",
            id: user_id,
            name: name,
            price: price
        })
    }
}

module.exports = new productController
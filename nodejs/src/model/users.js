const { sequelize } = require("../config/connectDb");
const { DataTypes } = require('sequelize')

const Users = sequelize.define('accounts', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {});
const Products = sequelize.define('products', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

module.exports = {
    Users,
    Products
}
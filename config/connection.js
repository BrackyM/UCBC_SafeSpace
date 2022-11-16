// connect to sequelize
const { Sequelize } = require('sequelize');
require('dotenv').config();
// setup for env file
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    },
    {
        timestamps: true,
        underscored: true
    }
);

module.exports = sequelize;

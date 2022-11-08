const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'locaalhost',
        dialect: 'mysql',
        port: 3006,
    },
    {
        sequelize,
        timestamps: true,
        underscored: true
    }
);

module.exports = sequelize;

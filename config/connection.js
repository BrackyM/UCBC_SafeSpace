const Sequelize = require('sequalize');
require('dontenv').config();

const sequalize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'locaalhost',
        dialect: 'mysql',
        port: 3006,
    }
);

module.exports = sequalize;


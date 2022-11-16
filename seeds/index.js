const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPost = require('./postData');

const seedAll = async () => {
    await sequelize.sync({ force: false })
    await seedUsers();
    await seedPost();

    process.exit(0)
};

seedAll();
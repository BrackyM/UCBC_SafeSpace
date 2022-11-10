const sequelize = require('../config/connection');
const seedUsers = require('./userData')

const seedAll = async () => {
    await sequelize.sync({ force: false })
    await seedUsers();

    process.exit(0)
};

seedAll();
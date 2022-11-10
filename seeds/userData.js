const { User } = require('../models/User');

const  testUser =  [
    {
       id: 1,
       username: "skysexier",
       email: "skyhamilton@gmail.com",
       password: "yobroski",
    },
];

const seedUsers = () => User.bulkCreate(testUser);

module.exports = seedUsers;
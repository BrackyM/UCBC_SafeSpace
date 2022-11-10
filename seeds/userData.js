const { User } = require('../models');

const  testUser =  [
    {
       id: 1,
       username: "skysexier",
       email: "skyhamilton@gmail.com",
       password: "yobroski",
    },
    {
        id: 2,
        username: "braxton",
        email: "bracky@gmail.com",
        password: "braxdog",
     },
];

const seedUsers = () => User.bulkCreate(testUser);

module.exports = seedUsers;
const testData = require('../../db/data.json');
const { User, Post } = require('../../models');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.get("/", async (req, res) => {
    res.render('signup');
})

//Create new user
router.post("/", async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10)
        });
        req.session.save(() => {
            req.session.loggedIn = true;
          });
        console.log(dbUserData)
        res.status(200).json(dbUserData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
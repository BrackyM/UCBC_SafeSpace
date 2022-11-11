const testData = require('../../db/data.json');
const { User, Post } = require('../../models');
const router = require('express').Router();

router.get("/:username", async (req, res) => {
    try {
        let userName = req.params;
        console.log(userName)
        const userData = await User.findAll({
            where: userName,
            include: [
                {
                    model: Post,
                }
            ]
        })
        const userInfo = userData.map((info) => info.get({ plain: true}));
        console.log(userInfo)
        console.log({userInfo})

        res.render('allposts', {userInfo});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
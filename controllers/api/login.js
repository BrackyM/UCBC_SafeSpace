const testData = require('../../db/data.json');
const { User, Post } = require('../../models');
const router = require('express').Router();

router.get("/", async (req, res) => {
    let name = req.params
    try {
        //Get all posts
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                    where: User.username = name,
                },
            ],

        });
        const userHome = dbPostData.map((info) => info.get({ plain: true}));
        console.log(userHome);
        res.render('login', {userHome});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
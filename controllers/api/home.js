const testData = require('../../db/data.json');
const { User, Post} = require('../../models');
const router = require('express').Router();
// Route to get all posts from homepage
router.get("/", async (req, res) => {
    try {
        //Get all posts
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });
        const userHome = dbPostData.map((info) => info.get({ plain: true}));
        console.log(userHome);
        res.render('allposts', {userHome});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
const testData = require('../../db/data.json');
const { User, Post } = require('../../models');
const router = require('express').Router();

router.get("/:username", async (req, res) => {
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
        res.render('allposts', {userHome});
    
    // try {
    //     let userName = req.params;
    //     console.log(userName)
    //     const userData = await User.findAll({
    //         where: userName,
    //         include: [
    //             {
    //                 model: Post,
    //             }
    //         ]
    //     })
    //     const userInfo = userData.map((info) => info.get({ plain: true}));  
    //     const userPosts = userInfo[0].posts 
    //     console.log({userInfo, userPosts})

    //     res.render('userpage', {userInfo, userPosts});
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
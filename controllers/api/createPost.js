const testData = require('../../db/data.json');
const { User, Post } = require('../../models');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    res.render('createPost', {loggedIn: req.session.loggedIn});
});

// router.post('/', async (req, res) => {
//     try {
//         const dbNewPost = await Post.create({
//             userPost: req.body.post,
//             userLink: req.body.link,

//         });
//         if (!newPost) {
//             res.status(404).json({ message: 'Email cannot be found!'});
//             return
//         }
//         req.session.save(() => {
//             req.session.loggedIn = true;
//             console.log(req.session.cookie);
//             res.status(200).json({ message: 'Logged in!'})
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })
router.post("/", async (req, res) => {
    try {
        const dbPostData = await Post.create({
            post_body: req.post.body,
            post_links: req.post.link,
            include: [
                {
                    model: User,
                    id: req.session.id,
                    username: req.session.username,
                    email: req.session.email,
                },
            ],
        });
       
        console.log(dbPostData)
        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
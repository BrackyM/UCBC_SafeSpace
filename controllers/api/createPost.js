const testData = require("../../db/data.json");
const { User, Post } = require("../../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const getVideoId = require('get-video-id');

router.get("/", async (req, res) => {
  res.render("createPost", {
    loggedIn: req.session.loggedIn,
    user: req.session.body,
  });
});

router.post("/", async (req, res) => {
  const link = getVideoId(req.body.createLink)
  console.log(req.session.body);
  console.log(req.session.body.username);
  try {
    const reqLink = getVideoId(req.body.createLink);
    const link = JSON.stringify(reqLink);
    console.log(link)
    const dbPostData = await Post.create({
      post_body: req.body.createPost,
      post_links: reqLink.id,
      votes: 0,
      include: [
        {
          model: User,
          where: (User.username = req.session.body.username),
        },
      ],
      user_id: req.session.body.id,
    });

    console.log(dbPostData);
    res.status(200).json(dbPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

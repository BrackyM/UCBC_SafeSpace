const testData = require("../../db/data.json");
const { User, Post } = require("../../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.get("/", async (req, res) => {
  res.render("createPost", {
    loggedIn: req.session.loggedIn,
    user: req.session.body,
  });
});

router.post("/", async (req, res) => {
  console.log(req.session.body);
  console.log(req.session.body.username);
  try {
    const dbPostData = await Post.create({
      post_body: req.body.createPost,
      post_links: req.body.createLink,
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

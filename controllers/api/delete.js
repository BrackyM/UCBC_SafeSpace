const testData = require("../../db/data.json");
const { User, Post } = require("../../models");
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        id: req.body.post_id,
      },
    });
// logging up vote 
   
    await Post.deleteOne({ id: req.body.post_id})
    res.redirect('/')
    res.status(200)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
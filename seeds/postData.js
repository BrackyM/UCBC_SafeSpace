const { Post } = require('../models')

const postData = [
    {
      post_body: "I love safe space! I'm so tired of Elon spreading his dogshit opinions on Twitter! Finally I have a place that conforms to my worldview!",
      votes: '420',
      post_links: 'eZTS4cL4Euo',
      user_id: 1,
    },
    {
        post_body: 'I hate safespace >:(',
        votes: '33',
        post_links: 'G1IbRujko-A',
        user_id: 2,
    },
  ];

  const seedPost = () => Post.bulkCreate(postData);
  module.exports = seedPost;
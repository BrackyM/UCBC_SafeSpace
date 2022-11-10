const { Post } = require('../models')

const postData = [
    {
      post_body: "I love safe space! I'm so tired of Elon spreading his dogshit opinions on Twitter! Finally I have a place that conforms to my worldview!",
      votes: '420',
      post_links: 'https://www.youtube.com/watch?v=eZTS4cL4Euo',
    },
    {
        post_body: 'I hate safe space!',
        votes: 'April 20, 2021 07:00:00',
        post_links: 'June 21, 2021 17:00:00',
    },
    {
        post_body: 'Printemps',
        votes: 'April 20, 2021 07:00:00',
        post_links: 'June 21, 2021 17:00:00',
    },
  ];

  const seedPost = () => Post.bulkCreate(postData);
  module.exports = seedPost;
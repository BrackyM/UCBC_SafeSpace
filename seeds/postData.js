const { Post } = require('../models')

const postData = [
    {
      post_body: "I love safe space! I'm so tired of Elon spreading his dogshit opinions on Twitter! Finally I have a place that conforms to my worldview!",
      votes: '420',
      post_links: 'https://www.youtube.com/watch?v=eZTS4cL4Euo',
      user_id: 1,
    },
    {
        post_body: 'I hate safe space!',
        votes: '11',
        post_links: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fgoat&psig=AOvVaw1fNAsUdNz3hsGyxSbr42sY&ust=1668273621816000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDn9M7RpvsCFQAAAAAdAAAAABAL',
        user_id: 1,
    },
    {
        post_body: 'Printemps',
        votes: '33',
        post_links: 'https://www.youtube.com/watch?v=eZTS4cL4Euo',
        user_id: 2,
    },
  ];

  const seedPost = () => Post.bulkCreate(postData);
  module.exports = seedPost;
const User = require('./user.js');
const Post = require('./post.js');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',

})

Post.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Post };
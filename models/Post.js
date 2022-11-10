const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');

class Post extends Model {
    // static association({User}){
    //     this.belongsTo(User, {foriegnKey: 'userId', as: 'user'})
    // }
}

Post.init(
    {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'User',
            key: 'id'
        },
       },
       post_body: {
        type: DataTypes.CHAR(250),
        allowNull: false,
       },
       votes: {
        type: DataTypes.INTEGER,
        allowNull: true,
       },
       post_links: {
        type: DataTypes.STRING,
        allowNull: true,
       }
       
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'Post',
    }
)

module.exports = Post;
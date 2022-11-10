const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection');

class Post extends Model {
    // static association({User}){
    //     this.belongsTo(User, {foriegnKey: 'userId', as: 'user'})
    // }
}

Post.init(
    {
       post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        },
       },
       post_body: {
        type: DataTypes.CHAR(250),
        allowNull: false,
       },
       votes: {
        type: DataType.INTEGER,
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
        modelName: 'post',
    }
)

module.exports = Post;
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
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
       },
       user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
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
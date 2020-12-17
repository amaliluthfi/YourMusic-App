'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
const hashPassword = require('../helper/hashPassword')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Song, {
        through: models.UserSong,
        foreignKey: "UserId"
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user, option){
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};
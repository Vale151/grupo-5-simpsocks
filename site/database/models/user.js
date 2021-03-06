'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.role, { foreignKey: 'role_id' }),
      this.hasMany(models.address, { foreignKey: 'user_id' }),
      this.hasMany(models.token, { foreignKey: 'user_id' });
    }
  };
  User.init({
    firstname: { type: DataTypes.STRING(255), allowNull: false },
    lastname: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    image: DataTypes.STRING(255),
    phone: DataTypes.STRING(255),
    created_at: { type: DataTypes.DATE, allowNull: false }
  }, {
    sequelize,
    modelName: 'user',
  });
  return User;
};
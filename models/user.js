'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      username: DataTypes.STRING,
      authenticationString: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {},
  );
  User.associate = function(models) {
    User.hasMany(models.Task, { foreignKey: 'userId', as: 'tasks' });
  };
  return User;
};

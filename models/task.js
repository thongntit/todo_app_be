'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Task.associate = function (models) {
    Task.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
  };
  return Task;
};
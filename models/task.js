'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define(
    'Task',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      startTime: DataTypes.DATE,
      dueTime: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM,
        values: ['Completed', 'Incomplete'],
      },
    },
    {},
  );
  Task.associate = function(models) {
    Task.belongsTo(models.User, { foreignKey: 'userId', as: 'user', onDelete: 'CASCADE', allowNull: false });
  };
  return Task;
};

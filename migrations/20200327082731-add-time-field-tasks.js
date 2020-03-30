'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Tasks', 'startTime', { type: Sequelize.DATE }, { transaction: t }),
        queryInterface.addColumn('Tasks', 'dueTime', { type: Sequelize.DATE }, { transaction: t }),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Tasks', 'startTime', { transaction: t }),
        queryInterface.removeColumn('Tasks', 'dueTime', { transaction: t }),
      ]);
    });
  },
};

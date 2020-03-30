'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'Tasks',
          'status',
          {
            type: Sequelize.ENUM('Completed', 'Incomplete'),
            defaultValue: 'Incomplete',
          },
          { transaction: t },
        ),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([queryInterface.removeColumn('Tasks', 'status', { transaction: t })]);
    });
  },
};

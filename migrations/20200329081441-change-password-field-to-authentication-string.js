'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'password', 'authenticationString');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Users', 'authenticationString', 'password');
  },
};

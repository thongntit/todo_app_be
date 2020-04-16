"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Users", "authenticationString", {
      type: Sequelize.TEXT("long"),
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Users", "authenticationString", {
      type: Sequelize.STRING,
    });
  },
};

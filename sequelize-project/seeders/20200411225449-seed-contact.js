"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Pedro",
        lastname: "Paez",
        phone: "3121111111",
        email: "test@prueba.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
      {
        firstname: "Juan",
        lastname: "Jimenez",
        phone: "3121111112",
        email: "test2@prueba.com",
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};

'use strict';
const faker = require('@faker-js/faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to suppliers
    await queryInterface.bulkInsert('store_accounts', [
      {
        account_name: 'Indomaret',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        account_name: 'Hypermarket',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all data in suppliers
    await queryInterface.bulkDelete('store_accounts', null, {});
  },
};

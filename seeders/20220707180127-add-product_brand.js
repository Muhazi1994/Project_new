'use strict';
const faker = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to suppliers
    await queryInterface.bulkInsert('product_brands', [
      {
        brand_name: 'ROTI MANIS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand_name: 'KEJU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
  
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all data in suppliers
    await queryInterface.bulkDelete('product_brands', null, {});
  },
};

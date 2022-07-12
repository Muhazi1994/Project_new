'use strict';
const faker = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to suppliers
    await queryInterface.bulkInsert('report_products', [
      {
        store_id: 1,
        product_id: 1,
        compliance: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 1,
        product_id: 2,
        compliance: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 1,
        product_id: 3,
        compliance: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 1,
        product_id: 4,
        compliance: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_id: 1,
        product_id: 5,
        compliance: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
       
      },
      {
        store_id: 1,
        product_id: 6,
        compliance: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all data in suppliers
    await queryInterface.bulkDelete('report_products', null, {});
  },
};

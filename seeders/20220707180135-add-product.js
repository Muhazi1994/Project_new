'use strict';
const faker = require('@faker-js/faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to suppliers
    await queryInterface.bulkInsert('products', [
      {
        product_name: 'Product A',
        brand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Product B',
        brand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Product C',
        brand_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Product D',
        brand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Product E',
        brand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Product F',
        brand_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all data in suppliers
    await queryInterface.bulkDelete('products', null, {});
  },
};

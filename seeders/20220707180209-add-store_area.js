'use strict';

const faker = require('@faker-js/faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to suppliers
    await queryInterface.bulkInsert('store_areas', [
      {
        area_name: 'DKI Jakarta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area_name: 'Jawa Barat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area_name: 'Kalimantan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area_name: 'Jawa Tengah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        area_name: 'Bali',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all data in suppliers
    await queryInterface.bulkDelete('store_areas', null, {});
  },
};

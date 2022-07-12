'use strict';
const faker = require('@faker-js/faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert 3 data to suppliers
    await queryInterface.bulkInsert('stores', [
      {
        store_name: 'Indomaret Djakarta',
        account_id: 1,
        area_id: 1,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Indomaret Jawa Barat',
        account_id: 1,
        area_id: 2,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Indomaret Kalimantan',
        account_id: 1,
        area_id: 3,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Indomaret Jawa Tengah',
        account_id: 1,
        area_id: 4,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Indomaret Bali',
        account_id: 1,
        area_id: 5,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Hypermaret Djakarta',
        account_id: 2,
        area_id: 1,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Hypermaret Jawa Barat',
        account_id: 2,
        area_id: 2,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Hypermaret Kalimantan',
        account_id: 2,
        area_id: 3,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Hypermaret Jawa Tengah',
        account_id: 2,
        area_id: 4,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        store_name: 'Hypermaret Bali',
        account_id: 2,
        area_id: 5,
        is_active:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Delete all data in suppliers
    await queryInterface.bulkDelete('stores', null, {});
  },
};

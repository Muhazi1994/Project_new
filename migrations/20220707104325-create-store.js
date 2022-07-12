'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      account_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      area_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      is_active: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        allowNull:true,
        type: Sequelize.DATE
      }
    });
          // Make categoryId to be foreign key
          await queryInterface.addConstraint("stores", {
            fields: ["account_id"],
            type: "foreign key",
            name: "custom_fkey_account_id",
            references: {
              //Required field
              table: "store_accounts",
              field: "id",
            },
            onDelete: "cascade",
            onUpdate: "cascade",
          });
          await queryInterface.addConstraint("stores", {
            fields: ["area_id"],
            type: "foreign key",
            name: "custom_fkey_area_id",
            references: {
              //Required field
              table: "store_areas",
              field: "id",
            },
            onDelete: "cascade",
            onUpdate: "cascade",
          });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stores');
  }
};
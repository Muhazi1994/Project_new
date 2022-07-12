'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('report_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      compliance: {
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
      // // Make userId to be foreign key
      await queryInterface.addConstraint("report_products", {
        fields: ["store_id"],
        type: "foreign key",
        name: "custom_fkey_store_id",
        references: {
          //Required field
          table: "stores",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
  
      // Make categoryId to be foreign key
      await queryInterface.addConstraint("report_products", {
        fields: ["product_id"],
        type: "foreign key",
        name: "custom_fkey_product_id",
        references: {
          //Required field
          table: "products",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('report_products');
  }
};
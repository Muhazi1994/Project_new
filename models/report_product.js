'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class report_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.report_product.belongsTo(models.store,{ foreignKey:"store_id"})
      models.report_product.belongsTo(models.product,{ foreignKey:"product_id"})
      // define association here
    }
  }
  report_product.init({
    store_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    compliance: DataTypes.INTEGER,
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'report_product',
  });
  return report_product;
};
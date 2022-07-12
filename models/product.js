'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.product.belongsTo(models.product_brand,{ foreignKey:"brand_id"})
      models.product.hasMany(models.report_product,{ foreignKey:"product_id"})// define association here
    }
  }
  product.init({
    product_name: DataTypes.STRING,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'product',
  });
  return product;
};
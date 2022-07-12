'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.store.belongsTo(models.store_account,{ foreignKey:"account_id"})
      models.store.belongsTo(models.store_area,{ foreignKey:"area_id"})
      models.store.hasMany(models.report_product,{ foreignKey:"store_id"})
      // define association here
    }
  }
  store.init({
    store_name: DataTypes.STRING,
    account_id: DataTypes.INTEGER,
    area_id: DataTypes.INTEGER,
    is_active: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'store',
  });
  return store;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ProductOrders.belongsTo(models.Users, {foreignKey:'userId'})
      models.ProductOrders.belongsTo(models.Products, {foreignKey:'productId'})
    }
  }
  ProductOrders.init({
    productOrderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      purchasedUnits: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      deductedPoints: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName: 'ProductOrders',
  });
  return ProductOrders;
};
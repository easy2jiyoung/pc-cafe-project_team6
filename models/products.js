'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Products.hasMany(models.ProductOrders, {foreignKey: 'productId'})
    }
  }
  Products.init({
    productId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      productName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      productStock: {
        type: DataTypes.INTEGER
      },
      productPrice: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      productImgUrl: {
        type: DataTypes.STRING
      },
      productType: {
        allowNull: false,
        type: DataTypes.STRING
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
    modelName: 'Products',
  });
  return Products;
};
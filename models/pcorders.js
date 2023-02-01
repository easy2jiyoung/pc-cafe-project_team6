'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PCOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo('Users', {foreignKey:'userId'})
      this.belongsTo('PCs', {foreignKey:'pcId'})
    }
  }
  PCOrders.init({
    pcOrderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      pcId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      startDateTime: {
        allowNull: false,
        type: DataTypes.DATE
      },
      endDateTime: {
        allowNull: false,
        type: DataTypes.DATE
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
    modelName: 'PCOrders',
  });
  return PCOrders;
};
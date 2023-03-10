'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PCOrders', {
      pcOrderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pcId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      startDateTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      endDateTime: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deductedPoints: {
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
      }
    });

    // PCOrders - userId foreign key
    await queryInterface.addConstraint('PCOrders', {
        fields: ['userId'],
        type: 'foreign key',
        references: {
            table: 'Users',
            field: 'userId',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    });

    // PCOrders - pcId foreign key
    await queryInterface.addConstraint('PCOrders', {
        fields: ['pcId'],
        type: 'foreign key',
        references: {
            table: 'PCs',
            field: 'pcId',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PCOrders');
    // await queryInterface.removeConstraint('PCOrders', 'Users_PCOrders_id_fk');
    // await queryInterface.removeConstraint('PCOrders', 'PCs_PCOrders_id_fk');
  }
};
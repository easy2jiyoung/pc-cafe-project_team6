<<<<<<< HEAD
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductOrders', {
      productOrderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      purchasedUnits: {
        allowNull: false,
        type: Sequelize.INTEGER
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

    // ProductOrders - userId foreign key
    await queryInterface.addConstraint('ProductOrders', {
        fields: ['userId'],
        type: 'foreign key',
        name: 'Users_ProductOrders_id_fk',
        references: {
            table: 'Users',
            field: 'userId',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    });

    // ProductOrders - productId foreign key
    await queryInterface.addConstraint('ProductOrders', {
        fields: ['productId'],
        type: 'foreign key',
        name: 'Products_ProductOrders_id_fk',
        references: {
            table: 'Products',
            field: 'productId',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductOrders');
    // await queryInterface.removeConstraint('ProductOrders', 'Users_ProductOrders_id_fk');
    // await queryInterface.removeConstraint('ProductOrders', 'Products_ProductOrders_id_fk');
  }
=======
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductOrders', {
      productOrderId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      purchasedUnits: {
        allowNull: false,
        type: Sequelize.INTEGER
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

    // ProductOrders - userId foreign key
    await queryInterface.addConstraint('ProductOrders', {
        fields: ['userId'],
        type: 'foreign key',
        references: {
            table: 'Users',
            field: 'userId',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    });

    // ProductOrders - productId foreign key
    await queryInterface.addConstraint('ProductOrders', {
        fields: ['productId'],
        type: 'foreign key',
        references: {
            table: 'Products',
            field: 'productId',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductOrders');
    // await queryInterface.removeConstraint('ProductOrders', 'Users_ProductOrders_id_fk');
    // await queryInterface.removeConstraint('ProductOrders', 'Products_ProductOrders_id_fk');
  }
>>>>>>> 250f53cc28fa61de708705e3caeae12d6b6cd71e
};
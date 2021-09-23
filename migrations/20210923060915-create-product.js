'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categories_id: {
        type: Sequelize.INTEGER,
        references: { model: {tableName:'Categories'}, key: 'id' }
      },
      users_id: {
        type: Sequelize.INTEGER,
        references: { model: {tableName:'Users'}, key: 'id' }
      },
      order_date: {
        type: Sequelize.DATE
      },
      photo: {
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.TEXT
      },
      size: {
        type: Sequelize.STRING
      },
      price: {
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
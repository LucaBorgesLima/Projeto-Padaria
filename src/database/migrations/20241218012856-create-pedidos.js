'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('pedidos', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      cliente: {
        type: sequelize.STRING,
        allowNull: false
      },
      status: {
        type: sequelize.STRING(10,2),
        allowNull: false
      },
      createdat: {
        type: sequelize.DATE,
        allowNull:false
      },
      updatedat: {
        type: sequelize.DATE,
        allowNull:false
      }
    });
     
  },

  async down(queryInterface, Sequelize) {
   
    await queryInterface.dropTable('pedidos');
    
  }
};

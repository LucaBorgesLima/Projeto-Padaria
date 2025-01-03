'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('clientes', {
      id_cliente: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      cliente: {
        type: sequelize.STRING,
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
   
    await queryInterface.dropTable('clientes');
    
  }
};

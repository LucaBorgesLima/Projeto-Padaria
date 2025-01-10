'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('Pratos', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      nome: {
        type: sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
      },
      categoria: {
        type: sequelize.STRING,
        allowNull: false
      }
    });
     
  },

  async down(queryInterface, Sequelize) {
   
    await queryInterface.dropTable('Pratos');
    
  }
};

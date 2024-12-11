'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('pratos', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
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
   
    await queryInterface.dropTable('pratos');
    
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('PedidosTabelas', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      numero_pedido: {
        type: sequelize.INTEGER,
        allowNull:false
      },
      status: {
        type: sequelize.STRING,
        allowNull: false
      },
      data_do_pedido: {
        type: sequelize.DATE,
        allowNull:false
      }
    });
  },

  async down(queryInterface, Sequelize) {
   
    await queryInterface.dropTable('Pedidos');
    
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('pedidos', {
      id_pedido: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      cliente_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: { model: 'clientes', key: 'id_cliente' },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
      },
      status: {
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
   
    await queryInterface.dropTable('pedidos');
    
  }
};

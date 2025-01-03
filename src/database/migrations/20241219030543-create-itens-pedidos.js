'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('itens-pedidos', {
      id_itens: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      pedido_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pedidos', key: 'id_pedido' },
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
      },
      pratos_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references:{model:'pratos',key:'id'}
      },
      quantidade: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      preco_total: {
        type: sequelize.DECIMAL(10,2),
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
   
    await queryInterface.dropTable('itens-pedidos');
    
  }
};

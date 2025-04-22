'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('PedidosAgendados', {
      id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      Pedido: {
        type: sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete:'CASCADE'
      },
      Pratosid: {
        type: sequelize.INTEGER,
        allowNull: false,
        references:{model:'Pratos',key:'id'}
      },
      Quantidade: {
        type: sequelize.INTEGER,
        allowNull: false
      },
      Preco: {
        type: sequelize.DECIMAL(10,2),
        allowNull: false
      },
      Datapedido: {
        type: sequelize.DATE,
        allowNull:false
      },
      status: {
        type: sequelize.STRING,
        allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PedidosAgendados');
  
  }
};

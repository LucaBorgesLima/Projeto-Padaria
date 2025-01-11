const { Model, DataTypes } = require('sequelize');

// Modelo que representa a tabela pedidos no banco de dados
class PedidosTabelas extends Model{
    static init(sequelize) {
        super.init({
            numero_pedido:DataTypes.INTEGER,
            status: DataTypes.STRING,
            data_do_pedido:DataTypes.DATE
            
        },{
            sequelize
        })
    }
}

module.exports = PedidosTabelas;  
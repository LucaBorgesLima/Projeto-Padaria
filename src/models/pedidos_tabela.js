const { Model, DataTypes } = require('sequelize');

// Modelo que representa a tabela pedidos no banco de dados
class PedidosTabela extends Model{
    static init(sequelize) {
        super.init({
            numero_pedido:DataTypes.INTEGER,
            status:DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = PedidosTabela;  
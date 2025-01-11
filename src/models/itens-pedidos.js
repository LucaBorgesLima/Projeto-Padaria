const { Model, DataTypes } = require('sequelize');

// Modelo que representa a tabela pratos no banco de dados
class Itens_pedidos extends Model{
    static init(sequelize) {
        super.init({
            pedido_id:DataTypes.INTEGER,
            pratos_id: DataTypes.INTEGER,
            quantidade: DataTypes.INTEGER,
            preco_unitario: DataTypes.DECIMAL
        },{
            sequelize
        })
    }
}

module.exports = Itens_pedidos;  
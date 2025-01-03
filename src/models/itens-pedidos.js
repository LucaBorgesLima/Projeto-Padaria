const { Model, DataTypes } = require('sequelize');

// Modelo que representa a tabela pratos no banco de dados
class Intens_pedidos extends Model{
    static init(sequelize) {
        super.init({
            pedido_id:DataTypes.INTEGER,
            prato_id: DataTypes.INTEGER,
            quantidade: DataTypes.INTEGER,
            preco_total: DataTypes.DECIMAL
        },{
            sequelize
        })
    }
}

module.exports = Intens_pedidos;
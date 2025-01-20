const { Model, DataTypes } = require('sequelize');


// Modelo que representa a tabela pratos no banco de dados
class Itens_pedidos extends Model{
    static init(sequelize) {
        super.init({
            pedido_id:DataTypes.INTEGER,
            pratos_id: DataTypes.INTEGER,
            quantidade: DataTypes.INTEGER,
            preco_total: DataTypes.DECIMAL
        },{
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.PedidosTabelas, { foreignKey: 'pedido_id', as: 'pedido' });
        this.belongsTo(models.Pratos, { foreignKey: 'pratos_id', as: 'prato' });
    }
}

module.exports = Itens_pedidos;  
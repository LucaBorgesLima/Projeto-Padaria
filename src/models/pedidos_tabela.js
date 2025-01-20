const { Model, DataTypes } = require('sequelize');

// Modelo que representa a tabela pedidos no banco de dados
class PedidosTabelas extends Model{
    static init(sequelize) {
        super.init({
            numero_pedido:DataTypes.INTEGER,
            status: DataTypes.STRING,
            data_do_pedido:DataTypes.DATE
            
        },{
            sequelize,
            modelName: 'PedidosTabelas',
            tableName: 'PedidosTabelas'
        })
    }
    static associate(models) {
        this.hasMany(models.Itens_pedidos, {
            foreignKey: 'pedido_id', as: 'itens'
        })
    };
}

module.exports = PedidosTabelas;  
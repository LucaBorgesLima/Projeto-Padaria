const { Model, DataTypes } = require('sequelize');  

class PedidosAgendados extends Model {
    static init(sequelize) {
        super.init({
       
            Pedido:DataTypes.INTEGER,
            Pratosid:DataTypes.INTEGER,
            Quantidade:DataTypes.INTEGER,
            Preco: DataTypes.DECIMAL,
            Datapedido: DataTypes.DATE,
            Dataretirada: DataTypes.DATE,
            status: DataTypes.STRING,
        }, {
            sequelize,
        })
    }
    static associate(models) {
        this.belongsTo(models.Pratos, { foreignKey: 'Pratosid', as: 'prato' });
    }
}

module.exports = PedidosAgendados;
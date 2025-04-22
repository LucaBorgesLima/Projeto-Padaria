const { Model, DataTypes } = require('sequelize');  

class PedidosAgendados extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            data_agendada: DataTypes.DATE,
            status: DataTypes.STRING,
            numero_pedido: DataTypes.INTEGER
        }, {
            sequelize,
            modelName: 'PedidosAgendados',
            tableName: 'pedidos_agendados'
        })
    }
}
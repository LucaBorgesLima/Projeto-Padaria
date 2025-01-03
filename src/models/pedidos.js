const { Model, DataTypes } = require('sequelize');

// Modelo que representa a tabela pedidos no banco de dados
class Pedidos extends Model{
    static init(sequelize) {
        super.init({
            cliente_id:DataTypes.INTEGER,
            status:DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Pedidos;
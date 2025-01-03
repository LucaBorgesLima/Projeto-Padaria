const { Model, DataTypes } = require('sequelize');

// Modelo que representa a tabela clientes no banco de dados
class Clientes extends Model{
    static init(sequelize) {
        super.init({
            cliente: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Clientes;  
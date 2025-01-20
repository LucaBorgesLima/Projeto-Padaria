const { Model, DataTypes } = require('sequelize');

// Modelo que representa a tabela pratos no banco de dados
class Pratos extends Model{
    static init(sequelize) {
        super.init({
            nome:DataTypes.STRING,
            preco: DataTypes.DECIMAL,
            categoria:DataTypes.STRING
        },{
            sequelize
        })
    }
    static associate(models) {
        this.hasMany(models.Itens_pedidos,{foreignKey:'pratos_id', as: 'itens'})
    };
}

module.exports = Pratos;    
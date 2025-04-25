const { Model, DataTypes } = require('sequelize');

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
        this.hasMany(models.Itens_pedidos, { foreignKey: 'pratos_id', as: 'itens' });
    };
}

module.exports = Pratos;    
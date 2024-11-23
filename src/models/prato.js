const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Prato = sequelize.define('Prato', {
  idprato: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'pratos',
  timestamps: false,
});

module.exports = Prato;



const CriarPrato = async (prato) => {
    const {nome,categoria,preco} = prato;
    const QueryAddPrato = 'INSERT INTO pratos (nome,categoria,preco) VALUES (?,?,?)'

    const ResultQuery = await banco.execute(QueryAddPrato, [nome, categoria, preco]);
    return console.log('Foi a funcao criar prato')
    
};

const MostrarCardapio = async () => {
    const MostrarCardapio = 'SELECT nome,categoria,preco FROM pratos'
    const Result = await banco.execute(MostrarCardapio);
    return (Result[0])
    
};

const FiltroCardapio = async (filtro) => {
    const categoria = filtro;
    const MostrarCardapio = "SELECT nome,categoria,preco FROM pratos WHERE categoria = ? "
    const Result = await banco.execute(MostrarCardapio,[categoria])
    return (Result[0])
};

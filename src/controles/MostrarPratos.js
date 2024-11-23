const { Model } = require('sequelize');
const Prato = require('../models/prato');
const prato = require('../models/prato');

const MostrarPrato = async (Mostrar) => {
    const { nome, categoria, preco } = Mostrar;
    
    try {
        const mostrarprato = await Prato.findAll({
            nome,
            categoria,
            preco
        });
        console.log('Mostrando Cardapio')
    } catch (error) {
        console.log('Erro ao Mostrar o Cardapio: ', error);
        throw new Error("Erro ao Mostrar o cardapio");
        
    }
};

module.exports = MostrarPrato;
const express = require('express');
const banco = require('./banco');


const teste = async (prato) => {
    const {nome,categoria,preco} = prato;
    const QueryAddPrato = 'INSERT INTO pratos (nome,categoria,preco) VALUES (?,?,?)'

    const ResultQuery = await banco.execute(QueryAddPrato, [nome, categoria, preco]);
    return ResultQuery
    
};

module.exports = {
    teste
};
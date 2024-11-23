const Prato = require('../models/prato'); 

// Função para criar prato
const CriarPrato = async (prato) => {
  const { nome, categoria, preco } = prato;

  try {
    const novoPrato = await Prato.create({
      nome,
      categoria,
      preco,
    });

    console.log('Prato criado com sucesso:', novoPrato);
    return novoPrato; 
      
  } catch (error) {
    console.error('Erro ao criar prato:', error);
    throw new Error('Erro ao criar prato');
  }
};

module.exports = { CriarPrato };

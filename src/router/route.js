const express = require('express');
const router = express.Router();
const { CriarPrato } = require('../controles/CriarPrato');
const { MostrarPrato } = require('../controles/MostrarPratos');

//rota criar prato
router.post('/criar', async (req, res) => {
  const { nome, categoria, preco } = req.body;

  try {
    const prato = await CriarPrato({ nome, categoria, preco });
    res.status(201).json({ message: 'Prato criado com sucesso', prato });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar prato' });
  }
});

//rota mostrar os pratos
router.get('/pratos', async (req, res) => {
  try {
    const mostrarpratos = await MostrarPrato();
    res.status(201).json({ message: 'Mostrando pratos', mostrarpratos });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao mostrar os pratos' })
  }
});

module.exports = router;



const express = require('express');
const router = express.Router();
const PratosControles = require('../controles/Pratos');
const Redis = require('redis');

//criar Pratos
router.post('/pratos', PratosControles.CriaPratos);

//mostrar Pratos
router.get('/cardapio', PratosControles.MostrarPratos);

//mostrar cardapio com filtro
router.post('/cardapiofiltro',PratosControles.FiltraPratos);

module.exports = router;



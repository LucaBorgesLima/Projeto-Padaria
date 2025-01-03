const express = require('express');
const router = express.Router();
const PratosControles = require('../controles/Pratos');


//criar Pratos
router.post('/pratos', PratosControles.CriaPratos);

//mostrar Pratos
router.get('/cardapio', PratosControles.MostrarPratos);

//mostrar cardapio com filtro
router.get('/cardapio/filtro', PratosControles.FiltraPratos);


module.exports = router;


    
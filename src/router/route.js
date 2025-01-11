const express = require('express');
const router = express.Router();
const PratosControles = require('../controles/Create_Pratos');
const PedidosControles = require('../controles/Create_pedidos');


//criar Pratos
router.post('/pratos', PratosControles.CriaPratos);

//mostrar Pratos
router.get('/cardapio', PratosControles.MostrarPratos);

//mostrar cardapio com filtro
router.get('/cardapio/filtro', PratosControles.FiltraPratos);

//create pedidos
router.post('/pedido', PedidosControles.create_pedido);

//escolher produto
router.post('/pedido/menu', PedidosControles.escolher_pedido);


module.exports = router;


            
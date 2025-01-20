const express = require('express');
const router = express.Router();
const PratosControles = require('../controles/pratos');
const PedidosControles = require('../controles/pedidos');


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

//comprovante do pedido
router.get('/pedido/menu/comprovante', PedidosControles.comprovante_pedido);

module.exports = router;


            
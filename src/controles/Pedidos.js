const { redis } = require('../RedisConfig');
const Pedidos = require('../models/pedidos');
const Itens_pedidos = require('../models/itens-pedidos');
const Clientes = require('../models/clientes');


module.exports = {
    async Fazerpedido(req, res) {
        try {
            const { nome } = req.body;
            const cliente = await Clientes.create({ nome });

            const status = 'em aberto';
            const cliente_id = await Clientes.findAll({
                attributes: ['id_cliente'],
                where: {

                    
                }
            })

            
        } catch (error) {
            
        }
    }
}
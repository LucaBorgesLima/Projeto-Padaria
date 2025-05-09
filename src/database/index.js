const Sequelize = require("sequelize");
const DBconfig = require("../config/database").development;
const Pratos = require("../models/Prato");
const PedidosTabelas = require("../models/pedidos_tabela");
const Itens_pedidos = require('../models/itens-pedidos');
const PedidosAgendados = require("../models/pedidosagendados");




const connection = new Sequelize(DBconfig);

Pratos.init(connection);
PedidosTabelas.init(connection);
Itens_pedidos.init(connection);
PedidosAgendados.init(connection);

Itens_pedidos.associate({ PedidosTabelas, Pratos });
PedidosTabelas.associate({ Itens_pedidos });
Pratos.associate({ Itens_pedidos });
PedidosAgendados.associate({ Pratos });



module.exports = connection;

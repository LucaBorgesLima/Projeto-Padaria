const Sequelize = require("sequelize");
const DBconfig = require("../config/database").development;
const Pratos = require("../models/Prato");
const PedidosTabela = require("../models/pedidos_tabela");

const connection = new Sequelize(DBconfig);

Pratos.init(connection);
PedidosTabela.init(connection);

module.exports = connection;

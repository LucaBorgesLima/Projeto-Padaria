const Sequelize = require('sequelize');
const DBconfig = require('../config/database').development;
const Pratos = require('../models/Prato');


const connection = new Sequelize(DBconfig);

Pratos.init(connection);


module.exports = connection;
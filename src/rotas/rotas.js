const express = require('express');
const rota = express.Router();
const controle = require('../controles/controle');
const request = require('request');


rota.post('/foi', controle.inicio);

module.exports = rota;
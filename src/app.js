const express = require('express');
const rota = require('./rotas/rotas');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(rota);

module.exports = app;
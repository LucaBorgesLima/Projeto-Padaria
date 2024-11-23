const express = require('express');
const route = require('./router/route');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(route);

module.exports = app;   
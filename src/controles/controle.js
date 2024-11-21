const models = require('../models/model');


const inicio = async (req, res) => {
    const inicioteste = await models.teste(req.body);
    return res.status(201).json(inicioteste)
};

module.exports = {
    inicio
};       
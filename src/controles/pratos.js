
const Pratos = require('../models/Prato');


module.exports = {
    
    async CriaPratos(req, res) {
        try {  
            const { nome, preco, categoria } = req.body;
            //verificar se ja nao tem esse produto cadastrado
           
            const create_pratos = await Pratos.create({ nome, preco, categoria });
            return res.status(200).json(create_pratos);
           
            
        } catch (error) {
            console.error("Erro ao criar prato:", error);
            return res.status(500).json({ error: "Erro interno no servidor." });
            
        }
    
    },

    async MostrarPratos(req, res) {
        const mostrar = await Pratos.findAll();
        return res.json(mostrar)
    },

    async FiltraPratos(req, res) { 
        try {
            const { categoria } = req.query;

            const MostrarCategoria = await Pratos.findAll({
                where: {
                    categoria: categoria
                }
            });

            return res.status(200).json(MostrarCategoria);
        } catch (error) {
            console.error("Erro ao filtrar pratos:", error);
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
    }


     
    
};    
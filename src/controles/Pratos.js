
const Pratos = require('../models/Prato');


module.exports = {
    async CriaPratos(req, res) {
       try {
           const { nome, preco, categoria } = req.body;
           //verificar se ja nao tem esse produto cadastrado
            const Verificar = await Pratos.findAll({
                where: {
                    nome: nome,
                    preco: preco,  
                }
            });

            if (Verificar.length === 0) {
                const pratos = await Pratos.create({ nome, preco, categoria });
                return res.json(pratos);
            } else {
                return res.status(409).json({ error: "Prato já existente no cardápio." });
            }
       }catch (error) {
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
            const { categoria } = req.body;
            const redis = req.app.locals.redis;
            const cachekey = categoria;

            //verificar se dados ja nao existe no redis
            const cache = await redis.get(cachekey);
            if (cache) {
                console.log('Dados encontrado no Redis')
                return res.json(JSON.parse(cache))
                
            }

            //Verificar se existe produtos nesse filtro no banco de dados
            const verificar = await Pratos.findAll({
                where: {
                    categoria: categoria
                }
            });

            if (verificar.length === 1) {
                const filtro = await Pratos.findAll({
                    attributes: ['nome', 'preco'],
                    where: {
                        categoria:categoria
                    }
                })
                //Armazena os dados no redis caso nao encontra
                await redis.setEx(cachekey,3600,JSON.stringify(filtro))
                return res.json(filtro)
                
            }else {
                return res.status(409).json({ error: "Nao existe produtos nesse filtro." });
            }
        }catch (error) {
            console.error("Erro ao filtrar prato:", error);
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
       
    },
};
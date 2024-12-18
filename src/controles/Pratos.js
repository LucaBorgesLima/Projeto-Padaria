
const Pratos = require('../models/Prato');
const {redis} = require('../RedisConfig');


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
            console.log('categoria: ', categoria);
    
            // Verificar se dados já não existem no Redis
            const CategoriaRedis = await redis.get(`cache:pratos:${categoria}`);
            console.log('Get redis :', CategoriaRedis);
            
            if (CategoriaRedis) {
                return res.json(JSON.parse(CategoriaRedis));                                        
            } else {
            // Verificar se existem produtos nesse filtro no banco de dados
                const pratos = await Pratos.findAll({
                    where: { categoria },
                    attributes: ['nome', 'preco'],
                });

                if (pratos.length > 0) {
                    // Armazena os dados no Redis com expiração de 1 hora
                    await redis.setEx(`cache:pratos:${categoria}`, 3600, JSON.stringify(pratos));
        
                    return res.json(pratos);
                } else {
                    return res.status(409).json({ error: "Não existe produtos nesse filtro." });
                }
            }  
        } catch (error) {
            console.error("Erro ao filtrar prato:", error);
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
    },
    

    async FiltraPratosSemCache(req, res) {
        try {
            const { categoria } = req.query;
            console.log('categoria sem cache: ',categoria)

            //Verificar se existe produtos nesse filtro no banco de dados
            const pratos = await Pratos.findAll({
                where: { categoria },
                attributes: ['nome', 'preco'],
            });

            if (pratos.length > 0) {   
                return res.json(pratos)

            } else {
                return res.status(409).json({ error: "Nao existe produtos nesse filtro." });
            }
        } catch (error) {
            console.error("Erro ao filtrar prato:", error);
            return res.status(500).json({ error: "Erro interno no servidor." });
        }
    },
};    
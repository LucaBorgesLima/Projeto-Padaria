
const Pratos = require('../models/Prato');
const {redis} = require('../RedisConfig');


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
        //consultar para ver se tem os dados no cache
        const CardapioRedis = await redis.get(`cache:cardapio`);
        //consultar dados no db e armazenar no cache
        if (CardapioRedis) {
            return res.json(JSON.parse(CardapioRedis));
        } else {
            const mostrar = await Pratos.findAll();
            await redis.setEx(`cache:cardapio`, 3600, JSON.stringify(mostrar))
            return res.json(mostrar)
        } 
          
    },

    async FiltraPratos(req, res) {
        try {
            const { categoria } = req.query;
            console.log('categoria: ', categoria);
    
            // Verificar se dados já não existem no Redis
            const CategoriaRedis = await redis.get(`cache:Pratos:${categoria}`);
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
    
};    
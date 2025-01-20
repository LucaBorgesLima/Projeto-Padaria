const PedidosTabelas = require("../models/pedidos_tabela");
const Itens_pedidos = require('../models/itens-pedidos');
const Pratos = require("../models/Prato");

//funcao para criar data do pedido no formato Mysql
const formatDateForMySQL = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const day = date.getDate().toString().padStart(2, '0'); 
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
//Funcao para cria numero aleatorio para o pedido
function gerar_numero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let numero_pedido_global;

module.exports = {
  async create_pedido(req, res) {
    try {
      const  status  = 'Em andamento';
      const data_do_pedido = formatDateForMySQL(new Date());
      console.log("Corpo da requisição:", status,data_do_pedido);

      const numero_pedido = gerar_numero(1, 999);
      console.log(numero_pedido);

      const create_pedidos = await PedidosTabelas.create({ numero_pedido, status, data_do_pedido });
      numero_pedido_global = numero_pedido;

      return res.status(200).json({ create_pedidos });
    } catch (error) {
      console.log("Erro ao criar pedido:", error);
      return res.status(500).json({ error: "Erro interno no servidor." });
    }
  }, 

  async escolher_pedido(req, res) {
    try {
      //array de objetos para o pedido
      const { itens } = req.body;

      // Busca pelo pedido usando o numero_pedido_global
      let pedido = await PedidosTabelas.findOne({
        attributes: ['id'],
        where: {
          numero_pedido: numero_pedido_global
        }
      });

      // Verifica se o pedido foi encontrado
      if (!pedido) {
      return res.status(400).json({error:"Erro ao encontrar pedido"})
      };
      // Extrai o id do pedido encontrado
      const pedido_id = pedido.id;
      console.log('id:', pedido_id);
      console.log('itens body:', itens);

      // Cria o item do pedido
      const escolhas = await Promise.all(itens.map(item => {
        return Itens_pedidos.create({
          pedido_id,
          pratos_id: item.pratos_id,
          quantidade: item.quantidade,
          preco_total: item.preco_total

        });
      }));

      return res.status(200).json({ escolhas });
      
    } catch (error) {
      console.log("Erro ao escolher pedido:", error);
      return res.status(500).json({ error: "Erro interno no servidor." });
    }
    
  },

  async comprovante_pedido(req, res) {
    try {
      let numeropedido = numero_pedido_global;

      const comprovante = await PedidosTabelas.findAll({
        attributes: ['numero_pedido', 'data_do_pedido'],
        where: {
          numero_pedido: numeropedido
        },
        include: [
          {
            model: Itens_pedidos,
            as:'itens',
            attributes: ['quantidade','preco_total'],
            include: [
              {
                model: Pratos,
                as:'prato',
                attributes: ['nome'] 
              }
            ]
          }
        ],
        raw: true
      });

      return res.status(200).json({ comprovante });

    } catch (error) {
      console.log("Erro no comprovante:", error);
      return res.status(500).json({ error: "Erro interno no servidor." });
    }

  }
};
 
const PedidosTabelas = require("../models/pedidos_tabela");
const Itens_pedidos = require('../models/itens-pedidos');
const Pratos = require("../models/Prato");


const formatDateForMySQL = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0'); 
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
  
module.exports = {

  async Pedidosagendados(req, res) {
    try {
      const { Pedido, Pratosid, Quantidade, Preco, Dataretirada } = req.body;
      const Datapedido = formatDateForMySQL(new Date());
      const status = "Pendente";

      
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      return res.status(500).json({ error: "Erro interno no servidor." });
    }
  }
}
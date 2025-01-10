const PedidosTabela = require("../models/pedidos_tabela");

module.exports = {
  async create_pedido(req, res) {
    try {
      const { status } = req.body;
      console.log("Corpo da requisição:", status);

      //Funcao para cria numero aleatorio para o pedido
      function gerar_numero(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const numero_pedido = gerar_numero(1, 999);
      console.log(numero_pedido);

      const create_pedidos = await PedidosTabela.create({ numero_pedido, status });
      return res.status(200).json({ create_pedidos });
    } catch (error) {
      console.log("Erro ao criar pedido:", error);
      return res.status(500).json({ error: "Erro interno no servidor." });
    }
  },
};

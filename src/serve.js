const app = require('./app');
require('dotenv').config();
const sequelize = require('./config/database')

const PORT = process.env.PORT;

(async () => {
    try {

      await sequelize.sync({ force: false }); // 'force: false' significa que ele não vai apagar os dados existentes
      console.log('Banco de dados sincronizado com sucesso!');
  

      app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
      });
    } catch (error) {
      console.error('Erro ao sincronizar o banco de dados:', error);
    }
  })();
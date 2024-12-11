const app = require('./app');
require('dotenv').config();
const sequelize = require('./database/index');
const redis = require('./RedisConfig');



const PORT = process.env.PORT;

(async () => {
  try {
    //Conexao sequelize
    await sequelize.sync({ force: false }); 
    console.log('Banco de dados sincronizado com sucesso!');

    //conexao redis
    app.locals.redis = redis;
    console.log('foi redis')

    //iniciar servidor
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });

    } catch (error) {
      console.error('Erro ao sincronizar o banco de dados:', error);
    }
})();
  
module.exports = {
  app
};
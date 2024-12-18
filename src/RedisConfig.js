const {createClient} = require('redis');
const { Json } = require('sequelize/lib/utils');
const { promisify } = require('util');

const redis = createClient({
    url: 'redis://localhost:6379'
});




async function IniciarRedis() {
  try {
    await redis.connect();
    console.log('connect redis')
  } catch (err) {
    console.error('Erro ao conectar ao Redis:', err);
    process.exit(1);
  }
};
  
module.exports = {
  redis,
  IniciarRedis,
  };
const Redis = require('redis');

const redis = Redis.createClient({
    url: 'redis://localhost:6379'
});


redis.on('connect', () => console.log('Conectado ao Redis com sucesso.'));
redis.on('error', (err) => console.error('Erro ao conectar ao Redis:', err));

(async () => {
    try {
      await redis.connect(); // Conectar ao Redis de maneira assíncrona
    } catch (err) {
      console.error('Erro ao conectar ao Redis:', err);
    }
  });
  
  module.exports = redis;
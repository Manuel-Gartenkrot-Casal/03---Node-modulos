const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Mi API',
    description: 'Documentación generada automáticamente',
  },
  host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('¡Documentación generada con éxito!');
});
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Mi API',
    description: 'Documentación generada automáticamente',
  },
  host: 'localhost:3000',
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/ej01.js',
  './src/ej02.js',
  './src/ej03.js',
  './src/ej04.js',
  './src/ej05.js',
  './src/ej06.js',
  './src/ej07.js',
  './src/ej08.js',
  './src/ej09.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('¡Documentación generada con éxito!');
});
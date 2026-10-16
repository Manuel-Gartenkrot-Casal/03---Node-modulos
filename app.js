import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const app = express();
app.use(express.json());

const swaggerDocument = JSON.parse(fs.readFileSync('./swagger-output.json', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/hola', (req, res) => {
  res.send('¡Hola mundo!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
  console.log('Documentación disponible en http://localhost:3000/api-docs');
});
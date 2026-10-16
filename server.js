import express from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

import { obtenerProductos } from './src/ej01.js';
import { agregarProducto } from './src/ej02.js'; 
import { mostrarFechaHora } from './src/ej03.js'; 
import { obtenerPais } from './src/ej04.js'; 
import { buscarProducto } from './src/ej05.js'; 
import { convertirCSV } from './src/ej06.js'; 
import { iniciarContador } from './src/ej07.js'; 
import { analizarTexto } from './src/ej08.js'; 
import { validarPassword } from './src/ej09.js'; 

const app = express();
app.use(express.json());

app.get('/api/productos', (req, res) => {
  try {
    const productos = obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al leer los productos' });
  }
});

app.post('/api/productos', (req, res) => {
  try {
    const nuevoProducto = req.body;
    const resultado = agregarProducto(nuevoProducto);
    res.status(201).json({ mensaje: 'Producto agregado con éxito', resultado });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el producto' });
  }
});

app.get('/api/fecha-hora', (req, res) => {
  try {
    const fechaHora = mostrarFechaHora();
    res.json({ fechaHora });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la fecha y hora' });
  }
});

app.get('/api/pais', (req, res) => {
  try {
    const pais = obtenerPais();
    res.json({ pais });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el país' });
  }
});

app.get('/api/productos/buscar/:termino', (req, res) => {
  try {
    const termino = req.params.termino;
    const resultado = buscarProducto(termino);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el producto' });
  }
});

app.get('/api/convertir-csv', (req, res) => {
  try {
    const csv = convertirCSV();
    res.type('text/csv').send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Error al convertir a CSV' });
  }
});

app.get('/api/contador', (req, res) => {
  try {
    const contador = iniciarContador();
    res.json({ contador });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar el contador' });
  }
});

app.post('/api/analizar-texto', (req, res) => {
  try {
    const { texto } = req.body;
    const analisis = analizarTexto(texto);
    res.json(analisis);
  } catch (error) {
    res.status(500).json({ error: 'Error al analizar el texto' });
  }
});

app.post('/api/validar-password', (req, res) => {
  try {
    const { password } = req.body;
    const esValida = validarPassword(password);
    res.json({ esValida });
  } catch (error) {
    res.status(500).json({ error: 'Error al validar la contraseña' });
  }
});

const swaggerDocument = JSON.parse(fs.readFileSync('./swagger-output.json', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
  console.log('Swagger UI en http://localhost:3000/api-docs');
});
import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
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

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Ejercicios Node.js',
      version: '1.0.0',
      description: 'API REST que prueba todas las funciones implementadas en los ejercicios de Node.js',
      contact: {
        name: 'Desarrollador',
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo'
      }
    ]
  },
  apis: ['./server.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Rutas de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos (ej01)
 *     description: Lee y retorna todos los productos del archivo JSON
 *     tags:
 *       - Productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                   precio:
 *                     type: number
 */
app.get('/productos', (req, res) => {
  try {
    const productos = obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Agregar nuevo producto (ej02)
 *     description: Añade un nuevo producto al archivo JSON
 *     tags:
 *       - Productos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - precio
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Manzana"
 *               precio:
 *                 type: number
 *                 example: 100
 *     responses:
 *       201:
 *         description: Producto agregado exitosamente
 */
app.post('/productos', (req, res) => {
  try {
    const { nombre, precio } = req.body;
    if (!nombre || precio === undefined) {
      return res.status(400).json({ error: 'Nombre y precio son requeridos' });
    }
    const producto = agregarProducto(nombre, precio);
    res.status(201).json({ mensaje: 'Producto agregado', producto });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto' });
  }
});

/**
 * @swagger
 * /fecha-hora:
 *   get:
 *     summary: Obtener fecha y hora actual (ej03)
 *     description: Retorna la fecha y hora actual del sistema
 *     tags:
 *       - Utilidades
 *     responses:
 *       200:
 *         description: Fecha y hora
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fecha:
 *                   type: string
 *                 hora:
 *                   type: string
 */
app.get('/fecha-hora', (req, res) => {
  try {
    const resultado = mostrarFechaHora();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener fecha y hora' });
  }
});

/**
 * @swagger
 * /obtener-pais:
 *   get:
 *     summary: Obtener información de un país (ej04)
 *     description: Busca información de un país incluyendo su población
 *     tags:
 *       - Países
 *     parameters:
 *       - in: query
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del país
 *         example: "Argentina"
 *     responses:
 *       200:
 *         description: Información del país encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pais:
 *                   type: string
 *                 poblacion:
 *                   type: number
 *       404:
 *         description: País no encontrado
 */
app.get('/obtener-pais', (req, res) => {
  try {
    const { nombre } = req.query;
    if (!nombre) {
      return res.status(400).json({ error: 'Parámetro nombre requerido' });
    }
    const pais = obtenerPais(nombre);
    if (!pais) {
      return res.status(404).json({ error: 'País no encontrado' });
    }
    res.json(pais);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener país' });
  }
});

/**
 * @swagger
 * /iniciar-contador:
 *   post:
 *     summary: Iniciar contador regresivo (ej07)
 *     description: Inicia un contador regresivo de 11 a 1 con intervalo de 1 segundo
 *     tags:
 *       - Utilidades
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               inicio:
 *                 type: number
 *                 default: 11
 *               intervalo:
 *                 type: number
 *                 default: 1000
 *                 description: Intervalo en milisegundos
 *     responses:
 *       200:
 *         description: Contador completado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                 eventos:
 *                   type: array
 *                   items:
 *                     type: number
 *                 duracionMs:
 *                   type: number
 */
app.post('/iniciar-contador', async (req, res) => {
  try {
    const { inicio = 11, intervalo = 1000 } = req.body;
    const resultado = await iniciarContador(inicio, intervalo);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al ejecutar contador' });
  }
});

/**
 * @swagger
 * /buscar-producto:
 *   get:
 *     summary: Buscar producto por nombre (ej05)
 *     description: Busca un producto específico por su nombre
 *     tags:
 *       - Productos
 *     parameters:
 *       - in: query
 *         name: nombre
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre del producto a buscar
 *         example: "Mouse"
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: Producto no encontrado
 */
app.get('/buscar-producto', (req, res) => {
  try {
    const { nombre } = req.query;
    if (!nombre) {
      return res.status(400).json({ error: 'Parámetro nombre requerido' });
    }
    const producto = buscarProducto(nombre);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar producto' });
  }
});

/**
 * @swagger
 * /convertir-csv:
 *   post:
 *     summary: Convertir productos a CSV (ej06)
 *     description: Convierte los productos JSON a formato CSV y los guarda en un archivo
 *     tags:
 *       - Utilidades
 *     responses:
 *       200:
 *         description: CSV creado exitosamente
 */
app.post('/convertir-csv', (req, res) => {
  try {
    const resultado = convertirCSV();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al convertir CSV' });
  }
});

/**
 * @swagger
 * /analizar-texto:
 *   post:
 *     summary: Analizar texto (ej08)
 *     description: Analiza un texto y retorna estadísticas como palabras, caracteres, vocales y consonantes
 *     tags:
 *       - Análisis
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - texto
 *             properties:
 *               texto:
 *                 type: string
 *                 example: "Hola, este es un texto de ejemplo"
 *     responses:
 *       200:
 *         description: Análisis completado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalPalabras:
 *                   type: number
 *                 totalCaracteres:
 *                   type: number
 *                 totalVocales:
 *                   type: number
 *                 totalConsonantes:
 *                   type: number
 */
app.post('/analizar-texto', (req, res) => {
  try {
    const { texto } = req.body;
    if (!texto) {
      return res.status(400).json({ error: 'Parámetro texto requerido' });
    }
    const resultado = analizarTexto(texto);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al analizar texto' });
  }
});

/**
 * @swagger
 * /validar-password:
 *   post:
 *     summary: Validar contraseña (ej09)
 *     description: Valida si una contraseña cumple con los requisitos (mín 8 caracteres, 1 número, 1 mayúscula)
 *     tags:
 *       - Seguridad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *             properties:
 *               password:
 *                 type: string
 *                 example: "MiPassword123"
 *     responses:
 *       200:
 *         description: Validación completada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valida:
 *                   type: boolean
 *                 mensaje:
 *                   type: string
 */
app.post('/validar-password', (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ error: 'Parámetro password requerido' });
    }
    const resultado = validarPassword(password);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Error al validar password' });
  }
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de Ejercicios Node.js - Swagger UI',
    documentacion: 'http://localhost:3000/api-docs',
    endpoints: {
      'GET /productos': 'Obtener todos los productos (ej01)',
      'POST /productos': 'Agregar nuevo producto (ej02)',
      'GET /fecha-hora': 'Obtener fecha y hora actual (ej03)',
      'GET /obtener-pais?nombre=xxx': 'Obtener información de un país (ej04)',
      'GET /buscar-producto?nombre=xxx': 'Buscar producto por nombre (ej05)',
      'POST /convertir-csv': 'Convertir productos a CSV (ej06)',
      'POST /iniciar-contador': 'Iniciar contador regresivo (ej07)',
      'POST /analizar-texto': 'Analizar texto (ej08)',
      'POST /validar-password': 'Validar contraseña (ej09)'
    }
  });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📚 Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});

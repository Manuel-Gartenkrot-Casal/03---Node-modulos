import fs from 'fs';
const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf8'));
console.log(productos); 
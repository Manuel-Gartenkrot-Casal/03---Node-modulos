import fs from 'fs';

const json = fs.readFileSync('productos.json', 'utf8');
const productos = JSON.parse(json);

let csv = 'nombre,precio\n';
for (let i = 0; i < productos.length; i++) {
  const p = productos[i];
  csv += `${p.nombre},${p.precio}\n`;
}

fs.writeFileSync('productos.csv', csv, 'utf8');
console.log('productos.csv creado');

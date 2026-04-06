import fs from 'fs';
const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf8'));
console.log(BuscarProducto("Mouse"));

function BuscarProducto(Nombre){
    var producto;
 return producto = productos.find(p => p.nombre === Nombre);
}
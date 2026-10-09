import fs from 'fs';

export function buscarProducto(nombre) {
    const json = fs.readFileSync('productos.json', 'utf8');
    const productos = JSON.parse(json);
    return productos.find(p => p.nombre === nombre);
}
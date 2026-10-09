import fs from 'fs';

export function obtenerProductos() {
    const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf8'));
    return productos;
} 
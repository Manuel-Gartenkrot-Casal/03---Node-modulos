import fs from 'fs';
agregarProducto('Almendras', 300);

function agregarProducto(nombre, precio) {
    const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf8'));
    const nuevoProducto = {
        nombre: nombre,
        precio: precio
    };
    productos.push(nuevoProducto);
    fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2));
}
function mostrarFechaHora() {
    const day = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    console.log(`Fecha Actual: ${day} \nHora Actual: ${time}`);
}
mostrarFechaHora();
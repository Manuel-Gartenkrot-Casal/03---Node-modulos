export function mostrarFechaHora() {
    const day = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return {
        fecha: day,
        hora: time
    };
}
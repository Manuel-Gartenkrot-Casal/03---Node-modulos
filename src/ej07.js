export function iniciarContador(inicio = 11, intervalo = 1000) {
    return new Promise((resolve) => {
        let num = inicio;
        const eventos = [];
        
        const timer = setInterval(() => {
            num--;
            eventos.push(num);
            
            if (num === 1) {
                clearInterval(timer);
                resolve({
                    mensaje: '¡Se acabó el tiempo!',
                    eventos: eventos,
                    duracionMs: eventos.length * intervalo
                });
            }
        }, intervalo);
    });
}
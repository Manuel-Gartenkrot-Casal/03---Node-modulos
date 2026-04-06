console.log(AnalizarTexto("Hola, este es un texto de ejemplo para analizar."));

function AnalizarTexto(texto){
    let palabras = texto.split(" ");
    let caracteres = texto.length;
    let vocales = texto.match(/[aeiouAEIOU]/g);
    let consonantes = texto.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
    let resultado = {
        totalPalabras: palabras.length,
        totalCaracteres: caracteres,
        totalVocales: vocales = vocales.length,
        totalConsonantes: consonantes = consonantes.length
    };
    return resultado;
    };

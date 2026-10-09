export function analizarTexto(texto){
    let palabras = texto.split(" ");
    let caracteres = texto.length;
    let vocales = texto.match(/[aeiouAEIOU]/g);
    let consonantes = texto.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
    let resultado = {
        totalPalabras: palabras.length,
        totalCaracteres: caracteres,
        totalVocales: vocales ? vocales.length : 0,
        totalConsonantes: consonantes ? consonantes.length : 0
    };
    return resultado;
}

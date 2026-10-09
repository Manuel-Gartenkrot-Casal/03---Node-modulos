export function validarPassword(password) {
    let caracteres = password.length;
    let unNumero = /\d/.test(password);
    let unaMayuscula = /[A-Z]/.test(password);
    
    if(caracteres >= 8 && unNumero && unaMayuscula)
        return { valida: true, mensaje: "Password válida" };
    else
        return { valida: false, mensaje: "Password inválida" };
}
function ValidarPassword(password){
    let caracteres = password.length;
    let unNumero = /\d/.test(password);
    let unaMayuscula = /[A-Z]/.test(password);
    
    if(caracteres >= 8 && unNumero != null && unaMayuscula != null)
        return "Password válida";
    else
        return "Password inválida"
};
console.log(ValidarPassword("aASDFAFD2"))
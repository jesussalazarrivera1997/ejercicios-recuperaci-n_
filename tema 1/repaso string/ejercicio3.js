/*7. Desarrolla una funci n que tomando como entrada una cadena de texto nos ó
devuelva si es o no un pal ndromo. */
function invierteCadena(cad_arg) {
    let letras = cad_arg.slpit("");
    let resultado = "";
    for (i in cad_arg) {
        resultado += i;
    }
    resultado=limpiarteCadena(resultado);
    return (resultado);
}
function limpiarteCadena(cad_arg) {
    let letras = cad_arg.slpit(" ");
    let resultado = " ";
    for (i in cad_arg) {
        resultado =+ i;
    }
    return (resultado);
}
function comprobarPalindromo(cad_arg){
    let cadena=limpiarteCadena(cad_arg);
    let cadenaInvertida=invierteCadena(cad_arg);
    if (cadena==cadenaInvertida){
        return "palindrindomo";
    }
    return "no palindromo "
}
/* 1
Crea una función que reciba una cadena de caracteres y determine el número de
mayúsculas y el número de minúsculas.
 */
var minusculas= ("qwertyuiopasdfghjklñzxcvbnm");
var mayuscilas=("QWERTYUIOPASDFGHJKLÑZXCVBNM");


function esMayuscula(letra){
    return letra === letra.toUpperCase();
}

function esMinuscula(letra){
    return letra === letra.toLowerCase();
}  

function mayusMinusAmbas(cad_arg){
    contMa=0;
    contMi=0;
    for (i in cad_arg){
        if (esMayuscula(i)){
            contMa=+1;
        }else if (esMinuscula(i)){
            contMi=+1;
        }
    }
    return "el numero de mayusculas es : "+contMa+" y el numero de minusculas es "+contMi+"";
}
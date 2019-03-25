
/*
2) 
Escribir una función que reciba como datos una cadena de caracteres y un carácter
y devuelva el número de veces que se encuentra el carácter en la cadena. 
 */


function numCarEnCad(cad_arg,x){
    let contador = 0;
    for (i in cad_arg){
        if (i === x){
            contador=+1;
        }
    }
    return contador;
}
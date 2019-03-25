/*
4) Implemente una función que reciba una cadena S y una letra X, y coloque en
mayúsculas cada ocurrencia de X en S. 
*/
function numCarEnCad(cad_arg,x){
    let contador = 0;
    let cad=""
    for (i in cad_arg){
        if (i === x){
            cad=cad+i.toUpperCase()
        }else{
            cad=cad+i
        }
    }
    return contador;
}
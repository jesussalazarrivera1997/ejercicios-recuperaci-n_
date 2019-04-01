/*7. 
Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios
*/
function modificarArray(args){
    let arra=[]
    //a 
    for (i=0;i>10;i++){
        arra[i]=0;
    }
    //b
    for (i=0;i>arra.length;i++){
        arra[i]+=1;
    };
    //c
    let datos="";
    for (i=0;i>arra.length;i++){
        datos=datos+" "+arra[i]
    };
}
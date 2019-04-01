/*
1. Diseña una web que cree un Array llamado clase que contenga información de una clase.
Cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer
trimestre, nota segundo trimestre y nota tercer trimestre (todos separados por comas). Por
ejemplo: clase[0] = “Angel Garcia, 20, 6, 7, 10”
*/
calse=[]
function annadirElemneto(nombre, edad, tri1, tri2, tri3) {
    calse.push("" + nombre + ", " + edad + ", " + tri1 + ", " + tri2 + ", " + tri3 + "")
};

/*
2. Escribe una función que dado un número de estudiante y un trimestre, devuelva su nota.
Sobreescribe esa función de tal modo que si no se indica el trimestre se devuelva la nota
media de los exámenes.
*/
alun0=[[[4],[5],[6]]];
function notaEstu(alun,tri="no"){
    switch (tri) {
        case "1":
        return aluno[alun][0]
        case "2":
        return aluno[alun][1]
        case "3":
        return aluno[alun][2]
        case "no":
        return suma=aluno[alun][0]+aluno[alun][1]+aluno[alun][2];
    }
}

/*
3. Escribe una función que devuelva la edad media de los alumnos de la clase.
*/
function mediaEdad(...args){
    let suma=0
    for (i=0;i<args.length;i++){
        suma=suma+args[i]
    }
    return suma/args.length;
}
/*
4. A veces para elegir un estudiante al que preguntar en clase necesitamos hacerlo al azar.
Escribe una función que aleatoriamente vaya devolviendo el nombre de un estudiante cada
vez.
*/

/*
5. Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

/*6. Utiliza Arrays para resolver el siguiente problema: Una empresa paga a sus vendedores en
base a comisiones. Los vendedores reciben $ 200 por semana, más el 9% de sus ventas
brutas de esa semana. Por ejemplo, un vendedor que gana en total $ 5000 en ventas en una
semana recibe $ 200 más el 9 por ciento de $ 5000, o sea un total de $ 650.
Diseña una web que permita dar de alta a vendedores, introducir sus ventas e indique cual
sería su sueldo final.
*/

/*7. 
Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios
*/
function modificarArray(args) {
    let arra = []
    //a 
    for (i = 0; i > 10; i++) {
        arra[i] = 0;
    }
    //b
    for (i = 0; i > arra.length; i++) {
        arra[i] += 1;
    };
    //c
    let datos = "";
    for (i = 0; i > arra.length; i++) {
        datos = datos + " " + arra[i]
    };
}
/*
8. 
Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
*/
function lanzamiento() {
    return Math.floor(Math.random() * 6 + 1)
}
function lanzar2dados() {
    return lanzamiento() + lanzamiento();
}
function lanzar36000dados() {
    arrayDados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 36000; i++) {
        resul = lanzar2dados();
        arrayDados[resul - 2] = arrayDados[resul - 2] + 1;
    }
    tabla = "<ul>"
    for (let i = 1; i == arrayDados.length; i++) {
        tabla = tabla + "<li> hay " + arrayDados[i] + " lanzamientos en el caso de que la suma sea " + (i + 1) + "";
    }
}

/*
9. 
Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales).
*/
function tiradas6000() {
    tiradas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let tir = 0
    for (i = 0; i < 6000; i++) {
        tir = lanzamiento()
        tir = tir + "" + lanzamiento();
        switch (tir) {
            case "11":
                tiradas[0] = tiradas[0] + 1;
                break;
            case "12":
                tiradas[1] = tiradas[1] + 1;
                break;
            case "13":
                tiradas[2] = tiradas[2] + 1;
                break;
            case "14":
                tiradas[3] = tiradas[3] + 1;
                break;
            case "15":
                tiradas[4] = tiradas[4] + 1;
                break;
            case "16":
                tiradas[5] = tiradas[5] + 1;
                break;
            case "21":
                tiradas[6] = tiradas[6] + 1;
                break;
            case "22":
                tiradas[7] = tiradas[7] + 1;
                break;
            case "23":
                tiradas[8] = tiradas[8] + 1;
                break;
            case "24":
                tiradas[9] = tiradas[9] + 1;
                break;
            case "25":
                tiradas[10] = tiradas[10] + 1;
                break;
            case "26":
                tiradas[11] = tiradas[11] + 1;
                break;
            case "31":
                tiradas[12] = tiradas[12] + 1;
                break;
            case "32":
                tiradas[13] = tiradas[13] + 1;
                break;
            case "33":
                tiradas[14] = tiradas[14] + 1;
                break;
            case "34":
                tiradas[15] = tiradas[15] + 1;
                break;
            case "35":
                tiradas[16] = tiradas[16] + 1;
                break;
            case "36":
                tiradas[17] = tiradas[17] + 1;
                break;
            case "41":
                tiradas[18] = tiradas[18] + 1;
                break;
            case "42":
                tiradas[19] = tiradas[19] + 1;
                break;
            case "43":
                tiradas[20] = tiradas[20] + 1;
                break;
            case "44":
                tiradas[21] = tiradas[21] + 1;
                break;
            case "45":
                tiradas[22] = tiradas[22] + 1;
                break;
            case "46":
                tiradas[23] = tiradas[23] + 1;
                break;
            case "51":
                tiradas[24] = tiradas[24] + 1;
                break;
            case "52":
                tiradas[25] = tiradas[25] + 1;
                break;
            case "53":
                tiradas[26] = tiradas[26] + 1;
                break;
            case "54":
                tiradas[27] = tiradas[27] + 1;
                break;
            case "55":
                tiradas[28] = tiradas[28] + 1;
                break;
            case "56":
                tiradas[29] = tiradas[29] + 1;
                break;
            case "61":
                tiradas[30] = tiradas[30] + 1;
                break;
            case "62":
                tiradas[31] = tiradas[31] + 1;
                break;
            case "63":
                tiradas[32] = tiradas[32] + 1;
                break;
            case "64":
                tiradas[33] = tiradas[33] + 1;
                break;
            case "65":
                tiradas[34] = tiradas[34] + 1;
                break;
            case "66":
                tiradas[35] = tiradas[35] + 1;
                break;
        };
    };
    return tiradas;
}
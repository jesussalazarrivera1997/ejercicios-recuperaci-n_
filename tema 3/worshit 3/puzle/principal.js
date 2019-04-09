/*
Puzzle. Se desea implementar una web para la 
realizacion de puzzles. Un puzzle no es 
mas que un tablero cuadrado con un hueco que podemos 
mover y que permite reordenar las piezas.
 Se pide por tanto la implementacion 
 de una clase que represente 
este juego teniendo en cuenta:
1. La dimension puede variar, se escogera en la creacion. 
2. El espacio en blancos lo se mueve
 arriba, abajo, izquierda, derecha, controlando 
por supuesto que sea un movimiento valido. 
3. Debe llevarse un control del tiempo minimo para resolverlo,
 asi como el numero demovimientos realizados.
4. Los tableros se generaran aleatoriamente. 
5. Implementaras un metodo dibujar()
 que imprimir en pantalla el tablero para poder
ser probado.
*/
class Celda {
    constructor(id, i, x) {
        this.id = id
        this.positon = [i, x];

    }
}
class Juego {
    constructor(alto, ancho) {
        nuevatabla(alto,ancho);
        this.tablero = this.construirtablerro(alto, ancho);
        document.getElementById("0").addEventListener("")
    }
    nuevatabla(x, y) {
        let tabla = "<table>"
        let cont1 = 0
        let cont2 = 0
        let cont3 = 0
        for (let i = 0; i < x; i++) {
            tabla += "<tr>";
            for (let z = 0; z < y; z++) {
                tabla += "<td id=" + cont1 + "" + cont2 + ">"+cont3+"</td>";
                cont2++;
            }
            cont1++
            cont2 = 0
            tabla += "</tr>";
        }
        tabla += "</table>"

        document.getElementById("juego").innerHTML = tabla;
    }

    construirtablerro(alto, ancho) {
        espacios = [];
        let contador = 0
        for (i = 0; i < alto; i++) {
            for (y = 0; y < ancho; y++) {
                espacios[i][y] = new Celda(contador, i, x);
                contador++;
                document.getElementById("" + i + "" + y + "").addEventListener("click", moverFicha(contador));
            }
        }
        return espacios
    }

    moverFicha(idamover) {
        for (i in this.tablero) {
            for (x in i) {

                if (idamover == x.id) {
                    let coordenadas = x.positon;
                    for (z in this.tablero) {
                        for (y in z) {
                            coordenadas2 = y.positon;
                            if ((coordenadas[0] - 1 == y.positon[0]) && (coordenadas[1] + 1 == y.positon[1])) {
                                y.positon = coordenadas;
                                x.positon = coordenadas2;
                                break;
                            } if ((coordenadas[0] - 1 == y.positon[0]) && (coordenadas[1] - 1 == y.positon[1])) {
                                y.positon = coordenadas;
                                x.positon = coordenadas2;
                                break;
                            } if ((coordenadas[0] - 1 == y.positon[0]) && (coordenadas[1] == y.positon[1])) {
                                y.positon = coordenadas;
                                x.positon = coordenadas2;
                                break;
                            } if ((coordenadas[0] == y.positon[0]) && (coordenadas[1] + 1 == y.positon[1])) {
                                y.positon = coordenadas;
                                x.positon = coordenadas2;
                                break;
                            } if ((coordenadas[0] == y.positon[0]) && (coordenadas[1] - 1 == y.positon[1])) {
                                y.positon = coordenadas;
                                x.positon = coordenadas2;
                                break;
                            } if ((coordenadas[0] + 1 == y.positon[0]) && (coordenadas[1] + 1 == y.positon[1])) {
                                y.positon = coordenadas;
                                x.positon = coordenadas2;
                                break;
                            } if ((coordenadas[0] + 1 == y.positon[0]) && (coordenadas[1] - 1 == y.positon[1])) {
                                y.positon = coordenadas;
                                x.positon = coordenadas2;
                                break;
                            } if ((coordenadas[0] + 1 == y.positon[0]) && (coordenadas[1] == y.positon[1])) {
                                y.positon = coordenadas;
                                x.positon = coordenadas2;
                                break;
                            };
                        };
                    };

                };

            };
        };
    };

};

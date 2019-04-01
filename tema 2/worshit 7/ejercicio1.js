/*
La API de geolocalización se publica a través del objeto
navigator.geolocation. Si el objeto existe, los servicios de
geolocalización están disponibles. Desarrollar una 
aplicación web en la que:

1  Probar si la geolocalización está disponible.

2  si está disponible, muestre la posición actual (latitud y longitud)

3  Si no está disponible, muestre un mensaje para todos y 
cada uno de los posibles errores.

4  Mejore su código para que muestre la posición continuamente 
(aunque el usuario podría estar en movimiento, para que pueda cambiar)

5  Encuentre la manera de medir la distancia recorrida.


*/
var coordenadas1 = [];
navigator.geolocation.getCurrentPosition(function (position) {
    coordenadas1 = [position.coords.latitude, position.coords.longitude];
    var uluru = { lat: coordenadas1[0],lng:coordenadas1[1] };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
});
var coordenadas2 = [];

function calcularDistanciaPosicionesCoordenadas(lat1, lon1, lat2, lon2) {
    rad = function (x) { return x * Math.PI / 180; }
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(3); //Retorna tres decimales
}


function mostrarPosicion(cordenadax, cordenaday) {
    document.getElementById("coordenadas").innerHTML = "latitud :" + cordenadax + ".  longitud :" + cordenaday + "";
};


function posicionFija() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            mostrarPosicion(position.coords.latitude, position.coords.longitude);
        });
    } else {
        /* geolocation IS NOT available */
    }
}

function posicionVariable() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            mostrarPosicion(position.coords.latitude, position.coords.longitude);
            coordenadas2 = [position.coords.latitude, position.coords.longitude];
            setInterval(posicionVariable(), 1000);
        });
    } else {
        /* geolocation IS NOT available */
    }
}
console.log(coordenadas1[1])
function calcularRecorrido(){
    calcularDistanciaPosicionesCoordenadas(coordenadas1[0],coordenadas1[1],coordenadas2[0],coordenadas2[1]);
};

function initMap() {
}

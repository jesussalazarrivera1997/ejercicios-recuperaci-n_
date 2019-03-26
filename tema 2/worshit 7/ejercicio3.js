/*
Complete el ejercicio 2 con estas nuevas características:
busque la forma de animar su marcador
Dibuje la posición del usuario correctamente, aunque podría estar moviéndose.
Dibuja la ruta del usuario sobre el mapa.
*/

function mapaLocalizacionActual2() {
    // The location actual
    var coordenadas1 = {};
    navigator.geolocation.getCurrentPosition(function (position) {
        coordenadas1 = { lat: position.coords.latitude, lng: position.coords.longitude};
    });
    // The map, centered 
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: coordenadas1 });
    // The marker, positioned 
    var marker = new google.maps.Marker({ position: coordenadas1, map: map });
}



function refrescarMapa(){
    var coordenadas1 = {};
    navigator.geolocation.getCurrentPosition(function (position) {
        coordenadas1 = { lat: position.coords.latitude, lng: position.coords.longitude};
    });
    
}


setInterval()
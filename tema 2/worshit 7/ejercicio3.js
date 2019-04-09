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
        coordenadas1 = { lat: position.coords.latitude, lng: position.coords.longitude };
    });
    // The map, centered 
    var map = new google.maps.Map(document.getElementById('mapa'), { zoom: 4, center: coordenadas1 });
    // The marker, positioned 

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { position: coordenadas1, map: map }
    });
    marker.addListener('click', toggleBounce);
}



function refrescarMapa() {
    var coordenadas1 = {};
    navigator.geolocation.getCurrentPosition(function (position) {
        coordenadas1 = { lat: position.coords.latitude, lng: position.coords.longitude };
    });

}
function initMap() {
    //get api uses
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    //waypoints to add
    var waypts = [{ location: { lat: 41.94, lng: 1.56 }, stopover: true }, { location: { lat: 41.99, lng: 1.53 }, stopover: true }, { location: { lat: 41.98, lng: 1.52 }, stopover: true }];

    //api map
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 6,
        center: { lat: waypts[0].location.lat, lng: waypts[0].location.lng }
    });
    //add map
    directionsDisplay.setMap(map);

    // set the new
    //new Array(waypts[0].location.lat,waypts[0].location.lng)
    directionsService.route({
        origin: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },//db waypoint start
        destination: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },//db waypoint end
        waypoints: waypts,
        travelMode: google.maps.TravelMode.WALKING
    }, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Ha fallat la comunicació amb el mapa a causa de: ' + status);
        }
    });
}

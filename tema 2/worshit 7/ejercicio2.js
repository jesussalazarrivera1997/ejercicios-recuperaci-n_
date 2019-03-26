/*2
Intentemos utilizar la información de 
geolocalización con la API de Google Maps.
1.  Use un mapa para mostrar su ubicación
2.  Dibuje un marcador en su ubicación
3.  Encuentre una manera de saber la dirección
    de su ubicación (geocodificación inversa).
*/
//ejercicio1
function mapaLocalizacionActual() {
    // The location actual
    var coordenadas1 = {};
    navigator.geolocation.getCurrentPosition(function (position) {
        coordenadas1 = { lat: position.coords.latitude, lng: position.coords.longitude};
    });
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 4, center: coordenadas1 });
    // The marker, positioned 
   // var marker = new google.maps.Marker({ position: coordenadas1, map: map });
}


//ejercicio2

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

//ejercicio3
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: 40.731, lng: -73.997}
    });
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;
  
    document.getElementById('submit').addEventListener('click', function() {
      geocodeLatLng(geocoder, map, infowindow);
    });
  }
  
  function geocodeLatLng(geocoder, map, infowindow) {
    var input = document.getElementById('latlng').value;
    var latlngStr = input.split(',', 2);
    var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          map.setZoom(11);
          var marker = new google.maps.Marker({
            position: latlng,
            map: map
          });
          infowindow.setContent(results[0].formatted_address);
          infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });
  }
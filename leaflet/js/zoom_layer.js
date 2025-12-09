
// Map Intialization
var map = L.map('map').setView([24.8607, 67.0011], 11);
map.zoomControl.setPosition('topright');

// OSM Layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// Adding marker with popup
var myIcon = L.icon({
    iconUrl: 'img/red_marker.png',
    iconSize: [40, 40],
});

var single_marker = L.marker([24.8607, 67.0011], {icon: myIcon, draggable: true}).addTo(map)
var popup = single_marker.bindPopup('Karachi.<br> The City of Lights.').openPopup();
popup.addTo(map);

// Map Scale
L.control.scale({position: "bottomright"}).addTo(map);

// Full Screen Map View
var mapId = document.getElementById('map');
function fullscreenview(){
    mapId.requestFullscreen();
};

// Map Print
// $('.print-map').click(function(){
//     window.print();
// });

L.control.browserPrint().addTo(map);

// Leaflet Search
new L.Control.Geocoder().addTo(map);

// Zoom to Layer
$('.zoom-to-layer').click(function(){
    map.setView([24.8607, 67.0011], 11)
})
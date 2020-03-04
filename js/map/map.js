$(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiaHRlbnJpY28iLCJhIjoiY2lwbm5sZmFlMDAwMGZtbmM0NXUwaDl6aCJ9.k_s21qzyONvAqmFg5HmNuQ';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
        center: [10.38, 30], // starting position
        zoom: 1 // starting zoom
    });
})
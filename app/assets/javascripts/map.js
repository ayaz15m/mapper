$(window).ready(function(){


  var lat = $("#foo").data("lat");
  var lng = $("#boo").data("lng");

  var map = L.map('map').setView([lat, lng], 13);


      L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i86knfo3'
      }).addTo(map);

   L.marker([lat, lng]).addTo(map)

});

var map = L.map('map').setView([51.505, -0.09], 13);  // Default view (London)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var userLat = position.coords.latitude;
    var userLon = position.coords.longitude;

   map.setView([userLat, userLon], 13);

    L.marker([userLat, userLon]).addTo(map)
      .bindPopup("You are here")
      .openPopup();
  }, function() {
    alert("fail");
  });
}

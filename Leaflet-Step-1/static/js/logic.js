// Creating the map
var myMap = L.map("map", {
  center: [40, -95],
  zoom: 5
});

// Adding the dark theme background map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/dark-v10",
  accessToken: API_KEY
}).addTo(myMap);

// Adding circles
// function quakePoints(locations) {

// }
// L.circle([32.7767, -96.7979], {
//   color: "red",
//   fillColor: "red",
//   fillOpacity: 0.75,
//   radius: 10000
// }).addTo(myMap);


// Request JSON and pulling data

//Arrays initialization
var locations = [];
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(queryURL).then(function (data) {
  for (var i = 0; i < data.features.length; i++) {
    locations.push(data.features[i].geometry.coordinates);
  }
  console.log(locations);
});
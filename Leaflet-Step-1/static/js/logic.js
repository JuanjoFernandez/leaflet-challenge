// Adding circles
var markersGroup = []
function quakePoints(locations) {
  locations.forEach(coordinate => {
    markersGroup.push(
      L.circle([coordinate[1], coordinate[0]], {
        color: "red",
        fillColor: "red",
        fillOpacity: 1,
        radius: 100000
      })
    );
  });
  return markersGroup;
}

// Request JSON and pulling data
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(queryURL).then(function (data) {
  var locations = [];
  for (var i = 0; i < data.features.length; i++) {
    locations.push(data.features[i].geometry.coordinates);
  }

  // Running functions
  markersGroup = quakePoints(locations);
  var quakesLayer = L.layerGroup(markersGroup);
  console.log (quakesLayer);

  // Adding the dark theme background map
  var darkLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
  });

  // Creating the map
  var myMap = L.map("map", {
    center: [40, -95],
    zoom: 5,
    layers: [darkLayer, quakesLayer]
  });
});



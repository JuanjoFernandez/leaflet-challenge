// Adding circles
var markersGroup = []
function quakePoints(locations, intensity) {
  var i=0
  locations.forEach(coordinate => {
    // Color grading depth
    if (coordinate[2] <= 10) {
      markerColor = "#19ff00"
    } else if (coordinate[2] <= 30) {
      markerColor = "#55ff00"
    } else if (coordinate[2] <= 50) {
      markerColor = "#8cff00"
    } else if (coordinate[2] <= 70) {
      markerColor = "#ffff00"
    } else if (coordinate[2] <= 90) {
      markerColor = "#ff6100"
    } else {
      markerColor = "#ff0000"
    };

    markersGroup.push(
      L.circle([coordinate[1], coordinate[0]], {
        color: "black",
        fillColor: markerColor,
        fillOpacity: .7,
        radius: 40000*intensity[i]
      }).bindPopup(
        "<h1>Magnitude: "+intensity[i]+"</h1>"
      )
    );
    i++;
  });
  return markersGroup;
}

// Request JSON and pulling data
var queryURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(queryURL).then(function (data) {
  var locations = [];
  var intensity = [];
  for (var i = 0; i < data.features.length; i++) {
    locations.push(data.features[i].geometry.coordinates);
    intensity.push(data.features[i].properties.mag);
  }
  
  // Running functions
  markersGroup = quakePoints(locations, intensity);
  var quakesLayer = L.layerGroup(markersGroup);

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
    zoom: 4,
    layers: [darkLayer, quakesLayer]
  });
});



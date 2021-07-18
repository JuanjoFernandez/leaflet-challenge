![header](resources/logo.png)
# leaflet-challenge

# Project Overview

This project consists in creating a geographical visualization of earthquakes that happened around the globe for the past 24 hours. The project will be built using a javascript library known as Leaflet

# Project breakdown
- This project requires to obtain a free API key from [Mapbox](https://www.mapbox.com/), this will allow the app to obtain the base map in which to display the data
- After obtaining the map, the app makes a call to the [US Geological Survey (USGS)](https://earthquake.usgs.gov/) to obtain a GeoJSON with earthquake information
- The app pulls some data from the JSON obtained and displays it on the map in different ways:
    - Circle sizes correspond to the earthquake magnitude
    - Circle colors match the depth in which the event ocurred, the deeper the earthquake the more devastating it can be, hence the color gradient from red to green
    - Clicking a circle displays a pop-up that shows the location of the epicentre, the magnitude, depth and time of the event

# Repository structure
````bash

````

# Screenshots



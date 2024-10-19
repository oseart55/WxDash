
/* Add Basemap Source Here*/
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 20
}).addTo(map);

var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});


/* Add Basemaps Here*/
var baseMaps = {
    "CartoDB DarkMatter": CartoDB_DarkMatter,
    "Open Street Map Mapnik": OpenStreetMap_Mapnik,
    "Open Street Map HOT": OpenStreetMap_HOT,
    "Esri World Imagery": Esri_WorldImagery,
}
/* Add Overlays Here*/
var overlayMaps = {
    "NOAA Spot Forecast": firePointFeatureLayer,
    "SPC's Fire Weather Outlook": fire1DayForecast,
/*    "Two Day Graphical Tropical Weather Outlook": TropicalWeatherOutlook,*/
    "Seven Day Graphical Tropical Weather Outlook": TropicalWeatherOutlook_Week,
    "NOAA METAR Current Wind Speed Direction": NOAA_METAR_current_wind_speed_direction,
    "Current Weather Radar": radarLayer,
    /*"SIGMETs": SIGMETs*/
}

/* Add Layer Control inclusions Here*/
L.Control.Layers.include({
    getOverlays: function () {
        // create hash to hold all layers
        var control, layers;
        layers = [];
        control = this;

        // loop thru all layers in control
        control._layers.forEach(function (obj) {
            var layerName;

            // check if layer is an overlay
            if (obj.overlay) {
                // get name of overlay
                layerName = obj.name;
                // store whether it's present on the map or not
                layers.push({ "name": obj.name, "visible": control._map.hasLayer(obj.layer) })
                //return layers[layerName] = control._map.hasLayer(obj.layer);
            }
        });

        return layers;
    }
});

/* var for Global Layer Control*/
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
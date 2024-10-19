var featureLayerSources = [
    {
        "Title": "NOAA SPOT",
        "Type": "featureLayer",
        "Url": "https://mapservices.weather.noaa.gov/vector/rest/services/fire_weather/nws_fire_weather_spot/MapServer/0",
        "options": {
            "pointToLayer": true,
            "iconStyle": "marker",
            "style": false,
            "popupContent": ['name', 'type'],
            "properties": ['objectid_1', 'lat', 'lon', 'name', 'stat', "layer"]
        },
        "attribution": '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
    },
    {
        "Title": "1 Day Fire Forecast",
        "Type": "featureLayer",
        "Url": "https://mapservices.weather.noaa.gov/vector/rest/services/fire_weather/SPC_firewx/MapServer/1",
        "options": {
            "pointToLayer": false,
            "iconStyle": false,
            "style": true,
            "popupContent": ['dn'],
            "properties": ['objectid', 'dn', 'bounds', 'layer']
        },
        "attribution": '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
    },
    {
        "Title": "Tropical Weather Outlook (7 day)",
        "Type": "featureLayer",
        "Url": "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer/2",
        "options": {
            "pointToLayer": true,
            "iconStyle": "marker",
            "style": false,
            "popupContent": ['basin', 'risk2day', 'objectid'],
            "properties": ['objectid', 'risk2day', 'prob2day', 'lat', 'lon','layer']
        },
        "attribution": '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
    },
    {
        "Title": "NOAA METAR",
        "Type": "featureLayer",
        "Url": "https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/NOAA_METAR_current_wind_speed_direction_v1/FeatureServer/0",
        "options": {
            "pointToLayer": true,
            "iconStyle": "circleMarker",
            "style": false,
            "popupContent": ['WIND_CHILL', 'WIND_DIRECT', 'WIND_GUST', 'WIND_SPEED',
                'VISIBILITY', "SKY_CONDTN", "R_HUMIDITY", "HEAT_INDEX", "FLT_CATEGORY", "DEW_POINT", "ICAO"],
            "properties": ['OBJECTID', 'ICAO', 'lat', 'lon','layer']
        },
        "attribution":
            '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
    },
    {
        "Title": "Current RADAR Weather",
        "Type": "imageMapLayer",
        "Url": "https://mapservices.weather.noaa.gov/eventdriven/rest/services/radar/radar_base_reflectivity_time/ImageServer",
        "options": {
            "pointToLayer": false,
            "iconStyle": false,
            "style": false,
            "popupContent": false
        },
        "attribution": "National Oceanic and Atmospheric Administration, NOAA, National Weather Service, NWS",
    }

]

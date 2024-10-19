var baseMapSources = [
    {
        "Title": "CartoDB_DarkMatter",
        "Url": "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        "Text": '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https: //carto.com/attributions">CARTO</a>',
        "MaxZoom": 20,
        "default": true
    },
    {
        "Title": "OpenStreetMap_Mapnik",
        "Url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        "Text": '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        "MaxZoom": 19
    },
    {
        "Title": "OpenStreetMap_HOT",
        "Url": "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        "Text": '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
        "MaxZoom": 19
    },
    {
        "Title": "Esri_WorldImagery",
        "Url": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        "Text": 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        "MaxZoom": 19
    },
]
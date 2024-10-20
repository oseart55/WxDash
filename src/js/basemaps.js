baseMapSources.forEach((baseMapSource) => {
    var layer =  L.tileLayer(baseMapSource.Url, {
        attribution: baseMapSource.Text,
        maxZoom: baseMapSource.MaxZoom
    });
    baseMaps[baseMapSource.Title] = layer;
});
if (_userPreferences["basemap"]) {
    layer = _userPreferences["basemap"];
    baseMaps[layer].addTo(map);
}
else {
    baseMaps["CartoDB_DarkMatter"].addTo(map);
}
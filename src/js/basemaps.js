baseMapSources.forEach((baseMapSource) => {
    var layer =  L.tileLayer(baseMapSource.Url, {
        attribution: baseMapSource.Text,
        maxZoom: baseMapSource.MaxZoom
    });
    if (baseMapSource.default) {
        layer.addTo(map);
    }
    baseMaps[baseMapSource.Title] = layer;
});
_userLayers = JSON.parse(_userPreferences["layers"]);

featureLayerSources.forEach((featureLayerSource) => {
    let featurelayer;
    if (featureLayerSource.Type == "featureLayer") {
        overlayMaps[featureLayerSource.Title] = CreateFeatureLayer(featureLayerSource);
    }
    if (featureLayerSource.Type == "imageMapLayer") {
        overlayMaps[featureLayerSource.Title] = CreateImageLayer(featureLayerSource);
    }
});
//Helper function
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function CreateFeatureLayer(featureLayerSource) {
    let layer = L.esri.featureLayer({
        "url": featureLayerSource.Url,
        pointToLayer: function (feature, latlng) {
            if (featureLayerSource.options.pointToLayer && featureLayerSource.options.iconStyle == "marker") {
                let pointIcon = L.icon({
                    iconUrl: GetIconStyle(feature.properties)
                });
                return L.marker(latlng, { icon: pointIcon });
            }
            if (featureLayerSource.options.pointToLayer && featureLayerSource.options.iconStyle == "circleMarker") {
                return L.circleMarker(latlng, GetIconStyle(feature.properties));
            }
            return null;
        },
        style: function (feature) {
            if (featureLayerSource.options.style) {
                _color = GetIconStyle(feature.properties)
                return { color: _color, opacity: 0.7 }
            }
            else { return null };
        },
        onEachFeature: function (feature, layer) {
            layer.bindTooltip(
                function (layer) {
                    _popup = "";
                    featureLayerSource.options.popupContent.forEach((option) => {
                        _popup += layer.feature.properties[option] != null ? `<b>${capitalize(option)}: </b>${layer.feature.properties[option]} <br>` : `<b>${capitalize(option)}: </b>N/A <br>`
                    })
                    return _popup
                },
                {} //then add your options
            )
        },
        attribution: featureLayerSource.attribution
    });
    return layer;
}
function CreateImageLayer(featureLayerSource) {
    let layer = L.esri.imageMapLayer({
        url: featureLayerSource.Url,
        attribution: featureLayerSource.attribution,
    });
    return layer
}
if (_userLayers.length > 0) {
    _userLayers.forEach((layer) => {
        if (layer.visible) {
            overlayMaps[layer.name].addTo(map);
            switch (layer.name) {
                case "NOAA SPOT":
                    NOAA_SPOT_Legend.addTo(map);
                    break;
                case "1 Day Fire Forecast":
                    Fire_Forecast_Legend.addTo(map);
                    break;
                case "Tropical Weather Outlook (7 day)":
                    TropicalWeatherOutlook_Lengend.addTo(map);
                    break;
                case "NOAA METAR":
                    METAR_Legend.addTo(map);
                    break;
            }
        }
    })
}
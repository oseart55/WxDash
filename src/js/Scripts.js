var scripts = [
    'UserPreferences',
    'Version',
    'FeatureModal',
    'Map',
    'BaseMapSources',
    'FeatureLayerSources',
    'GetIconStyle',
    'Basemaps',
    'Legends',
    'FeatureLayers',
    'Dashboard',
    "LayerController",
    "Radar",
    "CustomToolbars",
]

scripts.forEach((source) => {
    let script = document.createElement("script");
    script.src = "src/js/" + source + ".js";
    script.type = "text/javascript";
    script.async = false;
    document.body.append(script);
})
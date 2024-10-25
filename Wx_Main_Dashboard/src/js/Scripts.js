var scripts = [
    'UserPreferences',
    'Version',
    'FeatureModal',
    'FeatureLayerSources',
    'Worker',
    'Dashboard',
]

scripts.forEach((source) => {
    let script = document.createElement("script");
    script.src = "src/js/" + source + ".js";
    script.type = "text/javascript";
    script.async = false;
    document.body.append(script);
});
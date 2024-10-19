function rerenderAll() {
    // update and rerender the chart
    scatterPlotDataArray = [];
    _layers = layerControl.getOverlays();
    for (layer of _layers) {
        if (layer.visible) {
            renderList(layer.name)
        }
    }

    // update and rerender the list
    list.innerHTML = "";
    scatterPlotDataArray.forEach(function (x) {
        var entry = '<li class="list-item">' + x.name + "</li>";
        list.innerHTML += entry;
    });
    // update and rerender the indecator
    let data2 = scatterPlotDataArray;
    var completeFire = data2.filter((value) => value.stat == "C");
    var pendingFire = data2.filter((value) => value.stat == "P");

    var fireAreaElevated = data2.filter((value) => value.name == "ELEVATED");
    var fireAreaCritical = data2.filter((value) => value.name == "CRITICAL");
    var fireAreaExtreme = data2.filter((value) => value.name == "EXTREME");

    var prob2day30 = data2.filter((value) => value.prob2day == "30%" || value.prob2day == "20%" || value.prob2day == "10%");
    var prob2day60 = data2.filter((value) => value.prob2day == "40%" || value.prob2day == "50%" || value.prob2day == "60%");
    var prob2day70 = data2.filter((value) => value.prob2day == "70%" || value.prob2day == "80%" || value.prob2day == "90%" || value.prob2day == "100%");

    if (completeFire.length > 0)
        indecator1.innerHTML = `<h2> ${completeFire.length} </h2> <span> </span> <p> <br> Complete  </p>`;
    if (pendingFire.length > 0)
        indecator2.innerHTML = `<h2> ${pendingFire.length} </h2> <span> </span> <p> <br> Pending  </p>`;

    if (fireAreaElevated.length > 0)
        indecator1.innerHTML = `<p style='margin:10px'> ${fireAreaElevated.length} <br> Elevated  </p>`;
    if (fireAreaCritical.length > 0)
        indecator1.innerHTML += `<p style='margin:10px'> ${fireAreaCritical.length}<br> Critical  </p>`;
    if (fireAreaExtreme.length > 0)
        indecator1.innerHTML += `<p style='margin:10px'> ${fireAreaExtreme.length}<br> Extreme  </p>`;
    if (fireAreaElevated.length > 0 || fireAreaCritical.length > 0 || fireAreaExtreme.length > 0)
        indecator2.innerHTML = `<h2> ${fireAreaElevated.length + fireAreaCritical.length + fireAreaExtreme.length} </h2> <span> </span> <p> <br> Fire Areas  </p>`

    if (prob2day30.length > 0)
        indecator1.innerHTML = `<p style='margin:10px'> ${prob2day30.length} <br> < 30% Change of Formation  </p>`;
    if (prob2day60.length > 0)
        indecator1.innerHTML += `<p style='margin:10px'> ${prob2day60.length} <br> < 60% Change of Formation  </p>`;
    if (prob2day70.length > 0)
        indecator1.innerHTML += `<p style='margin:10px'> ${prob2day70.length} <br> > 70% Change of Formation  </p>`;
    if (prob2day70.length > 0 || prob2day60.length > 0 || prob2day30.length > 0)
        indecator2.innerHTML = `<h2> ${prob2day30.length + prob2day60.length + prob2day70.length} </h2> <span> </span> <p> <br> Entities  </p>`

    if (data2.length < 1) {
        indecator1.innerHTML = "<h2>-</h2>";
        indecator2.innerHTML = "<h2>-</h2>";
    }
}

function renderList(layer) {
    switch (layer) {
        case layer:
            featureLayerSources.forEach((source) => {
                if (source.Title == layer) {
                    overlayMaps[layer].eachActiveFeature(function (e) {
                        let data = {}
                        source.options.properties.forEach((prop) => {
                            data[prop] = e.feature.properties[prop]
                        });
                        scatterPlotDataArray.push(data)
                    });
                }
            });
            break;
    }
    //if (layer == "NOAA SPOT") {
    //    overlayMaps[layer].eachActiveFeature(function (e) {
    //        scatterPlotDataArray.push({
    //            featureId: e.feature.id,
    //            lat: e.feature.properties.lat,
    //            lon: e.feature.properties.lon,
    //            name: e.feature.properties.name,
    //            status: e.feature.properties.stat,
    //            layer: layer
    //        });
    //    });
    //}
    //if (layer == "SPC's Fire Weather Outlook") {
    //    fire1DayForecast.eachActiveFeature(function (e) {
    //        let _FID = e.feature.properties.objectid;
    //        let _label;
    //        if (e.feature.properties.dn == 5)
    //            _label = "ELEVATED"
    //        if (e.feature.properties.dn == 8)
    //            _label = "CRITICAL"
    //        if (e.feature.properties.dn == 10)
    //            _label = "EXTREME"
    //        scatterPlotDataArray.push({
    //            featureId: _FID,
    //            name: _label,
    //            layer: layer,
    //            bounds: e.getBounds()
    //        });
    //    });
    //}
    //if (layer == "Two Day Graphical Tropical Weather Outlook") {
    //    TropicalWeatherOutlook.eachActiveFeature(function (e) {
    //        let _FID = e.feature.properties.objectid;
    //        let _label = e.feature.properties.risk2day;
    //        let _prob2day = e.feature.properties.prob2day;
    //        let _lat = e.getLatLng().lat;
    //        let _lon = e.getLatLng().lng;
    //        if (e.feature.properties.dn == 5)
    //            _label = "ELEVATED"
    //        if (e.feature.properties.dn == 8)
    //            _label = "CRITICAL"
    //        if (e.feature.properties.dn == 10)
    //            _label = "EXTREME"
    //        scatterPlotDataArray.push({
    //            featureId: _FID,
    //            name: _FID,
    //            prob2day: _prob2day,
    //            layer: layer,
    //            lat: _lat,
    //            lon: _lon
    //        });
    //    });
    //}
    //if (layer == "Seven Day Graphical Tropical Weather Outlook") {
    //    TropicalWeatherOutlook_Week.eachActiveFeature(function (e) {
    //        let _FID = e.feature.properties.objectid;
    //        let _label = e.feature.properties.risk2day;
    //        let _prob2day = e.feature.properties.prob2day;
    //        let _lat = e.getLatLng().lat;
    //        let _lon = e.getLatLng().lng;
    //        if (e.feature.properties.dn == 5)
    //            _label = "ELEVATED"
    //        if (e.feature.properties.dn == 8)
    //            _label = "CRITICAL"
    //        if (e.feature.properties.dn == 10)
    //            _label = "EXTREME"
    //        scatterPlotDataArray.push({
    //            featureId: _FID,
    //            name: _FID,
    //            prob2day: _prob2day,
    //            layer: layer,
    //            lat: _lat,
    //            lon: _lon
    //        });
    //    });
    //}
    //if (layer == "NOAA METAR Current Wind Speed Direction") {
    //    NOAA_METAR_current_wind_speed_direction.eachActiveFeature(function (e) {
    //        let _FID = e.feature.properties.OBJECTID;
    //        let _label = e.feature.properties.ICAO;
    //        let _lat = e.feature.properties.LATITUDE;
    //        let _lon = e.feature.properties.LONGITUDE;
    //        scatterPlotDataArray.push({
    //            featureId: _FID,
    //            name: _label,
    //            layer: layer,
    //            lat: _lat,
    //            lon: _lon
    //        });
    //    });
    //}
}
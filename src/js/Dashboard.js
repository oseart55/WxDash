// Main container for data
var scatterPlotDataArray = [];
let _marker;
// HTML Elements
const search = document.getElementById("filter");
const matchList = document.querySelector(".collection");
const list = document.getElementById("list");
const indecator1 = document.getElementById("indecator1");
const indecator2 = document.getElementById("indecator2");
// HTML related
list.addEventListener("click", zoomFromList);
search.addEventListener("input", () => searchStates(search.value));
matchList.addEventListener("click", filterFromSearch);

/* var for Global Layer Control*/
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

for (layer in overlayMaps) {
    overlayMaps[layer].on("load", rerenderAll)
}

map.on('overlayadd', onOverlayAdd);
map.on('overlayremove', onOverlayAdd);

function onOverlayAdd(e) {
    removeLegend();
    _layers = layerControl.getOverlays();
    for (layer of _layers) {
        if (layer.visible) {
            showLegend(layer.name);
            if (layer.name == "Current Weather Radar") {
                StartRadar();
            }
        }
        else {
            removeLayer(layer.name);
        }
    }
    rerenderAll();
}

// functions List
function rerenderAll() {
    // update and rerender the list
    list.innerHTML = "";
    // update and rerender the chart
    scatterPlotDataArray = [];
    _layers = layerControl.getOverlays();
    for (layer of _layers) {
        if (layer.visible && layer.name == "NOAA METAR") {
            if (map.getZoom() >= 7) {
                renderList(layer.name)
            }
            else {
                var entry = '<li class="list-item" style="text-align:center">' + "Please Zoom In more to populate table." + "</li>";
                list.innerHTML += entry;
            }
        }
        if (layer.visible && layer.name != "NOAA METAR") {
            renderList(layer.name)
        }
    }

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
    if (_marker) {
        $(_marker._icon).addClass("selected");
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
                            switch (prop) {
                                case "bounds":
                                    data[prop] = e.getBounds()
                                    break;
                                case "dn":
                                    switch (e.feature.properties.dn) {
                                        case 5:
                                            data["name"] = "ELEVATED"
                                            break;
                                        case 8:
                                            data["name"] = "CRITICAL"
                                            break;
                                        case 10:
                                            data["name"] = "EXTREME"
                                            break;
                                    }
                                    break;
                                case "risk2day":
                                    switch (e.feature.properties.risk2day) {
                                        case "Low":
                                            data["name"] = "Low"
                                            break;
                                        case "Medium":
                                            data["name"] = "Medium"
                                            break;
                                        default:
                                            data["name"] = "Please Update"
                                    }
                                    break;
                                case "ICAO":
                                    data["name"] = e.feature.properties.ICAO
                                    break;
                                case "layer":
                                    data['layer'] = layer
                                    break;
                                case prop:
                                    data[prop] = e.feature.properties[prop]
                                    break;
                                
                            }
                        });
                        if (data['lat'] == null) {
                            if (e.feature.geometry.type == "Point") {
                                data['lat'] = e.feature.geometry.coordinates[1]
                            }
                        }
                        if (data['lon'] == null) {
                            if (e.feature.geometry.type == "Point") {
                                data['lon'] = e.feature.geometry.coordinates[0]
                            }
                        }
                        scatterPlotDataArray.push(data)
                    });
                }
            });
            break;
    }
}
function zoomFromList(e) {
    _marker = null;
    matchList.innerHTML = "";
    // search.value = '';
    let data = scatterPlotDataArray;
    var zoomto = data.filter((value) => value.name == e.target.innerHTML);
    if (zoomto[0].layer == "NOAA SPOT") {
        overlayMaps[zoomto[0].layer].eachActiveFeature((layer) => {
            if (layer.feature.properties.objectid_1 == zoomto[0].objectid_1) {
                _marker = layer;
            }
        })
        
        map.setView([zoomto[0].lat, zoomto[0].lon], 10);
    }
    if (zoomto[0].layer == "1 Day Fire Forecast") {
        map.fitBounds(zoomto[0].bounds);
    }
    if (zoomto[0].layer == "Tropical Weather Outlook (7 day)" || "NOAA METAR") {
        map.setView([zoomto[0].lat, zoomto[0].lon], 10);
    }
}

// search the features
const searchStates = (searchText) => {
    let matches = scatterPlotDataArray.filter((a) => {
        const regex = new RegExp(`${searchText}`, "gi");
        return a.name.match(regex);
    });

    if (searchText.length === 0 || matches.length === 0) {
        matches = [];
        matchList.innerHTML = "";
        for (layer in overlayMaps) {
            if (layer.name != "Current RADAR Weather") {
                overlayMaps[layer].setWhere("1=1");
            }
        }
    }
    outputHtmlUnique(matches);
};

const outputHtml = (matches) => {
    if (matches.length > 0) {
        const html = matches.map((match) => `<li>${match.name}</li> `).join("");
        matchList.innerHTML = html;
    }
};

const outputHtmlUnique = (matches) => {
    var unique = [];
    matches.forEach(function (x) {
        unique.push(x.name);
    });
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var uniqueM = unique.filter(onlyUnique);
    if (uniqueM.length > 0) {
        const html = uniqueM
            .slice(0, 10)
            .map((match) => `<li>${match}</li>`)
            .join("");
        matchList.innerHTML = html;
    }
};

function zoomFromSearch(e) {
    search.value = e.target.innerHTML;
    matchList.innerHTML = "";

    let data = scatterPlotDataArray;
    var zoomto = data.filter((value) => value.name == e.target.innerHTML);
    map.setView([zoomto[0].lat, zoomto[0].lon], 20);
}

function filterFromSearch(e) {
    search.value = e.target.innerHTML;
    matchList.innerHTML = "";
    let data = scatterPlotDataArray;
    var filterto = data.filter((value) => value.name == e.target.innerHTML);
    if (filterto.length > 0) {
        for (layer in overlayMaps) {
            if (layer == "NOAA SPOT") {
                overlayMaps[layer].setWhere(`name='${e.target.innerHTML}'`);
                overlayMaps[layer].refresh();
            }
            if (layer == "NOAA METAR") {
                overlayMaps[layer].setWhere(`ICAO='${e.target.innerHTML}'`);
                overlayMaps[layer].refresh();
            }
        }
    }
        rerenderAll();
}

function clearSelection() {
    $(".selected").removeClass("selected");
    $("#clearSelection").hide();
}


function showSnackbar() {
    var x = document.getElementById("snackbar");
    x.innerText = "Data refreshed at: " + new Date()
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}


let autoUpdate = setInterval(() => {
    for (layer in overlayMaps) {
        _layer = overlayMaps[layer]
        if (layer != "Current RADAR Weather") {
            _layer.refresh();
        }
    }
    showSnackbar()
}, 600000);
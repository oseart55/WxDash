// HTML Elements
const search = document.getElementById("filter");
const matchList = document.querySelector(".collection");
const list = document.getElementById("list");
const indecator1 = document.getElementById("indecator1");
const indecator2 = document.getElementById("indecator2");

var scatterPlotDataArray = [];

var map = L.map('mapid', {
    center: [39.095962936305476, -99.49218749999999],
    zoom: 4
});
map.attributionControl.addAttribution('Created By &copy; Matthew Petagara');

var SIGMETs = L.featureGroup();

var firePointFeatureLayer = L.esri.featureLayer({
    url:
        "https://mapservices.weather.noaa.gov/vector/rest/services/fire_weather/nws_fire_weather_spot/MapServer/0",
    pointToLayer: function (feature, latlng) {
        let pointIcon = L.icon({
            iconUrl: GetIconStyle(feature.properties)
        });
        return L.marker(latlng, { icon: pointIcon });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(
            function (layer) {
                return `<b>Name: </b>${layer.feature.properties.name} <br> <b>Type:</b> ${layer.feature.properties.type}`
            },
            {} //then add your options
        )
    },
    attribution:
        '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
});

var fire1DayForecast = L.esri.featureLayer({
    url: "https://mapservices.weather.noaa.gov/vector/rest/services/fire_weather/SPC_firewx/MapServer/1",
    style: function (feature) {
        _color = GetIconStyle(feature.properties)
        return { color: _color, opacity: 0.7 }
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(
            function (layer) {
                if (layer.feature.properties.dn == 5)
                    return `<b>ELEVATED</b>`;
                if (layer.feature.properties.dn == 8)
                    return `<b>CRITICAL</b>`;
                if (layer.feature.properties.dn == 10)
                    return `<b>EXTREME</b>`;
            },
            {} //then add your options
        ).addTo(map);
    },
    attribution:
        '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
});

var TropicalWeatherOutlook = L.esri.featureLayer({
    url:
        "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer/1/",
    pointToLayer: function (feature, latlng) {
        let pointIcon = L.icon({
            iconUrl: GetIconStyle(feature.properties)
        });
        return L.marker(latlng, { icon: pointIcon });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(
            function (layer) {
                return `<b>Basin: </b>${layer.feature.properties.basin} <br> <b>2 Day Risk: </b> ${layer.feature.properties.risk2day}
                <br> <b>Entity ID: </b> ${layer.feature.properties.objectid}`
            },
            {} //then add your options
        ).addTo(map);
    },
    attribution:
        '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
});

var radarLayer = L.esri.imageMapLayer({
    url: "https://mapservices.weather.noaa.gov/eventdriven/rest/services/radar/radar_base_reflectivity_time/ImageServer",
    attribution: "National Oceanic and Atmospheric Administration, NOAA, National Weather Service, NWS",
});

var TropicalWeatherOutlook_Week = L.esri.featureLayer({
    url:
        "https://mapservices.weather.noaa.gov/tropical/rest/services/tropical/NHC_tropical_weather/MapServer/2",
    pointToLayer: function (feature, latlng) {
        let pointIcon = L.icon({
            iconUrl: GetIconStyle(feature.properties)
        });
        return L.marker(latlng, { icon: pointIcon });
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(
            function (layer) {
                return `<b>Basin: </b>${layer.feature.properties.basin} <br> <b>2 Day Risk: </b> ${layer.feature.properties.risk2day}
                <br> <b>Entity ID: </b> ${layer.feature.properties.objectid}`
            },
            {} //then add your options
        );
    },
    attribution:
        '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
});

var NOAA_METAR_current_wind_speed_direction = L.esri.featureLayer({
    url:
        "https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/NOAA_METAR_current_wind_speed_direction_v1/FeatureServer/0",
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, GetIconStyle(feature.properties));
    },
    onEachFeature: function (feature, layer) {
        layer.bindTooltip(
            function (layer) {
                return `<b>Weather: </b>${layer.feature.properties.WEATHER ? layer.feature.properties.WEATHER : "N/A"}
                <br> <b>Wind Chill: </b> ${layer.feature.properties.WIND_CHILL ? layer.feature.properties.WIND_CHILL : "N/A"}
                <br> <b>Wind Direction: </b> ${layer.feature.properties.WIND_DIRECT ? layer.feature.properties.WIND_DIRECT : "N/A"}
                <br> <b>Wind Gust: </b> ${layer.feature.properties.WIND_GUST ? layer.feature.properties.WIND_GUST : "N/A"}
                <br> <b>Wind Speed: </b> ${layer.feature.properties.WIND_SPEED ? layer.feature.properties.WIND_SPEED : "N/A"}
                <br> <b>Visibility: </b> ${layer.feature.properties.VISIBILITY ? layer.feature.properties.VISIBILITY : "N/A"}
                <br> <b>Sky Conditions: </b> ${layer.feature.properties.SKY_CONDTN ? layer.feature.properties.SKY_CONDTN : "N/A"}
                <br> <b>Relative Humidity: </b> ${layer.feature.properties.R_HUMIDITY ? layer.feature.properties.R_HUMIDITY : "N/A"}
                <br> <b>Heat Index: </b> ${layer.feature.properties.HEAT_INDEX ? layer.feature.properties.HEAT_INDEX : "N/A"}
                <br> <b>Flight Category: </b> ${layer.feature.properties.FLT_CATEGORY ? layer.feature.properties.FLT_CATEGORY : "N/A"}
                <br> <b>Dew Point: </b> ${layer.feature.properties.DEW_POINT ? layer.feature.properties.DEW_POINT : "N/A"}
                <br> <b>ICAO: </b> ${layer.feature.properties.ICAO ? layer.feature.properties.ICAO : "N/A"}
                `
            },
            {} //then add your options
        );
    },
    attribution:
        '&copy; <a href="https://sos.noaa.gov/copyright/">NOAA</a>',
});



// Leaflet related
/*map.on("zoom move", rerenderAll);*/
firePointFeatureLayer.on("load", rerenderAll);
fire1DayForecast.on("load", rerenderAll);
TropicalWeatherOutlook.on("load", rerenderAll);
TropicalWeatherOutlook_Week.on("load", rerenderAll);
//NOAA_METAR_current_wind_speed_direction.on("load", GetMETARData());
SIGMETs.on("load", GetData());
// HTML related
list.addEventListener("click", zoomFromList);
search.addEventListener("input", () => searchStates(search.value));
matchList.addEventListener("click", filterFromSearch);

// the Chart
var initialChartData = {
    datasets: [
        {
            label: "Chart",
            data: [],
            backgroundColor: "rgba(0, 177, 106,0.2)",
            borderColor: "rgba(30, 130, 76, 1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
        },
    ],
};

// functions List
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
    var completeFire = data2.filter((value) => value.status == "C");
    var pendingFire = data2.filter((value) => value.status == "P");

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

function zoomFromList(e) {
    $(".selected").removeClass("selected");
    matchList.innerHTML = "";
    // search.value = '';
    let data = scatterPlotDataArray;
    var zoomto = data.filter((value) => value.name == e.target.innerHTML);
    if (zoomto[0].layer == "NOAA Spot Forecast") {
        $(firePointFeatureLayer._layers[zoomto[0].featureId]._icon).addClass("selected");
        $("#clearSelection").show();
        map.setView([zoomto[0].lat, zoomto[0].lon], 10);
    }
    if (zoomto[0].layer == "SPC's Fire Weather Outlook" || "SIGMETs") {
        map.fitBounds(zoomto[0].bounds);
    }
    if (zoomto[0].layer == "Graphical Tropical Weather Outlook" || "NOAA METAR Current Wind Speed Direction") {
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
        firePointFeatureLayer.setWhere("1=1");
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
    if (filterto.length > 0)
        firePointFeatureLayer.setWhere(`name='${e.target.innerHTML}'`);
        firePointFeatureLayer.refresh();
        NOAA_METAR_current_wind_speed_direction.setWhere(`ICAO='${e.target.innerHTML}'`);
        NOAA_METAR_current_wind_speed_direction.refresh();
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
    firePointFeatureLayer.refresh()
    fire1DayForecast.refresh()
    TropicalWeatherOutlook_Week.refresh()
    radarLayer.refresh();
    showSnackbar()
}, 600000)

function GetData() {
    const socket = new WebSocket('ws://localhost:8765');
    socket.onopen = function (event) {
        socket.send(JSON.stringify({ "message": "SIGMET" }))
    };
    socket.onmessage = function (event) {
        data = JSON.parse(event.data);
        sigmet = data.SIGMET;
        isigmet = data.ISIGMET;
        var Convective = { "color": "#bf7f7f", "weight": 5, "opacity": 0.65 };
        var ThunderStorm = { "color": "#bf7f7f", "weight": 5, "opacity": 0.65 };
        var TropCyclone = { "color": "#bf7f7f", "weight": 5, "opacity": 0.65 };
        var BlowingSandDust = { "color": "#cc7fcc", "weight": 5, "opacity": 0.65 };
        var VolcanicAsh = { "color": "#f6af8a", "weight": 5, "opacity": 0.65 };
        var Turb = { "color": "#cfaf7f", "weight": 5, "opacity": 0.65 };
        var Icing = { "color": "#7f7fbf", "weight": 5, "opacity": 0.65 };
        L.geoJSON(JSON.parse(sigmet), {
            style: (feature) => {
                if (feature.properties.hazard == "CONVECTIVE" || "TS") {
                    return Convective
                }
                if (feature.properties.hazard == "TURB" || "MTW") {
                    return Turb
                }
                if (feature.properties.hazard == "VA") {
                    return VolcanicAsh
                }
                if (feature.properties.hazard == "ICE") {
                    return Icing
                }
            },
            onEachFeature: (feature, layer) => {
                layer.bindTooltip(`<b>Hazard: </b>${layer.feature.properties.hazard} <br>`);
            }
        }).addTo(SIGMETs);
        L.geoJSON(JSON.parse(isigmet), {
            style: (feature) => {
                if (feature.properties.hazard == "CONVECTIVE" || feature.properties.hazard == "TS") {
                    return Convective
                }
                if (feature.properties.hazard == "TURB" || feature.properties.hazard == "MTW") {
                    return Turb
                }
                if (feature.properties.hazard == "VA") {
                    return VolcanicAsh
                }
                if (feature.properties.hazard == "ICE") {
                    return Icing
                }
            },
            onEachFeature: (feature, layer) => {
                return layer.bindTooltip(`<b>Hazard: </b>${layer.feature.properties.hazard} <br>`);
            }
        }).addTo(SIGMETs);
    }
}


map.on("dragend", () => {
    rerenderAll();
})
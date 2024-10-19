// HTML Elements
const search = document.getElementById("filter");
const matchList = document.querySelector(".collection");
const list = document.getElementById("list");
const indecator1 = document.getElementById("indecator1");
const indecator2 = document.getElementById("indecator2");

var scatterPlotDataArray = [];

// Leaflet related
/*map.on("zoom move", rerenderAll);*/
firePointFeatureLayer.on("load", rerenderAll);
fire1DayForecast.on("load", rerenderAll);
TropicalWeatherOutlook.on("load", rerenderAll);
TropicalWeatherOutlook_Week.on("load", rerenderAll);
//NOAA_METAR_current_wind_speed_direction.on("load", GetMETARData());
// HTML related
list.addEventListener("click", zoomFromList);
search.addEventListener("input", () => searchStates(search.value));
matchList.addEventListener("click", filterFromSearch);

// functions List

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


map.on("dragend", () => {
    rerenderAll();
})
let timestamps = [];
let current = 0;
let next = 1;
let timer;
let timerSet = false;
let radarLayer;


for (layer in overlayMaps) {
    if (layer == "Current RADAR Weather") {
        radarLayer = overlayMaps[layer];
    }
}

function GetRadar() {
    $.getJSON('https://mapservices.weather.noaa.gov/eventdriven/rest/services/radar/radar_base_reflectivity_time/ImageServer/query?where=&outFields=idp_validtime&returnGeometry=false&returnIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&f=pjson&rand=0.21689886897517696', function (result) {
        result.features.forEach((timestamp) => {
            timestamps.push(timestamp.attributes.idp_validtime)
            //if ((Date.now()) - (24 * 3600000) <= timestamp.attributes.idp_validtime)
            //    timestamps.push(timestamp.attributes.idp_validtime)
        })
    })
}
GetRadar();
function GetImage() {
    timestamps.sort(function (a, b) { return new Date(a) - new Date(b) })
    radarLayer.setTimeRange(timestamps[current], timestamps[next]);
    if (timestamps[current] == null)
        current = 0;
    if (timestamps[next] == null)
        next = 0;
    $('#radar-date').text(`Current Date: ${new Date(timestamps[current])}`);
    current++;
    next++;
}

function StartRadar() {
    radarToolbar.addTo(map);
    const speedSlider = document.getElementById("speedSlider");
    const controlContainer = document.getElementsByClassName('radar');
    SetTimer(3000);
    speedSlider.addEventListener("input", function () {
        let speed = this.value;
        switch (speed) {
            case '1':
                SetTimer(5000)
                break;
            case '2':
                SetTimer(4500)
                break;
            case '3':
                SetTimer(4000)
                break;
            case '4':
                SetTimer(3500)
                break;
            case '5':
                SetTimer(3000)
                break;
            case '6':
                SetTimer(2500)
                break;
            case '7':
                SetTimer(2000)
                break;
            case '8':
                SetTimer(1500)
                break;
            case '9':
                SetTimer(1000)
                break;
            case '10':
                SetTimer(500)
                break;
        }
    });

    controlContainer[0].addEventListener("mouseover", function () {
        map.dragging.disable();
    });

    controlContainer[0].addEventListener("mouseout", function () {
        map.dragging.enable();
    });

    function SetTimer(speed) {
        if (timerSet)
            clearInterval(timer)
        timer = setInterval(function () { GetImage() }, speed);
        timerSet = true;
    }
}

function EndRadar() {
    radarToolbar.remove();
    clearInterval(timer);
    current = 0;
    next = 0;
}
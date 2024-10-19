var markerLocationGroup = L.layerGroup().addTo(map);
var toolbar = L.control({ position: "topright" });
toolbar.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'custom-control toolbar');

    div.innerHTML = `<form id="custom-command-WWW"><div style="text-align:center;"><img id="toolbox" src="src/img/toolbox.png"/><div></form>`;
    div.onclick = function (e) {
        if (!$(".toolbar").hasClass("leaflet-control-layers-expanded")) {
            $(".toolbar").addClass("leaflet-control-layers-expanded");
            div.innerHTML += `
            <p id='commanditem'><input id='command' type='checkbox' onclick='event.stopPropagation();'/>Get Current Weather Watches/Warnings</p>
            `
            document.getElementById("command").addEventListener("click", handleCommand, false);
            $('input[id=command]').change(function () {
                if ($(this).is(':checked')) {
                    $('.leaflet-container').css('cursor', 'crosshair');
                } else {
                    $('.location').remove();
                    $('.warnings').remove();
                    markerLocationGroup.clearLayers();
                    $('.leaflet-container').css('cursor', 'grab');
                }
            });
        }
        else {
            $(".toolbar").removeClass("leaflet-control-layers-expanded")
            $('#commanditem').remove();
        }

    }
    return div;
};
toolbar.addTo(map);

function handleCommand() {
    event.stopPropagation();
    element = $('.instructions').length;
    if (this.checked && element == 0) {
        var div = L.DomUtil.create('div', 'instructions');
        div.innerHTML = '<p style="text-align:center">Select a location on the Map to get current Weather Watches and Warnings.</p>';
        div.innerHTML += '<div style="text-align:center"><input id="AlertByLocation" type="checkbox" onclick="event.stopPropagation()">Use my Location</button></div>'
        $('#custom-command-WWW').append(div)
        $('#AlertByLocation').on("click", function (e) {
            if ($('#AlertByLocation').is(":checked")) {
                GetAlertsByUserLocation();
            }
            else {
                markerLocationGroup.clearLayers();
            }
        })
    }
    if (!this.checked && element > 0) {
        $('.instructions').remove()
    }
}

map.on('click', function (e) {
    event.stopPropagation();
    _checkbox = $('#command').is(':checked');
    $('.custom-control').focus();
    $('.location').remove();
    if (_checkbox) {
        if ($('.location').length != 0) {
            $('.location').remove();
        }
        var div = L.DomUtil.create('div', 'location');
        div.innerHTML = `<p style="text-align:center">Selected Location: ${e.latlng.lat} / ${e.latlng.lng}</p>`;
        $('#custom-command-WWW').append(div);
        GetCurrentWWW(e.latlng);
    }
    if (!_checkbox && !$('.leaflet-container').css('cursor', 'grab')) {
        $('.leaflet-container').css('cursor', 'grab');
    }
});

function GetCurrentWWW(coords) {
    markerLocationGroup.clearLayers();
    marker = L.marker([coords.lat, coords.lng]).addTo(markerLocationGroup);
    _warnings = $(".warnings").length;
    $(".warnings").remove();
    url = `https://api.weather.gov/alerts/active?point=${coords.lat},${coords.lng}`
    $.getJSON(url, function (results) {
        var parentDiv = L.DomUtil.create('span', 'warnings');
        _warningTypes = [];
        list.innerHTML = "";
        for (result of results.features) {
            if (!_warningTypes.includes(result.properties.event)) {
                //var div = L.DomUtil.create('div', 'warning');
                //divClass = GetWarningColor(result.properties);
                //L.DomUtil.addClass(div, divClass);

                //div.innerHTML = `<a href="https://alerts.weather.gov/search?id=${result.properties.id}" target="_blank"><p style="text-align:center; color:black" onclick="event.stopPropagation();">${result.properties.headline}</p></a>`;
                //parentDiv.append(div);

                var entry = '<li class="list-item">' + result.properties.headline + "</li>";
                list.innerHTML += entry;

                _warningTypes.push(result.properties.event)
            }
        }
        if (results.features.length == 0) {
            var entry = '<li class="list-item">' + "No Watches, Warnings, or Advisories." + "</li>";
                list.innerHTML += entry;
        }

        $('#custom-command-WWW').append(parentDiv);
    })
}

function GetAlertsByUserLocation() {
    $('.location').remove()
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
        coords = {
            lat: null,
            lng: null
        };
        coords.lat = position.coords.latitude;
        coords.lng = position.coords.longitude;
        var div = L.DomUtil.create('div', 'location');
        div.innerHTML = `<p style="text-align:center">Selected Location: ${coords.lat} / ${coords.lng}</p>`;
        $('#custom-command-WWW').append(div);
        GetCurrentWWW(coords);
    }
}

function GetWarningColor(properties) {
    _class = properties.event;
    _class = _class.replaceAll(" ", "");
    _class = _class.replace(/[0-9]/g, '');
    return _class;
}

var toolbar = L.control({ position: "bottomleft" });
toolbar.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'custom-control toolbar radar');

    div.innerHTML = `<div id="radar-date" style="color:black">Loading...</div><div style='color:black'><input type="range" min="1" max="10" value="5" id="speedSlider""></div>`;
    return div;
};

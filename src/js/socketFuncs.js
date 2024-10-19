function AddDataToMap(evt) {
    data = JSON.parse(evt.data);
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
            layer.bindTooltip(`<h3>Hazard: ${feature.properties.hazard}</h3>`);
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
            return layer.bindTooltip(`<b>Hazard: </b>${feature.properties.hazard});
        }
    }).addTo(SIGMETs);
};
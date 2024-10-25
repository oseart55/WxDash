function init() {
    for (n of featureLayerSources) {
        GetData(n.Title, n.Url)
    }
}

function GetData(L, U) {
    switch (L) {
        case "NOAA SPOT":
            noaacompleteFires = document.getElementById("indecator2");
            noaapendingFires = document.getElementById("indecator3");
            noaatotal = document.getElementById("indecator4");

            let C = 0;
            let P = 0;
            $.getJSON(U + '/query?where=1=1&outFields=*&f=geojson', function (result) {
                result.features.forEach((feature) => {
                    scatterPlotDataArray.push({
                        "name": feature.properties.name,
                        "layer": "NOAA SPOT",
                        "GUID": feature.properties.snumunum,
                    })
                    var entry = `<li class="list-item" onclick="window.open('https://spot.weather.gov/forecasts/${feature.properties.snumunum}')">${feature.properties.name} - NOAA SPOT</li>`;
                    entry.onclick = function () {
                        window.open(`https://spot.weather.gov/forecasts/${feature.properties.snumunum}`,"_blank")
                    }
                    list.innerHTML += entry;
                    switch (feature.properties.stat) {
                        case "C":
                            C++;
                            break;
                        case "P":
                            P++;
                            break;
                    }
                });
                noaacompleteFires.innerHTML = `<p> ${C} <br> Completed  </p>`;
                noaapendingFires.innerHTML = `<p> ${P} <br> Pending  </p>`;
                noaatotal.innerHTML = `<p> ${P+C} <br> Total Fires  </p>`;
            });
            break;
        case "FEMA Wildfires":
            fematotalacres = document.getElementById("indecator6");
            fematotalacres_Number = 0;
            femafireInjuries = document.getElementById("indecator7");
            Injuries = 0;
            fematotal = document.getElementById("indecator8");

            $.getJSON(U + '/query?where=1=1&outFields=*&f=geojson', function (result) {
                result.features.forEach((feature) => {
                    scatterPlotDataArray.push({
                        "name": feature.properties.IncidentName,
                        "layer": "FEMA Wildfires",
                        "GUID": feature.properties.IrwinID,
                    })
                    var entry = `<li class="list-item" onclick="window.open('https://data.goupstate.com/fires/irwin/${feature.properties.IrwinID}')">${feature.properties.IncidentName} - FEMA Wildfires</li>`;
                    list.innerHTML += entry;
                    fematotalacres_Number += feature.properties.CalculatedAcres
                    Injuries += feature.properties.Injuries
                })
                fematotalacres.innerHTML = `<p> ${Math.floor(fematotalacres_Number).toLocaleString()} <br> Total Acres  </p>`;
                femafireInjuries.innerHTML = `<p> ${Injuries.toLocaleString()} <br> Injuries from Fires  </p>`;
                fematotal.innerHTML = `<p> ${result.features.length} <br> Total Fires  </p>`; 
            });
            break;
        case "Tropical Weather Outlook":
            TSBasins = document.getElementById("indecator10");
            TSRisk = document.getElementById("indecator11");
            TSCount = document.getElementById("indecator12");
            TSAtlantic = 0;
            TSPacific = 0;
            LowRisk = 0;
            MedRisk = 0;
            HighRisk = 0;
            $.getJSON(U + '/query?where=1=1&outFields=*&f=geojson', function (result) {
                result.features.forEach((entity) => {
                    scatterPlotDataArray.push({
                        "name": entity.properties.basin,
                        "objectid": entity.properties.objectid,
                        "layer": "NOAA Tropical Storms/Hurricanes",
                    })
                    switch (entity.properties.basin) {
                        case "Atlantic":
                            TSAtlantic++;
                            break;
                        case "Pacific":
                            TSPacific++;
                            break;
                    }
                    switch (entity.properties.risk2day) {
                        case "Low":
                            LowRisk++;
                            break;
                        case "Medium":
                            MedRisk++;
                            break;
                        case "High":
                            HighRisk++;
                            break;
                    }
                })
                TSCount.innerHTML = `<p style='margin:10px'> ${result.features.length} <br>${result.features.length > 1 || result.features.length == 0 ? "Total Storms" : "Total Storm"}</p>`;
                TSBasins.innerHTML = `<p style='margin:10px'> ${TSAtlantic} <br> Atlantic Basin  </p>`;
                TSBasins.innerHTML += `<p style='margin:10px'> ${TSPacific} <br> Pacific Basin  </p>`;
                TSRisk.innerHTML = `<p style='margin:5px; font-size:15px'> ${LowRisk} <br> < 30% Chance of Formation  </p>`
                if (MedRisk > 0) {
                    TSRisk.innerHTML += `<p style='margin:5px; font-size:15px; background-color:yellow; color:black;'> ${MedRisk} <br> < 60% Chance of Formation  </p>`
                }
                else {
                    TSRisk.innerHTML += `<p style='margin:5px; font-size:15px'> ${MedRisk} <br> < 60% Chance of Formation  </p>`
                }
                if (HighRisk > 0) {
                    TSRisk.innerHTML += `<p style='margin:5px; font-size:15px; background-color:red; color:black;'> ${HighRisk} <br> > 70% Chance of Formation  </p>`
                }
                else {
                    TSRisk.innerHTML += `<p style='margin:5px; font-size:15px'> ${HighRisk} <br> > 70% Chance of Formation  </p>`
                }

            });
            break;
        case "Your Current Weather":
            if (navigator.geolocation) {
                userLoc = navigator.geolocation.getCurrentPosition((position) => {
                    $.getJSON(U + `${position.coords.latitude},${position.coords.longitude}`, function (result) {
                        $.getJSON(result.properties.forecastHourly, function (wxData) {
                            document.getElementById("indecator14").innerHTML = `<p style='margin:5px; font-size:15px'> Tempature <br>${wxData.properties.periods[0].temperature}${wxData.properties.periods[0].temperatureUnit}</p>`;
                            document.getElementById("indecator14").innerHTML += `<p style='margin:5px; font-size:15px'> Wind Speed & Direction <br>${wxData.properties.periods[0].windSpeed}/${wxData.properties.periods[0].windDirection}</p>`;
                            document.getElementById("indecator14").innerHTML += `<p style='margin:5px; font-size:15px'> Skies <br>${wxData.properties.periods[0].shortForecast}</p>`;
                            document.getElementById("indecator14").innerHTML += `<p style='margin:5px; font-size:15px'> Chance of Rain<br>${wxData.properties.periods[0].probabilityOfPrecipitation.value}%</p>`;
                            document.getElementById("indecator14").innerHTML += `<p style='margin:5px; font-size:15px'> Humidity <br>${wxData.properties.periods[0].relativeHumidity.value}%</p>`;
                            document.getElementById("indecator14").innerHTML += `<p style='margin:5px; font-size:15px'> Is Daytime<br>${wxData.properties.periods[0].isDaytime}</p>`;
                        })
                    })
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
            
    }
}
init();
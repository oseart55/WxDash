// Main container for data
var scatterPlotDataArray = [];
// HTML Elements
const headerBlock = document.getElementsByClassName("block");
const search = document.getElementById("filter");
const matchList = document.querySelector(".collection");
const list = document.getElementById("list");
const indecator1 = document.getElementById("indecator1");
const indecator2 = document.getElementById("indecator2");
const indecator3 = document.getElementById("indecator2");
const indecator4 = document.getElementById("indecator2");

// HTML related
search.addEventListener("input", () => searchStates(search.value));
matchList.addEventListener("click", filterFromSearch);


// search the features
const searchStates = (searchText) => {
    let matches = scatterPlotDataArray.filter((a) => {
        const regex = new RegExp(`${searchText}`, "gi");
        return a.name.match(regex);
    });

    if (searchText.length === 0 || matches.length === 0) {
        matches = [];
        matchList.innerHTML = "";
    }
    if (searchText == "") {
        list.innerHTML = "";
        scatterPlotDataArray.forEach((feature) => {
            if (feature.GUID) {
                if (feature.layer == "NOAA SPOT") {
                    list.innerHTML += `<li class="list-item" onclick="window.open('https://spot.weather.gov/forecasts/${feature.GUID}')">${feature.name} - NOAA SPOT</li>`;
                }
                else {
                    list.innerHTML += `<li class="list-item" onclick="window.open('https://data.goupstate.com/fires/irwin/${feature.GUID}')">${feature.name} - FEMA Wildfires</li>`;
                }
            }
            else {
                list.innerHTML += `<li class="list-item">${feature.name} - ${feature.layer}</li>`
            }
        })
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
    list.innerHTML = "";
    matchList.innerHTML = "";
    let data = scatterPlotDataArray;
    var filterto = data.filter((value) => value.name == e.target.innerHTML);
    filterto.forEach((entry) => {
        if (entry.GUID) {
            if (entry.layer == "NOAA SPOT") {
                list.innerHTML += `<li class="list-item" onclick="window.open('https://spot.weather.gov/forecasts/${entry.GUID}')">${entry.name} - NOAA SPOT</li>`;
            }
            else {
                list.innerHTML += `<li class="list-item" onclick="window.open('https://data.goupstate.com/fires/irwin/${entry.GUID}')">${entry.name} - FEMA Wildfires</li>`;
            }
        }
        else {
            list.innerHTML += `<li class="list-item">${entry.name} - ${entry.layer}</li>`
        }
    })
    
}

function showSnackbar() {
    var x = document.getElementById("snackbar");
    x.innerText = "Data refreshed at: " + new Date()
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}


let autoUpdate = setInterval(() => {
    updateElement()
}, 600000);
updateElement();
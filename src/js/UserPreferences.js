_userPreferences = {
    "basemap": localStorage.getItem('basemap') ? localStorage.getItem('basemap') : localStorage.setItem('basemap', "CartoDB_DarkMatter"),
    "layers": localStorage.getItem('layers') ? localStorage.getItem('layers') : localStorage.setItem('layers', JSON.stringify([
            {
                "name": "NOAA SPOT",
                "visible": false
            },
            {
                "name": "1 Day Fire Forecast",
                "visible": false
            },
            {
                "name": "Tropical Weather Outlook",
                "visible": false
            },
            {
                "name": "NOAA METAR",
                "visible": false
            },
            {
                "name": "Current RADAR Weather",
                "visible": false
            }
        ])),
    "location": localStorage.getItem('location') ? localStorage.getItem('location') : localStorage.setItem('location', JSON.stringify({
        "lat": 30,
        "lng": -40
    })),
    "zoom": localStorage.getItem('zoom') ? localStorage.getItem('zoom') : localStorage.setItem('zoom', 3),
    "firsttime": localStorage.getItem('firsttime') ? localStorage.getItem('firsttime') : localStorage.setItem('firsttime', 'true'),
    "lastvisit": localStorage.getItem('lastvisit') ? localStorage.getItem('lastvisit') : localStorage.setItem('lastvisit', Date.now()),
}

const diffInSeconds = (timestampA, timestampB) => {
    //  absolute value added incase you just want the diff but don't care which came first
    return Math.abs(timestampB - timestampA) / 1000
}
const res = diffInSeconds(Date.now(), localStorage.getItem('lastvisit'))

if (res > 604800) {
    localStorage.setItem('firsttime', 'true');
}

if (localStorage.getItem('firsttime') == 'true') {
    $('#featureModal').appendTo('body').modal();
    localStorage.setItem('lastvisit', Date.now());
    localStorage.setItem('firsttime', 'false')
}
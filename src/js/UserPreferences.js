localStorage.getItem('basemap') ? localStorage.getItem('basemap') : localStorage.setItem('basemap', "CartoDB_DarkMatter");
localStorage.getItem('layers') ? localStorage.getItem('layers') : localStorage.setItem('layers', JSON.stringify([
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
]));
localStorage.getItem('location') ? localStorage.getItem('location') : localStorage.setItem('location', JSON.stringify({
    "lat": 30,
    "lng": -40
}));
localStorage.getItem('firsttime') ? localStorage.getItem('firsttime') : localStorage.setItem('firsttime', 'true');
localStorage.getItem('zoom') ? localStorage.getItem('zoom') : localStorage.setItem('zoom', 3);
localStorage.getItem('lastvisit') ? localStorage.getItem('lastvisit') : localStorage.setItem('lastvisit', Date.now());
localStorage.getItem('mapsize') ? localStorage.getItem('mapsize') : localStorage.setItem('mapsize', "100%");
localStorage.getItem('collectionsize') ? localStorage.getItem('collectionsize') : localStorage.setItem('collectionsize', "100%");

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

if (localStorage.getItem('mapsize') && localStorage.getItem('collectionsize')) {
    document.getElementById('mapid').style.width = localStorage.getItem('mapsize') +"px";
    document.getElementById('list-container').style.width = localStorage.getItem('collectionsize');
}
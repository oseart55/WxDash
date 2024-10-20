var baseMaps = {};
var overlayMaps = {};

bounds = new L.LatLngBounds(new L.LatLng(90, -180), new L.LatLng(-90, 180));
loc = JSON.parse(localStorage.getItem('location'));
zoom = localStorage.getItem('zoom');

var map = L.map('mapid', {
    center: [loc.lat, loc.lng],
    zoom: zoom,
    maxBounds: bounds,
    maxBoundsViscosity: 0.75
});
map.attributionControl.addAttribution('Created By &copy; Matthew Petagara');

/* Add Layer Control inclusions Here*/
L.Control.Layers.include({
    getOverlays: function () {
        // create hash to hold all layers
        var control, layers;
        layers = [];
        control = this;

        // loop thru all layers in control
        control._layers.forEach(function (obj) {
            var layerName;

            // check if layer is an overlay
            if (obj.overlay) {
                // get name of overlay
                layerName = obj.name;
                // store whether it's present on the map or not
                layers.push({ "name": obj.name, "visible": control._map.hasLayer(obj.layer) })
            }
        });

        return layers;
    }
});
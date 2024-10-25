_userLayers = JSON.parse(localStorage.getItem('layers'));

featureLayerSources.forEach((featureLayerSource) => {
    if (featureLayerSource.Type == "featureLayer") {
        overlayMaps[featureLayerSource.Title] = CreateFeatureLayer(featureLayerSource);
    }
    if (featureLayerSource.Type == "imageMapLayer") {
        overlayMaps[featureLayerSource.Title] = CreateImageLayer(featureLayerSource);       
    }
    if (featureLayerSource.Type == "featureLayerHurricane") {
        overlayMaps[featureLayerSource.Title] = CreateHurricaneLayer(featureLayerSource)
    }
});

//Helper function
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function CreateFeatureLayer(featureLayerSource) {
    let layer = L.esri.featureLayer({
        "url": featureLayerSource.Url,
        pointToLayer: function (feature, latlng) {
            if (featureLayerSource.options.pointToLayer && featureLayerSource.options.iconStyle == "marker") {
                let pointIcon = L.icon({
                    iconUrl: GetIconStyle(feature.properties, featureLayerSource.Title)
                });
                return L.marker(latlng, { icon: pointIcon });
            }
            if (featureLayerSource.options.pointToLayer && featureLayerSource.options.iconStyle == "circleMarker") {
                return L.circleMarker(latlng, GetIconStyle(feature.properties));
            }
            return null;
        },
        style: function (feature) {
            if (featureLayerSource.options.style) {
                if (featureLayerSource.Title == "AT1_ForecastTrack" || "AT1_PastTrack") {
                    return {
                        color: "black"
                    }
                }
                _color = GetIconStyle(feature.properties)
                return { color: _color, opacity: 0.7 }
            }
            else { return null };
        },
        onEachFeature: function (feature, layer) {
            layer.bindTooltip(
                function (layer) {
                    _popup = "";
                    featureLayerSource.options.popupContent.forEach((option) => {
                        _popup += layer.feature.properties[option] != null ? `<b>${capitalize(option)}: </b>${layer.feature.properties[option]} <br>` : `<b>${capitalize(option)}: </b>N/A <br>`;
                    })
                    return _popup
                },
                {} //then add your options
            )
        },
        attribution: featureLayerSource.attribution
    });
    return layer;
}

function CreateImageLayer(featureLayerSource) {
    let layer = L.esri.imageMapLayer({
        url: featureLayerSource.Url,
        attribution: featureLayerSource.attribution,
    });
    return layer
}

function CreateHurricaneLayer(featureLayerSource) {
    let baseLayer = L.layerGroup();
    for (layers of featureLayerSource.Layers) {
        if (layers.geometry == "point") {
            L.esri.featureLayer({
                url: layers.url,
                pointToLayer: function (feature, latlng) {
                    let pointIcon = L.icon({
                        iconUrl: GetIconStyle(feature.properties, featureLayerSource.Title)
                    });
                    return L.marker(latlng, { icon: pointIcon });
                },
            }).addTo(baseLayer)
        }
        if (layers.geometry == "line") {
            L.esri.featureLayer({
                url: layers.url,
                style: function (feature) {
                    return {color:"black"}
                }
            }).addTo(baseLayer)
        }
        if (layers.geometry == "polygon") {
            L.esri.featureLayer({
                url: layers.url,
                style: function (feature) {
                    return { color: "black" }
                }
            }).addTo(baseLayer)
        }
    }
    return baseLayer
}

function GetStormStyle(feature) {
    switch (feature.stormsrc) {
        case "Tropical Cyclone":
            switch (feature.dvlbl) {
                case "M":
                    return "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB4UlEQVQ4jcXUwUsUYRQA8N+mEgMVhCQowVLUSbwrdBE9dNsCRwQhCDt0icxbkCQRXSrY/oDo6LoQeQk6JKwX7RB0CkINYUdyQ7E8pZJOB013h1kxCnrwDt+b9/2Yb77hNfrH0fg/wQzivwFbcBs5XEADyniNZ/j8J2AfXuBEon4et3ATd/H0KGBfEATFXC6XKZfLZmZmah62t7fr6OhompycfLKxsRHg4WHgGTxvbm7OjI+Pi6JINpsVxwefLp/P6+3t1draqlKpPMAbvK8HDuMUbG9vW19f19nZaXZ2FrS0tGhra6vuz+AertQDr1YvJiYm9Pf374NhGCoWi8bGxqrbLiPAjySYwcUkODU1ZWRkRBzHBgYGDA0NJcHjyOJTEmzAserO+fl5q6ururq6RFEkCAJzc3NSointyD/xBWeTbxmGoaWlJYVCIQ2LEaWB7N7YjepCsVhUKpUsLy8LwzANfIfv9cA8rts9PlhcXFSpVGxtbYmiSErU/NxJ8CMeraysjPb09OwXBwcH7ezs7K+7u7utra3By72sC8L9zc3Nk9PT08O/CwsLCzUNpVIJXuFacnMaGOOO3SEwiktqb/8DHqMgZfocNm3e7uVpnHMwbb4esudI8/DbXh4p/vnE/gXcMZ3a0TsOSwAAAABJRU5ErkJggg=="
                case "H":
                    return "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABbElEQVQ4jcXUP2tTURjH8c9tU0ohETpolkBR6nvI4J4MAVPoFigIHVzEClmElkIpLtZQX0BwvQjSSXDICzBQcEmhSxclhZJBNxdDHJLW3Nt7wy0t+INnef58Oec8h1/OHSv3P4EBRrcBPsBLPMUq5vEdn/EeZzcBruMD8rH8I7zAc7zGuyzAdXys1WpBt9s1GAwixUqlotfrLfT7/QMsYX8W8D7aCMIwVK/XdTqdSEO73dZsNoVhCHv4guM04BbuJZw6TQG2UU8Drt0Adqmq8dV/x4EBHk93NhoN5XI5Ml0oFOLARazgNA6cx9x0Z7FYNBwOI9O5XOLHWLiqTyX/4Byly0Sr1bq2lGq1GoeN8CMJyHhjm0lHmKGv+JUGPMQz4+tnVeRzx4EneIOdjLBPk0gFwi4K+Xx+K4lQKl098RE24vUk4AivjE1gB09Et/8NbxFKcJ9ZbtOZxDIe+uc2FzNmMvnhz0lk0p079l+02kp5ZwNjJQAAAABJRU5ErkJggg=="
                case "S":
                    return "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACJklEQVQ4jcXUwUucRxjH8U+y0bKYFHJIEYmESnNXFPHQP8CLrAUPCpKXQA4FCTUnKXQRSg1IEmh1PcqKsPBSKOVdECJE2YMLERb2FImHeqgo5tQehKq4vjm4m2wWFUMCHXhgnpn5fWeemeF3zWdu1/5P4BXEnwL8Cj8ghW+QwN9Ywm/462OAQ8jiesN4Bx7ie/yIZ5cBDuF3pyXq6enR19cnjmPr6+tKpRI04SmS+OUi4C3M12DZbFYqlVIoFMDU1JR8Pi8IAnEcw894jtJ5wHF8Cd3d3UZGRnR0dNjd3QXt7e02NjbkcjnLy8uqG/+EwfOA39U6LS0tKpWKSqXybnJ7e9vw8LCtra16TX+19P8agVdwt5asra0pFos2Nzfl83mFQsHKyoqlpaWGM/gCd/C6EZjA1VpycnKiv7/fwMCAVCplcnLS/Py8KIqMjo7a39+vhzadVfIxdnEbEomE5uZmURSJogh0dXUJw1A6nTYxMVHTxdg+C8jpiz2A2dlZbW1tBgff3bdyuWxxcVFvb2+95iX+PQ/4K+4jkcvlrK6uGhsbs7Cw4PDwUGdnpyAIzMzM1Gs++NyNwFd4jHSxWBQEgenpaZlMxvHxsYODA5lMxtzcXG39H9U4FwiTuIHxMAyFYai1tVUymbSzs+Po6Ki27k/caxSfBYzxyKkJpPHt3t7e1br5Mp4gdIb7XOQ2L6pxE1977zZvLtBcyg//qcal2md37Lcu1bJriRAUUQAAAABJRU5ErkJggg=="
                case "D":
                    return "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABo0lEQVQ4jcXUwWpTQRTG8d81vUhABaEKBUH06qolT+ADuFNJd4WA4MKNqEvBIojYRbToA4hkJ4JkJQg1ewuCm0qyCQWFgFBIoCVSuDAukmp6yb1ELPjBgZkzw3/O4QzfnCPW3P8ERgj/AjyLu7iGSyjhG97jJbp/A1zGa5zI5C/iDm7jAZ7PAlzGW6MW8xTjGcp4UgQ8g1eIkiTRarVACMHu7q5ms6ler9vb2zu4/xgf8DkPeA+nII5jcRxbXFwURZH5+Xlra2sajYZqtXpwP8JDXM8D3pjchBAMBgPQ7/fVajW9Xk+SJLrd3zO5Om79ZxYY4bICDYdDW1tbKpXKJPA4zqOTBZZwrAgIaZra39/PpuODxSQwRQ/n8mDlctnS0pJ2uz2ZDvg+DchoYrfyYOvr6zY3N21vb08efcIgD/gCN43at7CwYGdnRwhBmqY2NjasrKxk3zr0ubPAr3iK1U6no1QqTSt2Uu/GkQuERzhp9CeL1EQtm5wGDLhvZAKruOLw9L+gjjemuE+R23wcx2lc8MdtfhSVPYsf9scxk47csX8BGqR0o08DYGQAAAAASUVORK5CYII="
            }
        case "Post-Tropical Cyclone":
            switch (feature.dvlbl) {
                case "H":
                    return "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACaElEQVQ4jb3UP2gaYRgG8Efv/EMahxaUDL2mvUqsINKlyCW5UqwtqVOgHY6QTShdTNtAl4Ag2SQuIVuKgQwZgnI6OChHh06xw91wVTQoYqlNEREUXdLmrl0a8aI1Bkqf7f3u/X53fC/3kfjHIf83SAJYBHBXr9cbVFX9CuAjgN5VQSNFUWt+v/9pIBCg3W73TYIgiGq1+j0Wi1V4nv9UqVSiAFqTgNdZlt1NJBLPbDbbtcEHc3NzVCQSoTY3NxdXV1fvJxKJtwBK40A9y7K7giA8FwRB5/F4YLVaNQ3ZbBYul8sQj8eXOI4jDw8PucEv1YA0Tb/c29tbMplMOo7jkEql4PP5NGAgEEA0GgXHcdjf339cLpdDkiS9GQl6vd4Xdrt9esQxjIzJZNItLy8/kiRpGn8GNQjOLCws3JsUO8/Kyopze3v7SavVSmpAg8Fwy+l0zgw2HxwcIJfLaYBut6upZ2dnjRRFuYfAqakpVVEU3WBzo9EAQRAa4OzsTFMrigKz2dyv+2Cn06kUCoX2/Pz8jfO19fX1oaFkMhlNfXx8/KvdbotDIIC2LMtlAB5cIclk8kupVOq/RTPlk5OT90dHRw8YhtFPgjWbTciynAXQPwcNyPN8zGKxcDRN+4Z2X8jp6Sk2NjaKPM+vDa4P/Xr5fN4fCoU+CILAMgwzBNXrdVSrVQSDwVKv1/MB+DEWFEXxpyiKD81m87t0Ov3K4XDcsdvtOpIkUavVUCwWv9Xr9VSn03kdj8eVi/v/en3t7OxsAdgKh8O3ZVlmVFU1Go1GKRKJfB53FJdesOFwuAagdlnfxOBV8xt/J+LB2JfWmwAAAABJRU5ErkJggg=="
                case "S":
                    return "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADJElEQVQ4jb3UT0hjRxzA8e/LvxdsPLQHWbSvtmkw1YNUsIjGlBC3dauQCO3hYUQMgbJgTNtDERQh6sWwvYh42aLwQFBJiAY9WKSHnrRqoqSKEUPYos0KIiSgiLZJe2mCdl27C6W/22/mN58Z5seMhv84NP83qAGagfdVKpU2n88fAT8B568L6iRJ8rW1tX3q8XiMtbW1b6vVanUqlXo+NTWVDIfDPyeTye+As1cB37RarU9DodBnZWVlb9ycqKqqkgKBgDQyMtLc1dX1YSgU+gZI3AeqrFbr09XV1c9FURQAtra2WF9fRxAEGhoaqK+vRxRFbTAYfCTLsmZ+fl6+edJboNFo/HJ6evpRAXO73UQiEWw2GwCDg4M4HA4URUEQBBRFaTk8PByKxWJf3wna7fYvTCaTASAajTI7O0sqlaK8vByAo6MjampqcLlctLa2Ioqi0NHRYYvFYgb+btRN8IHFYvmgkFxcXKBWq1Gr1cUCSZKYm5vDaDQWxzo7O6vHx8c/OTs7W7gFarXad6qrqx8U8ubmZiwWC2azGYfDgc1mo6Wlhfb29luXXllZqZMkqfYFsKSkJJ/L5YRid1QqVlZWWFpaIhKJMDw8jMfjwel0MjMzg8FgACCXy6HX64sbFMFsNpvc29vLNDU1vVUovL6+xul04nQ6Adje3kaWZUZHRwkEAgAcHBz8mclkonc1JROPxw+BBoC+vj7S6TSLi4vFgrq6Orq7u9nY2CiOLSws/JpIJFbuAkmn09+vra191NjYqHK5XNjtdiYnJ+np6UEURXZ2dlAUBZ/PB8Dp6SnxePwH4I87wXA4PFVaWiobjcaHFosFRVHo7+/H6/Wi0WjQ6/V4vV56e3u5urpiYGBgPxwO+24aLzy93d3dtqGhoR/dbrdVlmVkWebk5ITLy0sqKirQ6XSkUinGxsYS5+fnD4Hre8FoNPp7NBr9WK/Xf7u8vPzYbDa/ZzKZBI1Gw+bmJvv7+78dHx8vZrPZr4LBYO6f61/6fU1MTDwBnvj9/nfj8XhjPp/X6XS6WCAQ+OVla+4FC+H3+58Bz/6t7pXB142/APtZJDHN52h8AAAAAElFTkSuQmCC"
                case "D":
                    return "iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACxklEQVQ4jb3UT0iTYRwH8O+79333DptCMUSkN+ttOHcZgUS8umWYhe3gJnUY4kEQopPZocsLg6GXDbuIN3OC4MGx8a6DYCGBXZQO73t4UzbdHIvWEmS6wS7W3rcO5Zq5LYXod/s9fz78nt/D81D4x0H9b5ACYAdwXafT0ZqmfQLwDkDxvKCeZdkxp9N5f3R0lLPZbJdJkiRTqdSXYDCYFEXxfTKZfAEgdxbwosPhmI1EIg+am5svVE60t7ezgUCAnZiYsA8PD9+IRCLPAMTrgTqHwzG7urr6cGVlhSgvoiiYTCZ0dnaCpmkwDEOHw+F+j8dDhUIhT2WlJ0CO4x7Pz8/3MwxDDA4OwmKxwGg0olQqIZPJgKZpLC0toaenBwCwsLBwN5FIeGVZHq8K9vb2PjKbzcbjfG5uDna7HQCgqioEQcDAwAB2d3dhMpnAMAzhdrvvyLJsxK+LqgRburu7O6r0FABAkiT8fj9CoRAWFxcxPv6zqKGhIev09PS9XC4XPQHSNH3FarW21AIBgCAI8DwPWZbLY21tbXqWZW2nwIaGBk1VVaKKcyKamppweHhYzlVVhcFgKOdlsFAoJLe2tvJdXV2X6oHZbBYdHb87s729/T2fz0unQAB5RVESAG7Vwg4ODrC2toaRkZHyWDQa/RiPx19XA5HNZl9ubGzc5Hledwzs7e1BVVXs7OxAEATYbDa43W4AwP7+PhRFeQOgVBUURTHY2Njo4TiuDwBcLhcAgKZptLa2wuVyYXJyEiRJ4ujoCIIgxERRHKs0Tj29zc1Np9frfbu+vu7geb7q0VOpFPx+f7xYLPYB+FoXlCTpmyRJtw0Gw/Pl5eUnFovlmtlsJiiKQjqdRiwW+5zJZF4VCoWn4XBY/XN/ze9rZmZmCsCUz+e7qigKr2maXq/Xy4FA4EOtPXXB4/D5fGkA6b+tOzN43vgBOW4Brv/ylSoAAAAASUVORK5CYII="
            }
    }
    
}

if (_userLayers.length > 0) {
    _userLayers.forEach((layer) => {
        if (layer.visible) {
            overlayMaps[layer.name].addTo(map);
            switch (layer.name) {
                case "NOAA SPOT":
                    NOAA_SPOT_Legend.addTo(map);
                    break;
                case "1 Day Fire Forecast":
                    Fire_Forecast_Legend.addTo(map);
                    break;
                case "Tropical Weather Outlook (7 day)":
                    TropicalWeatherOutlook_Lengend.addTo(map);
                    break;
                case "NOAA METAR":
                    METAR_Legend.addTo(map);
                    break;
            }
        }
    })
}
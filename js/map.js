function initGoogleMap() {
    var googleMapCenterPosition = new google.maps.LatLng(50.6199, 26.251617),
        googleMapOptions = {
            zoom: 5,
            center: googleMapCenterPosition,
            scrollwheel: false,
            styles: [{
                featureType: 'landscape',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {featureType: 'poi',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'water',
                elementType: 'labels',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.icon',
                stylers: [{
                    visibility: 'off'
                }]
            }, {
                stylers: [{
                    hue: '#00aaff'
                }, {
                    saturation: -100
                }, {
                    gamma: 2.15
                }, {
                    lightness: 12
                }]
            }, {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    visibility: 'on'
                }, {
                    lightness: 24
                }]
            }, {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    lightness: 57
                }]
            }]
        },
        element = document.getElementById('map'),
        googleMap = new google.maps.Map(element, googleMapOptions);

    new google.maps.Marker({
        position: googleMapCenterPosition,
        map: googleMap,
        icon: 'images/map_marker.png'
    });
}

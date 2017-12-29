// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        zoomControl: true,
        scrollwheel: false,
        scaleControl: false,
        rotateControl: false,
        panControl: false,
        mapMaker: false,
        disableDefaultUI: false,
        streetViewControl: false,
        signInControl: false,
        mapTypeControl: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.7541844, 37.7602523), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "gamma": "1.82"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "gamma": "1.96"
                    },
                    {
                        "lightness": "-9"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": "25"
                    },
                    {
                        "gamma": "1.00"
                    },
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#fcbf00"
                    },
                    {
                        "saturation": "-43"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#fcbf00"
                    },
                    {
                        "saturation": "-70"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "40"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "gamma": "0.80"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);


    var neighborhoods = [
        // Main
        {lat: 55.754127, lng: 37.763251, icon: 'map-pin.png'}
    ];

    /* Info windows
    =========================*/
    infoWindow = new google.maps.InfoWindow();

    function displayMarkers() {

       // this variable sets the map bounds and zoom level according to markers position
       var bounds = new google.maps.LatLngBounds();

       // For loop that runs through the info on markersData making it possible to createMarker function to create the markers
       for (var i = 0; i < neighborhoods.length; i++){

          var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
          var name = neighborhoods[i].title;
          var icon = neighborhoods[i].icon;
          var content = neighborhoods[i].content;

          createMarker(latlng, name, content, icon, i * 250);

          // Marker’s Lat. and Lng. values are added to bounds variable
          bounds.extend(latlng);
       }

    }


    function createMarker(latlng, title, content, icon, timeout) {

        window.setTimeout(function() {
           var marker = new google.maps.Marker({
              map: map,
              position: latlng,
              clickable: true,
              icon: {
                url: "images/" + icon
              },
              animation: google.maps.Animation.DROP
           });

           google.maps.event.addListener(marker, 'click', function() {
              var infoContent = '<div id="info_container">' +
              '<h3 class="map__title">Адрес:</h3><div class="map__desc">Г. МОСКВА,\n' +
                  'УЛ. ПЛЕХАНОВА, Д. 9, СТР. 15, ПОМ. 7</div></div>';

              infoWindow.setContent(infoContent);
              infoWindow.open(map, marker);

           });

        }, timeout);

    }

    displayMarkers();





    // Enable scroll zoom after click on map
    map.addListener('click', function() {
       map.setOptions({
           scrollwheel: false
       });
    });


    // Enable scroll zoom after drag on map
    map.addListener('drag', function() {
       map.setOptions({
           scrollwheel: false
       });
    });


    // Disable scroll zoom when mouse leave map
    map.addListener('mouseout', function() {
       map.setOptions({
           scrollwheel: false
       });
    });


    /* Map center on resize
    =========================*/
    var getCen = map.getCenter();

    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(getCen);
    });



}

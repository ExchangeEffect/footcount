var channel = 'pubnub-mapbox';

var map = eon.map({
  id: 'map',
  mb_id: 'rajujagad.cipj56kga001ubhmduddmzjqp',
  mb_token: 'pk.eyJ1IjoicmFqdWphZ2FkIiwiYSI6IjE0NWZmMWQ0ZDlkODc4NTdiMmIwMDkyODE0YmNhMGVlIn0.gSp6oGCE06CSqouKo_WmFQ',
  channel: 'Great-Route2-bus-data',
  rotate: true,
  history: true,
  marker: function (latlng, data) {

    var marker = new L.RotatedMarker(latlng, {
      icon: L.icon({
        iconUrl: 'https://i.imgur.com/2fmFQfN.png',
        iconSize: [9, 32]
      })
    });

    marker.bindPopup('Route ' + data.routeTag.toUpperCase());

    return marker;

  }
});
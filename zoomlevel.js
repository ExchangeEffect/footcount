var map = eon.map({
  id: 'map',
  mb_id: 'rajujagad.cipj56kga001ubhmduddmzjqp',
  //...
  message: function (data) {
    map.setView(data[3].latlng, 15);
  }
});
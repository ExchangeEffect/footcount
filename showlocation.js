function connect() {

var point = {
  latlng: [35.610353, -77.367738]
};

var pn = PUBNUB.init({
  publish_key: 'pub-c-79da028c-d421-4a7e-9765-1085faa7b8dc'
});

setInterval(function(){

  var new_point = JSON.parse(JSON.stringify(point));

  new_point.latlng = [
    new_point.latlng[0] + (getNonZeroRandomNumber() * 0.1),
    new_point.latlng[1] + (getNonZeroRandomNumber() * 0.2)
  ];

  pn.publish({
    channel: channel,
    message: [new_point] // even a single point should be an array
  });

}, 500);

};
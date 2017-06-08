/**
 * Created by jrfoehn on 6/8/17.
 */
var temperature = [];
var humidity = [];
var waterLever = [];
module.exports = {
  showMeasures: function (req, res) {
    temperature.push(req.param('temperature'));
    humidity.push(req.param('humidity'));
    waterLever.push(req.param('waterLevel'));
    return res.send('hi there ! <br> temperature : ' + temperature + '<br> Waterlevel : ' + waterLever + '<br> Humidity : ' + humidity);
  }
};

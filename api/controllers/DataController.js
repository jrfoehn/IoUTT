/**
 * DataController
 *
 * @description :: Server-side logic for managing Data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



var temperature = [];
var humidity = [];
var waterLever = [];
module.exports = {
  create: function(req, res) {
    var params = req.params.all();
    var DateToday, today;
    today = new Date();
    Data.create({temperature:params.temperature, waterlevel:params.waterlevel, humidity:params.humidity, date:today}).exec(function (err, finn){
      if (err) { return res.serverError(err); }

      sails.log('Finn\'s id is:', finn.id);
      return res.ok();
    });
  },
  getMeasures: function(req, res) {
    Data.native(function(err, collection) {
      if (err) return res.serverError(err);
      collection.find({},{}).toArray(function (err, results) {
        if (err) return res.serverError(err);
        return res.json(results);
      });
    });
  },
  index: function(req, res) {
    Data.find({}, function(err, found){
       res.view( 'dataindex', {data: found} );
    });
  }

};


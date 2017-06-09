/**
 * Created by jrfoehn on 6/9/17.
 */

module.exports = {
  measures: function (options, done) {
    Data.native(function(err, collection) {
      if (err) return res.serverError(err);
      collection.find({},{}).toArray(function (err, results) {
        if (err) return res.serverError(err);
        return res.json(results);
      });
    });
  }
};

module.exports = function(app) {
  app.dataSources.db.automigrate('Moment', function(err) {
    if (err) throw err;

    var now = Date.now();
    var hour = 14400000;

    app.models.Moment.create([
      {what: 'Drink a beer ?', when: now + 1 * hour},
      {what: 'Suck my dick ?', when: now + 3 * hour},
      {what: 'Eat my pussy ?', when: now + 6 * hour},
    ], function(err, moments) {
      if (err) throw err;

      console.log('Models created: \n', moments);
    });
  });
};

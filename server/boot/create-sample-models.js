module.exports = function(app) {

  // Create Moments into the database
  app.dataSources.db.automigrate('Moment', function(err) {
    if(err) throw err;

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

  // Create fake User
  var User = app.models.User;
  User.create({email: 'foo@bar.com', password: 'bar'}, function(err, user){
    console.log(user);
  });

  // Login fake User
  // User.login({email: 'foo@bar.com', password: 'bar'}, function(err, accessToken){
  //   if(err) throw err;
  //   console.log(accessToken);
  // });
};

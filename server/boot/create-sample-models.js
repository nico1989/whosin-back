module.exports = function(app) {

  // Create fake Member into the database
  app.dataSources.db.automigrate('Member', function(err) {
    if(err) throw err;

    var Member = app.models.Member;
    Member.create([
      {email: 'foo@bar.com', password: 'bar'}
      ], function(err, members){
        console.log('\n');
        console.log('id[' + members[0].id + '] ' + members[0].email, ' created');

        // Login fake Member
        Member.login({email: 'foo@bar.com', password: 'bar'}, function(err, accessToken){
          if(err) throw err;
          console.log("accessToken = ", accessToken.id);
      });
    });
  });


  // Create Moments into the database
  app.dataSources.db.automigrate('Moment', function(err) {
    if(err) throw err;

    var now = Date.now();
    var hour = 14400000;

    var Moment = app.models.Moment;
    Moment.create([
      {what: 'Drink a beer ?', when: now + 1 * hour},
      {what: 'Suck my dick ?', when: now + 3 * hour},
      {what: 'Eat my pussy ?', when: now + 6 * hour},
    ], function(err, moments) {
      if (err) throw err;

      // console.log('Models created: \n', moments);
      console.log('Models created \n');

      Moment.status(function(something, data){
        console.log(data);
      });
    });
  });
};

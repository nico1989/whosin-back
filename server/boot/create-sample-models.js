var async = require('async');

module.exports = function(app) {
  // data source
  var dbDs = app.dataSources.db;


  // create all models
  async.parallel({
    members: async.apply(createMembers),
  }, function(err, results) {
    if (err) throw err;
    console.log(' > ' + results.members.length + ' members created successfully.');
    createMoments(results.members, function(err, moments) {
      console.log(' > ' + moments.length + ' moments created successfully.');
    });
  });


  // create members
  function createMembers(cb) {
    dbDs.automigrate('Member', function(err) {
      if (err) return cb(err);

      app.models.Member.create([
        {email: 'foo@bar.com', password: 'bar'},
        {email: 'john@doe.com', password: 'johndoe'},
        {email: 'jane@doe.com', password: 'janedoe'}
      ], cb);
    });
  }


  // create moments
  function createMoments(members, cb) {
    dbDs.automigrate('Moment', function(err) {
      if (err) return cb(err);

      var HOUR_IN_MILLISECONDS = 1000 * 60 * 60;

      app.models.Moment.create([
        {
          what: 'Drink a beer ?',
          when: Date.now() + (HOUR_IN_MILLISECONDS * 3),
          ownerId: members[0].id,
        },
        {
          what: 'Suck my dick ?',
          when: Date.now() + (HOUR_IN_MILLISECONDS * 2),
          ownerId: members[1].id,
        },
        {
          what: 'Eat my pussy ?',
          when: Date.now() + (HOUR_IN_MILLISECONDS),
          ownerId: members[2].id,
        }
      ], cb);
    });
  }
};

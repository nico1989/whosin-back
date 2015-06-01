module.exports = function(Member) {

  Member.nimp = function(cb){
    Member.find({include: ['followers']}, function(err, data) {
      if(err) console.log(err);

      cb(null, data);
    });
  };

  Member.remoteMethod(
    'nimp',
    {
      http: {path: '/nimp', verb: 'get'},
      returns: {arg: 'nimp', type: 'string'}
    }
  );
};

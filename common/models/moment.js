module.exports = function(Moment) {

  Moment.status = function(cb) {
    console.log('running status');
    cb(null, '  Executed');
  };

  Moment.remoteMethod(
    'status',
    {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
    }
  );

  Moment.afterRemote('status', function(ctx, userAffected, next){
    console.log('AFTER REMOTE ***');
    next();
  });

  Moment.beforeRemote('status', function(ctx, userAffected, next){
    console.log('BEFORE REMOTE ***');
    next();
  });
};

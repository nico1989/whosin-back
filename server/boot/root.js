module.exports = function(server) {
  // Install a `/` route that returns server status
  // var router = server.loopback.Router();
  // router.get('/', server.loopback.status());
  // server.use(router);

  server.get('/', function(req, res){
    res.render('home');
  });

  server.get('/signup', function(req, res) {
    res.render('signup');
  });
};

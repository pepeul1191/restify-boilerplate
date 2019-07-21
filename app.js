var restify = require('restify');

function respond(req, res, next) {
  console.log('2++++++++++++++++');
  res.send('hello - ' + req.params.name);
  next();
}

var server = restify.createServer();

server.use(function(req, res, next) {
  console.warn('run for all routes!');
  return next();
});


server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
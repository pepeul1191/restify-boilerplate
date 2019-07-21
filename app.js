var restify = require('restify');
const models = require('./configs/models');

function respond(req, res, next) {
  console.log('2++++++++++++++++');
  res.send('hello - ' + req.params.name);
  next();
}

var server = restify.createServer();

server.use(function(req, res, next) {
  console.warn('run for all routes!');
  res.header('Server', 'Ubuntu');
  return next();
});

async function list(req, res, next){
  var students = await models.Student.findAll({});
  res.header('Content-Type', 'text/html; charset=utf-8');
  res.send(JSON.stringify(students));
  next();
}

server.get('/hello/:name', respond);
server.get('/list', list);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
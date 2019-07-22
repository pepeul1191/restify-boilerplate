var restify = require('restify');
var Router = require('restify-router').Router;

const models = require('./configs/models');
const serverConfigs = require('./configs/server');

const demoRoutes = require('./routes/demo');

function respond(req, res, next) {
  console.log('2++++++++++++++++');
  res.send('hello - ' + req.params.name);
  next();
}

var routerInstance = new Router();

// routerInstance.get('/demo', demoRoutes);

var server = restify.createServer(serverConfigs.formatters);

routerInstance.applyRoutes(server, '/admin');

server.use(function(req, res, next) {
  console.warn('run for all routes!');
  res.removeHeader('Server');
  res.header('Server', 'Ubuntu, restify');
  return next();
});

async function list(req, res, next){
  var students = await models.Student.findAll({});
  res.send(JSON.stringify(students));
  next();
}

server.get('/hello/:name', respond);
server.get('/list', list);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
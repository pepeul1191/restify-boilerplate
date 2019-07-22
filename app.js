var restify = require('restify');
var logger  = require('morgan');
// export configs
const middlewares = require('./configs/middlewares');
const serverConfigs = require('./configs/server');
const demoRoutes = require('./routes/demo');
// server instance
var server = restify.createServer(serverConfigs.formatters);
// middlewares
server.use(middlewares.preResponse);
server.use(logger('dev'));
// routes
server.get('/hello/:name', demoRoutes.respond);
server.get('/list', demoRoutes.list);
server.head('/hello/:name', demoRoutes.respond);
// start app
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
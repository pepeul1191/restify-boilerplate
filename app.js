var restify = require('restify');
// export configs
const middlewares = require('./configs/middlewares');
const serverConfigs = require('./configs/server');
const routes = require('./configs/routes');
// server instance
var server = restify.createServer(serverConfigs.formatters);
// middlewares
server.use(middlewares.preResponse);
server.use(middlewares.showLogs());
// routes
routes.register(server);
// static folder
server.get('/*', restify.plugins.serveStatic({
  directory: './public',
  // default: 'index.html'
}));
// error handler
server.on('restifyError', middlewares.errorNotFoundHandler);
// start app
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
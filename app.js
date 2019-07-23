var restify = require('restify');
// export configs
const middlewares = require('./configs/middlewares');
const serverConfigs = require('./configs/server');
const demoRoutes = require('./routes/demo');
// server instance
var server = restify.createServer(serverConfigs.formatters);
// middlewares
server.use(middlewares.preResponse);
server.use(middlewares.showLogs());
// routes
server.get('/hello/:name', demoRoutes.respond);
server.get('/list', demoRoutes.list);
server.head('/hello/:name', demoRoutes.respond);
// static foler
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
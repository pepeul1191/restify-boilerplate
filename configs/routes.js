const demoRoutes = require('../routes/demo');

const register = function(server){
  server.get('/list', demoRoutes.list);
  server.get('/hello/:name', demoRoutes.respond);
  server.head('/hello/:name', demoRoutes.respond);
}

exports.register = register; 

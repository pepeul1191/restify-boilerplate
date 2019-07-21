var restify = require('restify');
const models = require('./configs/models');

function respond(req, res, next) {
  console.log('2++++++++++++++++');
  res.send('hello - ' + req.params.name);
  next();
}

var server = restify.createServer({
  formatters: {
    'application/json': function(req, res, body){
        if(req.params.callback){
            var callbackFunctionName = req.params.callback.replace(/[^A-Za-z0-9_\.]/g, '');
            return callbackFunctionName + "(" + JSON.stringify(body) + ");";
        } else {
            return JSON.stringify(body);
        }
    },
    'text/html': function(req, res, body){
        return body;
    }
  }
});

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
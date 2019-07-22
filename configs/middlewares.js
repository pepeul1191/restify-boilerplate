// var constants = require('./constants');
// var contents = require('./contents');

// app middlewares

var preResponse = function(req, res, next) {
  res.removeHeader('Server');
  res.header('Server', 'Ubuntu, restify');
  return next();
}
/*
var showLogs = function(){
  if (constants.middlewares.logs){
    return async (ctx, next) => {
      await next();
      const rt = ctx.response.get('X-Response-Time');
      console.log(`${ctx.method} ${ctx.status} ${ctx.url} - ${rt}`);
    }
  } else{
    return async (ctx, next) => {
      await next();
    };
  }
}
*/
var getLanguage = function(ctx){
  return 'sp';
}

var errorNotFoundHandler = (req, res, err, cb) => {
  // show error in console
  // console.log(err);
  console.log('1 ++++++++++++++++++++++++++++++++++++++++');
  console.log('metodo ' + req.method);
  console.log(cb.code);
  console.log('2 ++++++++++++++++++++++++++++++++++++++++');
  return cb();
}

exports.preResponse= preResponse;
exports.getLanguage = getLanguage;
exports.errorNotFoundHandler = errorNotFoundHandler;
//exports.showLogs = showLogs;

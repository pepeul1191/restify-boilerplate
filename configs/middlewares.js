// var constants = require('./constants');
// var contents = require('./contents');

// app middlewares

var preResponse = function(req, res, next) {
  res.removeHeader('Server');
  res.header('Server', 'Ubuntu, restify');
  return next();
}

var getLanguage = function(ctx){
  return 'sp';
}

var errorNotFoundHandler = (req, res, err, cb) => {
  var status = 500;
  var message = '';
  // show error in console
  console.log(err);
  // console.log('metodo ' + req.method);
  // set status
  if (err.toString() == 'ResourceNotFoundError: / does not exist'){
    status = 404;
    message = 'Eror 404 : Recurso no encontrado';
  }else{
    message = JSON.stringify({
      title: 'Ups =(',
      description: err,
    });
  }
  res.status(status);
  return res.send(message);
}

exports.preResponse= preResponse;
exports.getLanguage = getLanguage;
exports.errorNotFoundHandler = errorNotFoundHandler;

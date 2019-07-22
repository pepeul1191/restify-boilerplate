const models = require('../configs/models');

// GET list
var list = async function(req, res, next) {
  console.log('XD');
  var students = await models.Student.findAll({});
  res.send(JSON.stringify(students));
  next();
}

// GET hello/:name
var respond = async function(req, res, next) {
  console.log('2++++++++++++++++');
  res.send('hello - ' + req.params.name);
  next();
}

exports.list= list;
exports.respond = respond;

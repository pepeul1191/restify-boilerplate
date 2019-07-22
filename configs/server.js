const formatters = {
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
};

exports.formatters = formatters; 
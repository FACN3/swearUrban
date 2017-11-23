
var handlerHelper = require('./handlerHelperFunctions');




function handlers(req, res) {
  var url = req.url;
  var method = req.method;
  handlerHelper.getTheFile(handlerHelper.handlePath(url),handlerHelper.getType(url),res)

} //end of handlers

module.exports = handlers

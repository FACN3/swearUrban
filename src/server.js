var http = require('http');
var handler = require('./handlers.js');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;


var server = http.createServer(handler);
server.listen(port, function(){
  console.log('Server is listening on port: 3000');
});

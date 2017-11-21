var fs = require('fs');
var path = require('path');


function handlers(req, res) {
  var url = req.url;
  var method = req.method;

  if (method == 'GET') {
    if (url === '/') {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });

      fs.readFile(path.join(__dirname, '..', '/public/index.html'), function(err, file) {

        if (err) {
          console.log(err);
          return;
        } else {
          res.end(file);
        }
      });
    } else if (url.length > 1) { // checking if the url has more than /

      var extension = url.split('.')[1];
      var extensionsType = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'application/javascript',
        'ico': 'image/x-icon',
        'jpg': 'image/jpg'
      }[extension];

      fs.readFile(path.join(__dirname, '..', url), function(err, file) {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, {
            'Content-Type': extensionsType
          });
          res.end(file);
        }
      });
    }
  } 
  else {
    res.end();
  }//end of GET
} //end of handlers

module.exports = handlers

var fs = require('fs');
var path = require('path');


const handlerHelper = {
  getTheFile: function(filePath, type ,res) {
    console.log(filePath);
    console.log(type);

    fs.readFile(filePath, (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {
          'content-type': 'text/plain'
        });
        res.end('server error');
      } else {
        res.writeHead(200, {
          'content-type': type
        });
        res.end(file);
      }
    });
  },
  getType: function(url) {
    if(url.indexOf(".")==-1){
      return 'text/html';
    }
    const extensionType = {
      html: 'text/html',
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-icon'
    }[url.split(".")[1]]
    return extensionType;
  },
  handlePath: function(url) {
    if(url=="/"){
      url = 'public/index.html';
    }
    return path.join(__dirname, "..", url);
  }
}

module.exports = handlerHelper;

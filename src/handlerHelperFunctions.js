var fs = require('fs');
var path = require('path');
var filterRes = require('./filter')
var queryString = require('querystring')

const handlerHelper = {
  getTheFile: function(filePath, type ,res) {
    console.log("The File Path : ",filePath);
    console.log("The File type : ",type);
    if (filePath.includes("/?q=")){
     // console.log(filter(url.split("?=")[1]));
    //  console.log(filePath);
    //  var fPath=filePath.split("?")[1];
    //  var parsed = queryString.parse(fPath);
    //  console.log(parsed);
    // console.log(filePath.indexOf('\/\?'));
    var index = filePath.indexOf('\/\?');
    // console.log(filePath.substring(index+2))
     var result=filterRes(queryString.parse(filePath.substring(index+2))["q"]);
     console.log("This is the result: ",result);
     if (!result){
       res.writeHead(500, {
         'content-type': 'text/plain'
       });
       res.end('dictionary retrieve error');
     } else {
       console.log(2);
       res.writeHead(200, {
         'content-type': "application/json"
       });
       var stringResult=JSON.stringify(result);
       console.log();
       res.end(stringResult);
     }
   }
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
      ico: 'image/x-icon',
      jpeg: 'image/x-icon'
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

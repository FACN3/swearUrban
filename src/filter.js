var data = require("./dataa.json");

function filter(searchterm){
  var newArr=[];
  var parsed = JSON.parse(data);
   parsed.every(function(element){
    if(newArray.length==6){
      return false;
    }
    if (element.indexOf(searchterm)!=-1){
      newArr.push(element);
    }
    return true;
  })
  return newArr;
}




module.exports = filter;

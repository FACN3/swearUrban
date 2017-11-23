var data = require("../data.json");

function filterRes(searchterm){
  console.log(searchterm);
  var newArr=[];
  var parsed = data;
   parsed.every(function(element){
    if(newArr.length==10){
      return false;
    }
    if (element.indexOf(searchterm)!=-1 && element.indexOf(searchterm)==0){
      newArr.push(element);
    }
    return true;
  })
  return newArr;
}

module.exports = filterRes;

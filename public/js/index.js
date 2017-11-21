function fetch(url,callBack){
  var xhr= new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readystate = 4 && xhr.status = 200){
      callBack(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET",url);
  xhr.send();
}

module.exports = fetch;

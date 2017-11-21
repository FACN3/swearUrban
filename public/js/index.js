function fetch(url,callBack){
  var xhr= new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(this.readystate = 4 && this.status = 200){
      callBack(Json.parse(this.responseText));
    }
  };
  xhr.open("GET",url);
  xhr.send();
}

module.exports = fetch;

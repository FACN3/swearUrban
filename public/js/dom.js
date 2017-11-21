var fetch = require("./index");
 document.querySelector("#searchInput").addEventListener("input",function(){
   var searchWord =querySelector("#searchInput").value.replace(" ","+");

  fetch(window.location.href+"?="+searchWord,)
});

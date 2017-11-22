

document.querySelector("#searchInput").addEventListener("input", function() {
  if(document.querySelector("#searchInput").value!=""){
    var searchWord = document.querySelector("#searchInput").value;
    var urlSearchWord = encodeURI(searchWord);
    fetch(window.location.href + "?q=" + urlSearchWord, creatingUl); // var newArray = []
  }
  else{
    var el = document.querySelector("#results");
    el.innerHTML="";
  }
});
document.querySelector(".form").addEventListener("submit",function(){

});




function creatingUl(arr) {
  arr = JSON.parse(JSON.stringify(arr));
  var el = document.querySelector("#results");
  el.innerHTML="";

  var newUl = document.createElement("ul");
  newUl.classList.add("ulDesign");
  if (arr.length == 0) {
    var li = document.createElement("li");
    li.textContent = "no results found";
    li.classList.add("liDesignEmpty");
    newUl.appendChild(li);
  } else {
    for (var i = 0; i < arr.length; i++) {
      var li = document.createElement("li");
      li.classList.add("liDesignFull");
      li.innerHTML = arr[i];
      newUl.appendChild(li);
    }
  }

  el.appendChild(newUl);
}

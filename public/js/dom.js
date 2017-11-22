

document.querySelector("#searchInput").addEventListener("input", function() {
  if(document.querySelector("#searchInput").value!=""){
    var searchWord = document.querySelector("#searchInput").value;
    var urlSearchWord = encodeURI(searchWord);
    fetch(window.location.href + "?q=" + urlSearchWord, creatingUl); // var newArray = []
  }
});





function creatingUl(arr) {
  arr = JSON.parse(JSON.stringify(arr));
  var el = document.querySelector("#results");
  var newUl = document.createElement("ul");
  if (arr.length == 0) {
    var li = document.createElement("li");
    li.textContent = "no results found";
    newUl.appendChild(li);
  } else {
    for (var i = 0; i < arr.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = arr[i];
      newUl.appendChild(li);
    }
  }
  el.appendChild(newUl);
}

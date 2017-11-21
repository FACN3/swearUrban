var fetch = require("./index");
document.querySelector("#searchInput").addEventListener("input", function() {

    var searchWord = querySelector("#searchInput").value;
    var urlSearchWord = searchWord.replace(" ", "+");
    fetch(window.location.href + "?=" + urlSearchWord,creatingUl);   // var newArray = []



    });
}

function creatingUl(arr) {
  var el = document.querySelector("#results");
  var newUl = document.createElement("ul");
  for (var i = 0; i < arr.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = arr[i];
    newUl.appendChild(li);
  }
  el.appendChild(newUl);
}

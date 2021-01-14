 /*
 function loadJSONDoc() {
      var xmlhttp;
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var obj = JSON.parse(xmlhttp.responseText);
          var output = "<table>";
          for (var name in obj[0]) {
            output += "<tr><td>" + Product[1] + "</td>" + "<td>" + obj[1] + "</td></tr>";
          }
          output += "</table>";
          document.getElementById("myList").innerHTML = output;
        }
      }
      xmlhttp.open("GET", "https://johnsu6616.github.io/ByBuy/itemPrice.json", true);
      xmlhttp.send();
    }

    document.addEventListener("DOMContentLoaded", function(event) {
      loadJSONDoc();
    });
*/
var xmlhttp = new XMLHttpRequest();
var url = "https://johnsu6616.github.io/ByBuy/ByBuy/itemPrice.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        loadJSONDoc(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function loadJSONDoc(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].txt + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}


console.log(typeof json_data !== 'undefined'
    ? json_data.length : 'There is no spoon.');
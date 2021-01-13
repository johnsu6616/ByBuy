 function loadJSONDoc() {
      var xmlhttp;
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var obj = JSON.parse(xmlhttp.responseText);
          var output = "<table>";
          for (var name in obj[0].prices[0]) {
            output += "<tr><td>" + name + "</td>" + "<td>" + obj[0].prices[0][name] + "</td></tr>";
          }
          output += "</table>";
          document.getElementById("myList").innerHTML = output;
        }
      }
      xmlhttp.open("GET", "item.json", true);
      xmlhttp.send();
    }

    document.addEventListener("DOMContentLoaded", function(event) {
      loadJSONDoc();
    });
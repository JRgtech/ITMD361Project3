var img = new Image();
var div = document.getElementById("awesome");
img.onload = function() {
  div.appendChild(img);
}
img.src = "Awesome.gif"

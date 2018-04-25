imgShow();

function imgShow()  {

var imgtemp = new Image();
imgtemp.src = document.getElementById("im_#");
var oldImg = document.getElementByClass("imghold");
oldImg.appendChild(imgtemp);

}

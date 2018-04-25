function imgShow(class "imgContain", imgContain.id) {

var imgtemp = new Image();
imgtemp.src = imgContain.id;
var oldImg = document.getElementByClass("imghold");
oldImg.appendChild(imgtemp);

}

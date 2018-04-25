imgShow(class,class.id);

function imgShow() {

var imgtemp = new Image();
imgtemp.src = imgContain.id;
var oldImg = document.getElementByClass("imghold");
oldImg.appendChild(imgtemp);

}

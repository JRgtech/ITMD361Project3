var imgIndex = 0;
imgShow();

function imgShow(){
  var a;
  var pics = document.getElementsByClassName('multipic')
  for (a = 0; a < pics.length; a++) {
    pics[a].style.display = "none";
  }
  imgIndex++;
  if (pics > pics.length) {imgShow = 1}
  pics[imgIndex-1].style.display = "block";
  setTimeout(imgShow, 5000);
}

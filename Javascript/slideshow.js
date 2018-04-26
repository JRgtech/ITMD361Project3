var picIndex = 1;
imgShow(picIndex);

function next(n) {
  imgShow(picIndex += n);
}

function currentpic(n) {
  imgShow(picIndex = n);
}

function imgShow(n) {
  var i;
  var pics = document.getElementsByClassName("imgContain");
  if (n > pics.length) {picIndex = 1}
  if (n < 1) {picIndex = pics.length}
  for (i = 0; i < pics.length; i++) {
    pics[i].style.display = "none";
  }
}

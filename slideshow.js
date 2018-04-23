imgShow();
function imgShow(){
  var picArray = new Array();

  picArray[0] = new Image();
  picArray[0].src="https://travel.aarp.org/content/dam/travel/destination-images/france/paris/1400-hero-paris-france-louvre.jpg"
  picArray[1] = new Image();
  picArray[1].src="https://media.gettyimages.com/photos/houses-of-parliament-at-night-westminster-london-uk-picture-id508151164"
  picArray[2] = new Image();
  picArray[2].scr="https://assets3.thrillist.com/v1/image/2699171/size/gn-gift_guide_variable_c.jpg"
  picArray[3] = new Image();
  picArray[3].src="https://www.japantimes.co.jp/wp-content/uploads/2017/10/n-tokyo-a-20171013-870x581.jpg"
  picArray[4] = new Image();
  picArray[4].src="https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2e/15/sydney.jpg"
  picArray[5] = new Image();
  picArray[5].src="https://i.pinimg.com/originals/7a/7e/8f/7a7e8f73e97a4af01f8fa140a8bdc2ed.jpg"
  picArray[6] = new Image();
  picArray[6].src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Austin_Evening.jpg/1200px-Austin_Evening.jpg"
  picArray[7] = new Image();
  picArray[7].src="https://travel.usnews.com/static-travel/images/destinations/44/broadway_getty_fresh_photos_from_all_over_the_world.jpg"
  picArray[8] = new Image();
  picArray[8].src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Space_Needle002.jpg/1200px-Space_Needle002.jpg"

  var i;
  for (i = 0; a < picArray.length; i++) {
    document.getElementsByClassName("multipic").src = picArray[i];
  }
  if (i > picArray.length) {i = 0};
  setTimeout(imgShow, 2000);
}

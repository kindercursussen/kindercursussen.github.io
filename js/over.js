window.onscroll = function() {myFunction()};
var firstTimeOnd = true;
var firstTimeUit = true;

function myFunction() {

  const main_img = document.querySelector(".main_img");
  const main_imgPos = document.querySelector(".main_img").offsetTop;
  const main_side_text = document.querySelector(".main_side_text");
  const main_side_textPos = document.querySelector(".main_side_text").offsetTop;

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  if(winScroll > main_imgPos - window.innerHeight/2) {
      animationOnderwerp(main_img, false);
    }
    if(winScroll > main_side_textPos - window.innerHeight/2){
      animationmain_side_text(main_side_text, false);
    }

}

function animationOnderwerp(img, secondTime) {
  if(firstTimeOnd) {
    const tl = new TimelineMax();

    tl.fromTo(img, 1, {opacity : "0"}, {opacity: "1"})
    .fromTo(img, 1, {y: "25px"}, {y: "0", ease: Power2.easeInOut}, "-=1");
    firstTimeOnd = secondTime;
  }
}
function animationmain_side_text(txt, secondTime) {
  if(firstTimeUit) {
    const tl = new TimelineMax();

    tl.fromTo(txt, 1, {opacity : "0"}, {opacity: "1"})
    .fromTo(txt, 1, {y: "25px"}, {y: "0", ease: Power2.easeInOut}, "-=1");
    firstTimeUit = secondTime;
  }
}

window.onscroll = function() {myFunction()};
var firstTimeOnd = true;
var firstTimeUit = true;

function myFunction() {

  const onderwerpen = document.querySelector(".onderwerpen");
  const onderwerpenPos = document.querySelector(".onderwerpen").offsetTop;
  const uitbereiding = document.querySelector(".uitbereiding");
  const uitbereidingPos = document.querySelector(".uitbereiding").offsetTop;

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  const openHeightOnderwerpen = winScroll > onderwerpenPos - window.innerHeight/1.5;
  const openHeightUitbereiding = winScroll > uitbereidingPos - window.innerHeight/1.5;
  if(openHeightOnderwerpen) {
      animationOnderwerp(onderwerpen, false);
    }
    if(openHeightUitbereiding){
      animationUitbereiding(uitbereiding, false);
    }
}

function animationOnderwerp(ond, secondTime) {
  if(firstTimeOnd) {
    const tl = new TimelineMax();

    tl.fromTo(ond, 1, {opacity : "0"}, {opacity: "1"})
    .fromTo(ond, 1, {y: "25px"}, {y: "0", ease: Power2.easeInOut}, "-=1");
    firstTimeOnd = secondTime;
  }
}
function animationUitbereiding(uit, secondTime) {
  if(firstTimeUit) {
    const tl = new TimelineMax();

    tl.fromTo(uit, 1, {opacity : "0"}, {opacity: "1"})
    .fromTo(uit, 1, {y: "25px"}, {y: "0", ease: Power2.easeInOut}, "-=1");
    firstTimeUit = secondTime;
  }
}

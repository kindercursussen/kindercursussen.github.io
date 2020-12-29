const front = document.querySelector(".front");
const wrapper = document.querySelector("#title_wrapper");
const title = document.querySelector("#title");
const title2 = document.querySelector("#title2");
const body_wrapper = document.querySelector(".body_wrapper");
const body = document.querySelector("#body");

const tl = new TimelineMax();

tl.to(body, 0, {overflow: "hidden", ease: Power2.easeInOut})
.fromTo(wrapper, 0.5, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut})
.fromTo(wrapper, 1, {rotation:"10"}, {rotation:"0", ease: Power2.easeInOut},"-=0.5")
.fromTo(wrapper, 2, {scale:"0.8"}, {scale:"1", ease: Power2.ease},"-=0")
.fromTo(title2, 1, {y:"100%"}, {y:"-200%", ease: Power2.ease},"-=3")
.fromTo(title, 1.5, {y:"200%"}, {y:"0%", ease: Power2.easeInOut},"-=3")
.fromTo(title2, 1.5, {y:"100%"}, {y:"0%", ease: Power2.easeInOut},"-=2")
.to(front, 1, {opacity:"0", ease: Power2.easeInOut},"+=1")
.to(wrapper, 1.5, {scale:"0", ease: Power2.easeInOut},"-=1")
.to(wrapper, 2, {rotation:"90", ease: Power2.easeInOut},"-=1.5")
.to(front, 0, {display: "none"})
.to(body, 0, {overflow: "unset", ease: Power2.easeInOut})
;

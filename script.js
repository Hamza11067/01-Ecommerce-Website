// toggle navigation bar
let tl = gsap.timeline();
let menu = document.querySelector("#menu-icon");
let close = document.querySelector("#menubar i");

tl.to("#menubar", {
  right: 0,
  duration: 0.5,
});

tl.from("#menubar a", {
  x: 100,
  duration: 0.6,
  stagger: 0.12,
  opacity: 0,
});

tl.from("#menubar i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

close.addEventListener("click", function () {
  tl.reverse();
});
window.addEventListener("scroll", () => {
  let animateTop = document.querySelectorAll(".animate-top");

  let screenPosition = window.innerHeight;

  for (let part of animateTop) {
    if (part.getBoundingClientRect().top < screenPosition / 0.8) {
      part.classList.add("animate-top--active");
    } else {
      part.classList.remove("animate-top--active");
    }
  }
});

/////////////////////Nav Collapse

const btn = document.querySelector(".header__collapse__button");
const nav = document.querySelector(".header__collapse__nav");
const dash = document.querySelectorAll(".header__collapse__dash");

btn.addEventListener("click", function () {
  for (let i of dash) {
    i.classList.toggle("header__collapse__dash--pink");
  }
  nav.classList.toggle("header__collapse__nav--visible");
});

/////////////////Logo slider

let buttons = document.querySelectorAll(".home__rsvp__gallery--span");
let containers = document.querySelectorAll(".home__rsvp__gallery--container");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    for (let b of buttons) {
      b.classList.remove("home__rsvp__gallery--span--active");
    }
    for (let cont of containers) {
      cont.classList.add("home__rsvp__gallery--container--hide");
    }
    buttons[i].classList.add("home__rsvp__gallery--span--active");
    containers[i].classList.remove("home__rsvp__gallery--container--hide");
    containers[i].classList.add("home__rsvp__gallery--container--show");
  });
}

///////////////////////////////Slider/////////////////////////////

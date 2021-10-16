const btn = document.querySelector(".header__collapse__button");
const nav = document.querySelector(".header__collapse__nav");
const dash = document.querySelectorAll(".header__collapse__dash");

btn.addEventListener("click", function () {
  for (let i of dash) {
    i.classList.toggle("header__collapse__dash--pink");
  }
  nav.classList.toggle("header__collapse__nav--visible");
});

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

/////////////////////popup///////////////

const gallery = document.querySelectorAll(".footer__img"),
  spans = document.querySelectorAll(".footer__span"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector(".preview-img"),
  closeIcon = previewBox.querySelector(".close-icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length; //passing total img length to totalImg variable
    let newIndex = i; //passing i value to newIndex variable
    let clickedImgIndex; //creating new variable

    spans[i].onclick = () => {
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview() {
        currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
        let imageURL = gallery[newIndex].src; //getting user clicked img url
        previewImg.src = imageURL; //passing user clicked img url in previewImg src
      }
      preview(); //calling above function

      const prevBtn = document.querySelector(".popup-prev");
      const nextBtn = document.querySelector(".popup-next");
      if (newIndex == 0) {
        //if index value is equal to 0 then hide prevBtn
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        //if index value is greater and equal to gallery length by -1 then hide nextBtn
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };
      nextBtn.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };

      document.querySelector("body").style.overflow = "hidden";
      previewBox.classList.add("show");
      shadow.classList.add("shadow-active");
      closeIcon.onclick = () => {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.classList.remove("shadow-active");
        document.querySelector("body").style.overflow = "scroll";
      };
    };
  }
};

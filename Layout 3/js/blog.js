//////////////////////////BLOG

let galleryContainer = document.querySelector(".blog__gallery");
let storiesCol3Link = document.querySelector(".blog__sort--icon--col-3");
let storiesCol2Link = document.querySelector(".blog__sort--icon--col-2");
let storiesList = document.querySelector(".blog__sort--icon--list");
let blogList = document.querySelector(".blog__list");
let storiesLinks = document.querySelectorAll(".blog__sort--icon");

for (let i = 0; i <= 2; i++) {
  storiesLinks[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}

storiesCol3Link.addEventListener("click", () => {
  for (let icon of storiesLinks) {
    icon.classList.remove("blog__sort--icon--active");
  }
  // storiesCol3.classList.add("blog__stories__container__col-3");
  storiesCol3Link.classList.add("blog__sort--icon--active");

  galleryContainer.classList.remove("blog__storis--hide");
  blogList.classList.remove("blog__list--active");

  galleryContainer.classList.add("blog__gallery--col-3");
});

storiesCol2Link.addEventListener("click", () => {
  for (let icon of storiesLinks) {
    icon.classList.remove("blog__sort--icon--active");
  }
  // storiesCol3.classList.remove("blog__stories__container__col-3");
  storiesCol2Link.classList.add("blog__sort--icon--active");

  galleryContainer.classList.remove("blog__storis--hide");
  blogList.classList.remove("blog__list--active");

  galleryContainer.classList.remove("blog__gallery--col-3");
});

storiesList.addEventListener("click", () => {
  for (let icon of storiesLinks) {
    icon.classList.remove("blog__sort--icon--active");
  }
  // storiesCol3.classList.remove("blog__stories__container__col-3");
  storiesList.classList.add("blog__sort-icon--active");

  galleryContainer.classList.add("blog__storis--hide");
  blogList.classList.add("blog__list--active");
});

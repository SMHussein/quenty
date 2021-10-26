var items = document.querySelectorAll(".carousel .item");
var currentItem = 0;
var isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

function goToItem(n) {
  if (n < currentItem) {
    hideItem("to-right");
    currentItem = n;
    showItem("from-left");
  } else {
    hideItem("to-left");
    currentItem = n;
    showItem("from-right");
  }
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

document
  .querySelector(".carousel-control.left")
  .addEventListener("click", function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

document
  .querySelector(".carousel-control.right")
  .addEventListener("click", function () {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });

///////////////Pop Up///////////////////////////////////

const gallery = document.querySelectorAll(".home__gallery__img"),
  spans = document.querySelectorAll(".home__gallery__figure__span"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector(".preview-img"),
  closeIcon = previewBox.querySelector(".close-icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow"),
  galleryBig = document.querySelectorAll(".our-story__gallery--img"),
  spansBig = document.querySelectorAll(".our-story__gallery--figure__span"),
  previewBoxBig = document.querySelector(".preview-box-big"),
  previewImgBig = previewBoxBig.querySelector(".preview-img-big"),
  closeIconBig = previewBoxBig.querySelector(".close-icon-big"),
  currentImgBig = previewBoxBig.querySelector(".current-img-big"),
  totalImgBig = previewBoxBig.querySelector(".total-img-big"),
  shadowBig = document.querySelector(".shadow-big");

window.onload = () => {
  for (let i = 0; i < galleryBig.length; i++) {
    totalImgBig.textContent = galleryBig.length; //passing total img length to totalImg variable
    let newIndex = i; //passing i value to newIndex variable
    let clickedImgIndex; //creating new variable

    // for (let i of spans) {
    //   i.addEventListener("click", () => {
    //     console.log(this);
    //   });
    // }
    spansBig[i].onclick = () => {
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview1() {
        currentImgBig.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
        let imageURL = galleryBig[newIndex].src; //getting user clicked img url
        previewImgBig.src = imageURL; //passing user clicked img url in previewImg src
      }
      preview1(); //calling above function

      const prevBtnBig = document.querySelector(".popup-prev-big");
      const nextBtnBig = document.querySelector(".popup-next-big");
      if (newIndex == 0) {
        //if index value is equal to 0 then hide prevBtn
        prevBtnBig.style.display = "none";
      }
      if (newIndex >= galleryBig.length - 1) {
        //if index value is greater and equal to gallery length by -1 then hide nextBtn
        nextBtnBig.style.display = "none";
      }
      prevBtnBig.onclick = () => {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview1();
          prevBtnBig.style.display = "none";
        } else {
          preview1();
          nextBtnBig.style.display = "block";
        }
      };
      nextBtnBig.onclick = () => {
        newIndex++; //increment index
        if (newIndex >= galleryBig.length - 1) {
          preview1();
          nextBtnBig.style.display = "none";
        } else {
          preview1();
          prevBtnBig.style.display = "block";
        }
      };

      document.querySelector("body").style.overflow = "hidden";
      previewBoxBig.classList.add("show");
      shadowBig.classList.add("shadow-active");
      closeIconBig.onclick = () => {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtnBig.style.display = "block";
        nextBtnBig.style.display = "block";
        previewBoxBig.classList.remove("show");
        shadowBig.classList.remove("shadow-active");
        document.querySelector("body").style.overflow = "scroll";
      };
    };
  }

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

///////////////LLogo Slider///////////////////////////////////

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

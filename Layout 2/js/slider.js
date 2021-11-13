let span = document.querySelectorAll(".honor__gallery__span");
let box = document.querySelectorAll(".honor__gallery__box");
let box_page = Math.ceil(box.length / 4);

let l = 0;
let movePer = 25.34;
let maxMove = 203;

// mobile view

let mobile_view = window.matchMedia("(max-width: 1100px)");
if (mobile_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

//Very small view
let smallmobile_view = window.matchMedia("(max-width: 700px)");
if (smallmobile_view.matches) {
  movePer = 100;
  maxMove = 1000;
}

let right_mover = () => {
  l = l + movePer;
  if (box == 1) {
    l = 0;
  }
  for (const i of box) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};

let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of box) {
    if (box_page > 1) i.style.left = "-" + l + "%";
  }
};

span[1].onclick = () => {
  right_mover();
};

span[0].onclick = () => {
  left_mover();
};

//////////////////////////////Home Gallery

const gallery = document.querySelectorAll(".home-gallery__img"),
  spans = document.querySelectorAll(".home-gallery__span--plus"),
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

////////////////////////////////////2nd Slider

let spanArrows = document.querySelectorAll(".home-gallery__span");
let boxTwo = document.querySelectorAll(".home-gallery__figure");
let box_page_two = Math.ceil(box.length / 3);

let ll = 0;
let movePerTwo = boxTwo[0].clientWidth + 40;
let maxMoveTwo = (boxTwo.length / 2) * boxTwo[0].clientWidth + 40;

let right_mover_two = () => {
  ll = ll + movePerTwo;
  if (boxTwo == 1) {
    ll = 0;
  }
  for (const i of boxTwo) {
    if (ll > maxMoveTwo) {
      ll = ll - movePerTwo;
    }
    i.style.left = "-" + ll + "px";
  }
};

let left_mover_two = () => {
  ll = ll - movePerTwo;
  if (ll <= 0) {
    ll = 0;
  }
  for (const i of boxTwo) {
    if (box_page_two > 1) i.style.left = "-" + ll + "px";
  }
};

spanArrows[1].onclick = () => {
  right_mover_two();
};

spanArrows[0].onclick = () => {
  left_mover_two();
};

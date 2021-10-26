const galleryBig = document.querySelectorAll(".our-story__gallery--img"),
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
};

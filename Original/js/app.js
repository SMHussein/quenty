const btn = document.querySelector(".header__collapse__button");
const nav = document.querySelector(".header__collapse__nav");
const dash = document.querySelectorAll(".header__collapse__dash");

btn.addEventListener("click", function () {
  for (let i of dash) {
    i.classList.toggle("header__collapse__dash--pink");
  }
  nav.classList.toggle("header__collapse__nav--visible");
});

/////

window.addEventListener("scroll", () => {
  let content = document.querySelectorAll(".section");
  let ourStay = document.querySelectorAll(".our-stay__heading");
  let ourStayImg = document.querySelectorAll(".our-stay__gallery--item");
  let card = document.querySelectorAll(".card");
  let cardbtn = document.querySelectorAll(".card__btn");
  let brideGroomPart = document.querySelectorAll(".bride-groom__part");
  let whenWhereHeader = document.querySelectorAll(".when-where__header");
  let whenWhereCard = document.querySelectorAll(".when-where__card");
  let ourServicesCard = document.querySelectorAll(".our-services__card");
  let blog = document.querySelectorAll(".blog__ani");

  let screenPosition = window.innerHeight;

  for (let bm of blog) {
    if (bm.getBoundingClientRect().top < screenPosition / 0.5) {
      bm.classList.add("our-stay--active");
    } else {
      bm.classList.remove("our-stay--active");
    }
  }

  for (let osc of ourServicesCard) {
    if (osc.getBoundingClientRect().top < screenPosition / 0.5) {
      osc.classList.add("our-stay--active");
    } else {
      osc.classList.remove("our-stay--active");
    }
  }

  for (let wwh of whenWhereHeader) {
    if (wwh.getBoundingClientRect().top < screenPosition / 0.5) {
      wwh.classList.add("our-stay--active");
    } else {
      wwh.classList.remove("our-stay--active");
    }
  }

  for (let wwc of whenWhereCard) {
    if (wwc.getBoundingClientRect().top < screenPosition / 0.5) {
      wwc.classList.add("our-stay--active");
    } else {
      wwc.classList.remove("our-stay--active");
    }
  }

  for (let p of brideGroomPart) {
    if (p.getBoundingClientRect().top < screenPosition / 0.5) {
      p.classList.add("our-stay--active");
    } else {
      p.classList.remove("our-stay--active");
    }
  }

  for (let b of cardbtn) {
    if (b.getBoundingClientRect().top < screenPosition / 0.5) {
      b.classList.add("our-stay--active");
    } else {
      b.classList.remove("our-stay--active");
    }
  }

  for (let c of card) {
    if (c.getBoundingClientRect().top < screenPosition / 0.5) {
      c.classList.add("our-stay--active");
    } else {
      c.classList.remove("our-stay--active");
    }
  }

  for (let z of ourStay) {
    if (z.getBoundingClientRect().top < screenPosition / 0.5) {
      z.classList.add("our-stay--active");
    } else {
      z.classList.remove("our-stay--active");
    }
  }

  for (let i of content) {
    if (i.getBoundingClientRect().top < screenPosition / 0.5) {
      i.classList.add("section--active");
    } else {
      i.classList.remove("section--active");
    }
  }

  for (let y of ourStayImg) {
    if (y.getBoundingClientRect().top < screenPosition / 0.5) {
      y.classList.add("our-stay--active");
    } else {
      y.classList.remove("our-stay--active");
    }
  }
});

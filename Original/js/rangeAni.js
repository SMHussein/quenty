window.addEventListener("scroll", () => {
  let EventPlaningText = document.querySelector(".event-planing__text");
  let EventPlaningRangeContainer = document.querySelectorAll(
    ".event-planing__range__container"
  );
  let EventPlaningRangeFill = document.querySelectorAll(
    ".event-planing__range__fill"
  );

  let screenPosition = window.innerHeight;

  for (let eprf of EventPlaningRangeFill) {
    if (eprf.getBoundingClientRect().top < screenPosition) {
      eprf.classList.add("event-planing__range__fill--right");
    } else {
      eprf.classList.remove("event-planing__range__fill--right");
    }
  }

  for (let eprc of EventPlaningRangeContainer) {
    if (eprc.getBoundingClientRect().top < screenPosition / 0.5) {
      eprc.classList.add("our-stay--active");
    } else {
      eprc.classList.remove("our-stay--active");
    }
  }

  if (EventPlaningText.getBoundingClientRect().top < screenPosition / 0.5) {
    EventPlaningText.classList.add("our-stay--active");
  } else {
    EventPlaningText.classList.remove("our-stay--active");
  }
});

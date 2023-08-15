const carousel = document.querySelector(".skills-icons-carousel");
console.log(carousel);
console.log("hi");

let isDragging = false;
let startingCursorX = null;
let startingScrollLeft = null;

function dragStart(e) {
  // records initial cursor position and scroll position of the carousel
  console.log(e);
  isDragging = true;
  startingCursorX = e.touches[0].pageX;
  startingScrollLeft = carousel.scrollLeft;
}

function dragging(e) {
  if (!isDragging) return;
  console.log(e, "drag");
  // updates scroll position of carousel based on cursor movement
  carousel.scrollLeft =
    startingScrollLeft - (e.touches[0].pageX - startingCursorX);
  // scroll position = initial scroll position - (dragging cursor position - initial cursor position)
  // 0   = 0 - (x - 203)
}

function animateCarousel() {
  // for mobile devices
  //   carousel.addEventListener("touchstart", touchStart);
  //   carousel.addEventListener("touchmove", touchMoving);
  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("touchstart", dragStart);
}

export default animateCarousel;

const carousel = document.querySelector(".skills-icons-carousel");
const carouselChildren = [...carousel.children];
const cardWidth = document.querySelector(".skill-card").offsetWidth;
const cardsPerView = Math.round(carousel.offsetWidth / cardWidth);
console.log(cardsPerView);
console.log(carousel);
console.log("hi");

const initialScrollPosition = cardsPerView * cardWidth + 10 * cardsPerView;

carousel.scrollLeft = initialScrollPosition;

let isDragging = false;
let startingCursorX = null;
let startingScrollLeft = null;

// copy the last few cards from the end to the beginning of the carousel
carouselChildren
  .slice(-cardsPerView)
  .reverse()
  .forEach((card) => carousel.insertAdjacentHTML("afterbegin", card.outerHTML));
// copy the first few cards from the beginning to the end of the carousel
carouselChildren
  .slice(0, cardsPerView)
  .forEach((card) => carousel.insertAdjacentHTML("beforeend", card.outerHTML));

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

function dragEnd() {
  isDragging = false;
  console.log("end");
}

function infiniteScroll() {
  console.log(carousel.scrollLeft);
  if (carousel.scrollLeft === 0) {
    carousel.scrollLeft = carousel.scrollWidth - 2 * initialScrollPosition + 10;
    console.log("LEFT END");
  }

  if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
    console.log("RIGHT END");
    carousel.scrollLeft =
      initialScrollPosition +
      (initialScrollPosition - carousel.offsetWidth - 10);
  }
}

function animateCarousel() {
  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("touchend", dragEnd);
  carousel.addEventListener("scroll", infiniteScroll);
}

export default animateCarousel;

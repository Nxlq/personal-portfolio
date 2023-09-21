const sectionContainer = document.querySelector(".skills");
const carousel = document.querySelector(".skills-icons-carousel");
const carouselChildrenBeforeInserts = [...carousel.children];
const cardWidth = document.querySelector(".skill-card").offsetWidth;
const cardsPerView = Math.round(carousel.offsetWidth / cardWidth);
console.log(cardsPerView);
console.log(carousel);
console.log("hi");

const initialScrollPosition = cardsPerView * cardWidth + 10 * cardsPerView;

// carousel.scrollLeft = initialScrollPosition;

let isDragging = false;
let startingCursorX = null;
let startingScrollLeft = null;
let carouselTimeout;

const autoPlay = () => {
  // automove the carousel one card width + gap px after timer ends
  carouselTimeout = setTimeout(() => {
    carousel.scrollLeft += cardWidth + 9;
  }, 2500);
};
autoPlay();

// copy the last few cards from the end to the beginning of the carousel
carouselChildrenBeforeInserts
  .slice(-cardsPerView)
  .reverse()
  .forEach((card) => carousel.insertAdjacentHTML("afterbegin", card.outerHTML));
// copy the first few cards from the beginning to the end of the carousel
carouselChildrenBeforeInserts
  .slice(0, cardsPerView)
  .forEach((card) => carousel.insertAdjacentHTML("beforeend", card.outerHTML));

const carouselChildrenAfterInserts = [...carousel.children];
// const initialScrollPosition = carousel.scrollLeft;

function dragStart(e) {
  // records initial cursor position and scroll position of the carousel
  console.log(e);
  isDragging = true;
  startingCursorX = e.touches[0].pageX;
  startingScrollLeft = carousel.scrollLeft;
  carousel.classList.add("dragging");
  carouselChildrenAfterInserts.forEach((skill) =>
    skill.classList.remove("untouched")
  );
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
  carousel.classList.remove("dragging");
  console.log("end");
}

function infiniteScroll() {
  // if the left end of the carousel is reached
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");

    carousel.scrollLeft = carousel.scrollWidth - 2 * initialScrollPosition + 10;

    carousel.classList.remove("no-transition");
  }

  // if the right end of the carousel is reached
  if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");

    carousel.scrollLeft =
      initialScrollPosition +
      (initialScrollPosition - carousel.offsetWidth - 10);

    // carousel.scrollLeft =
    //   initialScrollPosition + cardWidth + (cardsPerView - 1) * 10;

    carousel.classList.remove("no-transition");
  }

  // cancel existing timeout while scrolling
  clearTimeout(carouselTimeout);

  // autoplay carousel not being hovered over or focused by user
  if (
    !sectionContainer.matches(":active") ||
    !sectionContainer.matches(":hover")
  )
    autoPlay();
  // if (!sectionContainer.matches("dragging")) autoPlay();
}

function animateCarousel() {
  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("touchend", dragEnd);
  carousel.addEventListener("scroll", infiniteScroll);
}

export default animateCarousel;

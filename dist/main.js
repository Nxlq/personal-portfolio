/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/skills.js":
/*!***********************!*\
  !*** ./src/skills.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animateCarousel);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills */ "./src/skills.js");


(0,_skills__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
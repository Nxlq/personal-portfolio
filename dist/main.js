(()=>{"use strict";const e=document.querySelector(".skills-icons-carousel"),o=[...e.children],t=document.querySelector(".skill-card").offsetWidth,n=Math.round(e.offsetWidth/t);console.log(n),console.log(e),console.log("hi");let c=!1,l=null,s=null;function r(o){console.log(o),c=!0,l=o.touches[0].pageX,s=e.scrollLeft}function d(o){c&&(console.log(o,"drag"),e.scrollLeft=s-(o.touches[0].pageX-l))}function i(){c=!1,console.log("end")}o.slice(-n).reverse().forEach((o=>e.insertAdjacentHTML("afterbegin",o.outerHTML))),o.slice(0,n).forEach((o=>e.insertAdjacentHTML("beforeend",o.outerHTML))),e.addEventListener("touchmove",d),e.addEventListener("touchstart",r),e.addEventListener("touchend",i)})();
//# sourceMappingURL=main.js.map
(()=>{"use strict";const o=document.querySelector(".skills-icons-carousel");console.log(o),console.log("hi");let e=!1,l=null,t=null;function c(c){console.log(c),e=!0,l=c.touches[0].pageX,t=o.scrollLeft}function s(c){e&&(console.log(c,"drag"),o.scrollLeft=t-(c.touches[0].pageX-l))}o.addEventListener("touchmove",s),o.addEventListener("touchstart",c)})();
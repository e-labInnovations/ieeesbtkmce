/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/blocks/front-gallery/script.js ***!
  \********************************************/
document.addEventListener("DOMContentLoaded", function (event) {
  gsap.utils.toArray(".marquee").forEach(marquee => {
    if (marquee.parentElement.scrollHeight > marquee.parentElement.clientHeight) {
      const tl = gsap.timeline({
        repeat: -1
      });
      tl.to(marquee, {
        y: "-100%",
        duration: 8,
        ease: "linear"
      }).set(marquee, {
        y: "100%"
      });
      marquee.addEventListener("mouseenter", () => {
        tl.pause();
      });
      marquee.addEventListener("mouseleave", () => {
        tl.play();
      });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=script.js.map
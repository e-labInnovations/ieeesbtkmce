/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./src/blocks/latest-news/script.js ***!
  \******************************************/
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll("#latest-news-section").forEach(latestNewsSection => {
    const nextButton = latestNewsSection.querySelector("#news-next");
    const prevButton = latestNewsSection.querySelector("#news-prev");
    nextButton.addEventListener("click", () => {
      const activeImg = latestNewsSection.querySelector(".news-front-img");
      const nextImg = latestNewsSection.querySelector(".news-back-img");
      const hiddenBackImg = latestNewsSection.querySelector(".news-hidden-back-img");
      const hiddenFrontImg = latestNewsSection.querySelector(".news-hidden-front-img");
      activeImg.classList.replace("news-front-img", "news-hidden-front-img");
      nextImg.classList.replace("news-back-img", "news-front-img");
      hiddenBackImg.classList.replace("news-hidden-back-img", "news-back-img");
      hiddenFrontImg.classList.replace("news-hidden-front-img", "news-hidden-back-img");
    });
    prevButton.addEventListener("click", () => {
      const activeImg = latestNewsSection.querySelector(".news-front-img");
      const nextImg = latestNewsSection.querySelector(".news-back-img");
      const hiddenBackImg = latestNewsSection.querySelector(".news-hidden-back-img");
      const hiddenFrontImg = latestNewsSection.querySelector(".news-hidden-front-img");
      activeImg.classList.replace("news-front-img", "news-back-img");
      nextImg.classList.replace("news-back-img", "news-hidden-back-img");
      hiddenBackImg.classList.replace("news-hidden-back-img", "news-hidden-front-img");
      hiddenFrontImg.classList.replace("news-hidden-front-img", "news-front-img");
    });
  });
});
/******/ })()
;
//# sourceMappingURL=script.js.map
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/blocks/faq/view.js ***!
  \********************************/
document.querySelectorAll(".faq").forEach(faqBlock => {
  const setSelectedQuestion = (faqBlock, qBlock) => {
    const answerOutP = faqBlock.querySelector("#faq-answer");
    const answerInP = faqBlock.querySelector(`#${qBlock.dataset.answer}`);
    const isMobile = window.screen.width < 640;
    faqBlock.querySelectorAll(".faq-item-q").forEach(_qBlock => {
      _qBlock.classList.add("border-[1px]", "border-gray-800");
      _qBlock.classList.remove("border-[3px]", "border-primary-800");
      _qBlock.querySelector("svg").classList.remove(isMobile ? "-rotate-90" : "rotate-180", "fill-primary-800");
      _qBlock.querySelector("svg").classList.add(isMobile ? "rotate-90" : "rotate-0", "fill-gray-200");
    });
    qBlock.classList.remove("border-[1px]", "border-gray-800");
    qBlock.classList.add("border-[3px]", "border-primary-800");
    qBlock.querySelector("svg").classList.remove(isMobile ? "rotate-90" : "rotate-0", "fill-gray-200");
    qBlock.querySelector("svg").classList.add(isMobile ? "-rotate-90" : "rotate-180", "fill-primary-800");
    answerOutP.innerText = answerInP.innerText;
    // gsap.fromTo(
    //   answerOutP.parentElement,
    //   { height: "auto" },
    //   { height: "auto", duration: 0.3, ease: "ease-out" },
    // );
    gsap.fromTo(answerOutP, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.3,
      delay: 0.1
    });

    //Mobile
    if (window.screen.width < 640) {
      faqBlock.querySelectorAll('[id^="faq-item-a-"]').forEach(ansDiv => {
        ansDiv.classList.remove("flex");
        ansDiv.classList.add("hidden");
        gsap.fromTo(ansDiv.querySelector("p"), {
          opacity: 1
        }, {
          opacity: 0,
          duration: 0.3,
          delay: 0.1
        });
        gsap.fromTo(ansDiv, {
          height: "auto"
        }, {
          height: 0,
          duration: 0.3,
          ease: "ease-out"
        });
      });
      answerInP.classList.remove("hidden");
      answerInP.classList.add("flex");
      gsap.fromTo(answerInP, {
        height: 0
      }, {
        height: "auto",
        duration: 0.3,
        ease: "ease-out"
      });
      gsap.fromTo(answerInP.querySelector("p"), {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.3,
        delay: 0.1
      });
    }
  };
  faqBlock.querySelectorAll(".faq-item-q").forEach((qBlock, index) => {
    if (index == 0) {
      setSelectedQuestion(faqBlock, qBlock);
    }
    qBlock.addEventListener("click", () => {
      setSelectedQuestion(faqBlock, qBlock);
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
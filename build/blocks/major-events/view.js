/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/blocks/major-events/view.js ***!
  \*****************************************/
document.querySelectorAll('.major-events-hosted').forEach(mef => {
  let nextBtn = mef.querySelector('#meh-next');
  let prevBtn = mef.querySelector('#meh-prev');
  let sliderContiner = mef.querySelector('#meh-slider-container');
  let slider = mef.querySelector('#meh-slider');
  let slides = slider.querySelectorAll('.slide');
  let elementsToShow = 3;
  let sliderContinerWidth = sliderContiner.clientWidth;
  let slideWidth = sliderContinerWidth / elementsToShow;
  const changeButtons = () => {
    let sliderMargin = Math.round(+slider.style.marginLeft.slice(0, -2));
    const enableButton = (btn, enable) => {
      if (enable) {
        btn.classList.remove('border-gray-400');
        btn.classList.add('border-primary-800');
        btn.querySelector('svg').classList.remove('fill-gray-400');
        btn.querySelector('svg').classList.add('fill-primary-800');
      } else {
        btn.classList.remove('border-primary-800');
        btn.classList.add('border-gray-400');
        btn.querySelector('svg').classList.remove('fill-primary-800');
        btn.querySelector('svg').classList.add('fill-gray-400');
      }
    };

    //Enable prevBtn
    if (sliderMargin != 0 && slides.length > elementsToShow) {
      enableButton(prevBtn, true);
    } else {
      enableButton(prevBtn, false);
    }

    //Enable nextBtn
    if (sliderMargin != Math.round(-slideWidth * (slides.length - elementsToShow)) && slides.length > elementsToShow) {
      enableButton(nextBtn, true);
    } else {
      enableButton(nextBtn, false);
    }
  };
  const mehInit = () => {
    slider.style.marginLeft = 0;
    if (document.body.clientWidth > 1536) {
      elementsToShow = 4;
    } else if (document.body.clientWidth > 1024) {
      elementsToShow = 3;
    } else if (document.body.clientWidth > 768) {
      elementsToShow = 2;
    } else {
      elementsToShow = 1;
    }
    sliderContinerWidth = sliderContiner.clientWidth;
    slideWidth = sliderContinerWidth / elementsToShow;
    slider.style.width = slides.length * slideWidth + 'px';
    slider.style.transition = 'margin';
    slider.style.transitionDuration = '700ms';
    slider.style.transitionTimingFunction = 'cubic-bezier(0.42, 0, 0.58, 1.0)';
    slides.forEach(silde => {
      silde.style.width = slideWidth + 'px';
    });
    changeButtons();
  };
  mehInit();
  window.addEventListener('resize', () => {
    mehInit();
  });
  prevBtn.addEventListener('click', () => {
    if (Math.round(+slider.style.marginLeft.slice(0, -2)) != 0 && slides.length > elementsToShow) {
      slider.style.marginLeft = +slider.style.marginLeft.slice(0, -2) + slideWidth + 'px';
    }
    changeButtons();
  });
  nextBtn.addEventListener('click', () => {
    if (Math.round(+slider.style.marginLeft.slice(0, -2)) != Math.round(-slideWidth * (slides.length - elementsToShow)) && slides.length > elementsToShow) {
      slider.style.marginLeft = +slider.style.marginLeft.slice(0, -2) - slideWidth + 'px';
    }
    changeButtons();
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
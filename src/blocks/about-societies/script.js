document.querySelectorAll(".societies-slider").forEach((sl) => {
  let nextBtn = sl.querySelector("#sl-next");
  let prevBtn = sl.querySelector("#sl-prev");
  let sliderContainer = sl.querySelector("#sl-slider-container");
  let slider = sl.querySelector("#sl-slider");
  let slides = slider.querySelectorAll(".slide");

  let elementsToShow = 3;
  let sliderContainerWidth = sliderContainer.clientWidth;
  let slideWidth = sliderContainerWidth / elementsToShow;

  const changeButtons = () => {
    let sliderMargin = Math.round(+slider.style.marginLeft.slice(0, -2));

    const enableButton = (btn, enable) => {
      if (enable) {
        btn.classList.remove("border-gray-400");
        btn.classList.add("border-primary-800");

        btn.querySelector("svg").classList.remove("text-gray-400");
        btn.querySelector("svg").classList.add("text-primary-800");
      } else {
        btn.classList.remove("border-primary-800");
        btn.classList.add("border-gray-400");

        btn.querySelector("svg").classList.remove("text-primary-800");
        btn.querySelector("svg").classList.add("text-gray-400");
      }
    };

    //Enable prevBtn
    if (sliderMargin != 0 && slides.length > elementsToShow) {
      enableButton(prevBtn, true);
    } else {
      enableButton(prevBtn, false);
    }

    //Enable nextBtn
    if (
      sliderMargin !=
        Math.round(-slideWidth * (slides.length - elementsToShow)) &&
      slides.length > elementsToShow
    ) {
      enableButton(nextBtn, true);
    } else {
      enableButton(nextBtn, false);
    }
  };

  const slInit = () => {
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

    sliderContainerWidth = sliderContainer.clientWidth;
    slideWidth = sliderContainerWidth / elementsToShow;

    slider.style.width = slides.length * slideWidth + "px";
    slider.style.transition = "margin";
    slider.style.transitionDuration = "700ms";
    slider.style.transitionTimingFunction = "cubic-bezier(0.42, 0, 0.58, 1.0)";

    slides.forEach((slide) => {
      slide.style.width = slideWidth + "px";
    });
    changeButtons();
  };

  slInit();

  window.addEventListener("resize", () => {
    slInit();
  });

  const goPrev = () => {
    if (
      Math.round(+slider.style.marginLeft.slice(0, -2)) != 0 &&
      slides.length > elementsToShow
    ) {
      slider.style.marginLeft =
        +slider.style.marginLeft.slice(0, -2) + slideWidth + "px";
    }

    changeButtons();
  };

  const goNext = () => {
    if (
      Math.round(+slider.style.marginLeft.slice(0, -2)) !=
        Math.round(-slideWidth * (slides.length - elementsToShow)) &&
      slides.length > elementsToShow
    ) {
      slider.style.marginLeft =
        +slider.style.marginLeft.slice(0, -2) - slideWidth + "px";
    }

    changeButtons();
  };

  prevBtn.addEventListener("click", goPrev);

  nextBtn.addEventListener("click", goNext);

  //Mobile Swipe
  var mc = new Hammer(sliderContainer);
  mc.on("swipeleft swiperight", function (ev) {
    if (ev.type == "swipeleft") {
      goNext();
    } else if (ev.type == "swiperight") {
      goPrev();
    }
  });
});

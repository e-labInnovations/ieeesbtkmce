/** Navbar Start **/
document.querySelectorAll("nav").forEach((nav) => {
  const hamburgerMenuButton = nav.querySelector("#hamburger-menu-button");
  const menuContainer = nav.querySelector("#navbar-dropdown");

  hamburgerMenuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
  });
});
/** Navbar End **/

/** Counter Start **/
document.addEventListener("DOMContentLoaded", function (event) {
  gsap.registerPlugin(ScrollTrigger);

  const countersCounts = document.querySelectorAll(".counters-count");
  gsap.from(countersCounts, {
    textContent: 0,
    duration: 1,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".counters",
      start: "50px 80%",
      end: "bottom-=50px",
      toggleActions: "play none none reverse",
      markers: false,
    },
    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  });
});
/** Counter End **/

/** Major Events Start **/
document.querySelectorAll(".major-events-hosted").forEach((mef) => {
  let nextBtn = mef.querySelector("#meh-next");
  let prevBtn = mef.querySelector("#meh-prev");
  let sliderContainer = mef.querySelector("#meh-slider-container");
  let slider = mef.querySelector("#meh-slider");
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

        btn.querySelector("svg").classList.remove("fill-gray-400");
        btn.querySelector("svg").classList.add("fill-primary-800");
      } else {
        btn.classList.remove("border-primary-800");
        btn.classList.add("border-gray-400");

        btn.querySelector("svg").classList.remove("fill-primary-800");
        btn.querySelector("svg").classList.add("fill-gray-400");
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

  mehInit();

  window.addEventListener("resize", () => {
    mehInit();
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

  //Mobile Scroll
  var startX = 0;
  var endX = 0;
  sliderContainer.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  sliderContainer.addEventListener("touchmove", function (e) {
    endX = e.touches[0].clientX;
  });

  sliderContainer.addEventListener("touchend", function () {
    var deltaX = endX - startX;

    if (deltaX > 0) {
      // Swipe right
      goPrev();
    } else if (deltaX < 0) {
      // Swipe left
      goNext();
    }
  });
});
/** Major Events End **/

/** FAQ Start **/
const selectedSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
    <path d="M36.6983 18.1819C36.6983 8.26966 28.662 0.233398 18.7498 0.233398C8.83759 0.233398 0.801331 8.26966 0.801331 18.1819C0.801331 28.0941 8.83759 36.1304 18.7498 36.1304C28.662 36.1304 36.6983 28.0941 36.6983 18.1819ZM18.3486 26.0654C18.2198 25.9377 18.1175 25.7859 18.0474 25.6186C17.9773 25.4514 17.9409 25.272 17.9402 25.0906C17.9395 24.9093 17.9745 24.7296 18.0432 24.5618C18.1119 24.394 18.2131 24.2414 18.3408 24.1127L22.8555 19.5625H11.3288C10.9626 19.5625 10.6115 19.4171 10.3525 19.1582C10.0936 18.8992 9.94816 18.5481 9.94816 18.1819C9.94816 17.8157 10.0936 17.4645 10.3525 17.2056C10.6115 16.9467 10.9626 16.8012 11.3288 16.8012H22.8555L18.3408 12.2511C18.2131 12.1223 18.112 11.9695 18.0433 11.8016C17.9746 11.6337 17.9397 11.4539 17.9405 11.2725C17.9413 11.0911 17.9778 10.9116 18.048 10.7443C18.1182 10.577 18.2206 10.4252 18.3494 10.2975C18.4783 10.1698 18.631 10.0687 18.7989 10C18.9668 9.93134 19.1466 9.8964 19.328 9.8972C19.6944 9.89882 20.0451 10.0459 20.3031 10.3061L27.1537 17.2094C27.4103 17.468 27.5543 17.8176 27.5543 18.1819C27.5543 18.5462 27.4103 18.8958 27.1537 19.1544L20.3031 26.0576C20.1753 26.1867 20.0234 26.2892 19.856 26.3594C19.6886 26.4297 19.509 26.4662 19.3274 26.4669C19.1459 26.4676 18.966 26.4325 18.798 26.3636C18.63 26.2947 18.4773 26.1934 18.3486 26.0654Z" fill="#006DA5" />
</svg>
`;
const unSelectedSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
    <path d="M0.801331 18.5208C0.801331 8.60853 8.83759 0.572266 18.7498 0.572266C28.662 0.572266 36.6983 8.60853 36.6983 18.5208C36.6983 28.433 28.662 36.4692 18.7498 36.4692C8.83759 36.4692 0.801331 28.433 0.801331 18.5208ZM19.1511 26.4043C19.2798 26.2766 19.3822 26.1248 19.4522 25.9575C19.5223 25.7903 19.5587 25.6108 19.5595 25.4295C19.5602 25.2482 19.5252 25.0685 19.4564 24.9007C19.3877 24.7329 19.2866 24.5802 19.1588 24.4515L14.6441 19.9014H26.1708C26.537 19.9014 26.8882 19.7559 27.1471 19.497C27.406 19.2381 27.5515 18.8869 27.5515 18.5208C27.5515 18.1546 27.406 17.8034 27.1471 17.5445C26.8882 17.2856 26.537 17.1401 26.1708 17.1401H14.6441L19.1588 12.59C19.2865 12.4611 19.3876 12.3084 19.4563 12.1405C19.525 11.9726 19.5599 11.7928 19.5591 11.6114C19.5583 11.43 19.5218 11.2505 19.4516 11.0832C19.3815 10.9159 19.279 10.7641 19.1502 10.6364C19.0214 10.5087 18.8686 10.4076 18.7007 10.3389C18.5328 10.2702 18.353 10.2353 18.1716 10.2361C17.8052 10.2377 17.4545 10.3848 17.1966 10.645L10.346 17.5483C10.0893 17.8069 9.94533 18.1564 9.94533 18.5208C9.94533 18.8851 10.0893 19.2346 10.346 19.4932L17.1966 26.3965C17.3243 26.5255 17.4762 26.6281 17.6436 26.6983C17.8111 26.7685 17.9907 26.805 18.1722 26.8058C18.3538 26.8065 18.5337 26.7714 18.7016 26.7025C18.8696 26.6336 19.0223 26.5323 19.1511 26.4043Z" fill="#D8DDE0" />
</svg>
`;

const setSelectedQuestion = (faqBlock, qBlock) => {
  const answerOutP = faqBlock.querySelector("#faq-answer");
  const answerInP = faqBlock.querySelector(`#${qBlock.dataset.answer}`);

  faqBlock.querySelectorAll(".faq-item-q").forEach((_qBlock) => {
    _qBlock.classList.add("border-[1px]", "border-gray-800");
    _qBlock.classList.remove("border-[3px]", "border-primary-800");

    _qBlock.querySelector("div").innerHTML = unSelectedSvg;
  });

  qBlock.classList.remove("border-[1px]", "border-gray-800");
  qBlock.classList.add("border-[3px]", "border-primary-800");
  qBlock.querySelector("div").innerHTML = selectedSvg;

  answerOutP.innerText = answerInP.innerText;
};

document.querySelectorAll(".faq").forEach((faqBlock) => {
  faqBlock.querySelectorAll(".faq-item-q").forEach((qBlock, index) => {
    if (index == 0) {
      setSelectedQuestion(faqBlock, qBlock);
    }

    qBlock.addEventListener("click", () => {
      setSelectedQuestion(faqBlock, qBlock);
    });
  });
});
/** FAQ End **/

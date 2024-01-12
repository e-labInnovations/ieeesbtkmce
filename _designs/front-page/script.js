/** Navbar Start **/
document.querySelectorAll("nav").forEach((nav) => {
  const hamburgerMenuButton = nav.querySelector("#hamburger-menu-button");
  const menuContainer = nav.querySelector("#navbar-dropdown");

  hamburgerMenuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
  });
});
/** Navbar End **/

/** Latest Events Start **/
document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelectorAll("#latest-news-section")
    .forEach((latestNewsSection) => {
      const nextButton = latestNewsSection.querySelector("#news-next");
      const prevButton = latestNewsSection.querySelector("#news-prev");
      const activeImg = latestNewsSection.querySelector(".news-front-img");
      const imagesDiv = activeImg.parentElement;

      const lnInit = () => {
        const activeImg = latestNewsSection.querySelector(".news-front-img");
        const imagesDiv = activeImg.parentElement;
        const imagesDivWidth = imagesDiv.offsetWidth - 2;
        activeImg.parentElement.style.height =
          (imagesDivWidth / 1.675) * 1.1764705882352942 + "px";
      };
      lnInit();

      window.addEventListener("resize", () => {
        lnInit();
      });

      const doNext = () => {
        const activeImg = latestNewsSection.querySelector(".news-front-img");
        const nextImg = latestNewsSection.querySelector(".news-back-img");
        const hiddenBackImg = latestNewsSection.querySelector(
          ".news-hidden-back-img",
        );
        const hiddenFrontImg = latestNewsSection.querySelector(
          ".news-hidden-front-img",
        );

        activeImg.classList.replace("news-front-img", "news-hidden-front-img");
        nextImg.classList.replace("news-back-img", "news-front-img");
        hiddenBackImg.classList.replace(
          "news-hidden-back-img",
          "news-back-img",
        );
        hiddenFrontImg.classList.replace(
          "news-hidden-front-img",
          "news-hidden-back-img",
        );
      };

      const doPrev = () => {
        const activeImg = latestNewsSection.querySelector(".news-front-img");
        const nextImg = latestNewsSection.querySelector(".news-back-img");
        const hiddenBackImg = latestNewsSection.querySelector(
          ".news-hidden-back-img",
        );
        const hiddenFrontImg = latestNewsSection.querySelector(
          ".news-hidden-front-img",
        );

        activeImg.classList.replace("news-front-img", "news-back-img");
        nextImg.classList.replace("news-back-img", "news-hidden-back-img");
        hiddenBackImg.classList.replace(
          "news-hidden-back-img",
          "news-hidden-front-img",
        );
        hiddenFrontImg.classList.replace(
          "news-hidden-front-img",
          "news-front-img",
        );
      };

      var mc = new Hammer(imagesDiv);
      mc.on("swipeleft swiperight", function (ev) {
        if (ev.type == "swipeleft") {
          doNext();
        } else if (ev.type == "swiperight") {
          doPrev();
        }
      });

      nextButton.addEventListener("click", doNext);
      prevButton.addEventListener("click", doPrev);
    });
});
/** Latest Events End **/

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
/** Major Events End **/

/** Alumni Testimonials Start **/
document.querySelectorAll(".alumni-testimonials").forEach((atSection) => {
  const file =
    "http://ieeesbtkmce.localhost/wp-json/alumni_testimonials/v1/all";
  const contentEle = atSection.querySelector("#at-content");
  const nameEle = atSection.querySelector("#at-name");
  const batchEle = atSection.querySelector("#at-batch");
  const svgEle = atSection.querySelector("svg");
  const totalTestimonialFields = 15;
  const defaultContent = contentEle.innerText;

  const generateChart = (data) => {
    const svg = d3.select(svgEle);
    let shuffledData = Array.from(data).sort(() => Math.random() - 0.5);
    const circles = svg.selectAll("circle");
    const maxTestimonials = Math.min(
      shuffledData.length,
      totalTestimonialFields,
    );

    //additional radius storage
    circles.attr("data-r", function () {
      const radius = d3.select(this).attr("r");
      return radius;
    });

    shuffledData = shuffledData.slice(0, maxTestimonials).map((data, i) => {
      return { ...data, r: d3.select(circles.nodes()[i]).attr("r") };
    });

    const defs = svg.append("defs");
    shuffledData.forEach((obj, i) => {
      defs
        .append("pattern")
        .attr("id", "pattern_" + obj.id)
        .attr("width", 1)
        .attr("height", 1)
        .attr("patternUnits", "objectBoundingBox")
        .append("svg:image")
        .style("opacity", 0)
        .attr("xlink:href", obj.img)
        .attr("width", 2 * obj.r)
        .style("opacity", 1);

      d3.select(circles.nodes()[i])
        .attr("fill", () => {
          return "url(#pattern_" + obj.id + ")";
        })
        .on("mouseover", function (e) {
          let currentCircle = d3.select(this);
          adjustNeighbors(
            currentCircle.attr("cx"),
            currentCircle.attr("cy"),
            currentCircle.attr("r"),
            false,
          );

          nameEle.classList.remove("invisible");
          batchEle.classList.remove("invisible");
          nameEle.classList.add("visible");
          batchEle.classList.add("visible");
          nameEle.innerText = obj.name;
          batchEle.innerText = obj.batch;
          contentEle.innerText = obj.content;

          currentCircle.style("stroke", "#0B567F");

          let circleRadius = obj.r * 1.3;
          //Circle radius
          currentCircle
            .transition()
            .ease(d3.easePolyInOut)
            .duration(200)
            .attr("r", circleRadius);
          //Image width
          d3.select("#pattern_" + obj.id)
            .select("image")
            .transition()
            .ease(d3.easePolyInOut)
            .duration(200)
            .attr("width", 2 * circleRadius);
        })
        .on("mouseout", function (e) {
          let currentCircle = d3.select(this);
          adjustNeighbors(
            currentCircle.attr("cx"),
            currentCircle.attr("cy"),
            currentCircle.attr("r"),
            true,
          );

          nameEle.classList.add("invisible");
          batchEle.classList.add("invisible");
          nameEle.classList.remove("visible");
          batchEle.classList.remove("visible");
          contentEle.innerText = defaultContent;

          currentCircle.style("stroke", "none");

          //Circle radius
          currentCircle
            .transition()
            .ease(d3.easeExpInOut)
            .duration(200)
            .attr("r", obj.r);
          //Image width
          d3.select("#pattern_" + obj.id)
            .select("image")
            .transition()
            .ease(d3.easeExpInOut)
            .duration(200)
            .attr("width", 2 * obj.r);
        });
    });

    function adjustNeighbors(x, y, r, scaleUp) {
      x = parseFloat(x);
      y = parseFloat(y);
      r = parseFloat(r);

      let circleRadius = r * 1.4;
      r = circleRadius; //+ 20;

      circles.nodes().map((circle) => {
        let cir = d3.select(circle);

        let x2 = parseFloat(cir.attr("cx"));
        let y2 = parseFloat(cir.attr("cy"));
        let r2 = parseFloat(cir.attr("data-r"));

        var d = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));

        if (d < r + r2 || d === r + r2) {
          // Calculate newR2 to avoid intersection or touching
          var newR2 = d - r;
          // Ensure r2 is not negative (which would make the circle disappear)
          newR2 = Math.max(newR2, 0);
          let cirFill = cir.attr("fill");
          const patternId = cirFill.includes("url")
            ? cirFill.slice(4, -1)
            : null; // Remove first 4 characters and last character

          if (scaleUp) {
            //Circle radius
            cir.transition().ease(d3.easeExpInOut).duration(200).attr("r", r2);

            //Image width
            if (patternId) {
              d3.select(patternId)
                .select("image")
                .transition()
                .ease(d3.easeExpInOut)
                .duration(200)
                .attr("width", 2 * r2);
            }
          } else {
            //Circle radius
            cir
              .transition()
              .ease(d3.easeExpInOut)
              .duration(200)
              .attr("r", newR2);

            //Image width
            if (patternId) {
              d3.select(patternId)
                .select("image")
                .transition()
                .ease(d3.easeExpInOut)
                .duration(200)
                .attr("width", 2 * newR2);
            }
          }
        }
      });
    }
  };

  (async () => {
    function generateRandomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }
    data = await d3.json(file).then((data) => data);
    generateChart(data);
  })();
});
/** Alumni Testimonials End **/

/** FAQ Start **/
document.querySelectorAll(".faq").forEach((faqBlock) => {
  const setSelectedQuestion = (faqBlock, qBlock) => {
    const answerOutP = faqBlock.querySelector("#faq-answer");
    const answerInP = faqBlock.querySelector(`#${qBlock.dataset.answer}`);

    const isMobile = window.screen.width < 640;

    faqBlock.querySelectorAll(".faq-item-q").forEach((_qBlock) => {
      _qBlock.classList.add("border-[1px]", "border-gray-800");
      _qBlock.classList.remove("border-[3px]", "border-primary-800");

      _qBlock
        .querySelector("svg")
        .classList.remove(
          isMobile ? "-rotate-90" : "rotate-180",
          "fill-primary-800",
        );
      _qBlock
        .querySelector("svg")
        .classList.add(isMobile ? "rotate-90" : "rotate-0", "fill-gray-200");
    });

    qBlock.classList.remove("border-[1px]", "border-gray-800");
    qBlock.classList.add("border-[3px]", "border-primary-800");
    qBlock
      .querySelector("svg")
      .classList.remove(isMobile ? "rotate-90" : "rotate-0", "fill-gray-200");
    qBlock
      .querySelector("svg")
      .classList.add(
        isMobile ? "-rotate-90" : "rotate-180",
        "fill-primary-800",
      );

    answerOutP.innerText = answerInP.innerText;
    // gsap.fromTo(
    //   answerOutP.parentElement,
    //   { height: "auto" },
    //   { height: "auto", duration: 0.3, ease: "ease-out" },
    // );
    gsap.fromTo(
      answerOutP,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, delay: 0.1 },
    );

    //Mobile
    if (window.screen.width < 640) {
      faqBlock.querySelectorAll('[id^="faq-item-a-"]').forEach((ansDiv) => {
        ansDiv.classList.remove("flex");
        ansDiv.classList.add("hidden");

        gsap.fromTo(
          ansDiv.querySelector("p"),
          { opacity: 1 },
          { opacity: 0, duration: 0.3, delay: 0.1 },
        );

        gsap.fromTo(
          ansDiv,
          { height: "auto" },
          { height: 0, duration: 0.3, ease: "ease-out" },
        );
      });

      answerInP.classList.remove("hidden");
      answerInP.classList.add("flex");

      gsap.fromTo(
        answerInP,
        { height: 0 },
        { height: "auto", duration: 0.3, ease: "ease-out" },
      );

      gsap.fromTo(
        answerInP.querySelector("p"),
        { opacity: 0 },
        { opacity: 1, duration: 0.3, delay: 0.1 },
      );
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
/** FAQ End **/

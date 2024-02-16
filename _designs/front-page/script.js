/** Navbar Start **/
document.querySelectorAll("nav").forEach((nav) => {
  const hamburgerMenuButton = nav.querySelector("#hamburger-menu-button");
  const menuContainer = nav.querySelector("#navbar-dropdown");
  const iconOpen = nav.querySelector("#icon-open");
  const iconClose = nav.querySelector("#icon-close");
  let lastScrollTop = 0;
  let defaultMode = nav.classList.contains("dark") ? "dark" : "light";

  hamburgerMenuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });

  window.addEventListener("scroll", function () {
    const currentScrollTop = window.pageYOffset;

    if (currentScrollTop === 0) {
      nav.classList.remove("dark");
      nav.classList.remove("light");
      nav.classList.add(defaultMode);
    } else {
      // Remove the dark class from the nav element if the user has scrolled down
      nav.classList.remove("dark");
      nav.classList.add("light");
    }

    // Hide the nav element if the user has scrolled down more than the last scroll position
    if (currentScrollTop > lastScrollTop) {
      nav.classList.add("hidden");
    } else {
      // Show the nav element if the user has scrolled up less than the last scroll position
      nav.classList.remove("hidden");
    }

    lastScrollTop = currentScrollTop;
  });
});
/** Navbar End **/

(function () {
  var width,
    height,
    largeHeader,
    canvas,
    ctx,
    points,
    target,
    animateHeader = true;

  // Main
  initHeader();
  initAnimation();
  addListeners();

  // window.addEventListener("resize", () => {
  //   initHeader();
  //   initAnimation();
  //   addListeners();
  // });

  function initHeader() {
    largeHeader = document.getElementById("large-header");

    width = largeHeader.clientWidth;
    height = largeHeader.clientHeight;
    target = { x: width / 2, y: height / 2 };

    canvas = document.getElementById("demo-canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    // create points
    points = [];
    for (var x = 0; x < width; x = x + width / 20) {
      for (var y = 0; y < height; y = y + height / 20) {
        var px = x + (Math.random() * width) / 20;
        var py = y + (Math.random() * height) / 20;
        var p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (var i = 0; i < points.length; i++) {
      var closest = [];
      var p1 = points[i];
      for (var j = 0; j < points.length; j++) {
        var p2 = points[j];
        if (!(p1 == p2)) {
          var placed = false;
          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (var i in points) {
      var c = new Circle(
        points[i],
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)",
      );
      points[i].circle = c;
    }
  }

  // Event handling
  function addListeners() {
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  }

  function mouseMove(e) {
    var posx = (posy = 0);
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }

  function resize() {
    width = largeHeader.clientWidth;
    height = largeHeader.clientHeight;
    canvas.width = width;
    canvas.height = height;

    initHeader();
    initAnimation();
  }

  // animation
  function initAnimation() {
    animate();
    for (var i in points) {
      shiftPoint(points[i]);
    }
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (var i in points) {
        // detect points in range
        if (Math.abs(getDistance(target, points[i])) < 4000) {
          points[i].active = 0.3;
          points[i].circle.active = 0.6;
        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0;
        }

        drawLines(points[i]);
        points[i].circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: function () {
        shiftPoint(p);
      },
    });
  }

  // Canvas manipulation
  function drawLines(p) {
    if (!p.active) return;
    for (var i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
      ctx.stroke();
    }
  }

  function Circle(pos, rad, color) {
    var _this = this;

    // constructor
    (function () {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
    })();

    this.draw = function () {
      if (!_this.active) return;
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
      ctx.fill();
    };
  }

  // Util
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
})();

/** Latest News Start **/
document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelectorAll("#latest-news-section")
    .forEach((latestNewsSection) => {
      const nextButton = latestNewsSection.querySelector("#news-next");
      const prevButton = latestNewsSection.querySelector("#news-prev");
      const imagesClasses = {
        default: ".news-item",
        front: "news-front-img",
        back: "news-back-img",
        backHidden: "news-hidden-back-img",
        frontHidden: "news-hidden-front-img",
      };
      const slideDiv = latestNewsSection.querySelector(
        imagesClasses.default,
      ).parentElement;
      const newsItems = latestNewsSection.querySelectorAll(
        imagesClasses.default,
      );
      const disabledClasses = ["pointer-events-none", "opacity-50"];
      const activeNewsItem = {
        title: latestNewsSection.querySelector("#active-news-title"),
        content: latestNewsSection.querySelector("#active-news-content"),
        details: latestNewsSection.querySelector("#active-news-details"),
        register: latestNewsSection.querySelector("#active-news-register"),
      };
      let activePos = 0;

      const setContents = (newsItem) => {
        const contentP = newsItem.querySelector("p");
        const title = contentP.dataset.title;
        const moreDetailsUrl = contentP.dataset.detailsUrl;
        const registerUrl = contentP.dataset.registerUrl;

        activeNewsItem.title.innerHTML = title;
        activeNewsItem.content.innerHTML = contentP.innerHTML;
        activeNewsItem.details.href = moreDetailsUrl ? moreDetailsUrl : "#";
        if (moreDetailsUrl == "#") {
          activeNewsItem.details.classList.add(...disabledClasses);
        } else {
          activeNewsItem.details.classList.remove(...disabledClasses);
        }
        activeNewsItem.register.href = registerUrl ? registerUrl : "#";
        if (registerUrl == "#") {
          activeNewsItem.register.classList.add(...disabledClasses);
        } else {
          activeNewsItem.register.classList.remove(...disabledClasses);
        }
      };

      const setImageClasses = () => {
        newsItems.forEach((newsItem, i) => {
          newsItem.classList.remove(
            imagesClasses.frontHidden,
            imagesClasses.front,
            imagesClasses.back,
            imagesClasses.backHidden,
            "hidden",
          );

          if (i === activePos) {
            newsItem.classList.add(imagesClasses.front);
            setContents(newsItem);
          } else if (i === (activePos + 1) % newsItems.length) {
            newsItem.classList.add(imagesClasses.back);
          } else if (
            i === activePos - 1 ||
            (activePos === 0 && i === newsItems.length - 1)
          ) {
            newsItem.classList.add(imagesClasses.frontHidden);
          } else {
            newsItem.classList.add(imagesClasses.backHidden);
          }
        });
      };

      setImageClasses();

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
        activePos++;
        activePos = activePos >= newsItems.length ? 0 : activePos;
        setImageClasses();
      };

      const doPrev = () => {
        activePos--;
        activePos = activePos < 0 ? newsItems.length - 1 : activePos;
        setImageClasses();
      };

      var mc = new Hammer(slideDiv);
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
/** Latest News End **/

/** Front Gallery Start **/
gsap.utils.toArray(".marquee").forEach((marquee) => {
  if (marquee.parentElement.scrollHeight > marquee.parentElement.clientHeight) {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marquee, { y: "-100%", duration: 8, ease: "linear" }).set(marquee, {
      y: "100%",
    });

    marquee.addEventListener("mouseenter", () => {
      tl.pause();
    });

    marquee.addEventListener("mouseleave", () => {
      tl.play();
    });
  }
});
/** Front Gallery End **/

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
  // const file = "http://ieeesbtkmce.localhost/wp-json/alumni_testimonials/v1/all";
  const file = "./alumni-testimonials.json";
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
        .classList.remove("-rotate-90", "rotate-180", "fill-primary-800");
      _qBlock
        .querySelector("svg")
        .classList.add(isMobile ? "rotate-90" : "rotate-0", "fill-gray-200");
    });

    qBlock.classList.remove("border-[1px]", "border-gray-800");
    qBlock.classList.add("border-[3px]", "border-primary-800");
    qBlock
      .querySelector("svg")
      .classList.remove("rotate-90", "rotate-0", "fill-gray-200");
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

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

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

        activeNewsItem.title.innerText = title;
        activeNewsItem.content.innerText = contentP.innerText.trim();
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

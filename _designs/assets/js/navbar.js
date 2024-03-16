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

/** Navbar Start **/
document.querySelectorAll("nav").forEach((nav) => {
  const hamburgerMenuButton = nav.querySelector("#hamburger-menu-button");
  const menuContainer = nav.querySelector("#navbar-dropdown");

  hamburgerMenuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
  });
});
/** Navbar End **/

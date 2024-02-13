export function initHamburgerMenu() {
  const nav = document.querySelector("nav");
  if (nav) {
    const hamburgerMenuButton = nav.querySelector("#hamburger-menu-button");
    const menuContainer = nav.querySelector("#navbar-dropdown");

    hamburgerMenuButton.addEventListener("click", () => {
      menuContainer.classList.toggle("hidden");
    });
  }
}

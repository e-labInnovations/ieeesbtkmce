/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/blocks/header/view.js ***!
  \***********************************/
document.querySelectorAll('nav').forEach(nav => {
  const hamburgerMenuButton = nav.querySelector('#hamburger-menu-button');
  const menuContainer = nav.querySelector('#navbar-dropdown');
  hamburgerMenuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('hidden');
  });
  nav.querySelectorAll('#dropdownNavbarLink').forEach(dropdownNavbarLink => {
    const linkParent = dropdownNavbarLink.parentElement;
    const currentDropdownNavbar = linkParent.querySelector('#dropdownNavbar');
    dropdownNavbarLink.addEventListener('mouseover', () => {
      if (currentDropdownNavbar.classList.contains('hidden')) {
        nav.querySelectorAll('#dropdownNavbar').forEach(dropdownNavbar => {
          if (!dropdownNavbar.classList.contains('hidden')) {
            dropdownNavbar.classList.add('hidden');
          }
        });
        currentDropdownNavbar.classList.remove('hidden');
      } else {
        currentDropdownNavbar.classList.add('hidden');
      }
    });
    currentDropdownNavbar.addEventListener('mouseleave', () => {
      currentDropdownNavbar.classList.add('hidden');
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
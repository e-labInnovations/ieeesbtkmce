/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./theme-blocks/about-us.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const {
  Fragment
} = wp.element;
wp.blocks.registerBlockType("ieeesbtkmce/about-us", {
  title: "About Us",
  icon: "info",
  attributes: {
    subTitle: {
      type: "String",
      source: 'html',
      selector: 'h3'
    }
  },
  edit: EditComponent,
  save: SaveComponent
});
function EditComponent({
  attributes,
  setAttributes
}) {
  const {
    subTitle
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full sm:w-1/2 p-3 sm:px-8 md:px-10 justify-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex bg-contain bg-no-repeat bg-center bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] p-12 sm:p-8 lg:p-16 xl:p-18 h-"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://picsum.photos/600/600",
    className: "rounded-full object-cover aspect-square h-full w-full shadow",
    alt: "About Us Image"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col justify-center w-full sm:w-1/2 p-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-sans text-3xl my-5 sm:mb-6 text-primary-800"
  }, "About Us"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h3",
    value: subTitle,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: subTitle => setAttributes({
      subTitle
    }),
    placeholder: __('Heading...')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "mb-1 text-xl sm:mb-2 md:mb-2"
  }, "Lorem Ipsum"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "font-light"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error cupiditate nostrum, repellendus harum fugiat architecto! Eum, recusandae quod tempora magnam voluptatibus exercitationem incidunt veritatis delectus expedita porro quasi nam aspernatur aliquam magni dicta debitis quam repudiandae?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "rounded p-2 px-5 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
  }, "More Details")))));
}
function SaveComponent() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48 "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full sm:w-1/2 p-3 sm:px-8 md:px-10 justify-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex bg-contain bg-no-repeat bg-center bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] p-12 sm:p-8 lg:p-16 xl:p-18 h-"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://picsum.photos/600/600",
    className: "rounded-full object-cover aspect-square h-full w-full shadow",
    alt: "About Us Image"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col justify-center w-full sm:w-1/2 p-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-sans text-3xl my-5 sm:mb-6 text-primary-800"
  }, "About Us"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "mb-1 text-xl sm:mb-2 md:mb-2"
  }, "Lorem Ipsum"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "font-light"
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error cupiditate nostrum, repellendus harum fugiat architecto! Eum, recusandae quod tempora magnam voluptatibus exercitationem incidunt veritatis delectus expedita porro quasi nam aspernatur aliquam magni dicta debitis quam repudiandae?"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "rounded p-2 px-5 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
  }, "More Details"))));
}
})();

/******/ })()
;
//# sourceMappingURL=about-us.js.map
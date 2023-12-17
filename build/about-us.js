/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);






const {
  Fragment
} = wp.element;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("ieeesbtkmce/about-us", {
  title: "About Us",
  icon: "info",
  attributes: {
    subTitle: {
      type: "String",
      source: 'html',
      selector: 'h3'
    },
    content: {
      type: "String",
      source: 'html',
      selector: 'p'
    },
    image: {
      type: "object"
    },
    linkObject: {
      type: "object"
    }
  },
  edit: EditComponent,
  save: SaveComponent
});
function EditComponent({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const {
    subTitle,
    content,
    image,
    linkObject
  } = attributes;
  const [isLinkPickerVisible, setIsLinkPickerVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48 "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full sm:w-1/2 p-3 sm:px-8 md:px-10 justify-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex group bg-contain bg-no-repeat bg-center bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] p-12 sm:p-8 lg:p-16 xl:p-18 h-"
  }, image && image.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      image: {
        id: media.id,
        alt: media.alt || "About Us Image",
        url: media.url
      }
    }),
    allowedTypes: ['image'],
    value: image.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image.url,
      onClick: open,
      className: "hidden group-hover:block cursor-edit rounded-full object-cover my-auto aspect-square w-full shadow-inner",
      alt: image.alt
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image.url,
    className: "block group-hover:hidden rounded-full object-cover my-auto aspect-square w-full shadow-inner",
    alt: image.alt
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
    onSelect: media => setAttributes({
      image: {
        id: media.id,
        alt: media.alt || "About Us Image",
        url: media.url
      }
    }),
    allowedTypes: ['image'],
    multiple: false,
    labels: {
      title: 'About Us Image'
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col justify-center w-full sm:w-1/2 p-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-sans text-3xl my-5 sm:mb-6 text-primary-800"
  }, "About Us"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "mb-1 text-xl sm:mb-2 md:mb-2",
    tagName: "h3",
    value: subTitle,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: subTitle => setAttributes({
      subTitle
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Heading...')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "font-light",
    tagName: "p",
    value: content,
    allowedFormats: ['core/bold', 'core/italic'],
    onChange: content => setAttributes({
      content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Content...')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: () => setIsLinkPickerVisible(prev => !prev),
    className: "rounded p-2 px-5 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400 no-underline"
  }, "More Details")))), isLinkPickerVisible && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    position: "middle center",
    onFocusOutside: () => setIsLinkPickerVisible(false)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
    settings: [],
    value: linkObject,
    onChange: newLink => setAttributes({
      linkObject: newLink
    }),
    style: {
      display: 'block',
      width: '80%'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: () => setIsLinkPickerVisible(false),
    style: {
      display: 'block',
      width: '100%'
    }
  }, "Confirm Link")));
}
function SaveComponent({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  const {
    subTitle,
    content,
    image,
    linkObject
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48 "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full sm:w-1/2 p-3 sm:px-8 md:px-10 justify-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex bg-contain bg-no-repeat bg-center bg-[url('https://gcdnb.pbrd.co/images/PkifbtJpKNDA.png?o=1')] p-12 sm:p-8 lg:p-16 xl:p-18 h-"
  }, image && image.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image.url,
    className: "rounded-full object-cover my-auto aspect-square w-full shadow-inner",
    alt: image.alt
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://picsum.photos/600/600",
    className: "rounded-full object-cover my-auto aspect-square w-full shadow-inner",
    alt: "About Us Image"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col justify-center w-full sm:w-1/2 p-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-sans text-3xl my-5 sm:mb-6 text-primary-800"
  }, "About Us"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h3",
    value: subTitle,
    className: "mb-1 text-xl sm:mb-2 md:mb-2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: content,
    className: "font-light"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: linkObject ? linkObject.url : '#',
    className: "rounded p-2 px-5 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400 no-underline"
  }, "More Details"))));
}
})();

/******/ })()
;
//# sourceMappingURL=about-us.js.map
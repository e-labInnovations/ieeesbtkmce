/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/about-vision-and-mission/edit.js":
/*!*****************************************************!*\
  !*** ./src/blocks/about-vision-and-mission/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/about-vision-and-mission/editor.scss");



function Edit({
  attributes,
  setAttributes
}) {
  const {
    vision,
    mission
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-8 flex flex-col gap-6 sm:flex-row md:my-16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full flex-col gap-6 sm:w-1/2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center gap-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-11 w-11 fill-black"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
    xlinkHref: "/icons.svg#icon-vision"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-poppins text-xl text-black"
  }, "Our Vision")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "font-poppins text-base font-light text-black",
    tagName: "p",
    value: vision,
    onChange: vision => setAttributes({
      vision
    }),
    placeholder: "Vision here"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full flex-col gap-6 sm:w-1/2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center gap-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-11 w-11 fill-black"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
    xlinkHref: "/icons.svg#icon-mission"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-poppins text-xl text-black"
  }, "Our Mission")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "font-poppins text-base font-light text-black",
    tagName: "p",
    value: mission,
    onChange: mission => setAttributes({
      mission
    }),
    placeholder: "Mission here"
  }))));
}

/***/ }),

/***/ "./src/blocks/about-vision-and-mission/index.js":
/*!******************************************************!*\
  !*** ./src/blocks/about-vision-and-mission/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/about-vision-and-mission/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/about-vision-and-mission/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/about-vision-and-mission/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/about-vision-and-mission/save.js");






const attributes = {
  vision: {
    type: "String"
  },
  mission: {
    type: "String"
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  attributes,
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      "enable-background": "new 0 0 256 256"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "current",
      d: "M120.2,72.5c-12.3,1.8-23.2,7.2-31.9,15.9c-21.9,21.9-21.9,57.3,0,79.3c26.8,26.8,72,19.7,89.4-14c11.2-21.7,7.1-47.8-10.2-65.2C155.2,76,137.3,70,120.2,72.5z M138.7,81.3c1.2,1.2,1.3,1.7,1.3,5.2v3.8l2.9,1.2c1.6,0.6,3.1,1.1,3.4,1.1c0.3,0,1.6-1.2,3-2.5c2.1-2.1,2.8-2.5,4.2-2.5c1.6,0,2.4,0.7,8.4,6.6c6.1,6.1,6.7,6.8,6.7,8.4c0,1.5-0.5,2.2-2.7,4.4l-2.7,2.7l1.3,3.3l1.3,3.2h3.9c3.5,0,4,0.1,5.2,1.3l1.3,1.4v9.3c-0.1,6.5-0.2,9.6-0.7,10.1c-1.1,1.5-2.8,2-6.2,2h-3.4l-1.2,2.9c-0.6,1.6-1.1,3.1-1.1,3.4c0,0.3,1.2,1.6,2.5,3c2.1,2.1,2.5,2.8,2.5,4.2c0,1.6-0.7,2.4-6.6,8.4c-6.1,6.1-6.8,6.7-8.4,6.7c-1.5,0-2.2-0.5-4.3-2.5c-1.4-1.4-2.7-2.5-3-2.5c-0.3,0-1.8,0.5-3.4,1.1l-3,1.1v3.9c0,3.5-0.1,4-1.3,5.2l-1.4,1.3H128h-9.4l-1.4-1.3c-1.2-1.2-1.3-1.7-1.3-5.2v-3.9l-3.2-1.3l-3.2-1.3l-2.7,2.6c-2.2,2.3-3,2.7-4.5,2.7c-1.6,0-2.4-0.7-8.4-6.6c-6.1-6.1-6.7-6.8-6.7-8.4c0-1.5,0.5-2.2,2.5-4.3c1.4-1.4,2.5-2.7,2.5-3c0-0.3-0.5-1.8-1.1-3.4l-1.2-2.9h-3.4c-3.5,0-5.1-0.5-6.2-2c-0.5-0.6-0.6-3.6-0.7-10.1v-9.3l1.3-1.4c1.2-1.2,1.7-1.3,5.2-1.3h3.8l1.3-3.2l1.3-3.2l-2.7-2.6c-2.3-2.2-2.7-3-2.7-4.5c0-1.6,0.6-2.4,6.6-8.4c6.1-6.1,6.8-6.7,8.4-6.7c1.5,0,2.2,0.5,4.3,2.5c1.4,1.4,2.7,2.5,3,2.5c0.3,0,1.8-0.5,3.4-1.1l2.9-1.2v-4c0-2.2,0.2-4.3,0.4-4.6c0.8-1.3,3.2-1.6,11.9-1.6l9.1-0.1L138.7,81.3z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "current",
      d: "M124,90.8c0,2.7-0.6,4.6-1.7,5.3c-0.3,0.2-2,0.9-3.8,1.4c-1.8,0.6-4.5,1.7-6.1,2.6c-1.6,0.8-3.4,1.5-4,1.5c-0.6,0-2.2-1.1-3.6-2.4l-2.5-2.4l-2.8,2.9l-2.9,2.8l2.4,2.5c2.8,3,2.9,4.1,0.9,7.7c-0.8,1.4-2,4.2-2.6,6c-1.5,4.6-2.4,5.4-6.4,5.4h-3.2v4v4h3.2c1.8,0.1,3.5,0.3,4,0.7c0.5,0.4,1.6,2.5,2.3,4.6c0.8,2.2,2,5.1,2.7,6.6c0.8,1.5,1.4,3.1,1.4,3.7c0,0.6-1.1,2.2-2.4,3.6l-2.4,2.5l2.9,2.8l2.8,2.9l2.5-2.4c3-2.8,4.2-2.9,7.3-1.1c1.2,0.7,4.1,1.9,6.3,2.7c2.3,0.8,4.2,1.5,4.2,1.6c0.8,1,1.3,2.9,1.3,5.1v2.8h4h4v-3.2c0-2.7,0.2-3.4,1.3-4.5c0.7-0.7,2.1-1.4,3.2-1.6c1-0.1,3.7-1.2,6-2.3c2.3-1.1,4.6-2,5.2-2c0.6,0,2.2,1.1,3.6,2.4l2.5,2.4l2.8-2.9l2.9-2.8l-2.4-2.5c-2.8-3-2.9-4.1-0.9-7.7c0.8-1.4,2-4.2,2.6-6c1.5-4.6,2.4-5.4,6.4-5.4h3.2v-4v-4h-3.2c-2.8,0-3.4-0.1-4.5-1.3c-0.7-0.7-1.4-2.1-1.6-3.2c-0.2-1.1-1.2-3.7-2.3-5.8c-1.1-2.2-2-4.5-2-5.1c0-0.7,1-2.2,2.4-3.7l2.4-2.5l-2.9-2.8l-2.8-2.9l-2.5,2.4c-3,2.8-4.2,2.9-7.3,1.1c-1.2-0.7-4.1-1.9-6.3-2.7c-2.2-0.8-4.4-1.9-4.8-2.4c-0.4-0.6-0.7-2.2-0.7-4.1V88h-4h-4V90.8z M135.6,111.1c4,1.9,7.1,4.9,9.1,8.9c1.5,3,1.6,3.7,1.6,8.1c0,4.4-0.2,5.1-1.6,8.1c-2,4-5.1,7-9.1,8.9c-2.5,1.2-3.5,1.4-7.6,1.4c-4.1,0-5.2-0.2-7.6-1.4c-10.8-5.1-14.4-18.8-7.3-28.1c2.2-2.9,4.7-4.8,8.2-6.2C125.4,109,131.5,109.2,135.6,111.1z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "current",
      d: "M123.7,118.2c-2.2,1-5.1,4.1-5.8,6.2c-0.9,2.7-0.4,7.3,1.1,9.4c3.1,4.6,9.1,6.2,13.9,3.6c1.5-0.8,3.1-2.3,3.9-3.5c1.3-1.8,1.4-2.5,1.4-5.8c0-3.3-0.2-4-1.4-5.8c-2.2-3.2-4.5-4.5-8.4-4.6C126.5,117.6,124.6,117.8,123.7,118.2z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "current",
      d: "M173.4,83.2c4.5,4.6,9.8,12.2,12.4,17.8c5.1,11.1,7.3,25.1,5.6,36.2c-2,13.4-7.7,25-17.2,35c-4.9,5.1-5,5.1,3.9,1.6c21.5-8.5,45.8-24.4,63.6-41.6l4.3-4.1l-4.3-4.2c-19.3-18.7-46.9-36.1-69.1-43.7l-3.3-1.1L173.4,83.2z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "current",
      d: "M79.9,81.5c-7.7,2.9-24.3,11.3-32,16.3c-12.4,8-24.2,17.1-33.4,26L10,128l4.3,4.1c9.1,8.8,21.6,18.6,33.2,26c8,5.1,22.5,12.6,30.5,15.7c8.9,3.5,8.8,3.5,4.3-1.1C61,151.2,58,117.9,74.8,92.3c1.3-1.9,4.3-5.6,6.8-8.2c2.5-2.6,4.3-4.7,4.1-4.7C85.4,79.4,82.8,80.3,79.9,81.5z"
    }))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/about-vision-and-mission/save.js":
/*!*****************************************************!*\
  !*** ./src/blocks/about-vision-and-mission/save.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    vision,
    mission
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-8 flex flex-col gap-6 sm:flex-row md:my-16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full flex-col gap-6 sm:w-1/2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center gap-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-11 w-11 fill-black"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
    xlinkHref: "/icons.svg#icon-vision"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-poppins text-xl text-black"
  }, "Our Vision")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "font-poppins text-base font-light text-black",
    tagName: "p",
    value: vision
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full flex-col gap-6 sm:w-1/2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center gap-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-11 w-11 fill-black"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
    xlinkHref: "/icons.svg#icon-mission"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-poppins text-xl text-black"
  }, "Our Mission")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "font-poppins text-base font-light text-black",
    tagName: "p",
    value: mission
  }))));
}

/***/ }),

/***/ "./src/blocks/about-vision-and-mission/editor.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/about-vision-and-mission/editor.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/about-vision-and-mission/style.scss":
/*!********************************************************!*\
  !*** ./src/blocks/about-vision-and-mission/style.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

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

/***/ "./src/blocks/about-vision-and-mission/block.json":
/*!********************************************************!*\
  !*** ./src/blocks/about-vision-and-mission/block.json ***!
  \********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"ieeesbtkmce/about-vision-and-mssion","version":"0.1.0","title":"About - Vision and Mission","category":"ieeesbtkmce","description":"Vision and Mission block for about page","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/about-vision-and-mission/index": 0,
/******/ 			"blocks/about-vision-and-mission/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkieeesbtkmce"] = globalThis["webpackChunkieeesbtkmce"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/about-vision-and-mission/style-index"], () => (__webpack_require__("./src/blocks/about-vision-and-mission/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/major-events/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/major-events/edit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/major-events/editor.scss");



function Edit({
  attributes,
  setAttributes
}) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "major-events-hosted py-10"
  });
  const blockProps2 = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    id: "meh-slider",
    className: "w-full flex min-h-20 overflow-x-auto"
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)(blockProps2, {
    allowedBlocks: ['ieeesbtkmce/major-events-item']
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-8 sm:px-14 md:px-20 lg:px-28 xl:px-48"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full justify-between items-center p-2 mb-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-primary-800 font-poppins font-normal text-lg sm:text-3xl"
  }, "Major Events Hosted"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-3 bg-white rounded-full border border-gray-400",
    id: "meh-prev"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "fill-gray-400 w-3 h-3 sm:w-6 sm:h-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.98531 1.09905C10.052 1.17174 10.1049 1.2581 10.141 1.35317C10.1771 1.44824 10.1956 1.55017 10.1956 1.6531C10.1956 1.75603 10.1771 1.85796 10.141 1.95303C10.1049 2.0481 10.052 2.13446 9.98531 2.20715L1.89928 11.0438L9.98531 19.8805C10.1197 20.0274 10.1953 20.2267 10.1953 20.4346C10.1953 20.6424 10.1197 20.8417 9.98531 20.9886C9.85087 21.1355 9.66853 21.2181 9.47841 21.2181C9.28829 21.2181 9.10595 21.1355 8.97151 20.9886L0.380017 11.5979C0.313342 11.5252 0.260443 11.4388 0.224349 11.3438C0.188256 11.2487 0.169678 11.1468 0.169678 11.0438C0.169678 10.9409 0.188256 10.839 0.224349 10.7439C0.260443 10.6488 0.313342 10.5625 0.380017 10.4898L8.97151 1.09905C9.03802 1.02617 9.11703 0.96835 9.20401 0.928899C9.29099 0.889448 9.38424 0.869141 9.47841 0.869141C9.57258 0.869141 9.66583 0.889448 9.75281 0.928899C9.83979 0.96835 9.9188 1.02617 9.98531 1.09905Z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-3 bg-white rounded-full border border-primary-800",
    id: "meh-next"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "fill-primary-800 w-3 h-3 sm:w-6 sm:h-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.284468 20.9879C0.217793 20.9152 0.164894 20.8288 0.1288 20.7337C0.0927067 20.6387 0.0741282 20.5367 0.0741282 20.4338C0.0741282 20.3309 0.0927067 20.229 0.1288 20.1339C0.164894 20.0388 0.217793 19.9525 0.284468 19.8798L8.3705 11.0431L0.284468 2.20642C0.150029 2.05947 0.0745039 1.86017 0.0745039 1.65236C0.0745039 1.44455 0.150029 1.24525 0.284468 1.09831C0.418905 0.951366 0.601242 0.868814 0.791366 0.868814C0.981489 0.868814 1.16383 0.951366 1.29826 1.09831L9.88976 10.489C9.95643 10.5617 10.0093 10.6481 10.0454 10.7432C10.0815 10.8382 10.1001 10.9402 10.1001 11.0431C10.1001 11.146 10.0815 11.2479 10.0454 11.343C10.0093 11.4381 9.95643 11.5244 9.88976 11.5971L1.29826 20.9879C1.23176 21.0607 1.15275 21.1186 1.06577 21.158C0.978786 21.1975 0.885539 21.2178 0.791366 21.2178C0.697192 21.2178 0.603945 21.1975 0.516963 21.158C0.429981 21.1186 0.350974 21.0607 0.284468 20.9879Z"
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "meh-slider-container",
    className: "w-full overflow-x-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  }))));
}

/***/ }),

/***/ "./src/blocks/major-events/index.js":
/*!******************************************!*\
  !*** ./src/blocks/major-events/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/major-events/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/major-events/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/major-events/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/major-events/save.js");






const attributes = {};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "#a7aaad",
      viewBox: "0 0 16 16"
    }, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
    }), " ")
  },
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/major-events/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/major-events/save.js ***!
  \*****************************************/
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "major-events-hosted"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-8 sm:px-14 md:px-20 lg:px-28 xl:px-48"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full justify-between items-center p-2 mb-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-primary-800 font-poppins font-normal text-lg sm:text-3xl"
  }, "Major Events Hosted"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-3 bg-white rounded-full border border-gray-400",
    id: "meh-prev"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "fill-gray-400 w-3 h-3 sm:w-6 sm:h-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.98531 1.09905C10.052 1.17174 10.1049 1.2581 10.141 1.35317C10.1771 1.44824 10.1956 1.55017 10.1956 1.6531C10.1956 1.75603 10.1771 1.85796 10.141 1.95303C10.1049 2.0481 10.052 2.13446 9.98531 2.20715L1.89928 11.0438L9.98531 19.8805C10.1197 20.0274 10.1953 20.2267 10.1953 20.4346C10.1953 20.6424 10.1197 20.8417 9.98531 20.9886C9.85087 21.1355 9.66853 21.2181 9.47841 21.2181C9.28829 21.2181 9.10595 21.1355 8.97151 20.9886L0.380017 11.5979C0.313342 11.5252 0.260443 11.4388 0.224349 11.3438C0.188256 11.2487 0.169678 11.1468 0.169678 11.0438C0.169678 10.9409 0.188256 10.839 0.224349 10.7439C0.260443 10.6488 0.313342 10.5625 0.380017 10.4898L8.97151 1.09905C9.03802 1.02617 9.11703 0.96835 9.20401 0.928899C9.29099 0.889448 9.38424 0.869141 9.47841 0.869141C9.57258 0.869141 9.66583 0.889448 9.75281 0.928899C9.83979 0.96835 9.9188 1.02617 9.98531 1.09905Z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-3 bg-white rounded-full border border-primary-800",
    id: "meh-next"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "fill-primary-800 w-3 h-3 sm:w-6 sm:h-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.284468 20.9879C0.217793 20.9152 0.164894 20.8288 0.1288 20.7337C0.0927067 20.6387 0.0741282 20.5367 0.0741282 20.4338C0.0741282 20.3309 0.0927067 20.229 0.1288 20.1339C0.164894 20.0388 0.217793 19.9525 0.284468 19.8798L8.3705 11.0431L0.284468 2.20642C0.150029 2.05947 0.0745039 1.86017 0.0745039 1.65236C0.0745039 1.44455 0.150029 1.24525 0.284468 1.09831C0.418905 0.951366 0.601242 0.868814 0.791366 0.868814C0.981489 0.868814 1.16383 0.951366 1.29826 1.09831L9.88976 10.489C9.95643 10.5617 10.0093 10.6481 10.0454 10.7432C10.0815 10.8382 10.1001 10.9402 10.1001 11.0431C10.1001 11.146 10.0815 11.2479 10.0454 11.343C10.0093 11.4381 9.95643 11.5244 9.88976 11.5971L1.29826 20.9879C1.23176 21.0607 1.15275 21.1186 1.06577 21.158C0.978786 21.1975 0.885539 21.2178 0.791366 21.2178C0.697192 21.2178 0.603945 21.1975 0.516963 21.158C0.429981 21.1186 0.350974 21.0607 0.284468 20.9879Z"
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "meh-slider-container",
    className: "w-full overflow-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "meh-slider",
    className: "w-full flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)))));
}

/***/ }),

/***/ "./src/blocks/major-events/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/major-events/editor.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/major-events/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/major-events/style.scss ***!
  \********************************************/
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

/***/ "./src/blocks/major-events/block.json":
/*!********************************************!*\
  !*** ./src/blocks/major-events/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"ieeesbtkmce/major-events","version":"0.1.0","title":"Major Events","category":"ieeesbtkmce","description":"Major events hosted slider","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 			"blocks/major-events/index": 0,
/******/ 			"blocks/major-events/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/major-events/style-index"], () => (__webpack_require__("./src/blocks/major-events/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
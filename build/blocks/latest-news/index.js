/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/blocks/latest-news/edit.js":
      /*!****************************************!*\
  !*** ./src/blocks/latest-news/edit.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Edit,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @wordpress/block-editor */ "@wordpress/block-editor",
          );
        /* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./editor.scss */ "./src/blocks/latest-news/editor.scss",
          );

        function Edit({ attributes, setAttributes }) {
          const blockProps = (0,
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
            className:
              "flex flex-col py-6 px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48",
            id: "latest-news-section",
          });
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              ...blockProps,
            },
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "div",
              {
                className: "flex flex-initial flex-col bg-white px-3 sm:w-2/5",
              },
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "h2",
                {
                  className: "font-sans text-3xl text-primary-800",
                },
                "Latest News",
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  className: "mb-5 mt-5 sm:mb-5 md:mb-10 md:mt-8 xl:mb-12",
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "button",
                  {
                    type: "button",
                    className: "",
                    id: "news-prev",
                    "data-carousel-prev": true,
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      className:
                        "mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-gray-400 sm:h-10 sm:w-10",
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "svg",
                      {
                        className: "h-5 w-5 text-gray-400 sm:h-6 sm:w-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "path",
                        {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 19l-7-7 7-7",
                        },
                      ),
                    ),
                  ),
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "button",
                  {
                    type: "button",
                    className: "",
                    id: "news-next",
                    "data-carousel-next": true,
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      className:
                        "mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-primary-800 sm:h-10 sm:w-10",
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "svg",
                      {
                        className: "h-5 w-5 text-primary-800 sm:h-6 sm:w-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "path",
                        {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9 5l7 7-7 7",
                        },
                      ),
                    ),
                  ),
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "h3",
                {
                  className: "mb-1 text-xl sm:mb-2 md:mb-2",
                },
                "Lorem Ipsum",
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "p",
                {
                  className: "font-light",
                },
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero perferendis minima?",
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  className: "mt-4 flex flex-row sm:mt-6 md:mt-12 xl:mt-16",
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "a",
                  {
                    href: "#",
                    className:
                      "mr-2 basis-1/2 rounded p-2 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400",
                  },
                  "More Details",
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "a",
                  {
                    href: "#",
                    className:
                      "ml-2 basis-1/2 rounded bg-primary-800 p-2 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400",
                  },
                  "Register Now!",
                ),
              ),
            ),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "div",
              {
                className:
                  "bg-red relative -mx-4 mt-6 flex h-64 justify-center p-3 sm:mx-0 sm:mt-0 sm:h-auto sm:w-3/5 sm:justify-normal",
              },
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: "https://placehold.co/340x400",
                className: "news-front-img",
                alt: "...",
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: "https://placehold.co/340x400",
                className: "news-back-img",
                alt: "...",
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: "https://placehold.co/340x400",
                className: "news-hidden-back-img",
                alt: "...",
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: "https://placehold.co/340x400",
                className: "news-hidden-front-img",
                alt: "...",
              }),
            ),
          );
        }

        /***/
      },

    /***/ "./src/blocks/latest-news/index.js":
      /*!*****************************************!*\
  !*** ./src/blocks/latest-news/index.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
        /* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./style.scss */ "./src/blocks/latest-news/style.scss",
          );
        /* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./block.json */ "./src/blocks/latest-news/block.json",
          );
        /* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./edit */ "./src/blocks/latest-news/edit.js");
        /* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./save */ "./src/blocks/latest-news/save.js");

        const attributes = {};
        (0, _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(
          _block_json__WEBPACK_IMPORTED_MODULE_2__,
          {
            attributes,
            edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
            save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
          },
        );

        /***/
      },

    /***/ "./src/blocks/latest-news/save.js":
      /*!****************************************!*\
  !*** ./src/blocks/latest-news/save.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ save,
          /* harmony export */
        });
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );

        function save({ attributes }) {
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              className:
                "flex flex-col py-6 px-12 sm:flex-row sm:px-12 md:px-24 xl:px-48",
              id: "latest-news-section",
            },
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "div",
              {
                className: "flex flex-initial flex-col bg-white px-3 sm:w-2/5",
              },
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "h2",
                {
                  className: "font-sans text-3xl text-primary-800",
                },
                "Latest News",
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  className: "mb-5 mt-5 sm:mb-5 md:mb-10 md:mt-8 xl:mb-12",
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "button",
                  {
                    type: "button",
                    className: "",
                    id: "news-prev",
                    "data-carousel-prev": true,
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      className:
                        "mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-gray-400 sm:h-10 sm:w-10",
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "svg",
                      {
                        className: "h-5 w-5 text-gray-400 sm:h-6 sm:w-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "path",
                        {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M15 19l-7-7 7-7",
                        },
                      ),
                    ),
                  ),
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "button",
                  {
                    type: "button",
                    className: "",
                    id: "news-next",
                    "data-carousel-next": true,
                  },
                  (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                    "span",
                    {
                      className:
                        "mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-primary-800 sm:h-10 sm:w-10",
                    },
                    (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                      "svg",
                      {
                        className: "h-5 w-5 text-primary-800 sm:h-6 sm:w-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                        "path",
                        {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M9 5l7 7-7 7",
                        },
                      ),
                    ),
                  ),
                ),
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "h3",
                {
                  className: "mb-1 text-xl sm:mb-2 md:mb-2",
                },
                "Lorem Ipsum",
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "p",
                {
                  className: "font-light",
                },
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero perferendis minima?",
              ),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                "div",
                {
                  className: "mt-4 flex flex-row sm:mt-6 md:mt-12 xl:mt-16",
                },
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "a",
                  {
                    href: "#",
                    className:
                      "mr-2 basis-1/2 rounded p-2 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400",
                  },
                  "More Details",
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
                  "a",
                  {
                    href: "#",
                    className:
                      "ml-2 basis-1/2 rounded bg-primary-800 p-2 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400",
                  },
                  "Register Now!",
                ),
              ),
            ),
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "div",
              {
                className:
                  "bg-red relative -mx-4 mt-6 flex h-64 justify-center p-3 sm:mx-0 sm:mt-0 sm:h-auto sm:w-3/5 sm:justify-normal",
              },
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: "https://picsum.photos/id/12/340/400",
                className: "news-front-img",
                alt: "...",
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: "https://picsum.photos/id/52/340/400",
                className: "news-back-img",
                alt: "...",
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: "https://picsum.photos/id/32/340/400",
                className: "news-hidden-back-img",
                alt: "...",
              }),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
                src: "https://picsum.photos/id/23/340/400",
                className: "news-hidden-front-img",
                alt: "...",
              }),
            ),
          );
        }

        /***/
      },

    /***/ "./src/blocks/latest-news/editor.scss":
      /*!********************************************!*\
  !*** ./src/blocks/latest-news/editor.scss ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ "./src/blocks/latest-news/style.scss":
      /*!*******************************************!*\
  !*** ./src/blocks/latest-news/style.scss ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "React" ***!
  \************************/
      /***/ (module) => {
        module.exports = window["React"];

        /***/
      },

    /***/ "@wordpress/block-editor":
      /*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
      /***/ (module) => {
        module.exports = window["wp"]["blockEditor"];

        /***/
      },

    /***/ "@wordpress/blocks":
      /*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
      /***/ (module) => {
        module.exports = window["wp"]["blocks"];

        /***/
      },

    /***/ "./src/blocks/latest-news/block.json":
      /*!*******************************************!*\
  !*** ./src/blocks/latest-news/block.json ***!
  \*******************************************/
      /***/ (module) => {
        module.exports = JSON.parse(
          '{"apiVersion":2,"name":"ieeesbtkmce/latest-news","version":"0.1.0","title":"Latest News","category":"ieeesbtkmce","icon":"welcome-widgets-menus","description":"Shows latest news posts","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","script":"file:./script.js"}',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/ (() => {
    /******/ var deferred = [];
    /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
      /******/ if (chunkIds) {
        /******/ priority = priority || 0;
        /******/ for (
          var i = deferred.length;
          i > 0 && deferred[i - 1][2] > priority;
          i--
        )
          deferred[i] = deferred[i - 1];
        /******/ deferred[i] = [chunkIds, fn, priority];
        /******/ return;
        /******/
      }
      /******/ var notFulfilled = Infinity;
      /******/ for (var i = 0; i < deferred.length; i++) {
        /******/ var [chunkIds, fn, priority] = deferred[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 0; j < chunkIds.length; j++) {
          /******/ if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j]),
            )
          ) {
            /******/ chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/ fulfilled = false;
            /******/ if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferred.splice(i--, 1);
          /******/ var r = fn();
          /******/ if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/ return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ "blocks/latest-news/index": 0,
      /******/ "blocks/latest-news/style-index": 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ __webpack_require__.O.j = (chunkId) =>
      installedChunks[chunkId] === 0;
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ var [chunkIds, moreModules, runtime] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0;
      /******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
        /******/ for (moduleId in moreModules) {
          /******/ if (__webpack_require__.o(moreModules, moduleId)) {
            /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/ if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ installedChunks[chunkId][0]();
          /******/
        }
        /******/ installedChunks[chunkId] = 0;
        /******/
      }
      /******/ return __webpack_require__.O(result);
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (globalThis["webpackChunkieeesbtkmce"] =
      globalThis["webpackChunkieeesbtkmce"] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal),
    );
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/ var __webpack_exports__ = __webpack_require__.O(
    undefined,
    ["blocks/latest-news/style-index"],
    () => __webpack_require__("./src/blocks/latest-news/index.js"),
  );
  /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})();
//# sourceMappingURL=index.js.map

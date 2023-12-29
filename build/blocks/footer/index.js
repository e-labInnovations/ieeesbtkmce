/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/blocks/footer/edit.js":
      /*!***********************************!*\
  !*** ./src/blocks/footer/edit.js ***!
  \***********************************/
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
        /* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @wordpress/server-side-render */ "@wordpress/server-side-render",
          );
        /* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./block.json */ "./src/blocks/footer/block.json",
          );
        /* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./editor.scss */ "./src/blocks/footer/editor.scss",
          );

        const Placeholder = () => {
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              className: "bg-gray-200 p-4 text-center",
            },
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              "p",
              {
                className: "text-xl font-semibold text-gray-800",
              },
              "Footer Placeholder",
            ),
          );
        };
        function Edit({ attributes, setAttributes }) {
          const blockProps = (0,
          _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
          return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            "div",
            {
              ...blockProps,
            },
            (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
              _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_2___default(),
              {
                block: _block_json__WEBPACK_IMPORTED_MODULE_3__.name,
                LoadingResponsePlaceholder: Placeholder,
              },
            ),
          );
        }

        /***/
      },

    /***/ "./src/blocks/footer/index.js":
      /*!************************************!*\
  !*** ./src/blocks/footer/index.js ***!
  \************************************/
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
            /*! ./style.scss */ "./src/blocks/footer/style.scss",
          );
        /* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./block.json */ "./src/blocks/footer/block.json",
          );
        /* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./edit */ "./src/blocks/footer/edit.js");
        /* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./save */ "./src/blocks/footer/save.js");

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

    /***/ "./src/blocks/footer/save.js":
      /*!***********************************!*\
  !*** ./src/blocks/footer/save.js ***!
  \***********************************/
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
            "h1",
            null,
            "Test block",
          );
        }

        /***/
      },

    /***/ "./src/blocks/footer/editor.scss":
      /*!***************************************!*\
  !*** ./src/blocks/footer/editor.scss ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ "./src/blocks/footer/style.scss":
      /*!**************************************!*\
  !*** ./src/blocks/footer/style.scss ***!
  \**************************************/
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

    /***/ "@wordpress/server-side-render":
      /*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
      /***/ (module) => {
        module.exports = window["wp"]["serverSideRender"];

        /***/
      },

    /***/ "./src/blocks/footer/block.json":
      /*!**************************************!*\
  !*** ./src/blocks/footer/block.json ***!
  \**************************************/
      /***/ (module) => {
        module.exports = JSON.parse(
          '{"apiVersion":2,"name":"ieeesbtkmce/footer","version":"0.1.0","title":"Footer","category":"ieeesbtkmce","icon":"text","description":"General footer block. Editor side only shows the placeholder text. For updating the menu, edit the footer menus on the menu section of theme","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php","example":{"attributes":{}}}',
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
      /******/ "blocks/footer/index": 0,
      /******/ "blocks/footer/style-index": 0,
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
    ["blocks/footer/style-index"],
    () => __webpack_require__("./src/blocks/footer/index.js"),
  );
  /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})();
//# sourceMappingURL=index.js.map

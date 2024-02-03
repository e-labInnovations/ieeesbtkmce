/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/latest-news/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/latest-news/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/latest-news/editor.scss");







function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    activeItem,
    title,
    content,
    registerLink,
    detailsLink
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const [currentItemPos, setCurrentItemPos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const [linkPicker, setLinkPicker] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const selectedBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    let currentSelection = select("core/block-editor").getSelectedBlock();
    return currentSelection ? currentSelection : null;
  });
  const innerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select("core/block-editor").getBlocks(clientId), [clientId]);
  const selectInnerBlock = (innerBlock = null) => {
    innerBlock = innerBlock ? innerBlock : innerBlocks[currentItemPos];
    setAttributes({
      activeItem: innerBlock.clientId,
      title: innerBlock.attributes.title || "",
      content: innerBlock.attributes.content || "",
      registerLink: innerBlock.attributes.registerLink || null,
      detailsLink: innerBlock.attributes.detailsLink || null
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    selectInnerBlock();
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (selectedBlock && selectedBlock.name == "ieeesbtkmce/latest-news-item") {
      selectInnerBlock(selectedBlock);
      console.log("selectedBlock:", selectedBlock);
    }
  }, [selectedBlock]);
  const doNext = () => {
    let newPosition = currentItemPos + 1;
    newPosition = newPosition >= innerBlocks.length ? 0 : newPosition;
    setCurrentItemPos(newPosition);
    selectInnerBlock(innerBlocks[newPosition]);
  };
  const doPrev = () => {
    let newPosition = currentItemPos - 1;
    newPosition = newPosition < 0 ? innerBlocks.length - 1 : newPosition;
    setCurrentItemPos(newPosition);
    selectInnerBlock(innerBlocks[newPosition]);
  };

  //ToDo : implement register and details links

  const blockProps2 = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "relative flex h-64 w-full sm:mx-0 sm:mt-0"
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)(blockProps2, {
    allowedBlocks: ["ieeesbtkmce/latest-news-item"]
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: 0,
    height: 0,
    className: "hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("symbol", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    id: "pencil-fill"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container mx-auto my-8 flex flex-col-reverse gap-4 px-4 sm:flex-row md:my-16 xl:px-28",
    id: "latest-news-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-initial flex-col gap-4 sm:h-auto sm:w-5/12 sm:gap-6 sm:pb-5 sm:pr-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "hidden font-sans text-3xl text-primary-800 sm:block"
  }, "Latest News"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: doNext,
    className: "rounded-full border border-primary-800 bg-white p-3",
    id: "news-next"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-3 w-3 fill-primary-800 sm:h-4 sm:w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.98531 1.09905C10.052 1.17174 10.1049 1.2581 10.141 1.35317C10.1771 1.44824 10.1956 1.55017 10.1956 1.6531C10.1956 1.75603 10.1771 1.85796 10.141 1.95303C10.1049 2.0481 10.052 2.13446 9.98531 2.20715L1.89928 11.0438L9.98531 19.8805C10.1197 20.0274 10.1953 20.2267 10.1953 20.4346C10.1953 20.6424 10.1197 20.8417 9.98531 20.9886C9.85087 21.1355 9.66853 21.2181 9.47841 21.2181C9.28829 21.2181 9.10595 21.1355 8.97151 20.9886L0.380017 11.5979C0.313342 11.5252 0.260443 11.4388 0.224349 11.3438C0.188256 11.2487 0.169678 11.1468 0.169678 11.0438C0.169678 10.9409 0.188256 10.839 0.224349 10.7439C0.260443 10.6488 0.313342 10.5625 0.380017 10.4898L8.97151 1.09905C9.03802 1.02617 9.11703 0.96835 9.20401 0.928899C9.29099 0.889448 9.38424 0.869141 9.47841 0.869141C9.57258 0.869141 9.66583 0.889448 9.75281 0.928899C9.83979 0.96835 9.9188 1.02617 9.98531 1.09905Z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: doPrev,
    className: "rounded-full border border-primary-800 bg-white p-3",
    id: "news-prev"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-3 w-3 fill-primary-800 sm:h-4 sm:w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.284468 20.9879C0.217793 20.9152 0.164894 20.8288 0.1288 20.7337C0.0927067 20.6387 0.0741282 20.5367 0.0741282 20.4338C0.0741282 20.3309 0.0927067 20.229 0.1288 20.1339C0.164894 20.0388 0.217793 19.9525 0.284468 19.8798L8.3705 11.0431L0.284468 2.20642C0.150029 2.05947 0.0745039 1.86017 0.0745039 1.65236C0.0745039 1.44455 0.150029 1.24525 0.284468 1.09831C0.418905 0.951366 0.601242 0.868814 0.791366 0.868814C0.981489 0.868814 1.16383 0.951366 1.29826 1.09831L9.88976 10.489C9.95643 10.5617 10.0093 10.6481 10.0454 10.7432C10.0815 10.8382 10.1001 10.9402 10.1001 11.0431C10.1001 11.146 10.0815 11.2479 10.0454 11.343C10.0093 11.4381 9.95643 11.5244 9.88976 11.5971L1.29826 20.9879C1.23176 21.0607 1.15275 21.1186 1.06577 21.158C0.978786 21.1975 0.885539 21.2178 0.791366 21.2178C0.697192 21.2178 0.603945 21.1975 0.516963 21.158C0.429981 21.1186 0.350974 21.0607 0.284468 20.9879Z"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-auto flex flex-col gap-1 sm:gap-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "text-xl",
    id: "active-news-title",
    tagName: "h3",
    value: title,
    onChange: title => setAttributes({
      title
    }),
    placeholder: "Title...",
    allowedFormats: []
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "font-light",
    id: "active-news-content",
    tagName: "h3",
    value: content,
    onChange: content => setAttributes({
      content
    }),
    placeholder: "Content..."
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: () => setLinkPicker("details"),
    id: "active-news-details",
    className: "group relative mr-2 basis-1/2 rounded p-2 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
  }, "More Details", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "absolute -end-2 -top-2 hidden h-6  w-6 items-center justify-center rounded-full border-2 border-white bg-primary-800 p-1 text-xs font-bold text-white group-hover:inline-flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "currentColor",
    className: "bi bi-pencil-fill",
    viewBox: "0 0 16 16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
    xlinkHref: "#pencil-fill"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: () => setLinkPicker("register"),
    id: "active-news-register",
    className: "group relative ml-2 basis-1/2 rounded bg-primary-800 p-2 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
  }, "Register Now!", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "absolute -end-2 -top-2 hidden h-6  w-6 items-center justify-center rounded-full border-2 border-white bg-primary-800 p-1 text-xs font-bold text-white group-hover:inline-flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    fill: "currentColor",
    className: "bi bi-pencil-fill",
    viewBox: "0 0 16 16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
    xlinkHref: "#pencil-fill"
  }))))), linkPicker && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Popover, {
    position: "middle center",
    onFocusOutside: () => setLinkPicker(null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
    settings: [],
    value: linkPicker == "details" ? detailsLink : registerLink,
    onChange: newLink => {
      if (linkPicker == "details") setAttributes({
        detailsLink: newLink
      });else setAttributes({
        registerLink: newLink
      });
    },
    style: {
      display: "block",
      width: "80%"
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "primary",
    onClick: () => setLinkPicker(null),
    style: {
      display: "block",
      width: "100%"
    }
  }, "Confirm Link"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-6 flex w-full flex-col gap-6 sm:mx-0 sm:mt-0 sm:w-7/12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-sans text-3xl text-primary-800 sm:hidden"
  }, "Latest News"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  }))));
}

/***/ }),

/***/ "./src/blocks/latest-news/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/latest-news/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/latest-news/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/latest-news/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/latest-news/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/latest-news/save.js");






const attributes = {
  activeItem: {
    type: "string"
  },
  title: {
    type: "string"
  },
  content: {
    type: "string"
  },
  registerLink: {
    type: "object"
  },
  detailsLink: {
    type: "object"
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  attributes,
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      class: "bi bi-newspaper",
      viewBox: "0 0 16 16"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"
    }))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/latest-news/save.js":
/*!****************************************!*\
  !*** ./src/blocks/latest-news/save.js ***!
  \****************************************/
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container mx-auto my-8 flex flex-col-reverse gap-4 px-4 sm:flex-row md:my-16 xl:px-28",
    id: "latest-news-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-initial flex-col gap-4 sm:h-auto sm:w-5/12 sm:gap-6 sm:pb-5 sm:pr-12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "hidden font-sans text-3xl text-primary-800 sm:block"
  }, "Latest News"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "rounded-full border border-primary-800 bg-white p-3",
    id: "news-next"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-3 w-3 fill-primary-800 sm:h-4 sm:w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.98531 1.09905C10.052 1.17174 10.1049 1.2581 10.141 1.35317C10.1771 1.44824 10.1956 1.55017 10.1956 1.6531C10.1956 1.75603 10.1771 1.85796 10.141 1.95303C10.1049 2.0481 10.052 2.13446 9.98531 2.20715L1.89928 11.0438L9.98531 19.8805C10.1197 20.0274 10.1953 20.2267 10.1953 20.4346C10.1953 20.6424 10.1197 20.8417 9.98531 20.9886C9.85087 21.1355 9.66853 21.2181 9.47841 21.2181C9.28829 21.2181 9.10595 21.1355 8.97151 20.9886L0.380017 11.5979C0.313342 11.5252 0.260443 11.4388 0.224349 11.3438C0.188256 11.2487 0.169678 11.1468 0.169678 11.0438C0.169678 10.9409 0.188256 10.839 0.224349 10.7439C0.260443 10.6488 0.313342 10.5625 0.380017 10.4898L8.97151 1.09905C9.03802 1.02617 9.11703 0.96835 9.20401 0.928899C9.29099 0.889448 9.38424 0.869141 9.47841 0.869141C9.57258 0.869141 9.66583 0.889448 9.75281 0.928899C9.83979 0.96835 9.9188 1.02617 9.98531 1.09905Z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "rounded-full border border-primary-800 bg-white p-3",
    id: "news-prev"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-3 w-3 fill-primary-800 sm:h-4 sm:w-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 11 22",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.284468 20.9879C0.217793 20.9152 0.164894 20.8288 0.1288 20.7337C0.0927067 20.6387 0.0741282 20.5367 0.0741282 20.4338C0.0741282 20.3309 0.0927067 20.229 0.1288 20.1339C0.164894 20.0388 0.217793 19.9525 0.284468 19.8798L8.3705 11.0431L0.284468 2.20642C0.150029 2.05947 0.0745039 1.86017 0.0745039 1.65236C0.0745039 1.44455 0.150029 1.24525 0.284468 1.09831C0.418905 0.951366 0.601242 0.868814 0.791366 0.868814C0.981489 0.868814 1.16383 0.951366 1.29826 1.09831L9.88976 10.489C9.95643 10.5617 10.0093 10.6481 10.0454 10.7432C10.0815 10.8382 10.1001 10.9402 10.1001 11.0431C10.1001 11.146 10.0815 11.2479 10.0454 11.343C10.0093 11.4381 9.95643 11.5244 9.88976 11.5971L1.29826 20.9879C1.23176 21.0607 1.15275 21.1186 1.06577 21.158C0.978786 21.1975 0.885539 21.2178 0.791366 21.2178C0.697192 21.2178 0.603945 21.1975 0.516963 21.158C0.429981 21.1186 0.350974 21.0607 0.284468 20.9879Z"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-auto flex flex-col gap-1 sm:gap-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-xl",
    id: "active-news-title"
  }, "Lorem Ipsum"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "font-light",
    id: "active-news-content"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero perferendis minima? lore")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "active-news-details",
    href: "#",
    className: "mr-2 basis-1/2 rounded p-2 text-center text-primary-800 outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"
  }, "More Details"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    id: "active-news-register",
    href: "#",
    className: "ml-2 basis-1/2 rounded bg-primary-800 p-2 text-center text-white transition-shadow hover:shadow-md hover:shadow-gray-400"
  }, "Register Now!"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-6 flex w-full flex-col gap-6 sm:mx-0 sm:mt-0 sm:w-7/12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-sans text-3xl text-primary-800 sm:hidden"
  }, "Latest News"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative flex h-64 w-full sm:mx-0 sm:mt-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)))));
}

/***/ }),

/***/ "./src/blocks/latest-news/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/latest-news/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/latest-news/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/latest-news/style.scss ***!
  \*******************************************/
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

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/blocks/latest-news/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/latest-news/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"ieeesbtkmce/latest-news","version":"0.1.0","title":"Latest News","category":"ieeesbtkmce","icon":"welcome-widgets-menus","description":"Shows latest news posts","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":["file:./view.js","hammer-js"]}');

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
/******/ 			"blocks/latest-news/index": 0,
/******/ 			"blocks/latest-news/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/latest-news/style-index"], () => (__webpack_require__("./src/blocks/latest-news/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
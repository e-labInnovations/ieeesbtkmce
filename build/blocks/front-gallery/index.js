/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/front-gallery/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/front-gallery/edit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/front-gallery/editor.scss");




function Edit({
  attributes,
  setAttributes
}) {
  const {
    gallery,
    quotes
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const [theme_url, setTheme_url] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setTheme_url(wp.data.select("core/block-editor").getSettings().themeData.theme_url);
  }, []);
  const updatedQuote = (setIndex, key, value) => {
    return quotes.map((item, index) => {
      if (index === setIndex) {
        return {
          ...item,
          [key]: value
        };
      }
      return item;
    });
  };
  const updatedGallery = (setIndex, image) => {
    let newImages = [...gallery];
    newImages[setIndex] = image;
    return newImages;
  };
  function GalleryImage({
    position
  }) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: media => {
        console.log(updatedGallery(position, media));
        setAttributes({
          gallery: updatedGallery(position, media)
        });
      },
      value: gallery[position].id,
      render: ({
        open
      }) => {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          onClick: open,
          className: "h-full w-full rounded-lg bg-cover bg-center bg-no-repeat",
          style: {
            backgroundImage: gallery && gallery[position] && gallery[position].url ? `url("${gallery[position].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
          }
        });
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "absolute -end-2 -top-2 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-primary-800 p-1 text-xs font-bold text-white group-hover:inline-flex"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 16,
      height: 16,
      fill: "currentColor",
      className: "bi bi-pencil-fill",
      viewBox: "0 0 16 16"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"
    }))));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container mx-auto my-8 grid h-screen grid-cols-12 grid-rows-6 gap-1 px-4 md:my-16 md:grid-cols-7 md:grid-rows-5 md:gap-4 xl:px-28"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative col-span-8 col-start-1 row-span-1 row-start-1 cursor-pointer md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryImage, {
    position: 0
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative col-span-9 col-start-4 row-span-1 row-start-3 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryImage, {
    position: 1
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 col-start-4 row-span-1 row-start-2 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-5 md:row-span-1 md:row-start-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex h-full flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-hidden overflow-y-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "marquee font-poppins text-sm font-light italic md:text-base",
    tagName: "p",
    value: quotes[0].content,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: content => setAttributes({
      quotes: updatedQuote(0, "content", content)
    }),
    placeholder: "Quote..."
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "mt-1 font-poppins text-sm font-medium leading-none md:text-base",
    tagName: "h4",
    value: quotes[0].author,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: author => setAttributes({
      quotes: updatedQuote(0, "author", author)
    }),
    placeholder: "Author..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "text-sm font-light leading-none",
    tagName: "span",
    value: quotes[0].designation,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: designation => setAttributes({
      quotes: updatedQuote(0, "designation", designation)
    }),
    placeholder: "Designation..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative col-span-3 col-start-10 row-span-1 row-start-2 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-7 md:row-span-1 md:row-start-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryImage, {
    position: 2
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative col-span-3 col-start-1 row-span-2 row-start-2 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-3 md:row-span-4 md:row-start-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryImage, {
    position: 3
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative col-span-8 col-start-5 row-span-1 row-start-4 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-3 md:col-start-4 md:row-span-2 md:row-start-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryImage, {
    position: 4
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 col-start-1 row-span-1 row-start-4 rounded-lg bg-gray-100 p-2 md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex h-full flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-hidden overflow-y-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "marquee font-poppins text-sm font-light italic md:text-base",
    tagName: "p",
    value: quotes[1].content,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: content => setAttributes({
      quotes: updatedQuote(1, "content", content)
    }),
    placeholder: "Quote..."
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "mt-1 font-poppins text-sm font-medium leading-none md:text-base",
    tagName: "h4",
    value: quotes[1].author,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: author => setAttributes({
      quotes: updatedQuote(1, "author", author)
    }),
    placeholder: "Author..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "text-sm font-light leading-none",
    tagName: "span",
    value: quotes[1].designation,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: designation => setAttributes({
      quotes: updatedQuote(1, "designation", designation)
    }),
    placeholder: "Designation..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 col-start-9 row-span-1 row-start-1 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-1 md:row-span-1 md:row-start-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex h-full flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-hidden overflow-y-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "marquee font-poppins text-sm font-light italic md:text-base",
    tagName: "p",
    value: quotes[2].content,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: content => setAttributes({
      quotes: updatedQuote(2, "content", content)
    }),
    placeholder: "Quote..."
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "mt-1 font-poppins text-sm font-medium leading-none md:text-base",
    tagName: "h4",
    value: quotes[2].author,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: author => setAttributes({
      quotes: updatedQuote(2, "author", author)
    }),
    placeholder: "Author..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "text-sm font-light leading-none",
    tagName: "span",
    value: quotes[2].designation,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: designation => setAttributes({
      quotes: updatedQuote(2, "designation", designation)
    }),
    placeholder: "Designation..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative col-span-9 col-start-1 row-span-1 row-start-6 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryImage, {
    position: 5
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 col-start-10 row-span-2 row-start-5 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-4 md:row-span-2 md:row-start-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex h-full flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-hidden overflow-y-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "marquee font-poppins text-sm font-light italic md:text-base",
    tagName: "p",
    value: quotes[3].content,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: content => setAttributes({
      quotes: updatedQuote(3, "content", content)
    }),
    placeholder: "Quote..."
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "mt-1 font-poppins text-sm font-medium leading-none md:text-base",
    tagName: "h4",
    value: quotes[3].author,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: author => setAttributes({
      quotes: updatedQuote(3, "author", author)
    }),
    placeholder: "Author..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "text-sm font-light leading-none",
    tagName: "span",
    value: quotes[3].designation,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: designation => setAttributes({
      quotes: updatedQuote(3, "designation", designation)
    }),
    placeholder: "Designation..."
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative col-span-3 col-start-1 row-span-1 row-start-5 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-6 md:row-span-2 md:row-start-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryImage, {
    position: 6
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative col-span-6 col-start-4 row-span-1 row-start-5 cursor-pointer rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GalleryImage, {
    position: 7
  }))));
}

/***/ }),

/***/ "./src/blocks/front-gallery/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/front-gallery/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/front-gallery/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/front-gallery/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/front-gallery/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/front-gallery/save.js");






const attributes = {
  quotes: {
    type: "array",
    default: [{
      content: "",
      author: "",
      designation: ""
    }, {
      content: "",
      author: "",
      designation: ""
    }, {
      content: "",
      author: "",
      designation: ""
    }, {
      content: "",
      author: "",
      designation: ""
    }]
  },
  gallery: {
    type: "array",
    default: [{}, {}, {}, {}, {}, {}, {}, {}]
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
      class: "bi bi-images",
      viewBox: "0 0 16 16"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"
    }))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/front-gallery/save.js":
/*!******************************************!*\
  !*** ./src/blocks/front-gallery/save.js ***!
  \******************************************/
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
    gallery,
    quotes
  } = attributes;
  const theme_url = themeData.theme_url;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container mx-auto my-8 grid h-screen grid-cols-12 grid-rows-6 gap-1 px-4 md:my-16 md:grid-cols-7 md:grid-rows-5 md:gap-4 xl:px-28"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " col-span-8 col-start-1 row-span-1 row-start-1 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1",
    style: {
      backgroundImage: gallery && gallery[0] && gallery[0].url ? `url("${gallery[0].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " col-span-9 col-start-4 row-span-1 row-start-3 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-3 md:row-span-1 md:row-start-1",
    style: {
      backgroundImage: gallery && gallery[1] && gallery[1].url ? `url("${gallery[1].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 col-start-4 row-span-1 row-start-2 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-5 md:row-span-1 md:row-start-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex h-full flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-hidden overflow-y-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "marquee font-poppins text-sm font-light italic md:text-base",
    tagName: "p",
    value: quotes[0].content
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "mt-1 font-poppins text-sm font-medium leading-none md:text-base",
    tagName: "h4",
    value: quotes[0].author
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "text-sm font-light leading-none",
    tagName: "span",
    value: quotes[0].designation
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 col-start-10 row-span-1 row-start-2 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-7 md:row-span-1 md:row-start-1",
    style: {
      backgroundImage: gallery && gallery[2] && gallery[2].url ? `url("${gallery[2].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 col-start-1 row-span-2 row-start-2 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-3 md:row-span-4 md:row-start-2",
    style: {
      backgroundImage: gallery && gallery[3] && gallery[3].url ? `url("${gallery[3].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-8 col-start-5 row-span-1 row-start-4 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-3 md:col-start-4 md:row-span-2 md:row-start-2",
    style: {
      backgroundImage: gallery && gallery[4] && gallery[4].url ? `url("${gallery[4].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 col-start-1 row-span-1 row-start-4 rounded-lg bg-gray-100 p-2 md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex h-full flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-hidden overflow-y-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "marquee font-poppins text-sm font-light italic md:text-base",
    tagName: "p",
    value: quotes[1].content
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "mt-1 font-poppins text-sm font-medium leading-none md:text-base",
    tagName: "h4",
    value: quotes[1].author
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "text-sm font-light leading-none",
    tagName: "span",
    value: quotes[1].designation
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 col-start-9 row-span-1 row-start-1 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-1 md:row-span-1 md:row-start-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex h-full flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-hidden overflow-y-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "marquee font-poppins text-sm font-light italic md:text-base",
    tagName: "p",
    value: quotes[2].content
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "mt-1 font-poppins text-sm font-medium leading-none md:text-base",
    tagName: "h4",
    value: quotes[2].author
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "text-sm font-light leading-none",
    tagName: "span",
    value: quotes[2].designation
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-9 col-start-1 row-span-1 row-start-6 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-4",
    style: {
      backgroundImage: gallery && gallery[5] && gallery[5].url ? `url("${gallery[5].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 col-start-10 row-span-2 row-start-5 rounded-lg bg-gray-100 p-2 md:col-span-2 md:col-start-4 md:row-span-2 md:row-start-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex h-full flex-col"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-x-hidden overflow-y-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "marquee font-poppins text-sm font-light italic md:text-base",
    tagName: "p",
    value: quotes[3].content
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "mt-1 font-poppins text-sm font-medium leading-none md:text-base",
    tagName: "h4",
    value: quotes[3].author
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: "text-sm font-light leading-none",
    tagName: "span",
    value: quotes[3].designation
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 col-start-1 row-span-1 row-start-5 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-6 md:row-span-2 md:row-start-4",
    style: {
      backgroundImage: gallery && gallery[6] && gallery[6].url ? `url("${gallery[6].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 col-start-4 row-span-1 row-start-5 rounded-lg bg-cover bg-center bg-no-repeat md:col-span-1 md:col-start-7 md:row-span-2 md:row-start-4",
    style: {
      backgroundImage: gallery && gallery[7] && gallery[7].url ? `url("${gallery[7].url}")` : `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("${theme_url}/assets/images/major-event-thumb.png")`
    }
  })));
}

/***/ }),

/***/ "./src/blocks/front-gallery/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/front-gallery/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/front-gallery/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/front-gallery/style.scss ***!
  \*********************************************/
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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/blocks/front-gallery/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/front-gallery/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"ieeesbtkmce/front-gallery","version":"0.1.0","title":"Front Gallery","category":"ieeesbtkmce","description":"A gallery and quotes block for front page","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","script":["file:./script.js","gsap-js"]}');

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
/******/ 			"blocks/front-gallery/index": 0,
/******/ 			"blocks/front-gallery/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/front-gallery/style-index"], () => (__webpack_require__("./src/blocks/front-gallery/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
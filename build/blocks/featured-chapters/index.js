/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/featured-chapters/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/featured-chapters/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/featured-chapters/editor.scss");





function Edit({
  attributes,
  setAttributes
}) {
  const {
    content,
    chapters
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "w-full overflow-hidden"
  });
  const [theme_url, setTheme_url] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setTheme_url(wp.data.select("core/block-editor").getSettings().themeData.theme_url);
    console.log("help", wp.data.select("core/block-editor").getSettings().themeData.theme_url);
  }, []);
  const setChapterLink = (chapter, newLinkObject) => {
    setAttributes({
      chapters: {
        ...chapters,
        [chapter]: {
          ...chapters[chapter],
          linkObject: newLinkObject
        }
      }
    });
  };
  function ChapterImage({
    chapter,
    image
  }) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group relative w-1/2"
    }, image && image.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: media => {
        setAttributes({
          chapters: {
            ...chapters,
            [chapter]: {
              ...chapters[chapter],
              image: {
                id: media.id,
                alt: media.alt || `Chapter ${chapter} Image`,
                url: media.url
              }
            }
          }
        });
      },
      allowedTypes: ["image"],
      value: image.id,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "w-full",
        src: image.url,
        alt: image.alt,
        onClick: open
      })
    })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
      onSelect: media => {
        setAttributes({
          chapters: {
            ...chapters,
            [chapter]: {
              ...chapters[chapter],
              image: {
                id: media.id,
                alt: media.alt || `Chapter ${chapter} Image`,
                url: media.url
              }
            }
          }
        });
      },
      allowedTypes: ["image"],
      multiple: false,
      labels: {
        title: `Chapter ${chapter} Image`
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "absolute -end-2 -top-2 hidden h-6  w-6 items-center justify-center rounded-full border-2 border-white bg-primary-800 p-1 text-xs font-bold text-white group-hover:inline-flex"
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
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
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container mx-auto my-8 flex flex-col gap-8 px-4 sm:flex-row sm:gap-24 md:my-16 xl:px-28"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex max-h-min w-full flex-col gap-6 sm:w-5/12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-poppins text-3xl text-primary-800 sm:block"
  }, "Trusted Among Global Organizations"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "font-poppins text-base font-light text-black",
    tagName: "p",
    value: content,
    onChange: content => setAttributes({
      content
    }),
    placeholder: "Content..."
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h-full w-full sm:w-7/12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 640 580",
    className: "w-full overflow-visible"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "drop-shadow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    in: "SourceAlpha",
    stdDeviation: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: 1,
    dy: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComponentTransfer", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFuncA", {
    type: "linear",
    slope: "0.3"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMerge", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMergeNode", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMergeNode", {
    in: "SourceGraphic"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "drop-shadow-hover",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "140%"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    in: "SourceAlpha",
    stdDeviation: 8
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: 0,
    dy: 0,
    result: "offsetblur"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComponentTransfer", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFuncA", {
    type: "linear",
    slope: "0.3"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMerge", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMergeNode", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMergeNode", {
    in: "SourceGraphic"
  }))), Object.entries(chapters).map(([chapterName, chapter]) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pattern", {
      id: `chapter_${chapterName}`,
      x: "0%",
      y: "0%",
      height: "100%",
      width: "100%",
      viewBox: "0 0 1 1"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      width: 1,
      height: 1,
      className: `fill-${chapter.bg_color}`
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("image", {
      xlinkHref: chapter.image && chapter.image.url ? chapter.image.url : `${theme_url}/assets/images/chapter-${chapterName}.png`,
      x: "0.1",
      y: "0.1",
      width: "0.8",
      height: "0.8",
      preserveAspectRatio: "xMidYMid meet"
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: "\n                .chapter-rect {\n                  filter: url(#drop-shadow);\n                  stroke-width: 0.25;\n                  filter: url(#drop-shadow);\n                  rx: 35;\n                }\n\n                .chapter-rect:hover {\n                  filter: url(#drop-shadow-hover);\n                }\n              "
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: () => setEditItem("pes")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "86.5958",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#chapter_pes)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "272.491",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#chapter_ras)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "458.387",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#chapter_cs)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "10.9073",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#chapter_sight)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "196.803",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#chapter_ias)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "382.698",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#chapter_sps)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "580.262",
    y: "204.143",
    height: 170,
    rx: 35,
    fill: "#006DA5",
    className: "w-screen",
    filter: "url(#drop-shadow)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "86.5958",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#chapter_wie)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "272.491",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#chapter_cass)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "458.387",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#chapter_ies)",
    className: "chapter-rect stroke-primary-800"
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, Object.entries(chapters).map(([chapterName, chapter]) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: chapter.name
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "w-full max-w-full"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ChapterImage, {
      chapter: chapterName,
      image: chapter.image
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
      className: "w-full max-w-full",
      settings: [],
      value: chapter.linkObject,
      onChange: newLink => setChapterLink(chapterName, newLink),
      style: {
        display: "block",
        width: "80%"
      }
    })));
  })));
}

/***/ }),

/***/ "./src/blocks/featured-chapters/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/featured-chapters/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/featured-chapters/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/featured-chapters/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/featured-chapters/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/featured-chapters/save.js");






const attributes = {
  content: {
    type: "String",
    source: "html",
    selector: "p"
  },
  chapters: {
    type: "object",
    default: {
      ras: {
        name: "Robotic Automation Society (RAS)",
        image: {},
        linkObject: {},
        bg_color: "white"
      },
      pes: {
        name: "Power Energy Society (PES)",
        image: {},
        linkObject: {},
        bg_color: "white"
      },
      ias: {
        name: "Industrial Applications Society (IAS)",
        image: {},
        linkObject: {},
        bg_color: "primary-800"
      },
      ies: {
        name: "Industrial Electronics society (IES)",
        image: {},
        linkObject: {},
        bg_color: "white"
      },
      cs: {
        name: "Computer Society (CS)",
        image: {},
        linkObject: {},
        bg_color: "white"
      },
      wie: {
        name: "Women in Engineering (WIE)",
        image: {},
        linkObject: {},
        bg_color: "white"
      },
      cass: {
        name: "Circuits and systems society(CASS)",
        image: {},
        linkObject: {},
        bg_color: "white"
      },
      sight: {
        name: "Special interested group on humanitarian Technology (SIGHT)",
        image: {},
        linkObject: {},
        bg_color: "white"
      },
      sps: {
        name: "Signal Processing Society (SPS)",
        image: {},
        linkObject: {},
        bg_color: "white"
      }
    }
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/featured-chapters/save.js":
/*!**********************************************!*\
  !*** ./src/blocks/featured-chapters/save.js ***!
  \**********************************************/
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
    content,
    chapters
  } = attributes;
  const theme_url = themeData.theme_url;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container mx-auto my-8 flex flex-col gap-8 px-4 sm:flex-row sm:gap-24 md:my-16 xl:px-28"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex max-h-min w-full flex-col gap-6 sm:w-5/12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-poppins text-3xl text-primary-800 sm:block"
  }, "Trusted Among Global Organizations"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: content,
    className: "font-poppins text-base font-light text-black"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h-full w-full sm:w-7/12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 640 580",
    className: "w-full overflow-visible"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "drop-shadow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    in: "SourceAlpha",
    stdDeviation: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: 1,
    dy: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComponentTransfer", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFuncA", {
    type: "linear",
    slope: "0.3"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMerge", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMergeNode", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMergeNode", {
    in: "SourceGraphic"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("filter", {
    id: "drop-shadow-hover",
    x: "-20%",
    y: "-20%",
    width: "140%",
    height: "140%"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feGaussianBlur", {
    in: "SourceAlpha",
    stdDeviation: 8
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feOffset", {
    dx: 0,
    dy: 0,
    result: "offsetblur"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feComponentTransfer", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feFuncA", {
    type: "linear",
    slope: "0.3"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMerge", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMergeNode", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("feMergeNode", {
    in: "SourceGraphic"
  }))), Object.entries(chapters).map(([chapterName, chapter]) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pattern", {
      id: `chapter_${chapterName}`,
      x: "0%",
      y: "0%",
      height: "100%",
      width: "100%",
      viewBox: "0 0 1 1"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      width: 1,
      height: 1,
      className: `fill-${chapter.bg_color}`
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("image", {
      xlinkHref: chapter.image && chapter.image.url ? chapter.image.url : `${theme_url}/assets/images/chapter-${chapterName}.png`,
      x: "0.1",
      y: "0.1",
      width: "0.8",
      height: "0.8",
      preserveAspectRatio: "xMidYMid meet"
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: "\n                .chapter-rect {\n                  filter: url(#drop-shadow);\n                  stroke-width: 0.25;\n                  filter: url(#drop-shadow);\n                  rx: 35;\n                }\n\n                .chapter-rect:hover {\n                  filter: url(#drop-shadow-hover);\n                }\n              "
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.pes.linkObject && chapters.pes.linkObject.url ? chapters.pes.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "86.5958",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#chapter_pes)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.ras.linkObject && chapters.ras.linkObject.url ? chapters.ras.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "272.491",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#chapter_ras)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.cs.linkObject && chapters.cs.linkObject.url ? chapters.cs.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "458.387",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#chapter_cs)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.sight.linkObject && chapters.sight.linkObject.url ? chapters.sight.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "10.9073",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#chapter_sight)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.ias.linkObject && chapters.ias.linkObject.url ? chapters.ias.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "196.803",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#chapter_ias)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.sps.linkObject && chapters.sps.linkObject.url ? chapters.sps.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "382.698",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#chapter_sps)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "580.262",
    y: "204.143",
    height: 170,
    rx: 35,
    fill: "#006DA5",
    className: "w-screen",
    filter: "url(#drop-shadow)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.wie.linkObject && chapters.wie.linkObject.url ? chapters.wie.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "86.5958",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#chapter_wie)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.cass.linkObject && chapters.cass.linkObject.url ? chapters.cass.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "272.491",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#chapter_cass)",
    className: "chapter-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: chapters.ies.linkObject && chapters.ies.linkObject.url ? chapters.ies.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "458.387",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#chapter_ies)",
    className: "chapter-rect stroke-primary-800"
  }))))));
}

/***/ }),

/***/ "./src/blocks/featured-chapters/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/featured-chapters/editor.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/featured-chapters/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/featured-chapters/style.scss ***!
  \*************************************************/
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

/***/ "./src/blocks/featured-chapters/block.json":
/*!*************************************************!*\
  !*** ./src/blocks/featured-chapters/block.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"ieeesbtkmce/featured-chapters","version":"0.1.0","title":"Featured Chapters","category":"ieeesbtkmce","icon":"smiley","description":"Featured Chapters block for front page","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/featured-chapters/index": 0,
/******/ 			"blocks/featured-chapters/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/featured-chapters/style-index"], () => (__webpack_require__("./src/blocks/featured-chapters/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
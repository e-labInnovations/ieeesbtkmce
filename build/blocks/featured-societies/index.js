/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/featured-societies/edit.js":
/*!***********************************************!*\
  !*** ./src/blocks/featured-societies/edit.js ***!
  \***********************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/featured-societies/editor.scss");





function Edit({
  attributes,
  setAttributes
}) {
  const {
    content,
    societies,
    title
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "w-full overflow-hidden"
  });
  const [theme_url, setTheme_url] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)("");
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setTheme_url(wp.data.select("core/block-editor").getSettings().themeData.theme_url);
  }, []);
  const setSocietyLink = (society, newLinkObject) => {
    setAttributes({
      societies: {
        ...societies,
        [society]: {
          ...societies[society],
          linkObject: newLinkObject
        }
      }
    });
  };
  function SocietyImage({
    society,
    image
  }) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "group relative w-1/2"
    }, image && image.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: media => {
        setAttributes({
          societies: {
            ...societies,
            [society]: {
              ...societies[society],
              image: {
                id: media.id,
                alt: media.alt || `Society ${society} Image`,
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
          societies: {
            ...societies,
            [society]: {
              ...societies[society],
              image: {
                id: media.id,
                alt: media.alt || `Society ${society} Image`,
                url: media.url
              }
            }
          }
        });
      },
      allowedTypes: ["image"],
      multiple: false,
      labels: {
        title: `Society ${society} Image`
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
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "font-poppins text-3xl text-primary-800 sm:block",
    tagName: "h2",
    value: title,
    onChange: title => setAttributes({
      title
    }),
    placeholder: "Title..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
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
  }))), Object.entries(societies).map(([societyName, society]) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pattern", {
      id: `society_${societyName}`,
      x: "0%",
      y: "0%",
      height: "100%",
      width: "100%",
      viewBox: "0 0 1 1"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      width: 1,
      height: 1,
      className: `fill-${society.bg_color}`
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("image", {
      xlinkHref: society.image && society.image.url ? society.image.url : `${theme_url}/assets/images/societies/front/${societyName}.svg`,
      x: "0.1",
      y: "0.1",
      width: "0.8",
      height: "0.8",
      preserveAspectRatio: "xMidYMid meet"
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: "\n                .society-rect {\n                  filter: url(#drop-shadow);\n                  stroke-width: 0.25;\n                  filter: url(#drop-shadow);\n                  rx: 35;\n                }\n\n                .society-rect:hover {\n                  filter: url(#drop-shadow-hover);\n                }\n              "
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "86.5958",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#society_pes)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "272.491",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#society_ras)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "458.387",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#society_cs)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "10.9073",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#society_sight)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "196.803",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#society_ias)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "382.698",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#society_sps)",
    className: "society-rect stroke-primary-800"
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
    fill: "url(#society_wie)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "272.491",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#society_cass)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "458.387",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#society_ies)",
    className: "society-rect stroke-primary-800"
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, Object.entries(societies).map(([societyName, society]) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: society.name
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
      className: "w-full max-w-full"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SocietyImage, {
      society: societyName,
      image: society.image
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLinkControl, {
      className: "w-full max-w-full",
      settings: [],
      value: society.linkObject,
      onChange: newLink => setSocietyLink(societyName, newLink),
      style: {
        display: "block",
        width: "80%"
      }
    })));
  })));
}

/***/ }),

/***/ "./src/blocks/featured-societies/index.js":
/*!************************************************!*\
  !*** ./src/blocks/featured-societies/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/featured-societies/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/featured-societies/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/blocks/featured-societies/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/blocks/featured-societies/save.js");







const attributes = {
  content: {
    type: "String"
  },
  title: {
    type: "string",
    default: "Trusted Among Global Organizations"
  },
  societies: {
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
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  attributes,
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 13.230115 13.048"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M 6.6274765,2.6598975e-5 C 6.5152114,3.6886897e-4 6.4030118,0.05940465 6.3153902,0.13059718 L 5.4247931,1.2913923 A 24.09596,24.09596 0 0 1 0.42310934,5.9938203 C 0.27707337,6.1106491 0.05784927,6.2202145 0.01403848,6.4100612 -0.03707411,6.5780026 0.05785612,6.724077 0.1600813,6.8263022 a 24.351523,24.351523 0 0 1 4.1620319,3.6216358 c 0.2263557,0.233657 0.4088924,0.467253 0.6279464,0.693609 0.3723917,0.48922 0.8032705,0.986021 1.146455,1.511751 0.109527,0.116829 0.1241443,0.291786 0.2920857,0.350201 0.1314323,0.04381 0.2921103,0.07302 0.4162409,0 l 0.1241553,-0.124156 a 24.753122,24.753122 0 0 1 5.6586875,-5.71001 c 0.219054,-0.1971486 0.635362,-0.2628564 0.642664,-0.6279464 a 0.56954087,0.56954087 0 0 0 -0.255481,-0.423411 h -0.0366 A 22.000341,22.000341 0 0 1 9.790983,3.5110923 L 8.7105676,2.3869022 C 8.27246,1.8976817 7.8416885,1.3573514 7.4327874,0.83892373 h -0.00755 L 6.9433366,0.13776724 C 6.8776204,0.10125825 6.8048947,0.0503666 6.7391785,0.0211594 6.7026696,0.00655581 6.6648983,-8.7491025e-5 6.6274765,2.6598975e-5 Z M 6.5886072,1.6831041 c 0.3286523,-0.00631 0.6660139,0.195853 0.9170135,0.4117125 0.386995,0.2920719 0.788798,0.6277926 1.1392847,0.9709772 l 0.065662,0.036605 a 18.933583,18.933583 0 0 1 2.6283936,2.9646316 c 0.116829,0.1898468 0.219306,0.4013272 0.153591,0.6422866 -0.248262,0.6206529 -0.752123,1.1174605 -1.19023,1.6577934 A 20.079966,20.079966 0 0 1 7.2135347,11.178152 C 6.9798771,11.338791 6.673107,11.484931 6.4029404,11.3608 5.5778372,10.922692 4.8697591,10.214371 4.1541828,9.5645109 A 15.582054,15.582054 0 0 1 1.8322151,6.9285699 C 1.7372917,6.7971375 1.7080598,6.6363814 1.7080598,6.4538364 1.7956814,6.1252555 2.0146846,5.8550477 2.2337385,5.5775794 A 21.613346,21.613346 0 0 1 4.8330743,2.8759758 l 0.1022678,-0.08038 C 5.3296392,2.4451093 5.7312573,2.1387097 6.1474598,1.8393359 h 0.00755 c 0.1369088,-0.1072452 0.2842127,-0.1533618 0.4336,-0.1562318 z m 0.052455,0.318879 C 6.535414,2.0015267 6.4267426,2.0324878 6.3153902,2.1091567 4.9353502,3.0583905 3.5918868,4.3653916 2.5258241,5.6870172 2.3067702,6.0155981 1.9197543,6.3224177 2.0876957,6.745922 2.2191281,7.0598993 2.4966238,7.2864636 2.671867,7.571234 a 20.547282,20.547282 0 0 0 3.599748,3.395213 c 0.5695404,0.365089 0.9785454,-0.226455 1.4166531,-0.496622 A 23.993734,23.993734 0 0 0 10.236659,8.0384196 v -0.021887 c 0.321278,-0.3796939 0.649751,-0.7668575 0.905314,-1.1830602 0.102225,-0.2044503 0.0513,-0.4817608 -0.07283,-0.657004 A 18.006254,18.006254 0 0 0 7.5056207,2.4744524 C 7.248232,2.2882565 6.9580056,2.0033522 6.6410622,2.0019831 Z m -0.026039,0.9762604 c 0.2482611,0.7155763 0.5038226,1.4238753 0.773989,2.1321498 l -0.5332259,0.00717 -0.014717,0.065663 0.08038,1.9061042 v 0.036228 c -0.1971485,0.029207 -0.4379679,0.021905 -0.6351164,0 l -0.014718,-0.01434 0.08755,-1.9717667 v -0.01434 C 6.2131293,5.1105072 6.0161276,5.1249969 5.8700916,5.1103933 L 6.4761505,3.3650495 6.6003058,2.9854136 Z M 5.154595,5.4971992 C 5.3663471,5.650537 5.5779593,5.7748378 5.7897115,5.9062701 5.3808108,6.0230989 4.8844258,6.1178644 4.6945789,6.5632741 4.7237862,6.9064587 5.1181533,7.0160488 5.381018,7.1036704 A 5.0017371,5.0017371 0 0 0 8.3452722,6.9870625 C 8.5205155,6.8848373 8.8054378,6.7607218 8.7762306,6.5051589 8.7470234,6.2349923 8.4330012,6.1107452 8.213947,6.0304254 8.0825145,6.045029 7.9585736,6.0741648 7.8271411,6.1179756 7.7614249,5.920827 7.7027935,5.7382368 7.6297755,5.5556919 8.0386766,5.6652188 8.4549942,5.7747595 8.8784982,5.8477775 v 0.014717 c -0.087622,0 -0.1825765,0.036324 -0.2701982,0.072833 v 0.014717 C 8.8565614,6.0741758 9.1924715,6.2711844 9.1924715,6.5851617 9.134057,6.9794588 8.7104406,7.1474701 8.4037647,7.2716007 7.1259501,7.6658975 5.5197399,7.6514188 4.3149431,7.1183878 4.0958891,7.0161627 3.8181299,6.8482721 3.7451119,6.5927091 3.6939993,6.1326958 4.1906341,5.8698078 4.5338187,5.6945646 4.7309672,5.606943 4.935541,5.5118028 5.154595,5.4971992 Z m 1.1023026,2.1615849 c 0.2482611,0.021905 0.4600832,0.014471 0.686439,0.00717 l 0.014717,0.095098 0.08038,1.9495019 C 6.7463616,9.754365 6.439645,9.725289 6.1621766,9.703384 6.2132896,9.0024114 6.2203876,8.3597576 6.2568966,7.6587849 Z m 2.6019777,4.0008939 a 0.43810836,0.43810836 0 0 0 -0.024152,3.78e-4 c -0.2409596,0 -0.460016,0.167944 -0.460016,0.460016 0,0.292072 0.2190564,0.460016 0.460016,0.460016 A 0.43810836,0.43810836 0 0 0 9.2947391,12.120072 0.43810836,0.43810836 0 0 0 8.8588753,11.659678 Z m -0.024152,0.109816 c 0.1825451,0 0.3283133,0.146127 0.3283133,0.350578 0,0.211752 -0.1457682,0.350578 -0.3283133,0.350578 -0.1825452,0 -0.3286908,-0.138826 -0.3286908,-0.350578 0,-0.211753 0.1461456,-0.350578 0.3286908,-0.350578 z m -0.1826481,0.109814 v 0.489074 h 0.109438 v -0.211705 h 0.051323 l 0.1094373,0.211705 H 9.0464288 L 8.9222733,12.149129 c 0.073018,0 0.1166084,-0.03616 0.1166084,-0.123778 0,-0.116828 -0.072857,-0.146043 -0.1969882,-0.146043 z m 0.109438,0.07283 h 0.07321 c 0.036509,0 0.09472,0.0074 0.09472,0.05849 0,0.05841 -0.029022,0.06566 -0.072833,0.06566 h -0.095098 z",
      fill: "#0a70a3"
    }))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/blocks/featured-societies/save.js":
/*!***********************************************!*\
  !*** ./src/blocks/featured-societies/save.js ***!
  \***********************************************/
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
    societies,
    title
  } = attributes;
  const theme_url = themeData.theme_url;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container mx-auto my-8 flex flex-col gap-8 px-4 sm:flex-row sm:gap-24 md:my-16 xl:px-28"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex max-h-min w-full flex-col gap-6 sm:w-5/12"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    value: title,
    className: "font-poppins text-3xl text-primary-800 sm:block"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
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
  }))), Object.entries(societies).map(([societyName, society]) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pattern", {
      id: `society_${societyName}`,
      x: "0%",
      y: "0%",
      height: "100%",
      width: "100%",
      viewBox: "0 0 1 1"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
      width: 1,
      height: 1,
      className: `fill-${society.bg_color}`
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("image", {
      xlinkHref: society.image && society.image.url ? society.image.url : `${theme_url}/assets/images/societies/front/${societyName}.svg`,
      x: "0.1",
      y: "0.1",
      width: "0.8",
      height: "0.8",
      preserveAspectRatio: "xMidYMid meet"
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: "\n                .society-rect {\n                  filter: url(#drop-shadow);\n                  stroke-width: 0.25;\n                  filter: url(#drop-shadow);\n                  rx: 35;\n                }\n\n                .society-rect:hover {\n                  filter: url(#drop-shadow-hover);\n                }\n              "
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.pes.linkObject && societies.pes.linkObject.url ? societies.pes.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "86.5958",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#society_pes)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.ras.linkObject && societies.ras.linkObject.url ? societies.ras.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "272.491",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#society_ras)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.cs.linkObject && societies.cs.linkObject.url ? societies.cs.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "458.387",
    y: "7.1709",
    width: 170,
    height: 170,
    fill: "url(#society_cs)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.sight.linkObject && societies.sight.linkObject.url ? societies.sight.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "10.9073",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#society_sight)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.ias.linkObject && societies.ias.linkObject.url ? societies.ias.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "196.803",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#society_ias)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.sps.linkObject && societies.sps.linkObject.url ? societies.sps.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "382.698",
    y: "204.143",
    width: 170,
    height: 170,
    fill: "url(#society_sps)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "580.262",
    y: "204.143",
    height: 170,
    rx: 35,
    fill: "#006DA5",
    className: "w-screen",
    filter: "url(#drop-shadow)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.wie.linkObject && societies.wie.linkObject.url ? societies.wie.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "86.5958",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#society_wie)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.cass.linkObject && societies.cass.linkObject.url ? societies.cass.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "272.491",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#society_cass)",
    className: "society-rect stroke-primary-800"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: societies.ies.linkObject && societies.ies.linkObject.url ? societies.ies.linkObject.url : "#"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "458.387",
    y: "401.115",
    width: 170,
    height: 170,
    fill: "url(#society_ies)",
    className: "society-rect stroke-primary-800"
  }))))));
}

/***/ }),

/***/ "./src/blocks/featured-societies/editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/featured-societies/editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/featured-societies/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/featured-societies/style.scss ***!
  \**************************************************/
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

/***/ "./src/blocks/featured-societies/block.json":
/*!**************************************************!*\
  !*** ./src/blocks/featured-societies/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"ieeesbtkmce/featured-societies","version":"0.1.0","title":"Featured Societies","category":"ieeesbtkmce","icon":"smiley","description":"Featured Societies block for front page","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/featured-societies/index": 0,
/******/ 			"blocks/featured-societies/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/featured-societies/style-index"], () => (__webpack_require__("./src/blocks/featured-societies/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
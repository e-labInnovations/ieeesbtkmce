/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/about-ieeesbtkmce/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/about-ieeesbtkmce/edit.js ***!
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
/* harmony import */ var _components_edit_icon_EditIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/edit-icon/EditIcon */ "./src/components/edit-icon/EditIcon.js");
/* harmony import */ var _components_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/image-picker/ImagePicker */ "./src/components/image-picker/ImagePicker.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/about-ieeesbtkmce/editor.scss");





function Edit({
  attributes,
  setAttributes
}) {
  const {
    content,
    image
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-8 flex flex-col gap-6 sm:flex-row md:my-16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full flex-col gap-6 sm:w-1/2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "font-poppins text-3xl text-primary-800 sm:hidden"
  }, "About IEEE SB TKMCE"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "group relative"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-full rounded-xl",
    image: image,
    onSelect: media => setAttributes({
      image: {
        id: media.id,
        alt: media.alt || "About TKMCE",
        url: media.url
      }
    }),
    title: "TKMCE About Image"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_edit_icon_EditIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex w-full flex-col gap-6 sm:w-1/2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "hidden font-poppins text-3xl text-primary-800 sm:block"
  }, "About IEEE SB TKMCE"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "font-poppins text-base font-light text-black",
    tagName: "p",
    value: content,
    onChange: content => setAttributes({
      content
    }),
    placeholder: "Content..."
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-8 w-8 fill-primary-800 transition ease-in-out hover:-translate-y-1",
    viewBox: "0 0 32 31",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M27.1609 0.581665H4.5724C3.54957 0.581665 2.56863 0.987982 1.84539 1.71123C1.12214 2.43448 0.71582 3.41541 0.71582 4.43824V27.0268C0.71582 28.0496 1.12214 29.0305 1.84539 29.7538C2.56863 30.477 3.54957 30.8833 4.5724 30.8833H15.6373V18.2754H13.1158V13.2322H15.6165V10.9531C15.6165 8.89039 16.5991 5.6678 20.9233 5.6678L24.8188 5.68344V10.0042H21.9899C21.5299 10.0042 20.8754 10.2333 20.8754 11.2158V13.2325H24.8831L24.4231 18.2757H20.6805V30.8833H27.1609C27.6674 30.8833 28.1689 30.7836 28.6368 30.5898C29.1047 30.396 29.5298 30.1119 29.8879 29.7538C30.2461 29.3957 30.5301 28.9705 30.7239 28.5026C30.9177 28.0347 31.0175 27.5332 31.0175 27.0268V4.43824C31.0175 3.93179 30.9177 3.4303 30.7239 2.96239C30.5301 2.49449 30.2461 2.06935 29.8879 1.71123C29.5298 1.35311 29.1047 1.06904 28.6368 0.875229C28.1689 0.681418 27.6674 0.581665 27.1609 0.581665Z",
    fill: "current"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-8 w-8 fill-primary-800 transition ease-in-out hover:-translate-y-1",
    viewBox: "0 0 31 31",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M24.1998 6.27649C23.7957 6.27649 23.4668 6.60538 23.4668 7.00951C23.4668 7.41364 23.7957 7.74253 24.1998 7.74253C24.604 7.74253 24.9328 7.4137 24.9328 7.00951C24.9328 6.60532 24.604 6.27649 24.1998 6.27649Z",
    fill: "current"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.4228 9.28833C11.8395 9.28833 8.92432 12.2035 8.92432 15.7868C8.92432 19.37 11.8395 22.2853 15.4228 22.2853C19.0061 22.2853 21.9213 19.3701 21.9213 15.7869C21.9213 12.2036 19.0061 9.28833 15.4228 9.28833Z",
    fill: "current"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.2427 0.689819H8.60329C4.03928 0.689819 0.326172 4.40293 0.326172 8.967V22.6063C0.326172 27.1704 4.03928 30.8834 8.60329 30.8834H22.2427C26.8067 30.8834 30.5198 27.1703 30.5198 22.6063V8.967C30.5198 4.40293 26.8067 0.689819 22.2427 0.689819ZM15.423 24.0682C10.8565 24.0682 7.1415 20.3531 7.1415 15.7866C7.1415 11.2201 10.8565 7.5052 15.423 7.5052C19.9894 7.5052 23.7045 11.2202 23.7045 15.7866C23.7045 20.3531 19.9894 24.0682 15.423 24.0682ZM24.1998 9.52593C22.8125 9.52593 21.6837 8.39721 21.6837 7.00984C21.6837 5.62247 22.8125 4.49368 24.1998 4.49368C25.5872 4.49368 26.7159 5.62241 26.7159 7.00978C26.7159 8.39715 25.5872 9.52593 24.1998 9.52593Z",
    fill: "current"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-8 w-8 fill-primary-800 transition ease-in-out hover:-translate-y-1",
    viewBox: "0 0 32 31",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16.9924 15.2144L23.8114 24.968H21.0129L15.4485 17.009V17.0085L14.6315 15.8402L8.13135 6.54224H10.9299L16.1755 14.046L16.9924 15.2144Z",
    fill: "current"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M27.8556 0.581665H4.10229C2.29406 0.581665 0.828125 2.0476 0.828125 3.85583V27.6092C0.828125 29.4174 2.29406 30.8833 4.10229 30.8833H27.8556C29.6639 30.8833 31.1298 29.4174 31.1298 27.6092V3.85583C31.1298 2.0476 29.6639 0.581665 27.8556 0.581665ZM20.1555 26.2781L14.5246 18.083L7.47474 26.2781H5.65269L13.7156 16.906L5.65269 5.17137H11.8024L17.1345 12.9315L23.8102 5.17137H25.6323L17.9438 14.1088H17.9433L26.3052 26.2781H20.1555Z",
    fill: "current"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-8 w-8 fill-primary-800 transition ease-in-out hover:-translate-y-1",
    viewBox: "0 0 32 31",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M23.1426 0.581665H8.0399C3.85538 0.581665 0.44043 3.99662 0.44043 8.18114V23.3079C0.44043 27.4684 3.85538 30.8833 8.0399 30.8833H23.1667C27.3512 30.8833 30.7662 27.4684 30.7662 23.2839V8.18114C30.7421 3.99662 27.3272 0.581665 23.1426 0.581665ZM10.541 25.1116H6.21218V12.6061H10.541V25.1116ZM8.35254 10.6822C7.12604 10.6822 6.14003 9.69622 6.14003 8.46972C6.14003 7.24323 7.12604 6.25722 8.35254 6.25722C9.57903 6.25722 10.565 7.24323 10.565 8.46972C10.541 9.69622 9.55498 10.6822 8.35254 10.6822ZM24.9944 25.1116H24.9704H21.363V19.0513C21.363 17.5843 21.1706 15.7085 19.1746 15.7085C17.1304 15.7085 16.7937 17.2957 16.7937 18.9551V25.1116H13.1864V12.6061H16.5532V14.2896H16.6494C17.1785 13.3276 18.405 12.5821 20.3289 12.5821C24.297 12.5821 24.9944 14.8667 24.9944 18.2576V25.1116Z",
    fill: "current"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "h-8 w-8 fill-primary-800 transition ease-in-out hover:-translate-y-1",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "current",
    d: "M 5.0566406 0.087890625 C 2.5986789 0.087890625 0.62109375 2.0654757 0.62109375 4.5234375 L 0.62109375 26.476562 C 0.62109375 28.934524 2.5986789 30.912109 5.0566406 30.912109 L 26.943359 30.912109 C 29.401321 30.912109 31.378906 28.934524 31.378906 26.476562 L 31.378906 4.5234375 C 31.378906 2.0654757 29.401321 0.087890625 26.943359 0.087890625 L 5.0566406 0.087890625 z M 12.171875 5.1914062 C 13.246153 5.1885432 14.714765 5.27107 16.275391 5.4941406 L 18.773438 5.9277344 C 21.035914 6.2846473 22.58143 6.7821645 23.519531 7.5214844 C 23.988582 7.8019157 24.292076 8.2349821 24.609375 8.8085938 C 24.912879 9.3057229 25.145743 9.9550669 25.228516 10.681641 C 25.297496 11.178769 25.380859 11.906338 25.380859 12.849609 C 25.449829 13.703651 25.449219 14.862644 25.449219 16.226562 L 25.462891 16.226562 C 25.462891 17.310048 25.463501 18.317115 25.394531 19.107422 C 25.311751 19.974211 25.159563 20.702088 25.007812 21.199219 C 24.773288 21.772828 24.539956 22.28145 24.222656 22.714844 C 23.919156 23.148238 23.449516 23.58213 22.980469 23.798828 C 22.59419 24.015525 22.057215 24.231597 21.339844 24.435547 C 20.650064 24.652245 19.793103 24.86955 18.689453 25.009766 L 16.193359 25.443359 C 13.392854 25.876753 11.282618 25.952926 10.041016 25.519531 C 8.5648793 25.086137 7.5432689 23.926217 7.0742188 22.128906 C 6.9224672 21.491562 6.7564776 20.471749 6.6875 19.248047 C 6.6047262 17.96061 6.5371094 16.367935 6.5371094 14.494141 C 6.5371094 12.97726 6.6060613 11.613708 6.7578125 10.542969 C 6.9233594 9.3957479 7.1574351 8.5165619 7.4609375 7.8027344 C 7.7782367 7.1526432 8.2333323 6.5779258 8.7851562 6.1445312 C 9.3231824 5.7111368 9.94412 5.4175596 10.730469 5.2773438 C 11.025349 5.2247628 11.527308 5.1931241 12.171875 5.1914062 z M 15.818359 9.1582031 C 12.873493 9.2248629 10.412109 11.714588 10.412109 15.15625 C 10.412109 18.610659 12.909241 21.274472 16.496094 20.777344 L 16.951172 20.701172 C 17.033952 20.701172 17.117188 20.624592 17.117188 20.484375 L 17.117188 18.96875 C 17.117188 18.89226 17.034557 18.751643 16.882812 18.828125 L 16.414062 18.892578 C 14.386112 19.109275 12.757812 17.603655 12.757812 15.15625 C 12.757812 13.932547 13.213183 12.84931 13.833984 12.199219 C 14.620335 11.485392 15.24218 11.205796 16.332031 11.269531 L 18.59375 11.408203 C 18.67653 11.408203 18.828125 11.345298 18.828125 11.205078 L 18.828125 9.6113281 C 18.828125 9.5348512 18.758564 9.4710128 18.675781 9.3945312 L 16.414062 9.1777344 C 16.214026 9.1602074 16.014684 9.1537591 15.818359 9.1582031 z M 15.875 12.708984 C 15.79222 12.708984 15.640625 12.773842 15.640625 12.914062 L 15.640625 14.353516 C 15.640625 14.429996 15.709444 14.570313 15.875 14.570312 L 18.759766 14.570312 L 18.759766 22.5625 C 18.759766 22.702716 18.828586 22.779607 18.994141 22.703125 L 20.386719 22.5625 C 20.455689 22.5625 20.539063 22.498361 20.539062 22.421875 L 20.539062 14.494141 L 22.884766 14.494141 C 22.953736 14.494141 23.119141 14.430311 23.119141 14.277344 L 23.119141 13.066406 C 23.188111 13.066406 23.118673 12.990234 22.953125 12.990234 L 15.875 12.708984 z "
  })))))));
}

/***/ }),

/***/ "./src/blocks/about-ieeesbtkmce/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/about-ieeesbtkmce/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/about-ieeesbtkmce/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/about-ieeesbtkmce/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/about-ieeesbtkmce/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/about-ieeesbtkmce/save.js");






const attributes = {
  content: {
    type: "string"
  },
  image: {
    type: "object"
  }
};
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  attributes,
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 16,
      height: 16,
      fill: "currentColor",
      className: "bi bi-house-heart",
      viewBox: "0 0 16 16"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
    }))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/about-ieeesbtkmce/save.js":
/*!**********************************************!*\
  !*** ./src/blocks/about-ieeesbtkmce/save.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function save({
  attributes
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Silence is golden");
}

/***/ }),

/***/ "./src/components/edit-icon/EditIcon.js":
/*!**********************************************!*\
  !*** ./src/components/edit-icon/EditIcon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function EditIcon() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "absolute -end-2 -top-2 hidden h-6  w-6 items-center justify-center rounded-full border-2 border-white bg-primary-800 p-1 text-xs font-bold text-white group-hover:inline-flex"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 18 18",
    width: 16,
    height: 16,
    className: "fill-white"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
    xlinkHref: "/icons.svg#icon-pencil-fill"
  })));
}

/***/ }),

/***/ "./src/components/image-picker/ImagePicker.js":
/*!****************************************************!*\
  !*** ./src/components/image-picker/ImagePicker.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImagePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function ImagePicker({
  image,
  onSelect,
  className,
  title
}) {
  if (image && image.url) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: onSelect,
      allowedTypes: ["image"],
      value: image.id,
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: image.url,
        onClick: open,
        className: className,
        alt: image.alt
      })
    })));
  } else {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
      onSelect: onSelect,
      allowedTypes: ["image"],
      multiple: false,
      labels: {
        title: title
      }
    });
  }
}

/***/ }),

/***/ "./src/blocks/about-ieeesbtkmce/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/about-ieeesbtkmce/editor.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/about-ieeesbtkmce/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/about-ieeesbtkmce/style.scss ***!
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

/***/ "./src/blocks/about-ieeesbtkmce/block.json":
/*!*************************************************!*\
  !*** ./src/blocks/about-ieeesbtkmce/block.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"apiVersion":2,"name":"ieeesbtkmce/about-ieeesbtkmce","version":"0.1.0","title":"About IEEE SB TKMCE","category":"ieeesbtkmce","description":"","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"blocks/about-ieeesbtkmce/index": 0,
/******/ 			"blocks/about-ieeesbtkmce/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/about-ieeesbtkmce/style-index"], () => (__webpack_require__("./src/blocks/about-ieeesbtkmce/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
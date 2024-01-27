/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

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
/*!**************************************************!*\
  !*** ./src/blocks/alumni-testimonials/script.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll(".alumni-testimonials").forEach(atSection => {
    // const file = "http://ieeesbtkmce.localhost/wp-json/alumni_testimonials/v1/all";
    const contentEle = atSection.querySelector("#at-content");
    const nameEle = atSection.querySelector("#at-name");
    const batchEle = atSection.querySelector("#at-batch");
    const svgEle = atSection.querySelector("svg");
    const totalTestimonialFields = 15;
    const defaultContent = contentEle.innerText;
    const generateChart = data => {
      const svg = d3.select(svgEle);
      let shuffledData = Array.from(data).sort(() => Math.random() - 0.5);
      const circles = svg.selectAll("circle");
      const maxTestimonials = Math.min(shuffledData.length, totalTestimonialFields);

      //additional radius storage
      circles.attr("data-r", function () {
        const radius = d3.select(this).attr("r");
        return radius;
      });
      shuffledData = shuffledData.slice(0, maxTestimonials).map((data, i) => {
        return {
          ...data,
          r: d3.select(circles.nodes()[i]).attr("r")
        };
      });
      const defs = svg.append("defs");
      shuffledData.forEach((obj, i) => {
        defs.append("pattern").attr("id", "pattern_" + obj.id).attr("width", 1).attr("height", 1).attr("patternUnits", "objectBoundingBox").append("svg:image").style("opacity", 0).attr("xlink:href", obj.img).attr("width", 2 * obj.r).style("opacity", 1);
        d3.select(circles.nodes()[i]).attr("fill", () => {
          return "url(#pattern_" + obj.id + ")";
        }).on("mouseover", function (e) {
          let currentCircle = d3.select(this);
          adjustNeighbors(currentCircle.attr("cx"), currentCircle.attr("cy"), currentCircle.attr("r"), false);
          nameEle.classList.remove("invisible");
          batchEle.classList.remove("invisible");
          nameEle.classList.add("visible");
          batchEle.classList.add("visible");
          nameEle.innerText = obj.name;
          batchEle.innerText = obj.batch;
          contentEle.innerText = obj.content;
          currentCircle.style("stroke", "#0B567F");
          let circleRadius = obj.r * 1.3;
          //Circle radius
          currentCircle.transition().ease(d3.easePolyInOut).duration(200).attr("r", circleRadius);
          //Image width
          d3.select("#pattern_" + obj.id).select("image").transition().ease(d3.easePolyInOut).duration(200).attr("width", 2 * circleRadius);
        }).on("mouseout", function (e) {
          let currentCircle = d3.select(this);
          adjustNeighbors(currentCircle.attr("cx"), currentCircle.attr("cy"), currentCircle.attr("r"), true);
          nameEle.classList.add("invisible");
          batchEle.classList.add("invisible");
          nameEle.classList.remove("visible");
          batchEle.classList.remove("visible");
          contentEle.innerText = defaultContent;
          currentCircle.style("stroke", "none");

          //Circle radius
          currentCircle.transition().ease(d3.easeExpInOut).duration(200).attr("r", obj.r);
          //Image width
          d3.select("#pattern_" + obj.id).select("image").transition().ease(d3.easeExpInOut).duration(200).attr("width", 2 * obj.r);
        });
      });
      function adjustNeighbors(x, y, r, scaleUp) {
        x = parseFloat(x);
        y = parseFloat(y);
        r = parseFloat(r);
        let circleRadius = r * 1.4;
        r = circleRadius; //+ 20;

        circles.nodes().map(circle => {
          let cir = d3.select(circle);
          let x2 = parseFloat(cir.attr("cx"));
          let y2 = parseFloat(cir.attr("cy"));
          let r2 = parseFloat(cir.attr("data-r"));
          var d = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
          if (d < r + r2 || d === r + r2) {
            // Calculate newR2 to avoid intersection or touching
            var newR2 = d - r;
            // Ensure r2 is not negative (which would make the circle disappear)
            newR2 = Math.max(newR2, 0);
            let cirFill = cir.attr("fill");
            const patternId = cirFill.includes("url") ? cirFill.slice(4, -1) : null; // Remove first 4 characters and last character

            if (scaleUp) {
              //Circle radius
              cir.transition().ease(d3.easeExpInOut).duration(200).attr("r", r2);

              //Image width
              if (patternId) {
                d3.select(patternId).select("image").transition().ease(d3.easeExpInOut).duration(200).attr("width", 2 * r2);
              }
            } else {
              //Circle radius
              cir.transition().ease(d3.easeExpInOut).duration(200).attr("r", newR2);

              //Image width
              if (patternId) {
                d3.select(patternId).select("image").transition().ease(d3.easeExpInOut).duration(200).attr("width", 2 * newR2);
              }
            }
          }
        });
      }
    };
    (async () => {
      function generateRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
      }
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
        path: "/alumni_testimonials/v1/all"
      }).then(data => {
        console.log(data);
        generateChart(data);
      });
    })();
  });
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
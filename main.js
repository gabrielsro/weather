/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 44vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options-compact {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-settings img {\n  height: auto;\n  width: 38px;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 45px;\n}\n\n.option-temperature label {\n  font-size: 1.1rem;\n}\n\n.selected-metric {\n  font-weight: bold;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload img {\n  width: auto;\n  height: 79%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 77%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow: auto;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-right: 7vw;\n  padding-left: 3vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > p:nth-child(2) {\n  font-size: 1.1rem;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.2rem;\n  justify-self: center;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: center;\n  font-size: 1.2rem;\n}\n\n.weather-gif {\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img {\n  height: auto;\n  width: 60px;\n}\n\n.cloudStats p,\n.windStats p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 44vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options-compact {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-settings img {\n  height: auto;\n  width: 38px;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 45px;\n}\n\n.option-temperature label {\n  font-size: 1.1rem;\n}\n\n.selected-metric {\n  font-weight: bold;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload img {\n  width: auto;\n  height: 79%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 77%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow: auto;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-right: 7vw;\n  padding-left: 3vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > p:nth-child(2) {\n  font-size: 1.1rem;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.2rem;\n  justify-self: center;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: center;\n  font-size: 1.2rem;\n}\n\n.weather-gif {\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img {\n  height: auto;\n  width: 60px;\n}\n\n.cloudStats p,\n.windStats p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/errorCards.js":
/*!***************************!*\
  !*** ./src/errorCards.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeErrorCard": () => (/* binding */ makeErrorCard)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gifAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifAPI */ "./src/gifAPI.js");



async function makeErrorCard(errorType) {
  let message = "";
  let image = new Image();
  if (errorType == 404) {
    message = "Sorry, we couldn't find that city";
    image.alt = "gif confused with entered city";
    try {
      image.src = await (0,_gifAPI__WEBPACK_IMPORTED_MODULE_1__.getErrorGif)();
    } catch (error) {
      console.log("Error while fetching error gif: ", error);
    }
  }
  let errorCard = document.createElement("div");
  errorCard.classList.add("error-card");
  let errorMessage = document.createElement("p");
  errorMessage.innerText = message;
  errorCard.appendChild(errorMessage);
  errorCard.appendChild(image);
  return errorCard;
}


/***/ }),

/***/ "./src/favoritesBar.js":
/*!*****************************!*\
  !*** ./src/favoritesBar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleUserInput */ "./src/handleUserInput.js");



const favoritesBar = {
  header: document.querySelector("header"),
  makeFavoritesBar() {
    let cities = localStorage.getItem("cities");
    cities = JSON.parse(cities);
    let favoritesBar = document.createElement("div");
    favoritesBar.classList.add("favorites-bar");
    cities.forEach((city) => {
      let cityLink = document.createElement("p");
      cityLink.innerText = `${city}`;
      cityLink.addEventListener("click", () => {
        let units = JSON.parse(localStorage.getItem("metric"));
        units ? (0,_handleUserInput__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city, "metric") : (0,_handleUserInput__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city, "imperial");
      });
      favoritesBar.appendChild(cityLink);
    });
    this.header.appendChild(favoritesBar);
  },
  refreshFavoritesBar() {
    let favoritesBar = document.querySelector(".favorites-bar");
    this.header.removeChild(favoritesBar);
    let cities = JSON.parse(localStorage.getItem("cities"));
    if (cities.length > 0) {
      this.makeFavoritesBar();
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favoritesBar);


/***/ }),

/***/ "./src/flagAPI.js":
/*!************************!*\
  !*** ./src/flagAPI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFlag": () => (/* binding */ getFlag)
/* harmony export */ });
const endpoint = "https://countryflagsapi.com/svg/";
function getFlag(code) {
  let src = `${endpoint}${code}`;
  return src;
}


/***/ }),

/***/ "./src/gifAPI.js":
/*!***********************!*\
  !*** ./src/gifAPI.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getErrorGif": () => (/* binding */ getErrorGif),
/* harmony export */   "getWeatherGif": () => (/* binding */ getWeatherGif)
/* harmony export */ });
const gifKey = "ZSqLZBoP1L25pS03G478pjRBb0NESb0C";
const errorGifIds = [
  "glmRyiSI3v5E4",
  "jJO1Bwuch5orK",
  "gKsJUddjnpPG0",
  "mEV42F38lur6PbfapW",
  "1xVbSX8UzIiMPMZjZP",
  "doJrCO8kCAgNy",
  "h4Z6RfuQycdiM",
  "3o7aCTPPm4OHfRLSH6",
];

async function getErrorGif() {
  let index = Math.floor(Math.random() * 8);
  let id = errorGifIds[index];
  let apiPromise = await fetch(
    `https://api.giphy.com/v1/gifs/${id}?api_key=${gifKey}`,
    { mode: "cors" }
  );
  let apiPromiseResolved = await apiPromise.json();
  let src = apiPromiseResolved.data.images.original.url;
  return src;
}

async function getWeatherGif(weather) {
  let id = "uymKgqrJ9Or60";
  if (weather.match(/rain/)) {
    if (
      weather.match(/\D+(?=\s)/)[0] == "light" ||
      weather.match(/\D+(?=\s)/)[0] == "drizzle"
    ) {
      id = "l0IrIkq7Q3iRII0hy";
    }
    if (weather.match(/thunderstorm/)) {
      console.log("thunderstorm");
      id = "3osxYzIQRqN4DOEddC";
    } else {
      id = "W0c3xcZ3F1d0EYYb0f";
    }
  }
  if (weather.match(/clouds/)) {
    if (weather.match(/\D+(?=\s)/)[0] == "overcast") {
      id = "dWIau1ZRyIj3j6YEaL";
    }
    if (
      weather.match(/\D+(?=\s)/)[0] == "few" ||
      weather.match(/\D+(?=\s)/)[0] == "scattered"
    ) {
      id = "uOuiK4F5zZkZ2";
    }
    if (weather.match(/\D+(?=\s)/)[0] == "broken") {
      id = "12eCo8gpSMMgrS";
    }
  }
  if (weather.match(/snow/)) {
    if (weather.match(/\D+(?=\s)/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "light") {
        id = "3ohc11DpNMf7qnqxR6";
      }
    } else {
      id = "JWegbsAWQS1YA";
    }
  }
  if (weather.match(/haze/)) {
    id = "r2OMuTCFo0rv2rgAL5";
  }
  if (weather.match(/mist/)) {
    id = "mW03sTZVT9IY0";
  }
  if (weather.match(/clear/)) {
    id = "RqSJ6nQVsOpxe";
  }
  if (weather.match(/fog/)) {
    id = "oAbvMXvah1M0U";
  }

  if (weather.match(/sleet/)) {
    id = "d3mlmtNPoxNrt4Bi";
  }

  if (weather.match(/smoke/)) {
    id = "l2Je9dUI5LpzfHGTe";
  }
  let apiPromise = await fetch(
    `https://api.giphy.com/v1/gifs/${id}?api_key=${gifKey}`,
    { mode: "cors" }
  );
  let apiPromiseResolved = await apiPromise.json();
  let src = apiPromiseResolved.data.images.original.url;
  return src;
}




/***/ }),

/***/ "./src/handleUserInput.js":
/*!********************************!*\
  !*** ./src/handleUserInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showData */ "./src/showData.js");
/* harmony import */ var _errorCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorCards */ "./src/errorCards.js");
/* harmony import */ var _gifAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gifAPI */ "./src/gifAPI.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./src/options.js");








const result = document.querySelector(".result");

const handleUserInput = {
  weatherKey: "8ae2d13e54ebef775efff2c52817a5e2",
  gifKey: "ZSqLZBoP1L25pS03G478pjRBb0NESb0C",
  units: JSON.parse(localStorage.getItem("metric")),
  handleSearchIcon() {
    let searchbar = document.querySelector(".searchbar > input");
    let units = JSON.parse(localStorage.getItem("metric"));
    let unitsToUse = "";
    units ? (unitsToUse = "metric") : (unitsToUse = "imperial");
    if (searchbar.value) {
      getWeather(searchbar.value, unitsToUse);
    } else {
      let city = document.querySelector(".city");
      if (city) {
        getWeather(city.innerText, unitsToUse);
      }
    }
  },
};

async function getWeather(location, units) {
  let apiPromise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${handleUserInput.weatherKey}&units=${units}`,
    { mode: "cors" }
  );
  let apiPromiseResolved = await apiPromise.json();
  if (apiPromiseResolved.cod == 404) {
    let errorCard = await (0,_errorCards__WEBPACK_IMPORTED_MODULE_2__.makeErrorCard)(404);
    (0,_showData__WEBPACK_IMPORTED_MODULE_1__.clean)(result);
    result.appendChild(errorCard);
    (0,_options__WEBPACK_IMPORTED_MODULE_4__.getOptions)(false);
  } else {
    let city = apiPromiseResolved.name;

    let cities = await JSON.parse(localStorage.getItem("cities"));
    if (cities.length > 0 && cities.some((c) => c == city)) {
      (0,_options__WEBPACK_IMPORTED_MODULE_4__.getOptionsUnfavorite)();
    } else {
      (0,_options__WEBPACK_IMPORTED_MODULE_4__.getOptions)(true);
    }

    let country = null;
    country = apiPromiseResolved.sys.country;
    let timeNow = new Date().valueOf();
    let offset = new Date().getTimezoneOffset() * 60 * 1000;
    let dateAtCity = new Date(
      timeNow + offset + apiPromiseResolved.timezone * 1000
    );
    let timeAtCity = dateAtCity.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    let dateAtCitySimple = dateAtCity.toDateString();
    let temperature = apiPromiseResolved.main.temp;
    let temperatureFeels = apiPromiseResolved.main.feels_like;
    let weather = apiPromiseResolved.weather[0].description;
    let gifSrc = "";
    try {
      gifSrc = await (0,_gifAPI__WEBPACK_IMPORTED_MODULE_3__.getWeatherGif)(weather);
    } catch (error) {
      console.log("Error while fetching weather gif: ", error);
    }
    let rain1h = "";
    let rain3h = "";
    if (apiPromiseResolved.rain) {
      if (apiPromiseResolved.rain["1h"]) {
        rain1h = apiPromiseResolved.rain["1h"];
      }
      if (apiPromiseResolved.rain["3h"]) {
        rain3h = apiPromiseResolved.rain["3h"];
      }
    }
    let snow1h = "";
    let snow3h = "";
    if (apiPromiseResolved.snow) {
      if (apiPromiseResolved.snow["1h"]) {
        snow1h = apiPromiseResolved.snow["1h"];
      }
      if (apiPromiseResolved.snow["3h"]) {
        snow3h = apiPromiseResolved.snow["3h"];
      }
    }
    let sunrise = new Date(
      new Date(
        apiPromiseResolved.sys["sunrise"] * 1000 +
          apiPromiseResolved.timezone * 1000 +
          offset
      )
    ).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    let sunset = new Date(
      new Date(
        apiPromiseResolved.sys["sunset"] * 1000 +
          apiPromiseResolved.timezone * 1000 +
          offset
      )
    ).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
    let cloudiness = apiPromiseResolved.clouds["all"];
    let wind = apiPromiseResolved.wind["speed"];
    (0,_showData__WEBPACK_IMPORTED_MODULE_1__.showOnInfo)(
      units,
      city,
      country,
      timeAtCity,
      dateAtCitySimple,
      temperature,
      temperatureFeels,
      weather,
      rain1h,
      rain3h,
      snow1h,
      snow3h,
      sunrise,
      sunset,
      cloudiness,
      wind,
      gifSrc
    );
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleUserInput);


/***/ }),

/***/ "./src/makeBasicsCard.js":
/*!*******************************!*\
  !*** ./src/makeBasicsCard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeBasicsCard": () => (/* binding */ makeBasicsCard)
/* harmony export */ });
/* harmony import */ var _flagAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flagAPI */ "./src/flagAPI.js");


function makeBasicsCard(
  city,
  country,
  time,
  date,
  temp,
  tempFeels,
  tempUnit
) {
  let basics = document.createElement("div");
  basics.classList.add("basics");

  let basicsCity = document.createElement("p");
  basicsCity.innerText = `${city}`;
  basicsCity.classList.add("city");
  let basicsCountry = document.createElement("p");
  basicsCountry.innerText = `${country}`;
  let basicsTime = document.createElement("p");
  basicsTime.innerText = `${time}`;
  let basicsDate = document.createElement("p");
  basicsDate.innerText = `${date}`;
  let retrievalTime = document.createElement("p");
  retrievalTime.innerText = `Last update: ${new Date().toLocaleString()}`;
  let tempTemperature = document.createElement("p");
  tempTemperature.innerText = `${temp} ${tempUnit}`;
  let tempFeelsLike = document.createElement("p");
  tempFeelsLike.innerText = `${tempFeels} ${tempUnit}`;
  let feelsLabel = document.createElement("p");
  feelsLabel.innerText = "Feels like: ";

  let basicsTitleCity = document.createElement("div");
  let basicsTitleCountry = document.createElement("div");
  let basicsDetails = document.createElement("div");
  let basicsTemperature = document.createElement("div");
  basicsTemperature.classList.add("basics-temperature");
  basicsTitleCity.appendChild(basicsCity);
  basicsTitleCountry.appendChild(basicsCountry);
  let flag = document.createElement("img");
  flag.setAttribute(
    "crossorigin",
    "Cross-Origin-Resource-Policy: cross-origin "
  );
  flag.alt = `${country} flag`;
  flag.src = (0,_flagAPI__WEBPACK_IMPORTED_MODULE_0__.getFlag)(country);
  flag.classList.add("flag");

  let basicsDateAndTime = document.createElement("div");
  basicsDateAndTime.appendChild(basicsTime);
  basicsDateAndTime.appendChild(basicsDate);

  basics.appendChild(basicsTitleCity);
  basicsDetails.appendChild(flag);
  basicsDetails.appendChild(basicsDateAndTime);
  basicsDetails.appendChild(retrievalTime);
  basics.appendChild(basicsDetails);
  basicsTemperature.appendChild(tempTemperature);
  basicsTemperature.appendChild(feelsLabel);
  basicsTemperature.appendChild(tempFeelsLike);
  basics.appendChild(basicsTemperature);

  return basics;
}


/***/ }),

/***/ "./src/makeCloudsCard.js":
/*!*******************************!*\
  !*** ./src/makeCloudsCard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeCloudsCard": () => (/* binding */ makeCloudsCard)
/* harmony export */ });
/* harmony import */ var _cloud_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloud-outline.svg */ "./src/cloud-outline.svg");


function makeCloudsCard(cloudiness) {
  let cloudStats = document.createElement("div");
  cloudStats.classList.add("cloudStats");
  let cloudinessIcon = new Image();
  cloudinessIcon.alt = "Cloudiness icon";
  cloudinessIcon.src = _cloud_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  let cloudinessClouds = document.createElement("p");
  cloudinessClouds.innerText = `Cloudiness: ${cloudiness} %`;
  cloudStats.appendChild(cloudinessIcon);
  cloudStats.appendChild(cloudinessClouds);
  return cloudStats;
}


/***/ }),

/***/ "./src/makeGifCard.js":
/*!****************************!*\
  !*** ./src/makeGifCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGifCard": () => (/* binding */ makeGifCard)
/* harmony export */ });
function makeGifCard(gifSrc) {
  let image = new Image();
  image.alt = "weather gif";
  image.src = gifSrc;
  image.classList.add("weather-gif");
  return image;
}


/***/ }),

/***/ "./src/makeOverviewCard.js":
/*!*********************************!*\
  !*** ./src/makeOverviewCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeOverviewCard": () => (/* binding */ makeOverviewCard)
/* harmony export */ });
function makeOverviewCard(weather) {
  let overview = document.createElement("div");
  overview.classList.add("overview");
  let overviewWeather = document.createElement("p");
  overviewWeather.innerText = `${weather}`;
  overview.appendChild(overviewWeather);

  return overview;
}


/***/ }),

/***/ "./src/makeRainCard.js":
/*!*****************************!*\
  !*** ./src/makeRainCard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeRainCard": () => (/* binding */ makeRainCard)
/* harmony export */ });
/* harmony import */ var _rain_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rain.svg */ "./src/rain.svg");


function makeRainCard(rainVol1h, rainVol3h) {
  let rainCard = document.createElement("div");
  rainCard.classList.add("rain-card");

  let rainIcon = new Image();
  rainIcon.alt = "Rain icon";
  rainIcon.src = _rain_svg__WEBPACK_IMPORTED_MODULE_0__;

  let rainInfo = document.createElement("div");

  let title = document.createElement("p");
  title.innerText = "Rain volume";

  let rain1h = document.createElement("p");
  rain1h.innerText = `Last hour: ${rainVol1h} mm`;

  rainInfo.appendChild(title);
  rainInfo.appendChild(rain1h);

  if (rainVol3h) {
    let rain3h = document.createElement("p");
    rain3h.innerText = `Last 3h: ${rainVol3h}`;
    rainInfo.appendChild(rain3h);
  }

  rainCard.appendChild(rainIcon);
  rainCard.appendChild(rainInfo);

  return rainCard;
}


/***/ }),

/***/ "./src/makeSearchBar.js":
/*!******************************!*\
  !*** ./src/makeSearchBar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeSearchBar": () => (/* binding */ makeSearchBar)
/* harmony export */ });
/* harmony import */ var _search_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-outline.svg */ "./src/search-outline.svg");
/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleUserInput */ "./src/handleUserInput.js");



function makeSearchBar() {
  const searchBar = document.querySelector(".searchbar");
  let searchIcon = new Image();
  searchIcon.alt = "Search Icon";
  searchIcon.src = _search_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  searchBar.appendChild(searchIcon);

  searchIcon.addEventListener("click", _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon);
  const searchBarInput = document.querySelector(".searchbar > input");
  searchBarInput.onfocus = () => {
    searchBarInput.addEventListener("keydown", (event) => {
      if (event.key == "Enter") {
        searchIcon.click();
      }
    });
  };
}


/***/ }),

/***/ "./src/makeSnowCard.js":
/*!*****************************!*\
  !*** ./src/makeSnowCard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeSnowCard": () => (/* binding */ makeSnowCard)
/* harmony export */ });
/* harmony import */ var _snow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snow.svg */ "./src/snow.svg");


function makeSnowCard(snowVol1h, snowVol3h) {
  let snowCard = document.createElement("div");
  snowCard.classList.add("snow-card");

  let snowIcon = new Image();
  snowIcon.alt = "Snow icon";
  snowIcon.src = _snow_svg__WEBPACK_IMPORTED_MODULE_0__;

  let snowInfo = document.createElement("div");

  let title = document.createElement("p");
  title.innerText = "Snow volume";

  let snow1h = document.createElement("p");
  snow1h.innerText = `Last hour: ${snowVol1h} mm`;

  snowInfo.appendChild(title);
  snowInfo.appendChild(snow1h);

  if (snowVol3h) {
    let snow3h = document.createElement("p");
    snow3h.innerText = `Last 3h: ${snowVol3h}`;
    snowInfo.appendChild(snow3h);
  }

  snowCard.appendChild(snowIcon);
  snowCard.appendChild(snowInfo);

  return snowCard;
}


/***/ }),

/***/ "./src/makeSunCard.js":
/*!****************************!*\
  !*** ./src/makeSunCard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeSunCard": () => (/* binding */ makeSunCard)
/* harmony export */ });
/* harmony import */ var _sunrise_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sunrise.svg */ "./src/sunrise.svg");
/* harmony import */ var _sunset_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sunset.svg */ "./src/sunset.svg");



function makeSunCard(sunrise, sunset) {
  let sunStats = document.createElement("div");
  sunStats.classList.add("sunStats");

  let sunriseElement = document.createElement("div");
  let sunsetElement = document.createElement("div");

  let sunriseIcon = new Image();
  sunriseIcon.alt = "Sunrise icon";
  sunriseIcon.src = _sunrise_svg__WEBPACK_IMPORTED_MODULE_0__;

  let sunsetIcon = new Image();
  sunsetIcon.alt = "Sunset icon";
  sunsetIcon.src = _sunset_svg__WEBPACK_IMPORTED_MODULE_1__;

  let sunStatsSunrise = document.createElement("p");
  sunStatsSunrise.innerText = `Sunrise: ${sunrise}`;

  let sunStatsSunset = document.createElement("p");
  sunStatsSunset.innerText = `Sunset: ${sunset}`;

  sunriseElement.appendChild(sunriseIcon);
  sunriseElement.appendChild(sunStatsSunrise);

  sunsetElement.appendChild(sunsetIcon);
  sunsetElement.appendChild(sunStatsSunset);

  sunStats.appendChild(sunriseElement);
  sunStats.appendChild(sunsetElement);
  return sunStats;
}


/***/ }),

/***/ "./src/makeWindCard.js":
/*!*****************************!*\
  !*** ./src/makeWindCard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeWindCard": () => (/* binding */ makeWindCard)
/* harmony export */ });
/* harmony import */ var _wind_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wind.svg */ "./src/wind.svg");


function makeWindCard(wind) {
  let windStats = document.createElement("div");
  windStats.classList.add("windStats");
  let windIcon = new Image();
  windIcon.alt = "Wind icon";
  windIcon.src = _wind_svg__WEBPACK_IMPORTED_MODULE_0__;
  let windStatsSpeed = document.createElement("p");
  windStatsSpeed.innerText = `Wind Speed: ${wind} m/s`;
  windStats.appendChild(windIcon);
  windStats.appendChild(windStatsSpeed);
  return windStats;
}


/***/ }),

/***/ "./src/optionFavorite.js":
/*!*******************************!*\
  !*** ./src/optionFavorite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeFavoriteOption": () => (/* binding */ makeFavoriteOption)
/* harmony export */ });
/* harmony import */ var _fav_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fav.svg */ "./src/fav.svg");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/options.js");




function makeFavoriteOption() {
  let favoriteOption = document.createElement("div");
  favoriteOption.classList.add("option-favorite");
  let favoriteImage = new Image();
  favoriteImage.alt = "Favorite icon";
  favoriteImage.src = _fav_svg__WEBPACK_IMPORTED_MODULE_0__;
  favoriteOption.appendChild(favoriteImage);

  favoriteOption.addEventListener("click", () => {
    let city = document.querySelector(".city");
    let cities = JSON.parse(localStorage.getItem("cities"));
    cities.push(city.innerText);
    let citiesStrigified = JSON.stringify(cities);
    localStorage.setItem("cities", `${citiesStrigified}`);
    let favoritesBarElement = document.querySelector(".favorites-bar");
    if (favoritesBarElement) {
      _favoritesBar__WEBPACK_IMPORTED_MODULE_1__["default"].refreshFavoritesBar();
    } else {
      _favoritesBar__WEBPACK_IMPORTED_MODULE_1__["default"].makeFavoritesBar();
    }
    (0,_options__WEBPACK_IMPORTED_MODULE_2__.getOptionsUnfavorite)();
  });

  return favoriteOption;
}


/***/ }),

/***/ "./src/optionReload.js":
/*!*****************************!*\
  !*** ./src/optionReload.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeReloadOption": () => (/* binding */ makeReloadOption)
/* harmony export */ });
/* harmony import */ var _reload_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reload.svg */ "./src/reload.svg");


function makeReloadOption() {
  let reloadOption = document.createElement("div");
  let reloadImage = new Image();
  reloadImage.alt = "Reload icon";
  reloadImage.src = _reload_svg__WEBPACK_IMPORTED_MODULE_0__;

  reloadOption.appendChild(reloadImage);

  reloadOption.classList.add("option-reload");

  return reloadOption;
}


/***/ }),

/***/ "./src/optionSettings.js":
/*!*******************************!*\
  !*** ./src/optionSettings.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeSettingsOption": () => (/* binding */ makeSettingsOption)
/* harmony export */ });
/* harmony import */ var _settings_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.svg */ "./src/settings.svg");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/options.js");




function makeSettingsOption() {
  let settingsOption = document.createElement("div");
  settingsOption.classList.add("option-settings");
  let settingsImage = new Image();
  settingsImage.alt = "Settings icon";
  settingsImage.src = _settings_svg__WEBPACK_IMPORTED_MODULE_0__;
  settingsOption.appendChild(settingsImage);

  settingsOption.addEventListener("click", () => {
    console.log("Uy gonorrea");
  });

  return settingsOption;
}


/***/ }),

/***/ "./src/optionShowFavs.js":
/*!*******************************!*\
  !*** ./src/optionShowFavs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeShowFavsOption": () => (/* binding */ makeShowFavsOption)
/* harmony export */ });
/* harmony import */ var _favs_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favs.svg */ "./src/favs.svg");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/options.js");




function makeShowFavsOption() {
  let favsOption = document.createElement("div");
  favsOption.classList.add("option-favs");
  let favsImage = new Image();
  favsImage.alt = "Show favorites icon";
  favsImage.src = _favs_svg__WEBPACK_IMPORTED_MODULE_0__;
  favsOption.appendChild(favsImage);

  favsOption.addEventListener("click", () => {
    console.log("Uy gonorrea");
  });

  return favsOption;
}


/***/ }),

/***/ "./src/optionTemperature.js":
/*!**********************************!*\
  !*** ./src/optionTemperature.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTemperatureOption": () => (/* binding */ makeTemperatureOption)
/* harmony export */ });
/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleUserInput */ "./src/handleUserInput.js");
/* harmony import */ var _thermometer_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thermometer-outline.svg */ "./src/thermometer-outline.svg");



function makeTemperatureOption() {
  let temperatureOptions = document.createElement("div");
  let tempIcon = new Image();
  tempIcon.alt = "Temperature icon";
  tempIcon.src = _thermometer_outline_svg__WEBPACK_IMPORTED_MODULE_1__;

  let metric = JSON.parse(localStorage.getItem("metric"));

  let celsius = document.createElement("label");
  celsius.classList.add("celsius-label");
  celsius.setAttribute("for", "celsius");
  let fahrenheit = document.createElement("label");
  fahrenheit.classList.add("fahrenheit-label");
  fahrenheit.setAttribute("for", "fahrenheit");
  celsius.innerText = "°C";
  fahrenheit.innerText = "°F";

  if (metric) {
    celsius.classList.add("selected-metric");
  } else {
    celsius.classList.remove("selected-metric");
  }
  celsius.addEventListener("click", () => {
    localStorage.setItem("metric", "true");
    _handleUserInput__WEBPACK_IMPORTED_MODULE_0__["default"].handleSearchIcon();
  });
  celsius.setAttribute("value", "metric");

  if (!metric) {
    fahrenheit.classList.add("selected-metric");
  }
  fahrenheit.addEventListener("click", () => {
    localStorage.setItem("metric", "false");
    _handleUserInput__WEBPACK_IMPORTED_MODULE_0__["default"].handleSearchIcon();
  });

  let divCelsius = document.createElement("div");
  let divFahrenheit = document.createElement("div");
  divCelsius.appendChild(celsius);
  divFahrenheit.appendChild(fahrenheit);

  let tempInputs = document.createElement("div");
  tempInputs.appendChild(divCelsius);
  tempInputs.appendChild(divFahrenheit);

  temperatureOptions.appendChild(tempIcon);
  temperatureOptions.appendChild(tempInputs);

  temperatureOptions.classList.add("option-temperature");

  return temperatureOptions;
}


/***/ }),

/***/ "./src/optionUnfavorite.js":
/*!*********************************!*\
  !*** ./src/optionUnfavorite.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUnfavoriteOption": () => (/* binding */ makeUnfavoriteOption)
/* harmony export */ });
/* harmony import */ var _unfav_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unfav.svg */ "./src/unfav.svg");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/options.js");




function makeUnfavoriteOption() {
  let unfavoriteOption = document.createElement("div");
  unfavoriteOption.classList.add("option-unfavorite");
  let unfavoriteIcon = new Image();
  unfavoriteIcon.alt = "Remove from favorites icon";
  unfavoriteIcon.src = _unfav_svg__WEBPACK_IMPORTED_MODULE_0__;

  unfavoriteOption.appendChild(unfavoriteIcon);

  unfavoriteOption.addEventListener("click", () => {
    let city = document.querySelector(".city");
    let cities = JSON.parse(localStorage.getItem("cities"));
    let citiesFiltered = cities.filter((c) => c !== city.innerText);
    localStorage.setItem("cities", `${JSON.stringify(citiesFiltered)}`);
    _favoritesBar__WEBPACK_IMPORTED_MODULE_1__["default"].refreshFavoritesBar();
    (0,_options__WEBPACK_IMPORTED_MODULE_2__.getOptions)(true);
  });

  return unfavoriteOption;
}


/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOptions": () => (/* binding */ getOptions),
/* harmony export */   "getOptionsUnfavorite": () => (/* binding */ getOptionsUnfavorite)
/* harmony export */ });
/* harmony import */ var _optionTemperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optionTemperature */ "./src/optionTemperature.js");
/* harmony import */ var _optionReload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionReload */ "./src/optionReload.js");
/* harmony import */ var _optionFavorite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionFavorite */ "./src/optionFavorite.js");
/* harmony import */ var _optionUnfavorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./optionUnfavorite */ "./src/optionUnfavorite.js");
/* harmony import */ var _optionShowFavs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optionShowFavs */ "./src/optionShowFavs.js");
/* harmony import */ var _optionSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./optionSettings */ "./src/optionSettings.js");
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showData */ "./src/showData.js");








const optionsDiv = {
  options: document.querySelector(".options"),
  getTemperatureOptions() {
    let temperatureOptions = (0,_optionTemperature__WEBPACK_IMPORTED_MODULE_0__.makeTemperatureOption)();
    this.options.appendChild(temperatureOptions);
  },
  getReloadOptions() {
    let reloadOption = (0,_optionReload__WEBPACK_IMPORTED_MODULE_1__.makeReloadOption)();
    this.options.appendChild(reloadOption);
  },
  getFavoriteOption() {
    let favoriteOption = (0,_optionFavorite__WEBPACK_IMPORTED_MODULE_2__.makeFavoriteOption)();
    this.options.appendChild(favoriteOption);
  },
  getUnFavoriteOption() {
    let unfavoriteOption = (0,_optionUnfavorite__WEBPACK_IMPORTED_MODULE_3__.makeUnfavoriteOption)();
    this.options.appendChild(unfavoriteOption);
  },
  getShowFavsOption() {
    let showFavsOption = (0,_optionShowFavs__WEBPACK_IMPORTED_MODULE_4__.makeShowFavsOption)();
    this.options.appendChild(showFavsOption);
  },
  getSettingsOption() {
    let settingsOption = (0,_optionSettings__WEBPACK_IMPORTED_MODULE_5__.makeSettingsOption)();
    this.options.appendChild(settingsOption);
  },
};

function getOptions(all) {
  (0,_showData__WEBPACK_IMPORTED_MODULE_6__.clean)(optionsDiv.options);
  if (all) {
    let cities = JSON.parse(localStorage.getItem("cities"));
    if (cities.length > 0) {
      optionsDiv.options.classList.remove("options-compact");
      optionsDiv.getSettingsOption();
      optionsDiv.getTemperatureOptions();
      optionsDiv.getReloadOptions();
      optionsDiv.getFavoriteOption();
      optionsDiv.getShowFavsOption();
    } else {
      optionsDiv.options.classList.remove("options-compact");
      optionsDiv.getSettingsOption();
      optionsDiv.getTemperatureOptions();
      optionsDiv.getReloadOptions();
      optionsDiv.getFavoriteOption();
    }
  } else {
    optionsDiv.options.classList.toggle("options-compact");
    optionsDiv.getSettingsOption();
    optionsDiv.getTemperatureOptions();
  }
}

function getOptionsUnfavorite() {
  (0,_showData__WEBPACK_IMPORTED_MODULE_6__.clean)(optionsDiv.options);
  optionsDiv.options.classList.remove("options-compact");
  optionsDiv.getSettingsOption();
  optionsDiv.getTemperatureOptions();
  optionsDiv.getReloadOptions();
  optionsDiv.getUnFavoriteOption();
  optionsDiv.getShowFavsOption();
}




/***/ }),

/***/ "./src/showData.js":
/*!*************************!*\
  !*** ./src/showData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clean": () => (/* binding */ clean),
/* harmony export */   "showOnInfo": () => (/* binding */ showOnInfo)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _makeBasicsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeBasicsCard */ "./src/makeBasicsCard.js");
/* harmony import */ var _makeOverviewCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeOverviewCard */ "./src/makeOverviewCard.js");
/* harmony import */ var _makeSunCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeSunCard */ "./src/makeSunCard.js");
/* harmony import */ var _makeCloudsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeCloudsCard */ "./src/makeCloudsCard.js");
/* harmony import */ var _makeWindCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./makeWindCard */ "./src/makeWindCard.js");
/* harmony import */ var _makeGifCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./makeGifCard */ "./src/makeGifCard.js");
/* harmony import */ var _makeSnowCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./makeSnowCard */ "./src/makeSnowCard.js");
/* harmony import */ var _makeRainCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./makeRainCard */ "./src/makeRainCard.js");










const result = document.querySelector(".result");

function showOnInfo(
  units,
  city,
  country,
  time,
  date,
  temp,
  tempFeels,
  weather,
  rainVol1h,
  rainVol3h,
  snowVol1h,
  snowVol3h,
  sunrise,
  sunset,
  cloudiness,
  wind,
  gifSrc
) {
  clean(result);
  let tempUnit = "";
  units == "metric" ? (tempUnit = "°C") : (tempUnit = "°F");

  let basicsCard = (0,_makeBasicsCard__WEBPACK_IMPORTED_MODULE_1__.makeBasicsCard)(
    city,
    country,
    time,
    date,
    temp,
    tempFeels,
    tempUnit
  );
  let overviewCard = (0,_makeOverviewCard__WEBPACK_IMPORTED_MODULE_2__.makeOverviewCard)(weather);
  let sunCard = (0,_makeSunCard__WEBPACK_IMPORTED_MODULE_3__.makeSunCard)(sunrise, sunset);
  let cloudsCard = (0,_makeCloudsCard__WEBPACK_IMPORTED_MODULE_4__.makeCloudsCard)(cloudiness);
  let windCard = (0,_makeWindCard__WEBPACK_IMPORTED_MODULE_5__.makeWindCard)(wind);
  let gifCard = (0,_makeGifCard__WEBPACK_IMPORTED_MODULE_6__.makeGifCard)(gifSrc);
  let snowCard = (0,_makeSnowCard__WEBPACK_IMPORTED_MODULE_7__.makeSnowCard)(snowVol1h, snowVol3h);
  let rainCard = (0,_makeRainCard__WEBPACK_IMPORTED_MODULE_8__.makeRainCard)(rainVol1h, rainVol3h);

  let cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  let info = document.createElement("div");
  info.classList.add("info");

  info.appendChild(basicsCard);
  info.appendChild(overviewCard);
  info.appendChild(gifCard);
  if (snowVol1h || snowVol3h) {
    info.appendChild(snowCard);
  }
  if (rainVol1h || rainVol3h) {
    info.appendChild(rainCard);
  }
  info.appendChild(cloudsCard);
  info.appendChild(windCard);
  info.appendChild(sunCard);

  result.appendChild(info);
}

function clean(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}




/***/ }),

/***/ "./src/cloud-outline.svg":
/*!*******************************!*\
  !*** ./src/cloud-outline.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8de9c74fe3de2e2bd8c3.svg";

/***/ }),

/***/ "./src/fav.svg":
/*!*********************!*\
  !*** ./src/fav.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5318ab9ef536ea7b735.svg";

/***/ }),

/***/ "./src/favs.svg":
/*!**********************!*\
  !*** ./src/favs.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "159c89cf2a3f0c7305c5.svg";

/***/ }),

/***/ "./src/rain.svg":
/*!**********************!*\
  !*** ./src/rain.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51186bdedd8a548aa08b.svg";

/***/ }),

/***/ "./src/reload.svg":
/*!************************!*\
  !*** ./src/reload.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c2cd7152d9c5249e0b7.svg";

/***/ }),

/***/ "./src/search-outline.svg":
/*!********************************!*\
  !*** ./src/search-outline.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4be0f579536375deb314.svg";

/***/ }),

/***/ "./src/settings.svg":
/*!**************************!*\
  !*** ./src/settings.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7543c45a50de8abc157.svg";

/***/ }),

/***/ "./src/snow.svg":
/*!**********************!*\
  !*** ./src/snow.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67a63a9235aaf5b7b6a4.svg";

/***/ }),

/***/ "./src/sunrise.svg":
/*!*************************!*\
  !*** ./src/sunrise.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5c6ea07d9b495fe2234.svg";

/***/ }),

/***/ "./src/sunset.svg":
/*!************************!*\
  !*** ./src/sunset.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02db3534f0aa78cd9a80.svg";

/***/ }),

/***/ "./src/thermometer-outline.svg":
/*!*************************************!*\
  !*** ./src/thermometer-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9dcd07d19c17b50e20b.svg";

/***/ }),

/***/ "./src/unfav.svg":
/*!***********************!*\
  !*** ./src/unfav.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85e5041838bafaabf9c2.svg";

/***/ }),

/***/ "./src/wind.svg":
/*!**********************!*\
  !*** ./src/wind.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea224fd76fa01d74e090.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./src/options.js");
/* harmony import */ var _makeSearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeSearchBar */ "./src/makeSearchBar.js");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");




(0,_makeSearchBar__WEBPACK_IMPORTED_MODULE_1__.makeSearchBar)();

if (localStorage.length > 0) {
  if (localStorage.getItem("cities")) {
    if (JSON.parse(localStorage.getItem("cities")).length > 0) {
      _favoritesBar__WEBPACK_IMPORTED_MODULE_2__["default"].makeFavoritesBar();
    }
  } else {
    let citiesArray = [];
    let metric = true;
    let citiesArrayJSON = JSON.stringify(citiesArray);
    localStorage.setItem("cities", `${citiesArrayJSON}`);
    localStorage.setItem("metric", `${metric}`);
  }
} else {
  let citiesArray = [];
  let metric = true;
  let citiesArrayJSON = JSON.stringify(citiesArray);
  localStorage.setItem("cities", `${citiesArrayJSON}`);
  localStorage.setItem("metric", `${metric}`);
}

(0,_options__WEBPACK_IMPORTED_MODULE_0__.getOptions)(false);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNTO0FBQ047O0FBRTFDLDZEQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0VBQTZCO0FBQ25DO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQkFBZ0I7QUFDdEQsc0NBQXNDLE9BQU87QUFDN0M7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRCxvQ0FBb0MsT0FBTztBQUMzQzs7QUFFQSxvREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9lcnJvckNhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZmF2b3JpdGVzQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZmxhZ0FQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2dpZkFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2hhbmRsZVVzZXJJbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VCYXNpY3NDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZUNsb3Vkc0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlR2lmQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VPdmVydmlld0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlUmFpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlU2VhcmNoQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVNub3dDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVN1bkNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlV2luZENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25GYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblJlbG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblNldHRpbmdzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uU2hvd0ZhdnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25UZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblVuZmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2hvd0RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXZiYXIsXFxuLm9wdGlvbnMge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLm5hdmJhciA+IGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuNXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW5wdXQge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNDR2dztcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzRweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5vcHRpb25zLWNvbXBhY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxufVxcblxcbi5vcHRpb25zIGRpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2dmg7XFxufVxcblxcbi5vcHRpb24tc2V0dGluZ3MgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzOHB4O1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5zZWxlY3RlZC1tZXRyaWMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjFlbTtcXG4gIHdpZHRoOiAxLjFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbi5vcHRpb24tcmVsb2FkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3OSU7XFxufVxcblxcbi5vcHRpb24tZmF2b3JpdGUsXFxuLm9wdGlvbi11bmZhdm9yaXRlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSBpbWcsXFxuLm9wdGlvbi11bmZhdm9yaXRlIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNzclO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdiA+IGRpdiBkaXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XFxuICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmFzaWNzLFxcbi53ZWF0aGVyLWdpZixcXG4ub3ZlcnZpZXcsXFxuLnN1blN0YXRzLFxcbi5jbG91ZFN0YXRzLFxcbi53aW5kU3RhdHMsXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkLFxcbi5mYXZvcml0ZXMtYmFyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xcbiAgLmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDF2dztcXG4gIH1cXG5cXG4gIC5pbmZvIGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG59XFxuXFxuLnN1blN0YXRzIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4uYmFzaWNzIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAzZnIgMWZyO1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgcGFkZGluZy1yaWdodDogN3Z3O1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjd2aDtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBwIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmZsYWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvIDMpO1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpmaXJzdC1jaGlsZCxcXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpudGgtY2hpbGQoMikge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLndlYXRoZXItZ2lmIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLm92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5vdmVydmlldyA+IHAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zbm93LWNhcmQsXFxuLnJhaW4tY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLnNub3ctY2FyZCBpbWcsXFxuLnJhaW4tY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOmZpcnN0LWNoaWxkLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40dmg7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSxcXG4uc25vdy1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMyksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYsXFxuLnJhaW4tY2FyZCA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uc3VuU3RhdHMgaW1nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uc3VuU3RhdHMgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3VkU3RhdHMsXFxuLndpbmRTdGF0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5naWYgPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBpbWcsXFxuLndpbmRTdGF0cyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIHAsXFxuLndpbmRTdGF0cyBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBwYWRkaW5nOiAydnc7XFxufVxcblxcbi5lcnJvci1jYXJkIHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7Ozs7Ozs7RUFTRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2IsUUFBUTtFQUNSLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBOzs7O0VBSUUsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdmJhcixcXG4ub3B0aW9ucyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ubmF2YmFyID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA0NHZ3O1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzNHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLm9wdGlvbnMtY29tcGFjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuXFxuLm9wdGlvbnMgZGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDZ2aDtcXG59XFxuXFxuLm9wdGlvbi1zZXR0aW5ncyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM4cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNDVweDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnNlbGVjdGVkLW1ldHJpYyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDEuMWVtO1xcbiAgd2lkdGg6IDEuMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uLXJlbG9hZCBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDc5JTtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSxcXG4ub3B0aW9uLXVuZmF2b3JpdGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ub3B0aW9uLWZhdm9yaXRlIGltZyxcXG4ub3B0aW9uLXVuZmF2b3JpdGUgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3NyU7XFxufVxcblxcbi5vcHRpb25zID4gZGl2ID4gZGl2IGRpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5mYXZvcml0ZXMtYmFyIHAge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDN2dztcXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5iYXNpY3MsXFxuLndlYXRoZXItZ2lmLFxcbi5vdmVydmlldyxcXG4uc3VuU3RhdHMsXFxuLmNsb3VkU3RhdHMsXFxuLndpbmRTdGF0cyxcXG4uc25vdy1jYXJkLFxcbi5yYWluLWNhcmQsXFxuLmZhdm9yaXRlcy1iYXIge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAuaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXZ3O1xcbiAgfVxcblxcbiAgLmluZm8gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbi5iYXNpY3Mge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDNmciAxZnI7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiA3dnc7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuN3ZoO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IHAge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZmxhZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi80O1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8gMyk7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOmZpcnN0LWNoaWxkLFxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ud2VhdGhlci1naWYge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm92ZXJ2aWV3ID4gcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uc25vdy1jYXJkIGltZyxcXG4ucmFpbi1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQsXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjR2aDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdixcXG4ucmFpbi1jYXJkID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBpbWcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLmdpZiA+IGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIGltZyxcXG4ud2luZFN0YXRzIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmNsb3VkU3RhdHMgcCxcXG4ud2luZFN0YXRzIHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5lcnJvci1jYXJkIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHBhZGRpbmc6IDJ2dztcXG59XFxuXFxuLmVycm9yLWNhcmQgcCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbi5lcnJvci1jYXJkIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRFcnJvckdpZiB9IGZyb20gXCIuL2dpZkFQSVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFrZUVycm9yQ2FyZChlcnJvclR5cGUpIHtcbiAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaWYgKGVycm9yVHlwZSA9PSA0MDQpIHtcbiAgICBtZXNzYWdlID0gXCJTb3JyeSwgd2UgY291bGRuJ3QgZmluZCB0aGF0IGNpdHlcIjtcbiAgICBpbWFnZS5hbHQgPSBcImdpZiBjb25mdXNlZCB3aXRoIGVudGVyZWQgY2l0eVwiO1xuICAgIHRyeSB7XG4gICAgICBpbWFnZS5zcmMgPSBhd2FpdCBnZXRFcnJvckdpZigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGZldGNoaW5nIGVycm9yIGdpZjogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cbiAgbGV0IGVycm9yQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVycm9yQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY2FyZFwiKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgZXJyb3JDYXJkLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG4gIGVycm9yQ2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIHJldHVybiBlcnJvckNhcmQ7XG59XG4iLCJpbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuXG5jb25zdCBmYXZvcml0ZXNCYXIgPSB7XG4gIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSxcbiAgbWFrZUZhdm9yaXRlc0JhcigpIHtcbiAgICBsZXQgY2l0aWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIik7XG4gICAgY2l0aWVzID0gSlNPTi5wYXJzZShjaXRpZXMpO1xuICAgIGxldCBmYXZvcml0ZXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZhdm9yaXRlc0Jhci5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzLWJhclwiKTtcbiAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xuICAgICAgbGV0IGNpdHlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjaXR5TGluay5pbm5lclRleHQgPSBgJHtjaXR5fWA7XG4gICAgICBjaXR5TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgdW5pdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWV0cmljXCIpKTtcbiAgICAgICAgdW5pdHMgPyBnZXRXZWF0aGVyKGNpdHksIFwibWV0cmljXCIpIDogZ2V0V2VhdGhlcihjaXR5LCBcImltcGVyaWFsXCIpO1xuICAgICAgfSk7XG4gICAgICBmYXZvcml0ZXNCYXIuYXBwZW5kQ2hpbGQoY2l0eUxpbmspO1xuICAgIH0pO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0Jhcik7XG4gIH0sXG4gIHJlZnJlc2hGYXZvcml0ZXNCYXIoKSB7XG4gICAgbGV0IGZhdm9yaXRlc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzLWJhclwiKTtcbiAgICB0aGlzLmhlYWRlci5yZW1vdmVDaGlsZChmYXZvcml0ZXNCYXIpO1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZhdm9yaXRlc0JhcjtcbiIsImNvbnN0IGVuZHBvaW50ID0gXCJodHRwczovL2NvdW50cnlmbGFnc2FwaS5jb20vc3ZnL1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZsYWcoY29kZSkge1xuICBsZXQgc3JjID0gYCR7ZW5kcG9pbnR9JHtjb2RlfWA7XG4gIHJldHVybiBzcmM7XG59XG4iLCJjb25zdCBnaWZLZXkgPSBcIlpTcUxaQm9QMUwyNXBTMDNHNDc4cGpSQmIwTkVTYjBDXCI7XG5jb25zdCBlcnJvckdpZklkcyA9IFtcbiAgXCJnbG1SeWlTSTN2NUU0XCIsXG4gIFwiakpPMUJ3dWNoNW9yS1wiLFxuICBcImdLc0pVZGRqbnBQRzBcIixcbiAgXCJtRVY0MkYzOGx1cjZQYmZhcFdcIixcbiAgXCIxeFZiU1g4VXpJaU1QTVpqWlBcIixcbiAgXCJkb0pyQ084a0NBZ055XCIsXG4gIFwiaDRaNlJmdVF5Y2RpTVwiLFxuICBcIjNvN2FDVFBQbTRPSGZSTFNINlwiLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RXJyb3JHaWYoKSB7XG4gIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICBsZXQgaWQgPSBlcnJvckdpZklkc1tpbmRleF07XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLyR7aWR9P2FwaV9rZXk9JHtnaWZLZXl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBsZXQgc3JjID0gYXBpUHJvbWlzZVJlc29sdmVkLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgcmV0dXJuIHNyYztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckdpZih3ZWF0aGVyKSB7XG4gIGxldCBpZCA9IFwidXltS2dxcko5T3I2MFwiO1xuICBpZiAod2VhdGhlci5tYXRjaCgvcmFpbi8pKSB7XG4gICAgaWYgKFxuICAgICAgd2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImxpZ2h0XCIgfHxcbiAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJkcml6emxlXCJcbiAgICApIHtcbiAgICAgIGlkID0gXCJsMElySWtxN1EzaVJJSTBoeVwiO1xuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvdGh1bmRlcnN0b3JtLykpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidGh1bmRlcnN0b3JtXCIpO1xuICAgICAgaWQgPSBcIjNvc3hZeklRUnFONERPRWRkQ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IFwiVzBjM3hjWjNGMWQwRVlZYjBmXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9jbG91ZHMvKSkge1xuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwib3ZlcmNhc3RcIikge1xuICAgICAgaWQgPSBcImRXSWF1MVpSeUlqM2o2WUVhTFwiO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiZmV3XCIgfHxcbiAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJzY2F0dGVyZWRcIlxuICAgICkge1xuICAgICAgaWQgPSBcInVPdWlLNEY1elprWjJcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJicm9rZW5cIikge1xuICAgICAgaWQgPSBcIjEyZUNvOGdwU01NZ3JTXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9zbm93LykpIHtcbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKSkge1xuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJsaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCIzb2hjMTFEcE5NZjdxbnF4UjZcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSBcIkpXZWdic0FXUVMxWUFcIjtcbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL2hhemUvKSkge1xuICAgIGlkID0gXCJyMk9NdVRDRm8wcnYycmdBTDVcIjtcbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvbWlzdC8pKSB7XG4gICAgaWQgPSBcIm1XMDNzVFpWVDlJWTBcIjtcbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvY2xlYXIvKSkge1xuICAgIGlkID0gXCJScVNKNm5RVnNPcHhlXCI7XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL2ZvZy8pKSB7XG4gICAgaWQgPSBcIm9BYnZNWHZhaDFNMFVcIjtcbiAgfVxuXG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9zbGVldC8pKSB7XG4gICAgaWQgPSBcImQzbWxtdE5Qb3hOcnQ0QmlcIjtcbiAgfVxuXG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9zbW9rZS8pKSB7XG4gICAgaWQgPSBcImwySmU5ZFVJNUxwemZIR1RlXCI7XG4gIH1cbiAgbGV0IGFwaVByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvJHtpZH0/YXBpX2tleT0ke2dpZktleX1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGxldCBzcmMgPSBhcGlQcm9taXNlUmVzb2x2ZWQuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICByZXR1cm4gc3JjO1xufVxuXG5leHBvcnQgeyBnZXRFcnJvckdpZiwgZ2V0V2VhdGhlckdpZiB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNob3dPbkluZm8gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IHsgbWFrZUVycm9yQ2FyZCB9IGZyb20gXCIuL2Vycm9yQ2FyZHNcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcbmltcG9ydCB7IGdldFdlYXRoZXJHaWYgfSBmcm9tIFwiLi9naWZBUElcIjtcbmltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zVW5mYXZvcml0ZSB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmNvbnN0IGhhbmRsZVVzZXJJbnB1dCA9IHtcbiAgd2VhdGhlcktleTogXCI4YWUyZDEzZTU0ZWJlZjc3NWVmZmYyYzUyODE3YTVlMlwiLFxuICBnaWZLZXk6IFwiWlNxTFpCb1AxTDI1cFMwM0c0NzhwalJCYjBORVNiMENcIixcbiAgdW5pdHM6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpLFxuICBoYW5kbGVTZWFyY2hJY29uKCkge1xuICAgIGxldCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaGJhciA+IGlucHV0XCIpO1xuICAgIGxldCB1bml0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpO1xuICAgIGxldCB1bml0c1RvVXNlID0gXCJcIjtcbiAgICB1bml0cyA/ICh1bml0c1RvVXNlID0gXCJtZXRyaWNcIikgOiAodW5pdHNUb1VzZSA9IFwiaW1wZXJpYWxcIik7XG4gICAgaWYgKHNlYXJjaGJhci52YWx1ZSkge1xuICAgICAgZ2V0V2VhdGhlcihzZWFyY2hiYXIudmFsdWUsIHVuaXRzVG9Vc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbiAgICAgIGlmIChjaXR5KSB7XG4gICAgICAgIGdldFdlYXRoZXIoY2l0eS5pbm5lclRleHQsIHVuaXRzVG9Vc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCB1bml0cykge1xuICBsZXQgYXBpUHJvbWlzZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7aGFuZGxlVXNlcklucHV0LndlYXRoZXJLZXl9JnVuaXRzPSR7dW5pdHN9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLmNvZCA9PSA0MDQpIHtcbiAgICBsZXQgZXJyb3JDYXJkID0gYXdhaXQgbWFrZUVycm9yQ2FyZCg0MDQpO1xuICAgIGNsZWFuKHJlc3VsdCk7XG4gICAgcmVzdWx0LmFwcGVuZENoaWxkKGVycm9yQ2FyZCk7XG4gICAgZ2V0T3B0aW9ucyhmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNpdHkgPSBhcGlQcm9taXNlUmVzb2x2ZWQubmFtZTtcblxuICAgIGxldCBjaXRpZXMgPSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDAgJiYgY2l0aWVzLnNvbWUoKGMpID0+IGMgPT0gY2l0eSkpIHtcbiAgICAgIGdldE9wdGlvbnNVbmZhdm9yaXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldE9wdGlvbnModHJ1ZSk7XG4gICAgfVxuXG4gICAgbGV0IGNvdW50cnkgPSBudWxsO1xuICAgIGNvdW50cnkgPSBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzLmNvdW50cnk7XG4gICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBsZXQgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwO1xuICAgIGxldCBkYXRlQXRDaXR5ID0gbmV3IERhdGUoXG4gICAgICB0aW1lTm93ICsgb2Zmc2V0ICsgYXBpUHJvbWlzZVJlc29sdmVkLnRpbWV6b25lICogMTAwMFxuICAgICk7XG4gICAgbGV0IHRpbWVBdENpdHkgPSBkYXRlQXRDaXR5LnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIH0pO1xuICAgIGxldCBkYXRlQXRDaXR5U2ltcGxlID0gZGF0ZUF0Q2l0eS50b0RhdGVTdHJpbmcoKTtcbiAgICBsZXQgdGVtcGVyYXR1cmUgPSBhcGlQcm9taXNlUmVzb2x2ZWQubWFpbi50ZW1wO1xuICAgIGxldCB0ZW1wZXJhdHVyZUZlZWxzID0gYXBpUHJvbWlzZVJlc29sdmVkLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgd2VhdGhlciA9IGFwaVByb21pc2VSZXNvbHZlZC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGxldCBnaWZTcmMgPSBcIlwiO1xuICAgIHRyeSB7XG4gICAgICBnaWZTcmMgPSBhd2FpdCBnZXRXZWF0aGVyR2lmKHdlYXRoZXIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGZldGNoaW5nIHdlYXRoZXIgZ2lmOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgICBsZXQgcmFpbjFoID0gXCJcIjtcbiAgICBsZXQgcmFpbjNoID0gXCJcIjtcbiAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnJhaW4pIHtcbiAgICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQucmFpbltcIjFoXCJdKSB7XG4gICAgICAgIHJhaW4xaCA9IGFwaVByb21pc2VSZXNvbHZlZC5yYWluW1wiMWhcIl07XG4gICAgICB9XG4gICAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIzaFwiXSkge1xuICAgICAgICByYWluM2ggPSBhcGlQcm9taXNlUmVzb2x2ZWQucmFpbltcIjNoXCJdO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc25vdzFoID0gXCJcIjtcbiAgICBsZXQgc25vdzNoID0gXCJcIjtcbiAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnNub3cpIHtcbiAgICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuc25vd1tcIjFoXCJdKSB7XG4gICAgICAgIHNub3cxaCA9IGFwaVByb21pc2VSZXNvbHZlZC5zbm93W1wiMWhcIl07XG4gICAgICB9XG4gICAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIzaFwiXSkge1xuICAgICAgICBzbm93M2ggPSBhcGlQcm9taXNlUmVzb2x2ZWQuc25vd1tcIjNoXCJdO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3VucmlzZSA9IG5ldyBEYXRlKFxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC5zeXNbXCJzdW5yaXNlXCJdICogMTAwMCArXG4gICAgICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnRpbWV6b25lICogMTAwMCArXG4gICAgICAgICAgb2Zmc2V0XG4gICAgICApXG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICB9KTtcbiAgICBsZXQgc3Vuc2V0ID0gbmV3IERhdGUoXG4gICAgICBuZXcgRGF0ZShcbiAgICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnN5c1tcInN1bnNldFwiXSAqIDEwMDAgK1xuICAgICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDAgK1xuICAgICAgICAgIG9mZnNldFxuICAgICAgKVxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IGNsb3VkaW5lc3MgPSBhcGlQcm9taXNlUmVzb2x2ZWQuY2xvdWRzW1wiYWxsXCJdO1xuICAgIGxldCB3aW5kID0gYXBpUHJvbWlzZVJlc29sdmVkLndpbmRbXCJzcGVlZFwiXTtcbiAgICBzaG93T25JbmZvKFxuICAgICAgdW5pdHMsXG4gICAgICBjaXR5LFxuICAgICAgY291bnRyeSxcbiAgICAgIHRpbWVBdENpdHksXG4gICAgICBkYXRlQXRDaXR5U2ltcGxlLFxuICAgICAgdGVtcGVyYXR1cmUsXG4gICAgICB0ZW1wZXJhdHVyZUZlZWxzLFxuICAgICAgd2VhdGhlcixcbiAgICAgIHJhaW4xaCxcbiAgICAgIHJhaW4zaCxcbiAgICAgIHNub3cxaCxcbiAgICAgIHNub3czaCxcbiAgICAgIHN1bnJpc2UsXG4gICAgICBzdW5zZXQsXG4gICAgICBjbG91ZGluZXNzLFxuICAgICAgd2luZCxcbiAgICAgIGdpZlNyY1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVXNlcklucHV0O1xuIiwiaW1wb3J0IHsgZ2V0RmxhZyB9IGZyb20gXCIuL2ZsYWdBUElcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCYXNpY3NDYXJkKFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB0aW1lLFxuICBkYXRlLFxuICB0ZW1wLFxuICB0ZW1wRmVlbHMsXG4gIHRlbXBVbml0XG4pIHtcbiAgbGV0IGJhc2ljcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhc2ljcy5jbGFzc0xpc3QuYWRkKFwiYmFzaWNzXCIpO1xuXG4gIGxldCBiYXNpY3NDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc0NpdHkuaW5uZXJUZXh0ID0gYCR7Y2l0eX1gO1xuICBiYXNpY3NDaXR5LmNsYXNzTGlzdC5hZGQoXCJjaXR5XCIpO1xuICBsZXQgYmFzaWNzQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBiYXNpY3NDb3VudHJ5LmlubmVyVGV4dCA9IGAke2NvdW50cnl9YDtcbiAgbGV0IGJhc2ljc1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmFzaWNzVGltZS5pbm5lclRleHQgPSBgJHt0aW1lfWA7XG4gIGxldCBiYXNpY3NEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc0RhdGUuaW5uZXJUZXh0ID0gYCR7ZGF0ZX1gO1xuICBsZXQgcmV0cmlldmFsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByZXRyaWV2YWxUaW1lLmlubmVyVGV4dCA9IGBMYXN0IHVwZGF0ZTogJHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCl9YDtcbiAgbGV0IHRlbXBUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZW1wVGVtcGVyYXR1cmUuaW5uZXJUZXh0ID0gYCR7dGVtcH0gJHt0ZW1wVW5pdH1gO1xuICBsZXQgdGVtcEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZW1wRmVlbHNMaWtlLmlubmVyVGV4dCA9IGAke3RlbXBGZWVsc30gJHt0ZW1wVW5pdH1gO1xuICBsZXQgZmVlbHNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmZWVsc0xhYmVsLmlubmVyVGV4dCA9IFwiRmVlbHMgbGlrZTogXCI7XG5cbiAgbGV0IGJhc2ljc1RpdGxlQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBiYXNpY3NUaXRsZUNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYmFzaWNzRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBiYXNpY3NUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJiYXNpY3MtdGVtcGVyYXR1cmVcIik7XG4gIGJhc2ljc1RpdGxlQ2l0eS5hcHBlbmRDaGlsZChiYXNpY3NDaXR5KTtcbiAgYmFzaWNzVGl0bGVDb3VudHJ5LmFwcGVuZENoaWxkKGJhc2ljc0NvdW50cnkpO1xuICBsZXQgZmxhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGZsYWcuc2V0QXR0cmlidXRlKFxuICAgIFwiY3Jvc3NvcmlnaW5cIixcbiAgICBcIkNyb3NzLU9yaWdpbi1SZXNvdXJjZS1Qb2xpY3k6IGNyb3NzLW9yaWdpbiBcIlxuICApO1xuICBmbGFnLmFsdCA9IGAke2NvdW50cnl9IGZsYWdgO1xuICBmbGFnLnNyYyA9IGdldEZsYWcoY291bnRyeSk7XG4gIGZsYWcuY2xhc3NMaXN0LmFkZChcImZsYWdcIik7XG5cbiAgbGV0IGJhc2ljc0RhdGVBbmRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFzaWNzRGF0ZUFuZFRpbWUuYXBwZW5kQ2hpbGQoYmFzaWNzVGltZSk7XG4gIGJhc2ljc0RhdGVBbmRUaW1lLmFwcGVuZENoaWxkKGJhc2ljc0RhdGUpO1xuXG4gIGJhc2ljcy5hcHBlbmRDaGlsZChiYXNpY3NUaXRsZUNpdHkpO1xuICBiYXNpY3NEZXRhaWxzLmFwcGVuZENoaWxkKGZsYWcpO1xuICBiYXNpY3NEZXRhaWxzLmFwcGVuZENoaWxkKGJhc2ljc0RhdGVBbmRUaW1lKTtcbiAgYmFzaWNzRGV0YWlscy5hcHBlbmRDaGlsZChyZXRyaWV2YWxUaW1lKTtcbiAgYmFzaWNzLmFwcGVuZENoaWxkKGJhc2ljc0RldGFpbHMpO1xuICBiYXNpY3NUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh0ZW1wVGVtcGVyYXR1cmUpO1xuICBiYXNpY3NUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChmZWVsc0xhYmVsKTtcbiAgYmFzaWNzVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQodGVtcEZlZWxzTGlrZSk7XG4gIGJhc2ljcy5hcHBlbmRDaGlsZChiYXNpY3NUZW1wZXJhdHVyZSk7XG5cbiAgcmV0dXJuIGJhc2ljcztcbn1cbiIsImltcG9ydCBDbG91ZGluZXNzSWNvbiBmcm9tIFwiLi9jbG91ZC1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNsb3Vkc0NhcmQoY2xvdWRpbmVzcykge1xuICBsZXQgY2xvdWRTdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3VkU3RhdHMuY2xhc3NMaXN0LmFkZChcImNsb3VkU3RhdHNcIik7XG4gIGxldCBjbG91ZGluZXNzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjbG91ZGluZXNzSWNvbi5hbHQgPSBcIkNsb3VkaW5lc3MgaWNvblwiO1xuICBjbG91ZGluZXNzSWNvbi5zcmMgPSBDbG91ZGluZXNzSWNvbjtcbiAgbGV0IGNsb3VkaW5lc3NDbG91ZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2xvdWRpbmVzc0Nsb3Vkcy5pbm5lclRleHQgPSBgQ2xvdWRpbmVzczogJHtjbG91ZGluZXNzfSAlYDtcbiAgY2xvdWRTdGF0cy5hcHBlbmRDaGlsZChjbG91ZGluZXNzSWNvbik7XG4gIGNsb3VkU3RhdHMuYXBwZW5kQ2hpbGQoY2xvdWRpbmVzc0Nsb3Vkcyk7XG4gIHJldHVybiBjbG91ZFN0YXRzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VHaWZDYXJkKGdpZlNyYykge1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UuYWx0ID0gXCJ3ZWF0aGVyIGdpZlwiO1xuICBpbWFnZS5zcmMgPSBnaWZTcmM7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWdpZlwiKTtcbiAgcmV0dXJuIGltYWdlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VPdmVydmlld0NhcmQod2VhdGhlcikge1xuICBsZXQgb3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVydmlldy5jbGFzc0xpc3QuYWRkKFwib3ZlcnZpZXdcIik7XG4gIGxldCBvdmVydmlld1dlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgb3ZlcnZpZXdXZWF0aGVyLmlubmVyVGV4dCA9IGAke3dlYXRoZXJ9YDtcbiAgb3ZlcnZpZXcuYXBwZW5kQ2hpbGQob3ZlcnZpZXdXZWF0aGVyKTtcblxuICByZXR1cm4gb3ZlcnZpZXc7XG59XG4iLCJpbXBvcnQgUmFpbkljb24gZnJvbSBcIi4vcmFpbi5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSYWluQ2FyZChyYWluVm9sMWgsIHJhaW5Wb2wzaCkge1xuICBsZXQgcmFpbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByYWluQ2FyZC5jbGFzc0xpc3QuYWRkKFwicmFpbi1jYXJkXCIpO1xuXG4gIGxldCByYWluSWNvbiA9IG5ldyBJbWFnZSgpO1xuICByYWluSWNvbi5hbHQgPSBcIlJhaW4gaWNvblwiO1xuICByYWluSWNvbi5zcmMgPSBSYWluSWNvbjtcblxuICBsZXQgcmFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIlJhaW4gdm9sdW1lXCI7XG5cbiAgbGV0IHJhaW4xaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByYWluMWguaW5uZXJUZXh0ID0gYExhc3QgaG91cjogJHtyYWluVm9sMWh9IG1tYDtcblxuICByYWluSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJhaW5JbmZvLmFwcGVuZENoaWxkKHJhaW4xaCk7XG5cbiAgaWYgKHJhaW5Wb2wzaCkge1xuICAgIGxldCByYWluM2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByYWluM2guaW5uZXJUZXh0ID0gYExhc3QgM2g6ICR7cmFpblZvbDNofWA7XG4gICAgcmFpbkluZm8uYXBwZW5kQ2hpbGQocmFpbjNoKTtcbiAgfVxuXG4gIHJhaW5DYXJkLmFwcGVuZENoaWxkKHJhaW5JY29uKTtcbiAgcmFpbkNhcmQuYXBwZW5kQ2hpbGQocmFpbkluZm8pO1xuXG4gIHJldHVybiByYWluQ2FyZDtcbn1cbiIsImltcG9ydCBTZWFyY2hJY29uIGZyb20gXCIuL3NlYXJjaC1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZWFyY2hCYXIoKSB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyXCIpO1xuICBsZXQgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzZWFyY2hJY29uLmFsdCA9IFwiU2VhcmNoIEljb25cIjtcbiAgc2VhcmNoSWNvbi5zcmMgPSBTZWFyY2hJY29uO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG5cbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24pO1xuICBjb25zdCBzZWFyY2hCYXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gIHNlYXJjaEJhcklucHV0Lm9uZm9jdXMgPSAoKSA9PiB7XG4gICAgc2VhcmNoQmFySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICBzZWFyY2hJY29uLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgU25vd0ljb24gZnJvbSBcIi4vc25vdy5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTbm93Q2FyZChzbm93Vm9sMWgsIHNub3dWb2wzaCkge1xuICBsZXQgc25vd0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbm93Q2FyZC5jbGFzc0xpc3QuYWRkKFwic25vdy1jYXJkXCIpO1xuXG4gIGxldCBzbm93SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzbm93SWNvbi5hbHQgPSBcIlNub3cgaWNvblwiO1xuICBzbm93SWNvbi5zcmMgPSBTbm93SWNvbjtcblxuICBsZXQgc25vd0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIlNub3cgdm9sdW1lXCI7XG5cbiAgbGV0IHNub3cxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzbm93MWguaW5uZXJUZXh0ID0gYExhc3QgaG91cjogJHtzbm93Vm9sMWh9IG1tYDtcblxuICBzbm93SW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHNub3dJbmZvLmFwcGVuZENoaWxkKHNub3cxaCk7XG5cbiAgaWYgKHNub3dWb2wzaCkge1xuICAgIGxldCBzbm93M2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzbm93M2guaW5uZXJUZXh0ID0gYExhc3QgM2g6ICR7c25vd1ZvbDNofWA7XG4gICAgc25vd0luZm8uYXBwZW5kQ2hpbGQoc25vdzNoKTtcbiAgfVxuXG4gIHNub3dDYXJkLmFwcGVuZENoaWxkKHNub3dJY29uKTtcbiAgc25vd0NhcmQuYXBwZW5kQ2hpbGQoc25vd0luZm8pO1xuXG4gIHJldHVybiBzbm93Q2FyZDtcbn1cbiIsImltcG9ydCBTdW5yaXNlSWNvbiBmcm9tIFwiLi9zdW5yaXNlLnN2Z1wiO1xuaW1wb3J0IFN1bnNldEljb24gZnJvbSBcIi4vc3Vuc2V0LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1bkNhcmQoc3VucmlzZSwgc3Vuc2V0KSB7XG4gIGxldCBzdW5TdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1blN0YXRzLmNsYXNzTGlzdC5hZGQoXCJzdW5TdGF0c1wiKTtcblxuICBsZXQgc3VucmlzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgc3Vuc2V0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHN1bnJpc2VJY29uID0gbmV3IEltYWdlKCk7XG4gIHN1bnJpc2VJY29uLmFsdCA9IFwiU3VucmlzZSBpY29uXCI7XG4gIHN1bnJpc2VJY29uLnNyYyA9IFN1bnJpc2VJY29uO1xuXG4gIGxldCBzdW5zZXRJY29uID0gbmV3IEltYWdlKCk7XG4gIHN1bnNldEljb24uYWx0ID0gXCJTdW5zZXQgaWNvblwiO1xuICBzdW5zZXRJY29uLnNyYyA9IFN1bnNldEljb247XG5cbiAgbGV0IHN1blN0YXRzU3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdW5TdGF0c1N1bnJpc2UuaW5uZXJUZXh0ID0gYFN1bnJpc2U6ICR7c3VucmlzZX1gO1xuXG4gIGxldCBzdW5TdGF0c1N1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdW5TdGF0c1N1bnNldC5pbm5lclRleHQgPSBgU3Vuc2V0OiAke3N1bnNldH1gO1xuXG4gIHN1bnJpc2VFbGVtZW50LmFwcGVuZENoaWxkKHN1bnJpc2VJY29uKTtcbiAgc3VucmlzZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VuU3RhdHNTdW5yaXNlKTtcblxuICBzdW5zZXRFbGVtZW50LmFwcGVuZENoaWxkKHN1bnNldEljb24pO1xuICBzdW5zZXRFbGVtZW50LmFwcGVuZENoaWxkKHN1blN0YXRzU3Vuc2V0KTtcblxuICBzdW5TdGF0cy5hcHBlbmRDaGlsZChzdW5yaXNlRWxlbWVudCk7XG4gIHN1blN0YXRzLmFwcGVuZENoaWxkKHN1bnNldEVsZW1lbnQpO1xuICByZXR1cm4gc3VuU3RhdHM7XG59XG4iLCJpbXBvcnQgV2luZEljb24gZnJvbSBcIi4vd2luZC5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VXaW5kQ2FyZCh3aW5kKSB7XG4gIGxldCB3aW5kU3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5kU3RhdHMuY2xhc3NMaXN0LmFkZChcIndpbmRTdGF0c1wiKTtcbiAgbGV0IHdpbmRJY29uID0gbmV3IEltYWdlKCk7XG4gIHdpbmRJY29uLmFsdCA9IFwiV2luZCBpY29uXCI7XG4gIHdpbmRJY29uLnNyYyA9IFdpbmRJY29uO1xuICBsZXQgd2luZFN0YXRzU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2luZFN0YXRzU3BlZWQuaW5uZXJUZXh0ID0gYFdpbmQgU3BlZWQ6ICR7d2luZH0gbS9zYDtcbiAgd2luZFN0YXRzLmFwcGVuZENoaWxkKHdpbmRJY29uKTtcbiAgd2luZFN0YXRzLmFwcGVuZENoaWxkKHdpbmRTdGF0c1NwZWVkKTtcbiAgcmV0dXJuIHdpbmRTdGF0cztcbn1cbiIsImltcG9ydCBmYXZvcml0ZUljb24gZnJvbSBcIi4vZmF2LnN2Z1wiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNVbmZhdm9yaXRlIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZhdm9yaXRlT3B0aW9uKCkge1xuICBsZXQgZmF2b3JpdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYXZvcml0ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWZhdm9yaXRlXCIpO1xuICBsZXQgZmF2b3JpdGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBmYXZvcml0ZUltYWdlLmFsdCA9IFwiRmF2b3JpdGUgaWNvblwiO1xuICBmYXZvcml0ZUltYWdlLnNyYyA9IGZhdm9yaXRlSWNvbjtcbiAgZmF2b3JpdGVPcHRpb24uYXBwZW5kQ2hpbGQoZmF2b3JpdGVJbWFnZSk7XG5cbiAgZmF2b3JpdGVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbiAgICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gICAgY2l0aWVzLnB1c2goY2l0eS5pbm5lclRleHQpO1xuICAgIGxldCBjaXRpZXNTdHJpZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoY2l0aWVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNTdHJpZ2lmaWVkfWApO1xuICAgIGxldCBmYXZvcml0ZXNCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtYmFyXCIpO1xuICAgIGlmIChmYXZvcml0ZXNCYXJFbGVtZW50KSB7XG4gICAgICBmYXZvcml0ZXNCYXIucmVmcmVzaEZhdm9yaXRlc0JhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYXZvcml0ZXNCYXIubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgIH1cbiAgICBnZXRPcHRpb25zVW5mYXZvcml0ZSgpO1xuICB9KTtcblxuICByZXR1cm4gZmF2b3JpdGVPcHRpb247XG59XG4iLCJpbXBvcnQgcmVsb2FkSWNvbiBmcm9tIFwiLi9yZWxvYWQuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVsb2FkT3B0aW9uKCkge1xuICBsZXQgcmVsb2FkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHJlbG9hZEltYWdlID0gbmV3IEltYWdlKCk7XG4gIHJlbG9hZEltYWdlLmFsdCA9IFwiUmVsb2FkIGljb25cIjtcbiAgcmVsb2FkSW1hZ2Uuc3JjID0gcmVsb2FkSWNvbjtcblxuICByZWxvYWRPcHRpb24uYXBwZW5kQ2hpbGQocmVsb2FkSW1hZ2UpO1xuXG4gIHJlbG9hZE9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXJlbG9hZFwiKTtcblxuICByZXR1cm4gcmVsb2FkT3B0aW9uO1xufVxuIiwiaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiLi9zZXR0aW5ncy5zdmdcIjtcbmltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zVW5mYXZvcml0ZSB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXR0aW5nc09wdGlvbigpIHtcbiAgbGV0IHNldHRpbmdzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0dGluZ3NPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1zZXR0aW5nc1wiKTtcbiAgbGV0IHNldHRpbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc2V0dGluZ3NJbWFnZS5hbHQgPSBcIlNldHRpbmdzIGljb25cIjtcbiAgc2V0dGluZ3NJbWFnZS5zcmMgPSBTZXR0aW5nc0ljb247XG4gIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzSW1hZ2UpO1xuXG4gIHNldHRpbmdzT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJVeSBnb25vcnJlYVwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldHRpbmdzT3B0aW9uO1xufVxuIiwiaW1wb3J0IEZhdnNJY29uIGZyb20gXCIuL2ZhdnMuc3ZnXCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9uc1VuZmF2b3JpdGUgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2hvd0ZhdnNPcHRpb24oKSB7XG4gIGxldCBmYXZzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmF2c09wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWZhdnNcIik7XG4gIGxldCBmYXZzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgZmF2c0ltYWdlLmFsdCA9IFwiU2hvdyBmYXZvcml0ZXMgaWNvblwiO1xuICBmYXZzSW1hZ2Uuc3JjID0gRmF2c0ljb247XG4gIGZhdnNPcHRpb24uYXBwZW5kQ2hpbGQoZmF2c0ltYWdlKTtcblxuICBmYXZzT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJVeSBnb25vcnJlYVwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhdnNPcHRpb247XG59XG4iLCJpbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHRlbXBlcmF0dXJlSWNvbiBmcm9tIFwiLi90aGVybW9tZXRlci1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVRlbXBlcmF0dXJlT3B0aW9uKCkge1xuICBsZXQgdGVtcGVyYXR1cmVPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRlbXBJY29uID0gbmV3IEltYWdlKCk7XG4gIHRlbXBJY29uLmFsdCA9IFwiVGVtcGVyYXR1cmUgaWNvblwiO1xuICB0ZW1wSWNvbi5zcmMgPSB0ZW1wZXJhdHVyZUljb247XG5cbiAgbGV0IG1ldHJpYyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpO1xuXG4gIGxldCBjZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJjZWxzaXVzLWxhYmVsXCIpO1xuICBjZWxzaXVzLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNlbHNpdXNcIik7XG4gIGxldCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJmYWhyZW5oZWl0LWxhYmVsXCIpO1xuICBmYWhyZW5oZWl0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZhaHJlbmhlaXRcIik7XG4gIGNlbHNpdXMuaW5uZXJUZXh0ID0gXCLCsENcIjtcbiAgZmFocmVuaGVpdC5pbm5lclRleHQgPSBcIsKwRlwiO1xuXG4gIGlmIChtZXRyaWMpIHtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1tZXRyaWNcIik7XG4gIH0gZWxzZSB7XG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtbWV0cmljXCIpO1xuICB9XG4gIGNlbHNpdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldHJpY1wiLCBcInRydWVcIik7XG4gICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKTtcbiAgfSk7XG4gIGNlbHNpdXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZXRyaWNcIik7XG5cbiAgaWYgKCFtZXRyaWMpIHtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1tZXRyaWNcIik7XG4gIH1cbiAgZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIFwiZmFsc2VcIik7XG4gICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKTtcbiAgfSk7XG5cbiAgbGV0IGRpdkNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZGl2RmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdkNlbHNpdXMuYXBwZW5kQ2hpbGQoY2Vsc2l1cyk7XG4gIGRpdkZhaHJlbmhlaXQuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdCk7XG5cbiAgbGV0IHRlbXBJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wSW5wdXRzLmFwcGVuZENoaWxkKGRpdkNlbHNpdXMpO1xuICB0ZW1wSW5wdXRzLmFwcGVuZENoaWxkKGRpdkZhaHJlbmhlaXQpO1xuXG4gIHRlbXBlcmF0dXJlT3B0aW9ucy5hcHBlbmRDaGlsZCh0ZW1wSWNvbik7XG4gIHRlbXBlcmF0dXJlT3B0aW9ucy5hcHBlbmRDaGlsZCh0ZW1wSW5wdXRzKTtcblxuICB0ZW1wZXJhdHVyZU9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbi10ZW1wZXJhdHVyZVwiKTtcblxuICByZXR1cm4gdGVtcGVyYXR1cmVPcHRpb25zO1xufVxuIiwiaW1wb3J0IFVuZmF2b3JpdGVJY29uIGZyb20gXCIuL3VuZmF2LnN2Z1wiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVW5mYXZvcml0ZU9wdGlvbigpIHtcbiAgbGV0IHVuZmF2b3JpdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1bmZhdm9yaXRlT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tdW5mYXZvcml0ZVwiKTtcbiAgbGV0IHVuZmF2b3JpdGVJY29uID0gbmV3IEltYWdlKCk7XG4gIHVuZmF2b3JpdGVJY29uLmFsdCA9IFwiUmVtb3ZlIGZyb20gZmF2b3JpdGVzIGljb25cIjtcbiAgdW5mYXZvcml0ZUljb24uc3JjID0gVW5mYXZvcml0ZUljb247XG5cbiAgdW5mYXZvcml0ZU9wdGlvbi5hcHBlbmRDaGlsZCh1bmZhdm9yaXRlSWNvbik7XG5cbiAgdW5mYXZvcml0ZU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBsZXQgY2l0aWVzRmlsdGVyZWQgPSBjaXRpZXMuZmlsdGVyKChjKSA9PiBjICE9PSBjaXR5LmlubmVyVGV4dCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgYCR7SlNPTi5zdHJpbmdpZnkoY2l0aWVzRmlsdGVyZWQpfWApO1xuICAgIGZhdm9yaXRlc0Jhci5yZWZyZXNoRmF2b3JpdGVzQmFyKCk7XG4gICAgZ2V0T3B0aW9ucyh0cnVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHVuZmF2b3JpdGVPcHRpb247XG59XG4iLCJpbXBvcnQgeyBtYWtlVGVtcGVyYXR1cmVPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25UZW1wZXJhdHVyZVwiO1xuaW1wb3J0IHsgbWFrZVJlbG9hZE9wdGlvbiB9IGZyb20gXCIuL29wdGlvblJlbG9hZFwiO1xuaW1wb3J0IHsgbWFrZUZhdm9yaXRlT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uRmF2b3JpdGVcIjtcbmltcG9ydCB7IG1ha2VVbmZhdm9yaXRlT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uVW5mYXZvcml0ZVwiO1xuaW1wb3J0IHsgbWFrZVNob3dGYXZzT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uU2hvd0ZhdnNcIjtcbmltcG9ydCB7IG1ha2VTZXR0aW5nc09wdGlvbiB9IGZyb20gXCIuL29wdGlvblNldHRpbmdzXCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5cbmNvbnN0IG9wdGlvbnNEaXYgPSB7XG4gIG9wdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc1wiKSxcbiAgZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCkge1xuICAgIGxldCB0ZW1wZXJhdHVyZU9wdGlvbnMgPSBtYWtlVGVtcGVyYXR1cmVPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVPcHRpb25zKTtcbiAgfSxcbiAgZ2V0UmVsb2FkT3B0aW9ucygpIHtcbiAgICBsZXQgcmVsb2FkT3B0aW9uID0gbWFrZVJlbG9hZE9wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChyZWxvYWRPcHRpb24pO1xuICB9LFxuICBnZXRGYXZvcml0ZU9wdGlvbigpIHtcbiAgICBsZXQgZmF2b3JpdGVPcHRpb24gPSBtYWtlRmF2b3JpdGVPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQoZmF2b3JpdGVPcHRpb24pO1xuICB9LFxuICBnZXRVbkZhdm9yaXRlT3B0aW9uKCkge1xuICAgIGxldCB1bmZhdm9yaXRlT3B0aW9uID0gbWFrZVVuZmF2b3JpdGVPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQodW5mYXZvcml0ZU9wdGlvbik7XG4gIH0sXG4gIGdldFNob3dGYXZzT3B0aW9uKCkge1xuICAgIGxldCBzaG93RmF2c09wdGlvbiA9IG1ha2VTaG93RmF2c09wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChzaG93RmF2c09wdGlvbik7XG4gIH0sXG4gIGdldFNldHRpbmdzT3B0aW9uKCkge1xuICAgIGxldCBzZXR0aW5nc09wdGlvbiA9IG1ha2VTZXR0aW5nc09wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChzZXR0aW5nc09wdGlvbik7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBnZXRPcHRpb25zKGFsbCkge1xuICBjbGVhbihvcHRpb25zRGl2Lm9wdGlvbnMpO1xuICBpZiAoYWxsKSB7XG4gICAgbGV0IGNpdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGlmIChjaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG4gICAgICBvcHRpb25zRGl2LmdldFNldHRpbmdzT3B0aW9uKCk7XG4gICAgICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRSZWxvYWRPcHRpb25zKCk7XG4gICAgICBvcHRpb25zRGl2LmdldEZhdm9yaXRlT3B0aW9uKCk7XG4gICAgICBvcHRpb25zRGl2LmdldFNob3dGYXZzT3B0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNEaXYub3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwib3B0aW9ucy1jb21wYWN0XCIpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0UmVsb2FkT3B0aW9ucygpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRGYXZvcml0ZU9wdGlvbigpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRGl2Lm9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcIm9wdGlvbnMtY29tcGFjdFwiKTtcbiAgICBvcHRpb25zRGl2LmdldFNldHRpbmdzT3B0aW9uKCk7XG4gICAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zVW5mYXZvcml0ZSgpIHtcbiAgY2xlYW4ob3B0aW9uc0Rpdi5vcHRpb25zKTtcbiAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG4gIG9wdGlvbnNEaXYuZ2V0U2V0dGluZ3NPcHRpb24oKTtcbiAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgb3B0aW9uc0Rpdi5nZXRSZWxvYWRPcHRpb25zKCk7XG4gIG9wdGlvbnNEaXYuZ2V0VW5GYXZvcml0ZU9wdGlvbigpO1xuICBvcHRpb25zRGl2LmdldFNob3dGYXZzT3B0aW9uKCk7XG59XG5cbmV4cG9ydCB7IGdldE9wdGlvbnMsIGdldE9wdGlvbnNVbmZhdm9yaXRlIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbWFrZUJhc2ljc0NhcmQgfSBmcm9tIFwiLi9tYWtlQmFzaWNzQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZU92ZXJ2aWV3Q2FyZCB9IGZyb20gXCIuL21ha2VPdmVydmlld0NhcmRcIjtcbmltcG9ydCB7IG1ha2VTdW5DYXJkIH0gZnJvbSBcIi4vbWFrZVN1bkNhcmRcIjtcbmltcG9ydCB7IG1ha2VDbG91ZHNDYXJkIH0gZnJvbSBcIi4vbWFrZUNsb3Vkc0NhcmRcIjtcbmltcG9ydCB7IG1ha2VXaW5kQ2FyZCB9IGZyb20gXCIuL21ha2VXaW5kQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZUdpZkNhcmQgfSBmcm9tIFwiLi9tYWtlR2lmQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZVNub3dDYXJkIH0gZnJvbSBcIi4vbWFrZVNub3dDYXJkXCI7XG5pbXBvcnQgeyBtYWtlUmFpbkNhcmQgfSBmcm9tIFwiLi9tYWtlUmFpbkNhcmRcIjtcblxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmZ1bmN0aW9uIHNob3dPbkluZm8oXG4gIHVuaXRzLFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB0aW1lLFxuICBkYXRlLFxuICB0ZW1wLFxuICB0ZW1wRmVlbHMsXG4gIHdlYXRoZXIsXG4gIHJhaW5Wb2wxaCxcbiAgcmFpblZvbDNoLFxuICBzbm93Vm9sMWgsXG4gIHNub3dWb2wzaCxcbiAgc3VucmlzZSxcbiAgc3Vuc2V0LFxuICBjbG91ZGluZXNzLFxuICB3aW5kLFxuICBnaWZTcmNcbikge1xuICBjbGVhbihyZXN1bHQpO1xuICBsZXQgdGVtcFVuaXQgPSBcIlwiO1xuICB1bml0cyA9PSBcIm1ldHJpY1wiID8gKHRlbXBVbml0ID0gXCLCsENcIikgOiAodGVtcFVuaXQgPSBcIsKwRlwiKTtcblxuICBsZXQgYmFzaWNzQ2FyZCA9IG1ha2VCYXNpY3NDYXJkKFxuICAgIGNpdHksXG4gICAgY291bnRyeSxcbiAgICB0aW1lLFxuICAgIGRhdGUsXG4gICAgdGVtcCxcbiAgICB0ZW1wRmVlbHMsXG4gICAgdGVtcFVuaXRcbiAgKTtcbiAgbGV0IG92ZXJ2aWV3Q2FyZCA9IG1ha2VPdmVydmlld0NhcmQod2VhdGhlcik7XG4gIGxldCBzdW5DYXJkID0gbWFrZVN1bkNhcmQoc3VucmlzZSwgc3Vuc2V0KTtcbiAgbGV0IGNsb3Vkc0NhcmQgPSBtYWtlQ2xvdWRzQ2FyZChjbG91ZGluZXNzKTtcbiAgbGV0IHdpbmRDYXJkID0gbWFrZVdpbmRDYXJkKHdpbmQpO1xuICBsZXQgZ2lmQ2FyZCA9IG1ha2VHaWZDYXJkKGdpZlNyYyk7XG4gIGxldCBzbm93Q2FyZCA9IG1ha2VTbm93Q2FyZChzbm93Vm9sMWgsIHNub3dWb2wzaCk7XG4gIGxldCByYWluQ2FyZCA9IG1ha2VSYWluQ2FyZChyYWluVm9sMWgsIHJhaW5Wb2wzaCk7XG5cbiAgbGV0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmRzLWNvbnRhaW5lclwiKTtcblxuICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgaW5mby5hcHBlbmRDaGlsZChiYXNpY3NDYXJkKTtcbiAgaW5mby5hcHBlbmRDaGlsZChvdmVydmlld0NhcmQpO1xuICBpbmZvLmFwcGVuZENoaWxkKGdpZkNhcmQpO1xuICBpZiAoc25vd1ZvbDFoIHx8IHNub3dWb2wzaCkge1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoc25vd0NhcmQpO1xuICB9XG4gIGlmIChyYWluVm9sMWggfHwgcmFpblZvbDNoKSB7XG4gICAgaW5mby5hcHBlbmRDaGlsZChyYWluQ2FyZCk7XG4gIH1cbiAgaW5mby5hcHBlbmRDaGlsZChjbG91ZHNDYXJkKTtcbiAgaW5mby5hcHBlbmRDaGlsZCh3aW5kQ2FyZCk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoc3VuQ2FyZCk7XG5cbiAgcmVzdWx0LmFwcGVuZENoaWxkKGluZm8pO1xufVxuXG5mdW5jdGlvbiBjbGVhbihwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzaG93T25JbmZvLCBjbGVhbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBtYWtlU2VhcmNoQmFyIH0gZnJvbSBcIi4vbWFrZVNlYXJjaEJhclwiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcblxubWFrZVNlYXJjaEJhcigpO1xuXG5pZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKSB7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpLmxlbmd0aCA+IDApIHtcbiAgICAgIGZhdm9yaXRlc0Jhci5tYWtlRmF2b3JpdGVzQmFyKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBjaXRpZXNBcnJheSA9IFtdO1xuICAgIGxldCBtZXRyaWMgPSB0cnVlO1xuICAgIGxldCBjaXRpZXNBcnJheUpTT04gPSBKU09OLnN0cmluZ2lmeShjaXRpZXNBcnJheSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgYCR7Y2l0aWVzQXJyYXlKU09OfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIGAke21ldHJpY31gKTtcbiAgfVxufSBlbHNlIHtcbiAgbGV0IGNpdGllc0FycmF5ID0gW107XG4gIGxldCBtZXRyaWMgPSB0cnVlO1xuICBsZXQgY2l0aWVzQXJyYXlKU09OID0gSlNPTi5zdHJpbmdpZnkoY2l0aWVzQXJyYXkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNBcnJheUpTT059YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIGAke21ldHJpY31gKTtcbn1cblxuZ2V0T3B0aW9ucyhmYWxzZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
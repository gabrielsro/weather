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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#hidden {\n  display: none;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 36vw;\n  margin-left: 4vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  padding-left: 2vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options-compact {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-settings img,\n.option-settings-open img {\n  height: auto;\n  width: 38px;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 45px;\n}\n\n.option-temperature label {\n  font-size: 1.1rem;\n}\n\n.selected-metric {\n  font-weight: bold;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload img {\n  width: auto;\n  height: 79%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 77%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.settings-bar {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 3vw;\n  padding-right: 3vw;\n  height: 5vh;\n}\n\n.settings-bar select {\n  width: 11vw;\n  margin-left: 1vw;\n}\n\n.settings-bar div {\n  display: flex;\n  align-items: center;\n}\n\n.settings-bar > div:first-child img {\n  height: auto;\n  width: 30px;\n}\n\n.settings-bar > div:nth-child(2) img {\n  height: auto;\n  width: 40px;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow-x: auto;\n  overflow-y: clip;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar,\n.settings-bar,\n.uv-index-card,\n.moon-phase-card {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-right: 7vw;\n  padding-left: 3vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > p:nth-child(2) {\n  font-size: 1.1rem;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.4rem;\n  justify-self: center;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: center;\n  font-size: 1.2rem;\n}\n\n.weather-gif {\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats,\n.uv-index-card,\n.moon-phase-card {\n  display: grid;\n  grid-template-columns: 1fr 3.8fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img,\n.uv-index-card img {\n  height: auto;\n  width: 60px;\n}\n\n.moon-phase-card img {\n  height: auto;\n  width: 55px;\n}\n\n.moon-phase-card {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.cloudStats p,\n.windStats p,\n.uv-index-card p,\n.moon-phase-card p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#hidden {\n  display: none;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 36vw;\n  margin-left: 4vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  padding-left: 2vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options-compact {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-settings img,\n.option-settings-open img {\n  height: auto;\n  width: 38px;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 45px;\n}\n\n.option-temperature label {\n  font-size: 1.1rem;\n}\n\n.selected-metric {\n  font-weight: bold;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload img {\n  width: auto;\n  height: 79%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 77%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.settings-bar {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 3vw;\n  padding-right: 3vw;\n  height: 5vh;\n}\n\n.settings-bar select {\n  width: 11vw;\n  margin-left: 1vw;\n}\n\n.settings-bar div {\n  display: flex;\n  align-items: center;\n}\n\n.settings-bar > div:first-child img {\n  height: auto;\n  width: 30px;\n}\n\n.settings-bar > div:nth-child(2) img {\n  height: auto;\n  width: 40px;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow-x: auto;\n  overflow-y: clip;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar,\n.settings-bar,\n.uv-index-card,\n.moon-phase-card {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-right: 7vw;\n  padding-left: 3vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > p:nth-child(2) {\n  font-size: 1.1rem;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.4rem;\n  justify-self: center;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: center;\n  font-size: 1.2rem;\n}\n\n.weather-gif {\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats,\n.uv-index-card,\n.moon-phase-card {\n  display: grid;\n  grid-template-columns: 1fr 3.8fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img,\n.uv-index-card img {\n  height: auto;\n  width: 60px;\n}\n\n.moon-phase-card img {\n  height: auto;\n  width: 55px;\n}\n\n.moon-phase-card {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.cloudStats p,\n.windStats p,\n.uv-index-card p,\n.moon-phase-card p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
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

async function getWeatherGif(weather, uvindex, moonphase) {
  let id = "uymKgqrJ9Or60";
  if (uvindex == 0) {
    if (weather.match(/rain/)) {
      if (
        weather.match(/\D+(?=\s)/)[0] == "light" ||
        weather.match(/\D+(?=\s)/)[0] == "drizzle"
      ) {
        id = "l0IrIkq7Q3iRII0hy";
      }
      if (weather.match(/thunderstorm/)) {
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
        id = "6xrCAnXLfPQ64";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "broken") {
        id = "12eCo8gpSMMgrS";
      }
    }
    if (weather.match(/snow/)) {
      if (weather.match(/\D+(?=\s)/)) {
        if (weather.match(/\D+(?=\s)/)[0] == "light") {
          if (weather.match(/shower/)) {
            id = "ONLoRRAHQh5kY";
          } else {
            id = "3ohc11DpNMf7qnqxR6";
          }
        }
      } else {
        id = "OWxrxRHY6afRu";
      }
    }
    if (weather.match(/haze/)) {
      id = "r2OMuTCFo0rv2rgAL5";
    }
    if (weather.match(/mist/)) {
      id = "mW03sTZVT9IY0";
    }
    if (weather.match(/clear/)) {
      id = "M0Do8W1sDlUQCIIXpn";
    }
    if (weather.match(/fog/)) {
      id = "oAbvMXvah1M0U";
    }

    if (weather.match(/sleet/)) {
      id = "d3mlmtNPoxNrt4Bi";
    }

    if (weather.match(/drizzle/)) {
      id = "xT9GEOg09OuResnZ6g";
    }

    if (weather.match(/smoke/)) {
      id = "l2Je9dUI5LpzfHGTe";
    }
  } else {
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
        id = "M0Do8W1sDlUQCIIXpn";
      }
    }
    if (weather.match(/snow/)) {
      if (weather.match(/\D+(?=\s)/)) {
        if (weather.match(/\D+(?=\s)/)[0] == "light") {
          if (weather.match(/shower/)) {
            id = "NEqxBcejKE68U";
          } else {
            id = "xULW8DoK3l8siZT2JW";
          }
        }
      } else {
        id = "s4Bi420mMDRBK";
      }
    }
    if (weather.match(/haze/)) {
      id = "r2OMuTCFo0rv2rgAL5";
    }
    if (weather.match(/mist/)) {
      id = "mW03sTZVT9IY0";
    }
    if (weather.match(/clear/)) {
      id = "6xrCAnXLfPQ64";
    }
    if (weather.match(/fog/)) {
      id = "oAbvMXvah1M0U";
    }

    if (weather.match(/sleet/)) {
      id = "d3mlmtNPoxNrt4Bi";
    }

    if (weather.match(/drizzle/)) {
      id = "xT9GEOg09OuResnZ6g";
    }

    if (weather.match(/smoke/)) {
      id = "l2Je9dUI5LpzfHGTe";
    }
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
/* harmony export */   "getCardForFavList": () => (/* binding */ getCardForFavList),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showData */ "./src/showData.js");
/* harmony import */ var _errorCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorCards */ "./src/errorCards.js");
/* harmony import */ var _gifAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gifAPI */ "./src/gifAPI.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./src/options.js");
/* harmony import */ var _makeFavList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./makeFavList */ "./src/makeFavList.js");










const result = document.querySelector(".result");

const handleUserInput = {
  weatherKey: "8ae2d13e54ebef775efff2c52817a5e2",
  sunAndMoonKey: "EYEAZJX93QXNQVPUM8AYE38NX",
  gifKey: "ZSqLZBoP1L25pS03G478pjRBb0NESb0C",
  units: JSON.parse(localStorage.getItem("metric")),
  handleSearchIcon(cityFromCard) {
    let searchbar = document.querySelector(".searchbar > input");
    let units = JSON.parse(localStorage.getItem("metric"));
    let unitsToUse = "";
    units ? (unitsToUse = "metric") : (unitsToUse = "imperial");
    if (searchbar.value) {
      getWeather(searchbar.value, unitsToUse);
    } else {
      if (cityFromCard) {
        getWeather(cityFromCard, unitsToUse);
      } else {
        let info = document.querySelector(".info");
        if (info) {
          let city = document.getElementById("city");
          getWeather(city.innerText, unitsToUse);
        } else {
          (0,_makeFavList__WEBPACK_IMPORTED_MODULE_5__.makeFavList)();
        }
      }
    }
  },
};

async function getCardForFavList(location, units) {
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
    let tempRounded = Math.round(temperature * 10) / 10;
    let temperatureFeels = apiPromiseResolved.main.feels_like;
    let tempFeelsRounded = Math.round(temperatureFeels * 10) / 10;
    let weather = apiPromiseResolved.weather[0].description;

    let card = (0,_showData__WEBPACK_IMPORTED_MODULE_1__.showOnCard)(
      units,
      city,
      country,
      timeAtCity,
      dateAtCitySimple,
      tempRounded,
      tempFeelsRounded,
      weather
    );
    return card;
  }
}

async function getWeather(location, units) {
  let favBar = document.querySelector(".favorites-bar");
  if (favBar) {
    favBar.removeAttribute("id");
  }
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
    let tempRounded = Math.round(temperature * 10) / 10;
    let temperatureFeels = apiPromiseResolved.main.feels_like;
    let tempFeelsRounded = Math.round(temperatureFeels * 10) / 10;
    let weather = apiPromiseResolved.weather[0].description;
    let gifSrc = "";
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

    let sunAndMoonApiPromise = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${
        Date.parse(dateAtCity) / 1000
      }/?key=${handleUserInput.sunAndMoonKey}&elements=uvindex,moonphase`,
      { mode: "cors" }
    );

    let sunAndMoonApiPromiseResolved = await sunAndMoonApiPromise.json();
    let moonphase;
    let uvindex;
    if (sunAndMoonApiPromiseResolved.currentConditions) {
      moonphase = sunAndMoonApiPromiseResolved.currentConditions.moonphase;
      uvindex = sunAndMoonApiPromiseResolved.currentConditions.uvindex;
    } else {
      moonphase = sunAndMoonApiPromiseResolved.days[0].moonphase;
      uvindex = sunAndMoonApiPromiseResolved.days[0].uvindex;
    }
    try {
      gifSrc = await (0,_gifAPI__WEBPACK_IMPORTED_MODULE_3__.getWeatherGif)(weather, uvindex, moonphase);
    } catch (error) {
      console.log("Error while fetching weather gif: ", error);
    }

    (0,_showData__WEBPACK_IMPORTED_MODULE_1__.showOnInfo)(
      units,
      city,
      country,
      timeAtCity,
      dateAtCitySimple,
      tempRounded,
      tempFeelsRounded,
      weather,
      rain1h,
      rain3h,
      snow1h,
      snow3h,
      sunrise,
      sunset,
      cloudiness,
      wind,
      gifSrc,
      moonphase,
      uvindex
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
/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleUserInput */ "./src/handleUserInput.js");



function makeBasicsCard(
  city,
  country,
  time,
  date,
  temp,
  tempFeels,
  tempUnit,
  forFavList
) {
  let basics = document.createElement("div");
  basics.classList.add("basics");

  let basicsCity = document.createElement("p");
  basicsCity.innerText = `${city}`;
  basicsCity.setAttribute("id", "city");
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

  if (forFavList) {
    basics.addEventListener("click", () =>
      _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon(city)
    );
  }

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

/***/ "./src/makeFavList.js":
/*!****************************!*\
  !*** ./src/makeFavList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeFavList": () => (/* binding */ makeFavList)
/* harmony export */ });
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");
/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleUserInput */ "./src/handleUserInput.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/options.js");




const result = document.querySelector(".result");

async function makeFavList() {
  let units = JSON.parse(localStorage.getItem("metric"));
  let metric = "";
  units ? (metric = "metric") : (metric = "imperial");
  let cities = JSON.parse(localStorage.getItem("cities"));
  cities.forEach(async function (city) {
    let cityCard = await (0,_handleUserInput__WEBPACK_IMPORTED_MODULE_1__.getCardForFavList)(city, metric);
    (0,_options__WEBPACK_IMPORTED_MODULE_2__.getOptionsFavList)();
    let favBar = document.querySelector(".favorites-bar");
    favBar.setAttribute("id", "hidden");
    result.appendChild(cityCard);
  });
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

/***/ "./src/makeMoonPhaseCard.js":
/*!**********************************!*\
  !*** ./src/makeMoonPhaseCard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMoonPhaseCard": () => (/* binding */ makeMoonPhaseCard)
/* harmony export */ });
/* harmony import */ var _new_moon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-moon.svg */ "./src/new-moon.svg");
/* harmony import */ var _waxing_cresent_moon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waxing-cresent-moon.svg */ "./src/waxing-cresent-moon.svg");
/* harmony import */ var _first_quarter_moon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-quarter-moon.svg */ "./src/first-quarter-moon.svg");
/* harmony import */ var _waxing_gibbous_moon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waxing-gibbous-moon.svg */ "./src/waxing-gibbous-moon.svg");
/* harmony import */ var _full_moon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./full-moon.svg */ "./src/full-moon.svg");
/* harmony import */ var _waning_gibbous_moon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waning-gibbous-moon.svg */ "./src/waning-gibbous-moon.svg");
/* harmony import */ var _third_quarter_moon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./third-quarter-moon.svg */ "./src/third-quarter-moon.svg");
/* harmony import */ var _waning_crescent_moon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./waning-crescent-moon.svg */ "./src/waning-crescent-moon.svg");









function makeMoonPhaseCard(moonphase) {
  let moonPhaseCard = document.createElement("div");
  moonPhaseCard.classList.add("moon-phase-card");

  let moonIcon = new Image();
  moonIcon.alt = "Moon phase icon";

  let phaseName;

  if (moonphase == 0) {
    moonIcon.src = _new_moon_svg__WEBPACK_IMPORTED_MODULE_0__;
    phaseName = "New Moon";
  }
  if (moonphase > 0 && moonphase < 0.25) {
    moonIcon.src = _waxing_cresent_moon_svg__WEBPACK_IMPORTED_MODULE_1__;
    phaseName = "Waxing Crescent";
  }
  if (moonphase == 0.25) {
    moonIcon.src = _first_quarter_moon_svg__WEBPACK_IMPORTED_MODULE_2__;
    phaseName = "First Quarter";
  }
  if (moonphase > 0.25 && moonphase < 0.5) {
    moonIcon.src = _waxing_gibbous_moon_svg__WEBPACK_IMPORTED_MODULE_3__;
    phaseName = "Wacing Gibbous";
  }
  if (moonphase == 0.5) {
    moonIcon.src = _full_moon_svg__WEBPACK_IMPORTED_MODULE_4__;
    phaseName = "Full Moon";
  }
  if (moonphase > 0.5 && moonphase < 0.75) {
    moonIcon.src = _waning_gibbous_moon_svg__WEBPACK_IMPORTED_MODULE_5__;
    phaseName = "Waning Gibbous";
  }
  if (moonphase == 0.75) {
    moonIcon.src = _third_quarter_moon_svg__WEBPACK_IMPORTED_MODULE_6__;
    phaseName = "Last Quarter";
  }
  if (moonphase > 0.75 && moonphase <= 1) {
    moonIcon.src = _waning_crescent_moon_svg__WEBPACK_IMPORTED_MODULE_7__;
    phaseName = "Waning Crescent";
  }

  let description = document.createElement("p");
  description.innerText = `Moon phase: ${phaseName}`;

  moonPhaseCard.appendChild(moonIcon);
  moonPhaseCard.appendChild(description);

  return moonPhaseCard;
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

/***/ "./src/makeSettingsBar.js":
/*!********************************!*\
  !*** ./src/makeSettingsBar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeSettingsBar": () => (/* binding */ makeSettingsBar)
/* harmony export */ });
/* harmony import */ var _settingAutoRefresh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settingAutoRefresh */ "./src/settingAutoRefresh.js");
/* harmony import */ var _settingSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingSort */ "./src/settingSort.js");



function makeSettingsBar() {
  let settingsBar = document.createElement("div");
  settingsBar.classList.add("settings-bar");

  let autoRefSetting = (0,_settingAutoRefresh__WEBPACK_IMPORTED_MODULE_0__.makeAutoRefreshSetting)();
  settingsBar.appendChild(autoRefSetting);

  let sortSetting = (0,_settingSort__WEBPACK_IMPORTED_MODULE_1__.makeSortSetting)();
  settingsBar.appendChild(sortSetting);

  settingsBar.addEventListener("click", (click) => {
    click.stopPropagation();
  });

  return settingsBar;
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

/***/ "./src/makeUVIndexCard.js":
/*!********************************!*\
  !*** ./src/makeUVIndexCard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeUVIndexCard": () => (/* binding */ makeUVIndexCard)
/* harmony export */ });
/* harmony import */ var _UVIcon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UVIcon.svg */ "./src/UVIcon.svg");


function makeUVIndexCard(uvindex) {
  let uvIndexCard = document.createElement("div");
  uvIndexCard.classList.add("uv-index-card");

  let uvIcon = new Image();
  uvIcon.alt = "UV index icon";
  uvIcon.src = _UVIcon_svg__WEBPACK_IMPORTED_MODULE_0__;

  let description;
  if (uvindex <= 2) {
    description = "(Low)";
  }
  if (uvindex > 2 && uvindex <= 5) {
    description = "(Moderate)";
  }
  if (uvindex > 5 && uvindex <= 7) {
    description = "(High)";
  }
  if (uvindex > 7 && uvindex <= 10) {
    description = "(Very High)";
  }
  if (uvindex > 10) {
    description = "(Extreme)";
  }

  let uvIndex = document.createElement("p");
  uvIndex.innerText = `UV Index: ${uvindex} ${description}`;

  uvIndexCard.appendChild(uvIcon);
  uvIndexCard.appendChild(uvIndex);

  return uvIndexCard;
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
/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleUserInput */ "./src/handleUserInput.js");
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showData */ "./src/showData.js");




function makeReloadOption() {
  let reloadOption = document.createElement("div");
  let reloadImage = new Image();
  reloadImage.alt = "Reload icon";
  reloadImage.src = _reload_svg__WEBPACK_IMPORTED_MODULE_0__;

  reloadOption.appendChild(reloadImage);

  reloadOption.classList.add("option-reload");

  reloadOption.addEventListener("click", () => {
    let info = document.querySelector(".info");
    if (info) {
      let city = document.getElementById("city");
      let cityName = city.innerText;
      (0,_showData__WEBPACK_IMPORTED_MODULE_2__.clean)(".result");
      _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon(cityName);
    } else {
      (0,_showData__WEBPACK_IMPORTED_MODULE_2__.clean)(".result");
      _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon();
    }
  });

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
/* harmony export */   "handleOutOfSettingsClick": () => (/* binding */ handleOutOfSettingsClick),
/* harmony export */   "makeSettingsOpenOption": () => (/* binding */ makeSettingsOpenOption),
/* harmony export */   "makeSettingsOption": () => (/* binding */ makeSettingsOption)
/* harmony export */ });
/* harmony import */ var _settings_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.svg */ "./src/settings.svg");
/* harmony import */ var _settings_open_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-open.svg */ "./src/settings-open.svg");
/* harmony import */ var _makeSettingsBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeSettingsBar */ "./src/makeSettingsBar.js");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options */ "./src/options.js");






function makeSettingsOption() {
  let settingsOption = document.createElement("div");
  settingsOption.classList.add("option-settings");
  let settingsImage = new Image();
  settingsImage.alt = "Settings icon";
  settingsImage.src = _settings_svg__WEBPACK_IMPORTED_MODULE_0__;
  settingsOption.appendChild(settingsImage);

  settingsOption.addEventListener("click", (click) => {
    handleSettingOptionClick(click);
  });

  return settingsOption;
}

function handleSettingOptionClick(click) {
  click.stopPropagation();
  let header = document.querySelector("header");
  let favBar = document.querySelector(".favorites-bar");
  let settingsOpenOption = makeSettingsOpenOption();
  let optionsBar = document.querySelector(".options");
  optionsBar.removeChild(optionsBar.firstChild);
  optionsBar.prepend(settingsOpenOption);
  let settingsBar = (0,_makeSettingsBar__WEBPACK_IMPORTED_MODULE_2__.makeSettingsBar)();
  if (favBar) {
    header.insertBefore(settingsBar, favBar);
  } else {
    header.appendChild(settingsBar);
  }
  let body = document.querySelector("body");
  body.addEventListener("click", handleOutOfSettingsClick, {
    once: true,
  });
}

function handleOutOfSettingsClick() {
  let header = document.querySelector("header");
  let settingsBarElement = document.querySelector(".settings-bar");
  if (settingsBarElement) {
    let settingsOption = makeSettingsOption();
    let optionsBar = document.querySelector(".options");
    optionsBar.removeChild(optionsBar.firstChild);
    optionsBar.prepend(settingsOption);
    header.removeChild(settingsBarElement);
  }
}

function makeSettingsOpenOption() {
  let settingsOpenOption = document.createElement("div");
  settingsOpenOption.classList.add("option-settings-open");
  let settingsImage = new Image();
  settingsImage.alt = "Settings icon";
  settingsImage.src = _settings_open_svg__WEBPACK_IMPORTED_MODULE_1__;
  settingsOpenOption.appendChild(settingsImage);

  settingsOpenOption.addEventListener("click", (click) => {
    click.stopImmediatePropagation();
    let settingsOption = makeSettingsOption();
    let optionsBar = document.querySelector(".options");
    optionsBar.removeChild(optionsBar.firstChild);
    optionsBar.prepend(settingsOption);
    let header = document.querySelector("header");
    let settingsBar = document.querySelector(".settings-bar");
    header.removeChild(settingsBar);
  });

  return settingsOpenOption;
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
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/options.js");
/* harmony import */ var _makeFavList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeFavList */ "./src/makeFavList.js");
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showData */ "./src/showData.js");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");







function makeShowFavsOption() {
  let favsOption = document.createElement("div");
  favsOption.classList.add("option-favs");
  let favsImage = new Image();
  favsImage.alt = "Show favorites icon";
  favsImage.src = _favs_svg__WEBPACK_IMPORTED_MODULE_0__;
  favsOption.appendChild(favsImage);

  favsOption.addEventListener("click", () => {
    let result = document.querySelector(".result");
    (0,_showData__WEBPACK_IMPORTED_MODULE_3__.clean)(result);
    (0,_makeFavList__WEBPACK_IMPORTED_MODULE_2__.makeFavList)();
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
/* harmony import */ var _makeFavList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeFavList */ "./src/makeFavList.js");
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showData */ "./src/showData.js");





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
    let displayingCity = document.querySelector(".info");
    if (displayingCity) {
      _handleUserInput__WEBPACK_IMPORTED_MODULE_0__["default"].handleSearchIcon();
    } else {
      (0,_showData__WEBPACK_IMPORTED_MODULE_3__.clean)(".result");
      (0,_makeFavList__WEBPACK_IMPORTED_MODULE_2__.makeFavList)();
    }
  });
  celsius.setAttribute("value", "metric");

  if (!metric) {
    fahrenheit.classList.add("selected-metric");
  }
  fahrenheit.addEventListener("click", () => {
    localStorage.setItem("metric", "false");
    let displayingCity = document.querySelector(".info");
    if (displayingCity) {
      _handleUserInput__WEBPACK_IMPORTED_MODULE_0__["default"].handleSearchIcon();
    } else {
      (0,_showData__WEBPACK_IMPORTED_MODULE_3__.clean)(".result");
      (0,_makeFavList__WEBPACK_IMPORTED_MODULE_2__.makeFavList)();
    }
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
/* harmony export */   "getOptionsFavList": () => (/* binding */ getOptionsFavList),
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

function getOptionsFavList() {
  (0,_showData__WEBPACK_IMPORTED_MODULE_6__.clean)(optionsDiv.options);
  optionsDiv.getSettingsOption();
  optionsDiv.getTemperatureOptions();
  optionsDiv.getReloadOptions();
  optionsDiv.options.classList.remove("options-compact");
}




/***/ }),

/***/ "./src/settingAutoRefresh.js":
/*!***********************************!*\
  !*** ./src/settingAutoRefresh.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "makeAutoRefreshSetting": () => (/* binding */ makeAutoRefreshSetting)
/* harmony export */ });
/* harmony import */ var _reload_auto_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reload-auto.svg */ "./src/reload-auto.svg");
/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleUserInput */ "./src/handleUserInput.js");
/* harmony import */ var _optionSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionSettings */ "./src/optionSettings.js");
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showData */ "./src/showData.js");





function makeAutoRefreshSetting() {
  let autoRefSetting = document.createElement("div");

  let autoRefIcon = new Image();
  autoRefIcon.alt = "Auto-refresh icon";
  autoRefIcon.src = _reload_auto_svg__WEBPACK_IMPORTED_MODULE_0__;

  let autoRefLabel = document.createElement("p");
  autoRefLabel.innerText = "Auto-refresh: ";

  let autoRefSelect = document.createElement("select");
  autoRefSelect.classList.add("select-refresh");
  autoRefSelect.addEventListener("change", (change) => {
    localStorage.setItem("refresh", JSON.stringify(change.target.value));
    autoRefreshSetup.handleAutoRefresh(change.target.value);
    let refreshSelector = document.querySelector(".select-refresh");
    let options = refreshSelector.childNodes;
    options.forEach((o) => {
      if (o.getAttribute("selected")) {
        o.removeAttribute("selected");
      }
      if (o.innerText == change.target.value) {
        o.setAttribute("selected", true);
      }
    });
  });

  let nodes = [];

  let never = document.createElement("option");
  never.innerText = "Never";
  never.setAttribute("value", "Never");
  nodes.push(never);
  let oneMinute = document.createElement("option");
  oneMinute.innerText = "Every minute";
  oneMinute.setAttribute("value", "Every minute");
  nodes.push(oneMinute);
  let fiveMinutes = document.createElement("option");
  fiveMinutes.innerText = "Every 5 minutes";
  fiveMinutes.setAttribute("value", "Every 5 minutes");
  nodes.push(fiveMinutes);
  let tenMinutes = document.createElement("option");
  tenMinutes.innerText = "Every 10 minutes";
  tenMinutes.setAttribute("value", "Every 10 minutes");
  nodes.push(tenMinutes);
  let thirtyMinutes = document.createElement("option");
  thirtyMinutes.innerText = "Every 30 minutes";
  thirtyMinutes.setAttribute("value", "Every 30 minutes");
  nodes.push(thirtyMinutes);
  let oneHour = document.createElement("option");
  oneHour.innerText = "Every hour";
  oneHour.setAttribute("value", "Every hour");
  nodes.push(oneHour);
  let twoHours = document.createElement("option");
  twoHours.innerText = "Every 2 hours";
  twoHours.setAttribute("value", "Every 2 hours");
  nodes.push(twoHours);
  let twelveHours = document.createElement("option");
  twelveHours.innerText = "Every 12 hours";
  twelveHours.setAttribute("value", "Every 12 hours");
  nodes.push(twelveHours);
  let oneDay = document.createElement("option");
  oneDay.innerText = "Every 24 hours";
  oneDay.setAttribute("value", "Every 24 hours");
  nodes.push(oneDay);

  nodes.forEach((n) => {
    if (n.value == JSON.parse(localStorage.getItem("refresh"))) {
      n.setAttribute("selected", true);
    }
  });

  autoRefSelect.appendChild(never);
  autoRefSelect.appendChild(oneMinute);
  autoRefSelect.appendChild(fiveMinutes);
  autoRefSelect.appendChild(tenMinutes);
  autoRefSelect.appendChild(thirtyMinutes);
  autoRefSelect.appendChild(oneHour);
  autoRefSelect.appendChild(twoHours);
  autoRefSelect.appendChild(twelveHours);
  autoRefSelect.appendChild(oneDay);

  autoRefSetting.appendChild(autoRefIcon);
  autoRefSetting.appendChild(autoRefLabel);
  autoRefSetting.appendChild(autoRefSelect);

  return autoRefSetting;
}

const autoRefreshSetup = {
  timeoutID: null,
  auto: false,
  delay: 60000,
  handleAutoRefresh(autoRefreshMode) {
    if (autoRefreshMode == "Every minute") {
      this.delay = 60000;
    }
    if (autoRefreshMode == "Every 5 minutes") {
      this.delay = 60000 * 5;
    }
    if (autoRefreshMode == "Every 10 minutes") {
      this.delay = 60000 * 10;
    }
    if (autoRefreshMode == "Every 30 minutes") {
      this.delay = 60000 * 30;
    }
    if (autoRefreshMode == "Every hour") {
      this.delay = 60000 * 60;
    }
    if (autoRefreshMode == "Every 2 hours") {
      this.delay = 60000 * 60 * 2;
    }
    if (autoRefreshMode == "Every 12 hours") {
      this.delay = 60000 * 60 * 12;
    }
    if (autoRefreshMode == "Every 24 hours") {
      this.delay = 60000 * 60 * 24;
    }
    this.timeoutID = setTimeout(() => {
      let searchbar = document.querySelector(".searchbar > input");
      searchbar.value = "";
      _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon();
    }, this.delay);
    this.auto = true;
    if (autoRefreshMode == "Never") {
      clearTimeout(this.timeoutID);
      this.timeoutID = null;
      this.auto = false;
    }
    autoRefresh();
  },
};

function autoRefresh() {
  if (autoRefreshSetup.timeoutID) {
    clearTimeout(autoRefreshSetup.timeoutID);
    autoRefreshSetup.timeoutID = setTimeout(() => {
      if (autoRefreshSetup.auto) {
        (0,_showData__WEBPACK_IMPORTED_MODULE_3__.clean)(".result");
        (0,_optionSettings__WEBPACK_IMPORTED_MODULE_2__.handleOutOfSettingsClick)();
        let searchbar = document.querySelector(".searchbar > input");
        searchbar.value = "";
        _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon();
        autoRefresh();
      }
    }, autoRefreshSetup.delay);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (autoRefreshSetup);


/***/ }),

/***/ "./src/settingSort.js":
/*!****************************!*\
  !*** ./src/settingSort.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeSortSetting": () => (/* binding */ makeSortSetting)
/* harmony export */ });
/* harmony import */ var _sort_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort.svg */ "./src/sort.svg");


function makeSortSetting() {
  let sortSetting = document.createElement("div");

  let sortIcon = new Image();
  sortIcon.alt = "Sort setting icon";
  sortIcon.src = _sort_svg__WEBPACK_IMPORTED_MODULE_0__;

  let sortLabel = document.createElement("p");
  sortLabel.innerText = "Sort Favorites by: ";

  let sortSelect = document.createElement("select");

  let nameGroup = document.createElement("optgroup");
  nameGroup.setAttribute("label", "Alphabetical Order");
  let ascendingName = document.createElement("option");
  ascendingName.setAttribute("value", "ascendingName");
  ascendingName.innerText = "A to Z";
  let descendingName = document.createElement("option");
  descendingName.setAttribute("value", "descendingName");
  descendingName.innerText = "Z to A";
  nameGroup.appendChild(ascendingName);
  nameGroup.appendChild(descendingName);

  let tempGroup = document.createElement("optgroup");
  tempGroup.setAttribute("label", "Actual Temperature");
  let ascendingTemp = document.createElement("option");
  ascendingTemp.setAttribute("value", "ascendingName");
  ascendingTemp.innerText = "Coldest to Hottest";
  let descendingTemp = document.createElement("option");
  descendingTemp.setAttribute("value", "descendingTemp");
  descendingTemp.innerText = "Hottest to Coldest";
  tempGroup.appendChild(ascendingTemp);
  tempGroup.appendChild(descendingTemp);

  let tempFeelsGroup = document.createElement("optgroup");
  tempFeelsGroup.setAttribute("label", "Apparent Temperature");
  let ascendingTempFeels = document.createElement("option");
  ascendingTempFeels.setAttribute("value", "ascendingTempFeels");
  ascendingTempFeels.innerText = "Coldest to Hottest";
  let descendingTempFeels = document.createElement("option");
  descendingTempFeels.setAttribute("value", "descendingTempFeels");
  descendingTempFeels.innerText = "Hottest to Coldest";
  tempFeelsGroup.appendChild(ascendingTempFeels);
  tempFeelsGroup.appendChild(descendingTempFeels);

  sortSelect.appendChild(nameGroup);
  sortSelect.appendChild(tempFeelsGroup);
  sortSelect.appendChild(tempGroup);

  sortSetting.appendChild(sortIcon);
  sortSetting.appendChild(sortLabel);
  sortSetting.appendChild(sortSelect);

  return sortSetting;
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
/* harmony export */   "showOnCard": () => (/* binding */ showOnCard),
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
/* harmony import */ var _makeUVIndexCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./makeUVIndexCard */ "./src/makeUVIndexCard.js");
/* harmony import */ var _makeMoonPhaseCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./makeMoonPhaseCard */ "./src/makeMoonPhaseCard.js");












const result = document.querySelector(".result");

function showOnCard(
  units,
  city,
  country,
  time,
  date,
  temp,
  tempFeels,
  weather
) {
  let tempUnit = "";
  units == "metric" ? (tempUnit = "°C") : (tempUnit = "°F");

  let basicsCard = (0,_makeBasicsCard__WEBPACK_IMPORTED_MODULE_1__.makeBasicsCard)(
    city,
    country,
    time,
    date,
    temp,
    tempFeels,
    tempUnit,
    true
  );

  return basicsCard;
}

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
  gifSrc,
  moonphase,
  uvindex
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
  if (uvindex > 0) {
    let uvCard = (0,_makeUVIndexCard__WEBPACK_IMPORTED_MODULE_9__.makeUVIndexCard)(uvindex);
    info.appendChild(uvCard);
  }
  if (uvindex == 0) {
    let moonPhaseCard = (0,_makeMoonPhaseCard__WEBPACK_IMPORTED_MODULE_10__.makeMoonPhaseCard)(moonphase);
    info.appendChild(moonPhaseCard);
  }
  info.appendChild(cloudsCard);
  info.appendChild(windCard);
  info.appendChild(sunCard);

  result.appendChild(info);
}

function clean(parent) {
  if (typeof parent == "string") {
    let parentElement = document.querySelector(parent);
    if (parentElement) {
      while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
      }
    }
  } else {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}




/***/ }),

/***/ "./src/UVIcon.svg":
/*!************************!*\
  !*** ./src/UVIcon.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f78cee0bc4505358952.svg";

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

/***/ "./src/first-quarter-moon.svg":
/*!************************************!*\
  !*** ./src/first-quarter-moon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "749df5a89cc0f9668d34.svg";

/***/ }),

/***/ "./src/full-moon.svg":
/*!***************************!*\
  !*** ./src/full-moon.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9142d03045415894154.svg";

/***/ }),

/***/ "./src/new-moon.svg":
/*!**************************!*\
  !*** ./src/new-moon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0598fef7b08545af888.svg";

/***/ }),

/***/ "./src/rain.svg":
/*!**********************!*\
  !*** ./src/rain.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51186bdedd8a548aa08b.svg";

/***/ }),

/***/ "./src/reload-auto.svg":
/*!*****************************!*\
  !*** ./src/reload-auto.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84e09edfbb75485f51cf.svg";

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

/***/ "./src/settings-open.svg":
/*!*******************************!*\
  !*** ./src/settings-open.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9e54b7bdbed9fcccfa4.svg";

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

/***/ "./src/sort.svg":
/*!**********************!*\
  !*** ./src/sort.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c2fe6ce76e8da0dd1f2.svg";

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

/***/ "./src/third-quarter-moon.svg":
/*!************************************!*\
  !*** ./src/third-quarter-moon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82a6e81fd216e647fc8b.svg";

/***/ }),

/***/ "./src/unfav.svg":
/*!***********************!*\
  !*** ./src/unfav.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85e5041838bafaabf9c2.svg";

/***/ }),

/***/ "./src/waning-crescent-moon.svg":
/*!**************************************!*\
  !*** ./src/waning-crescent-moon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "086995221d8e0208e705.svg";

/***/ }),

/***/ "./src/waning-gibbous-moon.svg":
/*!*************************************!*\
  !*** ./src/waning-gibbous-moon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e92f3566025e3716425a.svg";

/***/ }),

/***/ "./src/waxing-cresent-moon.svg":
/*!*************************************!*\
  !*** ./src/waxing-cresent-moon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae8b169005ef1e18b29e.svg";

/***/ }),

/***/ "./src/waxing-gibbous-moon.svg":
/*!*************************************!*\
  !*** ./src/waxing-gibbous-moon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb6f6642b19f02755e46.svg";

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
/* harmony import */ var _makeFavList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeFavList */ "./src/makeFavList.js");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");
/* harmony import */ var _settingAutoRefresh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settingAutoRefresh */ "./src/settingAutoRefresh.js");






(0,_makeSearchBar__WEBPACK_IMPORTED_MODULE_1__.makeSearchBar)();

if (localStorage.length > 0) {
  if (localStorage.getItem("cities")) {
    if (JSON.parse(localStorage.getItem("cities")).length > 0) {
      _favoritesBar__WEBPACK_IMPORTED_MODULE_3__["default"].makeFavoritesBar();
      (0,_makeFavList__WEBPACK_IMPORTED_MODULE_2__.makeFavList)();
    }
  }
  if (
    localStorage.getItem("refresh") &&
    localStorage.getItem("refresh") !== "Never"
  ) {
    _settingAutoRefresh__WEBPACK_IMPORTED_MODULE_4__["default"].handleAutoRefresh(localStorage.getItem("refresh"));
  } else {
    let citiesArray = [];
    let metric = true;
    let citiesArrayJSON = JSON.stringify(citiesArray);
    localStorage.setItem("cities", `${citiesArrayJSON}`);
    localStorage.setItem("metric", `${metric}`);
    localStorage.setItem("refresh", "Never");
  }
} else {
  let citiesArray = [];
  let metric = true;
  let citiesArrayJSON = JSON.stringify(citiesArray);
  let refresh = "Never";
  localStorage.setItem("cities", `${citiesArrayJSON}`);
  localStorage.setItem("metric", `${metric}`);
  localStorage.setItem("refresh", `${refresh}`);
}

(0,_options__WEBPACK_IMPORTED_MODULE_0__.getOptions)(false);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxnQkFBZ0IsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxHQUFHLFdBQVcsT0FBTztBQUMxRCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxHQUFHLFdBQVcsT0FBTztBQUMxRCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdktqQjtBQUNtQjtBQUNBO0FBQ0s7QUFDVjtBQUNNO0FBQ0Y7QUFD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cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Vycm9yQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9mYXZvcml0ZXNCYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9mbGFnQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZ2lmQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaGFuZGxlVXNlcklucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZUJhc2ljc0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlQ2xvdWRzQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VGYXZMaXN0LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZUdpZkNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlTW9vblBoYXNlQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VPdmVydmlld0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlUmFpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlU2VhcmNoQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVNldHRpbmdzQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVNub3dDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVN1bkNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlVVZJbmRleENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlV2luZENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25GYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblJlbG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblNldHRpbmdzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uU2hvd0ZhdnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25UZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblVuZmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0dGluZ0F1dG9SZWZyZXNoLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0dGluZ1NvcnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zaG93RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2YmFyLFxcbi5vcHRpb25zIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5uYXZiYXIgPiBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc2VhcmNoYmFyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciA+IGlucHV0IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDM2dnc7XFxuICBtYXJnaW4tbGVmdDogNHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzRweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5vcHRpb25zLWNvbXBhY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxufVxcblxcbi5vcHRpb25zIGRpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2dmg7XFxufVxcblxcbi5vcHRpb24tc2V0dGluZ3MgaW1nLFxcbi5vcHRpb24tc2V0dGluZ3Mtb3BlbiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM4cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNDVweDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnNlbGVjdGVkLW1ldHJpYyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDEuMWVtO1xcbiAgd2lkdGg6IDEuMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uLXJlbG9hZCBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDc5JTtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSxcXG4ub3B0aW9uLXVuZmF2b3JpdGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ub3B0aW9uLWZhdm9yaXRlIGltZyxcXG4ub3B0aW9uLXVuZmF2b3JpdGUgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3NyU7XFxufVxcblxcbi5vcHRpb25zID4gZGl2ID4gZGl2IGRpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDN2dztcXG4gIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIHNlbGVjdCB7XFxuICB3aWR0aDogMTF2dztcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyID4gZGl2OmZpcnN0LWNoaWxkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNldHRpbmdzLWJhciA+IGRpdjpudGgtY2hpbGQoMikgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGNsaXA7XFxufVxcblxcbi5mYXZvcml0ZXMtYmFyIHAge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDN2dztcXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmFzaWNzLFxcbi53ZWF0aGVyLWdpZixcXG4ub3ZlcnZpZXcsXFxuLnN1blN0YXRzLFxcbi5jbG91ZFN0YXRzLFxcbi53aW5kU3RhdHMsXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkLFxcbi5mYXZvcml0ZXMtYmFyLFxcbi5zZXR0aW5ncy1iYXIsXFxuLnV2LWluZGV4LWNhcmQsXFxuLm1vb24tcGhhc2UtY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcXG4gIC5pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxdnc7XFxuICB9XFxuXFxuICAuaW5mbyBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuXFxuLmJhc2ljcyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gM2ZyIDFmcjtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDd2dztcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi80O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43dmg7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gcDpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gcCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5mbGFnIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzQ7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0byAzKTtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6Zmlyc3QtY2hpbGQsXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjRyZW07XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi53ZWF0aGVyLWdpZiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5vdmVydmlldyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ub3ZlcnZpZXcgPiBwIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc25vdy1jYXJkLFxcbi5yYWluLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxuICBwYWRkaW5nLXRvcDogMXZoO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5zbm93LWNhcmQgaW1nLFxcbi5yYWluLWNhcmQgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uc25vdy1jYXJkID4gZGl2ID4gcDpmaXJzdC1jaGlsZCxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHZoO1xcbn1cXG5cXG4uc25vdy1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDMpLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc25vdy1jYXJkID4gZGl2LFxcbi5yYWluLWNhcmQgPiBkaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLnN1blN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBwYWRkaW5nLXRvcDogMXZoO1xcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcXG59XFxuXFxuLnN1blN0YXRzIGltZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnN1blN0YXRzIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG91ZFN0YXRzLFxcbi53aW5kU3RhdHMsXFxuLnV2LWluZGV4LWNhcmQsXFxuLm1vb24tcGhhc2UtY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMy44ZnI7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLmdpZiA+IGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIGltZyxcXG4ud2luZFN0YXRzIGltZyxcXG4udXYtaW5kZXgtY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5tb29uLXBoYXNlLWNhcmQgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA1NXB4O1xcbn1cXG5cXG4ubW9vbi1waGFzZS1jYXJkIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBwLFxcbi53aW5kU3RhdHMgcCxcXG4udXYtaW5kZXgtY2FyZCBwLFxcbi5tb29uLXBoYXNlLWNhcmQgcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmVycm9yLWNhcmQge1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgcGFkZGluZzogMnZ3O1xcbn1cXG5cXG4uZXJyb3ItY2FyZCBwIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcXG59XFxuXFxuLmVycm9yLWNhcmQgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlC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Q2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNoaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdmJhcixcXG4ub3B0aW9ucyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ubmF2YmFyID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNnZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDR2dztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAydnc7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM0cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ub3B0aW9ucy1jb21wYWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4ub3B0aW9ucyBkaXYge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNnZoO1xcbn1cXG5cXG4ub3B0aW9uLXNldHRpbmdzIGltZyxcXG4ub3B0aW9uLXNldHRpbmdzLW9wZW4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzOHB4O1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5zZWxlY3RlZC1tZXRyaWMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjFlbTtcXG4gIHdpZHRoOiAxLjFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbi5vcHRpb24tcmVsb2FkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3OSU7XFxufVxcblxcbi5vcHRpb24tZmF2b3JpdGUsXFxuLm9wdGlvbi11bmZhdm9yaXRlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSBpbWcsXFxuLm9wdGlvbi11bmZhdm9yaXRlIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNzclO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdiA+IGRpdiBkaXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAzdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuLnNldHRpbmdzLWJhciBzZWxlY3Qge1xcbiAgd2lkdGg6IDExdnc7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWJhciA+IGRpdjpmaXJzdC1jaGlsZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgPiBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLmZhdm9yaXRlcy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBjbGlwO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XFxuICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJhc2ljcyxcXG4ud2VhdGhlci1naWYsXFxuLm92ZXJ2aWV3LFxcbi5zdW5TdGF0cyxcXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzLFxcbi5zbm93LWNhcmQsXFxuLnJhaW4tY2FyZCxcXG4uZmF2b3JpdGVzLWJhcixcXG4uc2V0dGluZ3MtYmFyLFxcbi51di1pbmRleC1jYXJkLFxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAuaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXZ3O1xcbiAgfVxcblxcbiAgLmluZm8gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbi5iYXNpY3Mge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDNmciAxZnI7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiA3dnc7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuN3ZoO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IHAge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZmxhZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi80O1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8gMyk7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOmZpcnN0LWNoaWxkLFxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ud2VhdGhlci1naWYge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm92ZXJ2aWV3ID4gcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uc25vdy1jYXJkIGltZyxcXG4ucmFpbi1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQsXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjR2aDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdixcXG4ucmFpbi1jYXJkID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBpbWcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzLFxcbi51di1pbmRleC1jYXJkLFxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMuOGZyO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5naWYgPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBpbWcsXFxuLndpbmRTdGF0cyBpbWcsXFxuLnV2LWluZGV4LWNhcmQgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4ubW9vbi1waGFzZS1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNTVweDtcXG59XFxuXFxuLm1vb24tcGhhc2UtY2FyZCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmNsb3VkU3RhdHMgcCxcXG4ud2luZFN0YXRzIHAsXFxuLnV2LWluZGV4LWNhcmQgcCxcXG4ubW9vbi1waGFzZS1jYXJkIHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5lcnJvci1jYXJkIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHBhZGRpbmc6IDJ2dztcXG59XFxuXFxuLmVycm9yLWNhcmQgcCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbi5lcnJvci1jYXJkIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRFcnJvckdpZiB9IGZyb20gXCIuL2dpZkFQSVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFrZUVycm9yQ2FyZChlcnJvclR5cGUpIHtcbiAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaWYgKGVycm9yVHlwZSA9PSA0MDQpIHtcbiAgICBtZXNzYWdlID0gXCJTb3JyeSwgd2UgY291bGRuJ3QgZmluZCB0aGF0IGNpdHlcIjtcbiAgICBpbWFnZS5hbHQgPSBcImdpZiBjb25mdXNlZCB3aXRoIGVudGVyZWQgY2l0eVwiO1xuICAgIHRyeSB7XG4gICAgICBpbWFnZS5zcmMgPSBhd2FpdCBnZXRFcnJvckdpZigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGZldGNoaW5nIGVycm9yIGdpZjogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cbiAgbGV0IGVycm9yQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVycm9yQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY2FyZFwiKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgZXJyb3JDYXJkLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG4gIGVycm9yQ2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIHJldHVybiBlcnJvckNhcmQ7XG59XG4iLCJpbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuXG5jb25zdCBmYXZvcml0ZXNCYXIgPSB7XG4gIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSxcbiAgbWFrZUZhdm9yaXRlc0JhcigpIHtcbiAgICBsZXQgY2l0aWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIik7XG4gICAgY2l0aWVzID0gSlNPTi5wYXJzZShjaXRpZXMpO1xuICAgIGxldCBmYXZvcml0ZXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZhdm9yaXRlc0Jhci5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzLWJhclwiKTtcbiAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xuICAgICAgbGV0IGNpdHlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjaXR5TGluay5pbm5lclRleHQgPSBgJHtjaXR5fWA7XG4gICAgICBjaXR5TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgdW5pdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWV0cmljXCIpKTtcbiAgICAgICAgdW5pdHMgPyBnZXRXZWF0aGVyKGNpdHksIFwibWV0cmljXCIpIDogZ2V0V2VhdGhlcihjaXR5LCBcImltcGVyaWFsXCIpO1xuICAgICAgfSk7XG4gICAgICBmYXZvcml0ZXNCYXIuYXBwZW5kQ2hpbGQoY2l0eUxpbmspO1xuICAgIH0pO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0Jhcik7XG4gIH0sXG4gIHJlZnJlc2hGYXZvcml0ZXNCYXIoKSB7XG4gICAgbGV0IGZhdm9yaXRlc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzLWJhclwiKTtcbiAgICB0aGlzLmhlYWRlci5yZW1vdmVDaGlsZChmYXZvcml0ZXNCYXIpO1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZhdm9yaXRlc0JhcjtcbiIsImNvbnN0IGVuZHBvaW50ID0gXCJodHRwczovL2NvdW50cnlmbGFnc2FwaS5jb20vc3ZnL1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZsYWcoY29kZSkge1xuICBsZXQgc3JjID0gYCR7ZW5kcG9pbnR9JHtjb2RlfWA7XG4gIHJldHVybiBzcmM7XG59XG4iLCJjb25zdCBnaWZLZXkgPSBcIlpTcUxaQm9QMUwyNXBTMDNHNDc4cGpSQmIwTkVTYjBDXCI7XG5jb25zdCBlcnJvckdpZklkcyA9IFtcbiAgXCJnbG1SeWlTSTN2NUU0XCIsXG4gIFwiakpPMUJ3dWNoNW9yS1wiLFxuICBcImdLc0pVZGRqbnBQRzBcIixcbiAgXCJtRVY0MkYzOGx1cjZQYmZhcFdcIixcbiAgXCIxeFZiU1g4VXpJaU1QTVpqWlBcIixcbiAgXCJkb0pyQ084a0NBZ055XCIsXG4gIFwiaDRaNlJmdVF5Y2RpTVwiLFxuICBcIjNvN2FDVFBQbTRPSGZSTFNINlwiLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RXJyb3JHaWYoKSB7XG4gIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICBsZXQgaWQgPSBlcnJvckdpZklkc1tpbmRleF07XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLyR7aWR9P2FwaV9rZXk9JHtnaWZLZXl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBsZXQgc3JjID0gYXBpUHJvbWlzZVJlc29sdmVkLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgcmV0dXJuIHNyYztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckdpZih3ZWF0aGVyLCB1dmluZGV4LCBtb29ucGhhc2UpIHtcbiAgbGV0IGlkID0gXCJ1eW1LZ3FySjlPcjYwXCI7XG4gIGlmICh1dmluZGV4ID09IDApIHtcbiAgICBpZiAod2VhdGhlci5tYXRjaCgvcmFpbi8pKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJsaWdodFwiIHx8XG4gICAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJkcml6emxlXCJcbiAgICAgICkge1xuICAgICAgICBpZCA9IFwibDBJcklrcTdRM2lSSUkwaHlcIjtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC90aHVuZGVyc3Rvcm0vKSkge1xuICAgICAgICBpZCA9IFwiM29zeFl6SVFScU40RE9FZGRDXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZCA9IFwiVzBjM3hjWjNGMWQwRVlZYjBmXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9jbG91ZHMvKSkge1xuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJvdmVyY2FzdFwiKSB7XG4gICAgICAgIGlkID0gXCJkV0lhdTFaUnlJajNqNllFYUxcIjtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgd2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImZld1wiIHx8XG4gICAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJzY2F0dGVyZWRcIlxuICAgICAgKSB7XG4gICAgICAgIGlkID0gXCI2eHJDQW5YTGZQUTY0XCI7XG4gICAgICB9XG4gICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImJyb2tlblwiKSB7XG4gICAgICAgIGlkID0gXCIxMmVDbzhncFNNTWdyU1wiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvc25vdy8pKSB7XG4gICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKSkge1xuICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImxpZ2h0XCIpIHtcbiAgICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvc2hvd2VyLykpIHtcbiAgICAgICAgICAgIGlkID0gXCJPTkxvUlJBSFFoNWtZXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkID0gXCIzb2hjMTFEcE5NZjdxbnF4UjZcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkID0gXCJPV3hyeFJIWTZhZlJ1XCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9oYXplLykpIHtcbiAgICAgIGlkID0gXCJyMk9NdVRDRm8wcnYycmdBTDVcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL21pc3QvKSkge1xuICAgICAgaWQgPSBcIm1XMDNzVFpWVDlJWTBcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL2NsZWFyLykpIHtcbiAgICAgIGlkID0gXCJNMERvOFcxc0RsVVFDSUlYcG5cIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL2ZvZy8pKSB7XG4gICAgICBpZCA9IFwib0Fidk1YdmFoMU0wVVwiO1xuICAgIH1cblxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9zbGVldC8pKSB7XG4gICAgICBpZCA9IFwiZDNtbG10TlBveE5ydDRCaVwiO1xuICAgIH1cblxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9kcml6emxlLykpIHtcbiAgICAgIGlkID0gXCJ4VDlHRU9nMDlPdVJlc25aNmdcIjtcbiAgICB9XG5cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvc21va2UvKSkge1xuICAgICAgaWQgPSBcImwySmU5ZFVJNUxwemZIR1RlXCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9yYWluLykpIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImxpZ2h0XCIgfHxcbiAgICAgICAgd2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImRyaXp6bGVcIlxuICAgICAgKSB7XG4gICAgICAgIGlkID0gXCJsMElySWtxN1EzaVJJSTBoeVwiO1xuICAgICAgfVxuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL3RodW5kZXJzdG9ybS8pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGh1bmRlcnN0b3JtXCIpO1xuICAgICAgICBpZCA9IFwiM29zeFl6SVFScU40RE9FZGRDXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZCA9IFwiVzBjM3hjWjNGMWQwRVlZYjBmXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9jbG91ZHMvKSkge1xuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJvdmVyY2FzdFwiKSB7XG4gICAgICAgIGlkID0gXCJkV0lhdTFaUnlJajNqNllFYUxcIjtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgd2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImZld1wiIHx8XG4gICAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJzY2F0dGVyZWRcIlxuICAgICAgKSB7XG4gICAgICAgIGlkID0gXCJ1T3VpSzRGNXpaa1oyXCI7XG4gICAgICB9XG4gICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImJyb2tlblwiKSB7XG4gICAgICAgIGlkID0gXCJNMERvOFcxc0RsVVFDSUlYcG5cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL3Nub3cvKSkge1xuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLykpIHtcbiAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJsaWdodFwiKSB7XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL3Nob3dlci8pKSB7XG4gICAgICAgICAgICBpZCA9IFwiTkVxeEJjZWpLRTY4VVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZCA9IFwieFVMVzhEb0szbDhzaVpUMkpXXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZCA9IFwiczRCaTQyMG1NRFJCS1wiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvaGF6ZS8pKSB7XG4gICAgICBpZCA9IFwicjJPTXVUQ0ZvMHJ2MnJnQUw1XCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9taXN0LykpIHtcbiAgICAgIGlkID0gXCJtVzAzc1RaVlQ5SVkwXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9jbGVhci8pKSB7XG4gICAgICBpZCA9IFwiNnhyQ0FuWExmUFE2NFwiO1xuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvZm9nLykpIHtcbiAgICAgIGlkID0gXCJvQWJ2TVh2YWgxTTBVXCI7XG4gICAgfVxuXG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL3NsZWV0LykpIHtcbiAgICAgIGlkID0gXCJkM21sbXROUG94TnJ0NEJpXCI7XG4gICAgfVxuXG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL2RyaXp6bGUvKSkge1xuICAgICAgaWQgPSBcInhUOUdFT2cwOU91UmVzblo2Z1wiO1xuICAgIH1cblxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9zbW9rZS8pKSB7XG4gICAgICBpZCA9IFwibDJKZTlkVUk1THB6ZkhHVGVcIjtcbiAgICB9XG4gIH1cbiAgbGV0IGFwaVByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvJHtpZH0/YXBpX2tleT0ke2dpZktleX1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGxldCBzcmMgPSBhcGlQcm9taXNlUmVzb2x2ZWQuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICByZXR1cm4gc3JjO1xufVxuXG5leHBvcnQgeyBnZXRFcnJvckdpZiwgZ2V0V2VhdGhlckdpZiB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNob3dPbkluZm8gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IHsgc2hvd09uQ2FyZCB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5pbXBvcnQgeyBtYWtlRXJyb3JDYXJkIH0gZnJvbSBcIi4vZXJyb3JDYXJkc1wiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlckdpZiB9IGZyb20gXCIuL2dpZkFQSVwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNVbmZhdm9yaXRlIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKTtcblxuY29uc3QgaGFuZGxlVXNlcklucHV0ID0ge1xuICB3ZWF0aGVyS2V5OiBcIjhhZTJkMTNlNTRlYmVmNzc1ZWZmZjJjNTI4MTdhNWUyXCIsXG4gIHN1bkFuZE1vb25LZXk6IFwiRVlFQVpKWDkzUVhOUVZQVU04QVlFMzhOWFwiLFxuICBnaWZLZXk6IFwiWlNxTFpCb1AxTDI1cFMwM0c0NzhwalJCYjBORVNiMENcIixcbiAgdW5pdHM6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpLFxuICBoYW5kbGVTZWFyY2hJY29uKGNpdHlGcm9tQ2FyZCkge1xuICAgIGxldCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaGJhciA+IGlucHV0XCIpO1xuICAgIGxldCB1bml0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpO1xuICAgIGxldCB1bml0c1RvVXNlID0gXCJcIjtcbiAgICB1bml0cyA/ICh1bml0c1RvVXNlID0gXCJtZXRyaWNcIikgOiAodW5pdHNUb1VzZSA9IFwiaW1wZXJpYWxcIik7XG4gICAgaWYgKHNlYXJjaGJhci52YWx1ZSkge1xuICAgICAgZ2V0V2VhdGhlcihzZWFyY2hiYXIudmFsdWUsIHVuaXRzVG9Vc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2l0eUZyb21DYXJkKSB7XG4gICAgICAgIGdldFdlYXRoZXIoY2l0eUZyb21DYXJkLCB1bml0c1RvVXNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgIGxldCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuICAgICAgICAgIGdldFdlYXRoZXIoY2l0eS5pbm5lclRleHQsIHVuaXRzVG9Vc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ha2VGYXZMaXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyZEZvckZhdkxpc3QobG9jYXRpb24sIHVuaXRzKSB7XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtoYW5kbGVVc2VySW5wdXQud2VhdGhlcktleX0mdW5pdHM9JHt1bml0c31gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuY29kID09IDQwNCkge1xuICAgIGxldCBlcnJvckNhcmQgPSBhd2FpdCBtYWtlRXJyb3JDYXJkKDQwNCk7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZXJyb3JDYXJkKTtcbiAgICBnZXRPcHRpb25zKGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY2l0eSA9IGFwaVByb21pc2VSZXNvbHZlZC5uYW1lO1xuICAgIGxldCBjb3VudHJ5ID0gbnVsbDtcbiAgICBjb3VudHJ5ID0gYXBpUHJvbWlzZVJlc29sdmVkLnN5cy5jb3VudHJ5O1xuICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgbGV0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDtcbiAgICBsZXQgZGF0ZUF0Q2l0eSA9IG5ldyBEYXRlKFxuICAgICAgdGltZU5vdyArIG9mZnNldCArIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDBcbiAgICApO1xuICAgIGxldCB0aW1lQXRDaXR5ID0gZGF0ZUF0Q2l0eS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICB9KTtcbiAgICBsZXQgZGF0ZUF0Q2l0eVNpbXBsZSA9IGRhdGVBdENpdHkudG9EYXRlU3RyaW5nKCk7XG4gICAgbGV0IHRlbXBlcmF0dXJlID0gYXBpUHJvbWlzZVJlc29sdmVkLm1haW4udGVtcDtcbiAgICBsZXQgdGVtcFJvdW5kZWQgPSBNYXRoLnJvdW5kKHRlbXBlcmF0dXJlICogMTApIC8gMTA7XG4gICAgbGV0IHRlbXBlcmF0dXJlRmVlbHMgPSBhcGlQcm9taXNlUmVzb2x2ZWQubWFpbi5mZWVsc19saWtlO1xuICAgIGxldCB0ZW1wRmVlbHNSb3VuZGVkID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZUZlZWxzICogMTApIC8gMTA7XG4gICAgbGV0IHdlYXRoZXIgPSBhcGlQcm9taXNlUmVzb2x2ZWQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGxldCBjYXJkID0gc2hvd09uQ2FyZChcbiAgICAgIHVuaXRzLFxuICAgICAgY2l0eSxcbiAgICAgIGNvdW50cnksXG4gICAgICB0aW1lQXRDaXR5LFxuICAgICAgZGF0ZUF0Q2l0eVNpbXBsZSxcbiAgICAgIHRlbXBSb3VuZGVkLFxuICAgICAgdGVtcEZlZWxzUm91bmRlZCxcbiAgICAgIHdlYXRoZXJcbiAgICApO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCB1bml0cykge1xuICBsZXQgZmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtYmFyXCIpO1xuICBpZiAoZmF2QmFyKSB7XG4gICAgZmF2QmFyLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICB9XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtoYW5kbGVVc2VySW5wdXQud2VhdGhlcktleX0mdW5pdHM9JHt1bml0c31gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuY29kID09IDQwNCkge1xuICAgIGxldCBlcnJvckNhcmQgPSBhd2FpdCBtYWtlRXJyb3JDYXJkKDQwNCk7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZXJyb3JDYXJkKTtcbiAgICBnZXRPcHRpb25zKGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY2l0eSA9IGFwaVByb21pc2VSZXNvbHZlZC5uYW1lO1xuXG4gICAgbGV0IGNpdGllcyA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGlmIChjaXRpZXMubGVuZ3RoID4gMCAmJiBjaXRpZXMuc29tZSgoYykgPT4gYyA9PSBjaXR5KSkge1xuICAgICAgZ2V0T3B0aW9uc1VuZmF2b3JpdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0T3B0aW9ucyh0cnVlKTtcbiAgICB9XG5cbiAgICBsZXQgY291bnRyeSA9IG51bGw7XG4gICAgY291bnRyeSA9IGFwaVByb21pc2VSZXNvbHZlZC5zeXMuY291bnRyeTtcbiAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGxldCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG4gICAgbGV0IGRhdGVBdENpdHkgPSBuZXcgRGF0ZShcbiAgICAgIHRpbWVOb3cgKyBvZmZzZXQgKyBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwXG4gICAgKTtcbiAgICBsZXQgdGltZUF0Q2l0eSA9IGRhdGVBdENpdHkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IGRhdGVBdENpdHlTaW1wbGUgPSBkYXRlQXRDaXR5LnRvRGF0ZVN0cmluZygpO1xuICAgIGxldCB0ZW1wZXJhdHVyZSA9IGFwaVByb21pc2VSZXNvbHZlZC5tYWluLnRlbXA7XG4gICAgbGV0IHRlbXBSb3VuZGVkID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZSAqIDEwKSAvIDEwO1xuICAgIGxldCB0ZW1wZXJhdHVyZUZlZWxzID0gYXBpUHJvbWlzZVJlc29sdmVkLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgdGVtcEZlZWxzUm91bmRlZCA9IE1hdGgucm91bmQodGVtcGVyYXR1cmVGZWVscyAqIDEwKSAvIDEwO1xuICAgIGxldCB3ZWF0aGVyID0gYXBpUHJvbWlzZVJlc29sdmVkLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgbGV0IGdpZlNyYyA9IFwiXCI7XG4gICAgbGV0IHJhaW4xaCA9IFwiXCI7XG4gICAgbGV0IHJhaW4zaCA9IFwiXCI7XG4gICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5yYWluKSB7XG4gICAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIxaFwiXSkge1xuICAgICAgICByYWluMWggPSBhcGlQcm9taXNlUmVzb2x2ZWQucmFpbltcIjFoXCJdO1xuICAgICAgfVxuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5yYWluW1wiM2hcIl0pIHtcbiAgICAgICAgcmFpbjNoID0gYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIzaFwiXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNub3cxaCA9IFwiXCI7XG4gICAgbGV0IHNub3czaCA9IFwiXCI7XG4gICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5zbm93KSB7XG4gICAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIxaFwiXSkge1xuICAgICAgICBzbm93MWggPSBhcGlQcm9taXNlUmVzb2x2ZWQuc25vd1tcIjFoXCJdO1xuICAgICAgfVxuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5zbm93W1wiM2hcIl0pIHtcbiAgICAgICAgc25vdzNoID0gYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIzaFwiXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN1bnJpc2UgPSBuZXcgRGF0ZShcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3VucmlzZVwiXSAqIDEwMDAgK1xuICAgICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDAgK1xuICAgICAgICAgIG9mZnNldFxuICAgICAgKVxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IHN1bnNldCA9IG5ldyBEYXRlKFxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC5zeXNbXCJzdW5zZXRcIl0gKiAxMDAwICtcbiAgICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwICtcbiAgICAgICAgICBvZmZzZXRcbiAgICAgIClcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIH0pO1xuICAgIGxldCBjbG91ZGluZXNzID0gYXBpUHJvbWlzZVJlc29sdmVkLmNsb3Vkc1tcImFsbFwiXTtcbiAgICBsZXQgd2luZCA9IGFwaVByb21pc2VSZXNvbHZlZC53aW5kW1wic3BlZWRcIl07XG5cbiAgICBsZXQgc3VuQW5kTW9vbkFwaVByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufS8ke1xuICAgICAgICBEYXRlLnBhcnNlKGRhdGVBdENpdHkpIC8gMTAwMFxuICAgICAgfS8/a2V5PSR7aGFuZGxlVXNlcklucHV0LnN1bkFuZE1vb25LZXl9JmVsZW1lbnRzPXV2aW5kZXgsbW9vbnBoYXNlYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG5cbiAgICBsZXQgc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IHN1bkFuZE1vb25BcGlQcm9taXNlLmpzb24oKTtcbiAgICBsZXQgbW9vbnBoYXNlO1xuICAgIGxldCB1dmluZGV4O1xuICAgIGlmIChzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zKSB7XG4gICAgICBtb29ucGhhc2UgPSBzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zLm1vb25waGFzZTtcbiAgICAgIHV2aW5kZXggPSBzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zLnV2aW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vb25waGFzZSA9IHN1bkFuZE1vb25BcGlQcm9taXNlUmVzb2x2ZWQuZGF5c1swXS5tb29ucGhhc2U7XG4gICAgICB1dmluZGV4ID0gc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZC5kYXlzWzBdLnV2aW5kZXg7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBnaWZTcmMgPSBhd2FpdCBnZXRXZWF0aGVyR2lmKHdlYXRoZXIsIHV2aW5kZXgsIG1vb25waGFzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZmV0Y2hpbmcgd2VhdGhlciBnaWY6IFwiLCBlcnJvcik7XG4gICAgfVxuXG4gICAgc2hvd09uSW5mbyhcbiAgICAgIHVuaXRzLFxuICAgICAgY2l0eSxcbiAgICAgIGNvdW50cnksXG4gICAgICB0aW1lQXRDaXR5LFxuICAgICAgZGF0ZUF0Q2l0eVNpbXBsZSxcbiAgICAgIHRlbXBSb3VuZGVkLFxuICAgICAgdGVtcEZlZWxzUm91bmRlZCxcbiAgICAgIHdlYXRoZXIsXG4gICAgICByYWluMWgsXG4gICAgICByYWluM2gsXG4gICAgICBzbm93MWgsXG4gICAgICBzbm93M2gsXG4gICAgICBzdW5yaXNlLFxuICAgICAgc3Vuc2V0LFxuICAgICAgY2xvdWRpbmVzcyxcbiAgICAgIHdpbmQsXG4gICAgICBnaWZTcmMsXG4gICAgICBtb29ucGhhc2UsXG4gICAgICB1dmluZGV4XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVVc2VySW5wdXQ7XG4iLCJpbXBvcnQgeyBnZXRGbGFnIH0gZnJvbSBcIi4vZmxhZ0FQSVwiO1xuaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCYXNpY3NDYXJkKFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB0aW1lLFxuICBkYXRlLFxuICB0ZW1wLFxuICB0ZW1wRmVlbHMsXG4gIHRlbXBVbml0LFxuICBmb3JGYXZMaXN0XG4pIHtcbiAgbGV0IGJhc2ljcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhc2ljcy5jbGFzc0xpc3QuYWRkKFwiYmFzaWNzXCIpO1xuXG4gIGxldCBiYXNpY3NDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc0NpdHkuaW5uZXJUZXh0ID0gYCR7Y2l0eX1gO1xuICBiYXNpY3NDaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eVwiKTtcbiAgYmFzaWNzQ2l0eS5jbGFzc0xpc3QuYWRkKFwiY2l0eVwiKTtcbiAgbGV0IGJhc2ljc0NvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmFzaWNzQ291bnRyeS5pbm5lclRleHQgPSBgJHtjb3VudHJ5fWA7XG4gIGxldCBiYXNpY3NUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc1RpbWUuaW5uZXJUZXh0ID0gYCR7dGltZX1gO1xuICBsZXQgYmFzaWNzRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBiYXNpY3NEYXRlLmlubmVyVGV4dCA9IGAke2RhdGV9YDtcbiAgbGV0IHJldHJpZXZhbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmV0cmlldmFsVGltZS5pbm5lclRleHQgPSBgTGFzdCB1cGRhdGU6ICR7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfWA7XG4gIGxldCB0ZW1wVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVtcFRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGAke3RlbXB9ICR7dGVtcFVuaXR9YDtcbiAgbGV0IHRlbXBGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVtcEZlZWxzTGlrZS5pbm5lclRleHQgPSBgJHt0ZW1wRmVlbHN9ICR7dGVtcFVuaXR9YDtcbiAgbGV0IGZlZWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZmVlbHNMYWJlbC5pbm5lclRleHQgPSBcIkZlZWxzIGxpa2U6IFwiO1xuXG4gIGxldCBiYXNpY3NUaXRsZUNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYmFzaWNzVGl0bGVDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJhc2ljc0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYmFzaWNzVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXNpY3NUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKFwiYmFzaWNzLXRlbXBlcmF0dXJlXCIpO1xuICBiYXNpY3NUaXRsZUNpdHkuYXBwZW5kQ2hpbGQoYmFzaWNzQ2l0eSk7XG4gIGJhc2ljc1RpdGxlQ291bnRyeS5hcHBlbmRDaGlsZChiYXNpY3NDb3VudHJ5KTtcbiAgbGV0IGZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmbGFnLnNldEF0dHJpYnV0ZShcbiAgICBcImNyb3Nzb3JpZ2luXCIsXG4gICAgXCJDcm9zcy1PcmlnaW4tUmVzb3VyY2UtUG9saWN5OiBjcm9zcy1vcmlnaW4gXCJcbiAgKTtcbiAgZmxhZy5hbHQgPSBgJHtjb3VudHJ5fSBmbGFnYDtcbiAgZmxhZy5zcmMgPSBnZXRGbGFnKGNvdW50cnkpO1xuICBmbGFnLmNsYXNzTGlzdC5hZGQoXCJmbGFnXCIpO1xuXG4gIGxldCBiYXNpY3NEYXRlQW5kVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhc2ljc0RhdGVBbmRUaW1lLmFwcGVuZENoaWxkKGJhc2ljc1RpbWUpO1xuICBiYXNpY3NEYXRlQW5kVGltZS5hcHBlbmRDaGlsZChiYXNpY3NEYXRlKTtcblxuICBiYXNpY3MuYXBwZW5kQ2hpbGQoYmFzaWNzVGl0bGVDaXR5KTtcbiAgYmFzaWNzRGV0YWlscy5hcHBlbmRDaGlsZChmbGFnKTtcbiAgYmFzaWNzRGV0YWlscy5hcHBlbmRDaGlsZChiYXNpY3NEYXRlQW5kVGltZSk7XG4gIGJhc2ljc0RldGFpbHMuYXBwZW5kQ2hpbGQocmV0cmlldmFsVGltZSk7XG4gIGJhc2ljcy5hcHBlbmRDaGlsZChiYXNpY3NEZXRhaWxzKTtcbiAgYmFzaWNzVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQodGVtcFRlbXBlcmF0dXJlKTtcbiAgYmFzaWNzVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoZmVlbHNMYWJlbCk7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKHRlbXBGZWVsc0xpa2UpO1xuICBiYXNpY3MuYXBwZW5kQ2hpbGQoYmFzaWNzVGVtcGVyYXR1cmUpO1xuXG4gIGlmIChmb3JGYXZMaXN0KSB7XG4gICAgYmFzaWNzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oY2l0eSlcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGJhc2ljcztcbn1cbiIsImltcG9ydCBDbG91ZGluZXNzSWNvbiBmcm9tIFwiLi9jbG91ZC1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNsb3Vkc0NhcmQoY2xvdWRpbmVzcykge1xuICBsZXQgY2xvdWRTdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3VkU3RhdHMuY2xhc3NMaXN0LmFkZChcImNsb3VkU3RhdHNcIik7XG4gIGxldCBjbG91ZGluZXNzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjbG91ZGluZXNzSWNvbi5hbHQgPSBcIkNsb3VkaW5lc3MgaWNvblwiO1xuICBjbG91ZGluZXNzSWNvbi5zcmMgPSBDbG91ZGluZXNzSWNvbjtcbiAgbGV0IGNsb3VkaW5lc3NDbG91ZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2xvdWRpbmVzc0Nsb3Vkcy5pbm5lclRleHQgPSBgQ2xvdWRpbmVzczogJHtjbG91ZGluZXNzfSAlYDtcbiAgY2xvdWRTdGF0cy5hcHBlbmRDaGlsZChjbG91ZGluZXNzSWNvbik7XG4gIGNsb3VkU3RhdHMuYXBwZW5kQ2hpbGQoY2xvdWRpbmVzc0Nsb3Vkcyk7XG4gIHJldHVybiBjbG91ZFN0YXRzO1xufVxuIiwiaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCB7IGdldENhcmRGb3JGYXZMaXN0IH0gZnJvbSBcIi4vaGFuZGxlVXNlcklucHV0XCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zRmF2TGlzdCB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWtlRmF2TGlzdCgpIHtcbiAgbGV0IHVuaXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldHJpY1wiKSk7XG4gIGxldCBtZXRyaWMgPSBcIlwiO1xuICB1bml0cyA/IChtZXRyaWMgPSBcIm1ldHJpY1wiKSA6IChtZXRyaWMgPSBcImltcGVyaWFsXCIpO1xuICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gIGNpdGllcy5mb3JFYWNoKGFzeW5jIGZ1bmN0aW9uIChjaXR5KSB7XG4gICAgbGV0IGNpdHlDYXJkID0gYXdhaXQgZ2V0Q2FyZEZvckZhdkxpc3QoY2l0eSwgbWV0cmljKTtcbiAgICBnZXRPcHRpb25zRmF2TGlzdCgpO1xuICAgIGxldCBmYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gICAgZmF2QmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlkZGVuXCIpO1xuICAgIHJlc3VsdC5hcHBlbmRDaGlsZChjaXR5Q2FyZCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VHaWZDYXJkKGdpZlNyYykge1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UuYWx0ID0gXCJ3ZWF0aGVyIGdpZlwiO1xuICBpbWFnZS5zcmMgPSBnaWZTcmM7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWdpZlwiKTtcbiAgcmV0dXJuIGltYWdlO1xufVxuIiwiaW1wb3J0IE5ld01vb24gZnJvbSBcIi4vbmV3LW1vb24uc3ZnXCI7XG5pbXBvcnQgV2F4aW5nQ3Jlc2NlbnRNb29uIGZyb20gXCIuL3dheGluZy1jcmVzZW50LW1vb24uc3ZnXCI7XG5pbXBvcnQgRmlyc3RRdWFydGVyTW9vbiBmcm9tIFwiLi9maXJzdC1xdWFydGVyLW1vb24uc3ZnXCI7XG5pbXBvcnQgV2F4aW5nR2liYm91c01vb24gZnJvbSBcIi4vd2F4aW5nLWdpYmJvdXMtbW9vbi5zdmdcIjtcbmltcG9ydCBGdWxsTW9vbiBmcm9tIFwiLi9mdWxsLW1vb24uc3ZnXCI7XG5pbXBvcnQgV2FuaW5nR2liYm91c01vb24gZnJvbSBcIi4vd2FuaW5nLWdpYmJvdXMtbW9vbi5zdmdcIjtcbmltcG9ydCBUaGlyZFF1YXJ0ZXJNb29uIGZyb20gXCIuL3RoaXJkLXF1YXJ0ZXItbW9vbi5zdmdcIjtcbmltcG9ydCBXYW5pbmdDcmVzY2VudCBmcm9tIFwiLi93YW5pbmctY3Jlc2NlbnQtbW9vbi5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb29uUGhhc2VDYXJkKG1vb25waGFzZSkge1xuICBsZXQgbW9vblBoYXNlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vb25QaGFzZUNhcmQuY2xhc3NMaXN0LmFkZChcIm1vb24tcGhhc2UtY2FyZFwiKTtcblxuICBsZXQgbW9vbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbW9vbkljb24uYWx0ID0gXCJNb29uIHBoYXNlIGljb25cIjtcblxuICBsZXQgcGhhc2VOYW1lO1xuXG4gIGlmIChtb29ucGhhc2UgPT0gMCkge1xuICAgIG1vb25JY29uLnNyYyA9IE5ld01vb247XG4gICAgcGhhc2VOYW1lID0gXCJOZXcgTW9vblwiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPiAwICYmIG1vb25waGFzZSA8IDAuMjUpIHtcbiAgICBtb29uSWNvbi5zcmMgPSBXYXhpbmdDcmVzY2VudE1vb247XG4gICAgcGhhc2VOYW1lID0gXCJXYXhpbmcgQ3Jlc2NlbnRcIjtcbiAgfVxuICBpZiAobW9vbnBoYXNlID09IDAuMjUpIHtcbiAgICBtb29uSWNvbi5zcmMgPSBGaXJzdFF1YXJ0ZXJNb29uO1xuICAgIHBoYXNlTmFtZSA9IFwiRmlyc3QgUXVhcnRlclwiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPiAwLjI1ICYmIG1vb25waGFzZSA8IDAuNSkge1xuICAgIG1vb25JY29uLnNyYyA9IFdheGluZ0dpYmJvdXNNb29uO1xuICAgIHBoYXNlTmFtZSA9IFwiV2FjaW5nIEdpYmJvdXNcIjtcbiAgfVxuICBpZiAobW9vbnBoYXNlID09IDAuNSkge1xuICAgIG1vb25JY29uLnNyYyA9IEZ1bGxNb29uO1xuICAgIHBoYXNlTmFtZSA9IFwiRnVsbCBNb29uXCI7XG4gIH1cbiAgaWYgKG1vb25waGFzZSA+IDAuNSAmJiBtb29ucGhhc2UgPCAwLjc1KSB7XG4gICAgbW9vbkljb24uc3JjID0gV2FuaW5nR2liYm91c01vb247XG4gICAgcGhhc2VOYW1lID0gXCJXYW5pbmcgR2liYm91c1wiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPT0gMC43NSkge1xuICAgIG1vb25JY29uLnNyYyA9IFRoaXJkUXVhcnRlck1vb247XG4gICAgcGhhc2VOYW1lID0gXCJMYXN0IFF1YXJ0ZXJcIjtcbiAgfVxuICBpZiAobW9vbnBoYXNlID4gMC43NSAmJiBtb29ucGhhc2UgPD0gMSkge1xuICAgIG1vb25JY29uLnNyYyA9IFdhbmluZ0NyZXNjZW50O1xuICAgIHBoYXNlTmFtZSA9IFwiV2FuaW5nIENyZXNjZW50XCI7XG4gIH1cblxuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYE1vb24gcGhhc2U6ICR7cGhhc2VOYW1lfWA7XG5cbiAgbW9vblBoYXNlQ2FyZC5hcHBlbmRDaGlsZChtb29uSWNvbik7XG4gIG1vb25QaGFzZUNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBtb29uUGhhc2VDYXJkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VPdmVydmlld0NhcmQod2VhdGhlcikge1xuICBsZXQgb3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVydmlldy5jbGFzc0xpc3QuYWRkKFwib3ZlcnZpZXdcIik7XG4gIGxldCBvdmVydmlld1dlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgb3ZlcnZpZXdXZWF0aGVyLmlubmVyVGV4dCA9IGAke3dlYXRoZXJ9YDtcbiAgb3ZlcnZpZXcuYXBwZW5kQ2hpbGQob3ZlcnZpZXdXZWF0aGVyKTtcblxuICByZXR1cm4gb3ZlcnZpZXc7XG59XG4iLCJpbXBvcnQgUmFpbkljb24gZnJvbSBcIi4vcmFpbi5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSYWluQ2FyZChyYWluVm9sMWgsIHJhaW5Wb2wzaCkge1xuICBsZXQgcmFpbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByYWluQ2FyZC5jbGFzc0xpc3QuYWRkKFwicmFpbi1jYXJkXCIpO1xuXG4gIGxldCByYWluSWNvbiA9IG5ldyBJbWFnZSgpO1xuICByYWluSWNvbi5hbHQgPSBcIlJhaW4gaWNvblwiO1xuICByYWluSWNvbi5zcmMgPSBSYWluSWNvbjtcblxuICBsZXQgcmFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIlJhaW4gdm9sdW1lXCI7XG5cbiAgbGV0IHJhaW4xaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByYWluMWguaW5uZXJUZXh0ID0gYExhc3QgaG91cjogJHtyYWluVm9sMWh9IG1tYDtcblxuICByYWluSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJhaW5JbmZvLmFwcGVuZENoaWxkKHJhaW4xaCk7XG5cbiAgaWYgKHJhaW5Wb2wzaCkge1xuICAgIGxldCByYWluM2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByYWluM2guaW5uZXJUZXh0ID0gYExhc3QgM2g6ICR7cmFpblZvbDNofWA7XG4gICAgcmFpbkluZm8uYXBwZW5kQ2hpbGQocmFpbjNoKTtcbiAgfVxuXG4gIHJhaW5DYXJkLmFwcGVuZENoaWxkKHJhaW5JY29uKTtcbiAgcmFpbkNhcmQuYXBwZW5kQ2hpbGQocmFpbkluZm8pO1xuXG4gIHJldHVybiByYWluQ2FyZDtcbn1cbiIsImltcG9ydCBTZWFyY2hJY29uIGZyb20gXCIuL3NlYXJjaC1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZWFyY2hCYXIoKSB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyXCIpO1xuICBsZXQgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzZWFyY2hJY29uLmFsdCA9IFwiU2VhcmNoIEljb25cIjtcbiAgc2VhcmNoSWNvbi5zcmMgPSBTZWFyY2hJY29uO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG5cbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24pO1xuICBjb25zdCBzZWFyY2hCYXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gIHNlYXJjaEJhcklucHV0Lm9uZm9jdXMgPSAoKSA9PiB7XG4gICAgc2VhcmNoQmFySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICBzZWFyY2hJY29uLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBtYWtlQXV0b1JlZnJlc2hTZXR0aW5nIH0gZnJvbSBcIi4vc2V0dGluZ0F1dG9SZWZyZXNoXCI7XG5pbXBvcnQgeyBtYWtlU29ydFNldHRpbmcgfSBmcm9tIFwiLi9zZXR0aW5nU29ydFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNldHRpbmdzQmFyKCkge1xuICBsZXQgc2V0dGluZ3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXR0aW5nc0Jhci5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3MtYmFyXCIpO1xuXG4gIGxldCBhdXRvUmVmU2V0dGluZyA9IG1ha2VBdXRvUmVmcmVzaFNldHRpbmcoKTtcbiAgc2V0dGluZ3NCYXIuYXBwZW5kQ2hpbGQoYXV0b1JlZlNldHRpbmcpO1xuXG4gIGxldCBzb3J0U2V0dGluZyA9IG1ha2VTb3J0U2V0dGluZygpO1xuICBzZXR0aW5nc0Jhci5hcHBlbmRDaGlsZChzb3J0U2V0dGluZyk7XG5cbiAgc2V0dGluZ3NCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGljaykgPT4ge1xuICAgIGNsaWNrLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICByZXR1cm4gc2V0dGluZ3NCYXI7XG59XG4iLCJpbXBvcnQgU25vd0ljb24gZnJvbSBcIi4vc25vdy5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTbm93Q2FyZChzbm93Vm9sMWgsIHNub3dWb2wzaCkge1xuICBsZXQgc25vd0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbm93Q2FyZC5jbGFzc0xpc3QuYWRkKFwic25vdy1jYXJkXCIpO1xuXG4gIGxldCBzbm93SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzbm93SWNvbi5hbHQgPSBcIlNub3cgaWNvblwiO1xuICBzbm93SWNvbi5zcmMgPSBTbm93SWNvbjtcblxuICBsZXQgc25vd0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIlNub3cgdm9sdW1lXCI7XG5cbiAgbGV0IHNub3cxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzbm93MWguaW5uZXJUZXh0ID0gYExhc3QgaG91cjogJHtzbm93Vm9sMWh9IG1tYDtcblxuICBzbm93SW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHNub3dJbmZvLmFwcGVuZENoaWxkKHNub3cxaCk7XG5cbiAgaWYgKHNub3dWb2wzaCkge1xuICAgIGxldCBzbm93M2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzbm93M2guaW5uZXJUZXh0ID0gYExhc3QgM2g6ICR7c25vd1ZvbDNofWA7XG4gICAgc25vd0luZm8uYXBwZW5kQ2hpbGQoc25vdzNoKTtcbiAgfVxuXG4gIHNub3dDYXJkLmFwcGVuZENoaWxkKHNub3dJY29uKTtcbiAgc25vd0NhcmQuYXBwZW5kQ2hpbGQoc25vd0luZm8pO1xuXG4gIHJldHVybiBzbm93Q2FyZDtcbn1cbiIsImltcG9ydCBTdW5yaXNlSWNvbiBmcm9tIFwiLi9zdW5yaXNlLnN2Z1wiO1xuaW1wb3J0IFN1bnNldEljb24gZnJvbSBcIi4vc3Vuc2V0LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1bkNhcmQoc3VucmlzZSwgc3Vuc2V0KSB7XG4gIGxldCBzdW5TdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1blN0YXRzLmNsYXNzTGlzdC5hZGQoXCJzdW5TdGF0c1wiKTtcblxuICBsZXQgc3VucmlzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgc3Vuc2V0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHN1bnJpc2VJY29uID0gbmV3IEltYWdlKCk7XG4gIHN1bnJpc2VJY29uLmFsdCA9IFwiU3VucmlzZSBpY29uXCI7XG4gIHN1bnJpc2VJY29uLnNyYyA9IFN1bnJpc2VJY29uO1xuXG4gIGxldCBzdW5zZXRJY29uID0gbmV3IEltYWdlKCk7XG4gIHN1bnNldEljb24uYWx0ID0gXCJTdW5zZXQgaWNvblwiO1xuICBzdW5zZXRJY29uLnNyYyA9IFN1bnNldEljb247XG5cbiAgbGV0IHN1blN0YXRzU3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdW5TdGF0c1N1bnJpc2UuaW5uZXJUZXh0ID0gYFN1bnJpc2U6ICR7c3VucmlzZX1gO1xuXG4gIGxldCBzdW5TdGF0c1N1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdW5TdGF0c1N1bnNldC5pbm5lclRleHQgPSBgU3Vuc2V0OiAke3N1bnNldH1gO1xuXG4gIHN1bnJpc2VFbGVtZW50LmFwcGVuZENoaWxkKHN1bnJpc2VJY29uKTtcbiAgc3VucmlzZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VuU3RhdHNTdW5yaXNlKTtcblxuICBzdW5zZXRFbGVtZW50LmFwcGVuZENoaWxkKHN1bnNldEljb24pO1xuICBzdW5zZXRFbGVtZW50LmFwcGVuZENoaWxkKHN1blN0YXRzU3Vuc2V0KTtcblxuICBzdW5TdGF0cy5hcHBlbmRDaGlsZChzdW5yaXNlRWxlbWVudCk7XG4gIHN1blN0YXRzLmFwcGVuZENoaWxkKHN1bnNldEVsZW1lbnQpO1xuICByZXR1cm4gc3VuU3RhdHM7XG59XG4iLCJpbXBvcnQgVVZJbmRleEljb24gZnJvbSBcIi4vVVZJY29uLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVWSW5kZXhDYXJkKHV2aW5kZXgpIHtcbiAgbGV0IHV2SW5kZXhDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXZJbmRleENhcmQuY2xhc3NMaXN0LmFkZChcInV2LWluZGV4LWNhcmRcIik7XG5cbiAgbGV0IHV2SWNvbiA9IG5ldyBJbWFnZSgpO1xuICB1dkljb24uYWx0ID0gXCJVViBpbmRleCBpY29uXCI7XG4gIHV2SWNvbi5zcmMgPSBVVkluZGV4SWNvbjtcblxuICBsZXQgZGVzY3JpcHRpb247XG4gIGlmICh1dmluZGV4IDw9IDIpIHtcbiAgICBkZXNjcmlwdGlvbiA9IFwiKExvdylcIjtcbiAgfVxuICBpZiAodXZpbmRleCA+IDIgJiYgdXZpbmRleCA8PSA1KSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIihNb2RlcmF0ZSlcIjtcbiAgfVxuICBpZiAodXZpbmRleCA+IDUgJiYgdXZpbmRleCA8PSA3KSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIihIaWdoKVwiO1xuICB9XG4gIGlmICh1dmluZGV4ID4gNyAmJiB1dmluZGV4IDw9IDEwKSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIihWZXJ5IEhpZ2gpXCI7XG4gIH1cbiAgaWYgKHV2aW5kZXggPiAxMCkge1xuICAgIGRlc2NyaXB0aW9uID0gXCIoRXh0cmVtZSlcIjtcbiAgfVxuXG4gIGxldCB1dkluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHV2SW5kZXguaW5uZXJUZXh0ID0gYFVWIEluZGV4OiAke3V2aW5kZXh9ICR7ZGVzY3JpcHRpb259YDtcblxuICB1dkluZGV4Q2FyZC5hcHBlbmRDaGlsZCh1dkljb24pO1xuICB1dkluZGV4Q2FyZC5hcHBlbmRDaGlsZCh1dkluZGV4KTtcblxuICByZXR1cm4gdXZJbmRleENhcmQ7XG59XG4iLCJpbXBvcnQgV2luZEljb24gZnJvbSBcIi4vd2luZC5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VXaW5kQ2FyZCh3aW5kKSB7XG4gIGxldCB3aW5kU3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5kU3RhdHMuY2xhc3NMaXN0LmFkZChcIndpbmRTdGF0c1wiKTtcbiAgbGV0IHdpbmRJY29uID0gbmV3IEltYWdlKCk7XG4gIHdpbmRJY29uLmFsdCA9IFwiV2luZCBpY29uXCI7XG4gIHdpbmRJY29uLnNyYyA9IFdpbmRJY29uO1xuICBsZXQgd2luZFN0YXRzU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2luZFN0YXRzU3BlZWQuaW5uZXJUZXh0ID0gYFdpbmQgU3BlZWQ6ICR7d2luZH0gbS9zYDtcbiAgd2luZFN0YXRzLmFwcGVuZENoaWxkKHdpbmRJY29uKTtcbiAgd2luZFN0YXRzLmFwcGVuZENoaWxkKHdpbmRTdGF0c1NwZWVkKTtcbiAgcmV0dXJuIHdpbmRTdGF0cztcbn1cbiIsImltcG9ydCBmYXZvcml0ZUljb24gZnJvbSBcIi4vZmF2LnN2Z1wiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNVbmZhdm9yaXRlIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZhdm9yaXRlT3B0aW9uKCkge1xuICBsZXQgZmF2b3JpdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYXZvcml0ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWZhdm9yaXRlXCIpO1xuICBsZXQgZmF2b3JpdGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBmYXZvcml0ZUltYWdlLmFsdCA9IFwiRmF2b3JpdGUgaWNvblwiO1xuICBmYXZvcml0ZUltYWdlLnNyYyA9IGZhdm9yaXRlSWNvbjtcbiAgZmF2b3JpdGVPcHRpb24uYXBwZW5kQ2hpbGQoZmF2b3JpdGVJbWFnZSk7XG5cbiAgZmF2b3JpdGVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbiAgICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gICAgY2l0aWVzLnB1c2goY2l0eS5pbm5lclRleHQpO1xuICAgIGxldCBjaXRpZXNTdHJpZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoY2l0aWVzKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNTdHJpZ2lmaWVkfWApO1xuICAgIGxldCBmYXZvcml0ZXNCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtYmFyXCIpO1xuICAgIGlmIChmYXZvcml0ZXNCYXJFbGVtZW50KSB7XG4gICAgICBmYXZvcml0ZXNCYXIucmVmcmVzaEZhdm9yaXRlc0JhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYXZvcml0ZXNCYXIubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgIH1cbiAgICBnZXRPcHRpb25zVW5mYXZvcml0ZSgpO1xuICB9KTtcblxuICByZXR1cm4gZmF2b3JpdGVPcHRpb247XG59XG4iLCJpbXBvcnQgcmVsb2FkSWNvbiBmcm9tIFwiLi9yZWxvYWQuc3ZnXCI7XG5pbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJlbG9hZE9wdGlvbigpIHtcbiAgbGV0IHJlbG9hZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCByZWxvYWRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICByZWxvYWRJbWFnZS5hbHQgPSBcIlJlbG9hZCBpY29uXCI7XG4gIHJlbG9hZEltYWdlLnNyYyA9IHJlbG9hZEljb247XG5cbiAgcmVsb2FkT3B0aW9uLmFwcGVuZENoaWxkKHJlbG9hZEltYWdlKTtcblxuICByZWxvYWRPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1yZWxvYWRcIik7XG5cbiAgcmVsb2FkT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgaWYgKGluZm8pIHtcbiAgICAgIGxldCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuICAgICAgbGV0IGNpdHlOYW1lID0gY2l0eS5pbm5lclRleHQ7XG4gICAgICBjbGVhbihcIi5yZXN1bHRcIik7XG4gICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbihjaXR5TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFuKFwiLnJlc3VsdFwiKTtcbiAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVsb2FkT3B0aW9uO1xufVxuIiwiaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiLi9zZXR0aW5ncy5zdmdcIjtcbmltcG9ydCBTZXR0aW5nc09wZW5JY29uIGZyb20gXCIuL3NldHRpbmdzLW9wZW4uc3ZnXCI7XG5pbXBvcnQgeyBtYWtlU2V0dGluZ3NCYXIgfSBmcm9tIFwiLi9tYWtlU2V0dGluZ3NCYXJcIjtcbmltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zVW5mYXZvcml0ZSB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXR0aW5nc09wdGlvbigpIHtcbiAgbGV0IHNldHRpbmdzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0dGluZ3NPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1zZXR0aW5nc1wiKTtcbiAgbGV0IHNldHRpbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc2V0dGluZ3NJbWFnZS5hbHQgPSBcIlNldHRpbmdzIGljb25cIjtcbiAgc2V0dGluZ3NJbWFnZS5zcmMgPSBTZXR0aW5nc0ljb247XG4gIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzSW1hZ2UpO1xuXG4gIHNldHRpbmdzT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2spID0+IHtcbiAgICBoYW5kbGVTZXR0aW5nT3B0aW9uQ2xpY2soY2xpY2spO1xuICB9KTtcblxuICByZXR1cm4gc2V0dGluZ3NPcHRpb247XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNldHRpbmdPcHRpb25DbGljayhjbGljaykge1xuICBjbGljay5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGxldCBmYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gIGxldCBzZXR0aW5nc09wZW5PcHRpb24gPSBtYWtlU2V0dGluZ3NPcGVuT3B0aW9uKCk7XG4gIGxldCBvcHRpb25zQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuICBvcHRpb25zQmFyLnJlbW92ZUNoaWxkKG9wdGlvbnNCYXIuZmlyc3RDaGlsZCk7XG4gIG9wdGlvbnNCYXIucHJlcGVuZChzZXR0aW5nc09wZW5PcHRpb24pO1xuICBsZXQgc2V0dGluZ3NCYXIgPSBtYWtlU2V0dGluZ3NCYXIoKTtcbiAgaWYgKGZhdkJhcikge1xuICAgIGhlYWRlci5pbnNlcnRCZWZvcmUoc2V0dGluZ3NCYXIsIGZhdkJhcik7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNldHRpbmdzQmFyKTtcbiAgfVxuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdXRPZlNldHRpbmdzQ2xpY2ssIHtcbiAgICBvbmNlOiB0cnVlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU91dE9mU2V0dGluZ3NDbGljaygpIHtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGxldCBzZXR0aW5nc0JhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzLWJhclwiKTtcbiAgaWYgKHNldHRpbmdzQmFyRWxlbWVudCkge1xuICAgIGxldCBzZXR0aW5nc09wdGlvbiA9IG1ha2VTZXR0aW5nc09wdGlvbigpO1xuICAgIGxldCBvcHRpb25zQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuICAgIG9wdGlvbnNCYXIucmVtb3ZlQ2hpbGQob3B0aW9uc0Jhci5maXJzdENoaWxkKTtcbiAgICBvcHRpb25zQmFyLnByZXBlbmQoc2V0dGluZ3NPcHRpb24pO1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChzZXR0aW5nc0JhckVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2V0dGluZ3NPcGVuT3B0aW9uKCkge1xuICBsZXQgc2V0dGluZ3NPcGVuT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0dGluZ3NPcGVuT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tc2V0dGluZ3Mtb3BlblwiKTtcbiAgbGV0IHNldHRpbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc2V0dGluZ3NJbWFnZS5hbHQgPSBcIlNldHRpbmdzIGljb25cIjtcbiAgc2V0dGluZ3NJbWFnZS5zcmMgPSBTZXR0aW5nc09wZW5JY29uO1xuICBzZXR0aW5nc09wZW5PcHRpb24uYXBwZW5kQ2hpbGQoc2V0dGluZ3NJbWFnZSk7XG5cbiAgc2V0dGluZ3NPcGVuT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2spID0+IHtcbiAgICBjbGljay5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgc2V0dGluZ3NPcHRpb24gPSBtYWtlU2V0dGluZ3NPcHRpb24oKTtcbiAgICBsZXQgb3B0aW9uc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc1wiKTtcbiAgICBvcHRpb25zQmFyLnJlbW92ZUNoaWxkKG9wdGlvbnNCYXIuZmlyc3RDaGlsZCk7XG4gICAgb3B0aW9uc0Jhci5wcmVwZW5kKHNldHRpbmdzT3B0aW9uKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBsZXQgc2V0dGluZ3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzLWJhclwiKTtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoc2V0dGluZ3NCYXIpO1xuICB9KTtcblxuICByZXR1cm4gc2V0dGluZ3NPcGVuT3B0aW9uO1xufVxuIiwiaW1wb3J0IEZhdnNJY29uIGZyb20gXCIuL2ZhdnMuc3ZnXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zRmF2TGlzdCB9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7IG1ha2VGYXZMaXN0IH0gZnJvbSBcIi4vbWFrZUZhdkxpc3RcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcbmltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zVW5mYXZvcml0ZSB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTaG93RmF2c09wdGlvbigpIHtcbiAgbGV0IGZhdnNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYXZzT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tZmF2c1wiKTtcbiAgbGV0IGZhdnNJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBmYXZzSW1hZ2UuYWx0ID0gXCJTaG93IGZhdm9yaXRlcyBpY29uXCI7XG4gIGZhdnNJbWFnZS5zcmMgPSBGYXZzSWNvbjtcbiAgZmF2c09wdGlvbi5hcHBlbmRDaGlsZChmYXZzSW1hZ2UpO1xuXG4gIGZhdnNPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICBtYWtlRmF2TGlzdCgpO1xuICB9KTtcblxuICByZXR1cm4gZmF2c09wdGlvbjtcbn1cbiIsImltcG9ydCBoYW5kbGVVc2VySW5wdXQgZnJvbSBcIi4vaGFuZGxlVXNlcklucHV0XCI7XG5pbXBvcnQgdGVtcGVyYXR1cmVJY29uIGZyb20gXCIuL3RoZXJtb21ldGVyLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgeyBtYWtlRmF2TGlzdCB9IGZyb20gXCIuL21ha2VGYXZMaXN0XCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVGVtcGVyYXR1cmVPcHRpb24oKSB7XG4gIGxldCB0ZW1wZXJhdHVyZU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGVtcEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdGVtcEljb24uYWx0ID0gXCJUZW1wZXJhdHVyZSBpY29uXCI7XG4gIHRlbXBJY29uLnNyYyA9IHRlbXBlcmF0dXJlSWNvbjtcblxuICBsZXQgbWV0cmljID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldHJpY1wiKSk7XG5cbiAgbGV0IGNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNlbHNpdXMuY2xhc3NMaXN0LmFkZChcImNlbHNpdXMtbGFiZWxcIik7XG4gIGNlbHNpdXMuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY2Vsc2l1c1wiKTtcbiAgbGV0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcImZhaHJlbmhlaXQtbGFiZWxcIik7XG4gIGZhaHJlbmhlaXQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZmFocmVuaGVpdFwiKTtcbiAgY2Vsc2l1cy5pbm5lclRleHQgPSBcIsKwQ1wiO1xuICBmYWhyZW5oZWl0LmlubmVyVGV4dCA9IFwiwrBGXCI7XG5cbiAgaWYgKG1ldHJpYykge1xuICAgIGNlbHNpdXMuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLW1ldHJpY1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1tZXRyaWNcIik7XG4gIH1cbiAgY2Vsc2l1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIFwidHJ1ZVwiKTtcbiAgICBsZXQgZGlzcGxheWluZ0NpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgaWYgKGRpc3BsYXlpbmdDaXR5KSB7XG4gICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhbihcIi5yZXN1bHRcIik7XG4gICAgICBtYWtlRmF2TGlzdCgpO1xuICAgIH1cbiAgfSk7XG4gIGNlbHNpdXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZXRyaWNcIik7XG5cbiAgaWYgKCFtZXRyaWMpIHtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1tZXRyaWNcIik7XG4gIH1cbiAgZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIFwiZmFsc2VcIik7XG4gICAgbGV0IGRpc3BsYXlpbmdDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgIGlmIChkaXNwbGF5aW5nQ2l0eSkge1xuICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYW4oXCIucmVzdWx0XCIpO1xuICAgICAgbWFrZUZhdkxpc3QoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBkaXZDZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGRpdkZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZDZWxzaXVzLmFwcGVuZENoaWxkKGNlbHNpdXMpO1xuICBkaXZGYWhyZW5oZWl0LmFwcGVuZENoaWxkKGZhaHJlbmhlaXQpO1xuXG4gIGxldCB0ZW1wSW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcElucHV0cy5hcHBlbmRDaGlsZChkaXZDZWxzaXVzKTtcbiAgdGVtcElucHV0cy5hcHBlbmRDaGlsZChkaXZGYWhyZW5oZWl0KTtcblxuICB0ZW1wZXJhdHVyZU9wdGlvbnMuYXBwZW5kQ2hpbGQodGVtcEljb24pO1xuICB0ZW1wZXJhdHVyZU9wdGlvbnMuYXBwZW5kQ2hpbGQodGVtcElucHV0cyk7XG5cbiAgdGVtcGVyYXR1cmVPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tdGVtcGVyYXR1cmVcIik7XG5cbiAgcmV0dXJuIHRlbXBlcmF0dXJlT3B0aW9ucztcbn1cbiIsImltcG9ydCBVbmZhdm9yaXRlSWNvbiBmcm9tIFwiLi91bmZhdi5zdmdcIjtcbmltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVuZmF2b3JpdGVPcHRpb24oKSB7XG4gIGxldCB1bmZhdm9yaXRlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5mYXZvcml0ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXVuZmF2b3JpdGVcIik7XG4gIGxldCB1bmZhdm9yaXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB1bmZhdm9yaXRlSWNvbi5hbHQgPSBcIlJlbW92ZSBmcm9tIGZhdm9yaXRlcyBpY29uXCI7XG4gIHVuZmF2b3JpdGVJY29uLnNyYyA9IFVuZmF2b3JpdGVJY29uO1xuXG4gIHVuZmF2b3JpdGVPcHRpb24uYXBwZW5kQ2hpbGQodW5mYXZvcml0ZUljb24pO1xuXG4gIHVuZmF2b3JpdGVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbiAgICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gICAgbGV0IGNpdGllc0ZpbHRlcmVkID0gY2l0aWVzLmZpbHRlcigoYykgPT4gYyAhPT0gY2l0eS5pbm5lclRleHQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIGAke0pTT04uc3RyaW5naWZ5KGNpdGllc0ZpbHRlcmVkKX1gKTtcbiAgICBmYXZvcml0ZXNCYXIucmVmcmVzaEZhdm9yaXRlc0JhcigpO1xuICAgIGdldE9wdGlvbnModHJ1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB1bmZhdm9yaXRlT3B0aW9uO1xufVxuIiwiaW1wb3J0IHsgbWFrZVRlbXBlcmF0dXJlT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uVGVtcGVyYXR1cmVcIjtcbmltcG9ydCB7IG1ha2VSZWxvYWRPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25SZWxvYWRcIjtcbmltcG9ydCB7IG1ha2VGYXZvcml0ZU9wdGlvbiB9IGZyb20gXCIuL29wdGlvbkZhdm9yaXRlXCI7XG5pbXBvcnQgeyBtYWtlVW5mYXZvcml0ZU9wdGlvbiB9IGZyb20gXCIuL29wdGlvblVuZmF2b3JpdGVcIjtcbmltcG9ydCB7IG1ha2VTaG93RmF2c09wdGlvbiB9IGZyb20gXCIuL29wdGlvblNob3dGYXZzXCI7XG5pbXBvcnQgeyBtYWtlU2V0dGluZ3NPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25TZXR0aW5nc1wiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5jb25zdCBvcHRpb25zRGl2ID0ge1xuICBvcHRpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIiksXG4gIGdldFRlbXBlcmF0dXJlT3B0aW9ucygpIHtcbiAgICBsZXQgdGVtcGVyYXR1cmVPcHRpb25zID0gbWFrZVRlbXBlcmF0dXJlT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlT3B0aW9ucyk7XG4gIH0sXG4gIGdldFJlbG9hZE9wdGlvbnMoKSB7XG4gICAgbGV0IHJlbG9hZE9wdGlvbiA9IG1ha2VSZWxvYWRPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQocmVsb2FkT3B0aW9uKTtcbiAgfSxcbiAgZ2V0RmF2b3JpdGVPcHRpb24oKSB7XG4gICAgbGV0IGZhdm9yaXRlT3B0aW9uID0gbWFrZUZhdm9yaXRlT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKGZhdm9yaXRlT3B0aW9uKTtcbiAgfSxcbiAgZ2V0VW5GYXZvcml0ZU9wdGlvbigpIHtcbiAgICBsZXQgdW5mYXZvcml0ZU9wdGlvbiA9IG1ha2VVbmZhdm9yaXRlT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKHVuZmF2b3JpdGVPcHRpb24pO1xuICB9LFxuICBnZXRTaG93RmF2c09wdGlvbigpIHtcbiAgICBsZXQgc2hvd0ZhdnNPcHRpb24gPSBtYWtlU2hvd0ZhdnNPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQoc2hvd0ZhdnNPcHRpb24pO1xuICB9LFxuICBnZXRTZXR0aW5nc09wdGlvbigpIHtcbiAgICBsZXQgc2V0dGluZ3NPcHRpb24gPSBtYWtlU2V0dGluZ3NPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQoc2V0dGluZ3NPcHRpb24pO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhhbGwpIHtcbiAgY2xlYW4ob3B0aW9uc0Rpdi5vcHRpb25zKTtcbiAgaWYgKGFsbCkge1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG9wdGlvbnNEaXYub3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwib3B0aW9ucy1jb21wYWN0XCIpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0UmVsb2FkT3B0aW9ucygpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRGYXZvcml0ZU9wdGlvbigpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRTaG93RmF2c09wdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zRGl2Lm9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShcIm9wdGlvbnMtY29tcGFjdFwiKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0U2V0dGluZ3NPcHRpb24oKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCk7XG4gICAgICBvcHRpb25zRGl2LmdldFJlbG9hZE9wdGlvbnMoKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0RmF2b3JpdGVPcHRpb24oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG4gICAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICAgIG9wdGlvbnNEaXYuZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc1VuZmF2b3JpdGUoKSB7XG4gIGNsZWFuKG9wdGlvbnNEaXYub3B0aW9ucyk7XG4gIG9wdGlvbnNEaXYub3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwib3B0aW9ucy1jb21wYWN0XCIpO1xuICBvcHRpb25zRGl2LmdldFNldHRpbmdzT3B0aW9uKCk7XG4gIG9wdGlvbnNEaXYuZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCk7XG4gIG9wdGlvbnNEaXYuZ2V0UmVsb2FkT3B0aW9ucygpO1xuICBvcHRpb25zRGl2LmdldFVuRmF2b3JpdGVPcHRpb24oKTtcbiAgb3B0aW9uc0Rpdi5nZXRTaG93RmF2c09wdGlvbigpO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zRmF2TGlzdCgpIHtcbiAgY2xlYW4ob3B0aW9uc0Rpdi5vcHRpb25zKTtcbiAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICBvcHRpb25zRGl2LmdldFJlbG9hZE9wdGlvbnMoKTtcbiAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG59XG5cbmV4cG9ydCB7IGdldE9wdGlvbnMsIGdldE9wdGlvbnNVbmZhdm9yaXRlLCBnZXRPcHRpb25zRmF2TGlzdCB9O1xuIiwiaW1wb3J0IEF1dG9SZWZyZXNoSWNvbiBmcm9tIFwiLi9yZWxvYWQtYXV0by5zdmdcIjtcbmltcG9ydCBoYW5kbGVVc2VySW5wdXQgZnJvbSBcIi4vaGFuZGxlVXNlcklucHV0XCI7XG5pbXBvcnQgeyBoYW5kbGVPdXRPZlNldHRpbmdzQ2xpY2sgfSBmcm9tIFwiLi9vcHRpb25TZXR0aW5nc1wiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUF1dG9SZWZyZXNoU2V0dGluZygpIHtcbiAgbGV0IGF1dG9SZWZTZXR0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBsZXQgYXV0b1JlZkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYXV0b1JlZkljb24uYWx0ID0gXCJBdXRvLXJlZnJlc2ggaWNvblwiO1xuICBhdXRvUmVmSWNvbi5zcmMgPSBBdXRvUmVmcmVzaEljb247XG5cbiAgbGV0IGF1dG9SZWZMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhdXRvUmVmTGFiZWwuaW5uZXJUZXh0ID0gXCJBdXRvLXJlZnJlc2g6IFwiO1xuXG4gIGxldCBhdXRvUmVmU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgYXV0b1JlZlNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LXJlZnJlc2hcIik7XG4gIGF1dG9SZWZTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoY2hhbmdlKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZyZXNoXCIsIEpTT04uc3RyaW5naWZ5KGNoYW5nZS50YXJnZXQudmFsdWUpKTtcbiAgICBhdXRvUmVmcmVzaFNldHVwLmhhbmRsZUF1dG9SZWZyZXNoKGNoYW5nZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCByZWZyZXNoU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1yZWZyZXNoXCIpO1xuICAgIGxldCBvcHRpb25zID0gcmVmcmVzaFNlbGVjdG9yLmNoaWxkTm9kZXM7XG4gICAgb3B0aW9ucy5mb3JFYWNoKChvKSA9PiB7XG4gICAgICBpZiAoby5nZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBvLnJlbW92ZUF0dHJpYnV0ZShcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG8uaW5uZXJUZXh0ID09IGNoYW5nZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgby5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgbGV0IG5vZGVzID0gW107XG5cbiAgbGV0IG5ldmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbmV2ZXIuaW5uZXJUZXh0ID0gXCJOZXZlclwiO1xuICBuZXZlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk5ldmVyXCIpO1xuICBub2Rlcy5wdXNoKG5ldmVyKTtcbiAgbGV0IG9uZU1pbnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9uZU1pbnV0ZS5pbm5lclRleHQgPSBcIkV2ZXJ5IG1pbnV0ZVwiO1xuICBvbmVNaW51dGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSBtaW51dGVcIik7XG4gIG5vZGVzLnB1c2gob25lTWludXRlKTtcbiAgbGV0IGZpdmVNaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZml2ZU1pbnV0ZXMuaW5uZXJUZXh0ID0gXCJFdmVyeSA1IG1pbnV0ZXNcIjtcbiAgZml2ZU1pbnV0ZXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSA1IG1pbnV0ZXNcIik7XG4gIG5vZGVzLnB1c2goZml2ZU1pbnV0ZXMpO1xuICBsZXQgdGVuTWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHRlbk1pbnV0ZXMuaW5uZXJUZXh0ID0gXCJFdmVyeSAxMCBtaW51dGVzXCI7XG4gIHRlbk1pbnV0ZXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSAxMCBtaW51dGVzXCIpO1xuICBub2Rlcy5wdXNoKHRlbk1pbnV0ZXMpO1xuICBsZXQgdGhpcnR5TWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHRoaXJ0eU1pbnV0ZXMuaW5uZXJUZXh0ID0gXCJFdmVyeSAzMCBtaW51dGVzXCI7XG4gIHRoaXJ0eU1pbnV0ZXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSAzMCBtaW51dGVzXCIpO1xuICBub2Rlcy5wdXNoKHRoaXJ0eU1pbnV0ZXMpO1xuICBsZXQgb25lSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9uZUhvdXIuaW5uZXJUZXh0ID0gXCJFdmVyeSBob3VyXCI7XG4gIG9uZUhvdXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSBob3VyXCIpO1xuICBub2Rlcy5wdXNoKG9uZUhvdXIpO1xuICBsZXQgdHdvSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICB0d29Ib3Vycy5pbm5lclRleHQgPSBcIkV2ZXJ5IDIgaG91cnNcIjtcbiAgdHdvSG91cnMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSAyIGhvdXJzXCIpO1xuICBub2Rlcy5wdXNoKHR3b0hvdXJzKTtcbiAgbGV0IHR3ZWx2ZUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgdHdlbHZlSG91cnMuaW5uZXJUZXh0ID0gXCJFdmVyeSAxMiBob3Vyc1wiO1xuICB0d2VsdmVIb3Vycy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IDEyIGhvdXJzXCIpO1xuICBub2Rlcy5wdXNoKHR3ZWx2ZUhvdXJzKTtcbiAgbGV0IG9uZURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9uZURheS5pbm5lclRleHQgPSBcIkV2ZXJ5IDI0IGhvdXJzXCI7XG4gIG9uZURheS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IDI0IGhvdXJzXCIpO1xuICBub2Rlcy5wdXNoKG9uZURheSk7XG5cbiAgbm9kZXMuZm9yRWFjaCgobikgPT4ge1xuICAgIGlmIChuLnZhbHVlID09IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZyZXNoXCIpKSkge1xuICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQobmV2ZXIpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKG9uZU1pbnV0ZSk7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQoZml2ZU1pbnV0ZXMpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKHRlbk1pbnV0ZXMpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKHRoaXJ0eU1pbnV0ZXMpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKG9uZUhvdXIpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKHR3b0hvdXJzKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZCh0d2VsdmVIb3Vycyk7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQob25lRGF5KTtcblxuICBhdXRvUmVmU2V0dGluZy5hcHBlbmRDaGlsZChhdXRvUmVmSWNvbik7XG4gIGF1dG9SZWZTZXR0aW5nLmFwcGVuZENoaWxkKGF1dG9SZWZMYWJlbCk7XG4gIGF1dG9SZWZTZXR0aW5nLmFwcGVuZENoaWxkKGF1dG9SZWZTZWxlY3QpO1xuXG4gIHJldHVybiBhdXRvUmVmU2V0dGluZztcbn1cblxuY29uc3QgYXV0b1JlZnJlc2hTZXR1cCA9IHtcbiAgdGltZW91dElEOiBudWxsLFxuICBhdXRvOiBmYWxzZSxcbiAgZGVsYXk6IDYwMDAwLFxuICBoYW5kbGVBdXRvUmVmcmVzaChhdXRvUmVmcmVzaE1vZGUpIHtcbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgbWludXRlXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMDtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IDUgbWludXRlc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiA1O1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgMTAgbWludXRlc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiAxMDtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IDMwIG1pbnV0ZXNcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogMzA7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSBob3VyXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMCAqIDYwO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgMiBob3Vyc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiA2MCAqIDI7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSAxMiBob3Vyc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiA2MCAqIDEyO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgMjQgaG91cnNcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogNjAgKiAyNDtcbiAgICB9XG4gICAgdGhpcy50aW1lb3V0SUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaGJhciA+IGlucHV0XCIpO1xuICAgICAgc2VhcmNoYmFyLnZhbHVlID0gXCJcIjtcbiAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgfSwgdGhpcy5kZWxheSk7XG4gICAgdGhpcy5hdXRvID0gdHJ1ZTtcbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiTmV2ZXJcIikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElEKTtcbiAgICAgIHRoaXMudGltZW91dElEID0gbnVsbDtcbiAgICAgIHRoaXMuYXV0byA9IGZhbHNlO1xuICAgIH1cbiAgICBhdXRvUmVmcmVzaCgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gYXV0b1JlZnJlc2goKSB7XG4gIGlmIChhdXRvUmVmcmVzaFNldHVwLnRpbWVvdXRJRCkge1xuICAgIGNsZWFyVGltZW91dChhdXRvUmVmcmVzaFNldHVwLnRpbWVvdXRJRCk7XG4gICAgYXV0b1JlZnJlc2hTZXR1cC50aW1lb3V0SUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChhdXRvUmVmcmVzaFNldHVwLmF1dG8pIHtcbiAgICAgICAgY2xlYW4oXCIucmVzdWx0XCIpO1xuICAgICAgICBoYW5kbGVPdXRPZlNldHRpbmdzQ2xpY2soKTtcbiAgICAgICAgbGV0IHNlYXJjaGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gICAgICAgIHNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgICAgIGF1dG9SZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfSwgYXV0b1JlZnJlc2hTZXR1cC5kZWxheSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0b1JlZnJlc2hTZXR1cDtcbiIsImltcG9ydCBTb3J0SWNvbiBmcm9tIFwiLi9zb3J0LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNvcnRTZXR0aW5nKCkge1xuICBsZXQgc29ydFNldHRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCBzb3J0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzb3J0SWNvbi5hbHQgPSBcIlNvcnQgc2V0dGluZyBpY29uXCI7XG4gIHNvcnRJY29uLnNyYyA9IFNvcnRJY29uO1xuXG4gIGxldCBzb3J0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc29ydExhYmVsLmlubmVyVGV4dCA9IFwiU29ydCBGYXZvcml0ZXMgYnk6IFwiO1xuXG4gIGxldCBzb3J0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICBsZXQgbmFtZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICBuYW1lR3JvdXAuc2V0QXR0cmlidXRlKFwibGFiZWxcIiwgXCJBbHBoYWJldGljYWwgT3JkZXJcIik7XG4gIGxldCBhc2NlbmRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgYXNjZW5kaW5nTmFtZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImFzY2VuZGluZ05hbWVcIik7XG4gIGFzY2VuZGluZ05hbWUuaW5uZXJUZXh0ID0gXCJBIHRvIFpcIjtcbiAgbGV0IGRlc2NlbmRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZGVzY2VuZGluZ05hbWUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkZXNjZW5kaW5nTmFtZVwiKTtcbiAgZGVzY2VuZGluZ05hbWUuaW5uZXJUZXh0ID0gXCJaIHRvIEFcIjtcbiAgbmFtZUdyb3VwLmFwcGVuZENoaWxkKGFzY2VuZGluZ05hbWUpO1xuICBuYW1lR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY2VuZGluZ05hbWUpO1xuXG4gIGxldCB0ZW1wR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7XG4gIHRlbXBHcm91cC5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLCBcIkFjdHVhbCBUZW1wZXJhdHVyZVwiKTtcbiAgbGV0IGFzY2VuZGluZ1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBhc2NlbmRpbmdUZW1wLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiYXNjZW5kaW5nTmFtZVwiKTtcbiAgYXNjZW5kaW5nVGVtcC5pbm5lclRleHQgPSBcIkNvbGRlc3QgdG8gSG90dGVzdFwiO1xuICBsZXQgZGVzY2VuZGluZ1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBkZXNjZW5kaW5nVGVtcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRlc2NlbmRpbmdUZW1wXCIpO1xuICBkZXNjZW5kaW5nVGVtcC5pbm5lclRleHQgPSBcIkhvdHRlc3QgdG8gQ29sZGVzdFwiO1xuICB0ZW1wR3JvdXAuYXBwZW5kQ2hpbGQoYXNjZW5kaW5nVGVtcCk7XG4gIHRlbXBHcm91cC5hcHBlbmRDaGlsZChkZXNjZW5kaW5nVGVtcCk7XG5cbiAgbGV0IHRlbXBGZWVsc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICB0ZW1wRmVlbHNHcm91cC5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLCBcIkFwcGFyZW50IFRlbXBlcmF0dXJlXCIpO1xuICBsZXQgYXNjZW5kaW5nVGVtcEZlZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgYXNjZW5kaW5nVGVtcEZlZWxzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiYXNjZW5kaW5nVGVtcEZlZWxzXCIpO1xuICBhc2NlbmRpbmdUZW1wRmVlbHMuaW5uZXJUZXh0ID0gXCJDb2xkZXN0IHRvIEhvdHRlc3RcIjtcbiAgbGV0IGRlc2NlbmRpbmdUZW1wRmVlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBkZXNjZW5kaW5nVGVtcEZlZWxzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZGVzY2VuZGluZ1RlbXBGZWVsc1wiKTtcbiAgZGVzY2VuZGluZ1RlbXBGZWVscy5pbm5lclRleHQgPSBcIkhvdHRlc3QgdG8gQ29sZGVzdFwiO1xuICB0ZW1wRmVlbHNHcm91cC5hcHBlbmRDaGlsZChhc2NlbmRpbmdUZW1wRmVlbHMpO1xuICB0ZW1wRmVlbHNHcm91cC5hcHBlbmRDaGlsZChkZXNjZW5kaW5nVGVtcEZlZWxzKTtcblxuICBzb3J0U2VsZWN0LmFwcGVuZENoaWxkKG5hbWVHcm91cCk7XG4gIHNvcnRTZWxlY3QuYXBwZW5kQ2hpbGQodGVtcEZlZWxzR3JvdXApO1xuICBzb3J0U2VsZWN0LmFwcGVuZENoaWxkKHRlbXBHcm91cCk7XG5cbiAgc29ydFNldHRpbmcuYXBwZW5kQ2hpbGQoc29ydEljb24pO1xuICBzb3J0U2V0dGluZy5hcHBlbmRDaGlsZChzb3J0TGFiZWwpO1xuICBzb3J0U2V0dGluZy5hcHBlbmRDaGlsZChzb3J0U2VsZWN0KTtcblxuICByZXR1cm4gc29ydFNldHRpbmc7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbWFrZUJhc2ljc0NhcmQgfSBmcm9tIFwiLi9tYWtlQmFzaWNzQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZU92ZXJ2aWV3Q2FyZCB9IGZyb20gXCIuL21ha2VPdmVydmlld0NhcmRcIjtcbmltcG9ydCB7IG1ha2VTdW5DYXJkIH0gZnJvbSBcIi4vbWFrZVN1bkNhcmRcIjtcbmltcG9ydCB7IG1ha2VDbG91ZHNDYXJkIH0gZnJvbSBcIi4vbWFrZUNsb3Vkc0NhcmRcIjtcbmltcG9ydCB7IG1ha2VXaW5kQ2FyZCB9IGZyb20gXCIuL21ha2VXaW5kQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZUdpZkNhcmQgfSBmcm9tIFwiLi9tYWtlR2lmQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZVNub3dDYXJkIH0gZnJvbSBcIi4vbWFrZVNub3dDYXJkXCI7XG5pbXBvcnQgeyBtYWtlUmFpbkNhcmQgfSBmcm9tIFwiLi9tYWtlUmFpbkNhcmRcIjtcbmltcG9ydCB7IG1ha2VVVkluZGV4Q2FyZCB9IGZyb20gXCIuL21ha2VVVkluZGV4Q2FyZFwiO1xuaW1wb3J0IHsgbWFrZU1vb25QaGFzZUNhcmQgfSBmcm9tIFwiLi9tYWtlTW9vblBoYXNlQ2FyZFwiO1xuXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKTtcblxuZnVuY3Rpb24gc2hvd09uQ2FyZChcbiAgdW5pdHMsXG4gIGNpdHksXG4gIGNvdW50cnksXG4gIHRpbWUsXG4gIGRhdGUsXG4gIHRlbXAsXG4gIHRlbXBGZWVscyxcbiAgd2VhdGhlclxuKSB7XG4gIGxldCB0ZW1wVW5pdCA9IFwiXCI7XG4gIHVuaXRzID09IFwibWV0cmljXCIgPyAodGVtcFVuaXQgPSBcIsKwQ1wiKSA6ICh0ZW1wVW5pdCA9IFwiwrBGXCIpO1xuXG4gIGxldCBiYXNpY3NDYXJkID0gbWFrZUJhc2ljc0NhcmQoXG4gICAgY2l0eSxcbiAgICBjb3VudHJ5LFxuICAgIHRpbWUsXG4gICAgZGF0ZSxcbiAgICB0ZW1wLFxuICAgIHRlbXBGZWVscyxcbiAgICB0ZW1wVW5pdCxcbiAgICB0cnVlXG4gICk7XG5cbiAgcmV0dXJuIGJhc2ljc0NhcmQ7XG59XG5cbmZ1bmN0aW9uIHNob3dPbkluZm8oXG4gIHVuaXRzLFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB0aW1lLFxuICBkYXRlLFxuICB0ZW1wLFxuICB0ZW1wRmVlbHMsXG4gIHdlYXRoZXIsXG4gIHJhaW5Wb2wxaCxcbiAgcmFpblZvbDNoLFxuICBzbm93Vm9sMWgsXG4gIHNub3dWb2wzaCxcbiAgc3VucmlzZSxcbiAgc3Vuc2V0LFxuICBjbG91ZGluZXNzLFxuICB3aW5kLFxuICBnaWZTcmMsXG4gIG1vb25waGFzZSxcbiAgdXZpbmRleFxuKSB7XG4gIGNsZWFuKHJlc3VsdCk7XG4gIGxldCB0ZW1wVW5pdCA9IFwiXCI7XG4gIHVuaXRzID09IFwibWV0cmljXCIgPyAodGVtcFVuaXQgPSBcIsKwQ1wiKSA6ICh0ZW1wVW5pdCA9IFwiwrBGXCIpO1xuXG4gIGxldCBiYXNpY3NDYXJkID0gbWFrZUJhc2ljc0NhcmQoXG4gICAgY2l0eSxcbiAgICBjb3VudHJ5LFxuICAgIHRpbWUsXG4gICAgZGF0ZSxcbiAgICB0ZW1wLFxuICAgIHRlbXBGZWVscyxcbiAgICB0ZW1wVW5pdFxuICApO1xuICBsZXQgb3ZlcnZpZXdDYXJkID0gbWFrZU92ZXJ2aWV3Q2FyZCh3ZWF0aGVyKTtcbiAgbGV0IHN1bkNhcmQgPSBtYWtlU3VuQ2FyZChzdW5yaXNlLCBzdW5zZXQpO1xuICBsZXQgY2xvdWRzQ2FyZCA9IG1ha2VDbG91ZHNDYXJkKGNsb3VkaW5lc3MpO1xuICBsZXQgd2luZENhcmQgPSBtYWtlV2luZENhcmQod2luZCk7XG4gIGxldCBnaWZDYXJkID0gbWFrZUdpZkNhcmQoZ2lmU3JjKTtcbiAgbGV0IHNub3dDYXJkID0gbWFrZVNub3dDYXJkKHNub3dWb2wxaCwgc25vd1ZvbDNoKTtcbiAgbGV0IHJhaW5DYXJkID0gbWFrZVJhaW5DYXJkKHJhaW5Wb2wxaCwgcmFpblZvbDNoKTtcblxuICBsZXQgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZHMtY29udGFpbmVyXCIpO1xuXG4gIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuICBpbmZvLmFwcGVuZENoaWxkKGJhc2ljc0NhcmQpO1xuICBpbmZvLmFwcGVuZENoaWxkKG92ZXJ2aWV3Q2FyZCk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoZ2lmQ2FyZCk7XG4gIGlmIChzbm93Vm9sMWggfHwgc25vd1ZvbDNoKSB7XG4gICAgaW5mby5hcHBlbmRDaGlsZChzbm93Q2FyZCk7XG4gIH1cbiAgaWYgKHJhaW5Wb2wxaCB8fCByYWluVm9sM2gpIHtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHJhaW5DYXJkKTtcbiAgfVxuICBpZiAodXZpbmRleCA+IDApIHtcbiAgICBsZXQgdXZDYXJkID0gbWFrZVVWSW5kZXhDYXJkKHV2aW5kZXgpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQodXZDYXJkKTtcbiAgfVxuICBpZiAodXZpbmRleCA9PSAwKSB7XG4gICAgbGV0IG1vb25QaGFzZUNhcmQgPSBtYWtlTW9vblBoYXNlQ2FyZChtb29ucGhhc2UpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQobW9vblBoYXNlQ2FyZCk7XG4gIH1cbiAgaW5mby5hcHBlbmRDaGlsZChjbG91ZHNDYXJkKTtcbiAgaW5mby5hcHBlbmRDaGlsZCh3aW5kQ2FyZCk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoc3VuQ2FyZCk7XG5cbiAgcmVzdWx0LmFwcGVuZENoaWxkKGluZm8pO1xufVxuXG5mdW5jdGlvbiBjbGVhbihwYXJlbnQpIHtcbiAgaWYgKHR5cGVvZiBwYXJlbnQgPT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICB3aGlsZSAocGFyZW50RWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50RWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBzaG93T25JbmZvLCBzaG93T25DYXJkLCBjbGVhbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBtYWtlU2VhcmNoQmFyIH0gZnJvbSBcIi4vbWFrZVNlYXJjaEJhclwiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCBhdXRvUmVmcmVzaFNldHVwIGZyb20gXCIuL3NldHRpbmdBdXRvUmVmcmVzaFwiO1xuXG5tYWtlU2VhcmNoQmFyKCk7XG5cbmlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpIHtcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSkubGVuZ3RoID4gMCkge1xuICAgICAgZmF2b3JpdGVzQmFyLm1ha2VGYXZvcml0ZXNCYXIoKTtcbiAgICAgIG1ha2VGYXZMaXN0KCk7XG4gICAgfVxuICB9XG4gIGlmIChcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikgJiZcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikgIT09IFwiTmV2ZXJcIlxuICApIHtcbiAgICBhdXRvUmVmcmVzaFNldHVwLmhhbmRsZUF1dG9SZWZyZXNoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmcmVzaFwiKSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNpdGllc0FycmF5ID0gW107XG4gICAgbGV0IG1ldHJpYyA9IHRydWU7XG4gICAgbGV0IGNpdGllc0FycmF5SlNPTiA9IEpTT04uc3RyaW5naWZ5KGNpdGllc0FycmF5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNBcnJheUpTT059YCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRyaWNcIiwgYCR7bWV0cmljfWApO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmcmVzaFwiLCBcIk5ldmVyXCIpO1xuICB9XG59IGVsc2Uge1xuICBsZXQgY2l0aWVzQXJyYXkgPSBbXTtcbiAgbGV0IG1ldHJpYyA9IHRydWU7XG4gIGxldCBjaXRpZXNBcnJheUpTT04gPSBKU09OLnN0cmluZ2lmeShjaXRpZXNBcnJheSk7XG4gIGxldCByZWZyZXNoID0gXCJOZXZlclwiO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNBcnJheUpTT059YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIGAke21ldHJpY31gKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZyZXNoXCIsIGAke3JlZnJlc2h9YCk7XG59XG5cbmdldE9wdGlvbnMoZmFsc2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
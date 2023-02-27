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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#hidden {\n  display: none;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 36vw;\n  margin-left: 4vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  padding-left: 2vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options-compact {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-settings img,\n.option-settings-open img {\n  height: auto;\n  width: 38px;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 45px;\n}\n\n.option-temperature label {\n  font-size: 1.1rem;\n}\n\n.selected-metric {\n  font-weight: bold;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload img {\n  width: auto;\n  height: 79%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 77%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.settings-bar {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  height: 5vh;\n}\n\n.settings-bar select {\n  width: 14vw;\n  margin-left: 1vw;\n}\n\n.settings-bar div {\n  display: flex;\n  align-items: center;\n}\n\n.settings-bar > div:first-child img {\n  height: auto;\n  width: 25px;\n}\n\n.settings-bar > div:nth-child(2) img {\n  height: auto;\n  width: 35px;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow-x: auto;\n  overflow-y: clip;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar,\n.settings-bar,\n.uv-index-card,\n.moon-phase-card {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 2.1fr 1fr;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-left: 2vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 1.7fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.7rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > span {\n  font-size: 1.1rem;\n  white-space: nowrap;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.2rem;\n  justify-self: start;\n  white-space: nowrap;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: start;\n  font-size: 1.2rem;\n  margin-left: 4vw;\n}\n\n.weather-gif {\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats,\n.uv-index-card,\n.moon-phase-card {\n  display: grid;\n  grid-template-columns: 1fr 3.8fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img {\n  height: auto;\n  width: 60px;\n}\n\n.uv-index-card img {\n  height: auto;\n  width: 70px;\n  margin-left: -1vw;\n}\n\n.moon-phase-card img {\n  height: auto;\n  width: 55px;\n  margin-left: 1vw;\n}\n\n.moon-phase-card {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.cloudStats p,\n.windStats p,\n.uv-index-card p,\n.moon-phase-card p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#hidden {\n  display: none;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 36vw;\n  margin-left: 4vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  padding-left: 2vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options-compact {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-settings img,\n.option-settings-open img {\n  height: auto;\n  width: 38px;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 45px;\n}\n\n.option-temperature label {\n  font-size: 1.1rem;\n}\n\n.selected-metric {\n  font-weight: bold;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload img {\n  width: auto;\n  height: 79%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 77%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.settings-bar {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  height: 5vh;\n}\n\n.settings-bar select {\n  width: 14vw;\n  margin-left: 1vw;\n}\n\n.settings-bar div {\n  display: flex;\n  align-items: center;\n}\n\n.settings-bar > div:first-child img {\n  height: auto;\n  width: 25px;\n}\n\n.settings-bar > div:nth-child(2) img {\n  height: auto;\n  width: 35px;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow-x: auto;\n  overflow-y: clip;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar,\n.settings-bar,\n.uv-index-card,\n.moon-phase-card {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 2.1fr 1fr;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-left: 2vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 1.7fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.7rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > span {\n  font-size: 1.1rem;\n  white-space: nowrap;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.2rem;\n  justify-self: start;\n  white-space: nowrap;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: start;\n  font-size: 1.2rem;\n  margin-left: 4vw;\n}\n\n.weather-gif {\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats,\n.uv-index-card,\n.moon-phase-card {\n  display: grid;\n  grid-template-columns: 1fr 3.8fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img {\n  height: auto;\n  width: 60px;\n}\n\n.uv-index-card img {\n  height: auto;\n  width: 70px;\n  margin-left: -1vw;\n}\n\n.moon-phase-card img {\n  height: auto;\n  width: 55px;\n  margin-left: 1vw;\n}\n\n.moon-phase-card {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.cloudStats p,\n.windStats p,\n.uv-index-card p,\n.moon-phase-card p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
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

async function getWeatherGif(
  weather,
  timeAtCity,
  sunriseDate,
  sunsetDate,
  units,
  tempFeelsRounded,
  moonphase
) {
  let temperature;
  if (units == "metric") {
    if (tempFeelsRounded < -10) {
      temperature = "freezing";
    }
  }
  if (units == "imperial") {
    if (tempFeelsRounded < 14) {
      temperature = "freezing";
    }
  }

  let id = "uymKgqrJ9Or60";
  //NIGHTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  if (timeAtCity - sunsetDate > 0.5 || timeAtCity - sunriseDate < 0) {
    if (weather.match(/rain/)) {
      if (
        weather.match(/\D+(?=\s)/)[0] == "light" ||
        weather.match(/\D+(?=\s)/)[0] == "drizzle"
      ) {
        id = "xT9GEIc1nQ7bVQQ54Q";
      }
      if (weather.match(/thunderstorm/)) {
        id = "3osxYzIQRqN4DOEddC";
      }
      if (weather.match(/moderate/)) {
        id = "5torEEM8QnR95Cqg11";
      }
      if (weather.match(/heavy/)) {
        id = "l0MYAfxbg3fhqn1Ru";
      } else {
        id = "5torEEM8QnR95Cqg11";
      }
    }
    if (weather.match(/clouds/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "overcast") {
        id = "2fC74jNn5SPvO";
      }
      if (
        weather.match(/\D+(?=\s)/)[0] == "few" ||
        weather.match(/\D+(?=\s)/)[0] == "scattered"
      ) {
        if (moonphase == 0.5) {
          id = "nV5l2SFsU93ckaWlyn";
        } else {
          if (weather.match(/\D+(?=\s)/)[0] == "scattered") {
            id = "wwjEPjqcuPwvS";
          }
          if (weather.match(/\D+(?=\s)/)[0] == "few") {
            id = "wwjEPjqcuPwvS";
          }
        }
      }
      if (weather.match(/\D+(?=\s)/)[0] == "broken") {
        id = "13QslXgKOQzmhy";
      }
    }
    if (weather.match(/snow/)) {
      if (temperature == "freezing") {
        id = "s4Bi420mMDRBK";
      } else {
        if (weather.match(/\D+(?=\s)/)) {
          if (weather.match(/\D+(?=\s)/)[0] == "light") {
            if (weather.match(/shower/)) {
              id = "ONLoRRAHQh5kY";
            } else {
              id = "3ohc11DpNMf7qnqxR6";
            }
          }
        } else {
          id = "bGaOdqeqYQKc0";
        }
      }
    }
    if (weather.match(/haze/)) {
      id = "3sJQdC0fXJLyWOs4WM";
    }
    if (weather.match(/mist/)) {
      id = "3o72F65dJl7Z0PtdjG";
    }
    if (weather.match(/clear/)) {
      if (moonphase == 0.5) {
        id = "aN9GqoR7OD3nq";
      }
      if (moonphase > 0 && moonphase < 0.25) {
        id = "9ukPOCS9EOEta";
      }
      if (moonphase > 0.75 && moonphase <= 1) {
        id = "9ukPOCS9EOEta";
      } else {
        id = "m5oQabBdoOye4";
      }
    }
    if (weather.match(/fog/)) {
      id = "dz6Nrk35xWP3q";
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
    if (weather.match(/thunderstorm/)) {
      id = "VJAuhRegmbXSAaffFR";
    }
    if (weather.match(/dust/)) {
      id = "l4pT0NtPSMV3pw6Lm";
    }
  }

  //DAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
  if (timeAtCity > sunriseDate && timeAtCity < sunsetDate) {
    if (weather.match(/drizzle/)) {
      id = "xT9GEOg09OuResnZ6g";
    }
    if (weather.match(/rain/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "drizzle") {
        id = "l0IrIkq7Q3iRII0hy";
      }
      if (weather.match(/thunderstorm/)) {
        id = "3osxYzIQRqN4DOEddC";
      }
      if (weather.match(/light/)) {
        console.log("I should work as light");
        id = "xT9GEOg09OuResnZ6g";
      }
      if (weather.match(/moderate/)) {
        id = "W0c3xcZ3F1d0EYYb0f";
      }
      if (weather.match(/heavy/)) {
        id = "XgYoTdgj5NiU78prfm";
      } else {
        id = "W0c3xcZ3F1d0EYYb0f";
      }
    }
    if (weather.match(/clouds/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "overcast") {
        id = "dWIau1ZRyIj3j6YEaL";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "few") {
        id = "mno6BJfy8USic";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "scattered") {
        id = "uOuiK4F5zZkZ2";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "broken") {
        id = "63WsNg9DAhRkY";
      }
    }
    if (weather.match(/snow/)) {
      if (temperature == "freezing") {
        id = "s4Bi420mMDRBK";
      } else {
        if (weather.match(/\D+(?=\s)/)) {
          if (weather.match(/\D+(?=\s)/)[0] == "light") {
            if (weather.match(/shower/)) {
              id = "26xBwFcBGPLNfGbkY";
            } else {
              id = "5qFE91OmehdRq0sL5a";
            }
          }
        } else {
          id = "3oriNScTbEzEVoR1Is";
        }
      }
    }
    if (weather.match(/haze/)) {
      id = "r2OMuTCFo0rv2rgAL5";
    }
    if (weather.match(/mist/)) {
      id = "oVaigqUhPvDglQ0uWJ";
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
    if (weather.match(/thunderstorm/)) {
      id = "3osxYzIQRqN4DOEddC";
    }
    if (weather.match(/dust/)) {
      id = "tqtZDj5BqC0CY";
    }
  }

  //SUNSETTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  if (
    timeAtCity < sunsetDate &&
    (sunsetDate - timeAtCity) / (60 * 1000 * 60) < 0.5
  ) {
    console.log("Sunset");
    if (weather.match(/mist/)) {
      id = "3o72F65dJl7Z0PtdjG";
    }
    if (weather.match(/clouds/)) {
      if (weather.match(/\D+(?=\s)/)[0] == "overcast") {
        id = "Yhg9l8kXuq94Q";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "few") {
        id = "WzLDljBpplUvm";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "scattered") {
        id = "63WsNg9DAhRkY";
      }
      if (weather.match(/\D+(?=\s)/)[0] == "broken") {
        id = "49VB0PHxR5Vsc";
      }
    }
    if (weather.match(/clear/)) {
      id = "ZZIEtQHmiTNwuxTOdt";
    }
    if (weather.match(/thunderstorm/)) {
      id = "Y4JPYsrJEk454pNbts";
    }
    if (weather.match(/fog/)) {
      id = "xT8qBj3Oxl9kuQKgOk";
    }
    if (weather.match(/dust/)) {
      id = "tqtZDj5BqC0CY";
    }
    if (weather.match(/rain/)) {
      if (
        weather.match(/\D+(?=\s)/)[0] == "light" ||
        weather.match(/\D+(?=\s)/)[0] == "drizzle"
      ) {
        id = "xT9GEIc1nQ7bVQQ54Q";
      }
      if (weather.match(/thunderstorm/)) {
        id = "3osxYzIQRqN4DOEddC";
      }
      if (weather.match(/moderate/)) {
        id = "5torEEM8QnR95Cqg11";
      }
      if (weather.match(/heavy/)) {
        id = "TVpeXDi8xTlyo";
      } else {
        id = "5torEEM8QnR95Cqg11";
      }
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

    let sunriseDate = new Date(
      apiPromiseResolved.sys["sunrise"] * 1000 +
        apiPromiseResolved.timezone * 1000 +
        offset
    );

    let sunsetDate = new Date(
      apiPromiseResolved.sys["sunset"] * 1000 +
        apiPromiseResolved.timezone * 1000 +
        offset
    );

    try {
      gifSrc = await (0,_gifAPI__WEBPACK_IMPORTED_MODULE_3__.getWeatherGif)(
        weather,
        dateAtCity,
        sunriseDate,
        sunsetDate,
        units,
        tempFeelsRounded,
        moonphase
      );
    } catch (error) {
      console.log("Error while fetching weather gif: ", error);
    }

    let day = false;
    if (dateAtCity > sunriseDate && dateAtCity < sunsetDate) {
      day = true;
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
      uvindex,
      day
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
  let basicsDate = document.createElement("span");
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
    basics.addEventListener("click", () => {
      let searchbar = document.querySelector(".searchbar > input");
      searchbar.value = "";
      _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon(city);
    });
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
    phaseName = "Waxing Gibbous";
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
  description.innerText = `${phaseName}`;

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
    description = "(low)";
  }
  if (uvindex > 2 && uvindex <= 5) {
    description = "(moderate)";
  }
  if (uvindex > 5 && uvindex <= 7) {
    description = "(high)";
  }
  if (uvindex > 7 && uvindex <= 10) {
    description = "(very high)";
  }
  if (uvindex > 10) {
    description = "(extreme)";
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
/* harmony export */   "handleSortAction": () => (/* binding */ handleSortAction),
/* harmony export */   "makeFavoriteOption": () => (/* binding */ makeFavoriteOption)
/* harmony export */ });
/* harmony import */ var _fav_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fav.svg */ "./src/fav.svg");
/* harmony import */ var _favoritesBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favoritesBar */ "./src/favoritesBar.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./src/options.js");
/* harmony import */ var _settingSort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingSort */ "./src/settingSort.js");






function makeFavoriteOption() {
  let favoriteOption = document.createElement("div");
  favoriteOption.classList.add("option-favorite");
  let favoriteImage = new Image();
  favoriteImage.alt = "Favorite icon";
  favoriteImage.src = _fav_svg__WEBPACK_IMPORTED_MODULE_0__;
  favoriteOption.appendChild(favoriteImage);

  favoriteOption.addEventListener("click", () => {
    let city = document.querySelector(".city");
    handleSortAction(city);
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

function handleSortAction(city) {
  let cities = JSON.parse(localStorage.getItem("cities"));
  if (city) {
    cities.push(city.innerText);
  }
  if (cities.length > 0) {
    let citiesSorted;
    if (JSON.parse(localStorage.getItem("sort")) == "atoz") {
      citiesSorted = (0,_settingSort__WEBPACK_IMPORTED_MODULE_3__.sortAtoZ)(cities);
    }
    if (JSON.parse(localStorage.getItem("sort")) == "ztoa") {
      citiesSorted = (0,_settingSort__WEBPACK_IMPORTED_MODULE_3__.sortZtoA)(cities);
    }
    let citiesStrigified = JSON.stringify(citiesSorted);
    localStorage.setItem("cities", `${citiesStrigified}`);
    let info = document.querySelector(".info");
    if (info) {
      _favoritesBar__WEBPACK_IMPORTED_MODULE_1__["default"].refreshFavoritesBar();
    }
  }
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
    if (JSON.stringify(n.value) == localStorage.getItem("refresh")) {
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
    if (autoRefreshMode !== "Never") {
      this.timeoutID = setTimeout(() => {
        let searchbar = document.querySelector(".searchbar > input");
        searchbar.value = "";
        _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon();
      }, this.delay);
    }
    if (autoRefreshMode == "Never") {
      clearTimeout(this.timeoutID);
      this.timeoutID = null;
    }
    autoRefresh();
  },
};

function autoRefresh() {
  if (autoRefreshSetup.timeoutID) {
    clearTimeout(autoRefreshSetup.timeoutID);
    autoRefreshSetup.timeoutID = setTimeout(() => {
      if (JSON.parse(localStorage.getItem("refresh")) !== "Never") {
        let searchbar = document.querySelector(".searchbar > input");
        searchbar.value = "";
        let city;
        let info = document.querySelector(".info");
        if (info) {
          city = document.querySelector(".city").innerText;
          (0,_showData__WEBPACK_IMPORTED_MODULE_3__.clean)(".result");
          _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon(city);
        } else {
          (0,_showData__WEBPACK_IMPORTED_MODULE_3__.clean)(".result");
          _handleUserInput__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchIcon();
        }
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
/* harmony export */   "makeSortSetting": () => (/* binding */ makeSortSetting),
/* harmony export */   "sortAtoZ": () => (/* binding */ sortAtoZ),
/* harmony export */   "sortZtoA": () => (/* binding */ sortZtoA)
/* harmony export */ });
/* harmony import */ var _sort_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort.svg */ "./src/sort.svg");
/* harmony import */ var _optionFavorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionFavorite */ "./src/optionFavorite.js");



function makeSortSetting() {
  let sortSetting = document.createElement("div");

  let sortIcon = new Image();
  sortIcon.alt = "Sort setting icon";
  sortIcon.src = _sort_svg__WEBPACK_IMPORTED_MODULE_0__;

  let sortLabel = document.createElement("p");
  sortLabel.innerText = "Sort Favorites: ";

  let sortSelect = document.createElement("select");
  sortSelect.addEventListener("change", (change) => {
    localStorage.setItem("sort", JSON.stringify(change.target.value));
    (0,_optionFavorite__WEBPACK_IMPORTED_MODULE_1__.handleSortAction)();
  });

  let nodes = [];

  let nameGroup = document.createElement("optgroup");
  nameGroup.setAttribute("label", "Alphabetical Order");
  let ascendingName = document.createElement("option");
  ascendingName.setAttribute("value", "ascendingName");
  ascendingName.innerText = "A to Z";
  ascendingName.setAttribute("value", "atoz");
  nodes.push(ascendingName);
  let descendingName = document.createElement("option");
  descendingName.setAttribute("value", "descendingName");
  descendingName.innerText = "Z to A";
  descendingName.setAttribute("value", "ztoa");
  nodes.push(descendingName);
  nameGroup.appendChild(ascendingName);
  nameGroup.appendChild(descendingName);

  let tempGroup = document.createElement("optgroup");
  tempGroup.setAttribute("label", "Actual Temperature");
  let ascendingTemp = document.createElement("option");
  ascendingTemp.setAttribute("value", "ascendingName");
  ascendingTemp.innerText = "Coldest to Hottest";
  ascendingTemp.setAttribute("value", "tempctoh");
  nodes.push(ascendingTemp);
  let descendingTemp = document.createElement("option");
  descendingTemp.setAttribute("value", "descendingTemp");
  descendingTemp.innerText = "Hottest to Coldest";
  descendingTemp.setAttribute("value", "temphtoc");
  nodes.push(descendingTemp);
  tempGroup.appendChild(ascendingTemp);
  tempGroup.appendChild(descendingTemp);

  let tempFeelsGroup = document.createElement("optgroup");
  tempFeelsGroup.setAttribute("label", "Apparent Temperature");
  let ascendingTempFeels = document.createElement("option");
  ascendingTempFeels.setAttribute("value", "ascendingTempFeels");
  ascendingTempFeels.innerText = "Coldest to Hottest";
  ascendingTempFeels.setAttribute("value", "feelsctoh");
  nodes.push(ascendingTempFeels);
  let descendingTempFeels = document.createElement("option");
  descendingTempFeels.setAttribute("value", "descendingTempFeels");
  descendingTempFeels.innerText = "Hottest to Coldest";
  descendingTempFeels.setAttribute("value", "feelshtoc");
  nodes.push(descendingTempFeels);
  tempFeelsGroup.appendChild(ascendingTempFeels);
  tempFeelsGroup.appendChild(descendingTempFeels);

  nodes.forEach((n) => {
    if (JSON.stringify(n.value) == localStorage.getItem("sort")) {
      n.setAttribute("selected", true);
    }
  });

  sortSelect.appendChild(nameGroup);
  sortSelect.appendChild(tempFeelsGroup);
  sortSelect.appendChild(tempGroup);

  sortSetting.appendChild(sortIcon);
  sortSetting.appendChild(sortLabel);
  sortSetting.appendChild(sortSelect);

  return sortSetting;
}

function sortAtoZ(cities) {
  let sortedCities = cities.sort();
  return sortedCities;
}

function sortZtoA(cities) {
  let sortedCities = cities.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedCities;
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
  uvindex,
  day
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
  if (!day) {
    let moonPhaseCard = (0,_makeMoonPhaseCard__WEBPACK_IMPORTED_MODULE_10__.makeMoonPhaseCard)(moonphase);
    info.appendChild(moonPhaseCard);
  }
  if (day) {
    let uvCard = (0,_makeUVIndexCard__WEBPACK_IMPORTED_MODULE_9__.makeUVIndexCard)(uvindex);
    info.appendChild(uvCard);
  }
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
    let refreshMode = localStorage.getItem("refresh");
    if (refreshMode == "Never") {
      console.log("I wont refresh");
      _settingAutoRefresh__WEBPACK_IMPORTED_MODULE_4__["default"].auto = false;
    } else {
      _settingAutoRefresh__WEBPACK_IMPORTED_MODULE_4__["default"].handleAutoRefresh(localStorage.getItem("refresh"));
    }
  }
} else {
  let citiesArray = [];
  let metric = true;
  let citiesArrayJSON = JSON.stringify(citiesArray);
  let refresh = "Never";
  localStorage.setItem("cities", `${citiesArrayJSON}`);
  localStorage.setItem("metric", `${metric}`);
  localStorage.setItem("refresh", `${refresh}`);
  localStorage.setItem("sort", JSON.stringify("atoz"));
}

(0,_options__WEBPACK_IMPORTED_MODULE_0__.getOptions)(false);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxnQkFBZ0IsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxV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ZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9CNUI7QUFDTztBQUNQLGVBQWUsU0FBUyxFQUFFLEtBQUs7QUFDL0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsR0FBRyxXQUFXLE9BQU87QUFDMUQsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsR0FBRyxXQUFXLE9BQU87QUFDMUQsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZTakI7QUFDbUI7QUFDQTtBQUNLO0FBQ1Y7QUFDTTtBQUNGO0FBQ1U7QUFDTDs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FB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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNTO0FBQ0o7QUFDRjtBQUNVOztBQUVwRCw2REFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNFQUE2QjtBQUNuQyxNQUFNLHlEQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnRUFBcUI7QUFDM0IsTUFBTTtBQUNOLE1BQU0sNkVBQWtDO0FBQ3hDO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCO0FBQ3BELG9DQUFvQyxPQUFPO0FBQzNDLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7O0FBRUEsb0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZXJyb3JDYXJkcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Zhdm9yaXRlc0Jhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2ZsYWdBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9naWZBUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9oYW5kbGVVc2VySW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlQmFzaWNzQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VDbG91ZHNDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZUZhdkxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlR2lmQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VNb29uUGhhc2VDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZU92ZXJ2aWV3Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VSYWluQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VTZWFyY2hCYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlU2V0dGluZ3NCYXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlU25vd0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlU3VuQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VVVkluZGV4Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VXaW5kQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvbkZhdm9yaXRlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uUmVsb2FkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25TaG93RmF2cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblRlbXBlcmF0dXJlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uVW5mYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zZXR0aW5nQXV0b1JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zZXR0aW5nU29ydC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3Nob3dEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYXZiYXIsXFxuLm9wdGlvbnMge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLm5hdmJhciA+IGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuNXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW5wdXQge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMzZ2dztcXG4gIG1hcmdpbi1sZWZ0OiA0dnc7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmctbGVmdDogMnZ3O1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzNHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLm9wdGlvbnMtY29tcGFjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuXFxuLm9wdGlvbnMgZGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDZ2aDtcXG59XFxuXFxuLm9wdGlvbi1zZXR0aW5ncyBpbWcsXFxuLm9wdGlvbi1zZXR0aW5ncy1vcGVuIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzhweDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA0NXB4O1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uc2VsZWN0ZWQtbWV0cmljIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIGlucHV0IHtcXG4gIGhlaWdodDogMS4xZW07XFxuICB3aWR0aDogMS4xZW07XFxuICBtYXJnaW4tbGVmdDogMnZ3O1xcbn1cXG5cXG4ub3B0aW9uLXJlbG9hZCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5vcHRpb24tcmVsb2FkIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNzklO1xcbn1cXG5cXG4ub3B0aW9uLWZhdm9yaXRlLFxcbi5vcHRpb24tdW5mYXZvcml0ZSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5vcHRpb24tZmF2b3JpdGUgaW1nLFxcbi5vcHRpb24tdW5mYXZvcml0ZSBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDc3JTtcXG59XFxuXFxuLm9wdGlvbnMgPiBkaXYgPiBkaXYgZGl2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgcGFkZGluZy1yaWdodDogMXZ3O1xcbiAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgc2VsZWN0IHtcXG4gIHdpZHRoOiAxNHZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNldHRpbmdzLWJhciBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgPiBkaXY6Zmlyc3QtY2hpbGQgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyID4gZGl2Om50aC1jaGlsZCgyKSBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbi5mYXZvcml0ZXMtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogY2xpcDtcXG59XFxuXFxuLmZhdm9yaXRlcy1iYXIgcCB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIG1hcmdpbi1yaWdodDogM3Z3O1xcbiAgbWFyZ2luLWxlZnQ6IDN2dztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5iYXNpY3MsXFxuLndlYXRoZXItZ2lmLFxcbi5vdmVydmlldyxcXG4uc3VuU3RhdHMsXFxuLmNsb3VkU3RhdHMsXFxuLndpbmRTdGF0cyxcXG4uc25vdy1jYXJkLFxcbi5yYWluLWNhcmQsXFxuLmZhdm9yaXRlcy1iYXIsXFxuLnNldHRpbmdzLWJhcixcXG4udXYtaW5kZXgtY2FyZCxcXG4ubW9vbi1waGFzZS1jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xcbiAgLmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDF2dztcXG4gIH1cXG5cXG4gIC5pbmZvIGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG59XFxuXFxuLnN1blN0YXRzIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4uYmFzaWNzIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAzZnIgMWZyO1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgcGFkZGluZy1sZWZ0OiAydnc7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjdmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuN3ZoO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IHAge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZmxhZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi80O1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8gMyk7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOmZpcnN0LWNoaWxkLFxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW4tbGVmdDogNHZ3O1xcbn1cXG5cXG4ud2VhdGhlci1naWYge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm92ZXJ2aWV3ID4gcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uc25vdy1jYXJkIGltZyxcXG4ucmFpbi1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQsXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjR2aDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdixcXG4ucmFpbi1jYXJkID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBpbWcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzLFxcbi51di1pbmRleC1jYXJkLFxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMuOGZyO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5naWYgPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBpbWcsXFxuLndpbmRTdGF0cyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi51di1pbmRleC1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXZ3O1xcbn1cXG5cXG4ubW9vbi1waGFzZS1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIHAsXFxuLndpbmRTdGF0cyBwLFxcbi51di1pbmRleC1jYXJkIHAsXFxuLm1vb24tcGhhc2UtY2FyZCBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBwYWRkaW5nOiAydnc7XFxufVxcblxcbi5lcnJvci1jYXJkIHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FB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VztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNoaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdmJhcixcXG4ub3B0aW9ucyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ubmF2YmFyID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNnZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDR2dztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAydnc7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM0cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ub3B0aW9ucy1jb21wYWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4ub3B0aW9ucyBkaXYge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNnZoO1xcbn1cXG5cXG4ub3B0aW9uLXNldHRpbmdzIGltZyxcXG4ub3B0aW9uLXNldHRpbmdzLW9wZW4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzOHB4O1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5zZWxlY3RlZC1tZXRyaWMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjFlbTtcXG4gIHdpZHRoOiAxLjFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbi5vcHRpb24tcmVsb2FkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3OSU7XFxufVxcblxcbi5vcHRpb24tZmF2b3JpdGUsXFxuLm9wdGlvbi11bmZhdm9yaXRlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSBpbWcsXFxuLm9wdGlvbi11bmZhdm9yaXRlIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNzclO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdiA+IGRpdiBkaXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuLnNldHRpbmdzLWJhciBzZWxlY3Qge1xcbiAgd2lkdGg6IDE0dnc7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWJhciA+IGRpdjpmaXJzdC1jaGlsZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgPiBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuLmZhdm9yaXRlcy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBjbGlwO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XFxuICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJhc2ljcyxcXG4ud2VhdGhlci1naWYsXFxuLm92ZXJ2aWV3LFxcbi5zdW5TdGF0cyxcXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzLFxcbi5zbm93LWNhcmQsXFxuLnJhaW4tY2FyZCxcXG4uZmF2b3JpdGVzLWJhcixcXG4uc2V0dGluZ3MtYmFyLFxcbi51di1pbmRleC1jYXJkLFxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAuaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXZ3O1xcbiAgfVxcblxcbiAgLmluZm8gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbi5iYXNpY3Mge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi4xZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDNmciAxZnI7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuN2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43dmg7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gc3BhbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gcCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5mbGFnIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzQ7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0byAzKTtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6Zmlyc3QtY2hpbGQsXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA0dnc7XFxufVxcblxcbi53ZWF0aGVyLWdpZiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5vdmVydmlldyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ub3ZlcnZpZXcgPiBwIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc25vdy1jYXJkLFxcbi5yYWluLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxuICBwYWRkaW5nLXRvcDogMXZoO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5zbm93LWNhcmQgaW1nLFxcbi5yYWluLWNhcmQgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4uc25vdy1jYXJkID4gZGl2ID4gcDpmaXJzdC1jaGlsZCxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHZoO1xcbn1cXG5cXG4uc25vdy1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDMpLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc25vdy1jYXJkID4gZGl2LFxcbi5yYWluLWNhcmQgPiBkaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG59XFxuXFxuLnN1blN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBwYWRkaW5nLXRvcDogMXZoO1xcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcXG59XFxuXFxuLnN1blN0YXRzIGltZyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLnN1blN0YXRzIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG91ZFN0YXRzLFxcbi53aW5kU3RhdHMsXFxuLnV2LWluZGV4LWNhcmQsXFxuLm1vb24tcGhhc2UtY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMy44ZnI7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLmdpZiA+IGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIGltZyxcXG4ud2luZFN0YXRzIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnV2LWluZGV4LWNhcmQgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA3MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xdnc7XFxufVxcblxcbi5tb29uLXBoYXNlLWNhcmQgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA1NXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLm1vb24tcGhhc2UtY2FyZCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmNsb3VkU3RhdHMgcCxcXG4ud2luZFN0YXRzIHAsXFxuLnV2LWluZGV4LWNhcmQgcCxcXG4ubW9vbi1waGFzZS1jYXJkIHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5lcnJvci1jYXJkIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHBhZGRpbmc6IDJ2dztcXG59XFxuXFxuLmVycm9yLWNhcmQgcCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbi5lcnJvci1jYXJkIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRFcnJvckdpZiB9IGZyb20gXCIuL2dpZkFQSVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFrZUVycm9yQ2FyZChlcnJvclR5cGUpIHtcbiAgbGV0IG1lc3NhZ2UgPSBcIlwiO1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaWYgKGVycm9yVHlwZSA9PSA0MDQpIHtcbiAgICBtZXNzYWdlID0gXCJTb3JyeSwgd2UgY291bGRuJ3QgZmluZCB0aGF0IGNpdHlcIjtcbiAgICBpbWFnZS5hbHQgPSBcImdpZiBjb25mdXNlZCB3aXRoIGVudGVyZWQgY2l0eVwiO1xuICAgIHRyeSB7XG4gICAgICBpbWFnZS5zcmMgPSBhd2FpdCBnZXRFcnJvckdpZigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGZldGNoaW5nIGVycm9yIGdpZjogXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cbiAgbGV0IGVycm9yQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVycm9yQ2FyZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY2FyZFwiKTtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgZXJyb3JDYXJkLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG4gIGVycm9yQ2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIHJldHVybiBlcnJvckNhcmQ7XG59XG4iLCJpbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuXG5jb25zdCBmYXZvcml0ZXNCYXIgPSB7XG4gIGhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKSxcbiAgbWFrZUZhdm9yaXRlc0JhcigpIHtcbiAgICBsZXQgY2l0aWVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIik7XG4gICAgY2l0aWVzID0gSlNPTi5wYXJzZShjaXRpZXMpO1xuICAgIGxldCBmYXZvcml0ZXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZhdm9yaXRlc0Jhci5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzLWJhclwiKTtcbiAgICBjaXRpZXMuZm9yRWFjaCgoY2l0eSkgPT4ge1xuICAgICAgbGV0IGNpdHlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjaXR5TGluay5pbm5lclRleHQgPSBgJHtjaXR5fWA7XG4gICAgICBjaXR5TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgdW5pdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWV0cmljXCIpKTtcbiAgICAgICAgdW5pdHMgPyBnZXRXZWF0aGVyKGNpdHksIFwibWV0cmljXCIpIDogZ2V0V2VhdGhlcihjaXR5LCBcImltcGVyaWFsXCIpO1xuICAgICAgfSk7XG4gICAgICBmYXZvcml0ZXNCYXIuYXBwZW5kQ2hpbGQoY2l0eUxpbmspO1xuICAgIH0pO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0Jhcik7XG4gIH0sXG4gIHJlZnJlc2hGYXZvcml0ZXNCYXIoKSB7XG4gICAgbGV0IGZhdm9yaXRlc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzLWJhclwiKTtcbiAgICB0aGlzLmhlYWRlci5yZW1vdmVDaGlsZChmYXZvcml0ZXNCYXIpO1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZhdm9yaXRlc0JhcjtcbiIsImNvbnN0IGVuZHBvaW50ID0gXCJodHRwczovL2NvdW50cnlmbGFnc2FwaS5jb20vc3ZnL1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZsYWcoY29kZSkge1xuICBsZXQgc3JjID0gYCR7ZW5kcG9pbnR9JHtjb2RlfWA7XG4gIHJldHVybiBzcmM7XG59XG4iLCJjb25zdCBnaWZLZXkgPSBcIlpTcUxaQm9QMUwyNXBTMDNHNDc4cGpSQmIwTkVTYjBDXCI7XG5jb25zdCBlcnJvckdpZklkcyA9IFtcbiAgXCJnbG1SeWlTSTN2NUU0XCIsXG4gIFwiakpPMUJ3dWNoNW9yS1wiLFxuICBcImdLc0pVZGRqbnBQRzBcIixcbiAgXCJtRVY0MkYzOGx1cjZQYmZhcFdcIixcbiAgXCIxeFZiU1g4VXpJaU1QTVpqWlBcIixcbiAgXCJkb0pyQ084a0NBZ055XCIsXG4gIFwiaDRaNlJmdVF5Y2RpTVwiLFxuICBcIjNvN2FDVFBQbTRPSGZSTFNINlwiLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RXJyb3JHaWYoKSB7XG4gIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICBsZXQgaWQgPSBlcnJvckdpZklkc1tpbmRleF07XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLyR7aWR9P2FwaV9rZXk9JHtnaWZLZXl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBsZXQgc3JjID0gYXBpUHJvbWlzZVJlc29sdmVkLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgcmV0dXJuIHNyYztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckdpZihcbiAgd2VhdGhlcixcbiAgdGltZUF0Q2l0eSxcbiAgc3VucmlzZURhdGUsXG4gIHN1bnNldERhdGUsXG4gIHVuaXRzLFxuICB0ZW1wRmVlbHNSb3VuZGVkLFxuICBtb29ucGhhc2Vcbikge1xuICBsZXQgdGVtcGVyYXR1cmU7XG4gIGlmICh1bml0cyA9PSBcIm1ldHJpY1wiKSB7XG4gICAgaWYgKHRlbXBGZWVsc1JvdW5kZWQgPCAtMTApIHtcbiAgICAgIHRlbXBlcmF0dXJlID0gXCJmcmVlemluZ1wiO1xuICAgIH1cbiAgfVxuICBpZiAodW5pdHMgPT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgaWYgKHRlbXBGZWVsc1JvdW5kZWQgPCAxNCkge1xuICAgICAgdGVtcGVyYXR1cmUgPSBcImZyZWV6aW5nXCI7XG4gICAgfVxuICB9XG5cbiAgbGV0IGlkID0gXCJ1eW1LZ3FySjlPcjYwXCI7XG4gIC8vTklHSFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUXG4gIGlmICh0aW1lQXRDaXR5IC0gc3Vuc2V0RGF0ZSA+IDAuNSB8fCB0aW1lQXRDaXR5IC0gc3VucmlzZURhdGUgPCAwKSB7XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL3JhaW4vKSkge1xuICAgICAgaWYgKFxuICAgICAgICB3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwibGlnaHRcIiB8fFxuICAgICAgICB3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiZHJpenpsZVwiXG4gICAgICApIHtcbiAgICAgICAgaWQgPSBcInhUOUdFSWMxblE3YlZRUTU0UVwiO1xuICAgICAgfVxuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL3RodW5kZXJzdG9ybS8pKSB7XG4gICAgICAgIGlkID0gXCIzb3N4WXpJUVJxTjRET0VkZENcIjtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9tb2RlcmF0ZS8pKSB7XG4gICAgICAgIGlkID0gXCI1dG9yRUVNOFFuUjk1Q3FnMTFcIjtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9oZWF2eS8pKSB7XG4gICAgICAgIGlkID0gXCJsME1ZQWZ4YmczZmhxbjFSdVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSBcIjV0b3JFRU04UW5SOTVDcWcxMVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvY2xvdWRzLykpIHtcbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwib3ZlcmNhc3RcIikge1xuICAgICAgICBpZCA9IFwiMmZDNzRqTm41U1B2T1wiO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiZmV3XCIgfHxcbiAgICAgICAgd2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcInNjYXR0ZXJlZFwiXG4gICAgICApIHtcbiAgICAgICAgaWYgKG1vb25waGFzZSA9PSAwLjUpIHtcbiAgICAgICAgICBpZCA9IFwiblY1bDJTRnNVOTNja2FXbHluXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJzY2F0dGVyZWRcIikge1xuICAgICAgICAgICAgaWQgPSBcInd3akVQanFjdVB3dlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJmZXdcIikge1xuICAgICAgICAgICAgaWQgPSBcInd3akVQanFjdVB3dlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiYnJva2VuXCIpIHtcbiAgICAgICAgaWQgPSBcIjEzUXNsWGdLT1F6bWh5XCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9zbm93LykpIHtcbiAgICAgIGlmICh0ZW1wZXJhdHVyZSA9PSBcImZyZWV6aW5nXCIpIHtcbiAgICAgICAgaWQgPSBcInM0Qmk0MjBtTURSQktcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pKSB7XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJsaWdodFwiKSB7XG4gICAgICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvc2hvd2VyLykpIHtcbiAgICAgICAgICAgICAgaWQgPSBcIk9OTG9SUkFIUWg1a1lcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlkID0gXCIzb2hjMTFEcE5NZjdxbnF4UjZcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWQgPSBcImJHYU9kcWVxWVFLYzBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvaGF6ZS8pKSB7XG4gICAgICBpZCA9IFwiM3NKUWRDMGZYSkx5V09zNFdNXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9taXN0LykpIHtcbiAgICAgIGlkID0gXCIzbzcyRjY1ZEpsN1owUHRkakdcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL2NsZWFyLykpIHtcbiAgICAgIGlmIChtb29ucGhhc2UgPT0gMC41KSB7XG4gICAgICAgIGlkID0gXCJhTjlHcW9SN09EM25xXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9vbnBoYXNlID4gMCAmJiBtb29ucGhhc2UgPCAwLjI1KSB7XG4gICAgICAgIGlkID0gXCI5dWtQT0NTOUVPRXRhXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9vbnBoYXNlID4gMC43NSAmJiBtb29ucGhhc2UgPD0gMSkge1xuICAgICAgICBpZCA9IFwiOXVrUE9DUzlFT0V0YVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSBcIm01b1FhYkJkb095ZTRcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL2ZvZy8pKSB7XG4gICAgICBpZCA9IFwiZHo2TnJrMzV4V1AzcVwiO1xuICAgIH1cblxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9zbGVldC8pKSB7XG4gICAgICBpZCA9IFwiZDNtbG10TlBveE5ydDRCaVwiO1xuICAgIH1cblxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9kcml6emxlLykpIHtcbiAgICAgIGlkID0gXCJ4VDlHRU9nMDlPdVJlc25aNmdcIjtcbiAgICB9XG5cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvc21va2UvKSkge1xuICAgICAgaWQgPSBcImwySmU5ZFVJNUxwemZIR1RlXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC90aHVuZGVyc3Rvcm0vKSkge1xuICAgICAgaWQgPSBcIlZKQXVoUmVnbWJYU0FhZmZGUlwiO1xuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvZHVzdC8pKSB7XG4gICAgICBpZCA9IFwibDRwVDBOdFBTTVYzcHc2TG1cIjtcbiAgICB9XG4gIH1cblxuICAvL0RBWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZXG4gIGlmICh0aW1lQXRDaXR5ID4gc3VucmlzZURhdGUgJiYgdGltZUF0Q2l0eSA8IHN1bnNldERhdGUpIHtcbiAgICBpZiAod2VhdGhlci5tYXRjaCgvZHJpenpsZS8pKSB7XG4gICAgICBpZCA9IFwieFQ5R0VPZzA5T3VSZXNuWjZnXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9yYWluLykpIHtcbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiZHJpenpsZVwiKSB7XG4gICAgICAgIGlkID0gXCJsMElySWtxN1EzaVJJSTBoeVwiO1xuICAgICAgfVxuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL3RodW5kZXJzdG9ybS8pKSB7XG4gICAgICAgIGlkID0gXCIzb3N4WXpJUVJxTjRET0VkZENcIjtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9saWdodC8pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSBzaG91bGQgd29yayBhcyBsaWdodFwiKTtcbiAgICAgICAgaWQgPSBcInhUOUdFT2cwOU91UmVzblo2Z1wiO1xuICAgICAgfVxuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL21vZGVyYXRlLykpIHtcbiAgICAgICAgaWQgPSBcIlcwYzN4Y1ozRjFkMEVZWWIwZlwiO1xuICAgICAgfVxuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL2hlYXZ5LykpIHtcbiAgICAgICAgaWQgPSBcIlhnWW9UZGdqNU5pVTc4cHJmbVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSBcIlcwYzN4Y1ozRjFkMEVZWWIwZlwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvY2xvdWRzLykpIHtcbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwib3ZlcmNhc3RcIikge1xuICAgICAgICBpZCA9IFwiZFdJYXUxWlJ5SWozajZZRWFMXCI7XG4gICAgICB9XG4gICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImZld1wiKSB7XG4gICAgICAgIGlkID0gXCJtbm82QkpmeThVU2ljXCI7XG4gICAgICB9XG4gICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcInNjYXR0ZXJlZFwiKSB7XG4gICAgICAgIGlkID0gXCJ1T3VpSzRGNXpaa1oyXCI7XG4gICAgICB9XG4gICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImJyb2tlblwiKSB7XG4gICAgICAgIGlkID0gXCI2M1dzTmc5REFoUmtZXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9zbm93LykpIHtcbiAgICAgIGlmICh0ZW1wZXJhdHVyZSA9PSBcImZyZWV6aW5nXCIpIHtcbiAgICAgICAgaWQgPSBcInM0Qmk0MjBtTURSQktcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pKSB7XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJsaWdodFwiKSB7XG4gICAgICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvc2hvd2VyLykpIHtcbiAgICAgICAgICAgICAgaWQgPSBcIjI2eEJ3RmNCR1BMTmZHYmtZXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZCA9IFwiNXFGRTkxT21laGRScTBzTDVhXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlkID0gXCIzb3JpTlNjVGJFekVWb1IxSXNcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvaGF6ZS8pKSB7XG4gICAgICBpZCA9IFwicjJPTXVUQ0ZvMHJ2MnJnQUw1XCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9taXN0LykpIHtcbiAgICAgIGlkID0gXCJvVmFpZ3FVaFB2RGdsUTB1V0pcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL2NsZWFyLykpIHtcbiAgICAgIGlkID0gXCJScVNKNm5RVnNPcHhlXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9mb2cvKSkge1xuICAgICAgaWQgPSBcIm9BYnZNWHZhaDFNMFVcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL3NsZWV0LykpIHtcbiAgICAgIGlkID0gXCJkM21sbXROUG94TnJ0NEJpXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9zbW9rZS8pKSB7XG4gICAgICBpZCA9IFwibDJKZTlkVUk1THB6ZkhHVGVcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL3RodW5kZXJzdG9ybS8pKSB7XG4gICAgICBpZCA9IFwiM29zeFl6SVFScU40RE9FZGRDXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9kdXN0LykpIHtcbiAgICAgIGlkID0gXCJ0cXRaRGo1QnFDMENZXCI7XG4gICAgfVxuICB9XG5cbiAgLy9TVU5TRVRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUXG4gIGlmIChcbiAgICB0aW1lQXRDaXR5IDwgc3Vuc2V0RGF0ZSAmJlxuICAgIChzdW5zZXREYXRlIC0gdGltZUF0Q2l0eSkgLyAoNjAgKiAxMDAwICogNjApIDwgMC41XG4gICkge1xuICAgIGNvbnNvbGUubG9nKFwiU3Vuc2V0XCIpO1xuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9taXN0LykpIHtcbiAgICAgIGlkID0gXCIzbzcyRjY1ZEpsN1owUHRkakdcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL2Nsb3Vkcy8pKSB7XG4gICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcIm92ZXJjYXN0XCIpIHtcbiAgICAgICAgaWQgPSBcIlloZzlsOGtYdXE5NFFcIjtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiZmV3XCIpIHtcbiAgICAgICAgaWQgPSBcIld6TERsakJwcGxVdm1cIjtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwic2NhdHRlcmVkXCIpIHtcbiAgICAgICAgaWQgPSBcIjYzV3NOZzlEQWhSa1lcIjtcbiAgICAgIH1cbiAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiYnJva2VuXCIpIHtcbiAgICAgICAgaWQgPSBcIjQ5VkIwUEh4UjVWc2NcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL2NsZWFyLykpIHtcbiAgICAgIGlkID0gXCJaWklFdFFIbWlUTnd1eFRPZHRcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL3RodW5kZXJzdG9ybS8pKSB7XG4gICAgICBpZCA9IFwiWTRKUFlzckpFazQ1NHBOYnRzXCI7XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9mb2cvKSkge1xuICAgICAgaWQgPSBcInhUOHFCajNPeGw5a3VRS2dPa1wiO1xuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvZHVzdC8pKSB7XG4gICAgICBpZCA9IFwidHF0WkRqNUJxQzBDWVwiO1xuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvcmFpbi8pKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJsaWdodFwiIHx8XG4gICAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJkcml6emxlXCJcbiAgICAgICkge1xuICAgICAgICBpZCA9IFwieFQ5R0VJYzFuUTdiVlFRNTRRXCI7XG4gICAgICB9XG4gICAgICBpZiAod2VhdGhlci5tYXRjaCgvdGh1bmRlcnN0b3JtLykpIHtcbiAgICAgICAgaWQgPSBcIjNvc3hZeklRUnFONERPRWRkQ1wiO1xuICAgICAgfVxuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL21vZGVyYXRlLykpIHtcbiAgICAgICAgaWQgPSBcIjV0b3JFRU04UW5SOTVDcWcxMVwiO1xuICAgICAgfVxuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL2hlYXZ5LykpIHtcbiAgICAgICAgaWQgPSBcIlRWcGVYRGk4eFRseW9cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkID0gXCI1dG9yRUVNOFFuUjk1Q3FnMTFcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV0IGFwaVByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvJHtpZH0/YXBpX2tleT0ke2dpZktleX1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGxldCBzcmMgPSBhcGlQcm9taXNlUmVzb2x2ZWQuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICByZXR1cm4gc3JjO1xufVxuXG5leHBvcnQgeyBnZXRFcnJvckdpZiwgZ2V0V2VhdGhlckdpZiB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNob3dPbkluZm8gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IHsgc2hvd09uQ2FyZCB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5pbXBvcnQgeyBtYWtlRXJyb3JDYXJkIH0gZnJvbSBcIi4vZXJyb3JDYXJkc1wiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlckdpZiB9IGZyb20gXCIuL2dpZkFQSVwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNVbmZhdm9yaXRlIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKTtcblxuY29uc3QgaGFuZGxlVXNlcklucHV0ID0ge1xuICB3ZWF0aGVyS2V5OiBcIjhhZTJkMTNlNTRlYmVmNzc1ZWZmZjJjNTI4MTdhNWUyXCIsXG4gIHN1bkFuZE1vb25LZXk6IFwiRVlFQVpKWDkzUVhOUVZQVU04QVlFMzhOWFwiLFxuICBnaWZLZXk6IFwiWlNxTFpCb1AxTDI1cFMwM0c0NzhwalJCYjBORVNiMENcIixcbiAgdW5pdHM6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpLFxuICBoYW5kbGVTZWFyY2hJY29uKGNpdHlGcm9tQ2FyZCkge1xuICAgIGxldCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaGJhciA+IGlucHV0XCIpO1xuICAgIGxldCB1bml0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpO1xuICAgIGxldCB1bml0c1RvVXNlID0gXCJcIjtcbiAgICB1bml0cyA/ICh1bml0c1RvVXNlID0gXCJtZXRyaWNcIikgOiAodW5pdHNUb1VzZSA9IFwiaW1wZXJpYWxcIik7XG4gICAgaWYgKHNlYXJjaGJhci52YWx1ZSkge1xuICAgICAgZ2V0V2VhdGhlcihzZWFyY2hiYXIudmFsdWUsIHVuaXRzVG9Vc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2l0eUZyb21DYXJkKSB7XG4gICAgICAgIGdldFdlYXRoZXIoY2l0eUZyb21DYXJkLCB1bml0c1RvVXNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgIGxldCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuICAgICAgICAgIGdldFdlYXRoZXIoY2l0eS5pbm5lclRleHQsIHVuaXRzVG9Vc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ha2VGYXZMaXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyZEZvckZhdkxpc3QobG9jYXRpb24sIHVuaXRzKSB7XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtoYW5kbGVVc2VySW5wdXQud2VhdGhlcktleX0mdW5pdHM9JHt1bml0c31gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuY29kID09IDQwNCkge1xuICAgIGxldCBlcnJvckNhcmQgPSBhd2FpdCBtYWtlRXJyb3JDYXJkKDQwNCk7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZXJyb3JDYXJkKTtcbiAgICBnZXRPcHRpb25zKGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY2l0eSA9IGFwaVByb21pc2VSZXNvbHZlZC5uYW1lO1xuICAgIGxldCBjb3VudHJ5ID0gbnVsbDtcbiAgICBjb3VudHJ5ID0gYXBpUHJvbWlzZVJlc29sdmVkLnN5cy5jb3VudHJ5O1xuICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgbGV0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDtcbiAgICBsZXQgZGF0ZUF0Q2l0eSA9IG5ldyBEYXRlKFxuICAgICAgdGltZU5vdyArIG9mZnNldCArIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDBcbiAgICApO1xuICAgIGxldCB0aW1lQXRDaXR5ID0gZGF0ZUF0Q2l0eS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICB9KTtcbiAgICBsZXQgZGF0ZUF0Q2l0eVNpbXBsZSA9IGRhdGVBdENpdHkudG9EYXRlU3RyaW5nKCk7XG4gICAgbGV0IHRlbXBlcmF0dXJlID0gYXBpUHJvbWlzZVJlc29sdmVkLm1haW4udGVtcDtcbiAgICBsZXQgdGVtcFJvdW5kZWQgPSBNYXRoLnJvdW5kKHRlbXBlcmF0dXJlICogMTApIC8gMTA7XG4gICAgbGV0IHRlbXBlcmF0dXJlRmVlbHMgPSBhcGlQcm9taXNlUmVzb2x2ZWQubWFpbi5mZWVsc19saWtlO1xuICAgIGxldCB0ZW1wRmVlbHNSb3VuZGVkID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZUZlZWxzICogMTApIC8gMTA7XG4gICAgbGV0IHdlYXRoZXIgPSBhcGlQcm9taXNlUmVzb2x2ZWQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGxldCBjYXJkID0gc2hvd09uQ2FyZChcbiAgICAgIHVuaXRzLFxuICAgICAgY2l0eSxcbiAgICAgIGNvdW50cnksXG4gICAgICB0aW1lQXRDaXR5LFxuICAgICAgZGF0ZUF0Q2l0eVNpbXBsZSxcbiAgICAgIHRlbXBSb3VuZGVkLFxuICAgICAgdGVtcEZlZWxzUm91bmRlZCxcbiAgICAgIHdlYXRoZXJcbiAgICApO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCB1bml0cykge1xuICBsZXQgZmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtYmFyXCIpO1xuICBpZiAoZmF2QmFyKSB7XG4gICAgZmF2QmFyLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICB9XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtoYW5kbGVVc2VySW5wdXQud2VhdGhlcktleX0mdW5pdHM9JHt1bml0c31gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuY29kID09IDQwNCkge1xuICAgIGxldCBlcnJvckNhcmQgPSBhd2FpdCBtYWtlRXJyb3JDYXJkKDQwNCk7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZXJyb3JDYXJkKTtcbiAgICBnZXRPcHRpb25zKGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY2l0eSA9IGFwaVByb21pc2VSZXNvbHZlZC5uYW1lO1xuXG4gICAgbGV0IGNpdGllcyA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGlmIChjaXRpZXMubGVuZ3RoID4gMCAmJiBjaXRpZXMuc29tZSgoYykgPT4gYyA9PSBjaXR5KSkge1xuICAgICAgZ2V0T3B0aW9uc1VuZmF2b3JpdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0T3B0aW9ucyh0cnVlKTtcbiAgICB9XG5cbiAgICBsZXQgY291bnRyeSA9IG51bGw7XG4gICAgY291bnRyeSA9IGFwaVByb21pc2VSZXNvbHZlZC5zeXMuY291bnRyeTtcbiAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGxldCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG4gICAgbGV0IGRhdGVBdENpdHkgPSBuZXcgRGF0ZShcbiAgICAgIHRpbWVOb3cgKyBvZmZzZXQgKyBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwXG4gICAgKTtcbiAgICBsZXQgdGltZUF0Q2l0eSA9IGRhdGVBdENpdHkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IGRhdGVBdENpdHlTaW1wbGUgPSBkYXRlQXRDaXR5LnRvRGF0ZVN0cmluZygpO1xuICAgIGxldCB0ZW1wZXJhdHVyZSA9IGFwaVByb21pc2VSZXNvbHZlZC5tYWluLnRlbXA7XG4gICAgbGV0IHRlbXBSb3VuZGVkID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZSAqIDEwKSAvIDEwO1xuICAgIGxldCB0ZW1wZXJhdHVyZUZlZWxzID0gYXBpUHJvbWlzZVJlc29sdmVkLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgdGVtcEZlZWxzUm91bmRlZCA9IE1hdGgucm91bmQodGVtcGVyYXR1cmVGZWVscyAqIDEwKSAvIDEwO1xuICAgIGxldCB3ZWF0aGVyID0gYXBpUHJvbWlzZVJlc29sdmVkLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgbGV0IGdpZlNyYyA9IFwiXCI7XG4gICAgbGV0IHJhaW4xaCA9IFwiXCI7XG4gICAgbGV0IHJhaW4zaCA9IFwiXCI7XG4gICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5yYWluKSB7XG4gICAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIxaFwiXSkge1xuICAgICAgICByYWluMWggPSBhcGlQcm9taXNlUmVzb2x2ZWQucmFpbltcIjFoXCJdO1xuICAgICAgfVxuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5yYWluW1wiM2hcIl0pIHtcbiAgICAgICAgcmFpbjNoID0gYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIzaFwiXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNub3cxaCA9IFwiXCI7XG4gICAgbGV0IHNub3czaCA9IFwiXCI7XG4gICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5zbm93KSB7XG4gICAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIxaFwiXSkge1xuICAgICAgICBzbm93MWggPSBhcGlQcm9taXNlUmVzb2x2ZWQuc25vd1tcIjFoXCJdO1xuICAgICAgfVxuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5zbm93W1wiM2hcIl0pIHtcbiAgICAgICAgc25vdzNoID0gYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIzaFwiXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN1bnJpc2UgPSBuZXcgRGF0ZShcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3VucmlzZVwiXSAqIDEwMDAgK1xuICAgICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDAgK1xuICAgICAgICAgIG9mZnNldFxuICAgICAgKVxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IHN1bnNldCA9IG5ldyBEYXRlKFxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC5zeXNbXCJzdW5zZXRcIl0gKiAxMDAwICtcbiAgICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwICtcbiAgICAgICAgICBvZmZzZXRcbiAgICAgIClcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIH0pO1xuICAgIGxldCBjbG91ZGluZXNzID0gYXBpUHJvbWlzZVJlc29sdmVkLmNsb3Vkc1tcImFsbFwiXTtcbiAgICBsZXQgd2luZCA9IGFwaVByb21pc2VSZXNvbHZlZC53aW5kW1wic3BlZWRcIl07XG5cbiAgICBsZXQgc3VuQW5kTW9vbkFwaVByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufS8ke1xuICAgICAgICBEYXRlLnBhcnNlKGRhdGVBdENpdHkpIC8gMTAwMFxuICAgICAgfS8/a2V5PSR7aGFuZGxlVXNlcklucHV0LnN1bkFuZE1vb25LZXl9JmVsZW1lbnRzPXV2aW5kZXgsbW9vbnBoYXNlYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG5cbiAgICBsZXQgc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IHN1bkFuZE1vb25BcGlQcm9taXNlLmpzb24oKTtcbiAgICBsZXQgbW9vbnBoYXNlO1xuICAgIGxldCB1dmluZGV4O1xuICAgIGlmIChzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zKSB7XG4gICAgICBtb29ucGhhc2UgPSBzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zLm1vb25waGFzZTtcbiAgICAgIHV2aW5kZXggPSBzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zLnV2aW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vb25waGFzZSA9IHN1bkFuZE1vb25BcGlQcm9taXNlUmVzb2x2ZWQuZGF5c1swXS5tb29ucGhhc2U7XG4gICAgICB1dmluZGV4ID0gc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZC5kYXlzWzBdLnV2aW5kZXg7XG4gICAgfVxuXG4gICAgbGV0IHN1bnJpc2VEYXRlID0gbmV3IERhdGUoXG4gICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3VucmlzZVwiXSAqIDEwMDAgK1xuICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwICtcbiAgICAgICAgb2Zmc2V0XG4gICAgKTtcblxuICAgIGxldCBzdW5zZXREYXRlID0gbmV3IERhdGUoXG4gICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3Vuc2V0XCJdICogMTAwMCArXG4gICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDAgK1xuICAgICAgICBvZmZzZXRcbiAgICApO1xuXG4gICAgdHJ5IHtcbiAgICAgIGdpZlNyYyA9IGF3YWl0IGdldFdlYXRoZXJHaWYoXG4gICAgICAgIHdlYXRoZXIsXG4gICAgICAgIGRhdGVBdENpdHksXG4gICAgICAgIHN1bnJpc2VEYXRlLFxuICAgICAgICBzdW5zZXREYXRlLFxuICAgICAgICB1bml0cyxcbiAgICAgICAgdGVtcEZlZWxzUm91bmRlZCxcbiAgICAgICAgbW9vbnBoYXNlXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGZldGNoaW5nIHdlYXRoZXIgZ2lmOiBcIiwgZXJyb3IpO1xuICAgIH1cblxuICAgIGxldCBkYXkgPSBmYWxzZTtcbiAgICBpZiAoZGF0ZUF0Q2l0eSA+IHN1bnJpc2VEYXRlICYmIGRhdGVBdENpdHkgPCBzdW5zZXREYXRlKSB7XG4gICAgICBkYXkgPSB0cnVlO1xuICAgIH1cblxuICAgIHNob3dPbkluZm8oXG4gICAgICB1bml0cyxcbiAgICAgIGNpdHksXG4gICAgICBjb3VudHJ5LFxuICAgICAgdGltZUF0Q2l0eSxcbiAgICAgIGRhdGVBdENpdHlTaW1wbGUsXG4gICAgICB0ZW1wUm91bmRlZCxcbiAgICAgIHRlbXBGZWVsc1JvdW5kZWQsXG4gICAgICB3ZWF0aGVyLFxuICAgICAgcmFpbjFoLFxuICAgICAgcmFpbjNoLFxuICAgICAgc25vdzFoLFxuICAgICAgc25vdzNoLFxuICAgICAgc3VucmlzZSxcbiAgICAgIHN1bnNldCxcbiAgICAgIGNsb3VkaW5lc3MsXG4gICAgICB3aW5kLFxuICAgICAgZ2lmU3JjLFxuICAgICAgbW9vbnBoYXNlLFxuICAgICAgdXZpbmRleCxcbiAgICAgIGRheVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVXNlcklucHV0O1xuIiwiaW1wb3J0IHsgZ2V0RmxhZyB9IGZyb20gXCIuL2ZsYWdBUElcIjtcbmltcG9ydCBoYW5kbGVVc2VySW5wdXQgZnJvbSBcIi4vaGFuZGxlVXNlcklucHV0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQmFzaWNzQ2FyZChcbiAgY2l0eSxcbiAgY291bnRyeSxcbiAgdGltZSxcbiAgZGF0ZSxcbiAgdGVtcCxcbiAgdGVtcEZlZWxzLFxuICB0ZW1wVW5pdCxcbiAgZm9yRmF2TGlzdFxuKSB7XG4gIGxldCBiYXNpY3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXNpY3MuY2xhc3NMaXN0LmFkZChcImJhc2ljc1wiKTtcblxuICBsZXQgYmFzaWNzQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBiYXNpY3NDaXR5LmlubmVyVGV4dCA9IGAke2NpdHl9YDtcbiAgYmFzaWNzQ2l0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNpdHlcIik7XG4gIGJhc2ljc0NpdHkuY2xhc3NMaXN0LmFkZChcImNpdHlcIik7XG4gIGxldCBiYXNpY3NDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc0NvdW50cnkuaW5uZXJUZXh0ID0gYCR7Y291bnRyeX1gO1xuICBsZXQgYmFzaWNzVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBiYXNpY3NUaW1lLmlubmVyVGV4dCA9IGAke3RpbWV9YDtcbiAgbGV0IGJhc2ljc0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYmFzaWNzRGF0ZS5pbm5lclRleHQgPSBgJHtkYXRlfWA7XG4gIGxldCByZXRyaWV2YWxUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJldHJpZXZhbFRpbWUuaW5uZXJUZXh0ID0gYExhc3QgdXBkYXRlOiAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX1gO1xuICBsZXQgdGVtcFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbXBUZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHt0ZW1wfSAke3RlbXBVbml0fWA7XG4gIGxldCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbXBGZWVsc0xpa2UuaW5uZXJUZXh0ID0gYCR7dGVtcEZlZWxzfSAke3RlbXBVbml0fWA7XG4gIGxldCBmZWVsc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZlZWxzTGFiZWwuaW5uZXJUZXh0ID0gXCJGZWVscyBsaWtlOiBcIjtcblxuICBsZXQgYmFzaWNzVGl0bGVDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJhc2ljc1RpdGxlQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBiYXNpY3NEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJhc2ljc1RlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFzaWNzVGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImJhc2ljcy10ZW1wZXJhdHVyZVwiKTtcbiAgYmFzaWNzVGl0bGVDaXR5LmFwcGVuZENoaWxkKGJhc2ljc0NpdHkpO1xuICBiYXNpY3NUaXRsZUNvdW50cnkuYXBwZW5kQ2hpbGQoYmFzaWNzQ291bnRyeSk7XG4gIGxldCBmbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZmxhZy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjcm9zc29yaWdpblwiLFxuICAgIFwiQ3Jvc3MtT3JpZ2luLVJlc291cmNlLVBvbGljeTogY3Jvc3Mtb3JpZ2luIFwiXG4gICk7XG4gIGZsYWcuYWx0ID0gYCR7Y291bnRyeX0gZmxhZ2A7XG4gIGZsYWcuc3JjID0gZ2V0RmxhZyhjb3VudHJ5KTtcbiAgZmxhZy5jbGFzc0xpc3QuYWRkKFwiZmxhZ1wiKTtcblxuICBsZXQgYmFzaWNzRGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXNpY3NEYXRlQW5kVGltZS5hcHBlbmRDaGlsZChiYXNpY3NUaW1lKTtcbiAgYmFzaWNzRGF0ZUFuZFRpbWUuYXBwZW5kQ2hpbGQoYmFzaWNzRGF0ZSk7XG5cbiAgYmFzaWNzLmFwcGVuZENoaWxkKGJhc2ljc1RpdGxlQ2l0eSk7XG4gIGJhc2ljc0RldGFpbHMuYXBwZW5kQ2hpbGQoZmxhZyk7XG4gIGJhc2ljc0RldGFpbHMuYXBwZW5kQ2hpbGQoYmFzaWNzRGF0ZUFuZFRpbWUpO1xuICBiYXNpY3NEZXRhaWxzLmFwcGVuZENoaWxkKHJldHJpZXZhbFRpbWUpO1xuICBiYXNpY3MuYXBwZW5kQ2hpbGQoYmFzaWNzRGV0YWlscyk7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKHRlbXBUZW1wZXJhdHVyZSk7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGZlZWxzTGFiZWwpO1xuICBiYXNpY3NUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh0ZW1wRmVlbHNMaWtlKTtcbiAgYmFzaWNzLmFwcGVuZENoaWxkKGJhc2ljc1RlbXBlcmF0dXJlKTtcblxuICBpZiAoZm9yRmF2TGlzdCkge1xuICAgIGJhc2ljcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IHNlYXJjaGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gICAgICBzZWFyY2hiYXIudmFsdWUgPSBcIlwiO1xuICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oY2l0eSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYmFzaWNzO1xufVxuIiwiaW1wb3J0IENsb3VkaW5lc3NJY29uIGZyb20gXCIuL2Nsb3VkLW91dGxpbmUuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xvdWRzQ2FyZChjbG91ZGluZXNzKSB7XG4gIGxldCBjbG91ZFN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvdWRTdGF0cy5jbGFzc0xpc3QuYWRkKFwiY2xvdWRTdGF0c1wiKTtcbiAgbGV0IGNsb3VkaW5lc3NJY29uID0gbmV3IEltYWdlKCk7XG4gIGNsb3VkaW5lc3NJY29uLmFsdCA9IFwiQ2xvdWRpbmVzcyBpY29uXCI7XG4gIGNsb3VkaW5lc3NJY29uLnNyYyA9IENsb3VkaW5lc3NJY29uO1xuICBsZXQgY2xvdWRpbmVzc0Nsb3VkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjbG91ZGluZXNzQ2xvdWRzLmlubmVyVGV4dCA9IGBDbG91ZGluZXNzOiAke2Nsb3VkaW5lc3N9ICVgO1xuICBjbG91ZFN0YXRzLmFwcGVuZENoaWxkKGNsb3VkaW5lc3NJY29uKTtcbiAgY2xvdWRTdGF0cy5hcHBlbmRDaGlsZChjbG91ZGluZXNzQ2xvdWRzKTtcbiAgcmV0dXJuIGNsb3VkU3RhdHM7XG59XG4iLCJpbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgZ2V0Q2FyZEZvckZhdkxpc3QgfSBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNGYXZMaXN0IH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VGYXZMaXN0KCkge1xuICBsZXQgdW5pdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWV0cmljXCIpKTtcbiAgbGV0IG1ldHJpYyA9IFwiXCI7XG4gIHVuaXRzID8gKG1ldHJpYyA9IFwibWV0cmljXCIpIDogKG1ldHJpYyA9IFwiaW1wZXJpYWxcIik7XG4gIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgY2l0aWVzLmZvckVhY2goYXN5bmMgZnVuY3Rpb24gKGNpdHkpIHtcbiAgICBsZXQgY2l0eUNhcmQgPSBhd2FpdCBnZXRDYXJkRm9yRmF2TGlzdChjaXR5LCBtZXRyaWMpO1xuICAgIGdldE9wdGlvbnNGYXZMaXN0KCk7XG4gICAgbGV0IGZhdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzLWJhclwiKTtcbiAgICBmYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWRkZW5cIik7XG4gICAgcmVzdWx0LmFwcGVuZENoaWxkKGNpdHlDYXJkKTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUdpZkNhcmQoZ2lmU3JjKSB7XG4gIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5hbHQgPSBcIndlYXRoZXIgZ2lmXCI7XG4gIGltYWdlLnNyYyA9IGdpZlNyYztcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZ2lmXCIpO1xuICByZXR1cm4gaW1hZ2U7XG59XG4iLCJpbXBvcnQgTmV3TW9vbiBmcm9tIFwiLi9uZXctbW9vbi5zdmdcIjtcbmltcG9ydCBXYXhpbmdDcmVzY2VudE1vb24gZnJvbSBcIi4vd2F4aW5nLWNyZXNlbnQtbW9vbi5zdmdcIjtcbmltcG9ydCBGaXJzdFF1YXJ0ZXJNb29uIGZyb20gXCIuL2ZpcnN0LXF1YXJ0ZXItbW9vbi5zdmdcIjtcbmltcG9ydCBXYXhpbmdHaWJib3VzTW9vbiBmcm9tIFwiLi93YXhpbmctZ2liYm91cy1tb29uLnN2Z1wiO1xuaW1wb3J0IEZ1bGxNb29uIGZyb20gXCIuL2Z1bGwtbW9vbi5zdmdcIjtcbmltcG9ydCBXYW5pbmdHaWJib3VzTW9vbiBmcm9tIFwiLi93YW5pbmctZ2liYm91cy1tb29uLnN2Z1wiO1xuaW1wb3J0IFRoaXJkUXVhcnRlck1vb24gZnJvbSBcIi4vdGhpcmQtcXVhcnRlci1tb29uLnN2Z1wiO1xuaW1wb3J0IFdhbmluZ0NyZXNjZW50IGZyb20gXCIuL3dhbmluZy1jcmVzY2VudC1tb29uLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1vb25QaGFzZUNhcmQobW9vbnBoYXNlKSB7XG4gIGxldCBtb29uUGhhc2VDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9vblBoYXNlQ2FyZC5jbGFzc0xpc3QuYWRkKFwibW9vbi1waGFzZS1jYXJkXCIpO1xuXG4gIGxldCBtb29uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBtb29uSWNvbi5hbHQgPSBcIk1vb24gcGhhc2UgaWNvblwiO1xuXG4gIGxldCBwaGFzZU5hbWU7XG5cbiAgaWYgKG1vb25waGFzZSA9PSAwKSB7XG4gICAgbW9vbkljb24uc3JjID0gTmV3TW9vbjtcbiAgICBwaGFzZU5hbWUgPSBcIk5ldyBNb29uXCI7XG4gIH1cbiAgaWYgKG1vb25waGFzZSA+IDAgJiYgbW9vbnBoYXNlIDwgMC4yNSkge1xuICAgIG1vb25JY29uLnNyYyA9IFdheGluZ0NyZXNjZW50TW9vbjtcbiAgICBwaGFzZU5hbWUgPSBcIldheGluZyBDcmVzY2VudFwiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPT0gMC4yNSkge1xuICAgIG1vb25JY29uLnNyYyA9IEZpcnN0UXVhcnRlck1vb247XG4gICAgcGhhc2VOYW1lID0gXCJGaXJzdCBRdWFydGVyXCI7XG4gIH1cbiAgaWYgKG1vb25waGFzZSA+IDAuMjUgJiYgbW9vbnBoYXNlIDwgMC41KSB7XG4gICAgbW9vbkljb24uc3JjID0gV2F4aW5nR2liYm91c01vb247XG4gICAgcGhhc2VOYW1lID0gXCJXYXhpbmcgR2liYm91c1wiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPT0gMC41KSB7XG4gICAgbW9vbkljb24uc3JjID0gRnVsbE1vb247XG4gICAgcGhhc2VOYW1lID0gXCJGdWxsIE1vb25cIjtcbiAgfVxuICBpZiAobW9vbnBoYXNlID4gMC41ICYmIG1vb25waGFzZSA8IDAuNzUpIHtcbiAgICBtb29uSWNvbi5zcmMgPSBXYW5pbmdHaWJib3VzTW9vbjtcbiAgICBwaGFzZU5hbWUgPSBcIldhbmluZyBHaWJib3VzXCI7XG4gIH1cbiAgaWYgKG1vb25waGFzZSA9PSAwLjc1KSB7XG4gICAgbW9vbkljb24uc3JjID0gVGhpcmRRdWFydGVyTW9vbjtcbiAgICBwaGFzZU5hbWUgPSBcIkxhc3QgUXVhcnRlclwiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPiAwLjc1ICYmIG1vb25waGFzZSA8PSAxKSB7XG4gICAgbW9vbkljb24uc3JjID0gV2FuaW5nQ3Jlc2NlbnQ7XG4gICAgcGhhc2VOYW1lID0gXCJXYW5pbmcgQ3Jlc2NlbnRcIjtcbiAgfVxuXG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHtwaGFzZU5hbWV9YDtcblxuICBtb29uUGhhc2VDYXJkLmFwcGVuZENoaWxkKG1vb25JY29uKTtcbiAgbW9vblBoYXNlQ2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIG1vb25QaGFzZUNhcmQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZU92ZXJ2aWV3Q2FyZCh3ZWF0aGVyKSB7XG4gIGxldCBvdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJ2aWV3LmNsYXNzTGlzdC5hZGQoXCJvdmVydmlld1wiKTtcbiAgbGV0IG92ZXJ2aWV3V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBvdmVydmlld1dlYXRoZXIuaW5uZXJUZXh0ID0gYCR7d2VhdGhlcn1gO1xuICBvdmVydmlldy5hcHBlbmRDaGlsZChvdmVydmlld1dlYXRoZXIpO1xuXG4gIHJldHVybiBvdmVydmlldztcbn1cbiIsImltcG9ydCBSYWluSWNvbiBmcm9tIFwiLi9yYWluLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhaW5DYXJkKHJhaW5Wb2wxaCwgcmFpblZvbDNoKSB7XG4gIGxldCByYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJhaW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJyYWluLWNhcmRcIik7XG5cbiAgbGV0IHJhaW5JY29uID0gbmV3IEltYWdlKCk7XG4gIHJhaW5JY29uLmFsdCA9IFwiUmFpbiBpY29uXCI7XG4gIHJhaW5JY29uLnNyYyA9IFJhaW5JY29uO1xuXG4gIGxldCByYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiUmFpbiB2b2x1bWVcIjtcblxuICBsZXQgcmFpbjFoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJhaW4xaC5pbm5lclRleHQgPSBgTGFzdCBob3VyOiAke3JhaW5Wb2wxaH0gbW1gO1xuXG4gIHJhaW5JbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmFpbkluZm8uYXBwZW5kQ2hpbGQocmFpbjFoKTtcblxuICBpZiAocmFpblZvbDNoKSB7XG4gICAgbGV0IHJhaW4zaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJhaW4zaC5pbm5lclRleHQgPSBgTGFzdCAzaDogJHtyYWluVm9sM2h9YDtcbiAgICByYWluSW5mby5hcHBlbmRDaGlsZChyYWluM2gpO1xuICB9XG5cbiAgcmFpbkNhcmQuYXBwZW5kQ2hpbGQocmFpbkljb24pO1xuICByYWluQ2FyZC5hcHBlbmRDaGlsZChyYWluSW5mbyk7XG5cbiAgcmV0dXJuIHJhaW5DYXJkO1xufVxuIiwiaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIi4vc2VhcmNoLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlYXJjaEJhcigpIHtcbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXJcIik7XG4gIGxldCBzZWFyY2hJY29uID0gbmV3IEltYWdlKCk7XG4gIHNlYXJjaEljb24uYWx0ID0gXCJTZWFyY2ggSWNvblwiO1xuICBzZWFyY2hJY29uLnNyYyA9IFNlYXJjaEljb247XG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcblxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbik7XG4gIGNvbnN0IHNlYXJjaEJhcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXIgPiBpbnB1dFwiKTtcbiAgc2VhcmNoQmFySW5wdXQub25mb2N1cyA9ICgpID0+IHtcbiAgICBzZWFyY2hCYXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHNlYXJjaEljb24uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IG1ha2VBdXRvUmVmcmVzaFNldHRpbmcgfSBmcm9tIFwiLi9zZXR0aW5nQXV0b1JlZnJlc2hcIjtcbmltcG9ydCB7IG1ha2VTb3J0U2V0dGluZyB9IGZyb20gXCIuL3NldHRpbmdTb3J0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2V0dGluZ3NCYXIoKSB7XG4gIGxldCBzZXR0aW5nc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHRpbmdzQmFyLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5ncy1iYXJcIik7XG5cbiAgbGV0IGF1dG9SZWZTZXR0aW5nID0gbWFrZUF1dG9SZWZyZXNoU2V0dGluZygpO1xuICBzZXR0aW5nc0Jhci5hcHBlbmRDaGlsZChhdXRvUmVmU2V0dGluZyk7XG5cbiAgbGV0IHNvcnRTZXR0aW5nID0gbWFrZVNvcnRTZXR0aW5nKCk7XG4gIHNldHRpbmdzQmFyLmFwcGVuZENoaWxkKHNvcnRTZXR0aW5nKTtcblxuICBzZXR0aW5nc0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGNsaWNrKSA9PiB7XG4gICAgY2xpY2suc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXR0aW5nc0Jhcjtcbn1cbiIsImltcG9ydCBTbm93SWNvbiBmcm9tIFwiLi9zbm93LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNub3dDYXJkKHNub3dWb2wxaCwgc25vd1ZvbDNoKSB7XG4gIGxldCBzbm93Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNub3dDYXJkLmNsYXNzTGlzdC5hZGQoXCJzbm93LWNhcmRcIik7XG5cbiAgbGV0IHNub3dJY29uID0gbmV3IEltYWdlKCk7XG4gIHNub3dJY29uLmFsdCA9IFwiU25vdyBpY29uXCI7XG4gIHNub3dJY29uLnNyYyA9IFNub3dJY29uO1xuXG4gIGxldCBzbm93SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiU25vdyB2b2x1bWVcIjtcblxuICBsZXQgc25vdzFoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNub3cxaC5pbm5lclRleHQgPSBgTGFzdCBob3VyOiAke3Nub3dWb2wxaH0gbW1gO1xuXG4gIHNub3dJbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgc25vd0luZm8uYXBwZW5kQ2hpbGQoc25vdzFoKTtcblxuICBpZiAoc25vd1ZvbDNoKSB7XG4gICAgbGV0IHNub3czaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNub3czaC5pbm5lclRleHQgPSBgTGFzdCAzaDogJHtzbm93Vm9sM2h9YDtcbiAgICBzbm93SW5mby5hcHBlbmRDaGlsZChzbm93M2gpO1xuICB9XG5cbiAgc25vd0NhcmQuYXBwZW5kQ2hpbGQoc25vd0ljb24pO1xuICBzbm93Q2FyZC5hcHBlbmRDaGlsZChzbm93SW5mbyk7XG5cbiAgcmV0dXJuIHNub3dDYXJkO1xufVxuIiwiaW1wb3J0IFN1bnJpc2VJY29uIGZyb20gXCIuL3N1bnJpc2Uuc3ZnXCI7XG5pbXBvcnQgU3Vuc2V0SWNvbiBmcm9tIFwiLi9zdW5zZXQuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3VuQ2FyZChzdW5yaXNlLCBzdW5zZXQpIHtcbiAgbGV0IHN1blN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VuU3RhdHMuY2xhc3NMaXN0LmFkZChcInN1blN0YXRzXCIpO1xuXG4gIGxldCBzdW5yaXNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBzdW5zZXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBsZXQgc3VucmlzZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc3VucmlzZUljb24uYWx0ID0gXCJTdW5yaXNlIGljb25cIjtcbiAgc3VucmlzZUljb24uc3JjID0gU3VucmlzZUljb247XG5cbiAgbGV0IHN1bnNldEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc3Vuc2V0SWNvbi5hbHQgPSBcIlN1bnNldCBpY29uXCI7XG4gIHN1bnNldEljb24uc3JjID0gU3Vuc2V0SWNvbjtcblxuICBsZXQgc3VuU3RhdHNTdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1blN0YXRzU3VucmlzZS5pbm5lclRleHQgPSBgU3VucmlzZTogJHtzdW5yaXNlfWA7XG5cbiAgbGV0IHN1blN0YXRzU3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1blN0YXRzU3Vuc2V0LmlubmVyVGV4dCA9IGBTdW5zZXQ6ICR7c3Vuc2V0fWA7XG5cbiAgc3VucmlzZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VucmlzZUljb24pO1xuICBzdW5yaXNlRWxlbWVudC5hcHBlbmRDaGlsZChzdW5TdGF0c1N1bnJpc2UpO1xuXG4gIHN1bnNldEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Vuc2V0SWNvbik7XG4gIHN1bnNldEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VuU3RhdHNTdW5zZXQpO1xuXG4gIHN1blN0YXRzLmFwcGVuZENoaWxkKHN1bnJpc2VFbGVtZW50KTtcbiAgc3VuU3RhdHMuYXBwZW5kQ2hpbGQoc3Vuc2V0RWxlbWVudCk7XG4gIHJldHVybiBzdW5TdGF0cztcbn1cbiIsImltcG9ydCBVVkluZGV4SWNvbiBmcm9tIFwiLi9VVkljb24uc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVVZJbmRleENhcmQodXZpbmRleCkge1xuICBsZXQgdXZJbmRleENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1dkluZGV4Q2FyZC5jbGFzc0xpc3QuYWRkKFwidXYtaW5kZXgtY2FyZFwiKTtcblxuICBsZXQgdXZJY29uID0gbmV3IEltYWdlKCk7XG4gIHV2SWNvbi5hbHQgPSBcIlVWIGluZGV4IGljb25cIjtcbiAgdXZJY29uLnNyYyA9IFVWSW5kZXhJY29uO1xuXG4gIGxldCBkZXNjcmlwdGlvbjtcbiAgaWYgKHV2aW5kZXggPD0gMikge1xuICAgIGRlc2NyaXB0aW9uID0gXCIobG93KVwiO1xuICB9XG4gIGlmICh1dmluZGV4ID4gMiAmJiB1dmluZGV4IDw9IDUpIHtcbiAgICBkZXNjcmlwdGlvbiA9IFwiKG1vZGVyYXRlKVwiO1xuICB9XG4gIGlmICh1dmluZGV4ID4gNSAmJiB1dmluZGV4IDw9IDcpIHtcbiAgICBkZXNjcmlwdGlvbiA9IFwiKGhpZ2gpXCI7XG4gIH1cbiAgaWYgKHV2aW5kZXggPiA3ICYmIHV2aW5kZXggPD0gMTApIHtcbiAgICBkZXNjcmlwdGlvbiA9IFwiKHZlcnkgaGlnaClcIjtcbiAgfVxuICBpZiAodXZpbmRleCA+IDEwKSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIihleHRyZW1lKVwiO1xuICB9XG5cbiAgbGV0IHV2SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdXZJbmRleC5pbm5lclRleHQgPSBgVVYgSW5kZXg6ICR7dXZpbmRleH0gJHtkZXNjcmlwdGlvbn1gO1xuXG4gIHV2SW5kZXhDYXJkLmFwcGVuZENoaWxkKHV2SWNvbik7XG4gIHV2SW5kZXhDYXJkLmFwcGVuZENoaWxkKHV2SW5kZXgpO1xuXG4gIHJldHVybiB1dkluZGV4Q2FyZDtcbn1cbiIsImltcG9ydCBXaW5kSWNvbiBmcm9tIFwiLi93aW5kLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVdpbmRDYXJkKHdpbmQpIHtcbiAgbGV0IHdpbmRTdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbmRTdGF0cy5jbGFzc0xpc3QuYWRkKFwid2luZFN0YXRzXCIpO1xuICBsZXQgd2luZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgd2luZEljb24uYWx0ID0gXCJXaW5kIGljb25cIjtcbiAgd2luZEljb24uc3JjID0gV2luZEljb247XG4gIGxldCB3aW5kU3RhdHNTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3aW5kU3RhdHNTcGVlZC5pbm5lclRleHQgPSBgV2luZCBTcGVlZDogJHt3aW5kfSBtL3NgO1xuICB3aW5kU3RhdHMuYXBwZW5kQ2hpbGQod2luZEljb24pO1xuICB3aW5kU3RhdHMuYXBwZW5kQ2hpbGQod2luZFN0YXRzU3BlZWQpO1xuICByZXR1cm4gd2luZFN0YXRzO1xufVxuIiwiaW1wb3J0IGZhdm9yaXRlSWNvbiBmcm9tIFwiLi9mYXYuc3ZnXCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9uc1VuZmF2b3JpdGUgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBzb3J0QXRvWiB9IGZyb20gXCIuL3NldHRpbmdTb3J0XCI7XG5pbXBvcnQgeyBzb3J0WnRvQSB9IGZyb20gXCIuL3NldHRpbmdTb3J0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmF2b3JpdGVPcHRpb24oKSB7XG4gIGxldCBmYXZvcml0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZhdm9yaXRlT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tZmF2b3JpdGVcIik7XG4gIGxldCBmYXZvcml0ZUltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZhdm9yaXRlSW1hZ2UuYWx0ID0gXCJGYXZvcml0ZSBpY29uXCI7XG4gIGZhdm9yaXRlSW1hZ2Uuc3JjID0gZmF2b3JpdGVJY29uO1xuICBmYXZvcml0ZU9wdGlvbi5hcHBlbmRDaGlsZChmYXZvcml0ZUltYWdlKTtcblxuICBmYXZvcml0ZU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgIGhhbmRsZVNvcnRBY3Rpb24oY2l0eSk7XG4gICAgbGV0IGZhdm9yaXRlc0JhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gICAgaWYgKGZhdm9yaXRlc0JhckVsZW1lbnQpIHtcbiAgICAgIGZhdm9yaXRlc0Jhci5yZWZyZXNoRmF2b3JpdGVzQmFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhdm9yaXRlc0Jhci5tYWtlRmF2b3JpdGVzQmFyKCk7XG4gICAgfVxuICAgIGdldE9wdGlvbnNVbmZhdm9yaXRlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBmYXZvcml0ZU9wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNvcnRBY3Rpb24oY2l0eSkge1xuICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gIGlmIChjaXR5KSB7XG4gICAgY2l0aWVzLnB1c2goY2l0eS5pbm5lclRleHQpO1xuICB9XG4gIGlmIChjaXRpZXMubGVuZ3RoID4gMCkge1xuICAgIGxldCBjaXRpZXNTb3J0ZWQ7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSA9PSBcImF0b3pcIikge1xuICAgICAgY2l0aWVzU29ydGVkID0gc29ydEF0b1ooY2l0aWVzKTtcbiAgICB9XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSA9PSBcInp0b2FcIikge1xuICAgICAgY2l0aWVzU29ydGVkID0gc29ydFp0b0EoY2l0aWVzKTtcbiAgICB9XG4gICAgbGV0IGNpdGllc1N0cmlnaWZpZWQgPSBKU09OLnN0cmluZ2lmeShjaXRpZXNTb3J0ZWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIGAke2NpdGllc1N0cmlnaWZpZWR9YCk7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgaWYgKGluZm8pIHtcbiAgICAgIGZhdm9yaXRlc0Jhci5yZWZyZXNoRmF2b3JpdGVzQmFyKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgcmVsb2FkSWNvbiBmcm9tIFwiLi9yZWxvYWQuc3ZnXCI7XG5pbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJlbG9hZE9wdGlvbigpIHtcbiAgbGV0IHJlbG9hZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCByZWxvYWRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICByZWxvYWRJbWFnZS5hbHQgPSBcIlJlbG9hZCBpY29uXCI7XG4gIHJlbG9hZEltYWdlLnNyYyA9IHJlbG9hZEljb247XG5cbiAgcmVsb2FkT3B0aW9uLmFwcGVuZENoaWxkKHJlbG9hZEltYWdlKTtcblxuICByZWxvYWRPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1yZWxvYWRcIik7XG5cbiAgcmVsb2FkT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgaWYgKGluZm8pIHtcbiAgICAgIGxldCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuICAgICAgbGV0IGNpdHlOYW1lID0gY2l0eS5pbm5lclRleHQ7XG4gICAgICBjbGVhbihcIi5yZXN1bHRcIik7XG4gICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbihjaXR5TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFuKFwiLnJlc3VsdFwiKTtcbiAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVsb2FkT3B0aW9uO1xufVxuIiwiaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiLi9zZXR0aW5ncy5zdmdcIjtcbmltcG9ydCBTZXR0aW5nc09wZW5JY29uIGZyb20gXCIuL3NldHRpbmdzLW9wZW4uc3ZnXCI7XG5pbXBvcnQgeyBtYWtlU2V0dGluZ3NCYXIgfSBmcm9tIFwiLi9tYWtlU2V0dGluZ3NCYXJcIjtcbmltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zVW5mYXZvcml0ZSB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXR0aW5nc09wdGlvbigpIHtcbiAgbGV0IHNldHRpbmdzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0dGluZ3NPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1zZXR0aW5nc1wiKTtcbiAgbGV0IHNldHRpbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc2V0dGluZ3NJbWFnZS5hbHQgPSBcIlNldHRpbmdzIGljb25cIjtcbiAgc2V0dGluZ3NJbWFnZS5zcmMgPSBTZXR0aW5nc0ljb247XG4gIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzSW1hZ2UpO1xuXG4gIHNldHRpbmdzT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2spID0+IHtcbiAgICBoYW5kbGVTZXR0aW5nT3B0aW9uQ2xpY2soY2xpY2spO1xuICB9KTtcblxuICByZXR1cm4gc2V0dGluZ3NPcHRpb247XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNldHRpbmdPcHRpb25DbGljayhjbGljaykge1xuICBjbGljay5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGxldCBmYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gIGxldCBzZXR0aW5nc09wZW5PcHRpb24gPSBtYWtlU2V0dGluZ3NPcGVuT3B0aW9uKCk7XG4gIGxldCBvcHRpb25zQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuICBvcHRpb25zQmFyLnJlbW92ZUNoaWxkKG9wdGlvbnNCYXIuZmlyc3RDaGlsZCk7XG4gIG9wdGlvbnNCYXIucHJlcGVuZChzZXR0aW5nc09wZW5PcHRpb24pO1xuICBsZXQgc2V0dGluZ3NCYXIgPSBtYWtlU2V0dGluZ3NCYXIoKTtcbiAgaWYgKGZhdkJhcikge1xuICAgIGhlYWRlci5pbnNlcnRCZWZvcmUoc2V0dGluZ3NCYXIsIGZhdkJhcik7XG4gIH0gZWxzZSB7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNldHRpbmdzQmFyKTtcbiAgfVxuICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdXRPZlNldHRpbmdzQ2xpY2ssIHtcbiAgICBvbmNlOiB0cnVlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU91dE9mU2V0dGluZ3NDbGljaygpIHtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGxldCBzZXR0aW5nc0JhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzLWJhclwiKTtcbiAgaWYgKHNldHRpbmdzQmFyRWxlbWVudCkge1xuICAgIGxldCBzZXR0aW5nc09wdGlvbiA9IG1ha2VTZXR0aW5nc09wdGlvbigpO1xuICAgIGxldCBvcHRpb25zQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuICAgIG9wdGlvbnNCYXIucmVtb3ZlQ2hpbGQob3B0aW9uc0Jhci5maXJzdENoaWxkKTtcbiAgICBvcHRpb25zQmFyLnByZXBlbmQoc2V0dGluZ3NPcHRpb24pO1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChzZXR0aW5nc0JhckVsZW1lbnQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2V0dGluZ3NPcGVuT3B0aW9uKCkge1xuICBsZXQgc2V0dGluZ3NPcGVuT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0dGluZ3NPcGVuT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tc2V0dGluZ3Mtb3BlblwiKTtcbiAgbGV0IHNldHRpbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc2V0dGluZ3NJbWFnZS5hbHQgPSBcIlNldHRpbmdzIGljb25cIjtcbiAgc2V0dGluZ3NJbWFnZS5zcmMgPSBTZXR0aW5nc09wZW5JY29uO1xuICBzZXR0aW5nc09wZW5PcHRpb24uYXBwZW5kQ2hpbGQoc2V0dGluZ3NJbWFnZSk7XG5cbiAgc2V0dGluZ3NPcGVuT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2spID0+IHtcbiAgICBjbGljay5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgc2V0dGluZ3NPcHRpb24gPSBtYWtlU2V0dGluZ3NPcHRpb24oKTtcbiAgICBsZXQgb3B0aW9uc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc1wiKTtcbiAgICBvcHRpb25zQmFyLnJlbW92ZUNoaWxkKG9wdGlvbnNCYXIuZmlyc3RDaGlsZCk7XG4gICAgb3B0aW9uc0Jhci5wcmVwZW5kKHNldHRpbmdzT3B0aW9uKTtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgICBsZXQgc2V0dGluZ3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzLWJhclwiKTtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoc2V0dGluZ3NCYXIpO1xuICB9KTtcblxuICByZXR1cm4gc2V0dGluZ3NPcGVuT3B0aW9uO1xufVxuIiwiaW1wb3J0IEZhdnNJY29uIGZyb20gXCIuL2ZhdnMuc3ZnXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zRmF2TGlzdCB9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7IG1ha2VGYXZMaXN0IH0gZnJvbSBcIi4vbWFrZUZhdkxpc3RcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcbmltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zVW5mYXZvcml0ZSB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTaG93RmF2c09wdGlvbigpIHtcbiAgbGV0IGZhdnNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYXZzT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tZmF2c1wiKTtcbiAgbGV0IGZhdnNJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBmYXZzSW1hZ2UuYWx0ID0gXCJTaG93IGZhdm9yaXRlcyBpY29uXCI7XG4gIGZhdnNJbWFnZS5zcmMgPSBGYXZzSWNvbjtcbiAgZmF2c09wdGlvbi5hcHBlbmRDaGlsZChmYXZzSW1hZ2UpO1xuXG4gIGZhdnNPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICBtYWtlRmF2TGlzdCgpO1xuICB9KTtcblxuICByZXR1cm4gZmF2c09wdGlvbjtcbn1cbiIsImltcG9ydCBoYW5kbGVVc2VySW5wdXQgZnJvbSBcIi4vaGFuZGxlVXNlcklucHV0XCI7XG5pbXBvcnQgdGVtcGVyYXR1cmVJY29uIGZyb20gXCIuL3RoZXJtb21ldGVyLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgeyBtYWtlRmF2TGlzdCB9IGZyb20gXCIuL21ha2VGYXZMaXN0XCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVGVtcGVyYXR1cmVPcHRpb24oKSB7XG4gIGxldCB0ZW1wZXJhdHVyZU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGVtcEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdGVtcEljb24uYWx0ID0gXCJUZW1wZXJhdHVyZSBpY29uXCI7XG4gIHRlbXBJY29uLnNyYyA9IHRlbXBlcmF0dXJlSWNvbjtcblxuICBsZXQgbWV0cmljID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldHJpY1wiKSk7XG5cbiAgbGV0IGNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNlbHNpdXMuY2xhc3NMaXN0LmFkZChcImNlbHNpdXMtbGFiZWxcIik7XG4gIGNlbHNpdXMuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY2Vsc2l1c1wiKTtcbiAgbGV0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcImZhaHJlbmhlaXQtbGFiZWxcIik7XG4gIGZhaHJlbmhlaXQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZmFocmVuaGVpdFwiKTtcbiAgY2Vsc2l1cy5pbm5lclRleHQgPSBcIsKwQ1wiO1xuICBmYWhyZW5oZWl0LmlubmVyVGV4dCA9IFwiwrBGXCI7XG5cbiAgaWYgKG1ldHJpYykge1xuICAgIGNlbHNpdXMuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLW1ldHJpY1wiKTtcbiAgfSBlbHNlIHtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1tZXRyaWNcIik7XG4gIH1cbiAgY2Vsc2l1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIFwidHJ1ZVwiKTtcbiAgICBsZXQgZGlzcGxheWluZ0NpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgaWYgKGRpc3BsYXlpbmdDaXR5KSB7XG4gICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhbihcIi5yZXN1bHRcIik7XG4gICAgICBtYWtlRmF2TGlzdCgpO1xuICAgIH1cbiAgfSk7XG4gIGNlbHNpdXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZXRyaWNcIik7XG5cbiAgaWYgKCFtZXRyaWMpIHtcbiAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1tZXRyaWNcIik7XG4gIH1cbiAgZmFocmVuaGVpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIFwiZmFsc2VcIik7XG4gICAgbGV0IGRpc3BsYXlpbmdDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgIGlmIChkaXNwbGF5aW5nQ2l0eSkge1xuICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYW4oXCIucmVzdWx0XCIpO1xuICAgICAgbWFrZUZhdkxpc3QoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBkaXZDZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGRpdkZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZDZWxzaXVzLmFwcGVuZENoaWxkKGNlbHNpdXMpO1xuICBkaXZGYWhyZW5oZWl0LmFwcGVuZENoaWxkKGZhaHJlbmhlaXQpO1xuXG4gIGxldCB0ZW1wSW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGVtcElucHV0cy5hcHBlbmRDaGlsZChkaXZDZWxzaXVzKTtcbiAgdGVtcElucHV0cy5hcHBlbmRDaGlsZChkaXZGYWhyZW5oZWl0KTtcblxuICB0ZW1wZXJhdHVyZU9wdGlvbnMuYXBwZW5kQ2hpbGQodGVtcEljb24pO1xuICB0ZW1wZXJhdHVyZU9wdGlvbnMuYXBwZW5kQ2hpbGQodGVtcElucHV0cyk7XG5cbiAgdGVtcGVyYXR1cmVPcHRpb25zLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tdGVtcGVyYXR1cmVcIik7XG5cbiAgcmV0dXJuIHRlbXBlcmF0dXJlT3B0aW9ucztcbn1cbiIsImltcG9ydCBVbmZhdm9yaXRlSWNvbiBmcm9tIFwiLi91bmZhdi5zdmdcIjtcbmltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVuZmF2b3JpdGVPcHRpb24oKSB7XG4gIGxldCB1bmZhdm9yaXRlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdW5mYXZvcml0ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXVuZmF2b3JpdGVcIik7XG4gIGxldCB1bmZhdm9yaXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB1bmZhdm9yaXRlSWNvbi5hbHQgPSBcIlJlbW92ZSBmcm9tIGZhdm9yaXRlcyBpY29uXCI7XG4gIHVuZmF2b3JpdGVJY29uLnNyYyA9IFVuZmF2b3JpdGVJY29uO1xuXG4gIHVuZmF2b3JpdGVPcHRpb24uYXBwZW5kQ2hpbGQodW5mYXZvcml0ZUljb24pO1xuXG4gIHVuZmF2b3JpdGVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbiAgICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gICAgbGV0IGNpdGllc0ZpbHRlcmVkID0gY2l0aWVzLmZpbHRlcigoYykgPT4gYyAhPT0gY2l0eS5pbm5lclRleHQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIGAke0pTT04uc3RyaW5naWZ5KGNpdGllc0ZpbHRlcmVkKX1gKTtcbiAgICBmYXZvcml0ZXNCYXIucmVmcmVzaEZhdm9yaXRlc0JhcigpO1xuICAgIGdldE9wdGlvbnModHJ1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB1bmZhdm9yaXRlT3B0aW9uO1xufVxuIiwiaW1wb3J0IHsgbWFrZVRlbXBlcmF0dXJlT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uVGVtcGVyYXR1cmVcIjtcbmltcG9ydCB7IG1ha2VSZWxvYWRPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25SZWxvYWRcIjtcbmltcG9ydCB7IG1ha2VGYXZvcml0ZU9wdGlvbiB9IGZyb20gXCIuL29wdGlvbkZhdm9yaXRlXCI7XG5pbXBvcnQgeyBtYWtlVW5mYXZvcml0ZU9wdGlvbiB9IGZyb20gXCIuL29wdGlvblVuZmF2b3JpdGVcIjtcbmltcG9ydCB7IG1ha2VTaG93RmF2c09wdGlvbiB9IGZyb20gXCIuL29wdGlvblNob3dGYXZzXCI7XG5pbXBvcnQgeyBtYWtlU2V0dGluZ3NPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25TZXR0aW5nc1wiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5jb25zdCBvcHRpb25zRGl2ID0ge1xuICBvcHRpb25zOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIiksXG4gIGdldFRlbXBlcmF0dXJlT3B0aW9ucygpIHtcbiAgICBsZXQgdGVtcGVyYXR1cmVPcHRpb25zID0gbWFrZVRlbXBlcmF0dXJlT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlT3B0aW9ucyk7XG4gIH0sXG4gIGdldFJlbG9hZE9wdGlvbnMoKSB7XG4gICAgbGV0IHJlbG9hZE9wdGlvbiA9IG1ha2VSZWxvYWRPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQocmVsb2FkT3B0aW9uKTtcbiAgfSxcbiAgZ2V0RmF2b3JpdGVPcHRpb24oKSB7XG4gICAgbGV0IGZhdm9yaXRlT3B0aW9uID0gbWFrZUZhdm9yaXRlT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKGZhdm9yaXRlT3B0aW9uKTtcbiAgfSxcbiAgZ2V0VW5GYXZvcml0ZU9wdGlvbigpIHtcbiAgICBsZXQgdW5mYXZvcml0ZU9wdGlvbiA9IG1ha2VVbmZhdm9yaXRlT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKHVuZmF2b3JpdGVPcHRpb24pO1xuICB9LFxuICBnZXRTaG93RmF2c09wdGlvbigpIHtcbiAgICBsZXQgc2hvd0ZhdnNPcHRpb24gPSBtYWtlU2hvd0ZhdnNPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQoc2hvd0ZhdnNPcHRpb24pO1xuICB9LFxuICBnZXRTZXR0aW5nc09wdGlvbigpIHtcbiAgICBsZXQgc2V0dGluZ3NPcHRpb24gPSBtYWtlU2V0dGluZ3NPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQoc2V0dGluZ3NPcHRpb24pO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhhbGwpIHtcbiAgY2xlYW4ob3B0aW9uc0Rpdi5vcHRpb25zKTtcbiAgaWYgKGFsbCkge1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIG9wdGlvbnNEaXYub3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwib3B0aW9ucy1jb21wYWN0XCIpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0UmVsb2FkT3B0aW9ucygpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRGYXZvcml0ZU9wdGlvbigpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRTaG93RmF2c09wdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zRGl2Lm9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShcIm9wdGlvbnMtY29tcGFjdFwiKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0U2V0dGluZ3NPcHRpb24oKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCk7XG4gICAgICBvcHRpb25zRGl2LmdldFJlbG9hZE9wdGlvbnMoKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0RmF2b3JpdGVPcHRpb24oKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG4gICAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICAgIG9wdGlvbnNEaXYuZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc1VuZmF2b3JpdGUoKSB7XG4gIGNsZWFuKG9wdGlvbnNEaXYub3B0aW9ucyk7XG4gIG9wdGlvbnNEaXYub3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwib3B0aW9ucy1jb21wYWN0XCIpO1xuICBvcHRpb25zRGl2LmdldFNldHRpbmdzT3B0aW9uKCk7XG4gIG9wdGlvbnNEaXYuZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCk7XG4gIG9wdGlvbnNEaXYuZ2V0UmVsb2FkT3B0aW9ucygpO1xuICBvcHRpb25zRGl2LmdldFVuRmF2b3JpdGVPcHRpb24oKTtcbiAgb3B0aW9uc0Rpdi5nZXRTaG93RmF2c09wdGlvbigpO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zRmF2TGlzdCgpIHtcbiAgY2xlYW4ob3B0aW9uc0Rpdi5vcHRpb25zKTtcbiAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICBvcHRpb25zRGl2LmdldFJlbG9hZE9wdGlvbnMoKTtcbiAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG59XG5cbmV4cG9ydCB7IGdldE9wdGlvbnMsIGdldE9wdGlvbnNVbmZhdm9yaXRlLCBnZXRPcHRpb25zRmF2TGlzdCB9O1xuIiwiaW1wb3J0IEF1dG9SZWZyZXNoSWNvbiBmcm9tIFwiLi9yZWxvYWQtYXV0by5zdmdcIjtcbmltcG9ydCBoYW5kbGVVc2VySW5wdXQgZnJvbSBcIi4vaGFuZGxlVXNlcklucHV0XCI7XG5pbXBvcnQgeyBoYW5kbGVPdXRPZlNldHRpbmdzQ2xpY2sgfSBmcm9tIFwiLi9vcHRpb25TZXR0aW5nc1wiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUF1dG9SZWZyZXNoU2V0dGluZygpIHtcbiAgbGV0IGF1dG9SZWZTZXR0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBsZXQgYXV0b1JlZkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgYXV0b1JlZkljb24uYWx0ID0gXCJBdXRvLXJlZnJlc2ggaWNvblwiO1xuICBhdXRvUmVmSWNvbi5zcmMgPSBBdXRvUmVmcmVzaEljb247XG5cbiAgbGV0IGF1dG9SZWZMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBhdXRvUmVmTGFiZWwuaW5uZXJUZXh0ID0gXCJBdXRvLXJlZnJlc2g6IFwiO1xuXG4gIGxldCBhdXRvUmVmU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgYXV0b1JlZlNlbGVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LXJlZnJlc2hcIik7XG4gIGF1dG9SZWZTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoY2hhbmdlKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZyZXNoXCIsIEpTT04uc3RyaW5naWZ5KGNoYW5nZS50YXJnZXQudmFsdWUpKTtcbiAgICBhdXRvUmVmcmVzaFNldHVwLmhhbmRsZUF1dG9SZWZyZXNoKGNoYW5nZS50YXJnZXQudmFsdWUpO1xuICAgIGxldCByZWZyZXNoU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC1yZWZyZXNoXCIpO1xuICAgIGxldCBvcHRpb25zID0gcmVmcmVzaFNlbGVjdG9yLmNoaWxkTm9kZXM7XG4gICAgb3B0aW9ucy5mb3JFYWNoKChvKSA9PiB7XG4gICAgICBpZiAoby5nZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgICBvLnJlbW92ZUF0dHJpYnV0ZShcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG8uaW5uZXJUZXh0ID09IGNoYW5nZS50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgby5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgbGV0IG5vZGVzID0gW107XG5cbiAgbGV0IG5ldmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbmV2ZXIuaW5uZXJUZXh0ID0gXCJOZXZlclwiO1xuICBuZXZlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIk5ldmVyXCIpO1xuICBub2Rlcy5wdXNoKG5ldmVyKTtcbiAgbGV0IG9uZU1pbnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9uZU1pbnV0ZS5pbm5lclRleHQgPSBcIkV2ZXJ5IG1pbnV0ZVwiO1xuICBvbmVNaW51dGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSBtaW51dGVcIik7XG4gIG5vZGVzLnB1c2gob25lTWludXRlKTtcbiAgbGV0IGZpdmVNaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZml2ZU1pbnV0ZXMuaW5uZXJUZXh0ID0gXCJFdmVyeSA1IG1pbnV0ZXNcIjtcbiAgZml2ZU1pbnV0ZXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSA1IG1pbnV0ZXNcIik7XG4gIG5vZGVzLnB1c2goZml2ZU1pbnV0ZXMpO1xuICBsZXQgdGVuTWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHRlbk1pbnV0ZXMuaW5uZXJUZXh0ID0gXCJFdmVyeSAxMCBtaW51dGVzXCI7XG4gIHRlbk1pbnV0ZXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSAxMCBtaW51dGVzXCIpO1xuICBub2Rlcy5wdXNoKHRlbk1pbnV0ZXMpO1xuICBsZXQgdGhpcnR5TWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHRoaXJ0eU1pbnV0ZXMuaW5uZXJUZXh0ID0gXCJFdmVyeSAzMCBtaW51dGVzXCI7XG4gIHRoaXJ0eU1pbnV0ZXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSAzMCBtaW51dGVzXCIpO1xuICBub2Rlcy5wdXNoKHRoaXJ0eU1pbnV0ZXMpO1xuICBsZXQgb25lSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9uZUhvdXIuaW5uZXJUZXh0ID0gXCJFdmVyeSBob3VyXCI7XG4gIG9uZUhvdXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSBob3VyXCIpO1xuICBub2Rlcy5wdXNoKG9uZUhvdXIpO1xuICBsZXQgdHdvSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICB0d29Ib3Vycy5pbm5lclRleHQgPSBcIkV2ZXJ5IDIgaG91cnNcIjtcbiAgdHdvSG91cnMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSAyIGhvdXJzXCIpO1xuICBub2Rlcy5wdXNoKHR3b0hvdXJzKTtcbiAgbGV0IHR3ZWx2ZUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgdHdlbHZlSG91cnMuaW5uZXJUZXh0ID0gXCJFdmVyeSAxMiBob3Vyc1wiO1xuICB0d2VsdmVIb3Vycy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IDEyIGhvdXJzXCIpO1xuICBub2Rlcy5wdXNoKHR3ZWx2ZUhvdXJzKTtcbiAgbGV0IG9uZURheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9uZURheS5pbm5lclRleHQgPSBcIkV2ZXJ5IDI0IGhvdXJzXCI7XG4gIG9uZURheS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IDI0IGhvdXJzXCIpO1xuICBub2Rlcy5wdXNoKG9uZURheSk7XG5cbiAgbm9kZXMuZm9yRWFjaCgobikgPT4ge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShuLnZhbHVlKSA9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikpIHtcbiAgICAgIG4uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKG5ldmVyKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZChvbmVNaW51dGUpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKGZpdmVNaW51dGVzKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZCh0ZW5NaW51dGVzKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZCh0aGlydHlNaW51dGVzKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZChvbmVIb3VyKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZCh0d29Ib3Vycyk7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQodHdlbHZlSG91cnMpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKG9uZURheSk7XG5cbiAgYXV0b1JlZlNldHRpbmcuYXBwZW5kQ2hpbGQoYXV0b1JlZkljb24pO1xuICBhdXRvUmVmU2V0dGluZy5hcHBlbmRDaGlsZChhdXRvUmVmTGFiZWwpO1xuICBhdXRvUmVmU2V0dGluZy5hcHBlbmRDaGlsZChhdXRvUmVmU2VsZWN0KTtcblxuICByZXR1cm4gYXV0b1JlZlNldHRpbmc7XG59XG5cbmNvbnN0IGF1dG9SZWZyZXNoU2V0dXAgPSB7XG4gIHRpbWVvdXRJRDogbnVsbCxcbiAgYXV0bzogZmFsc2UsXG4gIGRlbGF5OiA2MDAwMCxcbiAgaGFuZGxlQXV0b1JlZnJlc2goYXV0b1JlZnJlc2hNb2RlKSB7XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IG1pbnV0ZVwiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDA7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSA1IG1pbnV0ZXNcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogNTtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IDEwIG1pbnV0ZXNcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogMTA7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSAzMCBtaW51dGVzXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMCAqIDMwO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgaG91clwiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiA2MDtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IDIgaG91cnNcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogNjAgKiAyO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgMTIgaG91cnNcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogNjAgKiAxMjtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IDI0IGhvdXJzXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMCAqIDYwICogMjQ7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgIT09IFwiTmV2ZXJcIikge1xuICAgICAgdGhpcy50aW1lb3V0SUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IHNlYXJjaGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gICAgICAgIHNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgICB9LCB0aGlzLmRlbGF5KTtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIk5ldmVyXCIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJRCk7XG4gICAgICB0aGlzLnRpbWVvdXRJRCA9IG51bGw7XG4gICAgfVxuICAgIGF1dG9SZWZyZXNoKCk7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBhdXRvUmVmcmVzaCgpIHtcbiAgaWYgKGF1dG9SZWZyZXNoU2V0dXAudGltZW91dElEKSB7XG4gICAgY2xlYXJUaW1lb3V0KGF1dG9SZWZyZXNoU2V0dXAudGltZW91dElEKTtcbiAgICBhdXRvUmVmcmVzaFNldHVwLnRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZyZXNoXCIpKSAhPT0gXCJOZXZlclwiKSB7XG4gICAgICAgIGxldCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaGJhciA+IGlucHV0XCIpO1xuICAgICAgICBzZWFyY2hiYXIudmFsdWUgPSBcIlwiO1xuICAgICAgICBsZXQgY2l0eTtcbiAgICAgICAgbGV0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKS5pbm5lclRleHQ7XG4gICAgICAgICAgY2xlYW4oXCIucmVzdWx0XCIpO1xuICAgICAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKGNpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsZWFuKFwiLnJlc3VsdFwiKTtcbiAgICAgICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbigpO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9SZWZyZXNoKCk7XG4gICAgICB9XG4gICAgfSwgYXV0b1JlZnJlc2hTZXR1cC5kZWxheSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0b1JlZnJlc2hTZXR1cDtcbiIsImltcG9ydCBTb3J0SWNvbiBmcm9tIFwiLi9zb3J0LnN2Z1wiO1xuaW1wb3J0IHsgaGFuZGxlU29ydEFjdGlvbiB9IGZyb20gXCIuL29wdGlvbkZhdm9yaXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU29ydFNldHRpbmcoKSB7XG4gIGxldCBzb3J0U2V0dGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHNvcnRJY29uID0gbmV3IEltYWdlKCk7XG4gIHNvcnRJY29uLmFsdCA9IFwiU29ydCBzZXR0aW5nIGljb25cIjtcbiAgc29ydEljb24uc3JjID0gU29ydEljb247XG5cbiAgbGV0IHNvcnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzb3J0TGFiZWwuaW5uZXJUZXh0ID0gXCJTb3J0IEZhdm9yaXRlczogXCI7XG5cbiAgbGV0IHNvcnRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzb3J0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGNoYW5nZSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic29ydFwiLCBKU09OLnN0cmluZ2lmeShjaGFuZ2UudGFyZ2V0LnZhbHVlKSk7XG4gICAgaGFuZGxlU29ydEFjdGlvbigpO1xuICB9KTtcblxuICBsZXQgbm9kZXMgPSBbXTtcblxuICBsZXQgbmFtZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICBuYW1lR3JvdXAuc2V0QXR0cmlidXRlKFwibGFiZWxcIiwgXCJBbHBoYWJldGljYWwgT3JkZXJcIik7XG4gIGxldCBhc2NlbmRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgYXNjZW5kaW5nTmFtZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImFzY2VuZGluZ05hbWVcIik7XG4gIGFzY2VuZGluZ05hbWUuaW5uZXJUZXh0ID0gXCJBIHRvIFpcIjtcbiAgYXNjZW5kaW5nTmFtZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImF0b3pcIik7XG4gIG5vZGVzLnB1c2goYXNjZW5kaW5nTmFtZSk7XG4gIGxldCBkZXNjZW5kaW5nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGRlc2NlbmRpbmdOYW1lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZGVzY2VuZGluZ05hbWVcIik7XG4gIGRlc2NlbmRpbmdOYW1lLmlubmVyVGV4dCA9IFwiWiB0byBBXCI7XG4gIGRlc2NlbmRpbmdOYW1lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwienRvYVwiKTtcbiAgbm9kZXMucHVzaChkZXNjZW5kaW5nTmFtZSk7XG4gIG5hbWVHcm91cC5hcHBlbmRDaGlsZChhc2NlbmRpbmdOYW1lKTtcbiAgbmFtZUdyb3VwLmFwcGVuZENoaWxkKGRlc2NlbmRpbmdOYW1lKTtcblxuICBsZXQgdGVtcEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICB0ZW1wR3JvdXAuc2V0QXR0cmlidXRlKFwibGFiZWxcIiwgXCJBY3R1YWwgVGVtcGVyYXR1cmVcIik7XG4gIGxldCBhc2NlbmRpbmdUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgYXNjZW5kaW5nVGVtcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImFzY2VuZGluZ05hbWVcIik7XG4gIGFzY2VuZGluZ1RlbXAuaW5uZXJUZXh0ID0gXCJDb2xkZXN0IHRvIEhvdHRlc3RcIjtcbiAgYXNjZW5kaW5nVGVtcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInRlbXBjdG9oXCIpO1xuICBub2Rlcy5wdXNoKGFzY2VuZGluZ1RlbXApO1xuICBsZXQgZGVzY2VuZGluZ1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBkZXNjZW5kaW5nVGVtcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRlc2NlbmRpbmdUZW1wXCIpO1xuICBkZXNjZW5kaW5nVGVtcC5pbm5lclRleHQgPSBcIkhvdHRlc3QgdG8gQ29sZGVzdFwiO1xuICBkZXNjZW5kaW5nVGVtcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInRlbXBodG9jXCIpO1xuICBub2Rlcy5wdXNoKGRlc2NlbmRpbmdUZW1wKTtcbiAgdGVtcEdyb3VwLmFwcGVuZENoaWxkKGFzY2VuZGluZ1RlbXApO1xuICB0ZW1wR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY2VuZGluZ1RlbXApO1xuXG4gIGxldCB0ZW1wRmVlbHNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtcbiAgdGVtcEZlZWxzR3JvdXAuc2V0QXR0cmlidXRlKFwibGFiZWxcIiwgXCJBcHBhcmVudCBUZW1wZXJhdHVyZVwiKTtcbiAgbGV0IGFzY2VuZGluZ1RlbXBGZWVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGFzY2VuZGluZ1RlbXBGZWVscy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImFzY2VuZGluZ1RlbXBGZWVsc1wiKTtcbiAgYXNjZW5kaW5nVGVtcEZlZWxzLmlubmVyVGV4dCA9IFwiQ29sZGVzdCB0byBIb3R0ZXN0XCI7XG4gIGFzY2VuZGluZ1RlbXBGZWVscy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZlZWxzY3RvaFwiKTtcbiAgbm9kZXMucHVzaChhc2NlbmRpbmdUZW1wRmVlbHMpO1xuICBsZXQgZGVzY2VuZGluZ1RlbXBGZWVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGRlc2NlbmRpbmdUZW1wRmVlbHMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkZXNjZW5kaW5nVGVtcEZlZWxzXCIpO1xuICBkZXNjZW5kaW5nVGVtcEZlZWxzLmlubmVyVGV4dCA9IFwiSG90dGVzdCB0byBDb2xkZXN0XCI7XG4gIGRlc2NlbmRpbmdUZW1wRmVlbHMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJmZWVsc2h0b2NcIik7XG4gIG5vZGVzLnB1c2goZGVzY2VuZGluZ1RlbXBGZWVscyk7XG4gIHRlbXBGZWVsc0dyb3VwLmFwcGVuZENoaWxkKGFzY2VuZGluZ1RlbXBGZWVscyk7XG4gIHRlbXBGZWVsc0dyb3VwLmFwcGVuZENoaWxkKGRlc2NlbmRpbmdUZW1wRmVlbHMpO1xuXG4gIG5vZGVzLmZvckVhY2goKG4pID0+IHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkobi52YWx1ZSkgPT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSB7XG4gICAgICBuLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgc29ydFNlbGVjdC5hcHBlbmRDaGlsZChuYW1lR3JvdXApO1xuICBzb3J0U2VsZWN0LmFwcGVuZENoaWxkKHRlbXBGZWVsc0dyb3VwKTtcbiAgc29ydFNlbGVjdC5hcHBlbmRDaGlsZCh0ZW1wR3JvdXApO1xuXG4gIHNvcnRTZXR0aW5nLmFwcGVuZENoaWxkKHNvcnRJY29uKTtcbiAgc29ydFNldHRpbmcuYXBwZW5kQ2hpbGQoc29ydExhYmVsKTtcbiAgc29ydFNldHRpbmcuYXBwZW5kQ2hpbGQoc29ydFNlbGVjdCk7XG5cbiAgcmV0dXJuIHNvcnRTZXR0aW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEF0b1ooY2l0aWVzKSB7XG4gIGxldCBzb3J0ZWRDaXRpZXMgPSBjaXRpZXMuc29ydCgpO1xuICByZXR1cm4gc29ydGVkQ2l0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFp0b0EoY2l0aWVzKSB7XG4gIGxldCBzb3J0ZWRDaXRpZXMgPSBjaXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc29ydGVkQ2l0aWVzO1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IG1ha2VCYXNpY3NDYXJkIH0gZnJvbSBcIi4vbWFrZUJhc2ljc0NhcmRcIjtcbmltcG9ydCB7IG1ha2VPdmVydmlld0NhcmQgfSBmcm9tIFwiLi9tYWtlT3ZlcnZpZXdDYXJkXCI7XG5pbXBvcnQgeyBtYWtlU3VuQ2FyZCB9IGZyb20gXCIuL21ha2VTdW5DYXJkXCI7XG5pbXBvcnQgeyBtYWtlQ2xvdWRzQ2FyZCB9IGZyb20gXCIuL21ha2VDbG91ZHNDYXJkXCI7XG5pbXBvcnQgeyBtYWtlV2luZENhcmQgfSBmcm9tIFwiLi9tYWtlV2luZENhcmRcIjtcbmltcG9ydCB7IG1ha2VHaWZDYXJkIH0gZnJvbSBcIi4vbWFrZUdpZkNhcmRcIjtcbmltcG9ydCB7IG1ha2VTbm93Q2FyZCB9IGZyb20gXCIuL21ha2VTbm93Q2FyZFwiO1xuaW1wb3J0IHsgbWFrZVJhaW5DYXJkIH0gZnJvbSBcIi4vbWFrZVJhaW5DYXJkXCI7XG5pbXBvcnQgeyBtYWtlVVZJbmRleENhcmQgfSBmcm9tIFwiLi9tYWtlVVZJbmRleENhcmRcIjtcbmltcG9ydCB7IG1ha2VNb29uUGhhc2VDYXJkIH0gZnJvbSBcIi4vbWFrZU1vb25QaGFzZUNhcmRcIjtcblxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmZ1bmN0aW9uIHNob3dPbkNhcmQoXG4gIHVuaXRzLFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB0aW1lLFxuICBkYXRlLFxuICB0ZW1wLFxuICB0ZW1wRmVlbHMsXG4gIHdlYXRoZXJcbikge1xuICBsZXQgdGVtcFVuaXQgPSBcIlwiO1xuICB1bml0cyA9PSBcIm1ldHJpY1wiID8gKHRlbXBVbml0ID0gXCLCsENcIikgOiAodGVtcFVuaXQgPSBcIsKwRlwiKTtcblxuICBsZXQgYmFzaWNzQ2FyZCA9IG1ha2VCYXNpY3NDYXJkKFxuICAgIGNpdHksXG4gICAgY291bnRyeSxcbiAgICB0aW1lLFxuICAgIGRhdGUsXG4gICAgdGVtcCxcbiAgICB0ZW1wRmVlbHMsXG4gICAgdGVtcFVuaXQsXG4gICAgdHJ1ZVxuICApO1xuXG4gIHJldHVybiBiYXNpY3NDYXJkO1xufVxuXG5mdW5jdGlvbiBzaG93T25JbmZvKFxuICB1bml0cyxcbiAgY2l0eSxcbiAgY291bnRyeSxcbiAgdGltZSxcbiAgZGF0ZSxcbiAgdGVtcCxcbiAgdGVtcEZlZWxzLFxuICB3ZWF0aGVyLFxuICByYWluVm9sMWgsXG4gIHJhaW5Wb2wzaCxcbiAgc25vd1ZvbDFoLFxuICBzbm93Vm9sM2gsXG4gIHN1bnJpc2UsXG4gIHN1bnNldCxcbiAgY2xvdWRpbmVzcyxcbiAgd2luZCxcbiAgZ2lmU3JjLFxuICBtb29ucGhhc2UsXG4gIHV2aW5kZXgsXG4gIGRheVxuKSB7XG4gIGNsZWFuKHJlc3VsdCk7XG4gIGxldCB0ZW1wVW5pdCA9IFwiXCI7XG4gIHVuaXRzID09IFwibWV0cmljXCIgPyAodGVtcFVuaXQgPSBcIsKwQ1wiKSA6ICh0ZW1wVW5pdCA9IFwiwrBGXCIpO1xuXG4gIGxldCBiYXNpY3NDYXJkID0gbWFrZUJhc2ljc0NhcmQoXG4gICAgY2l0eSxcbiAgICBjb3VudHJ5LFxuICAgIHRpbWUsXG4gICAgZGF0ZSxcbiAgICB0ZW1wLFxuICAgIHRlbXBGZWVscyxcbiAgICB0ZW1wVW5pdFxuICApO1xuICBsZXQgb3ZlcnZpZXdDYXJkID0gbWFrZU92ZXJ2aWV3Q2FyZCh3ZWF0aGVyKTtcbiAgbGV0IHN1bkNhcmQgPSBtYWtlU3VuQ2FyZChzdW5yaXNlLCBzdW5zZXQpO1xuICBsZXQgY2xvdWRzQ2FyZCA9IG1ha2VDbG91ZHNDYXJkKGNsb3VkaW5lc3MpO1xuICBsZXQgd2luZENhcmQgPSBtYWtlV2luZENhcmQod2luZCk7XG4gIGxldCBnaWZDYXJkID0gbWFrZUdpZkNhcmQoZ2lmU3JjKTtcbiAgbGV0IHNub3dDYXJkID0gbWFrZVNub3dDYXJkKHNub3dWb2wxaCwgc25vd1ZvbDNoKTtcbiAgbGV0IHJhaW5DYXJkID0gbWFrZVJhaW5DYXJkKHJhaW5Wb2wxaCwgcmFpblZvbDNoKTtcblxuICBsZXQgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZHMtY29udGFpbmVyXCIpO1xuXG4gIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuICBpbmZvLmFwcGVuZENoaWxkKGJhc2ljc0NhcmQpO1xuICBpbmZvLmFwcGVuZENoaWxkKG92ZXJ2aWV3Q2FyZCk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoZ2lmQ2FyZCk7XG4gIGlmIChzbm93Vm9sMWggfHwgc25vd1ZvbDNoKSB7XG4gICAgaW5mby5hcHBlbmRDaGlsZChzbm93Q2FyZCk7XG4gIH1cbiAgaWYgKHJhaW5Wb2wxaCB8fCByYWluVm9sM2gpIHtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHJhaW5DYXJkKTtcbiAgfVxuICBpbmZvLmFwcGVuZENoaWxkKGNsb3Vkc0NhcmQpO1xuICBpbmZvLmFwcGVuZENoaWxkKHdpbmRDYXJkKTtcbiAgaWYgKCFkYXkpIHtcbiAgICBsZXQgbW9vblBoYXNlQ2FyZCA9IG1ha2VNb29uUGhhc2VDYXJkKG1vb25waGFzZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChtb29uUGhhc2VDYXJkKTtcbiAgfVxuICBpZiAoZGF5KSB7XG4gICAgbGV0IHV2Q2FyZCA9IG1ha2VVVkluZGV4Q2FyZCh1dmluZGV4KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHV2Q2FyZCk7XG4gIH1cbiAgaW5mby5hcHBlbmRDaGlsZChzdW5DYXJkKTtcblxuICByZXN1bHQuYXBwZW5kQ2hpbGQoaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuKHBhcmVudCkge1xuICBpZiAodHlwZW9mIHBhcmVudCA9PSBcInN0cmluZ1wiKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgIHdoaWxlIChwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHNob3dPbkluZm8sIHNob3dPbkNhcmQsIGNsZWFuIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7IG1ha2VTZWFyY2hCYXIgfSBmcm9tIFwiLi9tYWtlU2VhcmNoQmFyXCI7XG5pbXBvcnQgeyBtYWtlRmF2TGlzdCB9IGZyb20gXCIuL21ha2VGYXZMaXN0XCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IGF1dG9SZWZyZXNoU2V0dXAgZnJvbSBcIi4vc2V0dGluZ0F1dG9SZWZyZXNoXCI7XG5cbm1ha2VTZWFyY2hCYXIoKTtcblxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSkge1xuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKS5sZW5ndGggPiAwKSB7XG4gICAgICBmYXZvcml0ZXNCYXIubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgICAgbWFrZUZhdkxpc3QoKTtcbiAgICB9XG4gICAgbGV0IHJlZnJlc2hNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZyZXNoXCIpO1xuICAgIGlmIChyZWZyZXNoTW9kZSA9PSBcIk5ldmVyXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSSB3b250IHJlZnJlc2hcIik7XG4gICAgICBhdXRvUmVmcmVzaFNldHVwLmF1dG8gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXV0b1JlZnJlc2hTZXR1cC5oYW5kbGVBdXRvUmVmcmVzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikpO1xuICAgIH1cbiAgfVxufSBlbHNlIHtcbiAgbGV0IGNpdGllc0FycmF5ID0gW107XG4gIGxldCBtZXRyaWMgPSB0cnVlO1xuICBsZXQgY2l0aWVzQXJyYXlKU09OID0gSlNPTi5zdHJpbmdpZnkoY2l0aWVzQXJyYXkpO1xuICBsZXQgcmVmcmVzaCA9IFwiTmV2ZXJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgYCR7Y2l0aWVzQXJyYXlKU09OfWApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldHJpY1wiLCBgJHttZXRyaWN9YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmcmVzaFwiLCBgJHtyZWZyZXNofWApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNvcnRcIiwgSlNPTi5zdHJpbmdpZnkoXCJhdG96XCIpKTtcbn1cblxuZ2V0T3B0aW9ucyhmYWxzZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
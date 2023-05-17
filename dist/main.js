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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#hidden {\n  display: none;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 36vw;\n  margin-left: 4vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  padding-left: 2vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options-compact {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-settings img,\n.option-settings-open img {\n  height: auto;\n  width: 38px;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 45px;\n}\n\n.option-temperature label {\n  font-size: 1.1rem;\n}\n\n.selected-metric {\n  font-weight: bold;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload img {\n  width: auto;\n  height: 79%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 77%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.settings-bar {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  height: 5vh;\n}\n\n.settings-bar select {\n  width: 14vw;\n  margin-left: 1vw;\n}\n\n.settings-bar div {\n  display: flex;\n  align-items: center;\n}\n\n.settings-bar > div:first-child img {\n  height: auto;\n  width: 25px;\n}\n\n.settings-bar > div:nth-child(2) img {\n  height: auto;\n  width: 35px;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow-x: auto;\n  overflow-y: clip;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar,\n.settings-bar,\n.uv-index-card,\n.moon-phase-card {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 2.1fr 1fr;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-left: 2vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 1.7fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.7rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > span {\n  font-size: 1.1rem;\n  white-space: nowrap;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.2rem;\n  justify-self: start;\n  white-space: nowrap;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: start;\n  font-size: 1.2rem;\n  margin-left: 4vw;\n}\n\n.weather-gif {\n  max-height: 50vh;\n  min-height: 30vh;\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats,\n.uv-index-card,\n.moon-phase-card {\n  display: grid;\n  grid-template-columns: 1fr 3.8fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img {\n  height: auto;\n  width: 60px;\n}\n\n.uv-index-card img {\n  height: auto;\n  width: 70px;\n  margin-left: -1vw;\n}\n\n.moon-phase-card img {\n  height: auto;\n  width: 55px;\n  margin-left: 1vw;\n}\n\n.moon-phase-card {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.cloudStats p,\n.windStats p,\n.uv-index-card p,\n.moon-phase-card p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n  width: 100%;\n  max-height: 60vh;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n#hidden {\n  display: none;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 36vw;\n  margin-left: 4vw;\n  border-radius: 5px;\n  border: 1px solid black;\n  padding-left: 2vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options-compact {\n  display: grid;\n  justify-items: center;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-settings img,\n.option-settings-open img {\n  height: auto;\n  width: 38px;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 45px;\n}\n\n.option-temperature label {\n  font-size: 1.1rem;\n}\n\n.selected-metric {\n  font-weight: bold;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload img {\n  width: auto;\n  height: 79%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 77%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.settings-bar {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  height: 5vh;\n}\n\n.settings-bar select {\n  width: 14vw;\n  margin-left: 1vw;\n}\n\n.settings-bar div {\n  display: flex;\n  align-items: center;\n}\n\n.settings-bar > div:first-child img {\n  height: auto;\n  width: 25px;\n}\n\n.settings-bar > div:nth-child(2) img {\n  height: auto;\n  width: 35px;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow-x: auto;\n  overflow-y: clip;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar,\n.settings-bar,\n.uv-index-card,\n.moon-phase-card {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 2.1fr 1fr;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-left: 2vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 1.7fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.7rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > span {\n  font-size: 1.1rem;\n  white-space: nowrap;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.2rem;\n  justify-self: start;\n  white-space: nowrap;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: start;\n  font-size: 1.2rem;\n  margin-left: 4vw;\n}\n\n.weather-gif {\n  max-height: 50vh;\n  min-height: 30vh;\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats,\n.uv-index-card,\n.moon-phase-card {\n  display: grid;\n  grid-template-columns: 1fr 3.8fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img {\n  height: auto;\n  width: 60px;\n}\n\n.uv-index-card img {\n  height: auto;\n  width: 70px;\n  margin-left: -1vw;\n}\n\n.moon-phase-card img {\n  height: auto;\n  width: 55px;\n  margin-left: 1vw;\n}\n\n.moon-phase-card {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.cloudStats p,\n.windStats p,\n.uv-index-card p,\n.moon-phase-card p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n  width: 100%;\n  max-height: 60vh;\n}\n"],"sourceRoot":""}]);
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
    if (favoritesBar) {
      this.header.removeChild(favoritesBar);
    }
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
function getFlag(code) {
  let src = `${endpoint}${code}`;
  let src2 = `https://flagcdn.com/${code.toLowerCase()}.svg`;
  return src2;
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
  let index = Math.floor(Math.random() * 9);
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
  let moment;
  if (timeAtCity - sunsetDate > 0.5 || timeAtCity - sunriseDate < 0) {
    moment = "night";
  }
  if (timeAtCity > sunriseDate && timeAtCity < sunsetDate) {
    moment = "day";
    if ((timeAtCity - sunriseDate) / (60 * 1000 * 60) < 6) {
      moment = "morning";
    }
    if ((sunsetDate - timeAtCity) / (60 * 1000 * 60) < 0.5) {
      moment = "sunset";
    }
  }

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

  let id = "za5xikuRr0OzK";

  if (weather.match(/rain/)) {
    if (weather.match(/\D+(?=\s)/)[0] == "drizzle") {
      if (moment == "day") {
        id = "l0IrIkq7Q3iRII0hy";
      }
      if (moment == "morning") {
      }
      if (moment == "sunset") {
        id = "xT9GEIc1nQ7bVQQ54Q";
      }
      if (moment == "night") {
        id = "xT9GEIc1nQ7bVQQ54Q";
      }
    }
    if (weather.match(/\D+(?=\s)/)[0] == "light") {
      if (moment == "day") {
        id = "xT9GEOg09OuResnZ6g";
      }
      if (moment == "morning") {
        id = "xTcnT8PuKl5GBz26mk";
      }
      if (moment == "sunset") {
        id = "xT9GEIc1nQ7bVQQ54Q";
      }
      if (moment == "night") {
        id = "xT9GEIc1nQ7bVQQ54Q";
      }
    }
    if (weather.match(/\D+(?=\s)/)[0] == "moderate") {
      if (moment == "day") {
        id = "W0c3xcZ3F1d0EYYb0f";
      }
      if (moment == "morning") {
        id = "hk6czgfmwVJS0";
      }
      if (moment == "sunset") {
        id = "1wrRQHybZqAB4jZqZw";
      }
      if (moment == "night") {
        id = "5torEEM8QnR95Cqg11";
      }
    }
    if (weather.match(/\D+(?=\s)/)[0] == "heavy") {
      if (moment == "day") {
        id = "XgYoTdgj5NiU78prfm";
      }
      if (moment == "morning") {
        id = "XgYoTdgj5NiU78prfm";
      }
      if (moment == "sunset") {
        id = "TVpeXDi8xTlyo";
      }
      if (moment == "night") {
        id = "l0MYAfxbg3fhqn1Ru";
      }
    }
    if (weather.match(/\D+(?=\s)/)[0] == "thunderstorm") {
      if (moment == "day") {
        id = "3osxYzIQRqN4DOEddC";
      }
      if (moment == "morning") {
        id = "l4FGkdtLGfpUiBdFC";
      }
      if (moment == "sunset") {
        id = "l0MYOJCCE8yTfcwSY";
      }
      if (moment == "night") {
        id = "ZqUNSyKYC9yN3O4jHA";
      }
    }
  }
  if (weather.match(/clouds/)) {
    if (weather.match(/\D+(?=\s)/)[0] == "overcast") {
      if (moment == "day") {
        id = "dWIau1ZRyIj3j6YEaL";
      }
      if (moment == "morning") {
        id = "dWIau1ZRyIj3j6YEaL";
      }
      if (moment == "sunset") {
        id = "Yhg9l8kXuq94Q";
      }
      if (moment == "night") {
        id = "2fC74jNn5SPvO";
      }
    }
    if (weather.match(/\D+(?=\s)/)[0] == "broken") {
      if (moment == "day") {
        id = "63WsNg9DAhRkY";
      }
      if (moment == "morning") {
        id = "63WsNg9DAhRkY";
      }
      if (moment == "sunset") {
        id = "49VB0PHxR5Vsc";
      }
      if (moment == "night") {
        id = "13QslXgKOQzmhy";
      }
    }
    if (weather.match(/\D+(?=\s)/)[0] == "scattered") {
      if (moment == "day") {
        id = "uOuiK4F5zZkZ2";
      }
      if (moment == "morning") {
        id = "0Styincf6K2tvfjb5Q";
      }
      if (moment == "sunset") {
        id = "63WsNg9DAhRkY";
      }
      if (moment == "night") {
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
    }
    if (weather.match(/\D+(?=\s)/)[0] == "few") {
      if (moment == "day") {
        id = "gZEBpuOkPuydi";
      }
      if (moment == "morning") {
        id = "mno6BJfy8USic";
      }
      if (moment == "sunset") {
        id = "WzLDljBpplUvm";
      }
      if (moment == "night") {
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
    }
  }
  if (weather.match(/snow/)) {
    if (temperature == "freezing") {
      id = "s4Bi420mMDRBK";
    } else {
      if (moment == "day") {
        if (weather.match(/shower/)) {
          id = "ONLoRRAHQh5kY";
        }
        if (weather.match(/light/)) {
          id = "7Bgpw7PwdxoDC";
        } else {
          id = "5qFE91OmehdRq0sL5a";
        }
      }
      if (moment == "morning") {
        if (weather.match(/shower/)) {
          id = "ONLoRRAHQh5kY";
        }
        if (weather.match(/light/)) {
          id = "OWxrxRHY6afRu";
        } else {
          id = "5qFE91OmehdRq0sL5a";
        }
      }
      if (moment == "sunset") {
        if (weather.match(/shower/)) {
          id = "ONLoRRAHQh5kY";
        }
        if (weather.match(/light/)) {
          id = "Xi2Xu0MejhsUo";
        } else {
          id = "5qFE91OmehdRq0sL5a";
        }
      }
      if (moment == "night") {
        if (weather.match(/shower/)) {
          id = "ONLoRRAHQh5kY";
        }
        if (weather.match(/light/)) {
          id = "bGaOdqeqYQKc0";
        } else {
          id = "3TKTrn299mI6RsYuaU";
        }
      }
    }
  }
  if (weather.match(/haze/)) {
    if (moment == "day") {
      id = "r2OMuTCFo0rv2rgAL5";
    }
    if (moment == "morning") {
      id = "dgeIH5RPynA6Q";
    }
    if (moment == "sunset") {
      id = "xTiTnh7HeYa7bBli6Y";
    }
    if (moment == "night") {
      id = "3sJQdC0fXJLyWOs4WM";
    }
  }
  if (weather.match(/mist/)) {
    if (moment == "day") {
      id = "oVaigqUhPvDglQ0uWJ";
    }
    if (moment == "morning") {
      id = "oVaigqUhPvDglQ0uWJ";
    }
    if (moment == "sunset") {
      id = "3o72F65dJl7Z0PtdjG";
    }
    if (moment == "night") {
      id = "3o72F65dJl7Z0PtdjG";
    }
  }
  if (weather.match(/fog/)) {
    if (moment == "day") {
      id = "oAbvMXvah1M0U";
    }
    if (moment == "morning") {
      id = "3o7rbT3ECCXdEGE8fu";
    }
    if (moment == "sunset") {
      id = "xT8qBj3Oxl9kuQKgOk";
    }
    if (moment == "night") {
      id = "dz6Nrk35xWP3q";
    }
  }
  if (weather.match(/sleet/)) {
    if (moment == "day") {
      id = "d3mlmtNPoxNrt4Bi";
    }
    if (moment == "morning") {
      id = "JTghlLg0d1BpZvbQlG";
    }
    if (moment == "sunset") {
      id = "JTghlLg0d1BpZvbQlG";
    }
    if (moment == "night") {
      id = "d3mlmtNPoxNrt4Bi";
    }
  }
  if (weather.match(/drizzle/)) {
    if (moment == "day") {
      id = "xT9GEOg09OuResnZ6g";
    }
    if (moment == "morning") {
      id = "l0IrIkq7Q3iRII0hy";
    }
    if (moment == "sunset") {
      id = "xT9GEIc1nQ7bVQQ54Q";
    }
    if (moment == "night") {
      id = "xT9GEOg09OuResnZ6g";
    }
  }
  if (weather.match(/smoke/)) {
    if (moment == "day") {
      id = "l2Je9dUI5LpzfHGTe";
    }
    if (moment == "morning") {
      id = "ZWRCWdUymIGNW";
    }
    if (moment == "sunset") {
      id = "l4pTrnc4kl2uupJF6";
    }
    if (moment == "night") {
      id = "l2Je9dUI5LpzfHGTe";
    }
  }
  if (weather.match(/dust/)) {
    if (moment == "day") {
      id = "tqtZDj5BqC0CY";
    }
    if (moment == "morning") {
      id = "AUc4qeZxG28lq";
    }
    if (moment == "sunset") {
      id = "tqtZDj5BqC0CY";
    }
    if (moment == "night") {
      id = "l4pT0NtPSMV3pw6Lm";
    }
  }
  if (weather.match(/thunderstorm/) && !weather.match(/rain/)) {
    if (moment == "day") {
      id = "3osxYzIQRqN4DOEddC";
    }
    if (moment == "morning") {
      id = "3oEjHGZkrolm9UgvM4";
    }
    if (moment == "sunset") {
      id = "Y4JPYsrJEk454pNbts";
    }
    if (moment == "night") {
      id = "3o85xzEtQs693ln3qM";
    }
  }
  if (weather.match(/clear/)) {
    if (moment == "day") {
      id = "VxbvpfaTTo3le";
    }
    if (moment == "morning") {
      id = "RqSJ6nQVsOpxe";
    }
    if (moment == "sunset") {
      id = "ZZIEtQHmiTNwuxTOdt";
    }
    if (moment == "night") {
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
  sunAndMoonKey: "VAM5K6CTBVE7TRJ4YC365QDF8",
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

    let sunAndMoonApiPromiseResolved = await getFromSunAndMoonAPI(
      location,
      dateAtCity
    );
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

async function getFromSunAndMoonAPI(location, dateAtCity) {
  let sunAndMoonApiPromiseResolved;

  try {
    let sunAndMoonApiPromise = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${
        Date.parse(dateAtCity) / 1000
      }/?key=${handleUserInput.sunAndMoonKey}&elements=uvindex,moonphase`,
      { mode: "cors" }
    );
    sunAndMoonApiPromiseResolved = await sunAndMoonApiPromise.json();
    return sunAndMoonApiPromiseResolved;
  } catch (error) {
    console.log("there was an error on the sunAndMoonAPI: ", error);
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
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showData */ "./src/showData.js");





async function makeFavList() {
  let result = document.querySelector(".result");
  let info = document.querySelector(".info");
  let units = JSON.parse(localStorage.getItem("metric"));
  let metric = "";
  let favListSorted = [];
  units ? (metric = "metric") : (metric = "imperial");
  const cities = JSON.parse(localStorage.getItem("cities"));
  let promises = [];

  cities.forEach((city) => {
    let getCity = new Promise((resolve, reject) => {
      let cityCard = (0,_handleUserInput__WEBPACK_IMPORTED_MODULE_1__.getCardForFavList)(city, metric);
      resolve(cityCard);
      reject("Error wile getting cityCard for ", city);
    });
    promises.push(getCity);
  });

  Promise.all(promises).then((favList) => {
    if (
      JSON.parse(localStorage.getItem("sort")) == "atoz" ||
      JSON.parse(localStorage.getItem("sort")) == "ztoa"
    ) {
      cities.forEach((c) => {
        let cityFromCard = favList.filter((cityObj) => cityObj.cityName == c);
        favListSorted.push(cityFromCard[0].card);
      });
    }
    if (JSON.parse(localStorage.getItem("sort")) == "tempctoh") {
      let favListSortedCards = favList.sort((a, b) => {
        if (a.tempActual > b.tempActual) {
          `${a.cityName}, ${a.tempActual} is hotter than ${b.cityName}, ${b.tempActual}`;
          return 1;
        }
        if (a.tempActual < b.tempActual) {
          return -1;
        } else {
          return 0;
        }
      });
      favListSortedCards.forEach((c) => favListSorted.push(c.card));
      let citiesSorted = [];
      favListSortedCards.forEach((c) => {
        citiesSorted.push(c.cityName);
      });
      localStorage.setItem("cities", JSON.stringify(citiesSorted));
    }
    if (JSON.parse(localStorage.getItem("sort")) == "temphtoc") {
      let favListSortedCards = favList.sort((a, b) => {
        if (a.tempActual > b.tempActual) {
          return -1;
        }
        if (a.tempActual < b.tempActual) {
          return 1;
        } else {
          return 0;
        }
      });
      favListSortedCards.forEach((c) => favListSorted.push(c.card));
      let citiesSorted = [];
      favListSortedCards.forEach((c) => {
        citiesSorted.push(c.cityName);
      });
      localStorage.setItem("cities", JSON.stringify(citiesSorted));
    }
    if (JSON.parse(localStorage.getItem("sort")) == "feelsctoh") {
      let favListSortedCards = favList.sort((a, b) => {
        if (a.feels > b.feels) {
          return 1;
        }
        if (a.feels < b.feels) {
          return -1;
        } else {
          return 0;
        }
      });
      favListSortedCards.forEach((c) => favListSorted.push(c.card));
      let citiesSorted = [];
      favListSortedCards.forEach((c) => {
        citiesSorted.push(c.cityName);
      });
      localStorage.setItem("cities", JSON.stringify(citiesSorted));
    }
    if (JSON.parse(localStorage.getItem("sort")) == "feelshtoc") {
      let favListSortedCards = favList.sort((a, b) => {
        if (a.feels > b.feels) {
          return -1;
        }
        if (a.feels < b.feels) {
          return 1;
        } else {
          return 0;
        }
      });
      favListSortedCards.forEach((c) => favListSorted.push(c.card));
      let citiesSorted = [];
      favListSortedCards.forEach((c) => {
        citiesSorted.push(c.cityName);
      });
      localStorage.setItem("cities", JSON.stringify(citiesSorted));
    }
    if (info) {
      _favoritesBar__WEBPACK_IMPORTED_MODULE_0__["default"].refreshFavoritesBar();
    } else {
      let settingsBar = document.querySelector(".settings-bar");
      if (!settingsBar) {
        (0,_options__WEBPACK_IMPORTED_MODULE_2__.getOptionsFavList)();
      }
      let favBar = document.querySelector(".favorites-bar");
      favBar.setAttribute("id", "hidden");
      (0,_showData__WEBPACK_IMPORTED_MODULE_3__.clean)(result);
      favListSorted.forEach((f) => result.appendChild(f));
    }
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
/* harmony import */ var _makeFavList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeFavList */ "./src/makeFavList.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options */ "./src/options.js");
/* harmony import */ var _settingSort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settingSort */ "./src/settingSort.js");







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
    (0,_options__WEBPACK_IMPORTED_MODULE_3__.getOptionsUnfavorite)();
  });

  return favoriteOption;
}

function handleSortAction(city) {
  let cities = JSON.parse(localStorage.getItem("cities"));
  if (city) {
    cities.push(city.innerText);
    localStorage.setItem("cities", JSON.stringify(cities));
  }
  if (cities.length > 0) {
    let citiesSorted;
    if (JSON.parse(localStorage.getItem("sort")) == "atoz") {
      citiesSorted = (0,_settingSort__WEBPACK_IMPORTED_MODULE_4__.sortAtoZ)(cities);
      let citiesStrigified = JSON.stringify(citiesSorted);
      localStorage.setItem("cities", `${citiesStrigified}`);
    }
    if (JSON.parse(localStorage.getItem("sort")) == "ztoa") {
      citiesSorted = (0,_settingSort__WEBPACK_IMPORTED_MODULE_4__.sortZtoA)(cities);
      let citiesStrigified = JSON.stringify(citiesSorted);
      localStorage.setItem("cities", `${citiesStrigified}`);
    } else {
      (0,_makeFavList__WEBPACK_IMPORTED_MODULE_2__.makeFavList)();
    }

    let info = document.querySelector(".info");
    if (info) {
      _favoritesBar__WEBPACK_IMPORTED_MODULE_1__["default"].refreshFavoritesBar();
    } else {
      (0,_makeFavList__WEBPACK_IMPORTED_MODULE_2__.makeFavList)();
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
      let searchbar = document.querySelector(".searchbar > input");
      searchbar.value = "";
      console.log(searchbar);
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
    let showingSettingsBar = document.querySelector(".settingd-bar");
    if (showingSettingsBar) {
      header.appendChild(settingsBar);
    }
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
/* harmony import */ var _makeFavList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeFavList */ "./src/makeFavList.js");




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

  return {
    cityName: city,
    card: basicsCard,
    tempActual: temp,
    feels: tempFeels,
    unit: tempUnit,
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sZ0JBQWdCLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FB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O0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakNyQjtBQUNQLGVBQWUsU0FBUyxFQUFFLEtBQUs7QUFDL0Isb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxHQUFHLFdBQVcsT0FBTztBQUMxRCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TSw2RUFBa0M7QUFDeEM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsb0NBQW9DLE9BQU87QUFDM0MscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTs7QUFFQSxvREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9lcnJvckNhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZmF2b3JpdGVzQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZmxhZ0FQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2dpZkFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2hhbmRsZVVzZXJJbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VCYXNpY3NDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZUNsb3Vkc0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlRmF2TGlzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VHaWZDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZU1vb25QaGFzZUNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlT3ZlcnZpZXdDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVJhaW5DYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVNlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VTZXR0aW5nc0Jhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VTbm93Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VTdW5DYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVVWSW5kZXhDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVdpbmRDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uRmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25SZWxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblNob3dGYXZzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uVGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25VbmZhdm9yaXRlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldHRpbmdBdXRvUmVmcmVzaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldHRpbmdTb3J0LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2hvd0RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNoaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdmJhcixcXG4ub3B0aW9ucyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ubmF2YmFyID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNnZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDR2dztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAydnc7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM0cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ub3B0aW9ucy1jb21wYWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4ub3B0aW9ucyBkaXYge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNnZoO1xcbn1cXG5cXG4ub3B0aW9uLXNldHRpbmdzIGltZyxcXG4ub3B0aW9uLXNldHRpbmdzLW9wZW4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzOHB4O1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5zZWxlY3RlZC1tZXRyaWMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjFlbTtcXG4gIHdpZHRoOiAxLjFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbi5vcHRpb24tcmVsb2FkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3OSU7XFxufVxcblxcbi5vcHRpb24tZmF2b3JpdGUsXFxuLm9wdGlvbi11bmZhdm9yaXRlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSBpbWcsXFxuLm9wdGlvbi11bmZhdm9yaXRlIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNzclO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdiA+IGRpdiBkaXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuLnNldHRpbmdzLWJhciBzZWxlY3Qge1xcbiAgd2lkdGg6IDE0dnc7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWJhciA+IGRpdjpmaXJzdC1jaGlsZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgPiBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuLmZhdm9yaXRlcy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBjbGlwO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XFxuICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJhc2ljcyxcXG4ud2VhdGhlci1naWYsXFxuLm92ZXJ2aWV3LFxcbi5zdW5TdGF0cyxcXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzLFxcbi5zbm93LWNhcmQsXFxuLnJhaW4tY2FyZCxcXG4uZmF2b3JpdGVzLWJhcixcXG4uc2V0dGluZ3MtYmFyLFxcbi51di1pbmRleC1jYXJkLFxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAuaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXZ3O1xcbiAgfVxcblxcbiAgLmluZm8gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbi5iYXNpY3Mge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi4xZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDNmciAxZnI7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuN2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43dmg7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gc3BhbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gcCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5mbGFnIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzQ7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0byAzKTtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6Zmlyc3QtY2hpbGQsXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA0dnc7XFxufVxcblxcbi53ZWF0aGVyLWdpZiB7XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgbWluLWhlaWdodDogMzB2aDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLm92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5vdmVydmlldyA+IHAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zbm93LWNhcmQsXFxuLnJhaW4tY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLnNub3ctY2FyZCBpbWcsXFxuLnJhaW4tY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOmZpcnN0LWNoaWxkLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40dmg7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSxcXG4uc25vdy1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMyksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYsXFxuLnJhaW4tY2FyZCA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uc3VuU3RhdHMgaW1nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uc3VuU3RhdHMgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3VkU3RhdHMsXFxuLndpbmRTdGF0cyxcXG4udXYtaW5kZXgtY2FyZCxcXG4ubW9vbi1waGFzZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzLjhmcjtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uZ2lmID4gaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNsb3VkU3RhdHMgaW1nLFxcbi53aW5kU3RhdHMgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4udXYtaW5kZXgtY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBtYXJnaW4tbGVmdDogLTF2dztcXG59XFxuXFxuLm1vb24tcGhhc2UtY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDU1cHg7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4ubW9vbi1waGFzZS1jYXJkIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBwLFxcbi53aW5kU3RhdHMgcCxcXG4udXYtaW5kZXgtY2FyZCBwLFxcbi5tb29uLXBoYXNlLWNhcmQgcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmVycm9yLWNhcmQge1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgcGFkZGluZzogMnZ3O1xcbn1cXG5cXG4uZXJyb3ItY2FyZCBwIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcXG59XFxuXFxuLmVycm9yLWNhcmQgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogNjB2aDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNY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O0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2YmFyLFxcbi5vcHRpb25zIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5uYXZiYXIgPiBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc2VhcmNoYmFyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciA+IGlucHV0IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDM2dnc7XFxuICBtYXJnaW4tbGVmdDogNHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzRweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5vcHRpb25zLWNvbXBhY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxufVxcblxcbi5vcHRpb25zIGRpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2dmg7XFxufVxcblxcbi5vcHRpb24tc2V0dGluZ3MgaW1nLFxcbi5vcHRpb24tc2V0dGluZ3Mtb3BlbiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM4cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNDVweDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnNlbGVjdGVkLW1ldHJpYyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDEuMWVtO1xcbiAgd2lkdGg6IDEuMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uLXJlbG9hZCBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDc5JTtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSxcXG4ub3B0aW9uLXVuZmF2b3JpdGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ub3B0aW9uLWZhdm9yaXRlIGltZyxcXG4ub3B0aW9uLXVuZmF2b3JpdGUgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3NyU7XFxufVxcblxcbi5vcHRpb25zID4gZGl2ID4gZGl2IGRpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcXG4gIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIHNlbGVjdCB7XFxuICB3aWR0aDogMTR2dztcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyID4gZGl2OmZpcnN0LWNoaWxkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnNldHRpbmdzLWJhciA+IGRpdjpudGgtY2hpbGQoMikgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGNsaXA7XFxufVxcblxcbi5mYXZvcml0ZXMtYmFyIHAge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDN2dztcXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmFzaWNzLFxcbi53ZWF0aGVyLWdpZixcXG4ub3ZlcnZpZXcsXFxuLnN1blN0YXRzLFxcbi5jbG91ZFN0YXRzLFxcbi53aW5kU3RhdHMsXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkLFxcbi5mYXZvcml0ZXMtYmFyLFxcbi5zZXR0aW5ncy1iYXIsXFxuLnV2LWluZGV4LWNhcmQsXFxuLm1vb24tcGhhc2UtY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcXG4gIC5pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxdnc7XFxuICB9XFxuXFxuICAuaW5mbyBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuXFxuLmJhc2ljcyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gM2ZyIDFmcjtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIHBhZGRpbmctbGVmdDogMnZ3O1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi80O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS43ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjd2aDtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBwIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmZsYWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvIDMpO1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpmaXJzdC1jaGlsZCxcXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpudGgtY2hpbGQoMikge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDR2dztcXG59XFxuXFxuLndlYXRoZXItZ2lmIHtcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxuICBtaW4taGVpZ2h0OiAzMHZoO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm92ZXJ2aWV3ID4gcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uc25vdy1jYXJkIGltZyxcXG4ucmFpbi1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQsXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjR2aDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdixcXG4ucmFpbi1jYXJkID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBpbWcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzLFxcbi51di1pbmRleC1jYXJkLFxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMuOGZyO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5naWYgPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBpbWcsXFxuLndpbmRTdGF0cyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi51di1pbmRleC1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXZ3O1xcbn1cXG5cXG4ubW9vbi1waGFzZS1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIHAsXFxuLndpbmRTdGF0cyBwLFxcbi51di1pbmRleC1jYXJkIHAsXFxuLm1vb24tcGhhc2UtY2FyZCBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBwYWRkaW5nOiAydnc7XFxufVxcblxcbi5lcnJvci1jYXJkIHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiA2MHZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0RXJyb3JHaWYgfSBmcm9tIFwiLi9naWZBUElcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VFcnJvckNhcmQoZXJyb3JUeXBlKSB7XG4gIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGlmIChlcnJvclR5cGUgPT0gNDA0KSB7XG4gICAgbWVzc2FnZSA9IFwiU29ycnksIHdlIGNvdWxkbid0IGZpbmQgdGhhdCBjaXR5XCI7XG4gICAgaW1hZ2UuYWx0ID0gXCJnaWYgY29uZnVzZWQgd2l0aCBlbnRlcmVkIGNpdHlcIjtcbiAgICB0cnkge1xuICAgICAgaW1hZ2Uuc3JjID0gYXdhaXQgZ2V0RXJyb3JHaWYoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBmZXRjaGluZyBlcnJvciBnaWY6IFwiLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIGxldCBlcnJvckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvckNhcmQuY2xhc3NMaXN0LmFkZChcImVycm9yLWNhcmRcIik7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIGVycm9yQ2FyZC5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICBlcnJvckNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICByZXR1cm4gZXJyb3JDYXJkO1xufVxuIiwiaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcblxuY29uc3QgZmF2b3JpdGVzQmFyID0ge1xuICBoZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIiksXG4gIG1ha2VGYXZvcml0ZXNCYXIoKSB7XG4gICAgbGV0IGNpdGllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpO1xuICAgIGNpdGllcyA9IEpTT04ucGFyc2UoY2l0aWVzKTtcbiAgICBsZXQgZmF2b3JpdGVzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmYXZvcml0ZXNCYXIuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlcy1iYXJcIik7XG4gICAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcbiAgICAgIGxldCBjaXR5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY2l0eUxpbmsuaW5uZXJUZXh0ID0gYCR7Y2l0eX1gO1xuICAgICAgY2l0eUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHVuaXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldHJpY1wiKSk7XG4gICAgICAgIHVuaXRzID8gZ2V0V2VhdGhlcihjaXR5LCBcIm1ldHJpY1wiKSA6IGdldFdlYXRoZXIoY2l0eSwgXCJpbXBlcmlhbFwiKTtcbiAgICAgIH0pO1xuICAgICAgZmF2b3JpdGVzQmFyLmFwcGVuZENoaWxkKGNpdHlMaW5rKTtcbiAgICB9KTtcbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZChmYXZvcml0ZXNCYXIpO1xuICB9LFxuICByZWZyZXNoRmF2b3JpdGVzQmFyKCkge1xuICAgIGxldCBmYXZvcml0ZXNCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gICAgaWYgKGZhdm9yaXRlc0Jhcikge1xuICAgICAgdGhpcy5oZWFkZXIucmVtb3ZlQ2hpbGQoZmF2b3JpdGVzQmFyKTtcbiAgICB9XG4gICAgbGV0IGNpdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGlmIChjaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5tYWtlRmF2b3JpdGVzQmFyKCk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmF2b3JpdGVzQmFyO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEZsYWcoY29kZSkge1xuICBsZXQgc3JjID0gYCR7ZW5kcG9pbnR9JHtjb2RlfWA7XG4gIGxldCBzcmMyID0gYGh0dHBzOi8vZmxhZ2Nkbi5jb20vJHtjb2RlLnRvTG93ZXJDYXNlKCl9LnN2Z2A7XG4gIHJldHVybiBzcmMyO1xufVxuIiwiY29uc3QgZ2lmS2V5ID0gXCJaU3FMWkJvUDFMMjVwUzAzRzQ3OHBqUkJiME5FU2IwQ1wiO1xuY29uc3QgZXJyb3JHaWZJZHMgPSBbXG4gIFwiZ2xtUnlpU0kzdjVFNFwiLFxuICBcImpKTzFCd3VjaDVvcktcIixcbiAgXCJnS3NKVWRkam5wUEcwXCIsXG4gIFwibUVWNDJGMzhsdXI2UGJmYXBXXCIsXG4gIFwiMXhWYlNYOFV6SWlNUE1aalpQXCIsXG4gIFwiZG9KckNPOGtDQWdOeVwiLFxuICBcImg0WjZSZnVReWNkaU1cIixcbiAgXCIzbzdhQ1RQUG00T0hmUkxTSDZcIixcbl07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEVycm9yR2lmKCkge1xuICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgbGV0IGlkID0gZXJyb3JHaWZJZHNbaW5kZXhdO1xuICBsZXQgYXBpUHJvbWlzZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy8ke2lkfT9hcGlfa2V5PSR7Z2lmS2V5fWAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGxldCBhcGlQcm9taXNlUmVzb2x2ZWQgPSBhd2FpdCBhcGlQcm9taXNlLmpzb24oKTtcbiAgbGV0IHNyYyA9IGFwaVByb21pc2VSZXNvbHZlZC5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG4gIHJldHVybiBzcmM7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJHaWYoXG4gIHdlYXRoZXIsXG4gIHRpbWVBdENpdHksXG4gIHN1bnJpc2VEYXRlLFxuICBzdW5zZXREYXRlLFxuICB1bml0cyxcbiAgdGVtcEZlZWxzUm91bmRlZCxcbiAgbW9vbnBoYXNlXG4pIHtcbiAgbGV0IG1vbWVudDtcbiAgaWYgKHRpbWVBdENpdHkgLSBzdW5zZXREYXRlID4gMC41IHx8IHRpbWVBdENpdHkgLSBzdW5yaXNlRGF0ZSA8IDApIHtcbiAgICBtb21lbnQgPSBcIm5pZ2h0XCI7XG4gIH1cbiAgaWYgKHRpbWVBdENpdHkgPiBzdW5yaXNlRGF0ZSAmJiB0aW1lQXRDaXR5IDwgc3Vuc2V0RGF0ZSkge1xuICAgIG1vbWVudCA9IFwiZGF5XCI7XG4gICAgaWYgKCh0aW1lQXRDaXR5IC0gc3VucmlzZURhdGUpIC8gKDYwICogMTAwMCAqIDYwKSA8IDYpIHtcbiAgICAgIG1vbWVudCA9IFwibW9ybmluZ1wiO1xuICAgIH1cbiAgICBpZiAoKHN1bnNldERhdGUgLSB0aW1lQXRDaXR5KSAvICg2MCAqIDEwMDAgKiA2MCkgPCAwLjUpIHtcbiAgICAgIG1vbWVudCA9IFwic3Vuc2V0XCI7XG4gICAgfVxuICB9XG5cbiAgbGV0IHRlbXBlcmF0dXJlO1xuICBpZiAodW5pdHMgPT0gXCJtZXRyaWNcIikge1xuICAgIGlmICh0ZW1wRmVlbHNSb3VuZGVkIDwgLTEwKSB7XG4gICAgICB0ZW1wZXJhdHVyZSA9IFwiZnJlZXppbmdcIjtcbiAgICB9XG4gIH1cbiAgaWYgKHVuaXRzID09IFwiaW1wZXJpYWxcIikge1xuICAgIGlmICh0ZW1wRmVlbHNSb3VuZGVkIDwgMTQpIHtcbiAgICAgIHRlbXBlcmF0dXJlID0gXCJmcmVlemluZ1wiO1xuICAgIH1cbiAgfVxuXG4gIGxldCBpZCA9IFwiemE1eGlrdVJyME96S1wiO1xuXG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9yYWluLykpIHtcbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImRyaXp6bGVcIikge1xuICAgICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICAgIGlkID0gXCJsMElySWtxN1EzaVJJSTBoeVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICAgIGlkID0gXCJ4VDlHRUljMW5RN2JWUVE1NFFcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCJ4VDlHRUljMW5RN2JWUVE1NFFcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJsaWdodFwiKSB7XG4gICAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgICAgaWQgPSBcInhUOUdFT2cwOU91UmVzblo2Z1wiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgICBpZCA9IFwieFRjblQ4UHVLbDVHQnoyNm1rXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgICAgaWQgPSBcInhUOUdFSWMxblE3YlZRUTU0UVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgICAgaWQgPSBcInhUOUdFSWMxblE3YlZRUTU0UVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcIm1vZGVyYXRlXCIpIHtcbiAgICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgICBpZCA9IFwiVzBjM3hjWjNGMWQwRVlZYjBmXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgIGlkID0gXCJoazZjemdmbXdWSlMwXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgICAgaWQgPSBcIjF3clJRSHliWnFBQjRqWnFad1wiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgICAgaWQgPSBcIjV0b3JFRU04UW5SOTVDcWcxMVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImhlYXZ5XCIpIHtcbiAgICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgICBpZCA9IFwiWGdZb1RkZ2o1TmlVNzhwcmZtXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgIGlkID0gXCJYZ1lvVGRnajVOaVU3OHByZm1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgICBpZCA9IFwiVFZwZVhEaTh4VGx5b1wiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgICAgaWQgPSBcImwwTVlBZnhiZzNmaHFuMVJ1XCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwidGh1bmRlcnN0b3JtXCIpIHtcbiAgICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgICBpZCA9IFwiM29zeFl6SVFScU40RE9FZGRDXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgIGlkID0gXCJsNEZHa2R0TEdmcFVpQmRGQ1wiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICAgIGlkID0gXCJsME1ZT0pDQ0U4eVRmY3dTWVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgICAgaWQgPSBcIlpxVU5TeUtZQzl5TjNPNGpIQVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvY2xvdWRzLykpIHtcbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcIm92ZXJjYXN0XCIpIHtcbiAgICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgICBpZCA9IFwiZFdJYXUxWlJ5SWozajZZRWFMXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgIGlkID0gXCJkV0lhdTFaUnlJajNqNllFYUxcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgICBpZCA9IFwiWWhnOWw4a1h1cTk0UVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgICAgaWQgPSBcIjJmQzc0ak5uNVNQdk9cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJicm9rZW5cIikge1xuICAgICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICAgIGlkID0gXCI2M1dzTmc5REFoUmtZXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgIGlkID0gXCI2M1dzTmc5REFoUmtZXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgICAgaWQgPSBcIjQ5VkIwUEh4UjVWc2NcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCIxM1FzbFhnS09Rem1oeVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcInNjYXR0ZXJlZFwiKSB7XG4gICAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgICAgaWQgPSBcInVPdWlLNEY1elprWjJcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgICAgaWQgPSBcIjBTdHlpbmNmNksydHZmamI1UVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICAgIGlkID0gXCI2M1dzTmc5REFoUmtZXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgICBpZiAobW9vbnBoYXNlID09IDAuNSkge1xuICAgICAgICAgIGlkID0gXCJuVjVsMlNGc1U5M2NrYVdseW5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcInNjYXR0ZXJlZFwiKSB7XG4gICAgICAgICAgICBpZCA9IFwid3dqRVBqcWN1UHd2U1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImZld1wiKSB7XG4gICAgICAgICAgICBpZCA9IFwid3dqRVBqcWN1UHd2U1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImZld1wiKSB7XG4gICAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgICAgaWQgPSBcImdaRUJwdU9rUHV5ZGlcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgICAgaWQgPSBcIm1ubzZCSmZ5OFVTaWNcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgICBpZCA9IFwiV3pMRGxqQnBwbFV2bVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgICAgaWYgKG1vb25waGFzZSA9PSAwLjUpIHtcbiAgICAgICAgICBpZCA9IFwiblY1bDJTRnNVOTNja2FXbHluXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJzY2F0dGVyZWRcIikge1xuICAgICAgICAgICAgaWQgPSBcInd3akVQanFjdVB3dlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJmZXdcIikge1xuICAgICAgICAgICAgaWQgPSBcInd3akVQanFjdVB3dlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL3Nub3cvKSkge1xuICAgIGlmICh0ZW1wZXJhdHVyZSA9PSBcImZyZWV6aW5nXCIpIHtcbiAgICAgIGlkID0gXCJzNEJpNDIwbU1EUkJLXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvc2hvd2VyLykpIHtcbiAgICAgICAgICBpZCA9IFwiT05Mb1JSQUhRaDVrWVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9saWdodC8pKSB7XG4gICAgICAgICAgaWQgPSBcIjdCZ3B3N1B3ZHhvRENcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZCA9IFwiNXFGRTkxT21laGRScTBzTDVhXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL3Nob3dlci8pKSB7XG4gICAgICAgICAgaWQgPSBcIk9OTG9SUkFIUWg1a1lcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvbGlnaHQvKSkge1xuICAgICAgICAgIGlkID0gXCJPV3hyeFJIWTZhZlJ1XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWQgPSBcIjVxRkU5MU9tZWhkUnEwc0w1YVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL3Nob3dlci8pKSB7XG4gICAgICAgICAgaWQgPSBcIk9OTG9SUkFIUWg1a1lcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvbGlnaHQvKSkge1xuICAgICAgICAgIGlkID0gXCJYaTJYdTBNZWpoc1VvXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWQgPSBcIjVxRkU5MU9tZWhkUnEwc0w1YVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvc2hvd2VyLykpIHtcbiAgICAgICAgICBpZCA9IFwiT05Mb1JSQUhRaDVrWVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9saWdodC8pKSB7XG4gICAgICAgICAgaWQgPSBcImJHYU9kcWVxWVFLYzBcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZCA9IFwiM1RLVHJuMjk5bUk2UnNZdWFVXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL2hhemUvKSkge1xuICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgaWQgPSBcInIyT011VENGbzBydjJyZ0FMNVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICBpZCA9IFwiZGdlSUg1UlB5bkE2UVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgIGlkID0gXCJ4VGlUbmg3SGVZYTdiQmxpNllcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgIGlkID0gXCIzc0pRZEMwZlhKTHlXT3M0V01cIjtcbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL21pc3QvKSkge1xuICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgaWQgPSBcIm9WYWlncVVoUHZEZ2xRMHVXSlwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICBpZCA9IFwib1ZhaWdxVWhQdkRnbFEwdVdKXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgaWQgPSBcIjNvNzJGNjVkSmw3WjBQdGRqR1wiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgaWQgPSBcIjNvNzJGNjVkSmw3WjBQdGRqR1wiO1xuICAgIH1cbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvZm9nLykpIHtcbiAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgIGlkID0gXCJvQWJ2TVh2YWgxTTBVXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgIGlkID0gXCIzbzdyYlQzRUNDWGRFR0U4ZnVcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICBpZCA9IFwieFQ4cUJqM094bDlrdVFLZ09rXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICBpZCA9IFwiZHo2TnJrMzV4V1AzcVwiO1xuICAgIH1cbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvc2xlZXQvKSkge1xuICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgaWQgPSBcImQzbWxtdE5Qb3hOcnQ0QmlcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgaWQgPSBcIkpUZ2hsTGcwZDFCcFp2YlFsR1wiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgIGlkID0gXCJKVGdobExnMGQxQnBadmJRbEdcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgIGlkID0gXCJkM21sbXROUG94TnJ0NEJpXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9kcml6emxlLykpIHtcbiAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgIGlkID0gXCJ4VDlHRU9nMDlPdVJlc25aNmdcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgaWQgPSBcImwwSXJJa3E3UTNpUklJMGh5XCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgaWQgPSBcInhUOUdFSWMxblE3YlZRUTU0UVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgaWQgPSBcInhUOUdFT2cwOU91UmVzblo2Z1wiO1xuICAgIH1cbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvc21va2UvKSkge1xuICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgaWQgPSBcImwySmU5ZFVJNUxwemZIR1RlXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgIGlkID0gXCJaV1JDV2RVeW1JR05XXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgaWQgPSBcImw0cFRybmM0a2wydXVwSkY2XCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICBpZCA9IFwibDJKZTlkVUk1THB6ZkhHVGVcIjtcbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL2R1c3QvKSkge1xuICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgaWQgPSBcInRxdFpEajVCcUMwQ1lcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgaWQgPSBcIkFVYzRxZVp4RzI4bHFcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICBpZCA9IFwidHF0WkRqNUJxQzBDWVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgaWQgPSBcImw0cFQwTnRQU01WM3B3NkxtXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC90aHVuZGVyc3Rvcm0vKSAmJiAhd2VhdGhlci5tYXRjaCgvcmFpbi8pKSB7XG4gICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICBpZCA9IFwiM29zeFl6SVFScU40RE9FZGRDXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgIGlkID0gXCIzb0VqSEdaa3JvbG05VWd2TTRcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICBpZCA9IFwiWTRKUFlzckpFazQ1NHBOYnRzXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICBpZCA9IFwiM284NXh6RXRRczY5M2xuM3FNXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9jbGVhci8pKSB7XG4gICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICBpZCA9IFwiVnhidnBmYVRUbzNsZVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICBpZCA9IFwiUnFTSjZuUVZzT3B4ZVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgIGlkID0gXCJaWklFdFFIbWlUTnd1eFRPZHRcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgIGlmIChtb29ucGhhc2UgPT0gMC41KSB7XG4gICAgICAgIGlkID0gXCJhTjlHcW9SN09EM25xXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9vbnBoYXNlID4gMCAmJiBtb29ucGhhc2UgPCAwLjI1KSB7XG4gICAgICAgIGlkID0gXCI5dWtQT0NTOUVPRXRhXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9vbnBoYXNlID4gMC43NSAmJiBtb29ucGhhc2UgPD0gMSkge1xuICAgICAgICBpZCA9IFwiOXVrUE9DUzlFT0V0YVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWQgPSBcIm01b1FhYkJkb095ZTRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV0IGFwaVByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvJHtpZH0/YXBpX2tleT0ke2dpZktleX1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGxldCBzcmMgPSBhcGlQcm9taXNlUmVzb2x2ZWQuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICByZXR1cm4gc3JjO1xufVxuXG5leHBvcnQgeyBnZXRFcnJvckdpZiwgZ2V0V2VhdGhlckdpZiB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNob3dPbkluZm8gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IHsgc2hvd09uQ2FyZCB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5pbXBvcnQgeyBtYWtlRXJyb3JDYXJkIH0gZnJvbSBcIi4vZXJyb3JDYXJkc1wiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlckdpZiB9IGZyb20gXCIuL2dpZkFQSVwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNVbmZhdm9yaXRlIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKTtcblxuY29uc3QgaGFuZGxlVXNlcklucHV0ID0ge1xuICB3ZWF0aGVyS2V5OiBcIjhhZTJkMTNlNTRlYmVmNzc1ZWZmZjJjNTI4MTdhNWUyXCIsXG4gIHN1bkFuZE1vb25LZXk6IFwiVkFNNUs2Q1RCVkU3VFJKNFlDMzY1UURGOFwiLFxuICBnaWZLZXk6IFwiWlNxTFpCb1AxTDI1cFMwM0c0NzhwalJCYjBORVNiMENcIixcbiAgdW5pdHM6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpLFxuICBoYW5kbGVTZWFyY2hJY29uKGNpdHlGcm9tQ2FyZCkge1xuICAgIGxldCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaGJhciA+IGlucHV0XCIpO1xuICAgIGxldCB1bml0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpO1xuICAgIGxldCB1bml0c1RvVXNlID0gXCJcIjtcbiAgICB1bml0cyA/ICh1bml0c1RvVXNlID0gXCJtZXRyaWNcIikgOiAodW5pdHNUb1VzZSA9IFwiaW1wZXJpYWxcIik7XG4gICAgaWYgKHNlYXJjaGJhci52YWx1ZSkge1xuICAgICAgZ2V0V2VhdGhlcihzZWFyY2hiYXIudmFsdWUsIHVuaXRzVG9Vc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2l0eUZyb21DYXJkKSB7XG4gICAgICAgIGdldFdlYXRoZXIoY2l0eUZyb21DYXJkLCB1bml0c1RvVXNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgIGxldCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuICAgICAgICAgIGdldFdlYXRoZXIoY2l0eS5pbm5lclRleHQsIHVuaXRzVG9Vc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ha2VGYXZMaXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FyZEZvckZhdkxpc3QobG9jYXRpb24sIHVuaXRzKSB7XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtoYW5kbGVVc2VySW5wdXQud2VhdGhlcktleX0mdW5pdHM9JHt1bml0c31gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuY29kID09IDQwNCkge1xuICAgIGxldCBlcnJvckNhcmQgPSBhd2FpdCBtYWtlRXJyb3JDYXJkKDQwNCk7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZXJyb3JDYXJkKTtcbiAgICBnZXRPcHRpb25zKGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY2l0eSA9IGFwaVByb21pc2VSZXNvbHZlZC5uYW1lO1xuICAgIGxldCBjb3VudHJ5ID0gbnVsbDtcbiAgICBjb3VudHJ5ID0gYXBpUHJvbWlzZVJlc29sdmVkLnN5cy5jb3VudHJ5O1xuICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG4gICAgbGV0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwICogMTAwMDtcbiAgICBsZXQgZGF0ZUF0Q2l0eSA9IG5ldyBEYXRlKFxuICAgICAgdGltZU5vdyArIG9mZnNldCArIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDBcbiAgICApO1xuICAgIGxldCB0aW1lQXRDaXR5ID0gZGF0ZUF0Q2l0eS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICB9KTtcbiAgICBsZXQgZGF0ZUF0Q2l0eVNpbXBsZSA9IGRhdGVBdENpdHkudG9EYXRlU3RyaW5nKCk7XG4gICAgbGV0IHRlbXBlcmF0dXJlID0gYXBpUHJvbWlzZVJlc29sdmVkLm1haW4udGVtcDtcbiAgICBsZXQgdGVtcFJvdW5kZWQgPSBNYXRoLnJvdW5kKHRlbXBlcmF0dXJlICogMTApIC8gMTA7XG4gICAgbGV0IHRlbXBlcmF0dXJlRmVlbHMgPSBhcGlQcm9taXNlUmVzb2x2ZWQubWFpbi5mZWVsc19saWtlO1xuICAgIGxldCB0ZW1wRmVlbHNSb3VuZGVkID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZUZlZWxzICogMTApIC8gMTA7XG4gICAgbGV0IHdlYXRoZXIgPSBhcGlQcm9taXNlUmVzb2x2ZWQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGxldCBjYXJkID0gc2hvd09uQ2FyZChcbiAgICAgIHVuaXRzLFxuICAgICAgY2l0eSxcbiAgICAgIGNvdW50cnksXG4gICAgICB0aW1lQXRDaXR5LFxuICAgICAgZGF0ZUF0Q2l0eVNpbXBsZSxcbiAgICAgIHRlbXBSb3VuZGVkLFxuICAgICAgdGVtcEZlZWxzUm91bmRlZCxcbiAgICAgIHdlYXRoZXJcbiAgICApO1xuICAgIHJldHVybiBjYXJkO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCB1bml0cykge1xuICBsZXQgZmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtYmFyXCIpO1xuICBpZiAoZmF2QmFyKSB7XG4gICAgZmF2QmFyLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICB9XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtoYW5kbGVVc2VySW5wdXQud2VhdGhlcktleX0mdW5pdHM9JHt1bml0c31gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuY29kID09IDQwNCkge1xuICAgIGxldCBlcnJvckNhcmQgPSBhd2FpdCBtYWtlRXJyb3JDYXJkKDQwNCk7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZXJyb3JDYXJkKTtcbiAgICBnZXRPcHRpb25zKGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY2l0eSA9IGFwaVByb21pc2VSZXNvbHZlZC5uYW1lO1xuXG4gICAgbGV0IGNpdGllcyA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGlmIChjaXRpZXMubGVuZ3RoID4gMCAmJiBjaXRpZXMuc29tZSgoYykgPT4gYyA9PSBjaXR5KSkge1xuICAgICAgZ2V0T3B0aW9uc1VuZmF2b3JpdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0T3B0aW9ucyh0cnVlKTtcbiAgICB9XG5cbiAgICBsZXQgY291bnRyeSA9IG51bGw7XG4gICAgY291bnRyeSA9IGFwaVByb21pc2VSZXNvbHZlZC5zeXMuY291bnRyeTtcbiAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGxldCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG4gICAgbGV0IGRhdGVBdENpdHkgPSBuZXcgRGF0ZShcbiAgICAgIHRpbWVOb3cgKyBvZmZzZXQgKyBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwXG4gICAgKTtcbiAgICBsZXQgdGltZUF0Q2l0eSA9IGRhdGVBdENpdHkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IGRhdGVBdENpdHlTaW1wbGUgPSBkYXRlQXRDaXR5LnRvRGF0ZVN0cmluZygpO1xuICAgIGxldCB0ZW1wZXJhdHVyZSA9IGFwaVByb21pc2VSZXNvbHZlZC5tYWluLnRlbXA7XG4gICAgbGV0IHRlbXBSb3VuZGVkID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZSAqIDEwKSAvIDEwO1xuICAgIGxldCB0ZW1wZXJhdHVyZUZlZWxzID0gYXBpUHJvbWlzZVJlc29sdmVkLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgdGVtcEZlZWxzUm91bmRlZCA9IE1hdGgucm91bmQodGVtcGVyYXR1cmVGZWVscyAqIDEwKSAvIDEwO1xuICAgIGxldCB3ZWF0aGVyID0gYXBpUHJvbWlzZVJlc29sdmVkLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgbGV0IGdpZlNyYyA9IFwiXCI7XG4gICAgbGV0IHJhaW4xaCA9IFwiXCI7XG4gICAgbGV0IHJhaW4zaCA9IFwiXCI7XG4gICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5yYWluKSB7XG4gICAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIxaFwiXSkge1xuICAgICAgICByYWluMWggPSBhcGlQcm9taXNlUmVzb2x2ZWQucmFpbltcIjFoXCJdO1xuICAgICAgfVxuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5yYWluW1wiM2hcIl0pIHtcbiAgICAgICAgcmFpbjNoID0gYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIzaFwiXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHNub3cxaCA9IFwiXCI7XG4gICAgbGV0IHNub3czaCA9IFwiXCI7XG4gICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5zbm93KSB7XG4gICAgICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIxaFwiXSkge1xuICAgICAgICBzbm93MWggPSBhcGlQcm9taXNlUmVzb2x2ZWQuc25vd1tcIjFoXCJdO1xuICAgICAgfVxuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5zbm93W1wiM2hcIl0pIHtcbiAgICAgICAgc25vdzNoID0gYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIzaFwiXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHN1bnJpc2UgPSBuZXcgRGF0ZShcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3VucmlzZVwiXSAqIDEwMDAgK1xuICAgICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDAgK1xuICAgICAgICAgIG9mZnNldFxuICAgICAgKVxuICAgICkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IHN1bnNldCA9IG5ldyBEYXRlKFxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC5zeXNbXCJzdW5zZXRcIl0gKiAxMDAwICtcbiAgICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwICtcbiAgICAgICAgICBvZmZzZXRcbiAgICAgIClcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIH0pO1xuICAgIGxldCBjbG91ZGluZXNzID0gYXBpUHJvbWlzZVJlc29sdmVkLmNsb3Vkc1tcImFsbFwiXTtcbiAgICBsZXQgd2luZCA9IGFwaVByb21pc2VSZXNvbHZlZC53aW5kW1wic3BlZWRcIl07XG5cbiAgICBsZXQgc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGdldEZyb21TdW5BbmRNb29uQVBJKFxuICAgICAgbG9jYXRpb24sXG4gICAgICBkYXRlQXRDaXR5XG4gICAgKTtcbiAgICBsZXQgbW9vbnBoYXNlO1xuICAgIGxldCB1dmluZGV4O1xuICAgIGlmIChzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zKSB7XG4gICAgICBtb29ucGhhc2UgPSBzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zLm1vb25waGFzZTtcbiAgICAgIHV2aW5kZXggPSBzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmN1cnJlbnRDb25kaXRpb25zLnV2aW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vb25waGFzZSA9IHN1bkFuZE1vb25BcGlQcm9taXNlUmVzb2x2ZWQuZGF5c1swXS5tb29ucGhhc2U7XG4gICAgICB1dmluZGV4ID0gc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZC5kYXlzWzBdLnV2aW5kZXg7XG4gICAgfVxuXG4gICAgbGV0IHN1bnJpc2VEYXRlID0gbmV3IERhdGUoXG4gICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3VucmlzZVwiXSAqIDEwMDAgK1xuICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwICtcbiAgICAgICAgb2Zmc2V0XG4gICAgKTtcblxuICAgIGxldCBzdW5zZXREYXRlID0gbmV3IERhdGUoXG4gICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3Vuc2V0XCJdICogMTAwMCArXG4gICAgICAgIGFwaVByb21pc2VSZXNvbHZlZC50aW1lem9uZSAqIDEwMDAgK1xuICAgICAgICBvZmZzZXRcbiAgICApO1xuXG4gICAgdHJ5IHtcbiAgICAgIGdpZlNyYyA9IGF3YWl0IGdldFdlYXRoZXJHaWYoXG4gICAgICAgIHdlYXRoZXIsXG4gICAgICAgIGRhdGVBdENpdHksXG4gICAgICAgIHN1bnJpc2VEYXRlLFxuICAgICAgICBzdW5zZXREYXRlLFxuICAgICAgICB1bml0cyxcbiAgICAgICAgdGVtcEZlZWxzUm91bmRlZCxcbiAgICAgICAgbW9vbnBoYXNlXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGZldGNoaW5nIHdlYXRoZXIgZ2lmOiBcIiwgZXJyb3IpO1xuICAgIH1cblxuICAgIGxldCBkYXkgPSBmYWxzZTtcbiAgICBpZiAoZGF0ZUF0Q2l0eSA+IHN1bnJpc2VEYXRlICYmIGRhdGVBdENpdHkgPCBzdW5zZXREYXRlKSB7XG4gICAgICBkYXkgPSB0cnVlO1xuICAgIH1cblxuICAgIHNob3dPbkluZm8oXG4gICAgICB1bml0cyxcbiAgICAgIGNpdHksXG4gICAgICBjb3VudHJ5LFxuICAgICAgdGltZUF0Q2l0eSxcbiAgICAgIGRhdGVBdENpdHlTaW1wbGUsXG4gICAgICB0ZW1wUm91bmRlZCxcbiAgICAgIHRlbXBGZWVsc1JvdW5kZWQsXG4gICAgICB3ZWF0aGVyLFxuICAgICAgcmFpbjFoLFxuICAgICAgcmFpbjNoLFxuICAgICAgc25vdzFoLFxuICAgICAgc25vdzNoLFxuICAgICAgc3VucmlzZSxcbiAgICAgIHN1bnNldCxcbiAgICAgIGNsb3VkaW5lc3MsXG4gICAgICB3aW5kLFxuICAgICAgZ2lmU3JjLFxuICAgICAgbW9vbnBoYXNlLFxuICAgICAgdXZpbmRleCxcbiAgICAgIGRheVxuICAgICk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RnJvbVN1bkFuZE1vb25BUEkobG9jYXRpb24sIGRhdGVBdENpdHkpIHtcbiAgbGV0IHN1bkFuZE1vb25BcGlQcm9taXNlUmVzb2x2ZWQ7XG5cbiAgdHJ5IHtcbiAgICBsZXQgc3VuQW5kTW9vbkFwaVByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufS8ke1xuICAgICAgICBEYXRlLnBhcnNlKGRhdGVBdENpdHkpIC8gMTAwMFxuICAgICAgfS8/a2V5PSR7aGFuZGxlVXNlcklucHV0LnN1bkFuZE1vb25LZXl9JmVsZW1lbnRzPXV2aW5kZXgsbW9vbnBoYXNlYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IHN1bkFuZE1vb25BcGlQcm9taXNlLmpzb24oKTtcbiAgICByZXR1cm4gc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoZXJlIHdhcyBhbiBlcnJvciBvbiB0aGUgc3VuQW5kTW9vbkFQSTogXCIsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVVc2VySW5wdXQ7XG4iLCJpbXBvcnQgeyBnZXRGbGFnIH0gZnJvbSBcIi4vZmxhZ0FQSVwiO1xuaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VCYXNpY3NDYXJkKFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB0aW1lLFxuICBkYXRlLFxuICB0ZW1wLFxuICB0ZW1wRmVlbHMsXG4gIHRlbXBVbml0LFxuICBmb3JGYXZMaXN0XG4pIHtcbiAgbGV0IGJhc2ljcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhc2ljcy5jbGFzc0xpc3QuYWRkKFwiYmFzaWNzXCIpO1xuXG4gIGxldCBiYXNpY3NDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc0NpdHkuaW5uZXJUZXh0ID0gYCR7Y2l0eX1gO1xuICBiYXNpY3NDaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eVwiKTtcbiAgYmFzaWNzQ2l0eS5jbGFzc0xpc3QuYWRkKFwiY2l0eVwiKTtcbiAgbGV0IGJhc2ljc0NvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmFzaWNzQ291bnRyeS5pbm5lclRleHQgPSBgJHtjb3VudHJ5fWA7XG4gIGxldCBiYXNpY3NUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc1RpbWUuaW5uZXJUZXh0ID0gYCR7dGltZX1gO1xuICBsZXQgYmFzaWNzRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBiYXNpY3NEYXRlLmlubmVyVGV4dCA9IGAke2RhdGV9YDtcbiAgbGV0IHJldHJpZXZhbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmV0cmlldmFsVGltZS5pbm5lclRleHQgPSBgTGFzdCB1cGRhdGU6ICR7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfWA7XG4gIGxldCB0ZW1wVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVtcFRlbXBlcmF0dXJlLmlubmVyVGV4dCA9IGAke3RlbXB9ICR7dGVtcFVuaXR9YDtcbiAgbGV0IHRlbXBGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVtcEZlZWxzTGlrZS5pbm5lclRleHQgPSBgJHt0ZW1wRmVlbHN9ICR7dGVtcFVuaXR9YDtcbiAgbGV0IGZlZWxzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZmVlbHNMYWJlbC5pbm5lclRleHQgPSBcIkZlZWxzIGxpa2U6IFwiO1xuXG4gIGxldCBiYXNpY3NUaXRsZUNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYmFzaWNzVGl0bGVDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJhc2ljc0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYmFzaWNzVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXNpY3NUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKFwiYmFzaWNzLXRlbXBlcmF0dXJlXCIpO1xuICBiYXNpY3NUaXRsZUNpdHkuYXBwZW5kQ2hpbGQoYmFzaWNzQ2l0eSk7XG4gIGJhc2ljc1RpdGxlQ291bnRyeS5hcHBlbmRDaGlsZChiYXNpY3NDb3VudHJ5KTtcbiAgbGV0IGZsYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBmbGFnLnNldEF0dHJpYnV0ZShcbiAgICBcImNyb3Nzb3JpZ2luXCIsXG4gICAgXCJDcm9zcy1PcmlnaW4tUmVzb3VyY2UtUG9saWN5OiBjcm9zcy1vcmlnaW4gXCJcbiAgKTtcbiAgZmxhZy5hbHQgPSBgJHtjb3VudHJ5fSBmbGFnYDtcbiAgZmxhZy5zcmMgPSBnZXRGbGFnKGNvdW50cnkpO1xuICBmbGFnLmNsYXNzTGlzdC5hZGQoXCJmbGFnXCIpO1xuXG4gIGxldCBiYXNpY3NEYXRlQW5kVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhc2ljc0RhdGVBbmRUaW1lLmFwcGVuZENoaWxkKGJhc2ljc1RpbWUpO1xuICBiYXNpY3NEYXRlQW5kVGltZS5hcHBlbmRDaGlsZChiYXNpY3NEYXRlKTtcblxuICBiYXNpY3MuYXBwZW5kQ2hpbGQoYmFzaWNzVGl0bGVDaXR5KTtcbiAgYmFzaWNzRGV0YWlscy5hcHBlbmRDaGlsZChmbGFnKTtcbiAgYmFzaWNzRGV0YWlscy5hcHBlbmRDaGlsZChiYXNpY3NEYXRlQW5kVGltZSk7XG4gIGJhc2ljc0RldGFpbHMuYXBwZW5kQ2hpbGQocmV0cmlldmFsVGltZSk7XG4gIGJhc2ljcy5hcHBlbmRDaGlsZChiYXNpY3NEZXRhaWxzKTtcbiAgYmFzaWNzVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQodGVtcFRlbXBlcmF0dXJlKTtcbiAgYmFzaWNzVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoZmVlbHNMYWJlbCk7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKHRlbXBGZWVsc0xpa2UpO1xuICBiYXNpY3MuYXBwZW5kQ2hpbGQoYmFzaWNzVGVtcGVyYXR1cmUpO1xuXG4gIGlmIChmb3JGYXZMaXN0KSB7XG4gICAgYmFzaWNzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZXQgc2VhcmNoYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXIgPiBpbnB1dFwiKTtcbiAgICAgIHNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbihjaXR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBiYXNpY3M7XG59XG4iLCJpbXBvcnQgQ2xvdWRpbmVzc0ljb24gZnJvbSBcIi4vY2xvdWQtb3V0bGluZS5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbG91ZHNDYXJkKGNsb3VkaW5lc3MpIHtcbiAgbGV0IGNsb3VkU3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG91ZFN0YXRzLmNsYXNzTGlzdC5hZGQoXCJjbG91ZFN0YXRzXCIpO1xuICBsZXQgY2xvdWRpbmVzc0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY2xvdWRpbmVzc0ljb24uYWx0ID0gXCJDbG91ZGluZXNzIGljb25cIjtcbiAgY2xvdWRpbmVzc0ljb24uc3JjID0gQ2xvdWRpbmVzc0ljb247XG4gIGxldCBjbG91ZGluZXNzQ2xvdWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNsb3VkaW5lc3NDbG91ZHMuaW5uZXJUZXh0ID0gYENsb3VkaW5lc3M6ICR7Y2xvdWRpbmVzc30gJWA7XG4gIGNsb3VkU3RhdHMuYXBwZW5kQ2hpbGQoY2xvdWRpbmVzc0ljb24pO1xuICBjbG91ZFN0YXRzLmFwcGVuZENoaWxkKGNsb3VkaW5lc3NDbG91ZHMpO1xuICByZXR1cm4gY2xvdWRTdGF0cztcbn1cbiIsImltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRDYXJkRm9yRmF2TGlzdCB9IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9uc0Zhdkxpc3QgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWtlRmF2TGlzdCgpIHtcbiAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuICBsZXQgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgbGV0IHVuaXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldHJpY1wiKSk7XG4gIGxldCBtZXRyaWMgPSBcIlwiO1xuICBsZXQgZmF2TGlzdFNvcnRlZCA9IFtdO1xuICB1bml0cyA/IChtZXRyaWMgPSBcIm1ldHJpY1wiKSA6IChtZXRyaWMgPSBcImltcGVyaWFsXCIpO1xuICBjb25zdCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgbGV0IHByb21pc2VzID0gW107XG5cbiAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcbiAgICBsZXQgZ2V0Q2l0eSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjaXR5Q2FyZCA9IGdldENhcmRGb3JGYXZMaXN0KGNpdHksIG1ldHJpYyk7XG4gICAgICByZXNvbHZlKGNpdHlDYXJkKTtcbiAgICAgIHJlamVjdChcIkVycm9yIHdpbGUgZ2V0dGluZyBjaXR5Q2FyZCBmb3IgXCIsIGNpdHkpO1xuICAgIH0pO1xuICAgIHByb21pc2VzLnB1c2goZ2V0Q2l0eSk7XG4gIH0pO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChmYXZMaXN0KSA9PiB7XG4gICAgaWYgKFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvcnRcIikpID09IFwiYXRvelwiIHx8XG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29ydFwiKSkgPT0gXCJ6dG9hXCJcbiAgICApIHtcbiAgICAgIGNpdGllcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGxldCBjaXR5RnJvbUNhcmQgPSBmYXZMaXN0LmZpbHRlcigoY2l0eU9iaikgPT4gY2l0eU9iai5jaXR5TmFtZSA9PSBjKTtcbiAgICAgICAgZmF2TGlzdFNvcnRlZC5wdXNoKGNpdHlGcm9tQ2FyZFswXS5jYXJkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvcnRcIikpID09IFwidGVtcGN0b2hcIikge1xuICAgICAgbGV0IGZhdkxpc3RTb3J0ZWRDYXJkcyA9IGZhdkxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS50ZW1wQWN0dWFsID4gYi50ZW1wQWN0dWFsKSB7XG4gICAgICAgICAgYCR7YS5jaXR5TmFtZX0sICR7YS50ZW1wQWN0dWFsfSBpcyBob3R0ZXIgdGhhbiAke2IuY2l0eU5hbWV9LCAke2IudGVtcEFjdHVhbH1gO1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnRlbXBBY3R1YWwgPCBiLnRlbXBBY3R1YWwpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZmF2TGlzdFNvcnRlZENhcmRzLmZvckVhY2goKGMpID0+IGZhdkxpc3RTb3J0ZWQucHVzaChjLmNhcmQpKTtcbiAgICAgIGxldCBjaXRpZXNTb3J0ZWQgPSBbXTtcbiAgICAgIGZhdkxpc3RTb3J0ZWRDYXJkcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNpdGllc1NvcnRlZC5wdXNoKGMuY2l0eU5hbWUpO1xuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBKU09OLnN0cmluZ2lmeShjaXRpZXNTb3J0ZWQpKTtcbiAgICB9XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSA9PSBcInRlbXBodG9jXCIpIHtcbiAgICAgIGxldCBmYXZMaXN0U29ydGVkQ2FyZHMgPSBmYXZMaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEudGVtcEFjdHVhbCA+IGIudGVtcEFjdHVhbCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS50ZW1wQWN0dWFsIDwgYi50ZW1wQWN0dWFsKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZmF2TGlzdFNvcnRlZENhcmRzLmZvckVhY2goKGMpID0+IGZhdkxpc3RTb3J0ZWQucHVzaChjLmNhcmQpKTtcbiAgICAgIGxldCBjaXRpZXNTb3J0ZWQgPSBbXTtcbiAgICAgIGZhdkxpc3RTb3J0ZWRDYXJkcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNpdGllc1NvcnRlZC5wdXNoKGMuY2l0eU5hbWUpO1xuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBKU09OLnN0cmluZ2lmeShjaXRpZXNTb3J0ZWQpKTtcbiAgICB9XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSA9PSBcImZlZWxzY3RvaFwiKSB7XG4gICAgICBsZXQgZmF2TGlzdFNvcnRlZENhcmRzID0gZmF2TGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmZlZWxzID4gYi5mZWVscykge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmZlZWxzIDwgYi5mZWVscykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmYXZMaXN0U29ydGVkQ2FyZHMuZm9yRWFjaCgoYykgPT4gZmF2TGlzdFNvcnRlZC5wdXNoKGMuY2FyZCkpO1xuICAgICAgbGV0IGNpdGllc1NvcnRlZCA9IFtdO1xuICAgICAgZmF2TGlzdFNvcnRlZENhcmRzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY2l0aWVzU29ydGVkLnB1c2goYy5jaXR5TmFtZSk7XG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIEpTT04uc3RyaW5naWZ5KGNpdGllc1NvcnRlZCkpO1xuICAgIH1cbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvcnRcIikpID09IFwiZmVlbHNodG9jXCIpIHtcbiAgICAgIGxldCBmYXZMaXN0U29ydGVkQ2FyZHMgPSBmYXZMaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEuZmVlbHMgPiBiLmZlZWxzKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmZlZWxzIDwgYi5mZWVscykge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZhdkxpc3RTb3J0ZWRDYXJkcy5mb3JFYWNoKChjKSA9PiBmYXZMaXN0U29ydGVkLnB1c2goYy5jYXJkKSk7XG4gICAgICBsZXQgY2l0aWVzU29ydGVkID0gW107XG4gICAgICBmYXZMaXN0U29ydGVkQ2FyZHMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjaXRpZXNTb3J0ZWQucHVzaChjLmNpdHlOYW1lKTtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgSlNPTi5zdHJpbmdpZnkoY2l0aWVzU29ydGVkKSk7XG4gICAgfVxuICAgIGlmIChpbmZvKSB7XG4gICAgICBmYXZvcml0ZXNCYXIucmVmcmVzaEZhdm9yaXRlc0JhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2V0dGluZ3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzLWJhclwiKTtcbiAgICAgIGlmICghc2V0dGluZ3NCYXIpIHtcbiAgICAgICAgZ2V0T3B0aW9uc0Zhdkxpc3QoKTtcbiAgICAgIH1cbiAgICAgIGxldCBmYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gICAgICBmYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoaWRkZW5cIik7XG4gICAgICBjbGVhbihyZXN1bHQpO1xuICAgICAgZmF2TGlzdFNvcnRlZC5mb3JFYWNoKChmKSA9PiByZXN1bHQuYXBwZW5kQ2hpbGQoZikpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUdpZkNhcmQoZ2lmU3JjKSB7XG4gIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5hbHQgPSBcIndlYXRoZXIgZ2lmXCI7XG4gIGltYWdlLnNyYyA9IGdpZlNyYztcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZ2lmXCIpO1xuICByZXR1cm4gaW1hZ2U7XG59XG4iLCJpbXBvcnQgTmV3TW9vbiBmcm9tIFwiLi9uZXctbW9vbi5zdmdcIjtcbmltcG9ydCBXYXhpbmdDcmVzY2VudE1vb24gZnJvbSBcIi4vd2F4aW5nLWNyZXNlbnQtbW9vbi5zdmdcIjtcbmltcG9ydCBGaXJzdFF1YXJ0ZXJNb29uIGZyb20gXCIuL2ZpcnN0LXF1YXJ0ZXItbW9vbi5zdmdcIjtcbmltcG9ydCBXYXhpbmdHaWJib3VzTW9vbiBmcm9tIFwiLi93YXhpbmctZ2liYm91cy1tb29uLnN2Z1wiO1xuaW1wb3J0IEZ1bGxNb29uIGZyb20gXCIuL2Z1bGwtbW9vbi5zdmdcIjtcbmltcG9ydCBXYW5pbmdHaWJib3VzTW9vbiBmcm9tIFwiLi93YW5pbmctZ2liYm91cy1tb29uLnN2Z1wiO1xuaW1wb3J0IFRoaXJkUXVhcnRlck1vb24gZnJvbSBcIi4vdGhpcmQtcXVhcnRlci1tb29uLnN2Z1wiO1xuaW1wb3J0IFdhbmluZ0NyZXNjZW50IGZyb20gXCIuL3dhbmluZy1jcmVzY2VudC1tb29uLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1vb25QaGFzZUNhcmQobW9vbnBoYXNlKSB7XG4gIGxldCBtb29uUGhhc2VDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9vblBoYXNlQ2FyZC5jbGFzc0xpc3QuYWRkKFwibW9vbi1waGFzZS1jYXJkXCIpO1xuXG4gIGxldCBtb29uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBtb29uSWNvbi5hbHQgPSBcIk1vb24gcGhhc2UgaWNvblwiO1xuXG4gIGxldCBwaGFzZU5hbWU7XG5cbiAgaWYgKG1vb25waGFzZSA9PSAwKSB7XG4gICAgbW9vbkljb24uc3JjID0gTmV3TW9vbjtcbiAgICBwaGFzZU5hbWUgPSBcIk5ldyBNb29uXCI7XG4gIH1cbiAgaWYgKG1vb25waGFzZSA+IDAgJiYgbW9vbnBoYXNlIDwgMC4yNSkge1xuICAgIG1vb25JY29uLnNyYyA9IFdheGluZ0NyZXNjZW50TW9vbjtcbiAgICBwaGFzZU5hbWUgPSBcIldheGluZyBDcmVzY2VudFwiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPT0gMC4yNSkge1xuICAgIG1vb25JY29uLnNyYyA9IEZpcnN0UXVhcnRlck1vb247XG4gICAgcGhhc2VOYW1lID0gXCJGaXJzdCBRdWFydGVyXCI7XG4gIH1cbiAgaWYgKG1vb25waGFzZSA+IDAuMjUgJiYgbW9vbnBoYXNlIDwgMC41KSB7XG4gICAgbW9vbkljb24uc3JjID0gV2F4aW5nR2liYm91c01vb247XG4gICAgcGhhc2VOYW1lID0gXCJXYXhpbmcgR2liYm91c1wiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPT0gMC41KSB7XG4gICAgbW9vbkljb24uc3JjID0gRnVsbE1vb247XG4gICAgcGhhc2VOYW1lID0gXCJGdWxsIE1vb25cIjtcbiAgfVxuICBpZiAobW9vbnBoYXNlID4gMC41ICYmIG1vb25waGFzZSA8IDAuNzUpIHtcbiAgICBtb29uSWNvbi5zcmMgPSBXYW5pbmdHaWJib3VzTW9vbjtcbiAgICBwaGFzZU5hbWUgPSBcIldhbmluZyBHaWJib3VzXCI7XG4gIH1cbiAgaWYgKG1vb25waGFzZSA9PSAwLjc1KSB7XG4gICAgbW9vbkljb24uc3JjID0gVGhpcmRRdWFydGVyTW9vbjtcbiAgICBwaGFzZU5hbWUgPSBcIkxhc3QgUXVhcnRlclwiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPiAwLjc1ICYmIG1vb25waGFzZSA8PSAxKSB7XG4gICAgbW9vbkljb24uc3JjID0gV2FuaW5nQ3Jlc2NlbnQ7XG4gICAgcGhhc2VOYW1lID0gXCJXYW5pbmcgQ3Jlc2NlbnRcIjtcbiAgfVxuXG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHtwaGFzZU5hbWV9YDtcblxuICBtb29uUGhhc2VDYXJkLmFwcGVuZENoaWxkKG1vb25JY29uKTtcbiAgbW9vblBoYXNlQ2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIG1vb25QaGFzZUNhcmQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZU92ZXJ2aWV3Q2FyZCh3ZWF0aGVyKSB7XG4gIGxldCBvdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJ2aWV3LmNsYXNzTGlzdC5hZGQoXCJvdmVydmlld1wiKTtcbiAgbGV0IG92ZXJ2aWV3V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBvdmVydmlld1dlYXRoZXIuaW5uZXJUZXh0ID0gYCR7d2VhdGhlcn1gO1xuICBvdmVydmlldy5hcHBlbmRDaGlsZChvdmVydmlld1dlYXRoZXIpO1xuXG4gIHJldHVybiBvdmVydmlldztcbn1cbiIsImltcG9ydCBSYWluSWNvbiBmcm9tIFwiLi9yYWluLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhaW5DYXJkKHJhaW5Wb2wxaCwgcmFpblZvbDNoKSB7XG4gIGxldCByYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJhaW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJyYWluLWNhcmRcIik7XG5cbiAgbGV0IHJhaW5JY29uID0gbmV3IEltYWdlKCk7XG4gIHJhaW5JY29uLmFsdCA9IFwiUmFpbiBpY29uXCI7XG4gIHJhaW5JY29uLnNyYyA9IFJhaW5JY29uO1xuXG4gIGxldCByYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiUmFpbiB2b2x1bWVcIjtcblxuICBsZXQgcmFpbjFoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJhaW4xaC5pbm5lclRleHQgPSBgTGFzdCBob3VyOiAke3JhaW5Wb2wxaH0gbW1gO1xuXG4gIHJhaW5JbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmFpbkluZm8uYXBwZW5kQ2hpbGQocmFpbjFoKTtcblxuICBpZiAocmFpblZvbDNoKSB7XG4gICAgbGV0IHJhaW4zaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJhaW4zaC5pbm5lclRleHQgPSBgTGFzdCAzaDogJHtyYWluVm9sM2h9YDtcbiAgICByYWluSW5mby5hcHBlbmRDaGlsZChyYWluM2gpO1xuICB9XG5cbiAgcmFpbkNhcmQuYXBwZW5kQ2hpbGQocmFpbkljb24pO1xuICByYWluQ2FyZC5hcHBlbmRDaGlsZChyYWluSW5mbyk7XG5cbiAgcmV0dXJuIHJhaW5DYXJkO1xufVxuIiwiaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIi4vc2VhcmNoLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlYXJjaEJhcigpIHtcbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXJcIik7XG4gIGxldCBzZWFyY2hJY29uID0gbmV3IEltYWdlKCk7XG4gIHNlYXJjaEljb24uYWx0ID0gXCJTZWFyY2ggSWNvblwiO1xuICBzZWFyY2hJY29uLnNyYyA9IFNlYXJjaEljb247XG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcblxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbik7XG4gIGNvbnN0IHNlYXJjaEJhcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXIgPiBpbnB1dFwiKTtcbiAgc2VhcmNoQmFySW5wdXQub25mb2N1cyA9ICgpID0+IHtcbiAgICBzZWFyY2hCYXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHNlYXJjaEljb24uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IG1ha2VBdXRvUmVmcmVzaFNldHRpbmcgfSBmcm9tIFwiLi9zZXR0aW5nQXV0b1JlZnJlc2hcIjtcbmltcG9ydCB7IG1ha2VTb3J0U2V0dGluZyB9IGZyb20gXCIuL3NldHRpbmdTb3J0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2V0dGluZ3NCYXIoKSB7XG4gIGxldCBzZXR0aW5nc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHRpbmdzQmFyLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5ncy1iYXJcIik7XG5cbiAgbGV0IGF1dG9SZWZTZXR0aW5nID0gbWFrZUF1dG9SZWZyZXNoU2V0dGluZygpO1xuICBzZXR0aW5nc0Jhci5hcHBlbmRDaGlsZChhdXRvUmVmU2V0dGluZyk7XG5cbiAgbGV0IHNvcnRTZXR0aW5nID0gbWFrZVNvcnRTZXR0aW5nKCk7XG4gIHNldHRpbmdzQmFyLmFwcGVuZENoaWxkKHNvcnRTZXR0aW5nKTtcblxuICBzZXR0aW5nc0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGNsaWNrKSA9PiB7XG4gICAgY2xpY2suc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXR0aW5nc0Jhcjtcbn1cbiIsImltcG9ydCBTbm93SWNvbiBmcm9tIFwiLi9zbm93LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNub3dDYXJkKHNub3dWb2wxaCwgc25vd1ZvbDNoKSB7XG4gIGxldCBzbm93Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNub3dDYXJkLmNsYXNzTGlzdC5hZGQoXCJzbm93LWNhcmRcIik7XG5cbiAgbGV0IHNub3dJY29uID0gbmV3IEltYWdlKCk7XG4gIHNub3dJY29uLmFsdCA9IFwiU25vdyBpY29uXCI7XG4gIHNub3dJY29uLnNyYyA9IFNub3dJY29uO1xuXG4gIGxldCBzbm93SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiU25vdyB2b2x1bWVcIjtcblxuICBsZXQgc25vdzFoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNub3cxaC5pbm5lclRleHQgPSBgTGFzdCBob3VyOiAke3Nub3dWb2wxaH0gbW1gO1xuXG4gIHNub3dJbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgc25vd0luZm8uYXBwZW5kQ2hpbGQoc25vdzFoKTtcblxuICBpZiAoc25vd1ZvbDNoKSB7XG4gICAgbGV0IHNub3czaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNub3czaC5pbm5lclRleHQgPSBgTGFzdCAzaDogJHtzbm93Vm9sM2h9YDtcbiAgICBzbm93SW5mby5hcHBlbmRDaGlsZChzbm93M2gpO1xuICB9XG5cbiAgc25vd0NhcmQuYXBwZW5kQ2hpbGQoc25vd0ljb24pO1xuICBzbm93Q2FyZC5hcHBlbmRDaGlsZChzbm93SW5mbyk7XG5cbiAgcmV0dXJuIHNub3dDYXJkO1xufVxuIiwiaW1wb3J0IFN1bnJpc2VJY29uIGZyb20gXCIuL3N1bnJpc2Uuc3ZnXCI7XG5pbXBvcnQgU3Vuc2V0SWNvbiBmcm9tIFwiLi9zdW5zZXQuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3VuQ2FyZChzdW5yaXNlLCBzdW5zZXQpIHtcbiAgbGV0IHN1blN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VuU3RhdHMuY2xhc3NMaXN0LmFkZChcInN1blN0YXRzXCIpO1xuXG4gIGxldCBzdW5yaXNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBzdW5zZXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBsZXQgc3VucmlzZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc3VucmlzZUljb24uYWx0ID0gXCJTdW5yaXNlIGljb25cIjtcbiAgc3VucmlzZUljb24uc3JjID0gU3VucmlzZUljb247XG5cbiAgbGV0IHN1bnNldEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc3Vuc2V0SWNvbi5hbHQgPSBcIlN1bnNldCBpY29uXCI7XG4gIHN1bnNldEljb24uc3JjID0gU3Vuc2V0SWNvbjtcblxuICBsZXQgc3VuU3RhdHNTdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1blN0YXRzU3VucmlzZS5pbm5lclRleHQgPSBgU3VucmlzZTogJHtzdW5yaXNlfWA7XG5cbiAgbGV0IHN1blN0YXRzU3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1blN0YXRzU3Vuc2V0LmlubmVyVGV4dCA9IGBTdW5zZXQ6ICR7c3Vuc2V0fWA7XG5cbiAgc3VucmlzZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VucmlzZUljb24pO1xuICBzdW5yaXNlRWxlbWVudC5hcHBlbmRDaGlsZChzdW5TdGF0c1N1bnJpc2UpO1xuXG4gIHN1bnNldEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Vuc2V0SWNvbik7XG4gIHN1bnNldEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VuU3RhdHNTdW5zZXQpO1xuXG4gIHN1blN0YXRzLmFwcGVuZENoaWxkKHN1bnJpc2VFbGVtZW50KTtcbiAgc3VuU3RhdHMuYXBwZW5kQ2hpbGQoc3Vuc2V0RWxlbWVudCk7XG4gIHJldHVybiBzdW5TdGF0cztcbn1cbiIsImltcG9ydCBVVkluZGV4SWNvbiBmcm9tIFwiLi9VVkljb24uc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVVZJbmRleENhcmQodXZpbmRleCkge1xuICBsZXQgdXZJbmRleENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1dkluZGV4Q2FyZC5jbGFzc0xpc3QuYWRkKFwidXYtaW5kZXgtY2FyZFwiKTtcblxuICBsZXQgdXZJY29uID0gbmV3IEltYWdlKCk7XG4gIHV2SWNvbi5hbHQgPSBcIlVWIGluZGV4IGljb25cIjtcbiAgdXZJY29uLnNyYyA9IFVWSW5kZXhJY29uO1xuXG4gIGxldCBkZXNjcmlwdGlvbjtcbiAgaWYgKHV2aW5kZXggPD0gMikge1xuICAgIGRlc2NyaXB0aW9uID0gXCIobG93KVwiO1xuICB9XG4gIGlmICh1dmluZGV4ID4gMiAmJiB1dmluZGV4IDw9IDUpIHtcbiAgICBkZXNjcmlwdGlvbiA9IFwiKG1vZGVyYXRlKVwiO1xuICB9XG4gIGlmICh1dmluZGV4ID4gNSAmJiB1dmluZGV4IDw9IDcpIHtcbiAgICBkZXNjcmlwdGlvbiA9IFwiKGhpZ2gpXCI7XG4gIH1cbiAgaWYgKHV2aW5kZXggPiA3ICYmIHV2aW5kZXggPD0gMTApIHtcbiAgICBkZXNjcmlwdGlvbiA9IFwiKHZlcnkgaGlnaClcIjtcbiAgfVxuICBpZiAodXZpbmRleCA+IDEwKSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIihleHRyZW1lKVwiO1xuICB9XG5cbiAgbGV0IHV2SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdXZJbmRleC5pbm5lclRleHQgPSBgVVYgSW5kZXg6ICR7dXZpbmRleH0gJHtkZXNjcmlwdGlvbn1gO1xuXG4gIHV2SW5kZXhDYXJkLmFwcGVuZENoaWxkKHV2SWNvbik7XG4gIHV2SW5kZXhDYXJkLmFwcGVuZENoaWxkKHV2SW5kZXgpO1xuXG4gIHJldHVybiB1dkluZGV4Q2FyZDtcbn1cbiIsImltcG9ydCBXaW5kSWNvbiBmcm9tIFwiLi93aW5kLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVdpbmRDYXJkKHdpbmQpIHtcbiAgbGV0IHdpbmRTdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbmRTdGF0cy5jbGFzc0xpc3QuYWRkKFwid2luZFN0YXRzXCIpO1xuICBsZXQgd2luZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgd2luZEljb24uYWx0ID0gXCJXaW5kIGljb25cIjtcbiAgd2luZEljb24uc3JjID0gV2luZEljb247XG4gIGxldCB3aW5kU3RhdHNTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3aW5kU3RhdHNTcGVlZC5pbm5lclRleHQgPSBgV2luZCBTcGVlZDogJHt3aW5kfSBtL3NgO1xuICB3aW5kU3RhdHMuYXBwZW5kQ2hpbGQod2luZEljb24pO1xuICB3aW5kU3RhdHMuYXBwZW5kQ2hpbGQod2luZFN0YXRzU3BlZWQpO1xuICByZXR1cm4gd2luZFN0YXRzO1xufVxuIiwiaW1wb3J0IGZhdm9yaXRlSWNvbiBmcm9tIFwiLi9mYXYuc3ZnXCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9uc1VuZmF2b3JpdGUgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBzb3J0QXRvWiB9IGZyb20gXCIuL3NldHRpbmdTb3J0XCI7XG5pbXBvcnQgeyBzb3J0WnRvQSB9IGZyb20gXCIuL3NldHRpbmdTb3J0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmF2b3JpdGVPcHRpb24oKSB7XG4gIGxldCBmYXZvcml0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZhdm9yaXRlT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tZmF2b3JpdGVcIik7XG4gIGxldCBmYXZvcml0ZUltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZhdm9yaXRlSW1hZ2UuYWx0ID0gXCJGYXZvcml0ZSBpY29uXCI7XG4gIGZhdm9yaXRlSW1hZ2Uuc3JjID0gZmF2b3JpdGVJY29uO1xuICBmYXZvcml0ZU9wdGlvbi5hcHBlbmRDaGlsZChmYXZvcml0ZUltYWdlKTtcblxuICBmYXZvcml0ZU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgIGhhbmRsZVNvcnRBY3Rpb24oY2l0eSk7XG4gICAgbGV0IGZhdm9yaXRlc0JhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gICAgaWYgKGZhdm9yaXRlc0JhckVsZW1lbnQpIHtcbiAgICAgIGZhdm9yaXRlc0Jhci5yZWZyZXNoRmF2b3JpdGVzQmFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhdm9yaXRlc0Jhci5tYWtlRmF2b3JpdGVzQmFyKCk7XG4gICAgfVxuICAgIGdldE9wdGlvbnNVbmZhdm9yaXRlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBmYXZvcml0ZU9wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVNvcnRBY3Rpb24oY2l0eSkge1xuICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gIGlmIChjaXR5KSB7XG4gICAgY2l0aWVzLnB1c2goY2l0eS5pbm5lclRleHQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIEpTT04uc3RyaW5naWZ5KGNpdGllcykpO1xuICB9XG4gIGlmIChjaXRpZXMubGVuZ3RoID4gMCkge1xuICAgIGxldCBjaXRpZXNTb3J0ZWQ7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSA9PSBcImF0b3pcIikge1xuICAgICAgY2l0aWVzU29ydGVkID0gc29ydEF0b1ooY2l0aWVzKTtcbiAgICAgIGxldCBjaXRpZXNTdHJpZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoY2l0aWVzU29ydGVkKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIGAke2NpdGllc1N0cmlnaWZpZWR9YCk7XG4gICAgfVxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29ydFwiKSkgPT0gXCJ6dG9hXCIpIHtcbiAgICAgIGNpdGllc1NvcnRlZCA9IHNvcnRadG9BKGNpdGllcyk7XG4gICAgICBsZXQgY2l0aWVzU3RyaWdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGNpdGllc1NvcnRlZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNTdHJpZ2lmaWVkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWtlRmF2TGlzdCgpO1xuICAgIH1cblxuICAgIGxldCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgIGlmIChpbmZvKSB7XG4gICAgICBmYXZvcml0ZXNCYXIucmVmcmVzaEZhdm9yaXRlc0JhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYWtlRmF2TGlzdCgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHJlbG9hZEljb24gZnJvbSBcIi4vcmVsb2FkLnN2Z1wiO1xuaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSZWxvYWRPcHRpb24oKSB7XG4gIGxldCByZWxvYWRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgcmVsb2FkSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgcmVsb2FkSW1hZ2UuYWx0ID0gXCJSZWxvYWQgaWNvblwiO1xuICByZWxvYWRJbWFnZS5zcmMgPSByZWxvYWRJY29uO1xuXG4gIHJlbG9hZE9wdGlvbi5hcHBlbmRDaGlsZChyZWxvYWRJbWFnZSk7XG5cbiAgcmVsb2FkT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tcmVsb2FkXCIpO1xuXG4gIHJlbG9hZE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgIGlmIChpbmZvKSB7XG4gICAgICBsZXQgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKTtcbiAgICAgIGxldCBjaXR5TmFtZSA9IGNpdHkuaW5uZXJUZXh0O1xuICAgICAgY2xlYW4oXCIucmVzdWx0XCIpO1xuICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oY2l0eU5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2VhcmNoYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXIgPiBpbnB1dFwiKTtcbiAgICAgIHNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hiYXIpO1xuICAgICAgY2xlYW4oXCIucmVzdWx0XCIpO1xuICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZWxvYWRPcHRpb247XG59XG4iLCJpbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gXCIuL3NldHRpbmdzLnN2Z1wiO1xuaW1wb3J0IFNldHRpbmdzT3Blbkljb24gZnJvbSBcIi4vc2V0dGluZ3Mtb3Blbi5zdmdcIjtcbmltcG9ydCB7IG1ha2VTZXR0aW5nc0JhciB9IGZyb20gXCIuL21ha2VTZXR0aW5nc0JhclwiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNVbmZhdm9yaXRlIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNldHRpbmdzT3B0aW9uKCkge1xuICBsZXQgc2V0dGluZ3NPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXR0aW5nc09wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXNldHRpbmdzXCIpO1xuICBsZXQgc2V0dGluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBzZXR0aW5nc0ltYWdlLmFsdCA9IFwiU2V0dGluZ3MgaWNvblwiO1xuICBzZXR0aW5nc0ltYWdlLnNyYyA9IFNldHRpbmdzSWNvbjtcbiAgc2V0dGluZ3NPcHRpb24uYXBwZW5kQ2hpbGQoc2V0dGluZ3NJbWFnZSk7XG5cbiAgc2V0dGluZ3NPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGljaykgPT4ge1xuICAgIGhhbmRsZVNldHRpbmdPcHRpb25DbGljayhjbGljayk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXR0aW5nc09wdGlvbjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2V0dGluZ09wdGlvbkNsaWNrKGNsaWNrKSB7XG4gIGNsaWNrLnN0b3BQcm9wYWdhdGlvbigpO1xuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgbGV0IGZhdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzLWJhclwiKTtcbiAgbGV0IHNldHRpbmdzT3Blbk9wdGlvbiA9IG1ha2VTZXR0aW5nc09wZW5PcHRpb24oKTtcbiAgbGV0IG9wdGlvbnNCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG4gIG9wdGlvbnNCYXIucmVtb3ZlQ2hpbGQob3B0aW9uc0Jhci5maXJzdENoaWxkKTtcbiAgb3B0aW9uc0Jhci5wcmVwZW5kKHNldHRpbmdzT3Blbk9wdGlvbik7XG4gIGxldCBzZXR0aW5nc0JhciA9IG1ha2VTZXR0aW5nc0JhcigpO1xuICBpZiAoZmF2QmFyKSB7XG4gICAgaGVhZGVyLmluc2VydEJlZm9yZShzZXR0aW5nc0JhciwgZmF2QmFyKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgc2hvd2luZ1NldHRpbmdzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nZC1iYXJcIik7XG4gICAgaWYgKHNob3dpbmdTZXR0aW5nc0Jhcikge1xuICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHNldHRpbmdzQmFyKTtcbiAgICB9XG4gIH1cbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlT3V0T2ZTZXR0aW5nc0NsaWNrLCB7XG4gICAgb25jZTogdHJ1ZSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVPdXRPZlNldHRpbmdzQ2xpY2soKSB7XG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICBsZXQgc2V0dGluZ3NCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5ncy1iYXJcIik7XG4gIGlmIChzZXR0aW5nc0JhckVsZW1lbnQpIHtcbiAgICBsZXQgc2V0dGluZ3NPcHRpb24gPSBtYWtlU2V0dGluZ3NPcHRpb24oKTtcbiAgICBsZXQgb3B0aW9uc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc1wiKTtcbiAgICBvcHRpb25zQmFyLnJlbW92ZUNoaWxkKG9wdGlvbnNCYXIuZmlyc3RDaGlsZCk7XG4gICAgb3B0aW9uc0Jhci5wcmVwZW5kKHNldHRpbmdzT3B0aW9uKTtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoc2V0dGluZ3NCYXJFbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNldHRpbmdzT3Blbk9wdGlvbigpIHtcbiAgbGV0IHNldHRpbmdzT3Blbk9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHRpbmdzT3Blbk9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXNldHRpbmdzLW9wZW5cIik7XG4gIGxldCBzZXR0aW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIHNldHRpbmdzSW1hZ2UuYWx0ID0gXCJTZXR0aW5ncyBpY29uXCI7XG4gIHNldHRpbmdzSW1hZ2Uuc3JjID0gU2V0dGluZ3NPcGVuSWNvbjtcbiAgc2V0dGluZ3NPcGVuT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzSW1hZ2UpO1xuXG4gIHNldHRpbmdzT3Blbk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGNsaWNrKSA9PiB7XG4gICAgY2xpY2suc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHNldHRpbmdzT3B0aW9uID0gbWFrZVNldHRpbmdzT3B0aW9uKCk7XG4gICAgbGV0IG9wdGlvbnNCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG4gICAgb3B0aW9uc0Jhci5yZW1vdmVDaGlsZChvcHRpb25zQmFyLmZpcnN0Q2hpbGQpO1xuICAgIG9wdGlvbnNCYXIucHJlcGVuZChzZXR0aW5nc09wdGlvbik7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gICAgbGV0IHNldHRpbmdzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5ncy1iYXJcIik7XG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKHNldHRpbmdzQmFyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldHRpbmdzT3Blbk9wdGlvbjtcbn1cbiIsImltcG9ydCBGYXZzSWNvbiBmcm9tIFwiLi9mYXZzLnN2Z1wiO1xuaW1wb3J0IHsgZ2V0T3B0aW9uc0Zhdkxpc3QgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBtYWtlRmF2TGlzdCB9IGZyb20gXCIuL21ha2VGYXZMaXN0XCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9uc1VuZmF2b3JpdGUgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2hvd0ZhdnNPcHRpb24oKSB7XG4gIGxldCBmYXZzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmF2c09wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWZhdnNcIik7XG4gIGxldCBmYXZzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgZmF2c0ltYWdlLmFsdCA9IFwiU2hvdyBmYXZvcml0ZXMgaWNvblwiO1xuICBmYXZzSW1hZ2Uuc3JjID0gRmF2c0ljb247XG4gIGZhdnNPcHRpb24uYXBwZW5kQ2hpbGQoZmF2c0ltYWdlKTtcblxuICBmYXZzT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuICAgIGNsZWFuKHJlc3VsdCk7XG4gICAgbWFrZUZhdkxpc3QoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhdnNPcHRpb247XG59XG4iLCJpbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHRlbXBlcmF0dXJlSWNvbiBmcm9tIFwiLi90aGVybW9tZXRlci1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVRlbXBlcmF0dXJlT3B0aW9uKCkge1xuICBsZXQgdGVtcGVyYXR1cmVPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRlbXBJY29uID0gbmV3IEltYWdlKCk7XG4gIHRlbXBJY29uLmFsdCA9IFwiVGVtcGVyYXR1cmUgaWNvblwiO1xuICB0ZW1wSWNvbi5zcmMgPSB0ZW1wZXJhdHVyZUljb247XG5cbiAgbGV0IG1ldHJpYyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpO1xuXG4gIGxldCBjZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJjZWxzaXVzLWxhYmVsXCIpO1xuICBjZWxzaXVzLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNlbHNpdXNcIik7XG4gIGxldCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJmYWhyZW5oZWl0LWxhYmVsXCIpO1xuICBmYWhyZW5oZWl0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZhaHJlbmhlaXRcIik7XG4gIGNlbHNpdXMuaW5uZXJUZXh0ID0gXCLCsENcIjtcbiAgZmFocmVuaGVpdC5pbm5lclRleHQgPSBcIsKwRlwiO1xuXG4gIGlmIChtZXRyaWMpIHtcbiAgICBjZWxzaXVzLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1tZXRyaWNcIik7XG4gIH0gZWxzZSB7XG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtbWV0cmljXCIpO1xuICB9XG4gIGNlbHNpdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldHJpY1wiLCBcInRydWVcIik7XG4gICAgbGV0IGRpc3BsYXlpbmdDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgIGlmIChkaXNwbGF5aW5nQ2l0eSkge1xuICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYW4oXCIucmVzdWx0XCIpO1xuICAgICAgbWFrZUZhdkxpc3QoKTtcbiAgICB9XG4gIH0pO1xuICBjZWxzaXVzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWV0cmljXCIpO1xuXG4gIGlmICghbWV0cmljKSB7XG4gICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtbWV0cmljXCIpO1xuICB9XG4gIGZhaHJlbmhlaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldHJpY1wiLCBcImZhbHNlXCIpO1xuICAgIGxldCBkaXNwbGF5aW5nQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICBpZiAoZGlzcGxheWluZ0NpdHkpIHtcbiAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFuKFwiLnJlc3VsdFwiKTtcbiAgICAgIG1ha2VGYXZMaXN0KCk7XG4gICAgfVxuICB9KTtcblxuICBsZXQgZGl2Q2Vsc2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBkaXZGYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Q2Vsc2l1cy5hcHBlbmRDaGlsZChjZWxzaXVzKTtcbiAgZGl2RmFocmVuaGVpdC5hcHBlbmRDaGlsZChmYWhyZW5oZWl0KTtcblxuICBsZXQgdGVtcElucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBJbnB1dHMuYXBwZW5kQ2hpbGQoZGl2Q2Vsc2l1cyk7XG4gIHRlbXBJbnB1dHMuYXBwZW5kQ2hpbGQoZGl2RmFocmVuaGVpdCk7XG5cbiAgdGVtcGVyYXR1cmVPcHRpb25zLmFwcGVuZENoaWxkKHRlbXBJY29uKTtcbiAgdGVtcGVyYXR1cmVPcHRpb25zLmFwcGVuZENoaWxkKHRlbXBJbnB1dHMpO1xuXG4gIHRlbXBlcmF0dXJlT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXRlbXBlcmF0dXJlXCIpO1xuXG4gIHJldHVybiB0ZW1wZXJhdHVyZU9wdGlvbnM7XG59XG4iLCJpbXBvcnQgVW5mYXZvcml0ZUljb24gZnJvbSBcIi4vdW5mYXYuc3ZnXCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVbmZhdm9yaXRlT3B0aW9uKCkge1xuICBsZXQgdW5mYXZvcml0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVuZmF2b3JpdGVPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi11bmZhdm9yaXRlXCIpO1xuICBsZXQgdW5mYXZvcml0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdW5mYXZvcml0ZUljb24uYWx0ID0gXCJSZW1vdmUgZnJvbSBmYXZvcml0ZXMgaWNvblwiO1xuICB1bmZhdm9yaXRlSWNvbi5zcmMgPSBVbmZhdm9yaXRlSWNvbjtcblxuICB1bmZhdm9yaXRlT3B0aW9uLmFwcGVuZENoaWxkKHVuZmF2b3JpdGVJY29uKTtcblxuICB1bmZhdm9yaXRlT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIik7XG4gICAgbGV0IGNpdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGxldCBjaXRpZXNGaWx0ZXJlZCA9IGNpdGllcy5maWx0ZXIoKGMpID0+IGMgIT09IGNpdHkuaW5uZXJUZXh0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtKU09OLnN0cmluZ2lmeShjaXRpZXNGaWx0ZXJlZCl9YCk7XG4gICAgZmF2b3JpdGVzQmFyLnJlZnJlc2hGYXZvcml0ZXNCYXIoKTtcbiAgICBnZXRPcHRpb25zKHRydWUpO1xuICB9KTtcblxuICByZXR1cm4gdW5mYXZvcml0ZU9wdGlvbjtcbn1cbiIsImltcG9ydCB7IG1ha2VUZW1wZXJhdHVyZU9wdGlvbiB9IGZyb20gXCIuL29wdGlvblRlbXBlcmF0dXJlXCI7XG5pbXBvcnQgeyBtYWtlUmVsb2FkT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uUmVsb2FkXCI7XG5pbXBvcnQgeyBtYWtlRmF2b3JpdGVPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25GYXZvcml0ZVwiO1xuaW1wb3J0IHsgbWFrZVVuZmF2b3JpdGVPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25VbmZhdm9yaXRlXCI7XG5pbXBvcnQgeyBtYWtlU2hvd0ZhdnNPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25TaG93RmF2c1wiO1xuaW1wb3J0IHsgbWFrZVNldHRpbmdzT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uU2V0dGluZ3NcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcblxuY29uc3Qgb3B0aW9uc0RpdiA9IHtcbiAgb3B0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpLFxuICBnZXRUZW1wZXJhdHVyZU9wdGlvbnMoKSB7XG4gICAgbGV0IHRlbXBlcmF0dXJlT3B0aW9ucyA9IG1ha2VUZW1wZXJhdHVyZU9wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZU9wdGlvbnMpO1xuICB9LFxuICBnZXRSZWxvYWRPcHRpb25zKCkge1xuICAgIGxldCByZWxvYWRPcHRpb24gPSBtYWtlUmVsb2FkT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKHJlbG9hZE9wdGlvbik7XG4gIH0sXG4gIGdldEZhdm9yaXRlT3B0aW9uKCkge1xuICAgIGxldCBmYXZvcml0ZU9wdGlvbiA9IG1ha2VGYXZvcml0ZU9wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChmYXZvcml0ZU9wdGlvbik7XG4gIH0sXG4gIGdldFVuRmF2b3JpdGVPcHRpb24oKSB7XG4gICAgbGV0IHVuZmF2b3JpdGVPcHRpb24gPSBtYWtlVW5mYXZvcml0ZU9wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZCh1bmZhdm9yaXRlT3B0aW9uKTtcbiAgfSxcbiAgZ2V0U2hvd0ZhdnNPcHRpb24oKSB7XG4gICAgbGV0IHNob3dGYXZzT3B0aW9uID0gbWFrZVNob3dGYXZzT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKHNob3dGYXZzT3B0aW9uKTtcbiAgfSxcbiAgZ2V0U2V0dGluZ3NPcHRpb24oKSB7XG4gICAgbGV0IHNldHRpbmdzT3B0aW9uID0gbWFrZVNldHRpbmdzT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKHNldHRpbmdzT3B0aW9uKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnMoYWxsKSB7XG4gIGNsZWFuKG9wdGlvbnNEaXYub3B0aW9ucyk7XG4gIGlmIChhbGwpIHtcbiAgICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gICAgaWYgKGNpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICBvcHRpb25zRGl2Lm9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShcIm9wdGlvbnMtY29tcGFjdFwiKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0U2V0dGluZ3NPcHRpb24oKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCk7XG4gICAgICBvcHRpb25zRGl2LmdldFJlbG9hZE9wdGlvbnMoKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0RmF2b3JpdGVPcHRpb24oKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0U2hvd0ZhdnNPcHRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG4gICAgICBvcHRpb25zRGl2LmdldFNldHRpbmdzT3B0aW9uKCk7XG4gICAgICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRSZWxvYWRPcHRpb25zKCk7XG4gICAgICBvcHRpb25zRGl2LmdldEZhdm9yaXRlT3B0aW9uKCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG9wdGlvbnNEaXYub3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKFwib3B0aW9ucy1jb21wYWN0XCIpO1xuICAgIG9wdGlvbnNEaXYuZ2V0U2V0dGluZ3NPcHRpb24oKTtcbiAgICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNVbmZhdm9yaXRlKCkge1xuICBjbGVhbihvcHRpb25zRGl2Lm9wdGlvbnMpO1xuICBvcHRpb25zRGl2Lm9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShcIm9wdGlvbnMtY29tcGFjdFwiKTtcbiAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICBvcHRpb25zRGl2LmdldFJlbG9hZE9wdGlvbnMoKTtcbiAgb3B0aW9uc0Rpdi5nZXRVbkZhdm9yaXRlT3B0aW9uKCk7XG4gIG9wdGlvbnNEaXYuZ2V0U2hvd0ZhdnNPcHRpb24oKTtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uc0Zhdkxpc3QoKSB7XG4gIGNsZWFuKG9wdGlvbnNEaXYub3B0aW9ucyk7XG4gIG9wdGlvbnNEaXYuZ2V0U2V0dGluZ3NPcHRpb24oKTtcbiAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgb3B0aW9uc0Rpdi5nZXRSZWxvYWRPcHRpb25zKCk7XG4gIG9wdGlvbnNEaXYub3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwib3B0aW9ucy1jb21wYWN0XCIpO1xufVxuXG5leHBvcnQgeyBnZXRPcHRpb25zLCBnZXRPcHRpb25zVW5mYXZvcml0ZSwgZ2V0T3B0aW9uc0Zhdkxpc3QgfTtcbiIsImltcG9ydCBBdXRvUmVmcmVzaEljb24gZnJvbSBcIi4vcmVsb2FkLWF1dG8uc3ZnXCI7XG5pbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuaW1wb3J0IHsgaGFuZGxlT3V0T2ZTZXR0aW5nc0NsaWNrIH0gZnJvbSBcIi4vb3B0aW9uU2V0dGluZ3NcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBdXRvUmVmcmVzaFNldHRpbmcoKSB7XG4gIGxldCBhdXRvUmVmU2V0dGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IGF1dG9SZWZJY29uID0gbmV3IEltYWdlKCk7XG4gIGF1dG9SZWZJY29uLmFsdCA9IFwiQXV0by1yZWZyZXNoIGljb25cIjtcbiAgYXV0b1JlZkljb24uc3JjID0gQXV0b1JlZnJlc2hJY29uO1xuXG4gIGxldCBhdXRvUmVmTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYXV0b1JlZkxhYmVsLmlubmVyVGV4dCA9IFwiQXV0by1yZWZyZXNoOiBcIjtcblxuICBsZXQgYXV0b1JlZlNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGF1dG9SZWZTZWxlY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdC1yZWZyZXNoXCIpO1xuICBhdXRvUmVmU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGNoYW5nZSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmcmVzaFwiLCBKU09OLnN0cmluZ2lmeShjaGFuZ2UudGFyZ2V0LnZhbHVlKSk7XG4gICAgYXV0b1JlZnJlc2hTZXR1cC5oYW5kbGVBdXRvUmVmcmVzaChjaGFuZ2UudGFyZ2V0LnZhbHVlKTtcbiAgICBsZXQgcmVmcmVzaFNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtcmVmcmVzaFwiKTtcbiAgICBsZXQgb3B0aW9ucyA9IHJlZnJlc2hTZWxlY3Rvci5jaGlsZE5vZGVzO1xuICAgIG9wdGlvbnMuZm9yRWFjaCgobykgPT4ge1xuICAgICAgaWYgKG8uZ2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgICAgby5yZW1vdmVBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChvLmlubmVyVGV4dCA9PSBjaGFuZ2UudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIG8uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGxldCBub2RlcyA9IFtdO1xuXG4gIGxldCBuZXZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG5ldmVyLmlubmVyVGV4dCA9IFwiTmV2ZXJcIjtcbiAgbmV2ZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJOZXZlclwiKTtcbiAgbm9kZXMucHVzaChuZXZlcik7XG4gIGxldCBvbmVNaW51dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvbmVNaW51dGUuaW5uZXJUZXh0ID0gXCJFdmVyeSBtaW51dGVcIjtcbiAgb25lTWludXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRXZlcnkgbWludXRlXCIpO1xuICBub2Rlcy5wdXNoKG9uZU1pbnV0ZSk7XG4gIGxldCBmaXZlTWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGZpdmVNaW51dGVzLmlubmVyVGV4dCA9IFwiRXZlcnkgNSBtaW51dGVzXCI7XG4gIGZpdmVNaW51dGVzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRXZlcnkgNSBtaW51dGVzXCIpO1xuICBub2Rlcy5wdXNoKGZpdmVNaW51dGVzKTtcbiAgbGV0IHRlbk1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICB0ZW5NaW51dGVzLmlubmVyVGV4dCA9IFwiRXZlcnkgMTAgbWludXRlc1wiO1xuICB0ZW5NaW51dGVzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRXZlcnkgMTAgbWludXRlc1wiKTtcbiAgbm9kZXMucHVzaCh0ZW5NaW51dGVzKTtcbiAgbGV0IHRoaXJ0eU1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICB0aGlydHlNaW51dGVzLmlubmVyVGV4dCA9IFwiRXZlcnkgMzAgbWludXRlc1wiO1xuICB0aGlydHlNaW51dGVzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRXZlcnkgMzAgbWludXRlc1wiKTtcbiAgbm9kZXMucHVzaCh0aGlydHlNaW51dGVzKTtcbiAgbGV0IG9uZUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvbmVIb3VyLmlubmVyVGV4dCA9IFwiRXZlcnkgaG91clwiO1xuICBvbmVIb3VyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRXZlcnkgaG91clwiKTtcbiAgbm9kZXMucHVzaChvbmVIb3VyKTtcbiAgbGV0IHR3b0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgdHdvSG91cnMuaW5uZXJUZXh0ID0gXCJFdmVyeSAyIGhvdXJzXCI7XG4gIHR3b0hvdXJzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRXZlcnkgMiBob3Vyc1wiKTtcbiAgbm9kZXMucHVzaCh0d29Ib3Vycyk7XG4gIGxldCB0d2VsdmVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHR3ZWx2ZUhvdXJzLmlubmVyVGV4dCA9IFwiRXZlcnkgMTIgaG91cnNcIjtcbiAgdHdlbHZlSG91cnMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSAxMiBob3Vyc1wiKTtcbiAgbm9kZXMucHVzaCh0d2VsdmVIb3Vycyk7XG4gIGxldCBvbmVEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvbmVEYXkuaW5uZXJUZXh0ID0gXCJFdmVyeSAyNCBob3Vyc1wiO1xuICBvbmVEYXkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJFdmVyeSAyNCBob3Vyc1wiKTtcbiAgbm9kZXMucHVzaChvbmVEYXkpO1xuXG4gIG5vZGVzLmZvckVhY2goKG4pID0+IHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkobi52YWx1ZSkgPT0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZyZXNoXCIpKSB7XG4gICAgICBuLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZChuZXZlcik7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQob25lTWludXRlKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZChmaXZlTWludXRlcyk7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQodGVuTWludXRlcyk7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQodGhpcnR5TWludXRlcyk7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQob25lSG91cik7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQodHdvSG91cnMpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKHR3ZWx2ZUhvdXJzKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZChvbmVEYXkpO1xuXG4gIGF1dG9SZWZTZXR0aW5nLmFwcGVuZENoaWxkKGF1dG9SZWZJY29uKTtcbiAgYXV0b1JlZlNldHRpbmcuYXBwZW5kQ2hpbGQoYXV0b1JlZkxhYmVsKTtcbiAgYXV0b1JlZlNldHRpbmcuYXBwZW5kQ2hpbGQoYXV0b1JlZlNlbGVjdCk7XG5cbiAgcmV0dXJuIGF1dG9SZWZTZXR0aW5nO1xufVxuXG5jb25zdCBhdXRvUmVmcmVzaFNldHVwID0ge1xuICB0aW1lb3V0SUQ6IG51bGwsXG4gIGF1dG86IGZhbHNlLFxuICBkZWxheTogNjAwMDAsXG4gIGhhbmRsZUF1dG9SZWZyZXNoKGF1dG9SZWZyZXNoTW9kZSkge1xuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSBtaW51dGVcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgNSBtaW51dGVzXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMCAqIDU7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSAxMCBtaW51dGVzXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMCAqIDEwO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgMzAgbWludXRlc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiAzMDtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IGhvdXJcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogNjA7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSAyIGhvdXJzXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMCAqIDYwICogMjtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IDEyIGhvdXJzXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMCAqIDYwICogMTI7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSAyNCBob3Vyc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiA2MCAqIDI0O1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlICE9PSBcIk5ldmVyXCIpIHtcbiAgICAgIHRoaXMudGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaGJhciA+IGlucHV0XCIpO1xuICAgICAgICBzZWFyY2hiYXIudmFsdWUgPSBcIlwiO1xuICAgICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbigpO1xuICAgICAgfSwgdGhpcy5kZWxheSk7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJOZXZlclwiKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SUQpO1xuICAgICAgdGhpcy50aW1lb3V0SUQgPSBudWxsO1xuICAgIH1cbiAgICBhdXRvUmVmcmVzaCgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gYXV0b1JlZnJlc2goKSB7XG4gIGlmIChhdXRvUmVmcmVzaFNldHVwLnRpbWVvdXRJRCkge1xuICAgIGNsZWFyVGltZW91dChhdXRvUmVmcmVzaFNldHVwLnRpbWVvdXRJRCk7XG4gICAgYXV0b1JlZnJlc2hTZXR1cC50aW1lb3V0SUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmcmVzaFwiKSkgIT09IFwiTmV2ZXJcIikge1xuICAgICAgICBsZXQgc2VhcmNoYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXIgPiBpbnB1dFwiKTtcbiAgICAgICAgc2VhcmNoYmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgbGV0IGNpdHk7XG4gICAgICAgIGxldCBpbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvXCIpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgIGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIikuaW5uZXJUZXh0O1xuICAgICAgICAgIGNsZWFuKFwiLnJlc3VsdFwiKTtcbiAgICAgICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbihjaXR5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhbihcIi5yZXN1bHRcIik7XG4gICAgICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKTtcbiAgICAgICAgfVxuICAgICAgICBhdXRvUmVmcmVzaCgpO1xuICAgICAgfVxuICAgIH0sIGF1dG9SZWZyZXNoU2V0dXAuZGVsYXkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dG9SZWZyZXNoU2V0dXA7XG4iLCJpbXBvcnQgU29ydEljb24gZnJvbSBcIi4vc29ydC5zdmdcIjtcbmltcG9ydCB7IGhhbmRsZVNvcnRBY3Rpb24gfSBmcm9tIFwiLi9vcHRpb25GYXZvcml0ZVwiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNvcnRTZXR0aW5nKCkge1xuICBsZXQgc29ydFNldHRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCBzb3J0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzb3J0SWNvbi5hbHQgPSBcIlNvcnQgc2V0dGluZyBpY29uXCI7XG4gIHNvcnRJY29uLnNyYyA9IFNvcnRJY29uO1xuXG4gIGxldCBzb3J0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc29ydExhYmVsLmlubmVyVGV4dCA9IFwiU29ydCBGYXZvcml0ZXM6IFwiO1xuXG4gIGxldCBzb3J0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc29ydFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChjaGFuZ2UpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNvcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2hhbmdlLnRhcmdldC52YWx1ZSkpO1xuICAgIGhhbmRsZVNvcnRBY3Rpb24oKTtcbiAgfSk7XG5cbiAgbGV0IG5vZGVzID0gW107XG5cbiAgbGV0IG5hbWVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtcbiAgbmFtZUdyb3VwLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsIFwiQWxwaGFiZXRpY2FsIE9yZGVyXCIpO1xuICBsZXQgYXNjZW5kaW5nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGFzY2VuZGluZ05hbWUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJhc2NlbmRpbmdOYW1lXCIpO1xuICBhc2NlbmRpbmdOYW1lLmlubmVyVGV4dCA9IFwiQSB0byBaXCI7XG4gIGFzY2VuZGluZ05hbWUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJhdG96XCIpO1xuICBub2Rlcy5wdXNoKGFzY2VuZGluZ05hbWUpO1xuICBsZXQgZGVzY2VuZGluZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBkZXNjZW5kaW5nTmFtZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRlc2NlbmRpbmdOYW1lXCIpO1xuICBkZXNjZW5kaW5nTmFtZS5pbm5lclRleHQgPSBcIlogdG8gQVwiO1xuICBkZXNjZW5kaW5nTmFtZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcInp0b2FcIik7XG4gIG5vZGVzLnB1c2goZGVzY2VuZGluZ05hbWUpO1xuICBuYW1lR3JvdXAuYXBwZW5kQ2hpbGQoYXNjZW5kaW5nTmFtZSk7XG4gIG5hbWVHcm91cC5hcHBlbmRDaGlsZChkZXNjZW5kaW5nTmFtZSk7XG5cbiAgbGV0IHRlbXBHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtcbiAgdGVtcEdyb3VwLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsIFwiQWN0dWFsIFRlbXBlcmF0dXJlXCIpO1xuICBsZXQgYXNjZW5kaW5nVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGFzY2VuZGluZ1RlbXAuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJhc2NlbmRpbmdOYW1lXCIpO1xuICBhc2NlbmRpbmdUZW1wLmlubmVyVGV4dCA9IFwiQ29sZGVzdCB0byBIb3R0ZXN0XCI7XG4gIGFzY2VuZGluZ1RlbXAuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJ0ZW1wY3RvaFwiKTtcbiAgbm9kZXMucHVzaChhc2NlbmRpbmdUZW1wKTtcbiAgbGV0IGRlc2NlbmRpbmdUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZGVzY2VuZGluZ1RlbXAuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkZXNjZW5kaW5nVGVtcFwiKTtcbiAgZGVzY2VuZGluZ1RlbXAuaW5uZXJUZXh0ID0gXCJIb3R0ZXN0IHRvIENvbGRlc3RcIjtcbiAgZGVzY2VuZGluZ1RlbXAuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJ0ZW1waHRvY1wiKTtcbiAgbm9kZXMucHVzaChkZXNjZW5kaW5nVGVtcCk7XG4gIHRlbXBHcm91cC5hcHBlbmRDaGlsZChhc2NlbmRpbmdUZW1wKTtcbiAgdGVtcEdyb3VwLmFwcGVuZENoaWxkKGRlc2NlbmRpbmdUZW1wKTtcblxuICBsZXQgdGVtcEZlZWxzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7XG4gIHRlbXBGZWVsc0dyb3VwLnNldEF0dHJpYnV0ZShcImxhYmVsXCIsIFwiQXBwYXJlbnQgVGVtcGVyYXR1cmVcIik7XG4gIGxldCBhc2NlbmRpbmdUZW1wRmVlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBhc2NlbmRpbmdUZW1wRmVlbHMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJhc2NlbmRpbmdUZW1wRmVlbHNcIik7XG4gIGFzY2VuZGluZ1RlbXBGZWVscy5pbm5lclRleHQgPSBcIkNvbGRlc3QgdG8gSG90dGVzdFwiO1xuICBhc2NlbmRpbmdUZW1wRmVlbHMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJmZWVsc2N0b2hcIik7XG4gIG5vZGVzLnB1c2goYXNjZW5kaW5nVGVtcEZlZWxzKTtcbiAgbGV0IGRlc2NlbmRpbmdUZW1wRmVlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBkZXNjZW5kaW5nVGVtcEZlZWxzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZGVzY2VuZGluZ1RlbXBGZWVsc1wiKTtcbiAgZGVzY2VuZGluZ1RlbXBGZWVscy5pbm5lclRleHQgPSBcIkhvdHRlc3QgdG8gQ29sZGVzdFwiO1xuICBkZXNjZW5kaW5nVGVtcEZlZWxzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZmVlbHNodG9jXCIpO1xuICBub2Rlcy5wdXNoKGRlc2NlbmRpbmdUZW1wRmVlbHMpO1xuICB0ZW1wRmVlbHNHcm91cC5hcHBlbmRDaGlsZChhc2NlbmRpbmdUZW1wRmVlbHMpO1xuICB0ZW1wRmVlbHNHcm91cC5hcHBlbmRDaGlsZChkZXNjZW5kaW5nVGVtcEZlZWxzKTtcblxuICBub2Rlcy5mb3JFYWNoKChuKSA9PiB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KG4udmFsdWUpID09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29ydFwiKSkge1xuICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHNvcnRTZWxlY3QuYXBwZW5kQ2hpbGQobmFtZUdyb3VwKTtcbiAgc29ydFNlbGVjdC5hcHBlbmRDaGlsZCh0ZW1wRmVlbHNHcm91cCk7XG4gIHNvcnRTZWxlY3QuYXBwZW5kQ2hpbGQodGVtcEdyb3VwKTtcblxuICBzb3J0U2V0dGluZy5hcHBlbmRDaGlsZChzb3J0SWNvbik7XG4gIHNvcnRTZXR0aW5nLmFwcGVuZENoaWxkKHNvcnRMYWJlbCk7XG4gIHNvcnRTZXR0aW5nLmFwcGVuZENoaWxkKHNvcnRTZWxlY3QpO1xuXG4gIHJldHVybiBzb3J0U2V0dGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRBdG9aKGNpdGllcykge1xuICBsZXQgc29ydGVkQ2l0aWVzID0gY2l0aWVzLnNvcnQoKTtcbiAgcmV0dXJuIHNvcnRlZENpdGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRadG9BKGNpdGllcykge1xuICBsZXQgc29ydGVkQ2l0aWVzID0gY2l0aWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYSA+IGIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNvcnRlZENpdGllcztcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBtYWtlQmFzaWNzQ2FyZCB9IGZyb20gXCIuL21ha2VCYXNpY3NDYXJkXCI7XG5pbXBvcnQgeyBtYWtlT3ZlcnZpZXdDYXJkIH0gZnJvbSBcIi4vbWFrZU92ZXJ2aWV3Q2FyZFwiO1xuaW1wb3J0IHsgbWFrZVN1bkNhcmQgfSBmcm9tIFwiLi9tYWtlU3VuQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZUNsb3Vkc0NhcmQgfSBmcm9tIFwiLi9tYWtlQ2xvdWRzQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZVdpbmRDYXJkIH0gZnJvbSBcIi4vbWFrZVdpbmRDYXJkXCI7XG5pbXBvcnQgeyBtYWtlR2lmQ2FyZCB9IGZyb20gXCIuL21ha2VHaWZDYXJkXCI7XG5pbXBvcnQgeyBtYWtlU25vd0NhcmQgfSBmcm9tIFwiLi9tYWtlU25vd0NhcmRcIjtcbmltcG9ydCB7IG1ha2VSYWluQ2FyZCB9IGZyb20gXCIuL21ha2VSYWluQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZVVWSW5kZXhDYXJkIH0gZnJvbSBcIi4vbWFrZVVWSW5kZXhDYXJkXCI7XG5pbXBvcnQgeyBtYWtlTW9vblBoYXNlQ2FyZCB9IGZyb20gXCIuL21ha2VNb29uUGhhc2VDYXJkXCI7XG5cbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuXG5mdW5jdGlvbiBzaG93T25DYXJkKFxuICB1bml0cyxcbiAgY2l0eSxcbiAgY291bnRyeSxcbiAgdGltZSxcbiAgZGF0ZSxcbiAgdGVtcCxcbiAgdGVtcEZlZWxzLFxuICB3ZWF0aGVyXG4pIHtcbiAgbGV0IHRlbXBVbml0ID0gXCJcIjtcbiAgdW5pdHMgPT0gXCJtZXRyaWNcIiA/ICh0ZW1wVW5pdCA9IFwiwrBDXCIpIDogKHRlbXBVbml0ID0gXCLCsEZcIik7XG5cbiAgbGV0IGJhc2ljc0NhcmQgPSBtYWtlQmFzaWNzQ2FyZChcbiAgICBjaXR5LFxuICAgIGNvdW50cnksXG4gICAgdGltZSxcbiAgICBkYXRlLFxuICAgIHRlbXAsXG4gICAgdGVtcEZlZWxzLFxuICAgIHRlbXBVbml0LFxuICAgIHRydWVcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGNpdHlOYW1lOiBjaXR5LFxuICAgIGNhcmQ6IGJhc2ljc0NhcmQsXG4gICAgdGVtcEFjdHVhbDogdGVtcCxcbiAgICBmZWVsczogdGVtcEZlZWxzLFxuICAgIHVuaXQ6IHRlbXBVbml0LFxuICB9O1xufVxuXG5mdW5jdGlvbiBzaG93T25JbmZvKFxuICB1bml0cyxcbiAgY2l0eSxcbiAgY291bnRyeSxcbiAgdGltZSxcbiAgZGF0ZSxcbiAgdGVtcCxcbiAgdGVtcEZlZWxzLFxuICB3ZWF0aGVyLFxuICByYWluVm9sMWgsXG4gIHJhaW5Wb2wzaCxcbiAgc25vd1ZvbDFoLFxuICBzbm93Vm9sM2gsXG4gIHN1bnJpc2UsXG4gIHN1bnNldCxcbiAgY2xvdWRpbmVzcyxcbiAgd2luZCxcbiAgZ2lmU3JjLFxuICBtb29ucGhhc2UsXG4gIHV2aW5kZXgsXG4gIGRheVxuKSB7XG4gIGNsZWFuKHJlc3VsdCk7XG4gIGxldCB0ZW1wVW5pdCA9IFwiXCI7XG4gIHVuaXRzID09IFwibWV0cmljXCIgPyAodGVtcFVuaXQgPSBcIsKwQ1wiKSA6ICh0ZW1wVW5pdCA9IFwiwrBGXCIpO1xuXG4gIGxldCBiYXNpY3NDYXJkID0gbWFrZUJhc2ljc0NhcmQoXG4gICAgY2l0eSxcbiAgICBjb3VudHJ5LFxuICAgIHRpbWUsXG4gICAgZGF0ZSxcbiAgICB0ZW1wLFxuICAgIHRlbXBGZWVscyxcbiAgICB0ZW1wVW5pdFxuICApO1xuICBsZXQgb3ZlcnZpZXdDYXJkID0gbWFrZU92ZXJ2aWV3Q2FyZCh3ZWF0aGVyKTtcbiAgbGV0IHN1bkNhcmQgPSBtYWtlU3VuQ2FyZChzdW5yaXNlLCBzdW5zZXQpO1xuICBsZXQgY2xvdWRzQ2FyZCA9IG1ha2VDbG91ZHNDYXJkKGNsb3VkaW5lc3MpO1xuICBsZXQgd2luZENhcmQgPSBtYWtlV2luZENhcmQod2luZCk7XG4gIGxldCBnaWZDYXJkID0gbWFrZUdpZkNhcmQoZ2lmU3JjKTtcbiAgbGV0IHNub3dDYXJkID0gbWFrZVNub3dDYXJkKHNub3dWb2wxaCwgc25vd1ZvbDNoKTtcbiAgbGV0IHJhaW5DYXJkID0gbWFrZVJhaW5DYXJkKHJhaW5Wb2wxaCwgcmFpblZvbDNoKTtcblxuICBsZXQgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2FyZHMtY29udGFpbmVyXCIpO1xuXG4gIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuICBpbmZvLmFwcGVuZENoaWxkKGJhc2ljc0NhcmQpO1xuICBpbmZvLmFwcGVuZENoaWxkKG92ZXJ2aWV3Q2FyZCk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoZ2lmQ2FyZCk7XG4gIGlmIChzbm93Vm9sMWggfHwgc25vd1ZvbDNoKSB7XG4gICAgaW5mby5hcHBlbmRDaGlsZChzbm93Q2FyZCk7XG4gIH1cbiAgaWYgKHJhaW5Wb2wxaCB8fCByYWluVm9sM2gpIHtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHJhaW5DYXJkKTtcbiAgfVxuICBpbmZvLmFwcGVuZENoaWxkKGNsb3Vkc0NhcmQpO1xuICBpbmZvLmFwcGVuZENoaWxkKHdpbmRDYXJkKTtcbiAgaWYgKCFkYXkpIHtcbiAgICBsZXQgbW9vblBoYXNlQ2FyZCA9IG1ha2VNb29uUGhhc2VDYXJkKG1vb25waGFzZSk7XG4gICAgaW5mby5hcHBlbmRDaGlsZChtb29uUGhhc2VDYXJkKTtcbiAgfVxuICBpZiAoZGF5KSB7XG4gICAgbGV0IHV2Q2FyZCA9IG1ha2VVVkluZGV4Q2FyZCh1dmluZGV4KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHV2Q2FyZCk7XG4gIH1cbiAgaW5mby5hcHBlbmRDaGlsZChzdW5DYXJkKTtcblxuICByZXN1bHQuYXBwZW5kQ2hpbGQoaW5mbyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFuKHBhcmVudCkge1xuICBpZiAodHlwZW9mIHBhcmVudCA9PSBcInN0cmluZ1wiKSB7XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgIHdoaWxlIChwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IHNob3dPbkluZm8sIHNob3dPbkNhcmQsIGNsZWFuIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7IG1ha2VTZWFyY2hCYXIgfSBmcm9tIFwiLi9tYWtlU2VhcmNoQmFyXCI7XG5pbXBvcnQgeyBtYWtlRmF2TGlzdCB9IGZyb20gXCIuL21ha2VGYXZMaXN0XCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IGF1dG9SZWZyZXNoU2V0dXAgZnJvbSBcIi4vc2V0dGluZ0F1dG9SZWZyZXNoXCI7XG5cbm1ha2VTZWFyY2hCYXIoKTtcblxuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSkge1xuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKS5sZW5ndGggPiAwKSB7XG4gICAgICBmYXZvcml0ZXNCYXIubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgICAgbWFrZUZhdkxpc3QoKTtcbiAgICB9XG4gICAgbGV0IHJlZnJlc2hNb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWZyZXNoXCIpO1xuICAgIGlmIChyZWZyZXNoTW9kZSA9PSBcIk5ldmVyXCIpIHtcbiAgICAgIGF1dG9SZWZyZXNoU2V0dXAuYXV0byA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdXRvUmVmcmVzaFNldHVwLmhhbmRsZUF1dG9SZWZyZXNoKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmcmVzaFwiKSk7XG4gICAgfVxuICB9XG59IGVsc2Uge1xuICBsZXQgY2l0aWVzQXJyYXkgPSBbXTtcbiAgbGV0IG1ldHJpYyA9IHRydWU7XG4gIGxldCBjaXRpZXNBcnJheUpTT04gPSBKU09OLnN0cmluZ2lmeShjaXRpZXNBcnJheSk7XG4gIGxldCByZWZyZXNoID0gXCJOZXZlclwiO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNBcnJheUpTT059YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWV0cmljXCIsIGAke21ldHJpY31gKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZyZXNoXCIsIGAke3JlZnJlc2h9YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic29ydFwiLCBKU09OLnN0cmluZ2lmeShcImF0b3pcIikpO1xufVxuXG5nZXRPcHRpb25zKGZhbHNlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
        id = "d5PPYjcb3caPTHM3hv";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sZ0JBQWdCLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FB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O0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDakM1QjtBQUNPO0FBQ1AsZUFBZSxTQUFTLEVBQUUsS0FBSztBQUMvQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxHQUFHLFdBQVcsT0FBTztBQUMxRCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsb0NBQW9DLE9BQU87QUFDM0MscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTs7QUFFQSxvREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9lcnJvckNhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZmF2b3JpdGVzQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZmxhZ0FQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2dpZkFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2hhbmRsZVVzZXJJbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VCYXNpY3NDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZUNsb3Vkc0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlRmF2TGlzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VHaWZDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZU1vb25QaGFzZUNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlT3ZlcnZpZXdDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVJhaW5DYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVNlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VTZXR0aW5nc0Jhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VTbm93Q2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VTdW5DYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVVWSW5kZXhDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVdpbmRDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uRmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25SZWxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblNob3dGYXZzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uVGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25VbmZhdm9yaXRlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldHRpbmdBdXRvUmVmcmVzaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldHRpbmdTb3J0LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2hvd0RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNoaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdmJhcixcXG4ub3B0aW9ucyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ubmF2YmFyID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNnZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDR2dztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAydnc7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM0cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ub3B0aW9ucy1jb21wYWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4ub3B0aW9ucyBkaXYge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNnZoO1xcbn1cXG5cXG4ub3B0aW9uLXNldHRpbmdzIGltZyxcXG4ub3B0aW9uLXNldHRpbmdzLW9wZW4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzOHB4O1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5zZWxlY3RlZC1tZXRyaWMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjFlbTtcXG4gIHdpZHRoOiAxLjFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbi5vcHRpb24tcmVsb2FkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3OSU7XFxufVxcblxcbi5vcHRpb24tZmF2b3JpdGUsXFxuLm9wdGlvbi11bmZhdm9yaXRlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSBpbWcsXFxuLm9wdGlvbi11bmZhdm9yaXRlIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNzclO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdiA+IGRpdiBkaXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAxdnc7XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuLnNldHRpbmdzLWJhciBzZWxlY3Qge1xcbiAgd2lkdGg6IDE0dnc7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNldHRpbmdzLWJhciA+IGRpdjpmaXJzdC1jaGlsZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgPiBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuLmZhdm9yaXRlcy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBjbGlwO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XFxuICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmJhc2ljcyxcXG4ud2VhdGhlci1naWYsXFxuLm92ZXJ2aWV3LFxcbi5zdW5TdGF0cyxcXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzLFxcbi5zbm93LWNhcmQsXFxuLnJhaW4tY2FyZCxcXG4uZmF2b3JpdGVzLWJhcixcXG4uc2V0dGluZ3MtYmFyLFxcbi51di1pbmRleC1jYXJkLFxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAuaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXZ3O1xcbiAgfVxcblxcbiAgLmluZm8gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbi5iYXNpY3Mge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi4xZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDNmciAxZnI7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuN2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLWJvdHRvbTogMC43dmg7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2ID4gc3BhbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpID4gcCB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5mbGFnIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzQ7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0byAzKTtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6Zmlyc3QtY2hpbGQsXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA0dnc7XFxufVxcblxcbi53ZWF0aGVyLWdpZiB7XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgbWluLWhlaWdodDogMzB2aDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLm92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5vdmVydmlldyA+IHAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zbm93LWNhcmQsXFxuLnJhaW4tY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLnNub3ctY2FyZCBpbWcsXFxuLnJhaW4tY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOmZpcnN0LWNoaWxkLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40dmg7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSxcXG4uc25vdy1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMyksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYsXFxuLnJhaW4tY2FyZCA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uc3VuU3RhdHMgaW1nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uc3VuU3RhdHMgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3VkU3RhdHMsXFxuLndpbmRTdGF0cyxcXG4udXYtaW5kZXgtY2FyZCxcXG4ubW9vbi1waGFzZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzLjhmcjtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uZ2lmID4gaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNsb3VkU3RhdHMgaW1nLFxcbi53aW5kU3RhdHMgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4udXYtaW5kZXgtY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDcwcHg7XFxuICBtYXJnaW4tbGVmdDogLTF2dztcXG59XFxuXFxuLm1vb24tcGhhc2UtY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDU1cHg7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4ubW9vbi1waGFzZS1jYXJkIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBwLFxcbi53aW5kU3RhdHMgcCxcXG4udXYtaW5kZXgtY2FyZCBwLFxcbi5tb29uLXBoYXNlLWNhcmQgcCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxuLmVycm9yLWNhcmQge1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgcGFkZGluZzogMnZ3O1xcbn1cXG5cXG4uZXJyb3ItY2FyZCBwIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcXG59XFxuXFxuLmVycm9yLWNhcmQgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogNjB2aDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7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Q0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2hpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmF2YmFyLFxcbi5vcHRpb25zIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5uYXZiYXIgPiBoMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbn1cXG5cXG4uc2VhcmNoYmFyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwLjV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNlYXJjaGJhciA+IGlucHV0IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDM2dnc7XFxuICBtYXJnaW4tbGVmdDogNHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzRweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5vcHRpb25zLWNvbXBhY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxufVxcblxcbi5vcHRpb25zIGRpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2dmg7XFxufVxcblxcbi5vcHRpb24tc2V0dGluZ3MgaW1nLFxcbi5vcHRpb24tc2V0dGluZ3Mtb3BlbiBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDM4cHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNDVweDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnNlbGVjdGVkLW1ldHJpYyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDEuMWVtO1xcbiAgd2lkdGg6IDEuMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uLXJlbG9hZCBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDc5JTtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSxcXG4ub3B0aW9uLXVuZmF2b3JpdGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ub3B0aW9uLWZhdm9yaXRlIGltZyxcXG4ub3B0aW9uLXVuZmF2b3JpdGUgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3NyU7XFxufVxcblxcbi5vcHRpb25zID4gZGl2ID4gZGl2IGRpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gIHBhZGRpbmctcmlnaHQ6IDF2dztcXG4gIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyIHNlbGVjdCB7XFxuICB3aWR0aDogMTR2dztcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zZXR0aW5ncy1iYXIgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2V0dGluZ3MtYmFyID4gZGl2OmZpcnN0LWNoaWxkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnNldHRpbmdzLWJhciA+IGRpdjpudGgtY2hpbGQoMikgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIG92ZXJmbG93LXk6IGNsaXA7XFxufVxcblxcbi5mYXZvcml0ZXMtYmFyIHAge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDN2dztcXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmFzaWNzLFxcbi53ZWF0aGVyLWdpZixcXG4ub3ZlcnZpZXcsXFxuLnN1blN0YXRzLFxcbi5jbG91ZFN0YXRzLFxcbi53aW5kU3RhdHMsXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkLFxcbi5mYXZvcml0ZXMtYmFyLFxcbi5zZXR0aW5ncy1iYXIsXFxuLnV2LWluZGV4LWNhcmQsXFxuLm1vb24tcGhhc2UtY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcXG4gIC5pbmZvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxdnc7XFxuICB9XFxuXFxuICAuaW5mbyBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB9XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgcGFkZGluZy1sZWZ0OiAxJTtcXG59XFxuXFxuLmJhc2ljcyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gM2ZyIDFmcjtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIHBhZGRpbmctbGVmdDogMnZ3O1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi80O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS43ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjd2aDtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBwIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmZsYWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvIDMpO1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpmaXJzdC1jaGlsZCxcXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpudGgtY2hpbGQoMikge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDR2dztcXG59XFxuXFxuLndlYXRoZXItZ2lmIHtcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxuICBtaW4taGVpZ2h0OiAzMHZoO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm92ZXJ2aWV3ID4gcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uc25vdy1jYXJkIGltZyxcXG4ucmFpbi1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQsXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjR2aDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdixcXG4ucmFpbi1jYXJkID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBpbWcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzLFxcbi51di1pbmRleC1jYXJkLFxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMuOGZyO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5naWYgPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBpbWcsXFxuLndpbmRTdGF0cyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi51di1pbmRleC1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMXZ3O1xcbn1cXG5cXG4ubW9vbi1waGFzZS1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNTVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5tb29uLXBoYXNlLWNhcmQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIHAsXFxuLndpbmRTdGF0cyBwLFxcbi51di1pbmRleC1jYXJkIHAsXFxuLm1vb24tcGhhc2UtY2FyZCBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBwYWRkaW5nOiAydnc7XFxufVxcblxcbi5lcnJvci1jYXJkIHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiA2MHZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0RXJyb3JHaWYgfSBmcm9tIFwiLi9naWZBUElcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VFcnJvckNhcmQoZXJyb3JUeXBlKSB7XG4gIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGlmIChlcnJvclR5cGUgPT0gNDA0KSB7XG4gICAgbWVzc2FnZSA9IFwiU29ycnksIHdlIGNvdWxkbid0IGZpbmQgdGhhdCBjaXR5XCI7XG4gICAgaW1hZ2UuYWx0ID0gXCJnaWYgY29uZnVzZWQgd2l0aCBlbnRlcmVkIGNpdHlcIjtcbiAgICB0cnkge1xuICAgICAgaW1hZ2Uuc3JjID0gYXdhaXQgZ2V0RXJyb3JHaWYoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBmZXRjaGluZyBlcnJvciBnaWY6IFwiLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIGxldCBlcnJvckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvckNhcmQuY2xhc3NMaXN0LmFkZChcImVycm9yLWNhcmRcIik7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIGVycm9yQ2FyZC5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICBlcnJvckNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICByZXR1cm4gZXJyb3JDYXJkO1xufVxuIiwiaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcblxuY29uc3QgZmF2b3JpdGVzQmFyID0ge1xuICBoZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIiksXG4gIG1ha2VGYXZvcml0ZXNCYXIoKSB7XG4gICAgbGV0IGNpdGllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpO1xuICAgIGNpdGllcyA9IEpTT04ucGFyc2UoY2l0aWVzKTtcbiAgICBsZXQgZmF2b3JpdGVzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmYXZvcml0ZXNCYXIuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlcy1iYXJcIik7XG4gICAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcbiAgICAgIGxldCBjaXR5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY2l0eUxpbmsuaW5uZXJUZXh0ID0gYCR7Y2l0eX1gO1xuICAgICAgY2l0eUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IHVuaXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1ldHJpY1wiKSk7XG4gICAgICAgIHVuaXRzID8gZ2V0V2VhdGhlcihjaXR5LCBcIm1ldHJpY1wiKSA6IGdldFdlYXRoZXIoY2l0eSwgXCJpbXBlcmlhbFwiKTtcbiAgICAgIH0pO1xuICAgICAgZmF2b3JpdGVzQmFyLmFwcGVuZENoaWxkKGNpdHlMaW5rKTtcbiAgICB9KTtcbiAgICB0aGlzLmhlYWRlci5hcHBlbmRDaGlsZChmYXZvcml0ZXNCYXIpO1xuICB9LFxuICByZWZyZXNoRmF2b3JpdGVzQmFyKCkge1xuICAgIGxldCBmYXZvcml0ZXNCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gICAgaWYgKGZhdm9yaXRlc0Jhcikge1xuICAgICAgdGhpcy5oZWFkZXIucmVtb3ZlQ2hpbGQoZmF2b3JpdGVzQmFyKTtcbiAgICB9XG4gICAgbGV0IGNpdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGlmIChjaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5tYWtlRmF2b3JpdGVzQmFyKCk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmF2b3JpdGVzQmFyO1xuIiwiY29uc3QgZW5kcG9pbnQgPSBcImh0dHBzOi8vY291bnRyeWZsYWdzYXBpLmNvbS9zdmcvXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RmxhZyhjb2RlKSB7XG4gIGxldCBzcmMgPSBgJHtlbmRwb2ludH0ke2NvZGV9YDtcbiAgcmV0dXJuIHNyYztcbn1cbiIsImNvbnN0IGdpZktleSA9IFwiWlNxTFpCb1AxTDI1cFMwM0c0NzhwalJCYjBORVNiMENcIjtcbmNvbnN0IGVycm9yR2lmSWRzID0gW1xuICBcImdsbVJ5aVNJM3Y1RTRcIixcbiAgXCJqSk8xQnd1Y2g1b3JLXCIsXG4gIFwiZ0tzSlVkZGpucFBHMFwiLFxuICBcIm1FVjQyRjM4bHVyNlBiZmFwV1wiLFxuICBcIjF4VmJTWDhVeklpTVBNWmpaUFwiLFxuICBcImRvSnJDTzhrQ0FnTnlcIixcbiAgXCJoNFo2UmZ1UXljZGlNXCIsXG4gIFwiM283YUNUUFBtNE9IZlJMU0g2XCIsXG5dO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRFcnJvckdpZigpIHtcbiAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gIGxldCBpZCA9IGVycm9yR2lmSWRzW2luZGV4XTtcbiAgbGV0IGFwaVByb21pc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvJHtpZH0/YXBpX2tleT0ke2dpZktleX1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGxldCBzcmMgPSBhcGlQcm9taXNlUmVzb2x2ZWQuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xuICByZXR1cm4gc3JjO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyR2lmKFxuICB3ZWF0aGVyLFxuICB0aW1lQXRDaXR5LFxuICBzdW5yaXNlRGF0ZSxcbiAgc3Vuc2V0RGF0ZSxcbiAgdW5pdHMsXG4gIHRlbXBGZWVsc1JvdW5kZWQsXG4gIG1vb25waGFzZVxuKSB7XG4gIGxldCBtb21lbnQ7XG4gIGlmICh0aW1lQXRDaXR5IC0gc3Vuc2V0RGF0ZSA+IDAuNSB8fCB0aW1lQXRDaXR5IC0gc3VucmlzZURhdGUgPCAwKSB7XG4gICAgbW9tZW50ID0gXCJuaWdodFwiO1xuICB9XG4gIGlmICh0aW1lQXRDaXR5ID4gc3VucmlzZURhdGUgJiYgdGltZUF0Q2l0eSA8IHN1bnNldERhdGUpIHtcbiAgICBtb21lbnQgPSBcImRheVwiO1xuICAgIGlmICgodGltZUF0Q2l0eSAtIHN1bnJpc2VEYXRlKSAvICg2MCAqIDEwMDAgKiA2MCkgPCA2KSB7XG4gICAgICBtb21lbnQgPSBcIm1vcm5pbmdcIjtcbiAgICB9XG4gICAgaWYgKChzdW5zZXREYXRlIC0gdGltZUF0Q2l0eSkgLyAoNjAgKiAxMDAwICogNjApIDwgMC41KSB7XG4gICAgICBtb21lbnQgPSBcInN1bnNldFwiO1xuICAgIH1cbiAgfVxuXG4gIGxldCB0ZW1wZXJhdHVyZTtcbiAgaWYgKHVuaXRzID09IFwibWV0cmljXCIpIHtcbiAgICBpZiAodGVtcEZlZWxzUm91bmRlZCA8IC0xMCkge1xuICAgICAgdGVtcGVyYXR1cmUgPSBcImZyZWV6aW5nXCI7XG4gICAgfVxuICB9XG4gIGlmICh1bml0cyA9PSBcImltcGVyaWFsXCIpIHtcbiAgICBpZiAodGVtcEZlZWxzUm91bmRlZCA8IDE0KSB7XG4gICAgICB0ZW1wZXJhdHVyZSA9IFwiZnJlZXppbmdcIjtcbiAgICB9XG4gIH1cblxuICBsZXQgaWQgPSBcInphNXhpa3VScjBPektcIjtcblxuICBpZiAod2VhdGhlci5tYXRjaCgvcmFpbi8pKSB7XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJkcml6emxlXCIpIHtcbiAgICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgICBpZCA9IFwibDBJcklrcTdRM2lSSUkwaHlcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgICBpZCA9IFwieFQ5R0VJYzFuUTdiVlFRNTRRXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgICBpZCA9IFwieFQ5R0VJYzFuUTdiVlFRNTRRXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwibGlnaHRcIikge1xuICAgICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICAgIGlkID0gXCJ4VDlHRU9nMDlPdVJlc25aNmdcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgICAgaWQgPSBcInhUY25UOFB1S2w1R0J6MjZta1wiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICAgIGlkID0gXCJ4VDlHRUljMW5RN2JWUVE1NFFcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCJ4VDlHRUljMW5RN2JWUVE1NFFcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJtb2RlcmF0ZVwiKSB7XG4gICAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgICAgaWQgPSBcIlcwYzN4Y1ozRjFkMEVZWWIwZlwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgICBpZCA9IFwiaGs2Y3pnZm13VkpTMFwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICAgIGlkID0gXCIxd3JSUUh5YlpxQUI0alpxWndcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCI1dG9yRUVNOFFuUjk1Q3FnMTFcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJoZWF2eVwiKSB7XG4gICAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgICAgaWQgPSBcIlhnWW9UZGdqNU5pVTc4cHJmbVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgICBpZCA9IFwiWGdZb1RkZ2o1TmlVNzhwcmZtXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgICAgaWQgPSBcIlRWcGVYRGk4eFRseW9cIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCJsME1ZQWZ4YmczZmhxbjFSdVwiO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcInRodW5kZXJzdG9ybVwiKSB7XG4gICAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgICAgaWQgPSBcIjNvc3hZeklRUnFONERPRWRkQ1wiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgICBpZCA9IFwibDRGR2tkdExHZnBVaUJkRkNcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgICBpZCA9IFwibDBNWU9KQ0NFOHlUZmN3U1lcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCJacVVOU3lLWUM5eU4zTzRqSEFcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL2Nsb3Vkcy8pKSB7XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJvdmVyY2FzdFwiKSB7XG4gICAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgICAgaWQgPSBcImRXSWF1MVpSeUlqM2o2WUVhTFwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgICBpZCA9IFwiZDVQUFlqY2IzY2FQVEhNM2h2XCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgICAgaWQgPSBcIlloZzlsOGtYdXE5NFFcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCIyZkM3NGpObjVTUHZPXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiYnJva2VuXCIpIHtcbiAgICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgICBpZCA9IFwiNjNXc05nOURBaFJrWVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgICBpZCA9IFwiNjNXc05nOURBaFJrWVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICAgIGlkID0gXCI0OVZCMFBIeFI1VnNjXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgICBpZCA9IFwiMTNRc2xYZ0tPUXptaHlcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJzY2F0dGVyZWRcIikge1xuICAgICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICAgIGlkID0gXCJ1T3VpSzRGNXpaa1oyXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgIGlkID0gXCIwU3R5aW5jZjZLMnR2ZmpiNVFcIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgICBpZCA9IFwiNjNXc05nOURBaFJrWVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgICAgaWYgKG1vb25waGFzZSA9PSAwLjUpIHtcbiAgICAgICAgICBpZCA9IFwiblY1bDJTRnNVOTNja2FXbHluXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJzY2F0dGVyZWRcIikge1xuICAgICAgICAgICAgaWQgPSBcInd3akVQanFjdVB3dlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJmZXdcIikge1xuICAgICAgICAgICAgaWQgPSBcInd3akVQanFjdVB3dlNcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJmZXdcIikge1xuICAgICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICAgIGlkID0gXCJnWkVCcHVPa1B1eWRpXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgIGlkID0gXCJtbm82QkpmeThVU2ljXCI7XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgICAgaWQgPSBcIld6TERsakJwcGxVdm1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICAgIGlmIChtb29ucGhhc2UgPT0gMC41KSB7XG4gICAgICAgICAgaWQgPSBcIm5WNWwyU0ZzVTkzY2thV2x5blwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwic2NhdHRlcmVkXCIpIHtcbiAgICAgICAgICAgIGlkID0gXCJ3d2pFUGpxY3VQd3ZTXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiZmV3XCIpIHtcbiAgICAgICAgICAgIGlkID0gXCJ3d2pFUGpxY3VQd3ZTXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9zbm93LykpIHtcbiAgICBpZiAodGVtcGVyYXR1cmUgPT0gXCJmcmVlemluZ1wiKSB7XG4gICAgICBpZCA9IFwiczRCaTQyMG1NRFJCS1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL3Nob3dlci8pKSB7XG4gICAgICAgICAgaWQgPSBcIk9OTG9SUkFIUWg1a1lcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvbGlnaHQvKSkge1xuICAgICAgICAgIGlkID0gXCI3QmdwdzdQd2R4b0RDXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWQgPSBcIjVxRkU5MU9tZWhkUnEwc0w1YVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9zaG93ZXIvKSkge1xuICAgICAgICAgIGlkID0gXCJPTkxvUlJBSFFoNWtZXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL2xpZ2h0LykpIHtcbiAgICAgICAgICBpZCA9IFwiT1d4cnhSSFk2YWZSdVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlkID0gXCI1cUZFOTFPbWVoZFJxMHNMNWFcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9zaG93ZXIvKSkge1xuICAgICAgICAgIGlkID0gXCJPTkxvUlJBSFFoNWtZXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL2xpZ2h0LykpIHtcbiAgICAgICAgICBpZCA9IFwiWGkyWHUwTWVqaHNVb1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlkID0gXCI1cUZFOTFPbWVoZFJxMHNMNWFcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL3Nob3dlci8pKSB7XG4gICAgICAgICAgaWQgPSBcIk9OTG9SUkFIUWg1a1lcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2VhdGhlci5tYXRjaCgvbGlnaHQvKSkge1xuICAgICAgICAgIGlkID0gXCJiR2FPZHFlcVlRS2MwXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWQgPSBcIjNUS1RybjI5OW1JNlJzWXVhVVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9oYXplLykpIHtcbiAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgIGlkID0gXCJyMk9NdVRDRm8wcnYycmdBTDVcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgaWQgPSBcImRnZUlINVJQeW5BNlFcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICBpZCA9IFwieFRpVG5oN0hlWWE3YkJsaTZZXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICBpZCA9IFwiM3NKUWRDMGZYSkx5V09zNFdNXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9taXN0LykpIHtcbiAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgIGlkID0gXCJvVmFpZ3FVaFB2RGdsUTB1V0pcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgaWQgPSBcIm9WYWlncVVoUHZEZ2xRMHVXSlwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgIGlkID0gXCIzbzcyRjY1ZEpsN1owUHRkakdcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgIGlkID0gXCIzbzcyRjY1ZEpsN1owUHRkakdcIjtcbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL2ZvZy8pKSB7XG4gICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICBpZCA9IFwib0Fidk1YdmFoMU0wVVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICBpZCA9IFwiM283cmJUM0VDQ1hkRUdFOGZ1XCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgaWQgPSBcInhUOHFCajNPeGw5a3VRS2dPa1wiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgaWQgPSBcImR6Nk5yazM1eFdQM3FcIjtcbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL3NsZWV0LykpIHtcbiAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgIGlkID0gXCJkM21sbXROUG94TnJ0NEJpXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgIGlkID0gXCJKVGdobExnMGQxQnBadmJRbEdcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICBpZCA9IFwiSlRnaGxMZzBkMUJwWnZiUWxHXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICBpZCA9IFwiZDNtbG10TlBveE5ydDRCaVwiO1xuICAgIH1cbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvZHJpenpsZS8pKSB7XG4gICAgaWYgKG1vbWVudCA9PSBcImRheVwiKSB7XG4gICAgICBpZCA9IFwieFQ5R0VPZzA5T3VSZXNuWjZnXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgIGlkID0gXCJsMElySWtxN1EzaVJJSTBoeVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgIGlkID0gXCJ4VDlHRUljMW5RN2JWUVE1NFFcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgIGlkID0gXCJ4VDlHRU9nMDlPdVJlc25aNmdcIjtcbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL3Ntb2tlLykpIHtcbiAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgIGlkID0gXCJsMkplOWRVSTVMcHpmSEdUZVwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICBpZCA9IFwiWldSQ1dkVXltSUdOV1wiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwic3Vuc2V0XCIpIHtcbiAgICAgIGlkID0gXCJsNHBUcm5jNGtsMnV1cEpGNlwiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgaWQgPSBcImwySmU5ZFVJNUxwemZIR1RlXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9kdXN0LykpIHtcbiAgICBpZiAobW9tZW50ID09IFwiZGF5XCIpIHtcbiAgICAgIGlkID0gXCJ0cXRaRGo1QnFDMENZXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgIGlkID0gXCJBVWM0cWVaeEcyOGxxXCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgaWQgPSBcInRxdFpEajVCcUMwQ1lcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm5pZ2h0XCIpIHtcbiAgICAgIGlkID0gXCJsNHBUME50UFNNVjNwdzZMbVwiO1xuICAgIH1cbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvdGh1bmRlcnN0b3JtLykgJiYgIXdlYXRoZXIubWF0Y2goL3JhaW4vKSkge1xuICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgaWQgPSBcIjNvc3hZeklRUnFONERPRWRkQ1wiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICBpZCA9IFwiM29FakhHWmtyb2xtOVVndk00XCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJzdW5zZXRcIikge1xuICAgICAgaWQgPSBcIlk0SlBZc3JKRWs0NTRwTmJ0c1wiO1xuICAgIH1cbiAgICBpZiAobW9tZW50ID09IFwibmlnaHRcIikge1xuICAgICAgaWQgPSBcIjNvODV4ekV0UXM2OTNsbjNxTVwiO1xuICAgIH1cbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvY2xlYXIvKSkge1xuICAgIGlmIChtb21lbnQgPT0gXCJkYXlcIikge1xuICAgICAgaWQgPSBcIlZ4YnZwZmFUVG8zbGVcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcIm1vcm5pbmdcIikge1xuICAgICAgaWQgPSBcIlJxU0o2blFWc09weGVcIjtcbiAgICB9XG4gICAgaWYgKG1vbWVudCA9PSBcInN1bnNldFwiKSB7XG4gICAgICBpZCA9IFwiWlpJRXRRSG1pVE53dXhUT2R0XCI7XG4gICAgfVxuICAgIGlmIChtb21lbnQgPT0gXCJuaWdodFwiKSB7XG4gICAgICBpZiAobW9vbnBoYXNlID09IDAuNSkge1xuICAgICAgICBpZCA9IFwiYU45R3FvUjdPRDNucVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vb25waGFzZSA+IDAgJiYgbW9vbnBoYXNlIDwgMC4yNSkge1xuICAgICAgICBpZCA9IFwiOXVrUE9DUzlFT0V0YVwiO1xuICAgICAgfVxuICAgICAgaWYgKG1vb25waGFzZSA+IDAuNzUgJiYgbW9vbnBoYXNlIDw9IDEpIHtcbiAgICAgICAgaWQgPSBcIjl1a1BPQ1M5RU9FdGFcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlkID0gXCJtNW9RYWJCZG9PeWU0XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLyR7aWR9P2FwaV9rZXk9JHtnaWZLZXl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBsZXQgc3JjID0gYXBpUHJvbWlzZVJlc29sdmVkLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgcmV0dXJuIHNyYztcbn1cblxuZXhwb3J0IHsgZ2V0RXJyb3JHaWYsIGdldFdlYXRoZXJHaWYgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBzaG93T25JbmZvIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcbmltcG9ydCB7IHNob3dPbkNhcmQgfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IHsgbWFrZUVycm9yQ2FyZCB9IGZyb20gXCIuL2Vycm9yQ2FyZHNcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcbmltcG9ydCB7IGdldFdlYXRoZXJHaWYgfSBmcm9tIFwiLi9naWZBUElcIjtcbmltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zVW5mYXZvcml0ZSB9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7IG1ha2VGYXZMaXN0IH0gZnJvbSBcIi4vbWFrZUZhdkxpc3RcIjtcblxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmNvbnN0IGhhbmRsZVVzZXJJbnB1dCA9IHtcbiAgd2VhdGhlcktleTogXCI4YWUyZDEzZTU0ZWJlZjc3NWVmZmYyYzUyODE3YTVlMlwiLFxuICBzdW5BbmRNb29uS2V5OiBcIlZBTTVLNkNUQlZFN1RSSjRZQzM2NVFERjhcIixcbiAgZ2lmS2V5OiBcIlpTcUxaQm9QMUwyNXBTMDNHNDc4cGpSQmIwTkVTYjBDXCIsXG4gIHVuaXRzOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWV0cmljXCIpKSxcbiAgaGFuZGxlU2VhcmNoSWNvbihjaXR5RnJvbUNhcmQpIHtcbiAgICBsZXQgc2VhcmNoYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXIgPiBpbnB1dFwiKTtcbiAgICBsZXQgdW5pdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWV0cmljXCIpKTtcbiAgICBsZXQgdW5pdHNUb1VzZSA9IFwiXCI7XG4gICAgdW5pdHMgPyAodW5pdHNUb1VzZSA9IFwibWV0cmljXCIpIDogKHVuaXRzVG9Vc2UgPSBcImltcGVyaWFsXCIpO1xuICAgIGlmIChzZWFyY2hiYXIudmFsdWUpIHtcbiAgICAgIGdldFdlYXRoZXIoc2VhcmNoYmFyLnZhbHVlLCB1bml0c1RvVXNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNpdHlGcm9tQ2FyZCkge1xuICAgICAgICBnZXRXZWF0aGVyKGNpdHlGcm9tQ2FyZCwgdW5pdHNUb1VzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICBsZXQgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKTtcbiAgICAgICAgICBnZXRXZWF0aGVyKGNpdHkuaW5uZXJUZXh0LCB1bml0c1RvVXNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYWtlRmF2TGlzdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcmRGb3JGYXZMaXN0KGxvY2F0aW9uLCB1bml0cykge1xuICBsZXQgYXBpUHJvbWlzZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7aGFuZGxlVXNlcklucHV0LndlYXRoZXJLZXl9JnVuaXRzPSR7dW5pdHN9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLmNvZCA9PSA0MDQpIHtcbiAgICBsZXQgZXJyb3JDYXJkID0gYXdhaXQgbWFrZUVycm9yQ2FyZCg0MDQpO1xuICAgIGNsZWFuKHJlc3VsdCk7XG4gICAgcmVzdWx0LmFwcGVuZENoaWxkKGVycm9yQ2FyZCk7XG4gICAgZ2V0T3B0aW9ucyhmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNpdHkgPSBhcGlQcm9taXNlUmVzb2x2ZWQubmFtZTtcbiAgICBsZXQgY291bnRyeSA9IG51bGw7XG4gICAgY291bnRyeSA9IGFwaVByb21pc2VSZXNvbHZlZC5zeXMuY291bnRyeTtcbiAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGxldCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG4gICAgbGV0IGRhdGVBdENpdHkgPSBuZXcgRGF0ZShcbiAgICAgIHRpbWVOb3cgKyBvZmZzZXQgKyBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwXG4gICAgKTtcbiAgICBsZXQgdGltZUF0Q2l0eSA9IGRhdGVBdENpdHkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IGRhdGVBdENpdHlTaW1wbGUgPSBkYXRlQXRDaXR5LnRvRGF0ZVN0cmluZygpO1xuICAgIGxldCB0ZW1wZXJhdHVyZSA9IGFwaVByb21pc2VSZXNvbHZlZC5tYWluLnRlbXA7XG4gICAgbGV0IHRlbXBSb3VuZGVkID0gTWF0aC5yb3VuZCh0ZW1wZXJhdHVyZSAqIDEwKSAvIDEwO1xuICAgIGxldCB0ZW1wZXJhdHVyZUZlZWxzID0gYXBpUHJvbWlzZVJlc29sdmVkLm1haW4uZmVlbHNfbGlrZTtcbiAgICBsZXQgdGVtcEZlZWxzUm91bmRlZCA9IE1hdGgucm91bmQodGVtcGVyYXR1cmVGZWVscyAqIDEwKSAvIDEwO1xuICAgIGxldCB3ZWF0aGVyID0gYXBpUHJvbWlzZVJlc29sdmVkLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICBsZXQgY2FyZCA9IHNob3dPbkNhcmQoXG4gICAgICB1bml0cyxcbiAgICAgIGNpdHksXG4gICAgICBjb3VudHJ5LFxuICAgICAgdGltZUF0Q2l0eSxcbiAgICAgIGRhdGVBdENpdHlTaW1wbGUsXG4gICAgICB0ZW1wUm91bmRlZCxcbiAgICAgIHRlbXBGZWVsc1JvdW5kZWQsXG4gICAgICB3ZWF0aGVyXG4gICAgKTtcbiAgICByZXR1cm4gY2FyZDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwgdW5pdHMpIHtcbiAgbGV0IGZhdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzLWJhclwiKTtcbiAgaWYgKGZhdkJhcikge1xuICAgIGZhdkJhci5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgfVxuICBsZXQgYXBpUHJvbWlzZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7aGFuZGxlVXNlcklucHV0LndlYXRoZXJLZXl9JnVuaXRzPSR7dW5pdHN9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBpZiAoYXBpUHJvbWlzZVJlc29sdmVkLmNvZCA9PSA0MDQpIHtcbiAgICBsZXQgZXJyb3JDYXJkID0gYXdhaXQgbWFrZUVycm9yQ2FyZCg0MDQpO1xuICAgIGNsZWFuKHJlc3VsdCk7XG4gICAgcmVzdWx0LmFwcGVuZENoaWxkKGVycm9yQ2FyZCk7XG4gICAgZ2V0T3B0aW9ucyhmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGNpdHkgPSBhcGlQcm9taXNlUmVzb2x2ZWQubmFtZTtcblxuICAgIGxldCBjaXRpZXMgPSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDAgJiYgY2l0aWVzLnNvbWUoKGMpID0+IGMgPT0gY2l0eSkpIHtcbiAgICAgIGdldE9wdGlvbnNVbmZhdm9yaXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldE9wdGlvbnModHJ1ZSk7XG4gICAgfVxuXG4gICAgbGV0IGNvdW50cnkgPSBudWxsO1xuICAgIGNvdW50cnkgPSBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzLmNvdW50cnk7XG4gICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICBsZXQgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAgKiAxMDAwO1xuICAgIGxldCBkYXRlQXRDaXR5ID0gbmV3IERhdGUoXG4gICAgICB0aW1lTm93ICsgb2Zmc2V0ICsgYXBpUHJvbWlzZVJlc29sdmVkLnRpbWV6b25lICogMTAwMFxuICAgICk7XG4gICAgbGV0IHRpbWVBdENpdHkgPSBkYXRlQXRDaXR5LnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIH0pO1xuICAgIGxldCBkYXRlQXRDaXR5U2ltcGxlID0gZGF0ZUF0Q2l0eS50b0RhdGVTdHJpbmcoKTtcbiAgICBsZXQgdGVtcGVyYXR1cmUgPSBhcGlQcm9taXNlUmVzb2x2ZWQubWFpbi50ZW1wO1xuICAgIGxldCB0ZW1wUm91bmRlZCA9IE1hdGgucm91bmQodGVtcGVyYXR1cmUgKiAxMCkgLyAxMDtcbiAgICBsZXQgdGVtcGVyYXR1cmVGZWVscyA9IGFwaVByb21pc2VSZXNvbHZlZC5tYWluLmZlZWxzX2xpa2U7XG4gICAgbGV0IHRlbXBGZWVsc1JvdW5kZWQgPSBNYXRoLnJvdW5kKHRlbXBlcmF0dXJlRmVlbHMgKiAxMCkgLyAxMDtcbiAgICBsZXQgd2VhdGhlciA9IGFwaVByb21pc2VSZXNvbHZlZC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIGxldCBnaWZTcmMgPSBcIlwiO1xuICAgIGxldCByYWluMWggPSBcIlwiO1xuICAgIGxldCByYWluM2ggPSBcIlwiO1xuICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQucmFpbikge1xuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5yYWluW1wiMWhcIl0pIHtcbiAgICAgICAgcmFpbjFoID0gYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIxaFwiXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQucmFpbltcIjNoXCJdKSB7XG4gICAgICAgIHJhaW4zaCA9IGFwaVByb21pc2VSZXNvbHZlZC5yYWluW1wiM2hcIl07XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzbm93MWggPSBcIlwiO1xuICAgIGxldCBzbm93M2ggPSBcIlwiO1xuICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuc25vdykge1xuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5zbm93W1wiMWhcIl0pIHtcbiAgICAgICAgc25vdzFoID0gYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIxaFwiXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuc25vd1tcIjNoXCJdKSB7XG4gICAgICAgIHNub3czaCA9IGFwaVByb21pc2VSZXNvbHZlZC5zbm93W1wiM2hcIl07XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdW5yaXNlID0gbmV3IERhdGUoXG4gICAgICBuZXcgRGF0ZShcbiAgICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnN5c1tcInN1bnJpc2VcIl0gKiAxMDAwICtcbiAgICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwICtcbiAgICAgICAgICBvZmZzZXRcbiAgICAgIClcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIH0pO1xuICAgIGxldCBzdW5zZXQgPSBuZXcgRGF0ZShcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3Vuc2V0XCJdICogMTAwMCArXG4gICAgICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnRpbWV6b25lICogMTAwMCArXG4gICAgICAgICAgb2Zmc2V0XG4gICAgICApXG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICB9KTtcbiAgICBsZXQgY2xvdWRpbmVzcyA9IGFwaVByb21pc2VSZXNvbHZlZC5jbG91ZHNbXCJhbGxcIl07XG4gICAgbGV0IHdpbmQgPSBhcGlQcm9taXNlUmVzb2x2ZWQud2luZFtcInNwZWVkXCJdO1xuXG4gICAgbGV0IHN1bkFuZE1vb25BcGlQcm9taXNlUmVzb2x2ZWQgPSBhd2FpdCBnZXRGcm9tU3VuQW5kTW9vbkFQSShcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGF0ZUF0Q2l0eVxuICAgICk7XG4gICAgbGV0IG1vb25waGFzZTtcbiAgICBsZXQgdXZpbmRleDtcbiAgICBpZiAoc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZC5jdXJyZW50Q29uZGl0aW9ucykge1xuICAgICAgbW9vbnBoYXNlID0gc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZC5jdXJyZW50Q29uZGl0aW9ucy5tb29ucGhhc2U7XG4gICAgICB1dmluZGV4ID0gc3VuQW5kTW9vbkFwaVByb21pc2VSZXNvbHZlZC5jdXJyZW50Q29uZGl0aW9ucy51dmluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBtb29ucGhhc2UgPSBzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkLmRheXNbMF0ubW9vbnBoYXNlO1xuICAgICAgdXZpbmRleCA9IHN1bkFuZE1vb25BcGlQcm9taXNlUmVzb2x2ZWQuZGF5c1swXS51dmluZGV4O1xuICAgIH1cblxuICAgIGxldCBzdW5yaXNlRGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnN5c1tcInN1bnJpc2VcIl0gKiAxMDAwICtcbiAgICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnRpbWV6b25lICogMTAwMCArXG4gICAgICAgIG9mZnNldFxuICAgICk7XG5cbiAgICBsZXQgc3Vuc2V0RGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnN5c1tcInN1bnNldFwiXSAqIDEwMDAgK1xuICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwICtcbiAgICAgICAgb2Zmc2V0XG4gICAgKTtcblxuICAgIHRyeSB7XG4gICAgICBnaWZTcmMgPSBhd2FpdCBnZXRXZWF0aGVyR2lmKFxuICAgICAgICB3ZWF0aGVyLFxuICAgICAgICBkYXRlQXRDaXR5LFxuICAgICAgICBzdW5yaXNlRGF0ZSxcbiAgICAgICAgc3Vuc2V0RGF0ZSxcbiAgICAgICAgdW5pdHMsXG4gICAgICAgIHRlbXBGZWVsc1JvdW5kZWQsXG4gICAgICAgIG1vb25waGFzZVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBmZXRjaGluZyB3ZWF0aGVyIGdpZjogXCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICBsZXQgZGF5ID0gZmFsc2U7XG4gICAgaWYgKGRhdGVBdENpdHkgPiBzdW5yaXNlRGF0ZSAmJiBkYXRlQXRDaXR5IDwgc3Vuc2V0RGF0ZSkge1xuICAgICAgZGF5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzaG93T25JbmZvKFxuICAgICAgdW5pdHMsXG4gICAgICBjaXR5LFxuICAgICAgY291bnRyeSxcbiAgICAgIHRpbWVBdENpdHksXG4gICAgICBkYXRlQXRDaXR5U2ltcGxlLFxuICAgICAgdGVtcFJvdW5kZWQsXG4gICAgICB0ZW1wRmVlbHNSb3VuZGVkLFxuICAgICAgd2VhdGhlcixcbiAgICAgIHJhaW4xaCxcbiAgICAgIHJhaW4zaCxcbiAgICAgIHNub3cxaCxcbiAgICAgIHNub3czaCxcbiAgICAgIHN1bnJpc2UsXG4gICAgICBzdW5zZXQsXG4gICAgICBjbG91ZGluZXNzLFxuICAgICAgd2luZCxcbiAgICAgIGdpZlNyYyxcbiAgICAgIG1vb25waGFzZSxcbiAgICAgIHV2aW5kZXgsXG4gICAgICBkYXlcbiAgICApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZyb21TdW5BbmRNb29uQVBJKGxvY2F0aW9uLCBkYXRlQXRDaXR5KSB7XG4gIGxldCBzdW5BbmRNb29uQXBpUHJvbWlzZVJlc29sdmVkO1xuXG4gIHRyeSB7XG4gICAgbGV0IHN1bkFuZE1vb25BcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsb2NhdGlvbn0vJHtcbiAgICAgICAgRGF0ZS5wYXJzZShkYXRlQXRDaXR5KSAvIDEwMDBcbiAgICAgIH0vP2tleT0ke2hhbmRsZVVzZXJJbnB1dC5zdW5BbmRNb29uS2V5fSZlbGVtZW50cz11dmluZGV4LG1vb25waGFzZWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIHN1bkFuZE1vb25BcGlQcm9taXNlUmVzb2x2ZWQgPSBhd2FpdCBzdW5BbmRNb29uQXBpUHJvbWlzZS5qc29uKCk7XG4gICAgcmV0dXJuIHN1bkFuZE1vb25BcGlQcm9taXNlUmVzb2x2ZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJ0aGVyZSB3YXMgYW4gZXJyb3Igb24gdGhlIHN1bkFuZE1vb25BUEk6IFwiLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVXNlcklucHV0O1xuIiwiaW1wb3J0IHsgZ2V0RmxhZyB9IGZyb20gXCIuL2ZsYWdBUElcIjtcbmltcG9ydCBoYW5kbGVVc2VySW5wdXQgZnJvbSBcIi4vaGFuZGxlVXNlcklucHV0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQmFzaWNzQ2FyZChcbiAgY2l0eSxcbiAgY291bnRyeSxcbiAgdGltZSxcbiAgZGF0ZSxcbiAgdGVtcCxcbiAgdGVtcEZlZWxzLFxuICB0ZW1wVW5pdCxcbiAgZm9yRmF2TGlzdFxuKSB7XG4gIGxldCBiYXNpY3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXNpY3MuY2xhc3NMaXN0LmFkZChcImJhc2ljc1wiKTtcblxuICBsZXQgYmFzaWNzQ2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBiYXNpY3NDaXR5LmlubmVyVGV4dCA9IGAke2NpdHl9YDtcbiAgYmFzaWNzQ2l0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNpdHlcIik7XG4gIGJhc2ljc0NpdHkuY2xhc3NMaXN0LmFkZChcImNpdHlcIik7XG4gIGxldCBiYXNpY3NDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc0NvdW50cnkuaW5uZXJUZXh0ID0gYCR7Y291bnRyeX1gO1xuICBsZXQgYmFzaWNzVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBiYXNpY3NUaW1lLmlubmVyVGV4dCA9IGAke3RpbWV9YDtcbiAgbGV0IGJhc2ljc0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgYmFzaWNzRGF0ZS5pbm5lclRleHQgPSBgJHtkYXRlfWA7XG4gIGxldCByZXRyaWV2YWxUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJldHJpZXZhbFRpbWUuaW5uZXJUZXh0ID0gYExhc3QgdXBkYXRlOiAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX1gO1xuICBsZXQgdGVtcFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbXBUZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHt0ZW1wfSAke3RlbXBVbml0fWA7XG4gIGxldCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbXBGZWVsc0xpa2UuaW5uZXJUZXh0ID0gYCR7dGVtcEZlZWxzfSAke3RlbXBVbml0fWA7XG4gIGxldCBmZWVsc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZlZWxzTGFiZWwuaW5uZXJUZXh0ID0gXCJGZWVscyBsaWtlOiBcIjtcblxuICBsZXQgYmFzaWNzVGl0bGVDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJhc2ljc1RpdGxlQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBiYXNpY3NEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJhc2ljc1RlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFzaWNzVGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImJhc2ljcy10ZW1wZXJhdHVyZVwiKTtcbiAgYmFzaWNzVGl0bGVDaXR5LmFwcGVuZENoaWxkKGJhc2ljc0NpdHkpO1xuICBiYXNpY3NUaXRsZUNvdW50cnkuYXBwZW5kQ2hpbGQoYmFzaWNzQ291bnRyeSk7XG4gIGxldCBmbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZmxhZy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjcm9zc29yaWdpblwiLFxuICAgIFwiQ3Jvc3MtT3JpZ2luLVJlc291cmNlLVBvbGljeTogY3Jvc3Mtb3JpZ2luIFwiXG4gICk7XG4gIGZsYWcuYWx0ID0gYCR7Y291bnRyeX0gZmxhZ2A7XG4gIGZsYWcuc3JjID0gZ2V0RmxhZyhjb3VudHJ5KTtcbiAgZmxhZy5jbGFzc0xpc3QuYWRkKFwiZmxhZ1wiKTtcblxuICBsZXQgYmFzaWNzRGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXNpY3NEYXRlQW5kVGltZS5hcHBlbmRDaGlsZChiYXNpY3NUaW1lKTtcbiAgYmFzaWNzRGF0ZUFuZFRpbWUuYXBwZW5kQ2hpbGQoYmFzaWNzRGF0ZSk7XG5cbiAgYmFzaWNzLmFwcGVuZENoaWxkKGJhc2ljc1RpdGxlQ2l0eSk7XG4gIGJhc2ljc0RldGFpbHMuYXBwZW5kQ2hpbGQoZmxhZyk7XG4gIGJhc2ljc0RldGFpbHMuYXBwZW5kQ2hpbGQoYmFzaWNzRGF0ZUFuZFRpbWUpO1xuICBiYXNpY3NEZXRhaWxzLmFwcGVuZENoaWxkKHJldHJpZXZhbFRpbWUpO1xuICBiYXNpY3MuYXBwZW5kQ2hpbGQoYmFzaWNzRGV0YWlscyk7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKHRlbXBUZW1wZXJhdHVyZSk7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGZlZWxzTGFiZWwpO1xuICBiYXNpY3NUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh0ZW1wRmVlbHNMaWtlKTtcbiAgYmFzaWNzLmFwcGVuZENoaWxkKGJhc2ljc1RlbXBlcmF0dXJlKTtcblxuICBpZiAoZm9yRmF2TGlzdCkge1xuICAgIGJhc2ljcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IHNlYXJjaGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gICAgICBzZWFyY2hiYXIudmFsdWUgPSBcIlwiO1xuICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oY2l0eSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gYmFzaWNzO1xufVxuIiwiaW1wb3J0IENsb3VkaW5lc3NJY29uIGZyb20gXCIuL2Nsb3VkLW91dGxpbmUuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xvdWRzQ2FyZChjbG91ZGluZXNzKSB7XG4gIGxldCBjbG91ZFN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvdWRTdGF0cy5jbGFzc0xpc3QuYWRkKFwiY2xvdWRTdGF0c1wiKTtcbiAgbGV0IGNsb3VkaW5lc3NJY29uID0gbmV3IEltYWdlKCk7XG4gIGNsb3VkaW5lc3NJY29uLmFsdCA9IFwiQ2xvdWRpbmVzcyBpY29uXCI7XG4gIGNsb3VkaW5lc3NJY29uLnNyYyA9IENsb3VkaW5lc3NJY29uO1xuICBsZXQgY2xvdWRpbmVzc0Nsb3VkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjbG91ZGluZXNzQ2xvdWRzLmlubmVyVGV4dCA9IGBDbG91ZGluZXNzOiAke2Nsb3VkaW5lc3N9ICVgO1xuICBjbG91ZFN0YXRzLmFwcGVuZENoaWxkKGNsb3VkaW5lc3NJY29uKTtcbiAgY2xvdWRTdGF0cy5hcHBlbmRDaGlsZChjbG91ZGluZXNzQ2xvdWRzKTtcbiAgcmV0dXJuIGNsb3VkU3RhdHM7XG59XG4iLCJpbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgZ2V0Q2FyZEZvckZhdkxpc3QgfSBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNGYXZMaXN0IH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFrZUZhdkxpc3QoKSB7XG4gIGxldCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKTtcbiAgbGV0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gIGxldCB1bml0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtZXRyaWNcIikpO1xuICBsZXQgbWV0cmljID0gXCJcIjtcbiAgbGV0IGZhdkxpc3RTb3J0ZWQgPSBbXTtcbiAgdW5pdHMgPyAobWV0cmljID0gXCJtZXRyaWNcIikgOiAobWV0cmljID0gXCJpbXBlcmlhbFwiKTtcbiAgY29uc3QgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gIGxldCBwcm9taXNlcyA9IFtdO1xuXG4gIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XG4gICAgbGV0IGdldENpdHkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY2l0eUNhcmQgPSBnZXRDYXJkRm9yRmF2TGlzdChjaXR5LCBtZXRyaWMpO1xuICAgICAgcmVzb2x2ZShjaXR5Q2FyZCk7XG4gICAgICByZWplY3QoXCJFcnJvciB3aWxlIGdldHRpbmcgY2l0eUNhcmQgZm9yIFwiLCBjaXR5KTtcbiAgICB9KTtcbiAgICBwcm9taXNlcy5wdXNoKGdldENpdHkpO1xuICB9KTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoZmF2TGlzdCkgPT4ge1xuICAgIGlmIChcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSA9PSBcImF0b3pcIiB8fFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvcnRcIikpID09IFwienRvYVwiXG4gICAgKSB7XG4gICAgICBjaXRpZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBsZXQgY2l0eUZyb21DYXJkID0gZmF2TGlzdC5maWx0ZXIoKGNpdHlPYmopID0+IGNpdHlPYmouY2l0eU5hbWUgPT0gYyk7XG4gICAgICAgIGZhdkxpc3RTb3J0ZWQucHVzaChjaXR5RnJvbUNhcmRbMF0uY2FyZCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSA9PSBcInRlbXBjdG9oXCIpIHtcbiAgICAgIGxldCBmYXZMaXN0U29ydGVkQ2FyZHMgPSBmYXZMaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEudGVtcEFjdHVhbCA+IGIudGVtcEFjdHVhbCkge1xuICAgICAgICAgIGAke2EuY2l0eU5hbWV9LCAke2EudGVtcEFjdHVhbH0gaXMgaG90dGVyIHRoYW4gJHtiLmNpdHlOYW1lfSwgJHtiLnRlbXBBY3R1YWx9YDtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS50ZW1wQWN0dWFsIDwgYi50ZW1wQWN0dWFsKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZhdkxpc3RTb3J0ZWRDYXJkcy5mb3JFYWNoKChjKSA9PiBmYXZMaXN0U29ydGVkLnB1c2goYy5jYXJkKSk7XG4gICAgICBsZXQgY2l0aWVzU29ydGVkID0gW107XG4gICAgICBmYXZMaXN0U29ydGVkQ2FyZHMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjaXRpZXNTb3J0ZWQucHVzaChjLmNpdHlOYW1lKTtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgSlNPTi5zdHJpbmdpZnkoY2l0aWVzU29ydGVkKSk7XG4gICAgfVxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29ydFwiKSkgPT0gXCJ0ZW1waHRvY1wiKSB7XG4gICAgICBsZXQgZmF2TGlzdFNvcnRlZENhcmRzID0gZmF2TGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLnRlbXBBY3R1YWwgPiBiLnRlbXBBY3R1YWwpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEudGVtcEFjdHVhbCA8IGIudGVtcEFjdHVhbCkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZhdkxpc3RTb3J0ZWRDYXJkcy5mb3JFYWNoKChjKSA9PiBmYXZMaXN0U29ydGVkLnB1c2goYy5jYXJkKSk7XG4gICAgICBsZXQgY2l0aWVzU29ydGVkID0gW107XG4gICAgICBmYXZMaXN0U29ydGVkQ2FyZHMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjaXRpZXNTb3J0ZWQucHVzaChjLmNpdHlOYW1lKTtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgSlNPTi5zdHJpbmdpZnkoY2l0aWVzU29ydGVkKSk7XG4gICAgfVxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29ydFwiKSkgPT0gXCJmZWVsc2N0b2hcIikge1xuICAgICAgbGV0IGZhdkxpc3RTb3J0ZWRDYXJkcyA9IGZhdkxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5mZWVscyA+IGIuZmVlbHMpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5mZWVscyA8IGIuZmVlbHMpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZmF2TGlzdFNvcnRlZENhcmRzLmZvckVhY2goKGMpID0+IGZhdkxpc3RTb3J0ZWQucHVzaChjLmNhcmQpKTtcbiAgICAgIGxldCBjaXRpZXNTb3J0ZWQgPSBbXTtcbiAgICAgIGZhdkxpc3RTb3J0ZWRDYXJkcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNpdGllc1NvcnRlZC5wdXNoKGMuY2l0eU5hbWUpO1xuICAgICAgfSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBKU09OLnN0cmluZ2lmeShjaXRpZXNTb3J0ZWQpKTtcbiAgICB9XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3J0XCIpKSA9PSBcImZlZWxzaHRvY1wiKSB7XG4gICAgICBsZXQgZmF2TGlzdFNvcnRlZENhcmRzID0gZmF2TGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmZlZWxzID4gYi5mZWVscykge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS5mZWVscyA8IGIuZmVlbHMpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmYXZMaXN0U29ydGVkQ2FyZHMuZm9yRWFjaCgoYykgPT4gZmF2TGlzdFNvcnRlZC5wdXNoKGMuY2FyZCkpO1xuICAgICAgbGV0IGNpdGllc1NvcnRlZCA9IFtdO1xuICAgICAgZmF2TGlzdFNvcnRlZENhcmRzLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY2l0aWVzU29ydGVkLnB1c2goYy5jaXR5TmFtZSk7XG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIEpTT04uc3RyaW5naWZ5KGNpdGllc1NvcnRlZCkpO1xuICAgIH1cbiAgICBpZiAoaW5mbykge1xuICAgICAgZmF2b3JpdGVzQmFyLnJlZnJlc2hGYXZvcml0ZXNCYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNldHRpbmdzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5ncy1iYXJcIik7XG4gICAgICBpZiAoIXNldHRpbmdzQmFyKSB7XG4gICAgICAgIGdldE9wdGlvbnNGYXZMaXN0KCk7XG4gICAgICB9XG4gICAgICBsZXQgZmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtYmFyXCIpO1xuICAgICAgZmF2QmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgY2xlYW4ocmVzdWx0KTtcbiAgICAgIGZhdkxpc3RTb3J0ZWQuZm9yRWFjaCgoZikgPT4gcmVzdWx0LmFwcGVuZENoaWxkKGYpKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VHaWZDYXJkKGdpZlNyYykge1xuICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2UuYWx0ID0gXCJ3ZWF0aGVyIGdpZlwiO1xuICBpbWFnZS5zcmMgPSBnaWZTcmM7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWdpZlwiKTtcbiAgcmV0dXJuIGltYWdlO1xufVxuIiwiaW1wb3J0IE5ld01vb24gZnJvbSBcIi4vbmV3LW1vb24uc3ZnXCI7XG5pbXBvcnQgV2F4aW5nQ3Jlc2NlbnRNb29uIGZyb20gXCIuL3dheGluZy1jcmVzZW50LW1vb24uc3ZnXCI7XG5pbXBvcnQgRmlyc3RRdWFydGVyTW9vbiBmcm9tIFwiLi9maXJzdC1xdWFydGVyLW1vb24uc3ZnXCI7XG5pbXBvcnQgV2F4aW5nR2liYm91c01vb24gZnJvbSBcIi4vd2F4aW5nLWdpYmJvdXMtbW9vbi5zdmdcIjtcbmltcG9ydCBGdWxsTW9vbiBmcm9tIFwiLi9mdWxsLW1vb24uc3ZnXCI7XG5pbXBvcnQgV2FuaW5nR2liYm91c01vb24gZnJvbSBcIi4vd2FuaW5nLWdpYmJvdXMtbW9vbi5zdmdcIjtcbmltcG9ydCBUaGlyZFF1YXJ0ZXJNb29uIGZyb20gXCIuL3RoaXJkLXF1YXJ0ZXItbW9vbi5zdmdcIjtcbmltcG9ydCBXYW5pbmdDcmVzY2VudCBmcm9tIFwiLi93YW5pbmctY3Jlc2NlbnQtbW9vbi5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb29uUGhhc2VDYXJkKG1vb25waGFzZSkge1xuICBsZXQgbW9vblBoYXNlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vb25QaGFzZUNhcmQuY2xhc3NMaXN0LmFkZChcIm1vb24tcGhhc2UtY2FyZFwiKTtcblxuICBsZXQgbW9vbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbW9vbkljb24uYWx0ID0gXCJNb29uIHBoYXNlIGljb25cIjtcblxuICBsZXQgcGhhc2VOYW1lO1xuXG4gIGlmIChtb29ucGhhc2UgPT0gMCkge1xuICAgIG1vb25JY29uLnNyYyA9IE5ld01vb247XG4gICAgcGhhc2VOYW1lID0gXCJOZXcgTW9vblwiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPiAwICYmIG1vb25waGFzZSA8IDAuMjUpIHtcbiAgICBtb29uSWNvbi5zcmMgPSBXYXhpbmdDcmVzY2VudE1vb247XG4gICAgcGhhc2VOYW1lID0gXCJXYXhpbmcgQ3Jlc2NlbnRcIjtcbiAgfVxuICBpZiAobW9vbnBoYXNlID09IDAuMjUpIHtcbiAgICBtb29uSWNvbi5zcmMgPSBGaXJzdFF1YXJ0ZXJNb29uO1xuICAgIHBoYXNlTmFtZSA9IFwiRmlyc3QgUXVhcnRlclwiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPiAwLjI1ICYmIG1vb25waGFzZSA8IDAuNSkge1xuICAgIG1vb25JY29uLnNyYyA9IFdheGluZ0dpYmJvdXNNb29uO1xuICAgIHBoYXNlTmFtZSA9IFwiV2F4aW5nIEdpYmJvdXNcIjtcbiAgfVxuICBpZiAobW9vbnBoYXNlID09IDAuNSkge1xuICAgIG1vb25JY29uLnNyYyA9IEZ1bGxNb29uO1xuICAgIHBoYXNlTmFtZSA9IFwiRnVsbCBNb29uXCI7XG4gIH1cbiAgaWYgKG1vb25waGFzZSA+IDAuNSAmJiBtb29ucGhhc2UgPCAwLjc1KSB7XG4gICAgbW9vbkljb24uc3JjID0gV2FuaW5nR2liYm91c01vb247XG4gICAgcGhhc2VOYW1lID0gXCJXYW5pbmcgR2liYm91c1wiO1xuICB9XG4gIGlmIChtb29ucGhhc2UgPT0gMC43NSkge1xuICAgIG1vb25JY29uLnNyYyA9IFRoaXJkUXVhcnRlck1vb247XG4gICAgcGhhc2VOYW1lID0gXCJMYXN0IFF1YXJ0ZXJcIjtcbiAgfVxuICBpZiAobW9vbnBoYXNlID4gMC43NSAmJiBtb29ucGhhc2UgPD0gMSkge1xuICAgIG1vb25JY29uLnNyYyA9IFdhbmluZ0NyZXNjZW50O1xuICAgIHBoYXNlTmFtZSA9IFwiV2FuaW5nIENyZXNjZW50XCI7XG4gIH1cblxuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7cGhhc2VOYW1lfWA7XG5cbiAgbW9vblBoYXNlQ2FyZC5hcHBlbmRDaGlsZChtb29uSWNvbik7XG4gIG1vb25QaGFzZUNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBtb29uUGhhc2VDYXJkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1ha2VPdmVydmlld0NhcmQod2VhdGhlcikge1xuICBsZXQgb3ZlcnZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVydmlldy5jbGFzc0xpc3QuYWRkKFwib3ZlcnZpZXdcIik7XG4gIGxldCBvdmVydmlld1dlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgb3ZlcnZpZXdXZWF0aGVyLmlubmVyVGV4dCA9IGAke3dlYXRoZXJ9YDtcbiAgb3ZlcnZpZXcuYXBwZW5kQ2hpbGQob3ZlcnZpZXdXZWF0aGVyKTtcblxuICByZXR1cm4gb3ZlcnZpZXc7XG59XG4iLCJpbXBvcnQgUmFpbkljb24gZnJvbSBcIi4vcmFpbi5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSYWluQ2FyZChyYWluVm9sMWgsIHJhaW5Wb2wzaCkge1xuICBsZXQgcmFpbkNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByYWluQ2FyZC5jbGFzc0xpc3QuYWRkKFwicmFpbi1jYXJkXCIpO1xuXG4gIGxldCByYWluSWNvbiA9IG5ldyBJbWFnZSgpO1xuICByYWluSWNvbi5hbHQgPSBcIlJhaW4gaWNvblwiO1xuICByYWluSWNvbi5zcmMgPSBSYWluSWNvbjtcblxuICBsZXQgcmFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIlJhaW4gdm9sdW1lXCI7XG5cbiAgbGV0IHJhaW4xaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICByYWluMWguaW5uZXJUZXh0ID0gYExhc3QgaG91cjogJHtyYWluVm9sMWh9IG1tYDtcblxuICByYWluSW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHJhaW5JbmZvLmFwcGVuZENoaWxkKHJhaW4xaCk7XG5cbiAgaWYgKHJhaW5Wb2wzaCkge1xuICAgIGxldCByYWluM2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByYWluM2guaW5uZXJUZXh0ID0gYExhc3QgM2g6ICR7cmFpblZvbDNofWA7XG4gICAgcmFpbkluZm8uYXBwZW5kQ2hpbGQocmFpbjNoKTtcbiAgfVxuXG4gIHJhaW5DYXJkLmFwcGVuZENoaWxkKHJhaW5JY29uKTtcbiAgcmFpbkNhcmQuYXBwZW5kQ2hpbGQocmFpbkluZm8pO1xuXG4gIHJldHVybiByYWluQ2FyZDtcbn1cbiIsImltcG9ydCBTZWFyY2hJY29uIGZyb20gXCIuL3NlYXJjaC1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZWFyY2hCYXIoKSB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyXCIpO1xuICBsZXQgc2VhcmNoSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzZWFyY2hJY29uLmFsdCA9IFwiU2VhcmNoIEljb25cIjtcbiAgc2VhcmNoSWNvbi5zcmMgPSBTZWFyY2hJY29uO1xuICBzZWFyY2hCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XG5cbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24pO1xuICBjb25zdCBzZWFyY2hCYXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gIHNlYXJjaEJhcklucHV0Lm9uZm9jdXMgPSAoKSA9PiB7XG4gICAgc2VhcmNoQmFySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICBzZWFyY2hJY29uLmNsaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBtYWtlQXV0b1JlZnJlc2hTZXR0aW5nIH0gZnJvbSBcIi4vc2V0dGluZ0F1dG9SZWZyZXNoXCI7XG5pbXBvcnQgeyBtYWtlU29ydFNldHRpbmcgfSBmcm9tIFwiLi9zZXR0aW5nU29ydFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNldHRpbmdzQmFyKCkge1xuICBsZXQgc2V0dGluZ3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXR0aW5nc0Jhci5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3MtYmFyXCIpO1xuXG4gIGxldCBhdXRvUmVmU2V0dGluZyA9IG1ha2VBdXRvUmVmcmVzaFNldHRpbmcoKTtcbiAgc2V0dGluZ3NCYXIuYXBwZW5kQ2hpbGQoYXV0b1JlZlNldHRpbmcpO1xuXG4gIGxldCBzb3J0U2V0dGluZyA9IG1ha2VTb3J0U2V0dGluZygpO1xuICBzZXR0aW5nc0Jhci5hcHBlbmRDaGlsZChzb3J0U2V0dGluZyk7XG5cbiAgc2V0dGluZ3NCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGljaykgPT4ge1xuICAgIGNsaWNrLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICByZXR1cm4gc2V0dGluZ3NCYXI7XG59XG4iLCJpbXBvcnQgU25vd0ljb24gZnJvbSBcIi4vc25vdy5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTbm93Q2FyZChzbm93Vm9sMWgsIHNub3dWb2wzaCkge1xuICBsZXQgc25vd0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzbm93Q2FyZC5jbGFzc0xpc3QuYWRkKFwic25vdy1jYXJkXCIpO1xuXG4gIGxldCBzbm93SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBzbm93SWNvbi5hbHQgPSBcIlNub3cgaWNvblwiO1xuICBzbm93SWNvbi5zcmMgPSBTbm93SWNvbjtcblxuICBsZXQgc25vd0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIlNub3cgdm9sdW1lXCI7XG5cbiAgbGV0IHNub3cxaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzbm93MWguaW5uZXJUZXh0ID0gYExhc3QgaG91cjogJHtzbm93Vm9sMWh9IG1tYDtcblxuICBzbm93SW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHNub3dJbmZvLmFwcGVuZENoaWxkKHNub3cxaCk7XG5cbiAgaWYgKHNub3dWb2wzaCkge1xuICAgIGxldCBzbm93M2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzbm93M2guaW5uZXJUZXh0ID0gYExhc3QgM2g6ICR7c25vd1ZvbDNofWA7XG4gICAgc25vd0luZm8uYXBwZW5kQ2hpbGQoc25vdzNoKTtcbiAgfVxuXG4gIHNub3dDYXJkLmFwcGVuZENoaWxkKHNub3dJY29uKTtcbiAgc25vd0NhcmQuYXBwZW5kQ2hpbGQoc25vd0luZm8pO1xuXG4gIHJldHVybiBzbm93Q2FyZDtcbn1cbiIsImltcG9ydCBTdW5yaXNlSWNvbiBmcm9tIFwiLi9zdW5yaXNlLnN2Z1wiO1xuaW1wb3J0IFN1bnNldEljb24gZnJvbSBcIi4vc3Vuc2V0LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1bkNhcmQoc3VucmlzZSwgc3Vuc2V0KSB7XG4gIGxldCBzdW5TdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1blN0YXRzLmNsYXNzTGlzdC5hZGQoXCJzdW5TdGF0c1wiKTtcblxuICBsZXQgc3VucmlzZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgc3Vuc2V0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHN1bnJpc2VJY29uID0gbmV3IEltYWdlKCk7XG4gIHN1bnJpc2VJY29uLmFsdCA9IFwiU3VucmlzZSBpY29uXCI7XG4gIHN1bnJpc2VJY29uLnNyYyA9IFN1bnJpc2VJY29uO1xuXG4gIGxldCBzdW5zZXRJY29uID0gbmV3IEltYWdlKCk7XG4gIHN1bnNldEljb24uYWx0ID0gXCJTdW5zZXQgaWNvblwiO1xuICBzdW5zZXRJY29uLnNyYyA9IFN1bnNldEljb247XG5cbiAgbGV0IHN1blN0YXRzU3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdW5TdGF0c1N1bnJpc2UuaW5uZXJUZXh0ID0gYFN1bnJpc2U6ICR7c3VucmlzZX1gO1xuXG4gIGxldCBzdW5TdGF0c1N1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdW5TdGF0c1N1bnNldC5pbm5lclRleHQgPSBgU3Vuc2V0OiAke3N1bnNldH1gO1xuXG4gIHN1bnJpc2VFbGVtZW50LmFwcGVuZENoaWxkKHN1bnJpc2VJY29uKTtcbiAgc3VucmlzZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VuU3RhdHNTdW5yaXNlKTtcblxuICBzdW5zZXRFbGVtZW50LmFwcGVuZENoaWxkKHN1bnNldEljb24pO1xuICBzdW5zZXRFbGVtZW50LmFwcGVuZENoaWxkKHN1blN0YXRzU3Vuc2V0KTtcblxuICBzdW5TdGF0cy5hcHBlbmRDaGlsZChzdW5yaXNlRWxlbWVudCk7XG4gIHN1blN0YXRzLmFwcGVuZENoaWxkKHN1bnNldEVsZW1lbnQpO1xuICByZXR1cm4gc3VuU3RhdHM7XG59XG4iLCJpbXBvcnQgVVZJbmRleEljb24gZnJvbSBcIi4vVVZJY29uLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVVWSW5kZXhDYXJkKHV2aW5kZXgpIHtcbiAgbGV0IHV2SW5kZXhDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXZJbmRleENhcmQuY2xhc3NMaXN0LmFkZChcInV2LWluZGV4LWNhcmRcIik7XG5cbiAgbGV0IHV2SWNvbiA9IG5ldyBJbWFnZSgpO1xuICB1dkljb24uYWx0ID0gXCJVViBpbmRleCBpY29uXCI7XG4gIHV2SWNvbi5zcmMgPSBVVkluZGV4SWNvbjtcblxuICBsZXQgZGVzY3JpcHRpb247XG4gIGlmICh1dmluZGV4IDw9IDIpIHtcbiAgICBkZXNjcmlwdGlvbiA9IFwiKGxvdylcIjtcbiAgfVxuICBpZiAodXZpbmRleCA+IDIgJiYgdXZpbmRleCA8PSA1KSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIihtb2RlcmF0ZSlcIjtcbiAgfVxuICBpZiAodXZpbmRleCA+IDUgJiYgdXZpbmRleCA8PSA3KSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIihoaWdoKVwiO1xuICB9XG4gIGlmICh1dmluZGV4ID4gNyAmJiB1dmluZGV4IDw9IDEwKSB7XG4gICAgZGVzY3JpcHRpb24gPSBcIih2ZXJ5IGhpZ2gpXCI7XG4gIH1cbiAgaWYgKHV2aW5kZXggPiAxMCkge1xuICAgIGRlc2NyaXB0aW9uID0gXCIoZXh0cmVtZSlcIjtcbiAgfVxuXG4gIGxldCB1dkluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHV2SW5kZXguaW5uZXJUZXh0ID0gYFVWIEluZGV4OiAke3V2aW5kZXh9ICR7ZGVzY3JpcHRpb259YDtcblxuICB1dkluZGV4Q2FyZC5hcHBlbmRDaGlsZCh1dkljb24pO1xuICB1dkluZGV4Q2FyZC5hcHBlbmRDaGlsZCh1dkluZGV4KTtcblxuICByZXR1cm4gdXZJbmRleENhcmQ7XG59XG4iLCJpbXBvcnQgV2luZEljb24gZnJvbSBcIi4vd2luZC5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VXaW5kQ2FyZCh3aW5kKSB7XG4gIGxldCB3aW5kU3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3aW5kU3RhdHMuY2xhc3NMaXN0LmFkZChcIndpbmRTdGF0c1wiKTtcbiAgbGV0IHdpbmRJY29uID0gbmV3IEltYWdlKCk7XG4gIHdpbmRJY29uLmFsdCA9IFwiV2luZCBpY29uXCI7XG4gIHdpbmRJY29uLnNyYyA9IFdpbmRJY29uO1xuICBsZXQgd2luZFN0YXRzU3BlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgd2luZFN0YXRzU3BlZWQuaW5uZXJUZXh0ID0gYFdpbmQgU3BlZWQ6ICR7d2luZH0gbS9zYDtcbiAgd2luZFN0YXRzLmFwcGVuZENoaWxkKHdpbmRJY29uKTtcbiAgd2luZFN0YXRzLmFwcGVuZENoaWxkKHdpbmRTdGF0c1NwZWVkKTtcbiAgcmV0dXJuIHdpbmRTdGF0cztcbn1cbiIsImltcG9ydCBmYXZvcml0ZUljb24gZnJvbSBcIi4vZmF2LnN2Z1wiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCB7IG1ha2VGYXZMaXN0IH0gZnJvbSBcIi4vbWFrZUZhdkxpc3RcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNVbmZhdm9yaXRlIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgc29ydEF0b1ogfSBmcm9tIFwiLi9zZXR0aW5nU29ydFwiO1xuaW1wb3J0IHsgc29ydFp0b0EgfSBmcm9tIFwiLi9zZXR0aW5nU29ydFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZhdm9yaXRlT3B0aW9uKCkge1xuICBsZXQgZmF2b3JpdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYXZvcml0ZU9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWZhdm9yaXRlXCIpO1xuICBsZXQgZmF2b3JpdGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBmYXZvcml0ZUltYWdlLmFsdCA9IFwiRmF2b3JpdGUgaWNvblwiO1xuICBmYXZvcml0ZUltYWdlLnNyYyA9IGZhdm9yaXRlSWNvbjtcbiAgZmF2b3JpdGVPcHRpb24uYXBwZW5kQ2hpbGQoZmF2b3JpdGVJbWFnZSk7XG5cbiAgZmF2b3JpdGVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbiAgICBoYW5kbGVTb3J0QWN0aW9uKGNpdHkpO1xuICAgIGxldCBmYXZvcml0ZXNCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtYmFyXCIpO1xuICAgIGlmIChmYXZvcml0ZXNCYXJFbGVtZW50KSB7XG4gICAgICBmYXZvcml0ZXNCYXIucmVmcmVzaEZhdm9yaXRlc0JhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYXZvcml0ZXNCYXIubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgIH1cbiAgICBnZXRPcHRpb25zVW5mYXZvcml0ZSgpO1xuICB9KTtcblxuICByZXR1cm4gZmF2b3JpdGVPcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTb3J0QWN0aW9uKGNpdHkpIHtcbiAgbGV0IGNpdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICBpZiAoY2l0eSkge1xuICAgIGNpdGllcy5wdXNoKGNpdHkuaW5uZXJUZXh0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBKU09OLnN0cmluZ2lmeShjaXRpZXMpKTtcbiAgfVxuICBpZiAoY2l0aWVzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgY2l0aWVzU29ydGVkO1xuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic29ydFwiKSkgPT0gXCJhdG96XCIpIHtcbiAgICAgIGNpdGllc1NvcnRlZCA9IHNvcnRBdG9aKGNpdGllcyk7XG4gICAgICBsZXQgY2l0aWVzU3RyaWdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGNpdGllc1NvcnRlZCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNTdHJpZ2lmaWVkfWApO1xuICAgIH1cbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvcnRcIikpID09IFwienRvYVwiKSB7XG4gICAgICBjaXRpZXNTb3J0ZWQgPSBzb3J0WnRvQShjaXRpZXMpO1xuICAgICAgbGV0IGNpdGllc1N0cmlnaWZpZWQgPSBKU09OLnN0cmluZ2lmeShjaXRpZXNTb3J0ZWQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgYCR7Y2l0aWVzU3RyaWdpZmllZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFrZUZhdkxpc3QoKTtcbiAgICB9XG5cbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICBpZiAoaW5mbykge1xuICAgICAgZmF2b3JpdGVzQmFyLnJlZnJlc2hGYXZvcml0ZXNCYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFrZUZhdkxpc3QoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCByZWxvYWRJY29uIGZyb20gXCIuL3JlbG9hZC5zdmdcIjtcbmltcG9ydCBoYW5kbGVVc2VySW5wdXQgZnJvbSBcIi4vaGFuZGxlVXNlcklucHV0XCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVsb2FkT3B0aW9uKCkge1xuICBsZXQgcmVsb2FkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHJlbG9hZEltYWdlID0gbmV3IEltYWdlKCk7XG4gIHJlbG9hZEltYWdlLmFsdCA9IFwiUmVsb2FkIGljb25cIjtcbiAgcmVsb2FkSW1hZ2Uuc3JjID0gcmVsb2FkSWNvbjtcblxuICByZWxvYWRPcHRpb24uYXBwZW5kQ2hpbGQocmVsb2FkSW1hZ2UpO1xuXG4gIHJlbG9hZE9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXJlbG9hZFwiKTtcblxuICByZWxvYWRPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICBpZiAoaW5mbykge1xuICAgICAgbGV0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlcIik7XG4gICAgICBsZXQgY2l0eU5hbWUgPSBjaXR5LmlubmVyVGV4dDtcbiAgICAgIGNsZWFuKFwiLnJlc3VsdFwiKTtcbiAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKGNpdHlOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNlYXJjaGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gICAgICBzZWFyY2hiYXIudmFsdWUgPSBcIlwiO1xuICAgICAgY29uc29sZS5sb2coc2VhcmNoYmFyKTtcbiAgICAgIGNsZWFuKFwiLnJlc3VsdFwiKTtcbiAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVsb2FkT3B0aW9uO1xufVxuIiwiaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiLi9zZXR0aW5ncy5zdmdcIjtcbmltcG9ydCBTZXR0aW5nc09wZW5JY29uIGZyb20gXCIuL3NldHRpbmdzLW9wZW4uc3ZnXCI7XG5pbXBvcnQgeyBtYWtlU2V0dGluZ3NCYXIgfSBmcm9tIFwiLi9tYWtlU2V0dGluZ3NCYXJcIjtcbmltcG9ydCBmYXZvcml0ZXNCYXIgZnJvbSBcIi4vZmF2b3JpdGVzQmFyXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zVW5mYXZvcml0ZSB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXR0aW5nc09wdGlvbigpIHtcbiAgbGV0IHNldHRpbmdzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0dGluZ3NPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1zZXR0aW5nc1wiKTtcbiAgbGV0IHNldHRpbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc2V0dGluZ3NJbWFnZS5hbHQgPSBcIlNldHRpbmdzIGljb25cIjtcbiAgc2V0dGluZ3NJbWFnZS5zcmMgPSBTZXR0aW5nc0ljb247XG4gIHNldHRpbmdzT3B0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzSW1hZ2UpO1xuXG4gIHNldHRpbmdzT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2spID0+IHtcbiAgICBoYW5kbGVTZXR0aW5nT3B0aW9uQ2xpY2soY2xpY2spO1xuICB9KTtcblxuICByZXR1cm4gc2V0dGluZ3NPcHRpb247XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNldHRpbmdPcHRpb25DbGljayhjbGljaykge1xuICBjbGljay5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XG4gIGxldCBmYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gIGxldCBzZXR0aW5nc09wZW5PcHRpb24gPSBtYWtlU2V0dGluZ3NPcGVuT3B0aW9uKCk7XG4gIGxldCBvcHRpb25zQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuICBvcHRpb25zQmFyLnJlbW92ZUNoaWxkKG9wdGlvbnNCYXIuZmlyc3RDaGlsZCk7XG4gIG9wdGlvbnNCYXIucHJlcGVuZChzZXR0aW5nc09wZW5PcHRpb24pO1xuICBsZXQgc2V0dGluZ3NCYXIgPSBtYWtlU2V0dGluZ3NCYXIoKTtcbiAgaWYgKGZhdkJhcikge1xuICAgIGhlYWRlci5pbnNlcnRCZWZvcmUoc2V0dGluZ3NCYXIsIGZhdkJhcik7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHNob3dpbmdTZXR0aW5nc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ2QtYmFyXCIpO1xuICAgIGlmIChzaG93aW5nU2V0dGluZ3NCYXIpIHtcbiAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZXR0aW5nc0Jhcik7XG4gICAgfVxuICB9XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU91dE9mU2V0dGluZ3NDbGljaywge1xuICAgIG9uY2U6IHRydWUsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlT3V0T2ZTZXR0aW5nc0NsaWNrKCkge1xuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgbGV0IHNldHRpbmdzQmFyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ3MtYmFyXCIpO1xuICBpZiAoc2V0dGluZ3NCYXJFbGVtZW50KSB7XG4gICAgbGV0IHNldHRpbmdzT3B0aW9uID0gbWFrZVNldHRpbmdzT3B0aW9uKCk7XG4gICAgbGV0IG9wdGlvbnNCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG4gICAgb3B0aW9uc0Jhci5yZW1vdmVDaGlsZChvcHRpb25zQmFyLmZpcnN0Q2hpbGQpO1xuICAgIG9wdGlvbnNCYXIucHJlcGVuZChzZXR0aW5nc09wdGlvbik7XG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKHNldHRpbmdzQmFyRWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZXR0aW5nc09wZW5PcHRpb24oKSB7XG4gIGxldCBzZXR0aW5nc09wZW5PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXR0aW5nc09wZW5PcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1zZXR0aW5ncy1vcGVuXCIpO1xuICBsZXQgc2V0dGluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBzZXR0aW5nc0ltYWdlLmFsdCA9IFwiU2V0dGluZ3MgaWNvblwiO1xuICBzZXR0aW5nc0ltYWdlLnNyYyA9IFNldHRpbmdzT3Blbkljb247XG4gIHNldHRpbmdzT3Blbk9wdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0ltYWdlKTtcblxuICBzZXR0aW5nc09wZW5PcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGljaykgPT4ge1xuICAgIGNsaWNrLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGxldCBzZXR0aW5nc09wdGlvbiA9IG1ha2VTZXR0aW5nc09wdGlvbigpO1xuICAgIGxldCBvcHRpb25zQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuICAgIG9wdGlvbnNCYXIucmVtb3ZlQ2hpbGQob3B0aW9uc0Jhci5maXJzdENoaWxkKTtcbiAgICBvcHRpb25zQmFyLnByZXBlbmQoc2V0dGluZ3NPcHRpb24pO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuICAgIGxldCBzZXR0aW5nc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ3MtYmFyXCIpO1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChzZXR0aW5nc0Jhcik7XG4gIH0pO1xuXG4gIHJldHVybiBzZXR0aW5nc09wZW5PcHRpb247XG59XG4iLCJpbXBvcnQgRmF2c0ljb24gZnJvbSBcIi4vZmF2cy5zdmdcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNGYXZMaXN0IH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCB7IGdldE9wdGlvbnNVbmZhdm9yaXRlIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNob3dGYXZzT3B0aW9uKCkge1xuICBsZXQgZmF2c09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZhdnNPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi1mYXZzXCIpO1xuICBsZXQgZmF2c0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZhdnNJbWFnZS5hbHQgPSBcIlNob3cgZmF2b3JpdGVzIGljb25cIjtcbiAgZmF2c0ltYWdlLnNyYyA9IEZhdnNJY29uO1xuICBmYXZzT3B0aW9uLmFwcGVuZENoaWxkKGZhdnNJbWFnZSk7XG5cbiAgZmF2c09wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKTtcbiAgICBjbGVhbihyZXN1bHQpO1xuICAgIG1ha2VGYXZMaXN0KCk7XG4gIH0pO1xuXG4gIHJldHVybiBmYXZzT3B0aW9uO1xufVxuIiwiaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB0ZW1wZXJhdHVyZUljb24gZnJvbSBcIi4vdGhlcm1vbWV0ZXItb3V0bGluZS5zdmdcIjtcbmltcG9ydCB7IG1ha2VGYXZMaXN0IH0gZnJvbSBcIi4vbWFrZUZhdkxpc3RcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUZW1wZXJhdHVyZU9wdGlvbigpIHtcbiAgbGV0IHRlbXBlcmF0dXJlT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZW1wSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0ZW1wSWNvbi5hbHQgPSBcIlRlbXBlcmF0dXJlIGljb25cIjtcbiAgdGVtcEljb24uc3JjID0gdGVtcGVyYXR1cmVJY29uO1xuXG4gIGxldCBtZXRyaWMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWV0cmljXCIpKTtcblxuICBsZXQgY2Vsc2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKFwiY2Vsc2l1cy1sYWJlbFwiKTtcbiAgY2Vsc2l1cy5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjZWxzaXVzXCIpO1xuICBsZXQgZmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwiZmFocmVuaGVpdC1sYWJlbFwiKTtcbiAgZmFocmVuaGVpdC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJmYWhyZW5oZWl0XCIpO1xuICBjZWxzaXVzLmlubmVyVGV4dCA9IFwiwrBDXCI7XG4gIGZhaHJlbmhlaXQuaW5uZXJUZXh0ID0gXCLCsEZcIjtcblxuICBpZiAobWV0cmljKSB7XG4gICAgY2Vsc2l1cy5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtbWV0cmljXCIpO1xuICB9IGVsc2Uge1xuICAgIGNlbHNpdXMuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLW1ldHJpY1wiKTtcbiAgfVxuICBjZWxzaXVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRyaWNcIiwgXCJ0cnVlXCIpO1xuICAgIGxldCBkaXNwbGF5aW5nQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICBpZiAoZGlzcGxheWluZ0NpdHkpIHtcbiAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFuKFwiLnJlc3VsdFwiKTtcbiAgICAgIG1ha2VGYXZMaXN0KCk7XG4gICAgfVxuICB9KTtcbiAgY2Vsc2l1cy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1ldHJpY1wiKTtcblxuICBpZiAoIW1ldHJpYykge1xuICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLW1ldHJpY1wiKTtcbiAgfVxuICBmYWhyZW5oZWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtZXRyaWNcIiwgXCJmYWxzZVwiKTtcbiAgICBsZXQgZGlzcGxheWluZ0NpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgaWYgKGRpc3BsYXlpbmdDaXR5KSB7XG4gICAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhbihcIi5yZXN1bHRcIik7XG4gICAgICBtYWtlRmF2TGlzdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IGRpdkNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZGl2RmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdkNlbHNpdXMuYXBwZW5kQ2hpbGQoY2Vsc2l1cyk7XG4gIGRpdkZhaHJlbmhlaXQuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdCk7XG5cbiAgbGV0IHRlbXBJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZW1wSW5wdXRzLmFwcGVuZENoaWxkKGRpdkNlbHNpdXMpO1xuICB0ZW1wSW5wdXRzLmFwcGVuZENoaWxkKGRpdkZhaHJlbmhlaXQpO1xuXG4gIHRlbXBlcmF0dXJlT3B0aW9ucy5hcHBlbmRDaGlsZCh0ZW1wSWNvbik7XG4gIHRlbXBlcmF0dXJlT3B0aW9ucy5hcHBlbmRDaGlsZCh0ZW1wSW5wdXRzKTtcblxuICB0ZW1wZXJhdHVyZU9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm9wdGlvbi10ZW1wZXJhdHVyZVwiKTtcblxuICByZXR1cm4gdGVtcGVyYXR1cmVPcHRpb25zO1xufVxuIiwiaW1wb3J0IFVuZmF2b3JpdGVJY29uIGZyb20gXCIuL3VuZmF2LnN2Z1wiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVW5mYXZvcml0ZU9wdGlvbigpIHtcbiAgbGV0IHVuZmF2b3JpdGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1bmZhdm9yaXRlT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tdW5mYXZvcml0ZVwiKTtcbiAgbGV0IHVuZmF2b3JpdGVJY29uID0gbmV3IEltYWdlKCk7XG4gIHVuZmF2b3JpdGVJY29uLmFsdCA9IFwiUmVtb3ZlIGZyb20gZmF2b3JpdGVzIGljb25cIjtcbiAgdW5mYXZvcml0ZUljb24uc3JjID0gVW5mYXZvcml0ZUljb247XG5cbiAgdW5mYXZvcml0ZU9wdGlvbi5hcHBlbmRDaGlsZCh1bmZhdm9yaXRlSWNvbik7XG5cbiAgdW5mYXZvcml0ZU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBsZXQgY2l0aWVzRmlsdGVyZWQgPSBjaXRpZXMuZmlsdGVyKChjKSA9PiBjICE9PSBjaXR5LmlubmVyVGV4dCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgYCR7SlNPTi5zdHJpbmdpZnkoY2l0aWVzRmlsdGVyZWQpfWApO1xuICAgIGZhdm9yaXRlc0Jhci5yZWZyZXNoRmF2b3JpdGVzQmFyKCk7XG4gICAgZ2V0T3B0aW9ucyh0cnVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHVuZmF2b3JpdGVPcHRpb247XG59XG4iLCJpbXBvcnQgeyBtYWtlVGVtcGVyYXR1cmVPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25UZW1wZXJhdHVyZVwiO1xuaW1wb3J0IHsgbWFrZVJlbG9hZE9wdGlvbiB9IGZyb20gXCIuL29wdGlvblJlbG9hZFwiO1xuaW1wb3J0IHsgbWFrZUZhdm9yaXRlT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uRmF2b3JpdGVcIjtcbmltcG9ydCB7IG1ha2VVbmZhdm9yaXRlT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uVW5mYXZvcml0ZVwiO1xuaW1wb3J0IHsgbWFrZVNob3dGYXZzT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uU2hvd0ZhdnNcIjtcbmltcG9ydCB7IG1ha2VTZXR0aW5nc09wdGlvbiB9IGZyb20gXCIuL29wdGlvblNldHRpbmdzXCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5cbmNvbnN0IG9wdGlvbnNEaXYgPSB7XG4gIG9wdGlvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3B0aW9uc1wiKSxcbiAgZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCkge1xuICAgIGxldCB0ZW1wZXJhdHVyZU9wdGlvbnMgPSBtYWtlVGVtcGVyYXR1cmVPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVPcHRpb25zKTtcbiAgfSxcbiAgZ2V0UmVsb2FkT3B0aW9ucygpIHtcbiAgICBsZXQgcmVsb2FkT3B0aW9uID0gbWFrZVJlbG9hZE9wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChyZWxvYWRPcHRpb24pO1xuICB9LFxuICBnZXRGYXZvcml0ZU9wdGlvbigpIHtcbiAgICBsZXQgZmF2b3JpdGVPcHRpb24gPSBtYWtlRmF2b3JpdGVPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQoZmF2b3JpdGVPcHRpb24pO1xuICB9LFxuICBnZXRVbkZhdm9yaXRlT3B0aW9uKCkge1xuICAgIGxldCB1bmZhdm9yaXRlT3B0aW9uID0gbWFrZVVuZmF2b3JpdGVPcHRpb24oKTtcbiAgICB0aGlzLm9wdGlvbnMuYXBwZW5kQ2hpbGQodW5mYXZvcml0ZU9wdGlvbik7XG4gIH0sXG4gIGdldFNob3dGYXZzT3B0aW9uKCkge1xuICAgIGxldCBzaG93RmF2c09wdGlvbiA9IG1ha2VTaG93RmF2c09wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChzaG93RmF2c09wdGlvbik7XG4gIH0sXG4gIGdldFNldHRpbmdzT3B0aW9uKCkge1xuICAgIGxldCBzZXR0aW5nc09wdGlvbiA9IG1ha2VTZXR0aW5nc09wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChzZXR0aW5nc09wdGlvbik7XG4gIH0sXG59O1xuXG5mdW5jdGlvbiBnZXRPcHRpb25zKGFsbCkge1xuICBjbGVhbihvcHRpb25zRGl2Lm9wdGlvbnMpO1xuICBpZiAoYWxsKSB7XG4gICAgbGV0IGNpdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGlmIChjaXRpZXMubGVuZ3RoID4gMCkge1xuICAgICAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG4gICAgICBvcHRpb25zRGl2LmdldFNldHRpbmdzT3B0aW9uKCk7XG4gICAgICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRSZWxvYWRPcHRpb25zKCk7XG4gICAgICBvcHRpb25zRGl2LmdldEZhdm9yaXRlT3B0aW9uKCk7XG4gICAgICBvcHRpb25zRGl2LmdldFNob3dGYXZzT3B0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNEaXYub3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFwib3B0aW9ucy1jb21wYWN0XCIpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRTZXR0aW5nc09wdGlvbigpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgICAgIG9wdGlvbnNEaXYuZ2V0UmVsb2FkT3B0aW9ucygpO1xuICAgICAgb3B0aW9uc0Rpdi5nZXRGYXZvcml0ZU9wdGlvbigpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRGl2Lm9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcIm9wdGlvbnMtY29tcGFjdFwiKTtcbiAgICBvcHRpb25zRGl2LmdldFNldHRpbmdzT3B0aW9uKCk7XG4gICAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zVW5mYXZvcml0ZSgpIHtcbiAgY2xlYW4ob3B0aW9uc0Rpdi5vcHRpb25zKTtcbiAgb3B0aW9uc0Rpdi5vcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoXCJvcHRpb25zLWNvbXBhY3RcIik7XG4gIG9wdGlvbnNEaXYuZ2V0U2V0dGluZ3NPcHRpb24oKTtcbiAgb3B0aW9uc0Rpdi5nZXRUZW1wZXJhdHVyZU9wdGlvbnMoKTtcbiAgb3B0aW9uc0Rpdi5nZXRSZWxvYWRPcHRpb25zKCk7XG4gIG9wdGlvbnNEaXYuZ2V0VW5GYXZvcml0ZU9wdGlvbigpO1xuICBvcHRpb25zRGl2LmdldFNob3dGYXZzT3B0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNGYXZMaXN0KCkge1xuICBjbGVhbihvcHRpb25zRGl2Lm9wdGlvbnMpO1xuICBvcHRpb25zRGl2LmdldFNldHRpbmdzT3B0aW9uKCk7XG4gIG9wdGlvbnNEaXYuZ2V0VGVtcGVyYXR1cmVPcHRpb25zKCk7XG4gIG9wdGlvbnNEaXYuZ2V0UmVsb2FkT3B0aW9ucygpO1xuICBvcHRpb25zRGl2Lm9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZShcIm9wdGlvbnMtY29tcGFjdFwiKTtcbn1cblxuZXhwb3J0IHsgZ2V0T3B0aW9ucywgZ2V0T3B0aW9uc1VuZmF2b3JpdGUsIGdldE9wdGlvbnNGYXZMaXN0IH07XG4iLCJpbXBvcnQgQXV0b1JlZnJlc2hJY29uIGZyb20gXCIuL3JlbG9hZC1hdXRvLnN2Z1wiO1xuaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB7IGhhbmRsZU91dE9mU2V0dGluZ3NDbGljayB9IGZyb20gXCIuL29wdGlvblNldHRpbmdzXCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQXV0b1JlZnJlc2hTZXR0aW5nKCkge1xuICBsZXQgYXV0b1JlZlNldHRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCBhdXRvUmVmSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBhdXRvUmVmSWNvbi5hbHQgPSBcIkF1dG8tcmVmcmVzaCBpY29uXCI7XG4gIGF1dG9SZWZJY29uLnNyYyA9IEF1dG9SZWZyZXNoSWNvbjtcblxuICBsZXQgYXV0b1JlZkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGF1dG9SZWZMYWJlbC5pbm5lclRleHQgPSBcIkF1dG8tcmVmcmVzaDogXCI7XG5cbiAgbGV0IGF1dG9SZWZTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBhdXRvUmVmU2VsZWN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtcmVmcmVzaFwiKTtcbiAgYXV0b1JlZlNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChjaGFuZ2UpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZnJlc2hcIiwgSlNPTi5zdHJpbmdpZnkoY2hhbmdlLnRhcmdldC52YWx1ZSkpO1xuICAgIGF1dG9SZWZyZXNoU2V0dXAuaGFuZGxlQXV0b1JlZnJlc2goY2hhbmdlLnRhcmdldC52YWx1ZSk7XG4gICAgbGV0IHJlZnJlc2hTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LXJlZnJlc2hcIik7XG4gICAgbGV0IG9wdGlvbnMgPSByZWZyZXNoU2VsZWN0b3IuY2hpbGROb2RlcztcbiAgICBvcHRpb25zLmZvckVhY2goKG8pID0+IHtcbiAgICAgIGlmIChvLmdldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIpKSB7XG4gICAgICAgIG8ucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoby5pbm5lclRleHQgPT0gY2hhbmdlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICBvLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBsZXQgbm9kZXMgPSBbXTtcblxuICBsZXQgbmV2ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBuZXZlci5pbm5lclRleHQgPSBcIk5ldmVyXCI7XG4gIG5ldmVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTmV2ZXJcIik7XG4gIG5vZGVzLnB1c2gobmV2ZXIpO1xuICBsZXQgb25lTWludXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb25lTWludXRlLmlubmVyVGV4dCA9IFwiRXZlcnkgbWludXRlXCI7XG4gIG9uZU1pbnV0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IG1pbnV0ZVwiKTtcbiAgbm9kZXMucHVzaChvbmVNaW51dGUpO1xuICBsZXQgZml2ZU1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBmaXZlTWludXRlcy5pbm5lclRleHQgPSBcIkV2ZXJ5IDUgbWludXRlc1wiO1xuICBmaXZlTWludXRlcy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IDUgbWludXRlc1wiKTtcbiAgbm9kZXMucHVzaChmaXZlTWludXRlcyk7XG4gIGxldCB0ZW5NaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgdGVuTWludXRlcy5pbm5lclRleHQgPSBcIkV2ZXJ5IDEwIG1pbnV0ZXNcIjtcbiAgdGVuTWludXRlcy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IDEwIG1pbnV0ZXNcIik7XG4gIG5vZGVzLnB1c2godGVuTWludXRlcyk7XG4gIGxldCB0aGlydHlNaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgdGhpcnR5TWludXRlcy5pbm5lclRleHQgPSBcIkV2ZXJ5IDMwIG1pbnV0ZXNcIjtcbiAgdGhpcnR5TWludXRlcy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IDMwIG1pbnV0ZXNcIik7XG4gIG5vZGVzLnB1c2godGhpcnR5TWludXRlcyk7XG4gIGxldCBvbmVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb25lSG91ci5pbm5lclRleHQgPSBcIkV2ZXJ5IGhvdXJcIjtcbiAgb25lSG91ci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IGhvdXJcIik7XG4gIG5vZGVzLnB1c2gob25lSG91cik7XG4gIGxldCB0d29Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHR3b0hvdXJzLmlubmVyVGV4dCA9IFwiRXZlcnkgMiBob3Vyc1wiO1xuICB0d29Ib3Vycy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkV2ZXJ5IDIgaG91cnNcIik7XG4gIG5vZGVzLnB1c2godHdvSG91cnMpO1xuICBsZXQgdHdlbHZlSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICB0d2VsdmVIb3Vycy5pbm5lclRleHQgPSBcIkV2ZXJ5IDEyIGhvdXJzXCI7XG4gIHR3ZWx2ZUhvdXJzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRXZlcnkgMTIgaG91cnNcIik7XG4gIG5vZGVzLnB1c2godHdlbHZlSG91cnMpO1xuICBsZXQgb25lRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb25lRGF5LmlubmVyVGV4dCA9IFwiRXZlcnkgMjQgaG91cnNcIjtcbiAgb25lRGF5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiRXZlcnkgMjQgaG91cnNcIik7XG4gIG5vZGVzLnB1c2gob25lRGF5KTtcblxuICBub2Rlcy5mb3JFYWNoKChuKSA9PiB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KG4udmFsdWUpID09IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmcmVzaFwiKSkge1xuICAgICAgbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQobmV2ZXIpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKG9uZU1pbnV0ZSk7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQoZml2ZU1pbnV0ZXMpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKHRlbk1pbnV0ZXMpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKHRoaXJ0eU1pbnV0ZXMpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKG9uZUhvdXIpO1xuICBhdXRvUmVmU2VsZWN0LmFwcGVuZENoaWxkKHR3b0hvdXJzKTtcbiAgYXV0b1JlZlNlbGVjdC5hcHBlbmRDaGlsZCh0d2VsdmVIb3Vycyk7XG4gIGF1dG9SZWZTZWxlY3QuYXBwZW5kQ2hpbGQob25lRGF5KTtcblxuICBhdXRvUmVmU2V0dGluZy5hcHBlbmRDaGlsZChhdXRvUmVmSWNvbik7XG4gIGF1dG9SZWZTZXR0aW5nLmFwcGVuZENoaWxkKGF1dG9SZWZMYWJlbCk7XG4gIGF1dG9SZWZTZXR0aW5nLmFwcGVuZENoaWxkKGF1dG9SZWZTZWxlY3QpO1xuXG4gIHJldHVybiBhdXRvUmVmU2V0dGluZztcbn1cblxuY29uc3QgYXV0b1JlZnJlc2hTZXR1cCA9IHtcbiAgdGltZW91dElEOiBudWxsLFxuICBhdXRvOiBmYWxzZSxcbiAgZGVsYXk6IDYwMDAwLFxuICBoYW5kbGVBdXRvUmVmcmVzaChhdXRvUmVmcmVzaE1vZGUpIHtcbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgbWludXRlXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMDtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IDUgbWludXRlc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiA1O1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgMTAgbWludXRlc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiAxMDtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSA9PSBcIkV2ZXJ5IDMwIG1pbnV0ZXNcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogMzA7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSBob3VyXCIpIHtcbiAgICAgIHRoaXMuZGVsYXkgPSA2MDAwMCAqIDYwO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgMiBob3Vyc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiA2MCAqIDI7XG4gICAgfVxuICAgIGlmIChhdXRvUmVmcmVzaE1vZGUgPT0gXCJFdmVyeSAxMiBob3Vyc1wiKSB7XG4gICAgICB0aGlzLmRlbGF5ID0gNjAwMDAgKiA2MCAqIDEyO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiRXZlcnkgMjQgaG91cnNcIikge1xuICAgICAgdGhpcy5kZWxheSA9IDYwMDAwICogNjAgKiAyNDtcbiAgICB9XG4gICAgaWYgKGF1dG9SZWZyZXNoTW9kZSAhPT0gXCJOZXZlclwiKSB7XG4gICAgICB0aGlzLnRpbWVvdXRJRCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgc2VhcmNoYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXIgPiBpbnB1dFwiKTtcbiAgICAgICAgc2VhcmNoYmFyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgIH1cbiAgICBpZiAoYXV0b1JlZnJlc2hNb2RlID09IFwiTmV2ZXJcIikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElEKTtcbiAgICAgIHRoaXMudGltZW91dElEID0gbnVsbDtcbiAgICB9XG4gICAgYXV0b1JlZnJlc2goKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGF1dG9SZWZyZXNoKCkge1xuICBpZiAoYXV0b1JlZnJlc2hTZXR1cC50aW1lb3V0SUQpIHtcbiAgICBjbGVhclRpbWVvdXQoYXV0b1JlZnJlc2hTZXR1cC50aW1lb3V0SUQpO1xuICAgIGF1dG9SZWZyZXNoU2V0dXAudGltZW91dElEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikpICE9PSBcIk5ldmVyXCIpIHtcbiAgICAgICAgbGV0IHNlYXJjaGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyID4gaW5wdXRcIik7XG4gICAgICAgIHNlYXJjaGJhci52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGxldCBjaXR5O1xuICAgICAgICBsZXQgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpLmlubmVyVGV4dDtcbiAgICAgICAgICBjbGVhbihcIi5yZXN1bHRcIik7XG4gICAgICAgICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xlYW4oXCIucmVzdWx0XCIpO1xuICAgICAgICAgIGhhbmRsZVVzZXJJbnB1dC5oYW5kbGVTZWFyY2hJY29uKCk7XG4gICAgICAgIH1cbiAgICAgICAgYXV0b1JlZnJlc2goKTtcbiAgICAgIH1cbiAgICB9LCBhdXRvUmVmcmVzaFNldHVwLmRlbGF5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRvUmVmcmVzaFNldHVwO1xuIiwiaW1wb3J0IFNvcnRJY29uIGZyb20gXCIuL3NvcnQuc3ZnXCI7XG5pbXBvcnQgeyBoYW5kbGVTb3J0QWN0aW9uIH0gZnJvbSBcIi4vb3B0aW9uRmF2b3JpdGVcIjtcbmltcG9ydCB7IG1ha2VGYXZMaXN0IH0gZnJvbSBcIi4vbWFrZUZhdkxpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTb3J0U2V0dGluZygpIHtcbiAgbGV0IHNvcnRTZXR0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBsZXQgc29ydEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc29ydEljb24uYWx0ID0gXCJTb3J0IHNldHRpbmcgaWNvblwiO1xuICBzb3J0SWNvbi5zcmMgPSBTb3J0SWNvbjtcblxuICBsZXQgc29ydExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNvcnRMYWJlbC5pbm5lclRleHQgPSBcIlNvcnQgRmF2b3JpdGVzOiBcIjtcblxuICBsZXQgc29ydFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNvcnRTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoY2hhbmdlKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3J0XCIsIEpTT04uc3RyaW5naWZ5KGNoYW5nZS50YXJnZXQudmFsdWUpKTtcbiAgICBoYW5kbGVTb3J0QWN0aW9uKCk7XG4gIH0pO1xuXG4gIGxldCBub2RlcyA9IFtdO1xuXG4gIGxldCBuYW1lR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7XG4gIG5hbWVHcm91cC5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLCBcIkFscGhhYmV0aWNhbCBPcmRlclwiKTtcbiAgbGV0IGFzY2VuZGluZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBhc2NlbmRpbmdOYW1lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiYXNjZW5kaW5nTmFtZVwiKTtcbiAgYXNjZW5kaW5nTmFtZS5pbm5lclRleHQgPSBcIkEgdG8gWlwiO1xuICBhc2NlbmRpbmdOYW1lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiYXRvelwiKTtcbiAgbm9kZXMucHVzaChhc2NlbmRpbmdOYW1lKTtcbiAgbGV0IGRlc2NlbmRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZGVzY2VuZGluZ05hbWUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJkZXNjZW5kaW5nTmFtZVwiKTtcbiAgZGVzY2VuZGluZ05hbWUuaW5uZXJUZXh0ID0gXCJaIHRvIEFcIjtcbiAgZGVzY2VuZGluZ05hbWUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJ6dG9hXCIpO1xuICBub2Rlcy5wdXNoKGRlc2NlbmRpbmdOYW1lKTtcbiAgbmFtZUdyb3VwLmFwcGVuZENoaWxkKGFzY2VuZGluZ05hbWUpO1xuICBuYW1lR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY2VuZGluZ05hbWUpO1xuXG4gIGxldCB0ZW1wR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0Z3JvdXBcIik7XG4gIHRlbXBHcm91cC5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLCBcIkFjdHVhbCBUZW1wZXJhdHVyZVwiKTtcbiAgbGV0IGFzY2VuZGluZ1RlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBhc2NlbmRpbmdUZW1wLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiYXNjZW5kaW5nTmFtZVwiKTtcbiAgYXNjZW5kaW5nVGVtcC5pbm5lclRleHQgPSBcIkNvbGRlc3QgdG8gSG90dGVzdFwiO1xuICBhc2NlbmRpbmdUZW1wLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwidGVtcGN0b2hcIik7XG4gIG5vZGVzLnB1c2goYXNjZW5kaW5nVGVtcCk7XG4gIGxldCBkZXNjZW5kaW5nVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGRlc2NlbmRpbmdUZW1wLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZGVzY2VuZGluZ1RlbXBcIik7XG4gIGRlc2NlbmRpbmdUZW1wLmlubmVyVGV4dCA9IFwiSG90dGVzdCB0byBDb2xkZXN0XCI7XG4gIGRlc2NlbmRpbmdUZW1wLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwidGVtcGh0b2NcIik7XG4gIG5vZGVzLnB1c2goZGVzY2VuZGluZ1RlbXApO1xuICB0ZW1wR3JvdXAuYXBwZW5kQ2hpbGQoYXNjZW5kaW5nVGVtcCk7XG4gIHRlbXBHcm91cC5hcHBlbmRDaGlsZChkZXNjZW5kaW5nVGVtcCk7XG5cbiAgbGV0IHRlbXBGZWVsc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICB0ZW1wRmVlbHNHcm91cC5zZXRBdHRyaWJ1dGUoXCJsYWJlbFwiLCBcIkFwcGFyZW50IFRlbXBlcmF0dXJlXCIpO1xuICBsZXQgYXNjZW5kaW5nVGVtcEZlZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgYXNjZW5kaW5nVGVtcEZlZWxzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiYXNjZW5kaW5nVGVtcEZlZWxzXCIpO1xuICBhc2NlbmRpbmdUZW1wRmVlbHMuaW5uZXJUZXh0ID0gXCJDb2xkZXN0IHRvIEhvdHRlc3RcIjtcbiAgYXNjZW5kaW5nVGVtcEZlZWxzLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiZmVlbHNjdG9oXCIpO1xuICBub2Rlcy5wdXNoKGFzY2VuZGluZ1RlbXBGZWVscyk7XG4gIGxldCBkZXNjZW5kaW5nVGVtcEZlZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgZGVzY2VuZGluZ1RlbXBGZWVscy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImRlc2NlbmRpbmdUZW1wRmVlbHNcIik7XG4gIGRlc2NlbmRpbmdUZW1wRmVlbHMuaW5uZXJUZXh0ID0gXCJIb3R0ZXN0IHRvIENvbGRlc3RcIjtcbiAgZGVzY2VuZGluZ1RlbXBGZWVscy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImZlZWxzaHRvY1wiKTtcbiAgbm9kZXMucHVzaChkZXNjZW5kaW5nVGVtcEZlZWxzKTtcbiAgdGVtcEZlZWxzR3JvdXAuYXBwZW5kQ2hpbGQoYXNjZW5kaW5nVGVtcEZlZWxzKTtcbiAgdGVtcEZlZWxzR3JvdXAuYXBwZW5kQ2hpbGQoZGVzY2VuZGluZ1RlbXBGZWVscyk7XG5cbiAgbm9kZXMuZm9yRWFjaCgobikgPT4ge1xuICAgIGlmIChKU09OLnN0cmluZ2lmeShuLnZhbHVlKSA9PSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvcnRcIikpIHtcbiAgICAgIG4uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICBzb3J0U2VsZWN0LmFwcGVuZENoaWxkKG5hbWVHcm91cCk7XG4gIHNvcnRTZWxlY3QuYXBwZW5kQ2hpbGQodGVtcEZlZWxzR3JvdXApO1xuICBzb3J0U2VsZWN0LmFwcGVuZENoaWxkKHRlbXBHcm91cCk7XG5cbiAgc29ydFNldHRpbmcuYXBwZW5kQ2hpbGQoc29ydEljb24pO1xuICBzb3J0U2V0dGluZy5hcHBlbmRDaGlsZChzb3J0TGFiZWwpO1xuICBzb3J0U2V0dGluZy5hcHBlbmRDaGlsZChzb3J0U2VsZWN0KTtcblxuICByZXR1cm4gc29ydFNldHRpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QXRvWihjaXRpZXMpIHtcbiAgbGV0IHNvcnRlZENpdGllcyA9IGNpdGllcy5zb3J0KCk7XG4gIHJldHVybiBzb3J0ZWRDaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0WnRvQShjaXRpZXMpIHtcbiAgbGV0IHNvcnRlZENpdGllcyA9IGNpdGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzb3J0ZWRDaXRpZXM7XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbWFrZUJhc2ljc0NhcmQgfSBmcm9tIFwiLi9tYWtlQmFzaWNzQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZU92ZXJ2aWV3Q2FyZCB9IGZyb20gXCIuL21ha2VPdmVydmlld0NhcmRcIjtcbmltcG9ydCB7IG1ha2VTdW5DYXJkIH0gZnJvbSBcIi4vbWFrZVN1bkNhcmRcIjtcbmltcG9ydCB7IG1ha2VDbG91ZHNDYXJkIH0gZnJvbSBcIi4vbWFrZUNsb3Vkc0NhcmRcIjtcbmltcG9ydCB7IG1ha2VXaW5kQ2FyZCB9IGZyb20gXCIuL21ha2VXaW5kQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZUdpZkNhcmQgfSBmcm9tIFwiLi9tYWtlR2lmQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZVNub3dDYXJkIH0gZnJvbSBcIi4vbWFrZVNub3dDYXJkXCI7XG5pbXBvcnQgeyBtYWtlUmFpbkNhcmQgfSBmcm9tIFwiLi9tYWtlUmFpbkNhcmRcIjtcbmltcG9ydCB7IG1ha2VVVkluZGV4Q2FyZCB9IGZyb20gXCIuL21ha2VVVkluZGV4Q2FyZFwiO1xuaW1wb3J0IHsgbWFrZU1vb25QaGFzZUNhcmQgfSBmcm9tIFwiLi9tYWtlTW9vblBoYXNlQ2FyZFwiO1xuXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKTtcblxuZnVuY3Rpb24gc2hvd09uQ2FyZChcbiAgdW5pdHMsXG4gIGNpdHksXG4gIGNvdW50cnksXG4gIHRpbWUsXG4gIGRhdGUsXG4gIHRlbXAsXG4gIHRlbXBGZWVscyxcbiAgd2VhdGhlclxuKSB7XG4gIGxldCB0ZW1wVW5pdCA9IFwiXCI7XG4gIHVuaXRzID09IFwibWV0cmljXCIgPyAodGVtcFVuaXQgPSBcIsKwQ1wiKSA6ICh0ZW1wVW5pdCA9IFwiwrBGXCIpO1xuXG4gIGxldCBiYXNpY3NDYXJkID0gbWFrZUJhc2ljc0NhcmQoXG4gICAgY2l0eSxcbiAgICBjb3VudHJ5LFxuICAgIHRpbWUsXG4gICAgZGF0ZSxcbiAgICB0ZW1wLFxuICAgIHRlbXBGZWVscyxcbiAgICB0ZW1wVW5pdCxcbiAgICB0cnVlXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaXR5TmFtZTogY2l0eSxcbiAgICBjYXJkOiBiYXNpY3NDYXJkLFxuICAgIHRlbXBBY3R1YWw6IHRlbXAsXG4gICAgZmVlbHM6IHRlbXBGZWVscyxcbiAgICB1bml0OiB0ZW1wVW5pdCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2hvd09uSW5mbyhcbiAgdW5pdHMsXG4gIGNpdHksXG4gIGNvdW50cnksXG4gIHRpbWUsXG4gIGRhdGUsXG4gIHRlbXAsXG4gIHRlbXBGZWVscyxcbiAgd2VhdGhlcixcbiAgcmFpblZvbDFoLFxuICByYWluVm9sM2gsXG4gIHNub3dWb2wxaCxcbiAgc25vd1ZvbDNoLFxuICBzdW5yaXNlLFxuICBzdW5zZXQsXG4gIGNsb3VkaW5lc3MsXG4gIHdpbmQsXG4gIGdpZlNyYyxcbiAgbW9vbnBoYXNlLFxuICB1dmluZGV4LFxuICBkYXlcbikge1xuICBjbGVhbihyZXN1bHQpO1xuICBsZXQgdGVtcFVuaXQgPSBcIlwiO1xuICB1bml0cyA9PSBcIm1ldHJpY1wiID8gKHRlbXBVbml0ID0gXCLCsENcIikgOiAodGVtcFVuaXQgPSBcIsKwRlwiKTtcblxuICBsZXQgYmFzaWNzQ2FyZCA9IG1ha2VCYXNpY3NDYXJkKFxuICAgIGNpdHksXG4gICAgY291bnRyeSxcbiAgICB0aW1lLFxuICAgIGRhdGUsXG4gICAgdGVtcCxcbiAgICB0ZW1wRmVlbHMsXG4gICAgdGVtcFVuaXRcbiAgKTtcbiAgbGV0IG92ZXJ2aWV3Q2FyZCA9IG1ha2VPdmVydmlld0NhcmQod2VhdGhlcik7XG4gIGxldCBzdW5DYXJkID0gbWFrZVN1bkNhcmQoc3VucmlzZSwgc3Vuc2V0KTtcbiAgbGV0IGNsb3Vkc0NhcmQgPSBtYWtlQ2xvdWRzQ2FyZChjbG91ZGluZXNzKTtcbiAgbGV0IHdpbmRDYXJkID0gbWFrZVdpbmRDYXJkKHdpbmQpO1xuICBsZXQgZ2lmQ2FyZCA9IG1ha2VHaWZDYXJkKGdpZlNyYyk7XG4gIGxldCBzbm93Q2FyZCA9IG1ha2VTbm93Q2FyZChzbm93Vm9sMWgsIHNub3dWb2wzaCk7XG4gIGxldCByYWluQ2FyZCA9IG1ha2VSYWluQ2FyZChyYWluVm9sMWgsIHJhaW5Wb2wzaCk7XG5cbiAgbGV0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmRzLWNvbnRhaW5lclwiKTtcblxuICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgaW5mby5hcHBlbmRDaGlsZChiYXNpY3NDYXJkKTtcbiAgaW5mby5hcHBlbmRDaGlsZChvdmVydmlld0NhcmQpO1xuICBpbmZvLmFwcGVuZENoaWxkKGdpZkNhcmQpO1xuICBpZiAoc25vd1ZvbDFoIHx8IHNub3dWb2wzaCkge1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoc25vd0NhcmQpO1xuICB9XG4gIGlmIChyYWluVm9sMWggfHwgcmFpblZvbDNoKSB7XG4gICAgaW5mby5hcHBlbmRDaGlsZChyYWluQ2FyZCk7XG4gIH1cbiAgaW5mby5hcHBlbmRDaGlsZChjbG91ZHNDYXJkKTtcbiAgaW5mby5hcHBlbmRDaGlsZCh3aW5kQ2FyZCk7XG4gIGlmICghZGF5KSB7XG4gICAgbGV0IG1vb25QaGFzZUNhcmQgPSBtYWtlTW9vblBoYXNlQ2FyZChtb29ucGhhc2UpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQobW9vblBoYXNlQ2FyZCk7XG4gIH1cbiAgaWYgKGRheSkge1xuICAgIGxldCB1dkNhcmQgPSBtYWtlVVZJbmRleENhcmQodXZpbmRleCk7XG4gICAgaW5mby5hcHBlbmRDaGlsZCh1dkNhcmQpO1xuICB9XG4gIGluZm8uYXBwZW5kQ2hpbGQoc3VuQ2FyZCk7XG5cbiAgcmVzdWx0LmFwcGVuZENoaWxkKGluZm8pO1xufVxuXG5mdW5jdGlvbiBjbGVhbihwYXJlbnQpIHtcbiAgaWYgKHR5cGVvZiBwYXJlbnQgPT0gXCJzdHJpbmdcIikge1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICB3aGlsZSAocGFyZW50RWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50RWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBzaG93T25JbmZvLCBzaG93T25DYXJkLCBjbGVhbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBtYWtlU2VhcmNoQmFyIH0gZnJvbSBcIi4vbWFrZVNlYXJjaEJhclwiO1xuaW1wb3J0IHsgbWFrZUZhdkxpc3QgfSBmcm9tIFwiLi9tYWtlRmF2TGlzdFwiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcbmltcG9ydCBhdXRvUmVmcmVzaFNldHVwIGZyb20gXCIuL3NldHRpbmdBdXRvUmVmcmVzaFwiO1xuXG5tYWtlU2VhcmNoQmFyKCk7XG5cbmlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpIHtcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSkubGVuZ3RoID4gMCkge1xuICAgICAgZmF2b3JpdGVzQmFyLm1ha2VGYXZvcml0ZXNCYXIoKTtcbiAgICAgIG1ha2VGYXZMaXN0KCk7XG4gICAgfVxuICAgIGxldCByZWZyZXNoTW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVmcmVzaFwiKTtcbiAgICBpZiAocmVmcmVzaE1vZGUgPT0gXCJOZXZlclwiKSB7XG4gICAgICBhdXRvUmVmcmVzaFNldHVwLmF1dG8gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXV0b1JlZnJlc2hTZXR1cC5oYW5kbGVBdXRvUmVmcmVzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikpO1xuICAgIH1cbiAgfVxufSBlbHNlIHtcbiAgbGV0IGNpdGllc0FycmF5ID0gW107XG4gIGxldCBtZXRyaWMgPSB0cnVlO1xuICBsZXQgY2l0aWVzQXJyYXlKU09OID0gSlNPTi5zdHJpbmdpZnkoY2l0aWVzQXJyYXkpO1xuICBsZXQgcmVmcmVzaCA9IFwiTmV2ZXJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaXRpZXNcIiwgYCR7Y2l0aWVzQXJyYXlKU09OfWApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm1ldHJpY1wiLCBgJHttZXRyaWN9YCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmcmVzaFwiLCBgJHtyZWZyZXNofWApO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNvcnRcIiwgSlNPTi5zdHJpbmdpZnkoXCJhdG96XCIpKTtcbn1cblxuZ2V0T3B0aW9ucyhmYWxzZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
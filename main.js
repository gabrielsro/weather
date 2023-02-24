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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 44vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 60px;\n}\n\n.option-temperature label {\n  font-size: 1.3rem;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload select {\n  height: 50%;\n  margin-left: 5px;\n}\n\n.option-reload img {\n  width: auto;\n  height: 60%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 70%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow: auto;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-right: 7vw;\n  padding-left: 3vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > p:nth-child(2) {\n  font-size: 1.1rem;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.2rem;\n  justify-self: center;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: center;\n  font-size: 1.2rem;\n}\n\n.weather-gif {\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img {\n  height: auto;\n  width: 60px;\n}\n\n.cloudStats p,\n.windStats p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,8BAA8B;EAC9B,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,UAAU;EACV,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;AACb;;AAEA;;EAEE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;;;;;;;;;EASE,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE;IACE,aAAa;IACb,QAAQ;EACV;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,QAAQ;EACR,gCAAgC;EAChC,gCAAgC;EAChC,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,QAAQ;EACR,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,kCAAkC;AACpC;;AAEA;;EAEE,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;;;;EAIE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;;EAEE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\n.navbar,\n.options {\n  border-radius: 5px;\n  background-color: #eee;\n}\n\nbody {\n  padding: 1vw;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: auto;\n}\n\n.navbar {\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: 1fr 6fr;\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.navbar > h1 {\n  align-self: center;\n  margin-left: 1vw;\n}\n\n.searchbar {\n  box-sizing: border-box;\n  display: grid;\n  gap: 0.5vw;\n  grid-template-columns: 1fr 1fr;\n  height: 100%;\n}\n\n.searchbar > input {\n  height: 50%;\n  align-self: center;\n  width: 44vw;\n}\n\n.searchbar > img {\n  height: auto;\n  width: 34px;\n  align-self: center;\n}\n\n.searchbar > img:hover {\n  cursor: pointer;\n}\n\n.options {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  height: 7vh;\n  margin-bottom: 1vh;\n}\n\n.options div {\n  align-self: center;\n  display: flex;\n  height: 6vh;\n}\n\n.option-temperature {\n  width: auto;\n}\n\n.option-temperature > div {\n  display: flex;\n  flex-direction: column;\n}\n\n.option-temperature img {\n  height: auto;\n  max-width: 60px;\n}\n\n.option-temperature label {\n  font-size: 1.3rem;\n}\n\n.option-temperature input {\n  height: 1.1em;\n  width: 1.1em;\n  margin-left: 2vw;\n}\n\n.option-reload {\n  align-items: center;\n  justify-self: center;\n}\n\n.option-reload select {\n  height: 50%;\n  margin-left: 5px;\n}\n\n.option-reload img {\n  width: auto;\n  height: 60%;\n}\n\n.option-favorite,\n.option-unfavorite {\n  align-items: center;\n  justify-self: end;\n}\n\n.option-favorite img,\n.option-unfavorite img {\n  width: auto;\n  height: 70%;\n}\n\n.options > div > div div {\n  align-items: center;\n}\n\n.favorites-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 5vh;\n  overflow: auto;\n}\n\n.favorites-bar p {\n  font-size: 1.8rem;\n  margin-right: 3vw;\n  margin-left: 3vw;\n  font-weight: bold;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n}\n\n.basics,\n.weather-gif,\n.overview,\n.sunStats,\n.cloudStats,\n.windStats,\n.snow-card,\n.rain-card,\n.favorites-bar {\n  border-radius: 5px;\n  margin-bottom: 1vh;\n  background-color: #eee;\n}\n\n@media (min-width: 601px) {\n  .info {\n    display: grid;\n    gap: 1vw;\n  }\n\n  .info div {\n    margin-bottom: 0px;\n  }\n}\n\n.sunStats {\n  grid-column: 1/3;\n  padding-left: 1%;\n}\n\n.basics {\n  grid-column: 1/3;\n  display: grid;\n  gap: 1vw;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto 3fr 1fr;\n  padding: 1vw;\n  padding-right: 7vw;\n  padding-left: 3vw;\n}\n\n.basics > div:first-child {\n  display: flex;\n  grid-column: 1/3;\n  font-weight: bold;\n  font-size: 3rem;\n}\n\n.basics > div:nth-child(2) {\n  grid-column: 1/2;\n  grid-row: 2/4;\n  display: grid;\n  gap: 5vw;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: auto auto;\n}\n\n.basics > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.basics > div:nth-child(2) > div > p:first-child {\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 0.7vh;\n}\n\n.basics > div:nth-child(2) > div > p:nth-child(2) {\n  font-size: 1.1rem;\n}\n\n.basics > div:nth-child(2) > p {\n  grid-column: 1/3;\n  align-self: center;\n  font-size: 0.8rem;\n}\n\n.flag {\n  height: auto;\n  max-width: 100%;\n  align-self: center;\n}\n\n.basics > div:nth-child(3) {\n  grid-column: 2/3;\n  grid-row: 2/4;\n}\n\n.basics-temperature {\n  display: grid;\n  gap: 1vw;\n  grid-template-rows: repeat(auto 3);\n}\n\n.basics-temperature > p:first-child,\n.basics-temperature > p:nth-child(3) {\n  font-weight: bold;\n  font-size: 2.2rem;\n  justify-self: center;\n}\n\n.basics-temperature > p:nth-child(2) {\n  justify-self: center;\n  font-size: 1.2rem;\n}\n\n.weather-gif {\n  height: auto;\n  max-width: 100%;\n}\n\n.overview {\n  display: grid;\n}\n\n.overview > p {\n  font-size: 3rem;\n  align-self: center;\n  justify-self: center;\n}\n\n.snow-card,\n.rain-card {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-bottom: 1vh;\n  padding-top: 1vh;\n  padding-left: 3vw;\n}\n\n.snow-card img,\n.rain-card img {\n  height: auto;\n  width: 60px;\n}\n\n.snow-card > div > p:first-child,\n.rain-card > div > p:first-child {\n  font-size: 1.7rem;\n  margin-bottom: 0.4vh;\n}\n\n.snow-card > div > p:nth-child(2),\n.snow-card > div > p:nth-child(3),\n.rain-card > div > p:nth-child(2),\n.rain-card > div > p:nth-child(3) {\n  font-size: 1.4rem;\n  margin-left: 1vw;\n}\n\n.snow-card > div,\n.rain-card > div {\n  grid-column: 2/3;\n}\n\n.sunStats {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.4rem;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n}\n\n.sunStats img {\n  margin: auto;\n  height: auto;\n  width: 60px;\n  margin-bottom: 1vh;\n}\n\n.sunStats div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.cloudStats,\n.windStats {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-left: 3vw;\n}\n\n.gif > img {\n  border-radius: 5px;\n}\n\n.cloudStats img,\n.windStats img {\n  height: auto;\n  width: 60px;\n}\n\n.cloudStats p,\n.windStats p {\n  align-self: center;\n  font-size: 1.7rem;\n}\n\n.error-card {\n  margin-top: 2vh;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  height: 50vh;\n  padding: 2vw;\n}\n\n.error-card p {\n  font-size: 2rem;\n  margin-bottom: 2vh;\n}\n\n.error-card img {\n  border-radius: 5px;\n}\n"],"sourceRoot":""}]);
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
        (0,_handleUserInput__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city, _handleUserInput__WEBPACK_IMPORTED_MODULE_0__["default"].units);
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
  units: "metric",
  handleSearchIcon() {
    let searchbar = document.querySelector(".searchbar > input");
    const units = document.querySelector(".options > div > div > div > input");
    units.checked ? (this.units = "metric") : (this.units = "imperial");
    if (searchbar.value) {
      getWeather(searchbar.value, handleUserInput.units);
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

    let cities = JSON.parse(localStorage.getItem("cities"));
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
  let favoriteText = document.createElement("p");
  favoriteText.innerText = "Add favorite";
  favoriteOption.appendChild(favoriteImage);
  favoriteOption.appendChild(favoriteText);

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

  let reloadSelect = document.createElement("select");
  reloadSelect.setAttribute("id", "reload-select");
  let optionManual = document.createElement("option");
  optionManual.innerText = "--refresh mode--";
  optionManual.setAttribute("selected", true);
  let optionOneMinute = document.createElement("option");
  optionOneMinute.innerText = "Every minute";
  let optionTenMinutes = document.createElement("option");
  optionTenMinutes.innerText = "Every 10 minutes";
  let option30Minutes = document.createElement("option");
  option30Minutes.innerText = "Every 30 minutes";
  let optionOneHour = document.createElement("option");
  optionOneHour.innerText = "Every hour";
  let optionTwoHours = document.createElement("option");
  optionTwoHours.innerText = "Every 2 hours";
  let optionOneDay = document.createElement("option");
  optionOneDay.innerText = "Every 24 hours";
  reloadSelect.appendChild(optionManual);
  reloadSelect.appendChild(optionOneMinute);
  reloadSelect.appendChild(optionTenMinutes);
  reloadSelect.appendChild(option30Minutes);
  reloadSelect.appendChild(optionOneHour);
  reloadSelect.appendChild(optionTwoHours);
  reloadSelect.appendChild(optionOneDay);

  reloadOption.appendChild(reloadImage);
  reloadOption.appendChild(reloadSelect);

  reloadOption.classList.add("option-reload");

  return reloadOption;
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

  let celsius = document.createElement("label");
  celsius.setAttribute("for", "celsius");
  let fahrenheit = document.createElement("label");
  fahrenheit.setAttribute("for", "fahrenheit");
  celsius.innerText = "°C";
  fahrenheit.innerText = "°F";
  let celsiusRadio = document.createElement("input");
  celsiusRadio.setAttribute("type", "radio");
  celsiusRadio.setAttribute("id", "celsius");
  celsiusRadio.setAttribute("checked", true);
  celsiusRadio.addEventListener("change", () =>
    _handleUserInput__WEBPACK_IMPORTED_MODULE_0__["default"].handleSearchIcon()
  );
  celsius.setAttribute("value", "metric");
  celsiusRadio.setAttribute("name", "temperature");
  let fahrenheitRadio = document.createElement("input");
  fahrenheitRadio.setAttribute("type", "radio");
  fahrenheitRadio.setAttribute("id", "fahrenheit");
  fahrenheitRadio.setAttribute("name", "temperature");
  fahrenheitRadio.addEventListener("change", () =>
    _handleUserInput__WEBPACK_IMPORTED_MODULE_0__["default"].handleSearchIcon()
  );

  let divCelsius = document.createElement("div");
  let divFahrenheit = document.createElement("div");
  divCelsius.appendChild(celsius);
  divCelsius.appendChild(celsiusRadio);
  divFahrenheit.appendChild(fahrenheit);
  divFahrenheit.appendChild(fahrenheitRadio);

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
  let text = document.createElement("p");
  text.innerText = "Remove favorite";

  unfavoriteOption.appendChild(unfavoriteIcon);
  unfavoriteOption.appendChild(text);

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
/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showData */ "./src/showData.js");






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
};

function getOptions(all) {
  (0,_showData__WEBPACK_IMPORTED_MODULE_4__.clean)(optionsDiv.options);
  if (all) {
    optionsDiv.getTemperatureOptions();
    optionsDiv.getReloadOptions();
    optionsDiv.getFavoriteOption();
  } else {
    optionsDiv.getTemperatureOptions();
  }
}

function getOptionsUnfavorite() {
  (0,_showData__WEBPACK_IMPORTED_MODULE_4__.clean)(optionsDiv.options);
  optionsDiv.getTemperatureOptions();
  optionsDiv.getReloadOptions();
  optionsDiv.getUnFavoriteOption();
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

module.exports = __webpack_require__.p + "39a70b7150b50166236f.svg";

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

module.exports = __webpack_require__.p + "2f566f8ce53dd92fccf5.svg";

/***/ }),

/***/ "./src/search-outline.svg":
/*!********************************!*\
  !*** ./src/search-outline.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4be0f579536375deb314.svg";

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

module.exports = __webpack_require__.p + "f7a5b7479e5a19202bc7.svg";

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
(0,_options__WEBPACK_IMPORTED_MODULE_0__.getOptions)(false);

if (localStorage.length > 0) {
  if (JSON.parse(localStorage.getItem("cities")).length > 0) {
    _favoritesBar__WEBPACK_IMPORTED_MODULE_2__["default"].makeFavoritesBar();
  }
} else {
  let citiesArray = [];
  let citiesArrayJSON = JSON.stringify(citiesArray);
  localStorage.setItem("cities", `${citiesArrayJSON}`);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEY3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDUztBQUNOOztBQUUxQyw2REFBYTtBQUNiLG9EQUFVOztBQUVWO0FBQ0E7QUFDQSxJQUFJLHNFQUE2QjtBQUNqQztBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9lcnJvckNhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZmF2b3JpdGVzQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZmxhZ0FQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2dpZkFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2hhbmRsZVVzZXJJbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VCYXNpY3NDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZUNsb3Vkc0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlR2lmQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL21ha2VPdmVydmlld0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlUmFpbkNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlU2VhcmNoQmFyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVNub3dDYXJkLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbWFrZVN1bkNhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9tYWtlV2luZENhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vcHRpb25GYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblJlbG9hZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvblRlbXBlcmF0dXJlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvb3B0aW9uVW5mYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zaG93RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdmJhcixcXG4ub3B0aW9ucyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ubmF2YmFyID4gaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zZWFyY2hiYXIgPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA0NHZ3O1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiAzNHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5vcHRpb25zIGRpdiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2dmg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW1nIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogNjBweDtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLm9wdGlvbi10ZW1wZXJhdHVyZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDEuMWVtO1xcbiAgd2lkdGg6IDEuMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ub3B0aW9uLXJlbG9hZCBzZWxlY3Qge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ub3B0aW9uLXJlbG9hZCBpbWcge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDYwJTtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSxcXG4ub3B0aW9uLXVuZmF2b3JpdGUge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ub3B0aW9uLWZhdm9yaXRlIGltZyxcXG4ub3B0aW9uLXVuZmF2b3JpdGUgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA3MCU7XFxufVxcblxcbi5vcHRpb25zID4gZGl2ID4gZGl2IGRpdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNXZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5mYXZvcml0ZXMtYmFyIHAge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDN2dztcXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5iYXNpY3MsXFxuLndlYXRoZXItZ2lmLFxcbi5vdmVydmlldyxcXG4uc3VuU3RhdHMsXFxuLmNsb3VkU3RhdHMsXFxuLndpbmRTdGF0cyxcXG4uc25vdy1jYXJkLFxcbi5yYWluLWNhcmQsXFxuLmZhdm9yaXRlcy1iYXIge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAuaW5mbyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXZ3O1xcbiAgfVxcblxcbiAgLmluZm8gZGl2IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgfVxcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbi5iYXNpY3Mge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDNmciAxZnI7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBwYWRkaW5nLXJpZ2h0OiA3dnc7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDV2dztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuN3ZoO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgyKSA+IHAge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4uZmxhZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi80O1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDF2dztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8gMyk7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOmZpcnN0LWNoaWxkLFxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYXNpY3MtdGVtcGVyYXR1cmUgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ud2VhdGhlci1naWYge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLm92ZXJ2aWV3ID4gcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctbGVmdDogM3Z3O1xcbn1cXG5cXG4uc25vdy1jYXJkIGltZyxcXG4ucmFpbi1jYXJkIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQsXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjR2aDtcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSxcXG4ucmFpbi1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMiksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDMpIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG59XFxuXFxuLnNub3ctY2FyZCA+IGRpdixcXG4ucmFpbi1jYXJkID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5zdW5TdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgcGFkZGluZy10b3A6IDF2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBpbWcge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxufVxcblxcbi5zdW5TdGF0cyBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvdWRTdGF0cyxcXG4ud2luZFN0YXRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLmdpZiA+IGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIGltZyxcXG4ud2luZFN0YXRzIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLmNsb3VkU3RhdHMgcCxcXG4ud2luZFN0YXRzIHAge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi5lcnJvci1jYXJkIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHBhZGRpbmc6IDJ2dztcXG59XFxuXFxuLmVycm9yLWNhcmQgcCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxufVxcblxcbi5lcnJvci1jYXJkIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFv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QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXZiYXIsXFxuLm9wdGlvbnMge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG59XFxuXFxuLm5hdmJhciA+IGgxIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuNXZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoYmFyID4gaW5wdXQge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNDR2dztcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzRweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnNlYXJjaGJhciA+IGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4ub3B0aW9ucyBkaXYge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNnZoO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3B0aW9uLXRlbXBlcmF0dXJlIGltZyB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDYwcHg7XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5vcHRpb24tdGVtcGVyYXR1cmUgaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjFlbTtcXG4gIHdpZHRoOiAxLjFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbi5vcHRpb24tcmVsb2FkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQgc2VsZWN0IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLm9wdGlvbi1yZWxvYWQgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi5vcHRpb24tZmF2b3JpdGUsXFxuLm9wdGlvbi11bmZhdm9yaXRlIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLm9wdGlvbi1mYXZvcml0ZSBpbWcsXFxuLm9wdGlvbi11bmZhdm9yaXRlIGltZyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogNzAlO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdiA+IGRpdiBkaXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZhdm9yaXRlcy1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uZmF2b3JpdGVzLWJhciBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XFxuICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYmFzaWNzLFxcbi53ZWF0aGVyLWdpZixcXG4ub3ZlcnZpZXcsXFxuLnN1blN0YXRzLFxcbi5jbG91ZFN0YXRzLFxcbi53aW5kU3RhdHMsXFxuLnNub3ctY2FyZCxcXG4ucmFpbi1jYXJkLFxcbi5mYXZvcml0ZXMtYmFyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDF2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xcbiAgLmluZm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDF2dztcXG4gIH1cXG5cXG4gIC5pbmZvIGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIH1cXG59XFxuXFxuLnN1blN0YXRzIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4uYmFzaWNzIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAzZnIgMWZyO1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgcGFkZGluZy1yaWdodDogN3Z3O1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5iYXNpY3MgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAyLzQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1dnc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjd2aDtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmJhc2ljcyA+IGRpdjpudGgtY2hpbGQoMikgPiBwIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmZsYWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzID4gZGl2Om50aC1jaGlsZCgzKSB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvNDtcXG59XFxuXFxuLmJhc2ljcy10ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxdnc7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvIDMpO1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpmaXJzdC1jaGlsZCxcXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFzaWNzLXRlbXBlcmF0dXJlID4gcDpudGgtY2hpbGQoMikge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLndlYXRoZXItZ2lmIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLm92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5vdmVydmlldyA+IHAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zbm93LWNhcmQsXFxuLnJhaW4tY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDN2dztcXG59XFxuXFxuLnNub3ctY2FyZCBpbWcsXFxuLnJhaW4tY2FyZCBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOmZpcnN0LWNoaWxkLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC40dmg7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgyKSxcXG4uc25vdy1jYXJkID4gZGl2ID4gcDpudGgtY2hpbGQoMyksXFxuLnJhaW4tY2FyZCA+IGRpdiA+IHA6bnRoLWNoaWxkKDIpLFxcbi5yYWluLWNhcmQgPiBkaXYgPiBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxufVxcblxcbi5zbm93LWNhcmQgPiBkaXYsXFxuLnJhaW4tY2FyZCA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uc3VuU3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIHBhZGRpbmctdG9wOiAxdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uc3VuU3RhdHMgaW1nIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcbn1cXG5cXG4uc3VuU3RhdHMgZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3VkU3RhdHMsXFxuLndpbmRTdGF0cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgcGFkZGluZy1sZWZ0OiAzdnc7XFxufVxcblxcbi5naWYgPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2xvdWRTdGF0cyBpbWcsXFxuLndpbmRTdGF0cyBpbWcge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5jbG91ZFN0YXRzIHAsXFxuLndpbmRTdGF0cyBwIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBwYWRkaW5nOiAydnc7XFxufVxcblxcbi5lcnJvci1jYXJkIHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xcbn1cXG5cXG4uZXJyb3ItY2FyZCBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0RXJyb3JHaWYgfSBmcm9tIFwiLi9naWZBUElcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VFcnJvckNhcmQoZXJyb3JUeXBlKSB7XG4gIGxldCBtZXNzYWdlID0gXCJcIjtcbiAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGlmIChlcnJvclR5cGUgPT0gNDA0KSB7XG4gICAgbWVzc2FnZSA9IFwiU29ycnksIHdlIGNvdWxkbid0IGZpbmQgdGhhdCBjaXR5XCI7XG4gICAgaW1hZ2UuYWx0ID0gXCJnaWYgY29uZnVzZWQgd2l0aCBlbnRlcmVkIGNpdHlcIjtcbiAgICB0cnkge1xuICAgICAgaW1hZ2Uuc3JjID0gYXdhaXQgZ2V0RXJyb3JHaWYoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBmZXRjaGluZyBlcnJvciBnaWY6IFwiLCBlcnJvcik7XG4gICAgfVxuICB9XG4gIGxldCBlcnJvckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvckNhcmQuY2xhc3NMaXN0LmFkZChcImVycm9yLWNhcmRcIik7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIGVycm9yQ2FyZC5hcHBlbmRDaGlsZChlcnJvck1lc3NhZ2UpO1xuICBlcnJvckNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICByZXR1cm4gZXJyb3JDYXJkO1xufVxuIiwiaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcblxuY29uc3QgZmF2b3JpdGVzQmFyID0ge1xuICBoZWFkZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIiksXG4gIG1ha2VGYXZvcml0ZXNCYXIoKSB7XG4gICAgbGV0IGNpdGllcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpO1xuICAgIGNpdGllcyA9IEpTT04ucGFyc2UoY2l0aWVzKTtcbiAgICBsZXQgZmF2b3JpdGVzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmYXZvcml0ZXNCYXIuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlcy1iYXJcIik7XG4gICAgY2l0aWVzLmZvckVhY2goKGNpdHkpID0+IHtcbiAgICAgIGxldCBjaXR5TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY2l0eUxpbmsuaW5uZXJUZXh0ID0gYCR7Y2l0eX1gO1xuICAgICAgY2l0eUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZ2V0V2VhdGhlcihjaXR5LCBoYW5kbGVVc2VySW5wdXQudW5pdHMpO1xuICAgICAgfSk7XG4gICAgICBmYXZvcml0ZXNCYXIuYXBwZW5kQ2hpbGQoY2l0eUxpbmspO1xuICAgIH0pO1xuICAgIHRoaXMuaGVhZGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0Jhcik7XG4gIH0sXG4gIHJlZnJlc2hGYXZvcml0ZXNCYXIoKSB7XG4gICAgbGV0IGZhdm9yaXRlc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzLWJhclwiKTtcbiAgICB0aGlzLmhlYWRlci5yZW1vdmVDaGlsZChmYXZvcml0ZXNCYXIpO1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBpZiAoY2l0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubWFrZUZhdm9yaXRlc0JhcigpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZhdm9yaXRlc0JhcjtcbiIsImNvbnN0IGVuZHBvaW50ID0gXCJodHRwczovL2NvdW50cnlmbGFnc2FwaS5jb20vc3ZnL1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZsYWcoY29kZSkge1xuICBsZXQgc3JjID0gYCR7ZW5kcG9pbnR9JHtjb2RlfWA7XG4gIHJldHVybiBzcmM7XG59XG4iLCJjb25zdCBnaWZLZXkgPSBcIlpTcUxaQm9QMUwyNXBTMDNHNDc4cGpSQmIwTkVTYjBDXCI7XG5jb25zdCBlcnJvckdpZklkcyA9IFtcbiAgXCJnbG1SeWlTSTN2NUU0XCIsXG4gIFwiakpPMUJ3dWNoNW9yS1wiLFxuICBcImdLc0pVZGRqbnBQRzBcIixcbiAgXCJtRVY0MkYzOGx1cjZQYmZhcFdcIixcbiAgXCIxeFZiU1g4VXpJaU1QTVpqWlBcIixcbiAgXCJkb0pyQ084a0NBZ055XCIsXG4gIFwiaDRaNlJmdVF5Y2RpTVwiLFxuICBcIjNvN2FDVFBQbTRPSGZSTFNINlwiLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RXJyb3JHaWYoKSB7XG4gIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDgpO1xuICBsZXQgaWQgPSBlcnJvckdpZklkc1tpbmRleF07XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLyR7aWR9P2FwaV9rZXk9JHtnaWZLZXl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBsZXQgc3JjID0gYXBpUHJvbWlzZVJlc29sdmVkLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgcmV0dXJuIHNyYztcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckdpZih3ZWF0aGVyKSB7XG4gIGxldCBpZCA9IFwidXltS2dxcko5T3I2MFwiO1xuICBpZiAod2VhdGhlci5tYXRjaCgvcmFpbi8pKSB7XG4gICAgaWYgKFxuICAgICAgd2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKVswXSA9PSBcImxpZ2h0XCIgfHxcbiAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJkcml6emxlXCJcbiAgICApIHtcbiAgICAgIGlkID0gXCJsMElySWtxN1EzaVJJSTBoeVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IFwiVzBjM3hjWjNGMWQwRVlZYjBmXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9jbG91ZHMvKSkge1xuICAgIGlmICh3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwib3ZlcmNhc3RcIikge1xuICAgICAgaWQgPSBcImRXSWF1MVpSeUlqM2o2WUVhTFwiO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB3ZWF0aGVyLm1hdGNoKC9cXEQrKD89XFxzKS8pWzBdID09IFwiZmV3XCIgfHxcbiAgICAgIHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJzY2F0dGVyZWRcIlxuICAgICkge1xuICAgICAgaWQgPSBcInVPdWlLNEY1elprWjJcIjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJicm9rZW5cIikge1xuICAgICAgaWQgPSBcIjEyZUNvOGdwU01NZ3JTXCI7XG4gICAgfVxuICB9XG4gIGlmICh3ZWF0aGVyLm1hdGNoKC9zbm93LykpIHtcbiAgICBpZiAod2VhdGhlci5tYXRjaCgvXFxEKyg/PVxccykvKSkge1xuICAgICAgaWYgKHdlYXRoZXIubWF0Y2goL1xcRCsoPz1cXHMpLylbMF0gPT0gXCJsaWdodFwiKSB7XG4gICAgICAgIGlkID0gXCIzb2hjMTFEcE5NZjdxbnF4UjZcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSBcIkpXZWdic0FXUVMxWUFcIjtcbiAgICB9XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL2hhemUvKSkge1xuICAgIGlkID0gXCJyMk9NdVRDRm8wcnYycmdBTDVcIjtcbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvbWlzdC8pKSB7XG4gICAgaWQgPSBcIm1XMDNzVFpWVDlJWTBcIjtcbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvY2xlYXIvKSkge1xuICAgIGlkID0gXCJScVNKNm5RVnNPcHhlXCI7XG4gIH1cbiAgaWYgKHdlYXRoZXIubWF0Y2goL2ZvZy8pKSB7XG4gICAgaWQgPSBcIm9BYnZNWHZhaDFNMFVcIjtcbiAgfVxuICBpZiAod2VhdGhlci5tYXRjaCgvc21va2UvKSkge1xuICAgIGlkID0gXCJsMkplOWRVSTVMcHpmSEdUZVwiO1xuICB9XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLyR7aWR9P2FwaV9rZXk9JHtnaWZLZXl9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgbGV0IGFwaVByb21pc2VSZXNvbHZlZCA9IGF3YWl0IGFwaVByb21pc2UuanNvbigpO1xuICBsZXQgc3JjID0gYXBpUHJvbWlzZVJlc29sdmVkLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbiAgcmV0dXJuIHNyYztcbn1cblxuZXhwb3J0IHsgZ2V0RXJyb3JHaWYsIGdldFdlYXRoZXJHaWYgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBzaG93T25JbmZvIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcbmltcG9ydCB7IG1ha2VFcnJvckNhcmQgfSBmcm9tIFwiLi9lcnJvckNhcmRzXCI7XG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyR2lmIH0gZnJvbSBcIi4vZ2lmQVBJXCI7XG5pbXBvcnQgeyBnZXRPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0T3B0aW9uc1VuZmF2b3JpdGUgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuXG5jb25zdCBoYW5kbGVVc2VySW5wdXQgPSB7XG4gIHdlYXRoZXJLZXk6IFwiOGFlMmQxM2U1NGViZWY3NzVlZmZmMmM1MjgxN2E1ZTJcIixcbiAgZ2lmS2V5OiBcIlpTcUxaQm9QMUwyNXBTMDNHNDc4cGpSQmIwTkVTYjBDXCIsXG4gIHVuaXRzOiBcIm1ldHJpY1wiLFxuICBoYW5kbGVTZWFyY2hJY29uKCkge1xuICAgIGxldCBzZWFyY2hiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaGJhciA+IGlucHV0XCIpO1xuICAgIGNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zID4gZGl2ID4gZGl2ID4gZGl2ID4gaW5wdXRcIik7XG4gICAgdW5pdHMuY2hlY2tlZCA/ICh0aGlzLnVuaXRzID0gXCJtZXRyaWNcIikgOiAodGhpcy51bml0cyA9IFwiaW1wZXJpYWxcIik7XG4gICAgaWYgKHNlYXJjaGJhci52YWx1ZSkge1xuICAgICAgZ2V0V2VhdGhlcihzZWFyY2hiYXIudmFsdWUsIGhhbmRsZVVzZXJJbnB1dC51bml0cyk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24sIHVuaXRzKSB7XG4gIGxldCBhcGlQcm9taXNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9JHtoYW5kbGVVc2VySW5wdXQud2VhdGhlcktleX0mdW5pdHM9JHt1bml0c31gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBsZXQgYXBpUHJvbWlzZVJlc29sdmVkID0gYXdhaXQgYXBpUHJvbWlzZS5qc29uKCk7XG4gIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuY29kID09IDQwNCkge1xuICAgIGxldCBlcnJvckNhcmQgPSBhd2FpdCBtYWtlRXJyb3JDYXJkKDQwNCk7XG4gICAgY2xlYW4ocmVzdWx0KTtcbiAgICByZXN1bHQuYXBwZW5kQ2hpbGQoZXJyb3JDYXJkKTtcbiAgICBnZXRPcHRpb25zKGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgY2l0eSA9IGFwaVByb21pc2VSZXNvbHZlZC5uYW1lO1xuXG4gICAgbGV0IGNpdGllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaXRpZXNcIikpO1xuICAgIGlmIChjaXRpZXMubGVuZ3RoID4gMCAmJiBjaXRpZXMuc29tZSgoYykgPT4gYyA9PSBjaXR5KSkge1xuICAgICAgZ2V0T3B0aW9uc1VuZmF2b3JpdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0T3B0aW9ucyh0cnVlKTtcbiAgICB9XG5cbiAgICBsZXQgY291bnRyeSA9IG51bGw7XG4gICAgY291bnRyeSA9IGFwaVByb21pc2VSZXNvbHZlZC5zeXMuY291bnRyeTtcbiAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGxldCBvZmZzZXQgPSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MCAqIDEwMDA7XG4gICAgbGV0IGRhdGVBdENpdHkgPSBuZXcgRGF0ZShcbiAgICAgIHRpbWVOb3cgKyBvZmZzZXQgKyBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwXG4gICAgKTtcbiAgICBsZXQgdGltZUF0Q2l0eSA9IGRhdGVBdENpdHkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfSk7XG4gICAgbGV0IGRhdGVBdENpdHlTaW1wbGUgPSBkYXRlQXRDaXR5LnRvRGF0ZVN0cmluZygpO1xuICAgIGxldCB0ZW1wZXJhdHVyZSA9IGFwaVByb21pc2VSZXNvbHZlZC5tYWluLnRlbXA7XG4gICAgbGV0IHRlbXBlcmF0dXJlRmVlbHMgPSBhcGlQcm9taXNlUmVzb2x2ZWQubWFpbi5mZWVsc19saWtlO1xuICAgIGxldCB3ZWF0aGVyID0gYXBpUHJvbWlzZVJlc29sdmVkLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgbGV0IGdpZlNyYyA9IFwiXCI7XG4gICAgdHJ5IHtcbiAgICAgIGdpZlNyYyA9IGF3YWl0IGdldFdlYXRoZXJHaWYod2VhdGhlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgZmV0Y2hpbmcgd2VhdGhlciBnaWY6IFwiLCBlcnJvcik7XG4gICAgfVxuICAgIGxldCByYWluMWggPSBcIlwiO1xuICAgIGxldCByYWluM2ggPSBcIlwiO1xuICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQucmFpbikge1xuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5yYWluW1wiMWhcIl0pIHtcbiAgICAgICAgcmFpbjFoID0gYXBpUHJvbWlzZVJlc29sdmVkLnJhaW5bXCIxaFwiXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQucmFpbltcIjNoXCJdKSB7XG4gICAgICAgIHJhaW4zaCA9IGFwaVByb21pc2VSZXNvbHZlZC5yYWluW1wiM2hcIl07XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzbm93MWggPSBcIlwiO1xuICAgIGxldCBzbm93M2ggPSBcIlwiO1xuICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuc25vdykge1xuICAgICAgaWYgKGFwaVByb21pc2VSZXNvbHZlZC5zbm93W1wiMWhcIl0pIHtcbiAgICAgICAgc25vdzFoID0gYXBpUHJvbWlzZVJlc29sdmVkLnNub3dbXCIxaFwiXTtcbiAgICAgIH1cbiAgICAgIGlmIChhcGlQcm9taXNlUmVzb2x2ZWQuc25vd1tcIjNoXCJdKSB7XG4gICAgICAgIHNub3czaCA9IGFwaVByb21pc2VSZXNvbHZlZC5zbm93W1wiM2hcIl07XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzdW5yaXNlID0gbmV3IERhdGUoXG4gICAgICBuZXcgRGF0ZShcbiAgICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnN5c1tcInN1bnJpc2VcIl0gKiAxMDAwICtcbiAgICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQudGltZXpvbmUgKiAxMDAwICtcbiAgICAgICAgICBvZmZzZXRcbiAgICAgIClcbiAgICApLnRvTG9jYWxlVGltZVN0cmluZyhbXSwge1xuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIH0pO1xuICAgIGxldCBzdW5zZXQgPSBuZXcgRGF0ZShcbiAgICAgIG5ldyBEYXRlKFxuICAgICAgICBhcGlQcm9taXNlUmVzb2x2ZWQuc3lzW1wic3Vuc2V0XCJdICogMTAwMCArXG4gICAgICAgICAgYXBpUHJvbWlzZVJlc29sdmVkLnRpbWV6b25lICogMTAwMCArXG4gICAgICAgICAgb2Zmc2V0XG4gICAgICApXG4gICAgKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICB9KTtcbiAgICBsZXQgY2xvdWRpbmVzcyA9IGFwaVByb21pc2VSZXNvbHZlZC5jbG91ZHNbXCJhbGxcIl07XG4gICAgbGV0IHdpbmQgPSBhcGlQcm9taXNlUmVzb2x2ZWQud2luZFtcInNwZWVkXCJdO1xuICAgIHNob3dPbkluZm8oXG4gICAgICB1bml0cyxcbiAgICAgIGNpdHksXG4gICAgICBjb3VudHJ5LFxuICAgICAgdGltZUF0Q2l0eSxcbiAgICAgIGRhdGVBdENpdHlTaW1wbGUsXG4gICAgICB0ZW1wZXJhdHVyZSxcbiAgICAgIHRlbXBlcmF0dXJlRmVlbHMsXG4gICAgICB3ZWF0aGVyLFxuICAgICAgcmFpbjFoLFxuICAgICAgcmFpbjNoLFxuICAgICAgc25vdzFoLFxuICAgICAgc25vdzNoLFxuICAgICAgc3VucmlzZSxcbiAgICAgIHN1bnNldCxcbiAgICAgIGNsb3VkaW5lc3MsXG4gICAgICB3aW5kLFxuICAgICAgZ2lmU3JjXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVVc2VySW5wdXQ7XG4iLCJpbXBvcnQgeyBnZXRGbGFnIH0gZnJvbSBcIi4vZmxhZ0FQSVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUJhc2ljc0NhcmQoXG4gIGNpdHksXG4gIGNvdW50cnksXG4gIHRpbWUsXG4gIGRhdGUsXG4gIHRlbXAsXG4gIHRlbXBGZWVscyxcbiAgdGVtcFVuaXRcbikge1xuICBsZXQgYmFzaWNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFzaWNzLmNsYXNzTGlzdC5hZGQoXCJiYXNpY3NcIik7XG5cbiAgbGV0IGJhc2ljc0NpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmFzaWNzQ2l0eS5pbm5lclRleHQgPSBgJHtjaXR5fWA7XG4gIGJhc2ljc0NpdHkuY2xhc3NMaXN0LmFkZChcImNpdHlcIik7XG4gIGxldCBiYXNpY3NDb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGJhc2ljc0NvdW50cnkuaW5uZXJUZXh0ID0gYCR7Y291bnRyeX1gO1xuICBsZXQgYmFzaWNzVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBiYXNpY3NUaW1lLmlubmVyVGV4dCA9IGAke3RpbWV9YDtcbiAgbGV0IGJhc2ljc0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYmFzaWNzRGF0ZS5pbm5lclRleHQgPSBgJHtkYXRlfWA7XG4gIGxldCByZXRyaWV2YWxUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJldHJpZXZhbFRpbWUuaW5uZXJUZXh0ID0gYExhc3QgdXBkYXRlOiAke25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKX1gO1xuICBsZXQgdGVtcFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbXBUZW1wZXJhdHVyZS5pbm5lclRleHQgPSBgJHt0ZW1wfSAke3RlbXBVbml0fWA7XG4gIGxldCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRlbXBGZWVsc0xpa2UuaW5uZXJUZXh0ID0gYCR7dGVtcEZlZWxzfSAke3RlbXBVbml0fWA7XG4gIGxldCBmZWVsc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZlZWxzTGFiZWwuaW5uZXJUZXh0ID0gXCJGZWVscyBsaWtlOiBcIjtcblxuICBsZXQgYmFzaWNzVGl0bGVDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJhc2ljc1RpdGxlQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBiYXNpY3NEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGJhc2ljc1RlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFzaWNzVGVtcGVyYXR1cmUuY2xhc3NMaXN0LmFkZChcImJhc2ljcy10ZW1wZXJhdHVyZVwiKTtcbiAgYmFzaWNzVGl0bGVDaXR5LmFwcGVuZENoaWxkKGJhc2ljc0NpdHkpO1xuICBiYXNpY3NUaXRsZUNvdW50cnkuYXBwZW5kQ2hpbGQoYmFzaWNzQ291bnRyeSk7XG4gIGxldCBmbGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZmxhZy5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjcm9zc29yaWdpblwiLFxuICAgIFwiQ3Jvc3MtT3JpZ2luLVJlc291cmNlLVBvbGljeTogY3Jvc3Mtb3JpZ2luIFwiXG4gICk7XG4gIGZsYWcuYWx0ID0gYCR7Y291bnRyeX0gZmxhZ2A7XG4gIGZsYWcuc3JjID0gZ2V0RmxhZyhjb3VudHJ5KTtcbiAgZmxhZy5jbGFzc0xpc3QuYWRkKFwiZmxhZ1wiKTtcblxuICBsZXQgYmFzaWNzRGF0ZUFuZFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYXNpY3NEYXRlQW5kVGltZS5hcHBlbmRDaGlsZChiYXNpY3NUaW1lKTtcbiAgYmFzaWNzRGF0ZUFuZFRpbWUuYXBwZW5kQ2hpbGQoYmFzaWNzRGF0ZSk7XG5cbiAgYmFzaWNzLmFwcGVuZENoaWxkKGJhc2ljc1RpdGxlQ2l0eSk7XG4gIGJhc2ljc0RldGFpbHMuYXBwZW5kQ2hpbGQoZmxhZyk7XG4gIGJhc2ljc0RldGFpbHMuYXBwZW5kQ2hpbGQoYmFzaWNzRGF0ZUFuZFRpbWUpO1xuICBiYXNpY3NEZXRhaWxzLmFwcGVuZENoaWxkKHJldHJpZXZhbFRpbWUpO1xuICBiYXNpY3MuYXBwZW5kQ2hpbGQoYmFzaWNzRGV0YWlscyk7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKHRlbXBUZW1wZXJhdHVyZSk7XG4gIGJhc2ljc1RlbXBlcmF0dXJlLmFwcGVuZENoaWxkKGZlZWxzTGFiZWwpO1xuICBiYXNpY3NUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh0ZW1wRmVlbHNMaWtlKTtcbiAgYmFzaWNzLmFwcGVuZENoaWxkKGJhc2ljc1RlbXBlcmF0dXJlKTtcblxuICByZXR1cm4gYmFzaWNzO1xufVxuIiwiaW1wb3J0IENsb3VkaW5lc3NJY29uIGZyb20gXCIuL2Nsb3VkLW91dGxpbmUuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xvdWRzQ2FyZChjbG91ZGluZXNzKSB7XG4gIGxldCBjbG91ZFN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvdWRTdGF0cy5jbGFzc0xpc3QuYWRkKFwiY2xvdWRTdGF0c1wiKTtcbiAgbGV0IGNsb3VkaW5lc3NJY29uID0gbmV3IEltYWdlKCk7XG4gIGNsb3VkaW5lc3NJY29uLmFsdCA9IFwiQ2xvdWRpbmVzcyBpY29uXCI7XG4gIGNsb3VkaW5lc3NJY29uLnNyYyA9IENsb3VkaW5lc3NJY29uO1xuICBsZXQgY2xvdWRpbmVzc0Nsb3VkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjbG91ZGluZXNzQ2xvdWRzLmlubmVyVGV4dCA9IGBDbG91ZGluZXNzOiAke2Nsb3VkaW5lc3N9ICVgO1xuICBjbG91ZFN0YXRzLmFwcGVuZENoaWxkKGNsb3VkaW5lc3NJY29uKTtcbiAgY2xvdWRTdGF0cy5hcHBlbmRDaGlsZChjbG91ZGluZXNzQ2xvdWRzKTtcbiAgcmV0dXJuIGNsb3VkU3RhdHM7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUdpZkNhcmQoZ2lmU3JjKSB7XG4gIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5hbHQgPSBcIndlYXRoZXIgZ2lmXCI7XG4gIGltYWdlLnNyYyA9IGdpZlNyYztcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItZ2lmXCIpO1xuICByZXR1cm4gaW1hZ2U7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWFrZU92ZXJ2aWV3Q2FyZCh3ZWF0aGVyKSB7XG4gIGxldCBvdmVydmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJ2aWV3LmNsYXNzTGlzdC5hZGQoXCJvdmVydmlld1wiKTtcbiAgbGV0IG92ZXJ2aWV3V2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBvdmVydmlld1dlYXRoZXIuaW5uZXJUZXh0ID0gYCR7d2VhdGhlcn1gO1xuICBvdmVydmlldy5hcHBlbmRDaGlsZChvdmVydmlld1dlYXRoZXIpO1xuXG4gIHJldHVybiBvdmVydmlldztcbn1cbiIsImltcG9ydCBSYWluSWNvbiBmcm9tIFwiLi9yYWluLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVJhaW5DYXJkKHJhaW5Wb2wxaCwgcmFpblZvbDNoKSB7XG4gIGxldCByYWluQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJhaW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJyYWluLWNhcmRcIik7XG5cbiAgbGV0IHJhaW5JY29uID0gbmV3IEltYWdlKCk7XG4gIHJhaW5JY29uLmFsdCA9IFwiUmFpbiBpY29uXCI7XG4gIHJhaW5JY29uLnNyYyA9IFJhaW5JY29uO1xuXG4gIGxldCByYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiUmFpbiB2b2x1bWVcIjtcblxuICBsZXQgcmFpbjFoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJhaW4xaC5pbm5lclRleHQgPSBgTGFzdCBob3VyOiAke3JhaW5Wb2wxaH0gbW1gO1xuXG4gIHJhaW5JbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmFpbkluZm8uYXBwZW5kQ2hpbGQocmFpbjFoKTtcblxuICBpZiAocmFpblZvbDNoKSB7XG4gICAgbGV0IHJhaW4zaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJhaW4zaC5pbm5lclRleHQgPSBgTGFzdCAzaDogJHtyYWluVm9sM2h9YDtcbiAgICByYWluSW5mby5hcHBlbmRDaGlsZChyYWluM2gpO1xuICB9XG5cbiAgcmFpbkNhcmQuYXBwZW5kQ2hpbGQocmFpbkljb24pO1xuICByYWluQ2FyZC5hcHBlbmRDaGlsZChyYWluSW5mbyk7XG5cbiAgcmV0dXJuIHJhaW5DYXJkO1xufVxuIiwiaW1wb3J0IFNlYXJjaEljb24gZnJvbSBcIi4vc2VhcmNoLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgaGFuZGxlVXNlcklucHV0IGZyb20gXCIuL2hhbmRsZVVzZXJJbnB1dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlYXJjaEJhcigpIHtcbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXJcIik7XG4gIGxldCBzZWFyY2hJY29uID0gbmV3IEltYWdlKCk7XG4gIHNlYXJjaEljb24uYWx0ID0gXCJTZWFyY2ggSWNvblwiO1xuICBzZWFyY2hJY29uLnNyYyA9IFNlYXJjaEljb247XG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcblxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbik7XG4gIGNvbnN0IHNlYXJjaEJhcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXIgPiBpbnB1dFwiKTtcbiAgc2VhcmNoQmFySW5wdXQub25mb2N1cyA9ICgpID0+IHtcbiAgICBzZWFyY2hCYXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICAgIHNlYXJjaEljb24uY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCBTbm93SWNvbiBmcm9tIFwiLi9zbm93LnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNub3dDYXJkKHNub3dWb2wxaCwgc25vd1ZvbDNoKSB7XG4gIGxldCBzbm93Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNub3dDYXJkLmNsYXNzTGlzdC5hZGQoXCJzbm93LWNhcmRcIik7XG5cbiAgbGV0IHNub3dJY29uID0gbmV3IEltYWdlKCk7XG4gIHNub3dJY29uLmFsdCA9IFwiU25vdyBpY29uXCI7XG4gIHNub3dJY29uLnNyYyA9IFNub3dJY29uO1xuXG4gIGxldCBzbm93SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiU25vdyB2b2x1bWVcIjtcblxuICBsZXQgc25vdzFoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHNub3cxaC5pbm5lclRleHQgPSBgTGFzdCBob3VyOiAke3Nub3dWb2wxaH0gbW1gO1xuXG4gIHNub3dJbmZvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgc25vd0luZm8uYXBwZW5kQ2hpbGQoc25vdzFoKTtcblxuICBpZiAoc25vd1ZvbDNoKSB7XG4gICAgbGV0IHNub3czaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNub3czaC5pbm5lclRleHQgPSBgTGFzdCAzaDogJHtzbm93Vm9sM2h9YDtcbiAgICBzbm93SW5mby5hcHBlbmRDaGlsZChzbm93M2gpO1xuICB9XG5cbiAgc25vd0NhcmQuYXBwZW5kQ2hpbGQoc25vd0ljb24pO1xuICBzbm93Q2FyZC5hcHBlbmRDaGlsZChzbm93SW5mbyk7XG5cbiAgcmV0dXJuIHNub3dDYXJkO1xufVxuIiwiaW1wb3J0IFN1bnJpc2VJY29uIGZyb20gXCIuL3N1bnJpc2Uuc3ZnXCI7XG5pbXBvcnQgU3Vuc2V0SWNvbiBmcm9tIFwiLi9zdW5zZXQuc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3VuQ2FyZChzdW5yaXNlLCBzdW5zZXQpIHtcbiAgbGV0IHN1blN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VuU3RhdHMuY2xhc3NMaXN0LmFkZChcInN1blN0YXRzXCIpO1xuXG4gIGxldCBzdW5yaXNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBzdW5zZXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBsZXQgc3VucmlzZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc3VucmlzZUljb24uYWx0ID0gXCJTdW5yaXNlIGljb25cIjtcbiAgc3VucmlzZUljb24uc3JjID0gU3VucmlzZUljb247XG5cbiAgbGV0IHN1bnNldEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgc3Vuc2V0SWNvbi5hbHQgPSBcIlN1bnNldCBpY29uXCI7XG4gIHN1bnNldEljb24uc3JjID0gU3Vuc2V0SWNvbjtcblxuICBsZXQgc3VuU3RhdHNTdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1blN0YXRzU3VucmlzZS5pbm5lclRleHQgPSBgU3VucmlzZTogJHtzdW5yaXNlfWA7XG5cbiAgbGV0IHN1blN0YXRzU3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1blN0YXRzU3Vuc2V0LmlubmVyVGV4dCA9IGBTdW5zZXQ6ICR7c3Vuc2V0fWA7XG5cbiAgc3VucmlzZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VucmlzZUljb24pO1xuICBzdW5yaXNlRWxlbWVudC5hcHBlbmRDaGlsZChzdW5TdGF0c1N1bnJpc2UpO1xuXG4gIHN1bnNldEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Vuc2V0SWNvbik7XG4gIHN1bnNldEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VuU3RhdHNTdW5zZXQpO1xuXG4gIHN1blN0YXRzLmFwcGVuZENoaWxkKHN1bnJpc2VFbGVtZW50KTtcbiAgc3VuU3RhdHMuYXBwZW5kQ2hpbGQoc3Vuc2V0RWxlbWVudCk7XG4gIHJldHVybiBzdW5TdGF0cztcbn1cbiIsImltcG9ydCBXaW5kSWNvbiBmcm9tIFwiLi93aW5kLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVdpbmRDYXJkKHdpbmQpIHtcbiAgbGV0IHdpbmRTdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdpbmRTdGF0cy5jbGFzc0xpc3QuYWRkKFwid2luZFN0YXRzXCIpO1xuICBsZXQgd2luZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgd2luZEljb24uYWx0ID0gXCJXaW5kIGljb25cIjtcbiAgd2luZEljb24uc3JjID0gV2luZEljb247XG4gIGxldCB3aW5kU3RhdHNTcGVlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3aW5kU3RhdHNTcGVlZC5pbm5lclRleHQgPSBgV2luZCBTcGVlZDogJHt3aW5kfSBtL3NgO1xuICB3aW5kU3RhdHMuYXBwZW5kQ2hpbGQod2luZEljb24pO1xuICB3aW5kU3RhdHMuYXBwZW5kQ2hpbGQod2luZFN0YXRzU3BlZWQpO1xuICByZXR1cm4gd2luZFN0YXRzO1xufVxuIiwiaW1wb3J0IGZhdm9yaXRlSWNvbiBmcm9tIFwiLi9mYXYuc3ZnXCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9uc1VuZmF2b3JpdGUgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRmF2b3JpdGVPcHRpb24oKSB7XG4gIGxldCBmYXZvcml0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZhdm9yaXRlT3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24tZmF2b3JpdGVcIik7XG4gIGxldCBmYXZvcml0ZUltYWdlID0gbmV3IEltYWdlKCk7XG4gIGZhdm9yaXRlSW1hZ2UuYWx0ID0gXCJGYXZvcml0ZSBpY29uXCI7XG4gIGZhdm9yaXRlSW1hZ2Uuc3JjID0gZmF2b3JpdGVJY29uO1xuICBsZXQgZmF2b3JpdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZhdm9yaXRlVGV4dC5pbm5lclRleHQgPSBcIkFkZCBmYXZvcml0ZVwiO1xuICBmYXZvcml0ZU9wdGlvbi5hcHBlbmRDaGlsZChmYXZvcml0ZUltYWdlKTtcbiAgZmF2b3JpdGVPcHRpb24uYXBwZW5kQ2hpbGQoZmF2b3JpdGVUZXh0KTtcblxuICBmYXZvcml0ZU9wdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICAgIGxldCBjaXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2l0aWVzXCIpKTtcbiAgICBjaXRpZXMucHVzaChjaXR5LmlubmVyVGV4dCk7XG4gICAgbGV0IGNpdGllc1N0cmlnaWZpZWQgPSBKU09OLnN0cmluZ2lmeShjaXRpZXMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIGAke2NpdGllc1N0cmlnaWZpZWR9YCk7XG4gICAgbGV0IGZhdm9yaXRlc0JhckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1iYXJcIik7XG4gICAgaWYgKGZhdm9yaXRlc0JhckVsZW1lbnQpIHtcbiAgICAgIGZhdm9yaXRlc0Jhci5yZWZyZXNoRmF2b3JpdGVzQmFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZhdm9yaXRlc0Jhci5tYWtlRmF2b3JpdGVzQmFyKCk7XG4gICAgfVxuICAgIGdldE9wdGlvbnNVbmZhdm9yaXRlKCk7XG4gIH0pO1xuXG4gIHJldHVybiBmYXZvcml0ZU9wdGlvbjtcbn1cbiIsImltcG9ydCByZWxvYWRJY29uIGZyb20gXCIuL3JlbG9hZC5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSZWxvYWRPcHRpb24oKSB7XG4gIGxldCByZWxvYWRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgcmVsb2FkSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgcmVsb2FkSW1hZ2UuYWx0ID0gXCJSZWxvYWQgaWNvblwiO1xuICByZWxvYWRJbWFnZS5zcmMgPSByZWxvYWRJY29uO1xuXG4gIGxldCByZWxvYWRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICByZWxvYWRTZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZWxvYWQtc2VsZWN0XCIpO1xuICBsZXQgb3B0aW9uTWFudWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uTWFudWFsLmlubmVyVGV4dCA9IFwiLS1yZWZyZXNoIG1vZGUtLVwiO1xuICBvcHRpb25NYW51YWwuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gIGxldCBvcHRpb25PbmVNaW51dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25PbmVNaW51dGUuaW5uZXJUZXh0ID0gXCJFdmVyeSBtaW51dGVcIjtcbiAgbGV0IG9wdGlvblRlbk1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvcHRpb25UZW5NaW51dGVzLmlubmVyVGV4dCA9IFwiRXZlcnkgMTAgbWludXRlc1wiO1xuICBsZXQgb3B0aW9uMzBNaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uMzBNaW51dGVzLmlubmVyVGV4dCA9IFwiRXZlcnkgMzAgbWludXRlc1wiO1xuICBsZXQgb3B0aW9uT25lSG91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvbk9uZUhvdXIuaW5uZXJUZXh0ID0gXCJFdmVyeSBob3VyXCI7XG4gIGxldCBvcHRpb25Ud29Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG9wdGlvblR3b0hvdXJzLmlubmVyVGV4dCA9IFwiRXZlcnkgMiBob3Vyc1wiO1xuICBsZXQgb3B0aW9uT25lRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uT25lRGF5LmlubmVyVGV4dCA9IFwiRXZlcnkgMjQgaG91cnNcIjtcbiAgcmVsb2FkU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbk1hbnVhbCk7XG4gIHJlbG9hZFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25PbmVNaW51dGUpO1xuICByZWxvYWRTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uVGVuTWludXRlcyk7XG4gIHJlbG9hZFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24zME1pbnV0ZXMpO1xuICByZWxvYWRTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uT25lSG91cik7XG4gIHJlbG9hZFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25Ud29Ib3Vycyk7XG4gIHJlbG9hZFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25PbmVEYXkpO1xuXG4gIHJlbG9hZE9wdGlvbi5hcHBlbmRDaGlsZChyZWxvYWRJbWFnZSk7XG4gIHJlbG9hZE9wdGlvbi5hcHBlbmRDaGlsZChyZWxvYWRTZWxlY3QpO1xuXG4gIHJlbG9hZE9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXJlbG9hZFwiKTtcblxuICByZXR1cm4gcmVsb2FkT3B0aW9uO1xufVxuIiwiaW1wb3J0IGhhbmRsZVVzZXJJbnB1dCBmcm9tIFwiLi9oYW5kbGVVc2VySW5wdXRcIjtcbmltcG9ydCB0ZW1wZXJhdHVyZUljb24gZnJvbSBcIi4vdGhlcm1vbWV0ZXItb3V0bGluZS5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUZW1wZXJhdHVyZU9wdGlvbigpIHtcbiAgbGV0IHRlbXBlcmF0dXJlT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0ZW1wSWNvbiA9IG5ldyBJbWFnZSgpO1xuICB0ZW1wSWNvbi5hbHQgPSBcIlRlbXBlcmF0dXJlIGljb25cIjtcbiAgdGVtcEljb24uc3JjID0gdGVtcGVyYXR1cmVJY29uO1xuXG4gIGxldCBjZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjZWxzaXVzLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNlbHNpdXNcIik7XG4gIGxldCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBmYWhyZW5oZWl0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZhaHJlbmhlaXRcIik7XG4gIGNlbHNpdXMuaW5uZXJUZXh0ID0gXCLCsENcIjtcbiAgZmFocmVuaGVpdC5pbm5lclRleHQgPSBcIsKwRlwiO1xuICBsZXQgY2Vsc2l1c1JhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjZWxzaXVzUmFkaW8uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICBjZWxzaXVzUmFkaW8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjZWxzaXVzXCIpO1xuICBjZWxzaXVzUmFkaW8uc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgY2Vsc2l1c1JhZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT5cbiAgICBoYW5kbGVVc2VySW5wdXQuaGFuZGxlU2VhcmNoSWNvbigpXG4gICk7XG4gIGNlbHNpdXMuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZXRyaWNcIik7XG4gIGNlbHNpdXNSYWRpby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGVtcGVyYXR1cmVcIik7XG4gIGxldCBmYWhyZW5oZWl0UmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGZhaHJlbmhlaXRSYWRpby5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gIGZhaHJlbmhlaXRSYWRpby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZhaHJlbmhlaXRcIik7XG4gIGZhaHJlbmhlaXRSYWRpby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGVtcGVyYXR1cmVcIik7XG4gIGZhaHJlbmhlaXRSYWRpby5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+XG4gICAgaGFuZGxlVXNlcklucHV0LmhhbmRsZVNlYXJjaEljb24oKVxuICApO1xuXG4gIGxldCBkaXZDZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGRpdkZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZDZWxzaXVzLmFwcGVuZENoaWxkKGNlbHNpdXMpO1xuICBkaXZDZWxzaXVzLmFwcGVuZENoaWxkKGNlbHNpdXNSYWRpbyk7XG4gIGRpdkZhaHJlbmhlaXQuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdCk7XG4gIGRpdkZhaHJlbmhlaXQuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdFJhZGlvKTtcblxuICBsZXQgdGVtcElucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRlbXBJbnB1dHMuYXBwZW5kQ2hpbGQoZGl2Q2Vsc2l1cyk7XG4gIHRlbXBJbnB1dHMuYXBwZW5kQ2hpbGQoZGl2RmFocmVuaGVpdCk7XG5cbiAgdGVtcGVyYXR1cmVPcHRpb25zLmFwcGVuZENoaWxkKHRlbXBJY29uKTtcbiAgdGVtcGVyYXR1cmVPcHRpb25zLmFwcGVuZENoaWxkKHRlbXBJbnB1dHMpO1xuXG4gIHRlbXBlcmF0dXJlT3B0aW9ucy5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLXRlbXBlcmF0dXJlXCIpO1xuXG4gIHJldHVybiB0ZW1wZXJhdHVyZU9wdGlvbnM7XG59XG4iLCJpbXBvcnQgVW5mYXZvcml0ZUljb24gZnJvbSBcIi4vdW5mYXYuc3ZnXCI7XG5pbXBvcnQgZmF2b3JpdGVzQmFyIGZyb20gXCIuL2Zhdm9yaXRlc0JhclwiO1xuaW1wb3J0IHsgZ2V0T3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VVbmZhdm9yaXRlT3B0aW9uKCkge1xuICBsZXQgdW5mYXZvcml0ZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVuZmF2b3JpdGVPcHRpb24uY2xhc3NMaXN0LmFkZChcIm9wdGlvbi11bmZhdm9yaXRlXCIpO1xuICBsZXQgdW5mYXZvcml0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgdW5mYXZvcml0ZUljb24uYWx0ID0gXCJSZW1vdmUgZnJvbSBmYXZvcml0ZXMgaWNvblwiO1xuICB1bmZhdm9yaXRlSWNvbi5zcmMgPSBVbmZhdm9yaXRlSWNvbjtcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGV4dC5pbm5lclRleHQgPSBcIlJlbW92ZSBmYXZvcml0ZVwiO1xuXG4gIHVuZmF2b3JpdGVPcHRpb24uYXBwZW5kQ2hpbGQodW5mYXZvcml0ZUljb24pO1xuICB1bmZhdm9yaXRlT3B0aW9uLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHVuZmF2b3JpdGVPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbiAgICBsZXQgY2l0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSk7XG4gICAgbGV0IGNpdGllc0ZpbHRlcmVkID0gY2l0aWVzLmZpbHRlcigoYykgPT4gYyAhPT0gY2l0eS5pbm5lclRleHQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2l0aWVzXCIsIGAke0pTT04uc3RyaW5naWZ5KGNpdGllc0ZpbHRlcmVkKX1gKTtcbiAgICBmYXZvcml0ZXNCYXIucmVmcmVzaEZhdm9yaXRlc0JhcigpO1xuICAgIGdldE9wdGlvbnModHJ1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB1bmZhdm9yaXRlT3B0aW9uO1xufVxuIiwiaW1wb3J0IHsgbWFrZVRlbXBlcmF0dXJlT3B0aW9uIH0gZnJvbSBcIi4vb3B0aW9uVGVtcGVyYXR1cmVcIjtcbmltcG9ydCB7IG1ha2VSZWxvYWRPcHRpb24gfSBmcm9tIFwiLi9vcHRpb25SZWxvYWRcIjtcbmltcG9ydCB7IG1ha2VGYXZvcml0ZU9wdGlvbiB9IGZyb20gXCIuL29wdGlvbkZhdm9yaXRlXCI7XG5pbXBvcnQgeyBtYWtlVW5mYXZvcml0ZU9wdGlvbiB9IGZyb20gXCIuL29wdGlvblVuZmF2b3JpdGVcIjtcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcblxuY29uc3Qgb3B0aW9uc0RpdiA9IHtcbiAgb3B0aW9uczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpLFxuICBnZXRUZW1wZXJhdHVyZU9wdGlvbnMoKSB7XG4gICAgbGV0IHRlbXBlcmF0dXJlT3B0aW9ucyA9IG1ha2VUZW1wZXJhdHVyZU9wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZU9wdGlvbnMpO1xuICB9LFxuICBnZXRSZWxvYWRPcHRpb25zKCkge1xuICAgIGxldCByZWxvYWRPcHRpb24gPSBtYWtlUmVsb2FkT3B0aW9uKCk7XG4gICAgdGhpcy5vcHRpb25zLmFwcGVuZENoaWxkKHJlbG9hZE9wdGlvbik7XG4gIH0sXG4gIGdldEZhdm9yaXRlT3B0aW9uKCkge1xuICAgIGxldCBmYXZvcml0ZU9wdGlvbiA9IG1ha2VGYXZvcml0ZU9wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZChmYXZvcml0ZU9wdGlvbik7XG4gIH0sXG4gIGdldFVuRmF2b3JpdGVPcHRpb24oKSB7XG4gICAgbGV0IHVuZmF2b3JpdGVPcHRpb24gPSBtYWtlVW5mYXZvcml0ZU9wdGlvbigpO1xuICAgIHRoaXMub3B0aW9ucy5hcHBlbmRDaGlsZCh1bmZhdm9yaXRlT3B0aW9uKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnMoYWxsKSB7XG4gIGNsZWFuKG9wdGlvbnNEaXYub3B0aW9ucyk7XG4gIGlmIChhbGwpIHtcbiAgICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICAgIG9wdGlvbnNEaXYuZ2V0UmVsb2FkT3B0aW9ucygpO1xuICAgIG9wdGlvbnNEaXYuZ2V0RmF2b3JpdGVPcHRpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNVbmZhdm9yaXRlKCkge1xuICBjbGVhbihvcHRpb25zRGl2Lm9wdGlvbnMpO1xuICBvcHRpb25zRGl2LmdldFRlbXBlcmF0dXJlT3B0aW9ucygpO1xuICBvcHRpb25zRGl2LmdldFJlbG9hZE9wdGlvbnMoKTtcbiAgb3B0aW9uc0Rpdi5nZXRVbkZhdm9yaXRlT3B0aW9uKCk7XG59XG5cbmV4cG9ydCB7IGdldE9wdGlvbnMsIGdldE9wdGlvbnNVbmZhdm9yaXRlIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbWFrZUJhc2ljc0NhcmQgfSBmcm9tIFwiLi9tYWtlQmFzaWNzQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZU92ZXJ2aWV3Q2FyZCB9IGZyb20gXCIuL21ha2VPdmVydmlld0NhcmRcIjtcbmltcG9ydCB7IG1ha2VTdW5DYXJkIH0gZnJvbSBcIi4vbWFrZVN1bkNhcmRcIjtcbmltcG9ydCB7IG1ha2VDbG91ZHNDYXJkIH0gZnJvbSBcIi4vbWFrZUNsb3Vkc0NhcmRcIjtcbmltcG9ydCB7IG1ha2VXaW5kQ2FyZCB9IGZyb20gXCIuL21ha2VXaW5kQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZUdpZkNhcmQgfSBmcm9tIFwiLi9tYWtlR2lmQ2FyZFwiO1xuaW1wb3J0IHsgbWFrZVNub3dDYXJkIH0gZnJvbSBcIi4vbWFrZVNub3dDYXJkXCI7XG5pbXBvcnQgeyBtYWtlUmFpbkNhcmQgfSBmcm9tIFwiLi9tYWtlUmFpbkNhcmRcIjtcblxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5cbmZ1bmN0aW9uIHNob3dPbkluZm8oXG4gIHVuaXRzLFxuICBjaXR5LFxuICBjb3VudHJ5LFxuICB0aW1lLFxuICBkYXRlLFxuICB0ZW1wLFxuICB0ZW1wRmVlbHMsXG4gIHdlYXRoZXIsXG4gIHJhaW5Wb2wxaCxcbiAgcmFpblZvbDNoLFxuICBzbm93Vm9sMWgsXG4gIHNub3dWb2wzaCxcbiAgc3VucmlzZSxcbiAgc3Vuc2V0LFxuICBjbG91ZGluZXNzLFxuICB3aW5kLFxuICBnaWZTcmNcbikge1xuICBjbGVhbihyZXN1bHQpO1xuICBsZXQgdGVtcFVuaXQgPSBcIlwiO1xuICB1bml0cyA9PSBcIm1ldHJpY1wiID8gKHRlbXBVbml0ID0gXCLCsENcIikgOiAodGVtcFVuaXQgPSBcIsKwRlwiKTtcblxuICBsZXQgYmFzaWNzQ2FyZCA9IG1ha2VCYXNpY3NDYXJkKFxuICAgIGNpdHksXG4gICAgY291bnRyeSxcbiAgICB0aW1lLFxuICAgIGRhdGUsXG4gICAgdGVtcCxcbiAgICB0ZW1wRmVlbHMsXG4gICAgdGVtcFVuaXRcbiAgKTtcbiAgbGV0IG92ZXJ2aWV3Q2FyZCA9IG1ha2VPdmVydmlld0NhcmQod2VhdGhlcik7XG4gIGxldCBzdW5DYXJkID0gbWFrZVN1bkNhcmQoc3VucmlzZSwgc3Vuc2V0KTtcbiAgbGV0IGNsb3Vkc0NhcmQgPSBtYWtlQ2xvdWRzQ2FyZChjbG91ZGluZXNzKTtcbiAgbGV0IHdpbmRDYXJkID0gbWFrZVdpbmRDYXJkKHdpbmQpO1xuICBsZXQgZ2lmQ2FyZCA9IG1ha2VHaWZDYXJkKGdpZlNyYyk7XG4gIGxldCBzbm93Q2FyZCA9IG1ha2VTbm93Q2FyZChzbm93Vm9sMWgsIHNub3dWb2wzaCk7XG4gIGxldCByYWluQ2FyZCA9IG1ha2VSYWluQ2FyZChyYWluVm9sMWgsIHJhaW5Wb2wzaCk7XG5cbiAgbGV0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcmRzLWNvbnRhaW5lclwiKTtcblxuICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgaW5mby5hcHBlbmRDaGlsZChiYXNpY3NDYXJkKTtcbiAgaW5mby5hcHBlbmRDaGlsZChvdmVydmlld0NhcmQpO1xuICBpbmZvLmFwcGVuZENoaWxkKGdpZkNhcmQpO1xuICBpZiAoc25vd1ZvbDFoIHx8IHNub3dWb2wzaCkge1xuICAgIGluZm8uYXBwZW5kQ2hpbGQoc25vd0NhcmQpO1xuICB9XG4gIGlmIChyYWluVm9sMWggfHwgcmFpblZvbDNoKSB7XG4gICAgaW5mby5hcHBlbmRDaGlsZChyYWluQ2FyZCk7XG4gIH1cbiAgaW5mby5hcHBlbmRDaGlsZChjbG91ZHNDYXJkKTtcbiAgaW5mby5hcHBlbmRDaGlsZCh3aW5kQ2FyZCk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoc3VuQ2FyZCk7XG5cbiAgcmVzdWx0LmFwcGVuZENoaWxkKGluZm8pO1xufVxuXG5mdW5jdGlvbiBjbGVhbihwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzaG93T25JbmZvLCBjbGVhbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdldE9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQgeyBtYWtlU2VhcmNoQmFyIH0gZnJvbSBcIi4vbWFrZVNlYXJjaEJhclwiO1xuaW1wb3J0IGZhdm9yaXRlc0JhciBmcm9tIFwiLi9mYXZvcml0ZXNCYXJcIjtcblxubWFrZVNlYXJjaEJhcigpO1xuZ2V0T3B0aW9ucyhmYWxzZSk7XG5cbmlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNpdGllc1wiKSkubGVuZ3RoID4gMCkge1xuICAgIGZhdm9yaXRlc0Jhci5tYWtlRmF2b3JpdGVzQmFyKCk7XG4gIH1cbn0gZWxzZSB7XG4gIGxldCBjaXRpZXNBcnJheSA9IFtdO1xuICBsZXQgY2l0aWVzQXJyYXlKU09OID0gSlNPTi5zdHJpbmdpZnkoY2l0aWVzQXJyYXkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNpdGllc1wiLCBgJHtjaXRpZXNBcnJheUpTT059YCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0px;\\n  padding: 0px;\\n  box-sizing: border-box;\\n}\\n\\n.navbar,\\n.options {\\n  border-radius: 5px;\\n  background-color: #eee;\\n}\\n\\nbody {\\n  padding: 1vw;\\n  height: 100vh;\\n  width: 100vw;\\n  display: grid;\\n  gap: 3vh;\\n  grid-template-rows: 1fr 1fr 8fr;\\n}\\n\\n.navbar {\\n  display: grid;\\n  gap: 1vw;\\n  grid-template-columns: 1fr 6fr;\\n}\\n\\n.navbar > h1 {\\n  align-self: center;\\n  margin-left: 1vw;\\n}\\n\\n.searchbar {\\n  box-sizing: border-box;\\n  display: grid;\\n  gap: 0.5vw;\\n  grid-template-columns: 1fr 1fr;\\n  height: 100%;\\n}\\n\\n.searchbar > input {\\n  height: 50%;\\n  align-self: center;\\n}\\n\\n.searchbar > img {\\n  height: 40px;\\n  align-self: center;\\n}\\n\\n.searchbar > img:hover {\\n  cursor: pointer;\\n}\\n\\n.options {\\n  display: grid;\\n  grid-template-columns: 1fr 18fr;\\n}\\n\\n.options > img {\\n  height: 40px;\\n  align-self: center;\\n  justify-self: end;\\n}\\n\\n.options > div {\\n  align-self: center;\\n  font-weight: bold;\\n}\\n\\n.result {\\n  display: grid;\\n  gap: 1vw;\\n}\\n\\n.info {\\n  display: grid;\\n  gap: 1vw;\\n  grid-template-columns: repeat(2, 1fr);\\n}\\n\\n.sunStats {\\n  grid-column: 1/3;\\n  padding-left: 1%;\\n}\\n\\n.basics {\\n  display: grid;\\n  grid-column: 1/3;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 1vw;\\n}\\n\\n.basics-info {\\n  grid-column: 1/2;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 2fr 3fr;\\n}\\n\\n.basics-info > div:nth-child(1) {\\n  grid-column: 1/3;\\n}\\n\\n.basics-info > div:nth-child(1) > p:first-child {\\n  font-size: 5rem;\\n}\\n\\n.basics-info > div:nth-child(1) > p:nth-child(2) {\\n  font-size: 2.5rem;\\n}\\n\\n.basics-info > div:nth-child(2) > p:first-child {\\n  font-size: 2rem;\\n  margin-bottom: 2vh;\\n}\\n\\n.basics-info > div:nth-child(2) > p:nth-child(2) {\\n  font-size: 2rem;\\n}\\n\\n.basics-info > div:nth-child(3) {\\n  display: flex;\\n  font-size: 3rem;\\n  justify-content: center;\\n  align-self: flex-start;\\n}\\n\\n.basics > div:nth-child(2) {\\n  display: flex;\\n  justify-content: center;\\n  border-radius: 5px;\\n}\\n\\n.basics > div:nth-child(2) > img {\\n  width: 100%;\\n  border-radius: 5px;\\n}\\n\\n.temperature {\\n  padding-left: 5%;\\n  padding-top: 5%;\\n}\\n\\n.temperature p {\\n  display: flex;\\n}\\n\\n.temperature > p:nth-child(2) {\\n  font-size: 4rem;\\n  margin-left: 10%;\\n  margin-top: 4%;\\n}\\n\\n.overview {\\n  display: grid;\\n}\\n\\n.overview > p {\\n  font-size: 3rem;\\n  align-self: center;\\n  justify-self: center;\\n}\\n\\n.sunStats {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: center;\\n  font-size: 1.7rem;\\n}\\n\\n.cloudStats,\\n.windStats {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 1.5rem;\\n}\\n\\n.gif > img {\\n  border-radius: 5px;\\n}\\n\\n.basics > div:first-child,\\n.temperature,\\n.overview,\\n.sunStats,\\n.cloudStats,\\n.windStats {\\n  border-radius: 5px;\\n  background-color: #eee;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aesthetics.js":
/*!***************************!*\
  !*** ./src/aesthetics.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _search_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-outline.svg */ \"./src/search-outline.svg\");\n/* harmony import */ var _thermometer_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thermometer-outline.svg */ \"./src/thermometer-outline.svg\");\n\n\n\n\nconst Aesthetics = {\n  searchbar: document.querySelector(\".searchbar\"),\n  options: document.querySelector(\".options\"),\n  addIcons() {\n    let searchIcon = new Image();\n    searchIcon.alt = \"Search Icon\";\n    searchIcon.src = _search_outline_svg__WEBPACK_IMPORTED_MODULE_1__;\n    this.searchbar.appendChild(searchIcon);\n\n    let temperatureIcon = new Image();\n    temperatureIcon.alt = \"Temperature Icon\";\n    temperatureIcon.src = _thermometer_outline_svg__WEBPACK_IMPORTED_MODULE_2__;\n    this.options.appendChild(temperatureIcon);\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Aesthetics);\n\n\n//# sourceURL=webpack://weather/./src/aesthetics.js?");

/***/ }),

/***/ "./src/handleUserInput.js":
/*!********************************!*\
  !*** ./src/handleUserInput.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _showData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showData */ \"./src/showData.js\");\n\n\n\nconst handleUserInput = {\n  weatherKey: \"8ae2d13e54ebef775efff2c52817a5e2\",\n  gifKey: \"ZSqLZBoP1L25pS03G478pjRBb0NESb0C\",\n  units: \"metric\",\n  handleSearchIcon() {\n    let searchbar = document.querySelector(\".searchbar > input\");\n    const units = document.querySelector(\".options > div > div > input\");\n    units.checked ? (this.units = \"metric\") : (this.units = \"imperial\");\n    if (searchbar.value) {\n      try {\n        getWeather(searchbar.value, handleUserInput.units);\n      } catch (error) {\n        console.log(error);\n      }\n    }\n  },\n};\n\nasync function getWeather(location, units) {\n  let apiPromise = await fetch(\n    `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${handleUserInput.weatherKey}&units=${units}`,\n    { mode: \"cors\" }\n  );\n  let apiPromiseResolved = await apiPromise.json();\n  let city = apiPromiseResolved.name;\n  let country = apiPromiseResolved.sys.country;\n  let timeNow = new Date().valueOf();\n  let offset = new Date().getTimezoneOffset() * 60 * 1000;\n  let dateAtCity = new Date(\n    timeNow + offset + apiPromiseResolved.timezone * 1000\n  );\n  let timeAtCity = dateAtCity.toLocaleTimeString();\n  let dateAtCitySimple = dateAtCity.toDateString();\n  let temperature = apiPromiseResolved.main.temp;\n  let temperatureFeels = apiPromiseResolved.main.feels_like;\n  let weather = apiPromiseResolved.weather[0].description;\n  let gifSrc = \"\";\n  try {\n    gifSrc = await getGif(weather);\n  } catch (error) {\n    console.log(error);\n  }\n  let rain1h = \"\";\n  let rain3h = \"\";\n  if (apiPromiseResolved.rain) {\n    if (apiPromiseResolved.rain[\"1h\"]) {\n      rain1h = apiPromiseResolved.rain[\"1h\"];\n    }\n    if (apiPromiseResolved.rain[\"3h\"]) {\n      rain3h = apiPromiseResolved.rain[\"3h\"];\n    }\n  }\n  let snow1h = \"\";\n  let snow3h = \"\";\n  if (apiPromiseResolved.snow) {\n    if (apiPromiseResolved.snow[\"1h\"]) {\n      snow1h = apiPromiseResolved.snow[\"1h\"];\n    }\n    if (apiPromiseResolved.snow[\"3h\"]) {\n      snow3h = apiPromiseResolved.snow[\"3h\"];\n    }\n  }\n  let sunrise = new Date(\n    new Date(\n      apiPromiseResolved.sys[\"sunrise\"] * 1000 +\n        apiPromiseResolved.timezone * 1000 +\n        offset\n    )\n  ).toLocaleTimeString();\n  let sunset = new Date(\n    new Date(\n      apiPromiseResolved.sys[\"sunset\"] * 1000 +\n        apiPromiseResolved.timezone * 1000 +\n        offset\n    )\n  ).toLocaleTimeString();\n  let cloudiness = apiPromiseResolved.clouds[\"all\"];\n  let wind = apiPromiseResolved.wind[\"speed\"];\n  (0,_showData__WEBPACK_IMPORTED_MODULE_1__.showOnInfo)(\n    units,\n    city,\n    country,\n    timeAtCity,\n    dateAtCitySimple,\n    temperature,\n    temperatureFeels,\n    weather,\n    rain1h,\n    rain3h,\n    snow1h,\n    snow3h,\n    sunrise,\n    sunset,\n    cloudiness,\n    wind,\n    gifSrc\n  );\n}\n\nasync function getGif(weather) {\n  let id = \"uymKgqrJ9Or60\";\n  if (weather.match(/rain/)) {\n    if (\n      weather.match(/\\D+(?=\\s)/)[0] == \"light\" ||\n      weather.match(/\\D+(?=\\s)/)[0] == \"drizzle\"\n    ) {\n      id = \"l0IrIkq7Q3iRII0hy\";\n    } else {\n      id = \"W0c3xcZ3F1d0EYYb0f\";\n    }\n  }\n  if (weather.match(/clouds/)) {\n    if (weather.match(/\\D+(?=\\s)/)[0] == \"overcast\") {\n      id = \"dWIau1ZRyIj3j6YEaL\";\n    }\n    if (\n      weather.match(/\\D+(?=\\s)/)[0] == \"few\" ||\n      weather.match(/\\D+(?=\\s)/)[0] == \"scattered\"\n    ) {\n      id = \"uOuiK4F5zZkZ2\";\n    }\n    if (weather.match(/\\D+(?=\\s)/)[0] == \"broken\") {\n      id = \"12eCo8gpSMMgrS\";\n    }\n  }\n  if (weather.match(/snow/)) {\n    if (weather.match(/\\D+(?=\\s)/)[0] == \"light\") {\n      id = \"3ohc11DpNMf7qnqxR6\";\n    } else {\n      id = \"JWegbsAWQS1YA\";\n    }\n  }\n  if (weather.match(/haze/)) {\n    id = \"r2OMuTCFo0rv2rgAL5\";\n  }\n  if (weather.match(/mist/)) {\n    id = \"mW03sTZVT9IY0\";\n  }\n  if (weather.match(/clear/)) {\n    id = \"RqSJ6nQVsOpxe\";\n  }\n  if (weather.match(/fog/)) {\n    id = \"oAbvMXvah1M0U\";\n  }\n  if (weather.match(/smoke/)) {\n    id = \"l2Je9dUI5LpzfHGTe\";\n  }\n  let apiPromise = await fetch(\n    `https://api.giphy.com/v1/gifs/${id}?api_key=${handleUserInput.gifKey}`,\n    { mode: \"cors\" }\n  );\n  let apiPromiseResolved = await apiPromise.json();\n  let src = apiPromiseResolved.data.images.original.url;\n  return src;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleUserInput);\n\n\n//# sourceURL=webpack://weather/./src/handleUserInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _aesthetics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aesthetics */ \"./src/aesthetics.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ \"./src/options.js\");\n/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleUserInput */ \"./src/handleUserInput.js\");\n\n\n\n\n\n_aesthetics__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addIcons();\n(0,_options__WEBPACK_IMPORTED_MODULE_2__.getOptions)();\n\nconst searchIcon = document.querySelector(\".searchbar > img\");\nsearchIcon.addEventListener(\"click\", _handleUserInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"].handleSearchIcon);\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getOptions\": () => (/* binding */ getOptions)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _handleUserInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleUserInput */ \"./src/handleUserInput.js\");\n\n\n\nconst optionsDiv = {\n  options: document.querySelector(\".options\"),\n  getTemperatureOptions() {\n    let temperatureOptions = document.createElement(\"div\");\n    let celsius = document.createElement(\"label\");\n    celsius.setAttribute(\"for\", \"celsius\");\n    let fahrenheit = document.createElement(\"label\");\n    fahrenheit.setAttribute(\"for\", \"fahrenheit\");\n    celsius.innerText = \"Celsius\";\n    fahrenheit.innerText = \"Fahrenheit\";\n    let celsiusRadio = document.createElement(\"input\");\n    celsiusRadio.setAttribute(\"type\", \"radio\");\n    celsiusRadio.setAttribute(\"id\", \"celsius\");\n    celsiusRadio.setAttribute(\"checked\", true);\n    celsiusRadio.addEventListener(\"change\", () =>\n      _handleUserInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"].handleSearchIcon()\n    );\n    celsius.setAttribute(\"value\", \"metric\");\n    celsiusRadio.setAttribute(\"name\", \"temperature\");\n    let fahrenheitRadio = document.createElement(\"input\");\n    fahrenheitRadio.setAttribute(\"type\", \"radio\");\n    fahrenheitRadio.setAttribute(\"id\", \"fahrenheit\");\n    fahrenheitRadio.setAttribute(\"name\", \"temperature\");\n    fahrenheitRadio.addEventListener(\"change\", () =>\n      _handleUserInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"].handleSearchIcon()\n    );\n    let divCelsius = document.createElement(\"div\");\n    let divFahrenheit = document.createElement(\"div\");\n    divCelsius.appendChild(celsius);\n    divCelsius.appendChild(celsiusRadio);\n    divFahrenheit.appendChild(fahrenheit);\n    divFahrenheit.appendChild(fahrenheitRadio);\n    temperatureOptions.appendChild(divCelsius);\n    temperatureOptions.appendChild(divFahrenheit);\n    this.options.appendChild(temperatureOptions);\n  },\n};\n\nfunction getOptions() {\n  optionsDiv.getTemperatureOptions();\n}\n\n\n\n\n//# sourceURL=webpack://weather/./src/options.js?");

/***/ }),

/***/ "./src/showData.js":
/*!*************************!*\
  !*** ./src/showData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showGif\": () => (/* binding */ showGif),\n/* harmony export */   \"showOnInfo\": () => (/* binding */ showOnInfo)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst info = document.querySelector(\".info\");\nconst gif = document.querySelector(\".gif\");\n\nfunction showOnInfo(\n  units,\n  city,\n  country,\n  time,\n  date,\n  temp,\n  tempFeels,\n  weather,\n  rainVol1h,\n  rainVol3h,\n  snowVol1h,\n  snowVol3h,\n  sunrise,\n  sunset,\n  cloudiness,\n  wind,\n  gifSrc\n) {\n  let tempUnit = \"\";\n  units == \"metric\" ? (tempUnit = \"°C\") : (tempUnit = \"°F\");\n  clean(info);\n  let basics = document.createElement(\"div\");\n  basics.classList.add(\"basics\");\n  let temperature = document.createElement(\"div\");\n  temperature.classList.add(\"temperature\");\n  let overview = document.createElement(\"div\");\n  overview.classList.add(\"overview\");\n  let sunStats = document.createElement(\"div\");\n  sunStats.classList.add(\"sunStats\");\n  let cloudStats = document.createElement(\"div\");\n  cloudStats.classList.add(\"cloudStats\");\n  let windStats = document.createElement(\"div\");\n  windStats.classList.add(\"windStats\");\n\n  let basicsCity = document.createElement(\"p\");\n  basicsCity.innerText = `${city}`;\n  let basicsCountry = document.createElement(\"p\");\n  basicsCountry.innerText = `${country}`;\n  let basicsTime = document.createElement(\"p\");\n  basicsTime.innerText = `${time}`;\n  let basicsDate = document.createElement(\"p\");\n  basicsDate.innerText = `${date}`;\n  let retrievalTime = document.createElement(\"p\");\n  retrievalTime.innerText = `(Retrieved on ${new Date().toLocaleString()})`;\n  let tempTemperature = document.createElement(\"p\");\n  tempTemperature.innerText = `${temp} ${tempUnit}`;\n\n  let basicsInfo = document.createElement(\"div\");\n  basicsInfo.classList.add(\"basics-info\");\n  let basicsTitle = document.createElement(\"div\");\n  let basicsDetails = document.createElement(\"div\");\n  let basicsTemperature = document.createElement(\"div\");\n  basicsTitle.appendChild(basicsCity);\n  basicsTitle.appendChild(basicsCountry);\n  basicsInfo.appendChild(basicsTitle);\n  basicsDetails.appendChild(basicsTime);\n  basicsDetails.appendChild(basicsDate);\n  basicsDetails.appendChild(retrievalTime);\n  basicsInfo.appendChild(basicsDetails);\n  basicsTemperature.appendChild(tempTemperature);\n  basicsInfo.appendChild(basicsTemperature);\n  basics.appendChild(basicsInfo);\n\n  let gif = document.createElement(\"div\");\n  basics.appendChild(gif);\n\n  info.appendChild(basics);\n\n  let tempFeelsLikeLabel = document.createElement(\"p\");\n  tempFeelsLikeLabel.innerText = `Feels like: `;\n  let tempFeelsLike = document.createElement(\"p\");\n  tempFeelsLike.innerText = `${tempFeels} ${tempUnit}`;\n  temperature.appendChild(tempFeelsLikeLabel);\n  temperature.appendChild(tempFeelsLike);\n  info.appendChild(temperature);\n\n  let overviewWeather = document.createElement(\"p\");\n  overviewWeather.innerText = `${weather}`;\n  overview.appendChild(overviewWeather);\n  if (rainVol1h) {\n    let overviewRain1h = document.createElement(\"p\");\n    overviewRain1h.innerText = `${rainVol1h} mm`;\n    overview.appendChild(overviewRain1h);\n  }\n  if (rainVol3h) {\n    let overviewRain3h = document.createElement(\"p\");\n    overviewRain3h.innerText = `${rainVol3h} mm`;\n    overview.appendChild(overviewRain3h);\n  }\n  if (snowVol1h) {\n    let overviewSnow1h = document.createElement(\"p\");\n    overviewSnow1h.innerText = `${snowVol1h} mm`;\n    overview.appendChild(overviewSnow1h);\n  }\n  if (snowVol3h) {\n    let overviewSnow3h = document.createElement(\"p\");\n    overviewSnow3h.innerText = `${snowVol3h} mm`;\n    overview.appendChild(overviewSnow3h);\n  }\n  info.appendChild(overview);\n\n  let sunStatsSunrise = document.createElement(\"p\");\n  sunStatsSunrise.innerText = `Sunrise: ${sunrise}`;\n  let sunStatsSunset = document.createElement(\"p\");\n  sunStatsSunset.innerText = `Sunset: ${sunset}`;\n  sunStats.appendChild(sunStatsSunrise);\n  sunStats.appendChild(sunStatsSunset);\n  info.appendChild(sunStats);\n\n  let cloudinessClouds = document.createElement(\"p\");\n  cloudinessClouds.innerText = `Cloudiness: ${cloudiness} %`;\n  cloudStats.appendChild(cloudinessClouds);\n  info.appendChild(cloudStats);\n\n  let windStatsSpeed = document.createElement(\"p\");\n  windStatsSpeed.innerText = `Wind Speed: ${wind} m/s`;\n  windStats.appendChild(windStatsSpeed);\n  info.appendChild(windStats);\n\n  showGif(gif, gifSrc);\n}\n\nfunction showGif(div, src) {\n  clean(div);\n  let image = new Image();\n  image.alt = \"weather gif\";\n  image.src = src;\n  div.append(image);\n}\n\nfunction clean(parent) {\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather/./src/showData.js?");

/***/ }),

/***/ "./src/search-outline.svg":
/*!********************************!*\
  !*** ./src/search-outline.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4be0f579536375deb314.svg\";\n\n//# sourceURL=webpack://weather/./src/search-outline.svg?");

/***/ }),

/***/ "./src/thermometer-outline.svg":
/*!*************************************!*\
  !*** ./src/thermometer-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9dcd07d19c17b50e20b.svg\";\n\n//# sourceURL=webpack://weather/./src/thermometer-outline.svg?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
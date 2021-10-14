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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".console-frame {\\n  height: 60%;\\n  border-radius: 10px;\\n}\\n.console::-webkit-scrollbar {\\n  /* Chrome, Safari 対応 */\\n  display: none;\\n}\\n\\n.console {\\n  border-radius: 10px;\\n  overflow-y: scroll;\\n  height: 80%;\\n}\\n\\nh1 {\\n  color: #32363d;\\n}\\n\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np {\\n  margin: 0;\\n  color: rgb(238, 238, 238);\\n}\\n\\n.bg-header {\\n  background: #2a69ae;\\n}\\n\\n.bg-body {\\n  background-color: rgb(219, 219, 219);\\n}\\n\\n.bg-result {\\n  background: #32363d;\\n}\\n\\n.vh-5 {\\n  height: 5%;\\n}\\n\\n.red {\\n  background-color: red;\\n  width: 15px;\\n  height: 15px;\\n  border-radius: 50%;\\n}\\n\\n.yellow {\\n  background-color: yellow;\\n  width: 15px;\\n  height: 15px;\\n  border-radius: 50%;\\n}\\n\\n.green {\\n  background-color: green;\\n  width: 15px;\\n  height: 15px;\\n  border-radius: 50%;\\n}\\n\\n.neumophism-input {\\n  background-color: #bdbdbd;\\n  border: none;\\n  border-radius: 5px;\\n  padding: 0.375rem 0.75rem;\\n}\\n\\n.neumophism-console {\\n  border-radius: 10px;\\n  background: #dedede;\\n  box-shadow: 10px 10px 30px #bdbdbd, -10px -10px 30px #ffffff;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://cli_app/./src/style.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://cli_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://cli_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./style.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://cli_app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://cli_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://cli_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://cli_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://cli_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://cli_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://cli_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Cli.js":
/*!********************!*\
  !*** ./src/Cli.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cli)\n/* harmony export */ });\n/* harmony import */ var _commandHistory_HisotyStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commandHistory/HisotyStack */ \"./src/commandHistory/HisotyStack.js\");\n/* harmony import */ var _commandHistory_TempLogStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commandHistory/TempLogStack */ \"./src/commandHistory/TempLogStack.js\");\n/* harmony import */ var _commands_CommandCreater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commands/CommandCreater */ \"./src/commands/CommandCreater.js\");\n/* harmony import */ var _filesystem_FileSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filesystem/FileSystem */ \"./src/filesystem/FileSystem.js\");\n/* harmony import */ var _keys_KeyStrategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keys/KeyStrategy */ \"./src/keys/KeyStrategy.js\");\n\n\n\n\n\n\nclass Cli {\n  constructor() {\n    this.config = {\n      CLIOutputDiv: document.getElementById('CLIOutputDiv'),\n      CLITextInput: document.getElementById('CLITextInput')\n    };\n    this.filesystem = new _filesystem_FileSystem__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.commandCreater = new _commands_CommandCreater__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.filesystem);\n    this.history = new _commandHistory_HisotyStack__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.tempLog = new _commandHistory_TempLogStack__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  executeKey = (event) => {\n    if (event.key != 'Enter' && event.key != 'ArrowUp' && event.key != 'ArrowDown') {\n      return;\n    }\n    const strategy = new _keys_KeyStrategy__WEBPACK_IMPORTED_MODULE_4__[\"default\"](event.key);\n    strategy.key.execute(this);\n  }\n\n  evaluateCLICommand(tokens) {\n    const command = this.commandCreater.getCommand(tokens[0]);\n    return command.execute(tokens.slice(1));\n  }\n\n  adjustTop() {\n    this.config.CLIOutputDiv.scrollTop = this.config.CLIOutputDiv.scrollHeight;\n  }\n\n  appendHistory(command) {\n    this.history.push(command);\n  }\n\n  getTextInput() {\n    return this.config.CLITextInput;\n  }\n\n  getInputValue() {\n    return this.getTextInput().value;\n  }\n\n  getOutputDiv() {\n    return this.config.CLIOutputDiv;\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/Cli.js?");

/***/ }),

/***/ "./src/CommandLineParser.js":
/*!**********************************!*\
  !*** ./src/CommandLineParser.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommandLineParser)\n/* harmony export */ });\nclass CommandLineParser {\n  static execute(CLIInputString) {\n    const tokenArray = CLIInputString.trim().split(' ');\n    return tokenArray;\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/CommandLineParser.js?");

/***/ }),

/***/ "./src/CommandLineValidator.js":
/*!*************************************!*\
  !*** ./src/CommandLineValidator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommandLineValidator)\n/* harmony export */ });\n/* harmony import */ var _commands_AbstractCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands/AbstractCommand */ \"./src/commands/AbstractCommand.js\");\n/* harmony import */ var _commands_CommandCreater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands/CommandCreater */ \"./src/commands/CommandCreater.js\");\n\n\n\nclass CommandLineValidator {\n  static execute(cli, tokens) {\n    const commandString = tokens[0];\n    const validatorResponse = CommandLineValidator.universalValidation_(commandString);\n    if (validatorResponse.errorMessage !== '') {\n      return validatorResponse;\n    }\n\n    const command = cli.commandCreater.getCommand(commandString);\n    const args = tokens.slice(1);\n    if (command.argContraint == _commands_AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"].NO_ARG_CONSTRAINT) {\n      return CommandLineValidator.noArgValidation_(commandString, args);\n    } else if (command.argContraint == _commands_AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SINGLE_ARG_CONSTRAINT) {\n      return CommandLineValidator.singleArgValidation_(commandString, args);\n    }\n  }\n\n  static universalValidation_(command) {\n    if (command in _commands_CommandCreater__WEBPACK_IMPORTED_MODULE_1__[\"default\"].VALID_COMMANDS) {\n      return { 'isValid': true, 'errorMessage': '' };\n    }\n    return { 'isValid': false, errorMessage: 'Only supports the following commands < touch,mkdir,ls,cd,pwd,print,setContent,rm,mv,cp >' };\n  }\n\n  static noArgValidation_(command, args) {\n    if (command != \"pwd\" && command != \"ls\") {\n      return { 'isValid': false, 'errorMessage': `command not found: ${command}` };\n    }\n\n    if (args.length !== 0) {\n      return { 'isValid': false, 'errorMessage': `invalid arguments: ${command} can't have arguments` };\n    }\n    return { 'isValid': true, 'errorMessage': '' };\n  }\n\n  static singleArgValidation_(command, args) {\n    if (args.length !== 1) {\n      return { 'isValid': false, 'errorMessage': `invalid arguments: ${command} can only have one argument` };\n    }\n    return { 'isValid': true, 'errorMessage': '' };\n  }\n}\n\n\n//# sourceURL=webpack://cli_app/./src/CommandLineValidator.js?");

/***/ }),

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\n  static init(cli) {\n    const cliTextInput = cli.config.CLITextInput;\n    cliTextInput.addEventListener('keyup', (event) => {\n      cli.executeKey(event);\n    });\n  }\n\n  static appendEchoParagraph(cli) {\n    const parentDiv = cli.getOutputDiv();\n    const inputEle = cli.getTextInput();\n    const command = cli.commandCreater.getCommand('pwd');\n    parentDiv.innerHTML+=\n      `<p class=\"m-0\">\n          <span style='color:green'>root</span>\n          <span style='color:magenta'>@</span>\n          <span style='color:blue'>ryu</span>\n          : ${command.execute()} ${inputEle.value}\n      </p>`;\n  }\n\n  static appendResultParagraph(parentDiv, isValid, message) {\n    if (message === undefined) {\n      return;\n    }\n\n    let promptName;\n    let promptColor;\n    if (isValid) {\n      promptName = 'FileSystem';\n      promptColor = 'turquoise';\n    } else {\n      promptName = 'FileSystemError';\n      promptColor = 'warn';\n    }\n    parentDiv.innerHTML+=\n      `<p class=\"m-0 ${promptColor}\">\n          ${promptName}: ${message}\n      </p>`;\n  }\n}\n\n\n//# sourceURL=webpack://cli_app/./src/Controller.js?");

/***/ }),

/***/ "./src/commandHistory/HisotyStack.js":
/*!*******************************************!*\
  !*** ./src/commandHistory/HisotyStack.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HistoryStack)\n/* harmony export */ });\n/* harmony import */ var _HistoryNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HistoryNode */ \"./src/commandHistory/HistoryNode.js\");\n\n\nclass HistoryStack {\n  constructor() {\n    this.head = null;\n  }\n\n  push(command) {\n    const temp = this.head;\n    this.head = new _HistoryNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"](command);\n    this.head.next = temp;\n  }\n\n  peek(){\n      if(this.head == null) return null;\n      return this.head.command;\n  }\n\n  pop(){\n    const temp = this.head;\n    if (temp == null) {\n      return;\n    }\n    this.head = this.head.next;\n    return temp.command;\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commandHistory/HisotyStack.js?");

/***/ }),

/***/ "./src/commandHistory/HistoryNode.js":
/*!*******************************************!*\
  !*** ./src/commandHistory/HistoryNode.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HistoryNode)\n/* harmony export */ });\nclass HistoryNode {\n  constructor(command) {\n    this.command = command;\n    this.next = null;\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commandHistory/HistoryNode.js?");

/***/ }),

/***/ "./src/commandHistory/TempLogStack.js":
/*!********************************************!*\
  !*** ./src/commandHistory/TempLogStack.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TempLogStack)\n/* harmony export */ });\n/* harmony import */ var _HistoryNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HistoryNode */ \"./src/commandHistory/HistoryNode.js\");\n\n\nclass TempLogStack {\n  constructor() {\n    this.head = null;\n  }\n\n  push(command) {\n    const temp = this.head;\n    this.head = new _HistoryNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"](command);\n    this.head.next = temp;\n  }\n\n  peek(){\n      if(this.head == null) return null;\n      return this.head.command;\n  }\n\n  pop(){\n      let temp = this.head;\n      this.head = this.head.next;\n      return temp.command;\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commandHistory/TempLogStack.js?");

/***/ }),

/***/ "./src/commands/AbstractCommand.js":
/*!*****************************************!*\
  !*** ./src/commands/AbstractCommand.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AbstractCommand)\n/* harmony export */ });\nclass AbstractCommand {\n  static NO_ARG_CONSTRAINT = 'noArg';\n  static SINGLE_ARG_CONSTRAINT = 'singleArg';\n  static DOUBLE_ARG_CONSTRAINT = 'doubleArg';\n\n  constructor(filesystem){\n    this.filesystem = filesystem;\n    this.argContraint = null;\n  }\n\n  execute () {\n    throw Error(`${Function.name} is not implemented.`);\n  }\n\n  getCurrentDirsChildren_() {\n    const currentDir = this.getCurrentDir_();\n    return currentDir.getChildren();\n  }\n\n  getCurrentDir_() {\n    return this.filesystem.currentDir;\n  }\n\n  getRootDir_() {\n    return this.filesystem.root;\n  }\n\n  getDirName_() {\n    const currentDir = this.getCurrentDir_();\n    return currentDir.getName();\n  }\n\n  traverse_(path) {\n    if(this.isAbsolute_(path)) {\n      return this.filesystem.traverse(this.getRootDir_(), path);\n    } else {\n      return this.filesystem.traverse(this.getCurrentDir_(), path);\n    }\n  }\n\n  isAbsolute_(path) {\n    if (path.length === 0) {\n      return;\n    }\n    if (path[0] === '') {\n      path.shift();\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  getPathArr_(pathString) {\n    return pathString.split('/');\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commands/AbstractCommand.js?");

/***/ }),

/***/ "./src/commands/Cd.js":
/*!****************************!*\
  !*** ./src/commands/Cd.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cd)\n/* harmony export */ });\n/* harmony import */ var _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCommand */ \"./src/commands/AbstractCommand.js\");\n\n\nclass Cd extends _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(filesystem) {\n    super(filesystem);\n    this.argContraint = _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SINGLE_ARG_CONSTRAINT;\n  }\n\n  execute(args) {\n    const path = this.getPathArr_(args[0]);\n    if (path[0] === '..' && this.getDirName_() === 'root') {\n      return 'root directory does not have a parent directory';\n    }\n    if (path.length === 1 && path[0] === '..') {\n      this.filesystem.currentDir = this.getParentDir_();\n      return;\n    }\n\n    if (path[0] === '.') {\n      path = path.slice(1);\n    }\n    const traverseResponse = this.traverse_(path);\n    if (traverseResponse.errorMessage !== '') {\n      return traverseResponse.errorMessage;\n    }\n    this.filesystem.currentDir = traverseResponse.directory;\n  }\n\n  getParentDir_() {\n    return this.getCurrentDir_().parent;\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commands/Cd.js?");

/***/ }),

/***/ "./src/commands/CommandCreater.js":
/*!****************************************!*\
  !*** ./src/commands/CommandCreater.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommandCreater)\n/* harmony export */ });\n/* harmony import */ var _Cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cd */ \"./src/commands/Cd.js\");\n/* harmony import */ var _Ls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ls */ \"./src/commands/Ls.js\");\n/* harmony import */ var _Mkdir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mkdir */ \"./src/commands/Mkdir.js\");\n/* harmony import */ var _Pwd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pwd */ \"./src/commands/Pwd.js\");\n/* harmony import */ var _Touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Touch */ \"./src/commands/Touch.js\");\n\n\n\n\n\n\nclass CommandCreater{\n  static VALID_COMMANDS = Object.freeze({\n    ls: _Ls__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    mkdir: _Mkdir__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    touch: _Touch__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    pwd: _Pwd__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    cd: _Cd__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    // 今後拡張予定\n    // move: Move,\n    // copy: Copy,\n    // rm: Rm,\n    // cat: Cat,\n  })\n\n  constructor(filesystem) {\n    this.commands = {};\n    for (let command in CommandCreater.VALID_COMMANDS) {\n      this.commands[command] = new CommandCreater.VALID_COMMANDS[command](filesystem);\n    }\n  }\n\n  getCommand(command) {\n    if (!this.commands[command]) throw Error(`Command Not Found ${command}`);\n\n    return this.commands[command];\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commands/CommandCreater.js?");

/***/ }),

/***/ "./src/commands/Ls.js":
/*!****************************!*\
  !*** ./src/commands/Ls.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ls)\n/* harmony export */ });\n/* harmony import */ var _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCommand */ \"./src/commands/AbstractCommand.js\");\n\n\nclass Ls extends _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(fileSystem) {\n    super(fileSystem);\n    this.argContraint = _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"].NO_ARG_CONSTRAINT;\n  }\n\n  execute(args) {\n    const includedHiddenFile = args.length != 0 && args[0] == '-a'\n    const currentDir = this.getCurrentDir_();\n    return currentDir.printList(includedHiddenFile);\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commands/Ls.js?");

/***/ }),

/***/ "./src/commands/Mkdir.js":
/*!*******************************!*\
  !*** ./src/commands/Mkdir.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mkdir)\n/* harmony export */ });\n/* harmony import */ var _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCommand */ \"./src/commands/AbstractCommand.js\");\n/* harmony import */ var _filesystem_Directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filesystem/Directory */ \"./src/filesystem/Directory.js\");\n\n\n\nclass Mkdir extends _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(filesystem) {\n    super(filesystem);\n    this.argContraint = _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SINGLE_ARG_CONSTRAINT;\n  }\n\n  execute(args) {\n    const dirName = args[0];\n    const currentDirsChildren = this.getCurrentDirsChildren_();\n    if (currentDirsChildren.includes(dirName)) {\n      return `There is already ${dirName} in this directory.`;\n    } else {\n      currentDirsChildren.append(new _filesystem_Directory__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.getCurrentDir_(), dirName));\n    }\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commands/Mkdir.js?");

/***/ }),

/***/ "./src/commands/Pwd.js":
/*!*****************************!*\
  !*** ./src/commands/Pwd.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pwd)\n/* harmony export */ });\n/* harmony import */ var _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCommand */ \"./src/commands/AbstractCommand.js\");\n\n\nclass Pwd extends _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(filesystem){\n    super(filesystem);\n    this.argContraint = _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"].NO_ARG_CONSTRAINT;\n  }\n\n  execute(_args) {\n    const currentDir = this.getCurrentDir_();\n    return currentDir.getAbsolutePath();\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commands/Pwd.js?");

/***/ }),

/***/ "./src/commands/Touch.js":
/*!*******************************!*\
  !*** ./src/commands/Touch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Touch)\n/* harmony export */ });\n/* harmony import */ var _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractCommand */ \"./src/commands/AbstractCommand.js\");\n/* harmony import */ var _filesystem_File__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filesystem/File */ \"./src/filesystem/File.js\");\n\n\n\nclass Touch extends _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(filesystem) {\n    super(filesystem);\n    this.argContraint = _AbstractCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SINGLE_ARG_CONSTRAINT;\n  }\n\n  execute(args) {\n    const fileName = args[0];\n    const currentDirsChildren = this.getCurrentDirsChildren_();\n    if (currentDirsChildren.includes(fileName)) {\n      const file = currentDirsChildren.getNode(fileName);\n      file.updatedDate = new Date();\n    } else {\n      currentDirsChildren.append(new _filesystem_File__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.getCurrentDir_(), fileName));\n    }\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/commands/Touch.js?");

/***/ }),

/***/ "./src/filesystem/AbstractFileSystemNode.js":
/*!**************************************************!*\
  !*** ./src/filesystem/AbstractFileSystemNode.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AbstractFileSystemNode)\n/* harmony export */ });\nclass AbstractFileSystemNode {\n  constructor(parent, name) {\n    this.name = name;\n    this.updatedDate = new Date();\n    this.parent = parent;\n    this.next = null;\n    this.prev = null;\n  }\n\n  getName(includedHiddenFile){\n    if (includedHiddenFile) {\n      return this.name;\n    }\n    return this.isHidden? \"\": this.name;\n  }\n\n  toString() {\n    throw Error(`${Function.name} is not implemented.`);\n  }\n\n  printList(){\n    throw Error(`${Function.name} is not implemented.`);\n  }\n\n  getCurrentDir_(){\n    throw Error(`${Function.name} is not implemented.`);\n  }\n\n  copyDeeply(){\n    throw Error(`${Function.name} is not implemented.`);\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/filesystem/AbstractFileSystemNode.js?");

/***/ }),

/***/ "./src/filesystem/Directory.js":
/*!*************************************!*\
  !*** ./src/filesystem/Directory.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Directory)\n/* harmony export */ });\n/* harmony import */ var _AbstractFileSystemNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFileSystemNode */ \"./src/filesystem/AbstractFileSystemNode.js\");\n/* harmony import */ var _LinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkedList */ \"./src/filesystem/LinkedList.js\");\n\n\n\nclass Directory extends _AbstractFileSystemNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(parent, name){\n    super(parent, name);\n    this.children = new _LinkedList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  toString() {\n    return this.name;\n  }\n\n  getCurrentDir_() {\n    return this;\n  }\n\n  printList(includedHiddenFile) {\n    let result = '';\n    let iterator = this.children.head;\n    while(iterator) {\n      result += iterator.getName(includedHiddenFile) + ' ';\n      iterator = iterator.next;\n    }\n    return result;\n  }\n\n  copyDeeply() {\n    const copiedDir = new Directory(this.parent, this.fileName)\n    copiedDir.updateDate = new Date();\n    copiedDir.children = this.children.deepCopy()\n    return copiedDir;\n  }\n\n  updateFileDate(fileName) {\n    if(this.children.includes(fileName)){\n      const file = this.children.getNode(fileName);\n      file.updateDate = new Date();\n      return;\n    }\n    this.children.append(new File(this, fileName));\n  }\n\n  deleteNode(name) {\n    return this.children.delete(name);\n  }\n\n  getAbsolutePath() {\n    let currentDir = this;\n    let result = '';\n    while(currentDir){\n      result = `${currentDir.getName()}/${result}`;\n      currentDir = currentDir.parent;\n    }\n    return result;\n  }\n\n  appendNode(node) {\n    this.children.append(node);\n  }\n\n  getChildren() {\n    return this.children;\n  }\n\n  getNodeUnderCurrentDir(node) {\n    return this.children.getNode(node);\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/filesystem/Directory.js?");

/***/ }),

/***/ "./src/filesystem/File.js":
/*!********************************!*\
  !*** ./src/filesystem/File.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ File)\n/* harmony export */ });\n/* harmony import */ var _AbstractFileSystemNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFileSystemNode */ \"./src/filesystem/AbstractFileSystemNode.js\");\n\n\nclass File extends _AbstractFileSystemNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(parent, name){\n    super(parent, name)\n    this.isHidden = this.name.startsWith(\".\");\n  }\n\n  toString() {\n    return `File Name: ${this.name}  Updated At: ${this.updatedDate.toLocaleDateString()}`;\n  }\n\n  getCurrentDir_() {\n    throw Error(`${this.name} is not directory.`);\n  }\n\n  printList() {\n    return this.name;\n  }\n\n  copyDeeply(){\n    const copiedFile = new File(this.parent, this.name);\n    copiedFile.updatedDate = new Date();\n    return copiedFile;\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/filesystem/File.js?");

/***/ }),

/***/ "./src/filesystem/FileSystem.js":
/*!**************************************!*\
  !*** ./src/filesystem/FileSystem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FileSystem)\n/* harmony export */ });\n/* harmony import */ var _Directory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Directory */ \"./src/filesystem/Directory.js\");\n\n\nclass FileSystem {\n  constructor(){\n    this.root = new _Directory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](null, 'root');\n    this.currentDir = this.root;\n  }\n\n  traverse(currentDir, path) {\n    if (currentDir === null) {\n      return { directory: null, errorMessage: 'No such file or directory' };\n    }\n    if (path.length === 0) {\n      return { directory: currentDir, errorMessage: '' };\n    }\n    return this.traverse(currentDir.getNodeUnderCurrentDir(path.shift()), path);\n  }\n}\n\n\n\n//# sourceURL=webpack://cli_app/./src/filesystem/FileSystem.js?");

/***/ }),

/***/ "./src/filesystem/LinkedList.js":
/*!**************************************!*\
  !*** ./src/filesystem/LinkedList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedList)\n/* harmony export */ });\nclass LinkedList {\n  constructor() {\n    this.head = null;\n    this.tail = null;\n  }\n\n  append(node) {\n    if (this.tail === null) {\n      this.tail = node;\n      this.head = this.tail;\n      return;\n    }\n    this.tail.next = node;\n    node.next = null;\n    node.prev = this.tail;\n    this.tail = node;\n  };\n\n  delete(name) {\n    if (this.head === null) {\n      return null;\n    }\n    if (this.head.name === name) {\n      const temp = this.head;\n      this.head = this.head.next;\n      temp.next = null;\n      return temp;\n    }\n    let iterator = this.head;\n    while (iterator.next) {\n      if (iterator.next.name === name) {\n        const temp = iterator.next;\n        iterator.next = iterator.next.next;\n        temp.next = null;\n        return temp;\n      }\n      iterator = iterator.next\n    }\n    return null;\n  }\n\n  includes(name) {\n    if (this.head === null) {\n      return false;\n    }\n    let iterator = this.head;\n    while (iterator) {\n      if (iterator.name === name) {\n        return true;\n      }\n      iterator = iterator.next;\n    }\n    return false;\n  }\n\n  getNode(name) {\n    if (this.head === null) {\n      return null;\n    }\n    let iterator = this.head;\n    while (iterator) {\n      if (iterator.name === name) {\n          return iterator;\n      }\n      iterator = iterator.next;\n    }\n    return null;\n  }\n\n  deepCopy() {\n    let copiedList = new LinkedList();\n    let iterator = this.head;\n    while (iterator != null) {\n      if (iterator instanceof File) {\n        copiedList.append(new File(iterator.parent, iterator.name));\n      }\n      if (iterator instanceof Directory && iterator.children.head === null) {\n        copiedList.append(new Directory(iterator.parent, iterator.name));\n      }\n      if (iterator instanceof Directory) {\n        iterator.children.deepCopy();\n      }\n      iterator = iterator.next;\n    }\n    return copiedList;\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/filesystem/LinkedList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Cli__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cli */ \"./src/Cli.js\");\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Controller */ \"./src/Controller.js\");\n\n\n\n\nconst cli = new _Cli__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n_Controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init(cli);\n\n//# sourceURL=webpack://cli_app/./src/index.js?");

/***/ }),

/***/ "./src/keys/KeyArrowDown.js":
/*!**********************************!*\
  !*** ./src/keys/KeyArrowDown.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyArrowDown)\n/* harmony export */ });\nclass KeyArrowDown {\n  execute(cli) {\n    const displayedCommand = cli.tempLog.peek();\n    if (displayedCommand == null) {\n      return;\n    }\n    cli.history.push(cli.tempLog.pop());\n    cli.config.CLITextInput.value = cli.tempLog.peek();\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/keys/KeyArrowDown.js?");

/***/ }),

/***/ "./src/keys/KeyArrowUp.js":
/*!********************************!*\
  !*** ./src/keys/KeyArrowUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyArrowUp)\n/* harmony export */ });\nclass KeyArrowUp {\n  execute(cli) {\n    const previousCommand = cli.history.peek();\n    if(previousCommand == null){\n      return;\n    }\n    cli.config.CLITextInput.value = previousCommand;\n    cli.tempLog.push(cli.history.pop());\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/keys/KeyArrowUp.js?");

/***/ }),

/***/ "./src/keys/KeyEnter.js":
/*!******************************!*\
  !*** ./src/keys/KeyEnter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyEnter)\n/* harmony export */ });\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controller */ \"./src/Controller.js\");\n/* harmony import */ var _CommandLineParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CommandLineParser */ \"./src/CommandLineParser.js\");\n/* harmony import */ var _CommandLineValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CommandLineValidator */ \"./src/CommandLineValidator.js\");\n\n\n\n\nclass KeyEnter {\n  execute(cli) {\n    const inputValue = cli.getInputValue();\n    if(inputValue === '') {\n      _Controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendEchoParagraph(cli);\n    } else {\n      const parsedCLIArray = _CommandLineParser__WEBPACK_IMPORTED_MODULE_1__[\"default\"].execute(inputValue);\n      if (parsedCLIArray.length !== 0) {\n        cli.appendHistory(inputValue);\n      }\n\n      _Controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendEchoParagraph(cli);\n      cli.getTextInput().value = '';\n\n      const validatorResponse = _CommandLineValidator__WEBPACK_IMPORTED_MODULE_2__[\"default\"].execute(cli, parsedCLIArray);\n      const resultMessage = this.calculateResultMessage_(validatorResponse, cli, parsedCLIArray);\n      _Controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendResultParagraph(cli.getOutputDiv(), validatorResponse.isValid, resultMessage);\n    }\n    cli.adjustTop();\n  }\n\n  calculateResultMessage_(validatorResponse, cli, parsedCLIArray) {\n    if (validatorResponse.isValid === false) {\n      return validatorResponse.errorMessage;\n    } else {\n      return cli.evaluateCLICommand(parsedCLIArray);\n    }\n  }\n}\n\n//# sourceURL=webpack://cli_app/./src/keys/KeyEnter.js?");

/***/ }),

/***/ "./src/keys/KeyStrategy.js":
/*!*********************************!*\
  !*** ./src/keys/KeyStrategy.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyStrategy)\n/* harmony export */ });\n/* harmony import */ var _KeyEnter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyEnter */ \"./src/keys/KeyEnter.js\");\n/* harmony import */ var _KeyArrowUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyArrowUp */ \"./src/keys/KeyArrowUp.js\");\n/* harmony import */ var _KeyArrowDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyArrowDown */ \"./src/keys/KeyArrowDown.js\");\n\n\n\n\nclass KeyStrategy {\n  constructor(key) {\n    this.key = this.selectKey(key);\n  }\n\n  // private method\n  selectKey(key) {\n    if (key =='Enter') {\n      return new _KeyEnter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n    else if(key == 'ArrowUp'){\n      return new _KeyArrowUp__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n    else if (key == 'ArrowDown') {\n      return new _KeyArrowDown__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://cli_app/./src/keys/KeyStrategy.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
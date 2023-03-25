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

/***/ "./src/assets/style/style.css":
/*!************************************!*\
  !*** ./src/assets/style/style.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://task1/./src/assets/style/style.css?");

/***/ }),

/***/ "./src/callbacks/DOM/DOMContentLoadedCallback.js":
/*!*******************************************************!*\
  !*** ./src/callbacks/DOM/DOMContentLoadedCallback.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMContentLoadedCallback\": () => (/* binding */ DOMContentLoadedCallback)\n/* harmony export */ });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ \"./src/components/index.js\");\n\r\n\r\nfunction DOMContentLoadedCallback () {\r\n  document.body.appendChild(_components__WEBPACK_IMPORTED_MODULE_0__.converter)\r\n}\r\n\n\n//# sourceURL=webpack://task1/./src/callbacks/DOM/DOMContentLoadedCallback.js?");

/***/ }),

/***/ "./src/callbacks/converterInputCallback.js":
/*!*************************************************!*\
  !*** ./src/callbacks/converterInputCallback.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"converterInputCallback\": () => (/* binding */ converterInputCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers_setConvertValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/setConvertValue */ \"./src/helpers/setConvertValue.js\");\n\r\n\r\nfunction converterInputCallback (event) {\r\n  const value = event.target.value\r\n\r\n  // eslint-disable-next-line no-restricted-globals\r\n  if (isNaN(value)) {\r\n    this.elems['input-to'].value = 'Incorrect input'\r\n  } else if (!value) {\r\n    this.elems['input-to'].value = ''\r\n  } else {\r\n    _helpers_setConvertValue__WEBPACK_IMPORTED_MODULE_0__.setConvertValue.bind(this)(value)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://task1/./src/callbacks/converterInputCallback.js?");

/***/ }),

/***/ "./src/callbacks/index.js":
/*!********************************!*\
  !*** ./src/callbacks/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMContentLoadedCallback\": () => (/* reexport safe */ _DOM_DOMContentLoadedCallback__WEBPACK_IMPORTED_MODULE_0__.DOMContentLoadedCallback)\n/* harmony export */ });\n/* harmony import */ var _DOM_DOMContentLoadedCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/DOMContentLoadedCallback */ \"./src/callbacks/DOM/DOMContentLoadedCallback.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://task1/./src/callbacks/index.js?");

/***/ }),

/***/ "./src/callbacks/selectOnChangeCallback.js":
/*!*************************************************!*\
  !*** ./src/callbacks/selectOnChangeCallback.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectOnChangeCallback\": () => (/* binding */ selectOnChangeCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers_setConvertValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/setConvertValue */ \"./src/helpers/setConvertValue.js\");\n\r\n\r\nfunction selectOnChangeCallback () {\r\n  // eslint-disable-next-line no-restricted-globals\r\n  if (!isNaN(this.elems['input-from'].value) && this.elems['input-from'].value) {\r\n    _helpers_setConvertValue__WEBPACK_IMPORTED_MODULE_0__.setConvertValue.bind(this)(this.elems['input-from'].value)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://task1/./src/callbacks/selectOnChangeCallback.js?");

/***/ }),

/***/ "./src/components/Converter.js":
/*!*************************************!*\
  !*** ./src/components/Converter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"converter\": () => (/* binding */ converter)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _configs_converterElemNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/converterElemNames */ \"./src/configs/converterElemNames.js\");\n/* harmony import */ var _callbacks_converterInputCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../callbacks/converterInputCallback */ \"./src/callbacks/converterInputCallback.js\");\n/* harmony import */ var _callbacks_selectOnChangeCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../callbacks/selectOnChangeCallback */ \"./src/callbacks/selectOnChangeCallback.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Converter extends HTMLElement {\r\n  constructor() {\r\n    super()\r\n    this.shadow = this.attachShadow({ mode: 'closed' })\r\n\r\n    this.section = Object.assign((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElem)('section', this.shadow), {\r\n      id: 'converter-section',\r\n      innerHTML: _templates__WEBPACK_IMPORTED_MODULE_1__.template,\r\n    })\r\n\r\n    Object.assign((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.addElem)('style', this.shadow), {\r\n      textContent: _templates__WEBPACK_IMPORTED_MODULE_1__.style,\r\n    })\r\n\r\n    this.getElemsById = _helpers__WEBPACK_IMPORTED_MODULE_0__.getElemsByIdFromShadow.bind(this)\r\n    this.metrics = __webpack_require__(/*! ../../metrics.json */ \"./metrics.json\")\r\n  }\r\n\r\n  connectedCallback () {\r\n    this.elems = this.getElemsById(_configs_converterElemNames__WEBPACK_IMPORTED_MODULE_2__.converterElemNames)\r\n\r\n    this.elems['input-from'].oninput = _callbacks_converterInputCallback__WEBPACK_IMPORTED_MODULE_3__.converterInputCallback.bind(this)\r\n\r\n    this.elems['select-from'].onchange = _callbacks_selectOnChangeCallback__WEBPACK_IMPORTED_MODULE_4__.selectOnChangeCallback.bind(this)\r\n    this.elems['select-to'].onchange = _callbacks_selectOnChangeCallback__WEBPACK_IMPORTED_MODULE_4__.selectOnChangeCallback.bind(this)\r\n  }\r\n}\r\n\r\ncustomElements.define('converter-component', Converter)\r\n\r\nconst converter = document.createElement('converter-component')\r\n\n\n//# sourceURL=webpack://task1/./src/components/Converter.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"converter\": () => (/* reexport safe */ _Converter__WEBPACK_IMPORTED_MODULE_0__.converter)\n/* harmony export */ });\n/* harmony import */ var _Converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Converter */ \"./src/components/Converter.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://task1/./src/components/index.js?");

/***/ }),

/***/ "./src/configs/converterElemNames.js":
/*!*******************************************!*\
  !*** ./src/configs/converterElemNames.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"converterElemNames\": () => (/* binding */ converterElemNames)\n/* harmony export */ });\nconst converterElemNames = [\r\n  'select-from',\r\n  'input-from',\r\n  'select-to',\r\n  'input-to',\r\n]\r\n\n\n//# sourceURL=webpack://task1/./src/configs/converterElemNames.js?");

/***/ }),

/***/ "./src/configs/inputObject.js":
/*!************************************!*\
  !*** ./src/configs/inputObject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputObject\": () => (/* binding */ inputObject)\n/* harmony export */ });\nconst inputObject = localStorage.getItem('inputObject')\r\n  ? JSON.parse(localStorage.getItem('inputObject'))\r\n  : {\r\n    distance: {\r\n      unit: null,\r\n      value: null,\r\n    },\r\n    convertTo: null,\r\n  }\r\n\n\n//# sourceURL=webpack://task1/./src/configs/inputObject.js?");

/***/ }),

/***/ "./src/helpers/addElem.js":
/*!********************************!*\
  !*** ./src/helpers/addElem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElem\": () => (/* binding */ addElem)\n/* harmony export */ });\nfunction addElem(tagName, container = document.body) {\r\n  return container\r\n    .appendChild(document.createElement(tagName))\r\n}\r\n\n\n//# sourceURL=webpack://task1/./src/helpers/addElem.js?");

/***/ }),

/***/ "./src/helpers/convert.js":
/*!********************************!*\
  !*** ./src/helpers/convert.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convert\": () => (/* binding */ convert)\n/* harmony export */ });\nfunction convert (value, fromSystem, toSystem) {\r\n  return {\r\n    unit: toSystem,\r\n    value: (value * fromSystem / toSystem).toFixed(2),\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://task1/./src/helpers/convert.js?");

/***/ }),

/***/ "./src/helpers/getElemsByIdFromShadow.js":
/*!***********************************************!*\
  !*** ./src/helpers/getElemsByIdFromShadow.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getElemsByIdFromShadow\": () => (/* binding */ getElemsByIdFromShadow)\n/* harmony export */ });\nfunction getElemsByIdFromShadow (names) {\r\n  const shadow = this.shadow\r\n\r\n  return Object.assign({}, ...names\r\n    .map(id => ({ [id]: shadow.querySelector(`#${id}`) })))\r\n}\r\n\n\n//# sourceURL=webpack://task1/./src/helpers/getElemsByIdFromShadow.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElem\": () => (/* reexport safe */ _addElem__WEBPACK_IMPORTED_MODULE_0__.addElem),\n/* harmony export */   \"getElemsByIdFromShadow\": () => (/* reexport safe */ _getElemsByIdFromShadow__WEBPACK_IMPORTED_MODULE_1__.getElemsByIdFromShadow)\n/* harmony export */ });\n/* harmony import */ var _addElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElem */ \"./src/helpers/addElem.js\");\n/* harmony import */ var _getElemsByIdFromShadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getElemsByIdFromShadow */ \"./src/helpers/getElemsByIdFromShadow.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://task1/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/setConvertValue.js":
/*!****************************************!*\
  !*** ./src/helpers/setConvertValue.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setConvertValue\": () => (/* binding */ setConvertValue)\n/* harmony export */ });\n/* harmony import */ var _configs_inputObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs/inputObject */ \"./src/configs/inputObject.js\");\n/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convert */ \"./src/helpers/convert.js\");\n\r\n\r\n\r\nfunction setConvertValue (value) {\r\n  Object.assign(_configs_inputObject__WEBPACK_IMPORTED_MODULE_0__.inputObject, {\r\n    distance: {\r\n      unit: this.elems['select-from'].value,\r\n      value,\r\n    },\r\n    convertTo: this.elems['select-to'].value,\r\n  })\r\n\r\n  const result = (0,_convert__WEBPACK_IMPORTED_MODULE_1__.convert)(value, this.metrics[this.elems['select-from'].value], this.metrics[this.elems['select-to'].value])\r\n\r\n  this.elems['input-to'].value = result.value\r\n}\r\n\n\n//# sourceURL=webpack://task1/./src/helpers/setConvertValue.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style/style.css */ \"./src/assets/style/style.css\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', _callbacks__WEBPACK_IMPORTED_MODULE_1__.DOMContentLoadedCallback)\r\n\n\n//# sourceURL=webpack://task1/./src/index.js?");

/***/ }),

/***/ "./src/templates/Converter/style.js":
/*!******************************************!*\
  !*** ./src/templates/Converter/style.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"style\": () => (/* binding */ style)\n/* harmony export */ });\nconst style = `\r\n  #converter-section {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border: solid #ddd 2px;\r\n    border-radius: 10px;\r\n    padding: 16px;\r\n    width: 500px;\r\n    height: 140px;\r\n  }\r\n  \r\n  h5 {\r\n    font-size: 26px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n  \r\n  #wrapper {\r\n    margin-top: 15px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .convert-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  input {\r\n    display: block;\r\n    margin-top: 15px;\r\n    padding: 8px 16px;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    border: solid #000 1px;\r\n  }\r\n  \r\n  p {\r\n    margin: 0;\r\n  }\r\n`\r\n\n\n//# sourceURL=webpack://task1/./src/templates/Converter/style.js?");

/***/ }),

/***/ "./src/templates/Converter/template.js":
/*!*********************************************!*\
  !*** ./src/templates/Converter/template.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"template\": () => (/* binding */ template)\n/* harmony export */ });\nconst template = `\r\n  <h5 id=\"converter-title\">Converter</h5>\r\n  <div id=\"wrapper\">\r\n    <div class=\"convert-block\">\r\n    <p>I want to convert:</p>\r\n     <select id=\"select-from\" class=\"select\">\r\n        <option value=\"mm\">millimeters</option>\r\n        <option selected=\"selected\" value=\"cm\">centimeters</option>\r\n        <option value=\"m\">meters</option>\r\n        <option value=\"km\">kilometers</option>\r\n        <option value=\"ft\">feet</option>\r\n        <option value=\"yd\">yards</option>\r\n        <option value=\"in\">inches</option>\r\n     </select>\r\n     <input type=\"text\" id=\"input-from\">\r\n    </div>\r\n    <div class=\"convert-block\">\r\n    <p>to:</p>\r\n     <select id=\"select-to\" class=\"select\">\r\n        <option value=\"mm\">millimeters</option>\r\n        <option selected=\"selected\" value=\"cm\">centimeters</option>\r\n        <option value=\"m\">meters</option>\r\n        <option value=\"km\">kilometers</option>\r\n        <option value=\"ft\">feet</option>\r\n        <option value=\"yd\">yards</option>\r\n        <option value=\"in\">inches</option>\r\n     </select>\r\n     <input type=\"text\" id=\"input-to\" disabled>\r\n    </div>\r\n  </div>\r\n`\r\n\n\n//# sourceURL=webpack://task1/./src/templates/Converter/template.js?");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"style\": () => (/* reexport safe */ _Converter_style__WEBPACK_IMPORTED_MODULE_1__.style),\n/* harmony export */   \"template\": () => (/* reexport safe */ _Converter_template__WEBPACK_IMPORTED_MODULE_0__.template)\n/* harmony export */ });\n/* harmony import */ var _Converter_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Converter/template */ \"./src/templates/Converter/template.js\");\n/* harmony import */ var _Converter_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Converter/style */ \"./src/templates/Converter/style.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://task1/./src/templates/index.js?");

/***/ }),

/***/ "./metrics.json":
/*!**********************!*\
  !*** ./metrics.json ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"mm\":1,\"cm\":10,\"m\":1000,\"km\":1000000,\"in\":25.4,\"ft\":304.8,\"yd\":914.4}');\n\n//# sourceURL=webpack://task1/./metrics.json?");

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
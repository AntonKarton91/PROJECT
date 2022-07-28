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

/***/ "./sass/index.scss":
/*!*************************!*\
  !*** ./sass/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/index.scss?");

/***/ }),

/***/ "./js/components/loginPageComponents/Form.js":
/*!***************************************************!*\
  !*** ./js/components/loginPageComponents/Form.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _core_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Component */ \"./js/core/Component.js\");\n\r\n\r\nclass Form extends _core_Component__WEBPACK_IMPORTED_MODULE_0__.Component{\r\n    static className = \"form-input\"\r\n\r\n    constructor($root) {\r\n        super($root,{\r\n            name:'Form',\r\n            listeners: ['input', 'click'],\r\n        })\r\n    }\r\n\r\n    toHTML() {\r\n        return `\r\n                <div class=\"selector\">\r\n                    <div class=\"reg btn\">Регистрация</div>\r\n                    <div class=\"log btn\">Авторизация</div>\r\n                </div>\r\n                <form action=\"#\" class=\"field\" >\r\n                    <input type=\"text\" class=\"input\" placeholder=\"Имя\" id=\"user-name\">\r\n                    <input type=\"text\" class=\"input\" placeholder=\"Фамилия\" id=\"user-surname\">\r\n                    <input type=\"text\" class=\"input\" placeholder=\"Пароль\" id=\"user-psw\">\r\n                    <input type=\"submit\" class=\"action\" name=\"Зарегистрироваться\">\r\n                </form>`\r\n    }\r\n\r\n    onInput(event){\r\n        console.log(event.data)\r\n    }\r\n\r\n    onClick(event){\r\n        console.log(event.currentTarget)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/components/loginPageComponents/Form.js?");

/***/ }),

/***/ "./js/components/loginPageComponents/LoginRootComponent.js":
/*!*****************************************************************!*\
  !*** ./js/components/loginPageComponents/LoginRootComponent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginRootComponent\": () => (/* binding */ LoginRootComponent)\n/* harmony export */ });\n/* harmony import */ var _core_Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Dom */ \"./js/core/Dom.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ \"./js/components/loginPageComponents/Form.js\");\n\r\n\r\n\r\nclass LoginRootComponent{\r\n\r\n    constructor(root, options) {\r\n        this.$root = document.querySelector(root)\r\n        this.components = options.components\r\n\r\n    }\r\n\r\n    getRoot(){\r\n        const $loginRoot = _core_Dom__WEBPACK_IMPORTED_MODULE_0__.$.create('div', \"loginRegister\")\r\n\r\n        this.components = this.components.map(Component => {\r\n            const $el = _core_Dom__WEBPACK_IMPORTED_MODULE_0__.$.create('div', Component.className)\r\n            const component  = new Component($el)\r\n            $el.html(component.toHTML())\r\n            $loginRoot.append($el)\r\n            return component\r\n        })\r\n\r\n        console.log(this)\r\n        return $loginRoot.$el\r\n    }\r\n\r\n\r\n    render(){\r\n        this.$root.append(this.getRoot())\r\n\r\n        this.components.forEach(component => {\r\n            component.initEventListener()\r\n        })\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./js/components/loginPageComponents/LoginRootComponent.js?");

/***/ }),

/***/ "./js/core/Component.js":
/*!******************************!*\
  !*** ./js/core/Component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _EvenlListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvenlListener */ \"./js/core/EvenlListener.js\");\n\r\n\r\nclass Component extends _EvenlListener__WEBPACK_IMPORTED_MODULE_0__.EventListener{\r\n\r\n    constructor($root, options = {}) {\r\n        super($root, options.listeners);\r\n        console.log(options.listeners)\r\n    }\r\n\r\n    toHTML(){\r\n        return ''\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/core/Component.js?");

/***/ }),

/***/ "./js/core/Dom.js":
/*!************************!*\
  !*** ./js/core/Dom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $)\n/* harmony export */ });\nclass Dom {\r\n    constructor(selector) {\r\n        if (typeof selector === 'string') {\r\n            this.$el = document.querySelector(selector)\r\n        } else {\r\n            this.$el = selector\r\n        }\r\n    }\r\n\r\n    html(html) {\r\n        if (html) {\r\n            this.$el.innerHTML = html\r\n            return this\r\n        } else {\r\n            return this.$el.outerHTML\r\n        }\r\n    }\r\n\r\n    append(node) {\r\n        if (node instanceof Dom) {\r\n            node = node.$el\r\n\r\n        }\r\n        if (Element.prototype.append) {\r\n            this.$el.append(node)\r\n        } else {\r\n            this.$el.appendChild(node)\r\n        }\r\n\r\n        return this\r\n    }\r\n\r\n    addListener(eventType, callback) {\r\n        this.$el.addEventListener(eventType, callback)\r\n    }\r\n\r\n    removeListener(eventType, callback) {\r\n        this.$el.removeEventListener(eventType, callback)\r\n    }\r\n}\r\n\r\nfunction $(selector){\r\n    return new Dom(selector)\r\n}\r\n\r\n$.create = (tagName, classes = '') =>{\r\n    const $el = document.createElement(tagName)\r\n    if(classes){\r\n        $el.classList.add(classes)\r\n    }\r\n    return $($el)\r\n}\n\n//# sourceURL=webpack:///./js/core/Dom.js?");

/***/ }),

/***/ "./js/core/EvenlListener.js":
/*!**********************************!*\
  !*** ./js/core/EvenlListener.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventListener\": () => (/* binding */ EventListener)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./js/core/utils.js\");\n\r\n\r\n\r\nclass EventListener{\r\n    constructor($root, listeners = []) {\r\n        this.$root = $root\r\n        this.listeners = listeners\r\n        console.log(this, 'sadas')\r\n    }\r\n\r\n\r\n    initEventListener(){\r\n\r\n        this.listeners.forEach(listener =>{\r\n            const method = getMethodName(listener)\r\n            this.$root.addListener(listener, this[method].bind(this))\r\n            })\r\n        }\r\n\r\n\r\n    removeEventListener(){\r\n        this.listeners.forEach(listener =>{\r\n            const method = getMethodName(listener)\r\n            this.$root.removeListener(listener, this[method].bind(this))\r\n        })\r\n    }\r\n}\r\n\r\nfunction getMethodName(eventName){\r\n    return 'on' + (0,_utils__WEBPACK_IMPORTED_MODULE_0__.capitalize)(eventName)\r\n}\n\n//# sourceURL=webpack:///./js/core/EvenlListener.js?");

/***/ }),

/***/ "./js/core/utils.js":
/*!**************************!*\
  !*** ./js/core/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize)\n/* harmony export */ });\nfunction capitalize(str){\r\n    if(typeof str !== 'string'){\r\n        return ''\r\n    }\r\n    return str.charAt(0).toUpperCase() + str.slice(1)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/core/utils.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/index.scss */ \"./sass/index.scss\");\n/* harmony import */ var _components_loginPageComponents_LoginRootComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loginPageComponents/LoginRootComponent */ \"./js/components/loginPageComponents/LoginRootComponent.js\");\n/* harmony import */ var _components_loginPageComponents_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loginPageComponents/Form */ \"./js/components/loginPageComponents/Form.js\");\n\r\n\r\n\r\n//\r\n//\r\n// const component = new LoginRootComponent('.app', {\r\n//     components: [Form]\r\n// })\r\n//\r\n// component.render()\r\n\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
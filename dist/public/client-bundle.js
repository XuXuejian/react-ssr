/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/entry-client.js","vendor~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return About; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nfunction About() {\n  Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"test\"])();\n  console.log(3);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"app\"\n  }, \"about page.\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWJvdXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWJvdXQuanM/OTJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHRlc3QgfSBmcm9tICcuL3V0aWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICB0ZXN0KClcclxuICBjb25zb2xlLmxvZygzKVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPmFib3V0IHBhZ2UuPC9kaXY+XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/About.js\n");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _App_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.less */ \"./src/App.less\");\n/* harmony import */ var _App_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nfunction App(props) {\n  var buttonClick = function buttonClick() {\n    console.log(\"haha shabi.\");\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: props.styleName\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"About\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: buttonClick\n  }, \"click me.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        exact = _ref.exact,\n        component = _ref.component,\n        rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, {\n      key: path,\n      path: path,\n      exact: exact,\n      component: component\n    }));\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcz9iZTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpdGNoLCBMaW5rLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgXCIuL0FwcC5sZXNzXCI7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4vcm91dGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHMpIHtcclxuICBjb25zdCBidXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGFoYSBzaGFiaS5cIik7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17cHJvcHMuc3R5bGVOYW1lfT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtidXR0b25DbGlja30+Y2xpY2sgbWUuPC9idXR0b24+XHJcbiAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAge3JvdXRlcy5tYXAoKHsgcGF0aCwgZXhhY3QsIGNvbXBvbmVudCwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgICAgICAgICA8Um91dGVcclxuICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgIGtleT17cGF0aH1cclxuICAgICAgICAgICAgcGF0aD17cGF0aH1cclxuICAgICAgICAgICAgZXhhY3Q9e2V4YWN0fVxyXG4gICAgICAgICAgICBjb21wb25lbnQ9e2NvbXBvbmVudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3dpdGNoPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTtBQVlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ }),

/***/ "./src/App.less":
/*!**********************!*\
  !*** ./src/App.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmxlc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmxlc3M/MGQ2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTk2MTYzODY3NTEyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L0xlYXJuL3Nzci9yZWFjdC1zc3Ivbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxnQ0FLQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.less\n");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Home(props) {\n  console.log(\"----\", Date.now());\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      data = _React$useState2[0],\n      setData = _React$useState2[1]; // const actions = bindActionCreators(\n  //   {\n  //     btnAction,\n  //   },\n  //   props.dispatch\n  // );\n\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    console.log(window);\n    fetch(\"https://cnodejs.org/api/v1/topics?page=1&tab=job&limit=10&mdrender=false\").then(function (res) {\n      return res.json();\n    }).then(function (res) {// setData(res.data);\n    });\n  }, []);\n\n  var publish = function publish() {\n    fetch(\"http://localhost:3000/bundle\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        page: true,\n        value: \"生成页面\"\n      }),\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      console.log(res);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"app\"\n  }, \"home page.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: publish\n  }, \"\\u53D1\\u5E03\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, data.map(function (d) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: d.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, d.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, d.content));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.btnAction(\"yes it is.\");\n    }\n  }, \"\\u53D1\\u8D77action\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(null, {\n  btnAction: _store__WEBPACK_IMPORTED_MODULE_3__[\"btnAction\"]\n})(Home));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSG9tZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9Ib21lLmpzP2FjNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgYnRuQWN0aW9uIH0gZnJvbSBcIi4vc3RvcmVcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhcIi0tLS1cIiwgRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbnN0IGFjdGlvbnMgPSBiaW5kQWN0aW9uQ3JlYXRvcnMoXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGJ0bkFjdGlvbixcclxuICAvLyAgIH0sXHJcbiAgLy8gICBwcm9wcy5kaXNwYXRjaFxyXG4gIC8vICk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdyk7XHJcbiAgICBmZXRjaChcclxuICAgICAgXCJodHRwczovL2Nub2RlanMub3JnL2FwaS92MS90b3BpY3M/cGFnZT0xJnRhYj1qb2ImbGltaXQ9MTAmbWRyZW5kZXI9ZmFsc2VcIlxyXG4gICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBwdWJsaXNoID0gKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYnVuZGxlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHBhZ2U6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6IFwi55Sf5oiQ6aG16Z2iXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cImFwcFwiPmhvbWUgcGFnZS48L2gyPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3B1Ymxpc2h9PuWPkeW4gzwvYnV0dG9uPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2RhdGEubWFwKChkKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtkLmlkfT5cclxuICAgICAgICAgICAgPGgzPntkLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxzcGFuPntkLmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5idG5BY3Rpb24oXCJ5ZXMgaXQgaXMuXCIpfT7lj5HotbdhY3Rpb248L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBidG5BY3Rpb24gfSkoSG9tZSk7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Home.js\n");

/***/ }),

/***/ "./src/entry-client.js":
/*!*****************************!*\
  !*** ./src/entry-client.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n\n\n\n\nvar preloadedState = window.__PRELOADED_STATE__;\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_4__[\"createStore\"])(_store__WEBPACK_IMPORTED_MODULE_5__[\"reducer\"], preloadedState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_6__[\"composeWithDevTools\"])());\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n  styleName: \"hahahaha\"\n}))), document.getElementById(\"app\"), function () {\n  console.log(Date.now(), \"hydrate\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cnktY2xpZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5LWNsaWVudC5qcz9hOTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RG9tIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5cclxuY29uc3QgcHJlbG9hZGVkU3RhdGUgPSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXztcclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scygpKTtcclxuXHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5SZWFjdERvbS5oeWRyYXRlKFxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPEFwcCBzdHlsZU5hbWU9XCJoYWhhaGFoYVwiIC8+XHJcbiAgICA8L1JvdXRlcj5cclxuICA8L1Byb3ZpZGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSxcclxuICAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhEYXRlLm5vdygpLCBcImh5ZHJhdGVcIik7XHJcbiAgfVxyXG4pO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/entry-client.js\n");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ \"./src/About.js\");\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/about',\n  component: _About__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy5qcz81NjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgZXhhY3Q6IHRydWUsXHJcbiAgICBjb21wb25lbnQ6IEhvbWVcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvYWJvdXQnLFxyXG4gICAgY29tcG9uZW50OiBBYm91dFxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes.js\n");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: btnAction, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnAction\", function() { return btnAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar btnAction = function btnAction(payload) {\n  return {\n    payload: payload,\n    type: \"btnAction\"\n  };\n};\nvar initialState = {\n  btn: {\n    clicked: false,\n    data: null\n  }\n};\n\nvar btnReducer = function btnReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"btnAction\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        btn: {\n          clicked: true,\n          data: action.payload\n        }\n      });\n\n    default:\n      return state;\n  }\n};\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  test: btnReducer\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYnRuQWN0aW9uID0gKHBheWxvYWQpID0+ICh7IHBheWxvYWQsIHR5cGU6IFwiYnRuQWN0aW9uXCIgfSk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYnRuOiB7XHJcbiAgICBjbGlja2VkOiBmYWxzZSxcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgfSxcclxufTtcclxuY29uc3QgYnRuUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcImJ0bkFjdGlvblwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGJ0bjoge1xyXG4gICAgICAgICAgY2xpY2tlZDogdHJ1ZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHRlc3Q6IGJ0blJlZHVjZXIsXHJcbn0pO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\nvar test = function test() {\n  console.log('test chunk');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlsLmpzP2UwZWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlc3QgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3Rlc3QgY2h1bmsnKVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util.js\n");

/***/ })

/******/ });
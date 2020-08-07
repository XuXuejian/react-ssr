module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack.base.config.js":
/*!***************************************!*\
  !*** ./config/webpack.base.config.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ \"path\");\n\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nvar devMode = \"development\" !== \"production\";\nmodule.exports = {\n  devtool: \"cheap-module-eval-source-map\",\n  resolve: {\n    extensions: [\".js\", \".jsx\", \".tsx\", \".ts\", \".less\", \".json\"],\n    alias: {\n      \"@\": path.resolve(__dirname, \"../src/\")\n    }\n  },\n  module: {\n    rules: [{\n      test: /\\.(ts|js)x?$/,\n      include: path.resolve(\"src\"),\n      use: [{\n        loader: \"babel-loader\"\n      }]\n    }, {\n      test: /\\.less$/,\n      include: path.resolve(\"src\"),\n      use: [{\n        loader: MiniCssExtractPlugin.loader,\n        options: {\n          hmr: devMode\n        }\n      }, \"css-loader\", \"less-loader\"]\n    }]\n  },\n  plugins: [new MiniCssExtractPlugin({\n    // Options similar to the same options in webpackOptions.output\n    // both options are optional\n    filename: devMode ? \"[name].css\" : \"[name].[contentHash:8].css\"\n  })]\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./config/webpack.base.config.js?");

/***/ }),

/***/ "./config/webpack.client.config.js":
/*!*****************************************!*\
  !*** ./config/webpack.client.config.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ \"path\");\n\nvar htmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar _require = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\"),\n    CleanWebpackPlugin = _require.CleanWebpackPlugin;\n\nvar merge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\n\nvar base = __webpack_require__(/*! ./webpack.base.config */ \"./config/webpack.base.config.js\");\n\nvar devMode = \"development\" !== \"production\";\nmodule.exports = merge(base, {\n  entry: path.resolve(__dirname, \"../src/entry-client.js\"),\n  output: {\n    filename: devMode ? \"client-bundle.js\" : \"client-bundle.[chunkHash:8].js\",\n    path: path.resolve(__dirname, \"../dist/public\"),\n    publicPath: \"/public\",\n    chunkFilename: devMode ? \"[name].js\" : \"[name].[chunkHash:8].js\"\n  },\n  mode: \"development\",\n  devServer: {\n    open: true,\n    port: 3000,\n    hot: true\n  },\n  optimization: {\n    splitChunks: {\n      cacheGroups: {\n        vendor: {\n          test: /node_modules/,\n          chunks: \"all\",\n          filename: \"vendor.chunk.js\",\n          priority: 10,\n          enforce: true\n        }\n      }\n    }\n  },\n  plugins: [new CleanWebpackPlugin(), new htmlWebpackPlugin({\n    filename: \"index.html\",\n    favicon: path.resolve(__dirname, \"../favicon.ico\"),\n    template: path.resolve(__dirname, \"../index.html\")\n  })]\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./config/webpack.client.config.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/store.js */ \"./src/store.js\");\n/* harmony import */ var _src_App_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/App.js */ \"./src/App.js\");\n/* harmony import */ var _config_webpack_client_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config/webpack.client.config */ \"./config/webpack.client.config.js\");\n/* harmony import */ var _config_webpack_client_config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_config_webpack_client_config__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _src_MyTest__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/MyTest */ \"./src/MyTest.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n // import routes from './src/routes'\n\n\n\n\nvar htmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar _require = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\"),\n    CleanWebpackPlugin = _require.CleanWebpackPlugin;\n\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nvar PORT = process.env.PORT || 3000;\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());\napp.use(\"/public\", express__WEBPACK_IMPORTED_MODULE_2___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"dist/public\")));\napp.post(\"/bundle\", function (req, res) {\n  var finalConfig = _objectSpread(_objectSpread({}, _config_webpack_client_config__WEBPACK_IMPORTED_MODULE_12___default.a), {}, {\n    entry: \"./src/page.js\",\n    output: {\n      filename: \"client-bundle.js\",\n      path: path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(process.cwd(), \"./bundle/public\"),\n      publicPath: \"./\",\n      chunkFilename: \"[name].js\"\n    },\n    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin({\n      filename: \"[name].[hash:8].css\"\n    }), new htmlWebpackPlugin({\n      filename: \"index.html\",\n      favicon: \"./favicon.ico\",\n      template: \"./index.html\"\n    })],\n    target: \"web\",\n    mode: \"production\",\n    stats: \"errors-only\"\n  });\n\n  console.log(finalConfig);\n  webpack__WEBPACK_IMPORTED_MODULE_3___default()(finalConfig).run(function (err, stats) {\n    var file = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(process.cwd(), \"./bundle/public/index.html\");\n    var dom = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_7__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_MyTest__WEBPACK_IMPORTED_MODULE_13__[\"MyTest\"], null));\n    fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(file, \"utf8\", function (err, data) {\n      if (err) {\n        console.error(\"Something went wrong:\", err);\n        throw new Error(err);\n      }\n\n      var newData = data.replace('<div id=\"app\"></div>', \"<div id=\\\"app\\\">\".concat(dom, \"</div>\"));\n      console.log(file);\n      console.log(data);\n      console.log(newData);\n      fs__WEBPACK_IMPORTED_MODULE_1___default.a.writeFile(file, newData, function (err) {\n        if (err) {\n          throw new Error(err);\n        }\n\n        console.log(\"end\");\n      });\n    }); // console.log(stats.toString({ colors: true }));\n  });\n  res.statusCode = 200;\n  res.setHeader(\"Content-Type\", \"text/plain\");\n  res.send({\n    value: \"this should be html\"\n  });\n});\napp.get(\"*\", function (req, res) {\n  console.log(req.url); // const activeRoute = routes.find(route => matchPath(req.url, route)) || {}\n\n  var context = {};\n  var preloadedState = {\n    test: {\n      btn: {\n        clicked: false,\n        data: \"fuck\"\n      },\n      fuck: {\n        yes: true\n      }\n    }\n  };\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_9__[\"createStore\"])(_src_store_js__WEBPACK_IMPORTED_MODULE_10__[\"reducer\"], preloadedState);\n  var dom = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_7__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_App_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], null))));\n\n  if (context.statusCode === 404) {\n    return res.end(\"\\n    <!DOCTYPE html>\\n   <html lang=\\\"en\\\">\\n     <head>\\n       <meta charset=\\\"UTF-8\\\" />\\n       <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n       <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\" />\\n       <title>react ssr</title>\\n     <link rel=\\\"shortcut icon\\\" href=\\\"/public/favicon.ico\\\"></head>\\n     <body>\\n       <h2>page not found</h2>\");\n  }\n\n  console.log(\"context: \", context);\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(\"dist/public/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, \"utf8\", function (err, data) {\n    if (err) {\n      console.error(\"Something went wrong:\", err);\n      return res.status(500).send(\"Oops, better luck next time!\");\n    }\n\n    res.send(data.replace('<div id=\"app\"></div>', \"<div id=\\\"app\\\">\".concat(dom, \"</div><script>\\n        // WARNING: See the following for security issues around embedding JSON in HTML:\\n        // https://redux.js.org/recipes/server-rendering/#security-considerations\\n        window.__PRELOADED_STATE__ = \").concat(JSON.stringify(store.getState()).replace(/</g, \"\\\\u003c\"), \"\\n      </script>\")));\n  });\n});\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, {\n  asyncAction: _store__WEBPACK_IMPORTED_MODULE_2__[\"asyncAction\"],\n  btnAction: _store__WEBPACK_IMPORTED_MODULE_2__[\"btnAction\"]\n})(function About(props) {\n  var onTestAsyncAction = function onTestAsyncAction() {\n    props.asyncAction(Math.random()).then(function (res) {\n      console.log(res);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  var onTestNormalAction = function onTestNormalAction() {\n    props.btnAction(Math.random());\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: onTestAsyncAction\n  }, \"\\u5F02\\u6B65Action\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: onTestNormalAction\n  }, \"\\u666E\\u901AAction\"));\n}));\n\n//# sourceURL=webpack:///./src/About.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.less */ \"./src/App.less\");\n/* harmony import */ var _App_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nfunction App() {\n  var buttonClick = function buttonClick() {\n    console.log(\"haha shabi.\");\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"app\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"About\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: buttonClick\n  }, \"click me.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        exact = _ref.exact,\n        component = _ref.component,\n        rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, {\n      key: path,\n      path: path,\n      exact: exact,\n      component: component\n    }));\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"*\",\n    render: function render(_ref2) {\n      var staticContext = _ref2.staticContext;\n      console.log(\"staticContext: \", staticContext);\n\n      if (staticContext) {\n        staticContext.statusCode = 404;\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404.\");\n    }\n  })));\n}\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/App.less":
/*!**********************!*\
  !*** ./src/App.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/App.less?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Home(props) {\n  console.log(\"----\", Date.now());\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      data = _React$useState2[0],\n      setData = _React$useState2[1]; // const actions = bindActionCreators(\n  //   {\n  //     btnAction,\n  //   },\n  //   props.dispatch\n  // );\n\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    console.log(window);\n    fetch(\"https://cnodejs.org/api/v1/topics?page=1&tab=job&limit=10&mdrender=false\").then(function (res) {\n      return res.json();\n    }).then(function (res) {// setData(res.data);\n    });\n  }, []);\n\n  var publish = function publish() {\n    fetch(\"http://localhost:3000/bundle\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        page: true,\n        value: \"生成页面\"\n      }),\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      console.log(res);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"app\"\n  }, \"home page.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: publish\n  }, \"\\u53D1\\u5E03\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, data.map(function (d) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: d.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, d.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, d.content));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return props.btnAction(\"yes it is.\");\n    }\n  }, \"\\u53D1\\u8D77action\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(null, {\n  btnAction: _store__WEBPACK_IMPORTED_MODULE_3__[\"btnAction\"]\n})(Home));\n\n//# sourceURL=webpack:///./src/Home.js?");

/***/ }),

/***/ "./src/MyTest.js":
/*!***********************!*\
  !*** ./src/MyTest.js ***!
  \***********************/
/*! exports provided: MyTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTest\", function() { return MyTest; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar style = {\n  color: \"blue\",\n  fontSize: \"24px\"\n};\nvar MyTest = function MyTest() {\n  console.log(\"rendered myTest component\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: function onClick() {\n      console.log(\"haha. you clicked me.\");\n    },\n    style: style\n  }, \"I'm produced.\");\n};\n\n//# sourceURL=webpack:///./src/MyTest.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/Home.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ \"./src/About.js\");\n\n\nvar routes = [{\n  path: \"/\",\n  exact: true,\n  component: _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  loadData: function loadData() {}\n}, {\n  path: \"/about\",\n  component: _About__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: btnAction, jobAction, asyncJobAction, asyncAction, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnAction\", function() { return btnAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jobAction\", function() { return jobAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asyncJobAction\", function() { return asyncJobAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asyncAction\", function() { return asyncAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar btnAction = function btnAction(payload) {\n  return {\n    payload: payload,\n    type: \"btnAction\"\n  };\n};\nvar jobAction = function jobAction(payload) {\n  return {\n    payload: payload,\n    type: \"jobAction\"\n  };\n};\nvar asyncJobAction = function asyncJobAction(payload) {\n  return function (dispatch) {\n    return fetch(\"https://cnodejs.org/api/v1/topics?page=1&tab=job&limit=10&mdrender=false\").then(function (res) {\n      return res.json();\n    }).then(function (_ref) {\n      var data = _ref.data;\n      dispatch(jobAction(data));\n    });\n  };\n};\nvar asyncAction = function asyncAction(payload) {\n  return function (dispatch) {\n    console.log(dispatch);\n    return new Promise(function (resolve, reject) {\n      if (payload > 0.5) {\n        dispatch({\n          type: \"shabi is found\"\n        });\n        resolve(\"成功了\");\n      } else {\n        dispatch({\n          type: \"shabi is gone\"\n        });\n        reject(\"失败了\");\n      }\n    });\n  };\n};\nvar initialState = {\n  btn: {\n    clicked: false,\n    data: null\n  },\n  jobList: []\n};\n\nvar btnReducer = function btnReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"btnAction\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        btn: {\n          clicked: true,\n          data: action.payload\n        }\n      });\n\n    case \"jobAction\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        jobList: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  test: btnReducer\n});\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clean-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22clean-webpack-plugin%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack:///external_%22webpack-merge%22?");

/***/ })

/******/ });
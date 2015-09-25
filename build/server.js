require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _express = __webpack_require__(1);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _routes = __webpack_require__(3);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var app = (0, _express2['default'])();
	
	app.get('/api', _routes2['default'].api);
	
	app.listen(8083, function (err) {
	  if (err) return console.log(err);
	  console.log('running on localhost:8083');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	/*
	 * routes.js
	 *
	 * contains routes for the express node server
	 *
	 * */
	'use strict';
	
	var routes = {
	  '/api': {
	    method: 'get',
	    fn: function fn(req, res) {
	      res.json({
	        shouts: ['Hello World!', 'Using my routes.js', 'This is React and Webpack...', 'They make development fun', 'Another shout']
	      });
	    }
	  }
	
	};
	
	module.exports = routes;

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map
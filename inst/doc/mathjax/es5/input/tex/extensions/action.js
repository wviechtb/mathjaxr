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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isObject = MathJax._.components.global.isObject;
exports.combineConfig = MathJax._.components.global.combineConfig;
exports.combineDefaults = MathJax._.components.global.combineDefaults;
exports.combineWithMathJax = MathJax._.components.global.combineWithMathJax;
exports.MathJax = MathJax._.components.global.MathJax;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionConfiguration = exports.ActionMethods = void 0;
var Configuration_js_1 = __webpack_require__(2);
var TexParser_js_1 = __webpack_require__(3);
var SymbolMap_js_1 = __webpack_require__(4);
var BaseMethods_js_1 = __webpack_require__(5);
exports.ActionMethods = {};
exports.ActionMethods.Macro = BaseMethods_js_1.default.Macro;
exports.ActionMethods.Toggle = function (parser, name) {
    var children = [];
    var arg;
    while ((arg = parser.GetArgument(name)) !== '\\endtoggle') {
        children.push(new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml());
    }
    parser.Push(parser.create('node', 'maction', children, { actiontype: 'toggle' }));
};
exports.ActionMethods.Mathtip = function (parser, name) {
    var arg = parser.ParseArg(name);
    var tip = parser.ParseArg(name);
    parser.Push(parser.create('node', 'maction', [arg, tip], { actiontype: 'tooltip' }));
};
new SymbolMap_js_1.CommandMap('action-macros', {
    toggle: 'Toggle',
    mathtip: 'Mathtip',
    texttip: ['Macro', '\\mathtip{#1}{\\text{#2}}', 2]
}, exports.ActionMethods);
exports.ActionConfiguration = Configuration_js_1.Configuration.create('action', { handler: { macro: ['action-macros'] } });
//# sourceMappingURL=ActionConfiguration.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Configuration = MathJax._.input.tex.Configuration.Configuration;
exports.ConfigurationHandler = MathJax._.input.tex.Configuration.ConfigurationHandler;
exports.ParserConfiguration = MathJax._.input.tex.Configuration.ParserConfiguration;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.TexParser["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.AbstractSymbolMap = MathJax._.input.tex.SymbolMap.AbstractSymbolMap;
exports.RegExpMap = MathJax._.input.tex.SymbolMap.RegExpMap;
exports.AbstractParseMap = MathJax._.input.tex.SymbolMap.AbstractParseMap;
exports.CharacterMap = MathJax._.input.tex.SymbolMap.CharacterMap;
exports.DelimiterMap = MathJax._.input.tex.SymbolMap.DelimiterMap;
exports.MacroMap = MathJax._.input.tex.SymbolMap.MacroMap;
exports.CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
exports.EnvironmentMap = MathJax._.input.tex.SymbolMap.EnvironmentMap;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.base.BaseMethods["default"];

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(0);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/action/ActionConfiguration.js
var ActionConfiguration = __webpack_require__(1);

// CONCATENATED MODULE: ./lib/action.js


Object(global["combineWithMathJax"])({
  _: {
    input: {
      tex: {
        action: {
          ActionConfiguration: ActionConfiguration
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./action.js


/***/ })
/******/ ]);
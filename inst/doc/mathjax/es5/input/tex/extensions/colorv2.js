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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
exports.ColorConfiguration = exports.ColorV2Methods = void 0;
var SymbolMap_js_1 = __webpack_require__(2);
var Configuration_js_1 = __webpack_require__(3);
exports.ColorV2Methods = {
    Color: function (parser, name) {
        var color = parser.GetArgument(name);
        var old = parser.stack.env['color'];
        parser.stack.env['color'] = color;
        var math = parser.ParseArg(name);
        if (old) {
            parser.stack.env['color'] = old;
        }
        else {
            delete parser.stack.env['color'];
        }
        var node = parser.create('node', 'mstyle', [math], { mathcolor: color });
        parser.Push(node);
    }
};
new SymbolMap_js_1.CommandMap('colorv2', { color: 'Color' }, exports.ColorV2Methods);
exports.ColorConfiguration = Configuration_js_1.Configuration.create('colorv2', { handler: { macro: ['colorv2'] } });
//# sourceMappingURL=ColorV2Configuration.js.map

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Configuration = MathJax._.input.tex.Configuration.Configuration;
exports.ConfigurationHandler = MathJax._.input.tex.Configuration.ConfigurationHandler;
exports.ParserConfiguration = MathJax._.input.tex.Configuration.ParserConfiguration;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(0);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/colorv2/ColorV2Configuration.js
var ColorV2Configuration = __webpack_require__(1);

// CONCATENATED MODULE: ./lib/colorv2.js


Object(global["combineWithMathJax"])({
  _: {
    input: {
      tex: {
        colorv2: {
          ColorV2Configuration: ColorV2Configuration
        }
      }
    }
  }
});
// CONCATENATED MODULE: ../rename.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //
// Look for a package name in the package list and change it to a new name
//   and rename tex options for it, if there are any.
//

function rename(oname, nname, options) {
  var tex = MathJax.config.tex;

  if (tex && tex.packages) {
    var packages = tex.packages;
    var n = packages.indexOf(oname);
    if (n >= 0) packages[n] = nname;

    if (options && tex[oname]) {
      Object(global["combineConfig"])(tex, _defineProperty({}, nname, tex[oname]));
      delete tex[oname];
    }
  }
}
// CONCATENATED MODULE: ./colorv2.js


rename('colorV2', 'colorv2', false);

/***/ })
/******/ ]);
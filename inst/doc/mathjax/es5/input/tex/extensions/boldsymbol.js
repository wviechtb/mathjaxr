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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoldsymbolConfiguration = exports.rewriteBoldTokens = exports.createBoldToken = exports.BoldsymbolMethods = void 0;
var Configuration_js_1 = __webpack_require__(2);
var NodeUtil_js_1 = __webpack_require__(3);
var TexConstants_js_1 = __webpack_require__(4);
var SymbolMap_js_1 = __webpack_require__(5);
var NodeFactory_js_1 = __webpack_require__(6);
var BOLDVARIANT = {};
BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.NORMAL] = TexConstants_js_1.TexConstant.Variant.BOLD;
BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.ITALIC] = TexConstants_js_1.TexConstant.Variant.BOLDITALIC;
BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.FRAKTUR] = TexConstants_js_1.TexConstant.Variant.BOLDFRAKTUR;
BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.SCRIPT] = TexConstants_js_1.TexConstant.Variant.BOLDSCRIPT;
BOLDVARIANT[TexConstants_js_1.TexConstant.Variant.SANSSERIF] = TexConstants_js_1.TexConstant.Variant.BOLDSANSSERIF;
BOLDVARIANT['-tex-calligraphic'] = '-tex-bold-calligraphic';
BOLDVARIANT['-tex-oldstyle'] = '-tex-bold-oldstyle';
exports.BoldsymbolMethods = {};
exports.BoldsymbolMethods.Boldsymbol = function (parser, name) {
    var boldsymbol = parser.stack.env['boldsymbol'];
    parser.stack.env['boldsymbol'] = true;
    var mml = parser.ParseArg(name);
    parser.stack.env['boldsymbol'] = boldsymbol;
    parser.Push(mml);
};
new SymbolMap_js_1.CommandMap('boldsymbol', { boldsymbol: 'Boldsymbol' }, exports.BoldsymbolMethods);
function createBoldToken(factory, kind, def, text) {
    var token = NodeFactory_js_1.NodeFactory.createToken(factory, kind, def, text);
    if (kind !== 'mtext' &&
        factory.configuration.parser.stack.env['boldsymbol']) {
        NodeUtil_js_1.default.setProperty(token, 'fixBold', true);
        factory.configuration.addNode('fixBold', token);
    }
    return token;
}
exports.createBoldToken = createBoldToken;
function rewriteBoldTokens(arg) {
    var e_1, _a;
    try {
        for (var _b = __values(arg.data.getList('fixBold')), _c = _b.next(); !_c.done; _c = _b.next()) {
            var node = _c.value;
            if (NodeUtil_js_1.default.getProperty(node, 'fixBold')) {
                var variant = NodeUtil_js_1.default.getAttribute(node, 'mathvariant');
                if (variant == null) {
                    NodeUtil_js_1.default.setAttribute(node, 'mathvariant', TexConstants_js_1.TexConstant.Variant.BOLD);
                }
                else {
                    NodeUtil_js_1.default.setAttribute(node, 'mathvariant', BOLDVARIANT[variant] || variant);
                }
                NodeUtil_js_1.default.removeProperties(node, 'fixBold');
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
exports.rewriteBoldTokens = rewriteBoldTokens;
exports.BoldsymbolConfiguration = Configuration_js_1.Configuration.create('boldsymbol', {
    handler: { macro: ['boldsymbol'] },
    nodes: { 'token': createBoldToken },
    postprocessors: [rewriteBoldTokens]
});
//# sourceMappingURL=BoldsymbolConfiguration.js.map

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
exports["default"] = MathJax._.input.tex.NodeUtil["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TexConstant = MathJax._.input.tex.TexConstants.TexConstant;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(0);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/boldsymbol/BoldsymbolConfiguration.js
var BoldsymbolConfiguration = __webpack_require__(1);

// CONCATENATED MODULE: ./lib/boldsymbol.js


Object(global["combineWithMathJax"])({
  _: {
    input: {
      tex: {
        boldsymbol: {
          BoldsymbolConfiguration: BoldsymbolConfiguration
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./boldsymbol.js


/***/ })
/******/ ]);
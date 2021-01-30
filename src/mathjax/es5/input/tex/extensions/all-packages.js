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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Configuration = MathJax._.input.tex.Configuration.Configuration;
exports.ConfigurationHandler = MathJax._.input.tex.Configuration.ConfigurationHandler;
exports.ParserConfiguration = MathJax._.input.tex.Configuration.ParserConfiguration;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.TexError["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseUtil["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.NodeUtil["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.TexParser["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TexConstant = MathJax._.input.tex.TexConstants.TexConstant;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TEXCLASS = MathJax._.core.MmlTree.MmlNode.TEXCLASS;
exports.TEXCLASSNAMES = MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES;
exports.indentAttributes = MathJax._.core.MmlTree.MmlNode.indentAttributes;
exports.AbstractMmlNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlNode;
exports.AbstractMmlTokenNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode;
exports.AbstractMmlLayoutNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode;
exports.AbstractMmlBaseNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode;
exports.AbstractMmlEmptyNode = MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode;
exports.TextNode = MathJax._.core.MmlTree.MmlNode.TextNode;
exports.XMLNode = MathJax._.core.MmlTree.MmlNode.XMLNode;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.base.BaseMethods["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseMethods["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.APPEND = MathJax._.util.Options.APPEND;
exports.REMOVE = MathJax._.util.Options.REMOVE;
exports.Expandable = MathJax._.util.Options.Expandable;
exports.expandable = MathJax._.util.Options.expandable;
exports.makeArray = MathJax._.util.Options.makeArray;
exports.keys = MathJax._.util.Options.keys;
exports.copy = MathJax._.util.Options.copy;
exports.insert = MathJax._.util.Options.insert;
exports.defaultOptions = MathJax._.util.Options.defaultOptions;
exports.userOptions = MathJax._.util.Options.userOptions;
exports.selectOptions = MathJax._.util.Options.selectOptions;
exports.selectOptionsFromKeys = MathJax._.util.Options.selectOptionsFromKeys;
exports.separateOptions = MathJax._.util.Options.separateOptions;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NEW_OPS = exports.AmsMethods = void 0;
var ParseUtil_js_1 = __webpack_require__(3);
var NodeUtil_js_1 = __webpack_require__(4);
var TexConstants_js_1 = __webpack_require__(6);
var TexParser_js_1 = __webpack_require__(5);
var TexError_js_1 = __webpack_require__(2);
var Symbol_js_1 = __webpack_require__(12);
var BaseMethods_js_1 = __webpack_require__(8);
var MmlNode_js_1 = __webpack_require__(7);
exports.AmsMethods = {};
exports.AmsMethods.AmsEqnArray = function (parser, begin, numbered, taggable, align, spacing, style) {
    var args = parser.GetBrackets('\\begin{' + begin.getName() + '}');
    var array = BaseMethods_js_1.default.EqnArray(parser, begin, numbered, taggable, align, spacing, style);
    return ParseUtil_js_1.default.setArrayAlign(array, args);
};
exports.AmsMethods.AlignAt = function (parser, begin, numbered, taggable) {
    var name = begin.getName();
    var n, valign, align = '', spacing = [];
    if (!taggable) {
        valign = parser.GetBrackets('\\begin{' + name + '}');
    }
    n = parser.GetArgument('\\begin{' + name + '}');
    if (n.match(/[^0-9]/)) {
        throw new TexError_js_1.default('PositiveIntegerArg', 'Argument to %1 must me a positive integer', '\\begin{' + name + '}');
    }
    var count = parseInt(n, 10);
    while (count > 0) {
        align += 'rl';
        spacing.push('0em 0em');
        count--;
    }
    var spaceStr = spacing.join(' ');
    if (taggable) {
        return exports.AmsMethods.EqnArray(parser, begin, numbered, taggable, align, spaceStr);
    }
    var array = exports.AmsMethods.EqnArray(parser, begin, numbered, taggable, align, spaceStr);
    return ParseUtil_js_1.default.setArrayAlign(array, valign);
};
exports.AmsMethods.Multline = function (parser, begin, numbered) {
    parser.Push(begin);
    ParseUtil_js_1.default.checkEqnEnv(parser);
    var item = parser.itemFactory.create('multline', numbered, parser.stack);
    item.arraydef = {
        displaystyle: true,
        rowspacing: '.5em',
        columnwidth: '100%',
        width: parser.options['multlineWidth'],
        side: parser.options['tagSide'],
        minlabelspacing: parser.options['tagIndent']
    };
    return item;
};
exports.NEW_OPS = 'ams-declare-ops';
exports.AmsMethods.HandleDeclareOp = function (parser, name) {
    var limits = (parser.GetStar() ? '' : '\\nolimits\\SkipLimits');
    var cs = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
    if (cs.charAt(0) === '\\') {
        cs = cs.substr(1);
    }
    var op = parser.GetArgument(name);
    if (!op.match(/\\text/)) {
        op = op.replace(/\*/g, '\\text{*}').replace(/-/g, '\\text{-}');
    }
    parser.configuration.handlers.retrieve(exports.NEW_OPS).
        add(cs, new Symbol_js_1.Macro(cs, exports.AmsMethods.Macro, ['\\mathop{\\rm ' + op + '}' + limits]));
};
exports.AmsMethods.HandleOperatorName = function (parser, name) {
    var limits = (parser.GetStar() ? '' : '\\nolimits\\SkipLimits');
    var op = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
    if (!op.match(/\\text/)) {
        op = op.replace(/\*/g, '\\text{*}').replace(/-/g, '\\text{-}');
    }
    parser.string = '\\mathop{\\rm ' + op + '}' + limits + ' ' +
        parser.string.slice(parser.i);
    parser.i = 0;
};
exports.AmsMethods.SkipLimits = function (parser, _name) {
    var c = parser.GetNext(), i = parser.i;
    if (c === '\\' && ++parser.i && parser.GetCS() !== 'limits') {
        parser.i = i;
    }
};
exports.AmsMethods.MultiIntegral = function (parser, name, integral) {
    var next = parser.GetNext();
    if (next === '\\') {
        var i = parser.i;
        next = parser.GetArgument(name);
        parser.i = i;
        if (next === '\\limits') {
            if (name === '\\idotsint') {
                integral = '\\!\\!\\mathop{\\,\\,' + integral + '}';
            }
            else {
                integral = '\\!\\!\\!\\mathop{\\,\\,\\,' + integral + '}';
            }
        }
    }
    parser.string = integral + ' ' + parser.string.slice(parser.i);
    parser.i = 0;
};
exports.AmsMethods.xArrow = function (parser, name, chr, l, r) {
    var def = { width: '+' + ParseUtil_js_1.default.Em((l + r) / 18), lspace: ParseUtil_js_1.default.Em(l / 18) };
    var bot = parser.GetBrackets(name);
    var first = parser.ParseArg(name);
    var arrow = parser.create('token', 'mo', { stretchy: true, texClass: MmlNode_js_1.TEXCLASS.REL }, String.fromCodePoint(chr));
    var mml = parser.create('node', 'munderover', [arrow]);
    var mpadded = parser.create('node', 'mpadded', [first], def);
    NodeUtil_js_1.default.setAttribute(mpadded, 'voffset', '.15em');
    NodeUtil_js_1.default.setChild(mml, mml.over, mpadded);
    if (bot) {
        var bottom = new TexParser_js_1.default(bot, parser.stack.env, parser.configuration).mml();
        mpadded = parser.create('node', 'mpadded', [bottom], def);
        NodeUtil_js_1.default.setAttribute(mpadded, 'voffset', '-.24em');
        NodeUtil_js_1.default.setChild(mml, mml.under, mpadded);
    }
    NodeUtil_js_1.default.setProperty(mml, 'subsupOK', true);
    parser.Push(mml);
};
exports.AmsMethods.HandleShove = function (parser, _name, shove) {
    var top = parser.stack.Top();
    if (top.kind !== 'multline') {
        throw new TexError_js_1.default('CommandOnlyAllowedInEnv', '%1 only allowed in %2 environment', parser.currentCS, 'multline');
    }
    if (top.Size()) {
        throw new TexError_js_1.default('CommandAtTheBeginingOfLine', '%1 must come at the beginning of the line', parser.currentCS);
    }
    top.setProperty('shove', shove);
};
exports.AmsMethods.CFrac = function (parser, name) {
    var lr = ParseUtil_js_1.default.trimSpaces(parser.GetBrackets(name, ''));
    var num = parser.GetArgument(name);
    var den = parser.GetArgument(name);
    var lrMap = {
        l: TexConstants_js_1.TexConstant.Align.LEFT, r: TexConstants_js_1.TexConstant.Align.RIGHT, '': ''
    };
    var numNode = new TexParser_js_1.default('\\strut\\textstyle{' + num + '}', parser.stack.env, parser.configuration).mml();
    var denNode = new TexParser_js_1.default('\\strut\\textstyle{' + den + '}', parser.stack.env, parser.configuration).mml();
    var frac = parser.create('node', 'mfrac', [numNode, denNode]);
    lr = lrMap[lr];
    if (lr == null) {
        throw new TexError_js_1.default('IllegalAlign', 'Illegal alignment specified in %1', parser.currentCS);
    }
    if (lr) {
        NodeUtil_js_1.default.setProperties(frac, { numalign: lr, denomalign: lr });
    }
    parser.Push(frac);
};
exports.AmsMethods.Genfrac = function (parser, name, left, right, thick, style) {
    if (left == null) {
        left = parser.GetDelimiterArg(name);
    }
    if (right == null) {
        right = parser.GetDelimiterArg(name);
    }
    if (thick == null) {
        thick = parser.GetArgument(name);
    }
    if (style == null) {
        style = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
    }
    var num = parser.ParseArg(name);
    var den = parser.ParseArg(name);
    var frac = parser.create('node', 'mfrac', [num, den]);
    if (thick !== '') {
        NodeUtil_js_1.default.setAttribute(frac, 'linethickness', thick);
    }
    if (left || right) {
        NodeUtil_js_1.default.setProperty(frac, 'withDelims', true);
        frac = ParseUtil_js_1.default.fixedFence(parser.configuration, left, frac, right);
    }
    if (style !== '') {
        var styleDigit = parseInt(style, 10);
        var styleAlpha = ['D', 'T', 'S', 'SS'][styleDigit];
        if (styleAlpha == null) {
            throw new TexError_js_1.default('BadMathStyleFor', 'Bad math style for %1', parser.currentCS);
        }
        frac = parser.create('node', 'mstyle', [frac]);
        if (styleAlpha === 'D') {
            NodeUtil_js_1.default.setProperties(frac, { displaystyle: true, scriptlevel: 0 });
        }
        else {
            NodeUtil_js_1.default.setProperties(frac, { displaystyle: false,
                scriptlevel: styleDigit - 1 });
        }
    }
    parser.Push(frac);
};
exports.AmsMethods.HandleTag = function (parser, name) {
    if (!parser.tags.currentTag.taggable && parser.tags.env) {
        throw new TexError_js_1.default('CommandNotAllowedInEnv', '%1 not allowed in %2 environment', parser.currentCS, parser.tags.env);
    }
    if (parser.tags.currentTag.tag) {
        throw new TexError_js_1.default('MultipleCommand', 'Multiple %1', parser.currentCS);
    }
    var star = parser.GetStar();
    var tagId = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
    parser.tags.tag(tagId, star);
};
exports.AmsMethods.HandleNoTag = BaseMethods_js_1.default.HandleNoTag;
exports.AmsMethods.HandleRef = BaseMethods_js_1.default.HandleRef;
exports.AmsMethods.Macro = BaseMethods_js_1.default.Macro;
exports.AmsMethods.Accent = BaseMethods_js_1.default.Accent;
exports.AmsMethods.Tilde = BaseMethods_js_1.default.Tilde;
exports.AmsMethods.Array = BaseMethods_js_1.default.Array;
exports.AmsMethods.Spacer = BaseMethods_js_1.default.Spacer;
exports.AmsMethods.NamedOp = BaseMethods_js_1.default.NamedOp;
exports.AmsMethods.EqnArray = BaseMethods_js_1.default.EqnArray;
//# sourceMappingURL=AmsMethods.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Symbol = MathJax._.input.tex.Symbol.Symbol;
exports.Macro = MathJax._.input.tex.Symbol.Macro;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlStack = MathJax._.input.tex.StackItem.MmlStack;
exports.BaseItem = MathJax._.input.tex.StackItem.BaseItem;

/***/ }),
/* 14 */
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireConfiguration = exports.options = exports.RequireMethods = exports.RequireLoad = void 0;
var Configuration_js_1 = __webpack_require__(0);
var SymbolMap_js_1 = __webpack_require__(1);
var TexError_js_1 = __webpack_require__(2);
var global_js_1 = __webpack_require__(20);
var package_js_1 = __webpack_require__(28);
var loader_js_1 = __webpack_require__(76);
var mathjax_js_1 = __webpack_require__(77);
var Options_js_1 = __webpack_require__(10);
var MJCONFIG = global_js_1.MathJax.config;
function RegisterExtension(jax, name) {
    var _a;
    var require = jax.parseOptions.options.require;
    var required = jax.parseOptions.packageData.get('require').required;
    var extension = name.substr(require.prefix.length);
    if (required.indexOf(extension) < 0) {
        required.push(extension);
        RegisterDependencies(jax, loader_js_1.CONFIG.dependencies[name]);
        var handler = Configuration_js_1.ConfigurationHandler.get(extension);
        if (handler) {
            var options_1 = MJCONFIG[name] || {};
            if (handler.options && Object.keys(handler.options).length === 1 && handler.options[extension]) {
                options_1 = (_a = {}, _a[extension] = options_1, _a);
            }
            jax.configuration.add(handler, jax, options_1);
            var configured = jax.parseOptions.packageData.get('require').configured;
            if (handler.preprocessors.length && !configured.has(extension)) {
                configured.set(extension, true);
                mathjax_js_1.mathjax.retryAfter(Promise.resolve());
            }
        }
    }
}
function RegisterDependencies(jax, names) {
    var e_1, _a;
    if (names === void 0) { names = []; }
    var prefix = jax.parseOptions.options.require.prefix;
    try {
        for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
            var name_1 = names_1_1.value;
            if (name_1.substr(0, prefix.length) === prefix) {
                RegisterExtension(jax, name_1);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function RequireLoad(parser, name) {
    var options = parser.options.require;
    var allow = options.allow;
    var extension = (name.substr(0, 1) === '[' ? '' : options.prefix) + name;
    var allowed = (allow.hasOwnProperty(extension) ? allow[extension] :
        allow.hasOwnProperty(name) ? allow[name] : options.defaultAllow);
    if (!allowed) {
        throw new TexError_js_1.default('BadRequire', 'Extension "%1" is now allowed to be loaded', extension);
    }
    if (package_js_1.Package.packages.has(extension)) {
        RegisterExtension(parser.configuration.packageData.get('require').jax, extension);
    }
    else {
        mathjax_js_1.mathjax.retryAfter(loader_js_1.Loader.load(extension));
    }
}
exports.RequireLoad = RequireLoad;
function config(_config, jax) {
    jax.parseOptions.packageData.set('require', {
        jax: jax,
        required: __spread(jax.options.packages),
        configured: new Map()
    });
    var options = jax.parseOptions.options.require;
    var prefix = options.prefix;
    if (prefix.match(/[^_a-zA-Z0-9]/)) {
        throw Error('Illegal characters used in \\require prefix');
    }
    if (!loader_js_1.CONFIG.paths[prefix]) {
        loader_js_1.CONFIG.paths[prefix] = '[mathjax]/input/tex/extensions';
    }
    options.prefix = '[' + prefix + ']/';
}
exports.RequireMethods = {
    Require: function (parser, name) {
        var required = parser.GetArgument(name);
        if (required.match(/[^_a-zA-Z0-9]/) || required === '') {
            throw new TexError_js_1.default('BadPackageName', 'Argument for %1 is not a valid package name', name);
        }
        RequireLoad(parser, required);
    }
};
exports.options = {
    require: {
        allow: Options_js_1.expandable({
            base: false,
            'all-packages': false
        }),
        defaultAllow: true,
        prefix: 'tex'
    }
};
new SymbolMap_js_1.CommandMap('require', { require: 'Require' }, exports.RequireMethods);
exports.RequireConfiguration = Configuration_js_1.Configuration.create('require', { handler: { macro: ['require'] }, config: config, options: exports.options });
//# sourceMappingURL=RequireConfiguration.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllPackages = void 0;
__webpack_require__(22);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(33);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(42);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(24);
__webpack_require__(54);
__webpack_require__(57);
__webpack_require__(59);
__webpack_require__(26);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(73);
__webpack_require__(75);
if (typeof MathJax !== 'undefined' && MathJax.loader) {
    MathJax.loader.preLoad('[tex]/action', '[tex]/ams', '[tex]/amscd', '[tex]/bbox', '[tex]/boldsymbol', '[tex]/braket', '[tex]/bussproofs', '[tex]/cancel', '[tex]/color', '[tex]/colorv2', '[tex]/enclose', '[tex]/extpfeil', '[tex]/html', '[tex]/mhchem', '[tex]/newcommand', '[tex]/noerrors', '[tex]/noundefined', '[tex]/physics', '[tex]/unicode', '[tex]/verb', '[tex]/configmacros', '[tex]/tagformat', '[tex]/textmacros');
}
exports.AllPackages = [
    'base',
    'action',
    'ams',
    'amscd',
    'bbox',
    'boldsymbol',
    'braket',
    'bussproofs',
    'cancel',
    'color',
    'enclose',
    'extpfeil',
    'html',
    'mhchem',
    'newcommand',
    'noerrors',
    'noundefined',
    'unicode',
    'verb',
    'configmacros',
    'tagformat',
    'textmacros'
];
//# sourceMappingURL=AllPackages.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.StartItem = MathJax._.input.tex.base.BaseItems.StartItem;
exports.StopItem = MathJax._.input.tex.base.BaseItems.StopItem;
exports.OpenItem = MathJax._.input.tex.base.BaseItems.OpenItem;
exports.CloseItem = MathJax._.input.tex.base.BaseItems.CloseItem;
exports.PrimeItem = MathJax._.input.tex.base.BaseItems.PrimeItem;
exports.SubsupItem = MathJax._.input.tex.base.BaseItems.SubsupItem;
exports.OverItem = MathJax._.input.tex.base.BaseItems.OverItem;
exports.LeftItem = MathJax._.input.tex.base.BaseItems.LeftItem;
exports.RightItem = MathJax._.input.tex.base.BaseItems.RightItem;
exports.BeginItem = MathJax._.input.tex.base.BaseItems.BeginItem;
exports.EndItem = MathJax._.input.tex.base.BaseItems.EndItem;
exports.StyleItem = MathJax._.input.tex.base.BaseItems.StyleItem;
exports.PositionItem = MathJax._.input.tex.base.BaseItems.PositionItem;
exports.CellItem = MathJax._.input.tex.base.BaseItems.CellItem;
exports.MmlItem = MathJax._.input.tex.base.BaseItems.MmlItem;
exports.FnItem = MathJax._.input.tex.base.BaseItems.FnItem;
exports.NotItem = MathJax._.input.tex.base.BaseItems.NotItem;
exports.DotsItem = MathJax._.input.tex.base.BaseItems.DotsItem;
exports.ArrayItem = MathJax._.input.tex.base.BaseItems.ArrayItem;
exports.EqnArrayItem = MathJax._.input.tex.base.BaseItems.EqnArrayItem;
exports.EquationItem = MathJax._.input.tex.base.BaseItems.EquationItem;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Label = MathJax._.input.tex.Tags.Label;
exports.TagInfo = MathJax._.input.tex.Tags.TagInfo;
exports.AbstractTags = MathJax._.input.tex.Tags.AbstractTags;
exports.NoTags = MathJax._.input.tex.Tags.NoTags;
exports.AllTags = MathJax._.input.tex.Tags.AllTags;
exports.TagsFactory = MathJax._.input.tex.Tags.TagsFactory;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearDocument = exports.saveDocument = exports.makeBsprAttributes = exports.removeProperty = exports.getProperty = exports.setProperty = exports.balanceRules = void 0;
var NodeUtil_js_1 = __webpack_require__(4);
var ParseUtil_js_1 = __webpack_require__(3);
var doc = null;
var item = null;
var getBBox = function (node) {
    item.root = node;
    var width = doc.outputJax.getBBox(item, doc).w;
    return width;
};
var getRule = function (node) {
    var i = 0;
    while (node && !NodeUtil_js_1.default.isType(node, 'mtable')) {
        if (NodeUtil_js_1.default.isType(node, 'text')) {
            return null;
        }
        if (NodeUtil_js_1.default.isType(node, 'mrow')) {
            node = node.childNodes[0];
            i = 0;
            continue;
        }
        node = node.parent.childNodes[i];
        i++;
    }
    return node;
};
var getPremises = function (rule, direction) {
    return rule.childNodes[direction === 'up' ? 1 : 0].childNodes[0].
        childNodes[0].childNodes[0].childNodes[0];
};
var getPremise = function (premises, n) {
    return premises.childNodes[n].childNodes[0].childNodes[0];
};
var firstPremise = function (premises) {
    return getPremise(premises, 0);
};
var lastPremise = function (premises) {
    return getPremise(premises, premises.childNodes.length - 1);
};
var getConclusion = function (rule, direction) {
    return rule.childNodes[direction === 'up' ? 0 : 1].childNodes[0].childNodes[0].childNodes[0];
};
var getColumn = function (inf) {
    while (inf && !NodeUtil_js_1.default.isType(inf, 'mtd')) {
        inf = inf.parent;
    }
    return inf;
};
var nextSibling = function (inf) {
    return inf.parent.childNodes[inf.parent.childNodes.indexOf(inf) + 1];
};
var previousSibling = function (inf) {
    return inf.parent.childNodes[inf.parent.childNodes.indexOf(inf) - 1];
};
var getParentInf = function (inf) {
    while (inf && exports.getProperty(inf, 'inference') == null) {
        inf = inf.parent;
    }
    return inf;
};
var getSpaces = function (inf, rule, right) {
    if (right === void 0) { right = false; }
    var result = 0;
    if (inf === rule) {
        return result;
    }
    if (inf !== rule.parent) {
        var children_1 = inf.childNodes;
        var index_1 = right ? children_1.length - 1 : 0;
        if (NodeUtil_js_1.default.isType(children_1[index_1], 'mspace')) {
            result += getBBox(children_1[index_1]);
        }
        inf = rule.parent;
    }
    if (inf === rule) {
        return result;
    }
    var children = inf.childNodes;
    var index = right ? children.length - 1 : 0;
    if (children[index] !== rule) {
        result += getBBox(children[index]);
    }
    return result;
};
var adjustValue = function (inf, right) {
    if (right === void 0) { right = false; }
    var rule = getRule(inf);
    var conc = getConclusion(rule, exports.getProperty(rule, 'inferenceRule'));
    var w = getSpaces(inf, rule, right);
    var x = getBBox(rule);
    var y = getBBox(conc);
    return w + ((x - y) / 2);
};
var addSpace = function (config, inf, space, right) {
    if (right === void 0) { right = false; }
    if (exports.getProperty(inf, 'inferenceRule') ||
        exports.getProperty(inf, 'labelledRule')) {
        var mrow = config.nodeFactory.create('node', 'mrow');
        inf.parent.replaceChild(mrow, inf);
        mrow.setChildren([inf]);
        moveProperties(inf, mrow);
        inf = mrow;
    }
    var index = right ? inf.childNodes.length - 1 : 0;
    var mspace = inf.childNodes[index];
    if (NodeUtil_js_1.default.isType(mspace, 'mspace')) {
        NodeUtil_js_1.default.setAttribute(mspace, 'width', ParseUtil_js_1.default.Em(ParseUtil_js_1.default.dimen2em(NodeUtil_js_1.default.getAttribute(mspace, 'width')) + space));
        return;
    }
    mspace = config.nodeFactory.create('node', 'mspace', [], { width: ParseUtil_js_1.default.Em(space) });
    if (right) {
        inf.appendChild(mspace);
        return;
    }
    mspace.parent = inf;
    inf.childNodes.unshift(mspace);
};
var moveProperties = function (src, dest) {
    var props = ['inference', 'proof', 'maxAdjust', 'labelledRule'];
    props.forEach(function (x) {
        var value = exports.getProperty(src, x);
        if (value != null) {
            exports.setProperty(dest, x, value);
            exports.removeProperty(src, x);
        }
    });
};
var adjustSequents = function (config) {
    var sequents = config.nodeLists['sequent'];
    if (!sequents) {
        return;
    }
    for (var i = sequents.length - 1, seq = void 0; seq = sequents[i]; i--) {
        if (exports.getProperty(seq, 'sequentProcessed')) {
            exports.removeProperty(seq, 'sequentProcessed');
            continue;
        }
        var collect = [];
        var inf = getParentInf(seq);
        if (exports.getProperty(inf, 'inference') !== 1) {
            continue;
        }
        collect.push(seq);
        while (exports.getProperty(inf, 'inference') === 1) {
            inf = getRule(inf);
            var premise = firstPremise(getPremises(inf, exports.getProperty(inf, 'inferenceRule')));
            var sequent = (exports.getProperty(premise, 'inferenceRule')) ?
                getConclusion(premise, exports.getProperty(premise, 'inferenceRule')) :
                premise;
            if (exports.getProperty(sequent, 'sequent')) {
                seq = sequent.childNodes[0];
                collect.push(seq);
                exports.setProperty(seq, 'sequentProcessed', true);
            }
            inf = premise;
        }
        adjustSequentPairwise(config, collect);
    }
};
var addSequentSpace = function (config, sequent, position, direction, width) {
    var mspace = config.nodeFactory.create('node', 'mspace', [], { width: ParseUtil_js_1.default.Em(width) });
    if (direction === 'left') {
        var row = sequent.childNodes[position].childNodes[0];
        mspace.parent = row;
        row.childNodes.unshift(mspace);
    }
    else {
        sequent.childNodes[position].appendChild(mspace);
    }
    exports.setProperty(sequent.parent, 'sequentAdjust_' + direction, width);
};
var adjustSequentPairwise = function (config, sequents) {
    var top = sequents.pop();
    while (sequents.length) {
        var bottom = sequents.pop();
        var _a = __read(compareSequents(top, bottom), 2), left = _a[0], right = _a[1];
        if (exports.getProperty(top.parent, 'axiom')) {
            addSequentSpace(config, left < 0 ? top : bottom, 0, 'left', Math.abs(left));
            addSequentSpace(config, right < 0 ? top : bottom, 2, 'right', Math.abs(right));
        }
        top = bottom;
    }
};
var compareSequents = function (top, bottom) {
    var tr = getBBox(top.childNodes[2]);
    var br = getBBox(bottom.childNodes[2]);
    var tl = getBBox(top.childNodes[0]);
    var bl = getBBox(bottom.childNodes[0]);
    var dl = tl - bl;
    var dr = tr - br;
    return [dl, dr];
};
exports.balanceRules = function (arg) {
    var e_1, _a;
    item = new arg.document.options.MathItem('', null, arg.math.display);
    var config = arg.data;
    adjustSequents(config);
    var inferences = config.nodeLists['inference'] || [];
    try {
        for (var inferences_1 = __values(inferences), inferences_1_1 = inferences_1.next(); !inferences_1_1.done; inferences_1_1 = inferences_1.next()) {
            var inf = inferences_1_1.value;
            var isProof = exports.getProperty(inf, 'proof');
            var rule = getRule(inf);
            var premises = getPremises(rule, exports.getProperty(rule, 'inferenceRule'));
            var premiseF = firstPremise(premises);
            if (exports.getProperty(premiseF, 'inference')) {
                var adjust_1 = adjustValue(premiseF);
                if (adjust_1) {
                    addSpace(config, premiseF, -adjust_1);
                    var w_1 = getSpaces(inf, rule, false);
                    addSpace(config, inf, adjust_1 - w_1);
                }
            }
            var premiseL = lastPremise(premises);
            if (exports.getProperty(premiseL, 'inference') == null) {
                continue;
            }
            var adjust = adjustValue(premiseL, true);
            addSpace(config, premiseL, -adjust, true);
            var w = getSpaces(inf, rule, true);
            var maxAdjust = exports.getProperty(inf, 'maxAdjust');
            if (maxAdjust != null) {
                adjust = Math.max(adjust, maxAdjust);
            }
            var column = void 0;
            if (isProof || !(column = getColumn(inf))) {
                addSpace(config, exports.getProperty(inf, 'proof') ? inf : inf.parent, adjust - w, true);
                continue;
            }
            var sibling = nextSibling(column);
            if (sibling) {
                var pos = config.nodeFactory.create('node', 'mspace', [], { width: adjust - w + 'em' });
                sibling.appendChild(pos);
                inf.removeProperty('maxAdjust');
                continue;
            }
            var parentRule = getParentInf(column);
            if (!parentRule) {
                continue;
            }
            adjust = exports.getProperty(parentRule, 'maxAdjust') ?
                Math.max(exports.getProperty(parentRule, 'maxAdjust'), adjust) : adjust;
            exports.setProperty(parentRule, 'maxAdjust', adjust);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (inferences_1_1 && !inferences_1_1.done && (_a = inferences_1.return)) _a.call(inferences_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
var property_prefix = 'bspr_';
var blacklistedProperties = (_a = {},
    _a[property_prefix + 'maxAdjust'] = true,
    _a);
exports.setProperty = function (node, property, value) {
    NodeUtil_js_1.default.setProperty(node, property_prefix + property, value);
};
exports.getProperty = function (node, property) {
    return NodeUtil_js_1.default.getProperty(node, property_prefix + property);
};
exports.removeProperty = function (node, property) {
    node.removeProperty(property_prefix + property);
};
exports.makeBsprAttributes = function (arg) {
    arg.data.root.walkTree(function (mml, _data) {
        var attr = [];
        mml.getPropertyNames().forEach(function (x) {
            if (!blacklistedProperties[x] && x.match(RegExp('^' + property_prefix))) {
                attr.push(x + ':' + mml.getProperty(x));
            }
        });
        if (attr.length) {
            NodeUtil_js_1.default.setAttribute(mml, 'semantics', attr.join(';'));
        }
    });
};
exports.saveDocument = function (arg) {
    doc = arg.document;
    if (!('getBBox' in doc.outputJax)) {
        throw Error('The bussproofs extension requires an output jax with a getBBox() method');
    }
};
exports.clearDocument = function (_arg) {
    doc = null;
};
//# sourceMappingURL=BussproofsUtil.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ParseUtil_js_1 = __webpack_require__(3);
var TexError_js_1 = __webpack_require__(2);
var Symbol_js_1 = __webpack_require__(12);
var NewcommandUtil;
(function (NewcommandUtil) {
    function disassembleSymbol(name, symbol) {
        var newArgs = [name, symbol.char];
        if (symbol.attributes) {
            for (var key in symbol.attributes) {
                newArgs.push(key);
                newArgs.push(symbol.attributes[key]);
            }
        }
        return newArgs;
    }
    NewcommandUtil.disassembleSymbol = disassembleSymbol;
    function assembleSymbol(args) {
        var name = args[0];
        var char = args[1];
        var attrs = {};
        for (var i = 2; i < args.length; i = i + 2) {
            attrs[args[i]] = args[i + 1];
        }
        return new Symbol_js_1.Symbol(name, char, attrs);
    }
    NewcommandUtil.assembleSymbol = assembleSymbol;
    function GetCSname(parser, cmd) {
        var c = parser.GetNext();
        if (c !== '\\') {
            throw new TexError_js_1.default('MissingCS', '%1 must be followed by a control sequence', cmd);
        }
        var cs = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(cmd));
        return cs.substr(1);
    }
    NewcommandUtil.GetCSname = GetCSname;
    function GetTemplate(parser, cmd, cs) {
        var c = parser.GetNext();
        var params = [];
        var n = 0;
        var i = parser.i;
        while (parser.i < parser.string.length) {
            c = parser.GetNext();
            if (c === '#') {
                if (i !== parser.i) {
                    params[n] = parser.string.substr(i, parser.i - i);
                }
                c = parser.string.charAt(++parser.i);
                if (!c.match(/^[1-9]$/)) {
                    throw new TexError_js_1.default('CantUseHash2', 'Illegal use of # in template for %1', cs);
                }
                if (parseInt(c) !== ++n) {
                    throw new TexError_js_1.default('SequentialParam', 'Parameters for %1 must be numbered sequentially', cs);
                }
                i = parser.i + 1;
            }
            else if (c === '{') {
                if (i !== parser.i) {
                    params[n] = parser.string.substr(i, parser.i - i);
                }
                if (params.length > 0) {
                    return [n.toString()].concat(params);
                }
                else {
                    return n;
                }
            }
            parser.i++;
        }
        throw new TexError_js_1.default('MissingReplacementString', 'Missing replacement string for definition of %1', cmd);
    }
    NewcommandUtil.GetTemplate = GetTemplate;
    function GetParameter(parser, name, param) {
        if (param == null) {
            return parser.GetArgument(name);
        }
        var i = parser.i;
        var j = 0;
        var hasBraces = 0;
        while (parser.i < parser.string.length) {
            var c = parser.string.charAt(parser.i);
            if (c === '{') {
                if (parser.i === i) {
                    hasBraces = 1;
                }
                parser.GetArgument(name);
                j = parser.i - i;
            }
            else if (MatchParam(parser, param)) {
                if (hasBraces) {
                    i++;
                    j -= 2;
                }
                return parser.string.substr(i, j);
            }
            else if (c === '\\') {
                parser.i++;
                j++;
                hasBraces = 0;
                var match = parser.string.substr(parser.i).match(/[a-z]+|./i);
                if (match) {
                    parser.i += match[0].length;
                    j = parser.i - i;
                }
            }
            else {
                parser.i++;
                j++;
                hasBraces = 0;
            }
        }
        throw new TexError_js_1.default('RunawayArgument', 'Runaway argument for %1?', name);
    }
    NewcommandUtil.GetParameter = GetParameter;
    function MatchParam(parser, param) {
        if (parser.string.substr(parser.i, param.length) !== param) {
            return 0;
        }
        if (param.match(/\\[a-z]+$/i) &&
            parser.string.charAt(parser.i + param.length).match(/[a-z]/i)) {
            return 0;
        }
        parser.i += param.length;
        return 1;
    }
    NewcommandUtil.MatchParam = MatchParam;
    function addDelimiter(parser, cs, char, attr) {
        var handlers = parser.configuration.handlers;
        var handler = handlers.retrieve(NewcommandUtil.NEW_DELIMITER);
        handler.add(cs, new Symbol_js_1.Symbol(cs, char, attr));
    }
    NewcommandUtil.addDelimiter = addDelimiter;
    function addMacro(parser, cs, func, attr, symbol) {
        if (symbol === void 0) { symbol = ''; }
        var handlers = parser.configuration.handlers;
        var handler = handlers.retrieve(NewcommandUtil.NEW_COMMAND);
        handler.add(cs, new Symbol_js_1.Macro(symbol ? symbol : cs, func, attr));
    }
    NewcommandUtil.addMacro = addMacro;
    function addEnvironment(parser, env, func, attr) {
        var handlers = parser.configuration.handlers;
        var handler = handlers.retrieve(NewcommandUtil.NEW_ENVIRONMENT);
        handler.add(env, new Symbol_js_1.Macro(env, func, attr));
    }
    NewcommandUtil.addEnvironment = addEnvironment;
    NewcommandUtil.NEW_DELIMITER = 'new-Delimiter';
    NewcommandUtil.NEW_COMMAND = 'new-Command';
    NewcommandUtil.NEW_ENVIRONMENT = 'new-Environment';
})(NewcommandUtil || (NewcommandUtil = {}));
exports.default = NewcommandUtil;
//# sourceMappingURL=NewcommandUtil.js.map

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
exports.AutoloadConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
var SymbolMap_js_1 = __webpack_require__(1);
var Symbol_js_1 = __webpack_require__(12);
var RequireConfiguration_js_1 = __webpack_require__(14);
var package_js_1 = __webpack_require__(28);
var Options_js_1 = __webpack_require__(10);
function Autoload(parser, name, extension, isMacro) {
    var e_1, _a, e_2, _b;
    if (package_js_1.Package.packages.has(parser.options.require.prefix + extension)) {
        var def = parser.options.autoload[extension];
        var _c = __read((def.length === 2 && Array.isArray(def[0]) ? def : [def, []]), 2), macros = _c[0], envs = _c[1];
        try {
            for (var macros_1 = __values(macros), macros_1_1 = macros_1.next(); !macros_1_1.done; macros_1_1 = macros_1.next()) {
                var macro = macros_1_1.value;
                AutoloadMacros.remove(macro);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (macros_1_1 && !macros_1_1.done && (_a = macros_1.return)) _a.call(macros_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var envs_1 = __values(envs), envs_1_1 = envs_1.next(); !envs_1_1.done; envs_1_1 = envs_1.next()) {
                var env = envs_1_1.value;
                AutoloadEnvironments.remove(env);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (envs_1_1 && !envs_1_1.done && (_b = envs_1.return)) _b.call(envs_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        parser.string = (isMacro ? name : '\\begin{' + name.slice(1) + '}') + parser.string.slice(parser.i);
        parser.i = 0;
    }
    RequireConfiguration_js_1.RequireLoad(parser, extension);
}
function initAutoload(config) {
    if (!config.options.require) {
        Options_js_1.defaultOptions(config.options, RequireConfiguration_js_1.RequireConfiguration.options);
    }
}
function configAutoload(config, jax) {
    var e_3, _a, e_4, _b, e_5, _c;
    var parser = jax.parseOptions;
    var macros = parser.handlers.get('macro');
    var environments = parser.handlers.get('environment');
    var autoload = parser.options.autoload;
    parser.packageData.set('autoload', { Autoload: Autoload });
    try {
        for (var _d = __values(Object.keys(autoload)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var extension = _e.value;
            var def = autoload[extension];
            var _f = __read((def.length === 2 && Array.isArray(def[0]) ? def : [def, []]), 2), macs = _f[0], envs = _f[1];
            try {
                for (var macs_1 = (e_4 = void 0, __values(macs)), macs_1_1 = macs_1.next(); !macs_1_1.done; macs_1_1 = macs_1.next()) {
                    var name_1 = macs_1_1.value;
                    if (!macros.lookup(name_1) || name_1 === 'color') {
                        AutoloadMacros.add(name_1, new Symbol_js_1.Macro(name_1, Autoload, [extension, true]));
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (macs_1_1 && !macs_1_1.done && (_b = macs_1.return)) _b.call(macs_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
            try {
                for (var envs_2 = (e_5 = void 0, __values(envs)), envs_2_1 = envs_2.next(); !envs_2_1.done; envs_2_1 = envs_2.next()) {
                    var name_2 = envs_2_1.value;
                    if (!environments.lookup(name_2)) {
                        AutoloadEnvironments.add(name_2, new Symbol_js_1.Macro(name_2, Autoload, [extension, false]));
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (envs_2_1 && !envs_2_1.done && (_c = envs_2.return)) _c.call(envs_2);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
        }
        finally { if (e_3) throw e_3.error; }
    }
    if (!parser.packageData.get('require')) {
        RequireConfiguration_js_1.RequireConfiguration.config(config, jax);
    }
}
var AutoloadMacros = new SymbolMap_js_1.CommandMap('autoload-macros', {}, {});
var AutoloadEnvironments = new SymbolMap_js_1.CommandMap('autoload-environments', {}, {});
exports.AutoloadConfiguration = Configuration_js_1.Configuration.create('autoload', {
    handler: {
        macro: ['autoload-macros'],
        environment: ['autoload-environments']
    },
    options: {
        autoload: Options_js_1.expandable({
            action: ['toggle', 'mathtip', 'texttip'],
            amscd: [[], ['CD']],
            bbox: ['bbox'],
            boldsymbol: ['boldsymbol'],
            braket: ['bra', 'ket', 'braket', 'set', 'Bra', 'Ket', 'Braket', 'Set', 'ketbra', 'Ketbra'],
            bussproofs: [[], ['prooftree']],
            cancel: ['cancel', 'bcancel', 'xcancel', 'cancelto'],
            color: ['color', 'definecolor', 'textcolor', 'colorbox', 'fcolorbox'],
            enclose: ['enclose'],
            extpfeil: ['xtwoheadrightarrow', 'xtwoheadleftarrow', 'xmapsto', 'xlongequal', 'xtofrom', 'Newextarrow'],
            html: ['href', 'class', 'style', 'cssId'],
            mhchem: ['ce', 'pu'],
            newcommand: ['newcommand', 'renewcommand', 'newenvironment', 'renewenvironment', 'def', 'let'],
            unicode: ['unicode'],
            verb: ['verb']
        })
    },
    config: configAutoload,
    init: initAutoload,
    priority: 10
});
//# sourceMappingURL=AutoloadConfiguration.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Other = MathJax._.input.tex.base.BaseConfiguration.Other;
exports.BaseTags = MathJax._.input.tex.base.BaseConfiguration.BaseTags;
exports.BaseConfiguration = MathJax._.input.tex.base.BaseConfiguration.BaseConfiguration;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EncloseConfiguration = exports.EncloseMethods = exports.ENCLOSE_OPTIONS = void 0;
var Configuration_js_1 = __webpack_require__(0);
var SymbolMap_js_1 = __webpack_require__(1);
var ParseUtil_js_1 = __webpack_require__(3);
exports.ENCLOSE_OPTIONS = {
    'data-arrowhead': 1,
    color: 1,
    mathcolor: 1,
    background: 1,
    mathbackground: 1,
    'data-padding': 1,
    'data-thickness': 1
};
exports.EncloseMethods = {};
exports.EncloseMethods.Enclose = function (parser, name) {
    var notation = parser.GetArgument(name).replace(/,/g, ' ');
    var attr = parser.GetBrackets(name, '');
    var math = parser.ParseArg(name);
    var def = ParseUtil_js_1.default.keyvalOptions(attr, exports.ENCLOSE_OPTIONS);
    def.notation = notation;
    parser.Push(parser.create('node', 'menclose', [math], def));
};
new SymbolMap_js_1.CommandMap('enclose', { enclose: 'Enclose' }, exports.EncloseMethods);
exports.EncloseConfiguration = Configuration_js_1.Configuration.create('enclose', { handler: { macro: ['enclose'] } });
//# sourceMappingURL=EncloseConfiguration.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TexError_js_1 = __webpack_require__(2);
var sm = __webpack_require__(1);
var BaseMethods_js_1 = __webpack_require__(8);
var ParseUtil_js_1 = __webpack_require__(3);
var NewcommandUtil_js_1 = __webpack_require__(19);
var NewcommandMethods = {};
NewcommandMethods.NewCommand = function (parser, name) {
    var cs = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
    var n = parser.GetBrackets(name);
    var opt = parser.GetBrackets(name);
    var def = parser.GetArgument(name);
    if (cs.charAt(0) === '\\') {
        cs = cs.substr(1);
    }
    if (!cs.match(/^(.|[a-z]+)$/i)) {
        throw new TexError_js_1.default('IllegalControlSequenceName', 'Illegal control sequence name for %1', name);
    }
    if (n) {
        n = ParseUtil_js_1.default.trimSpaces(n);
        if (!n.match(/^[0-9]+$/)) {
            throw new TexError_js_1.default('IllegalParamNumber', 'Illegal number of parameters specified in %1', name);
        }
    }
    NewcommandUtil_js_1.default.addMacro(parser, cs, NewcommandMethods.Macro, [def, n, opt]);
};
NewcommandMethods.NewEnvironment = function (parser, name) {
    var env = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name));
    var n = parser.GetBrackets(name);
    var opt = parser.GetBrackets(name);
    var bdef = parser.GetArgument(name);
    var edef = parser.GetArgument(name);
    if (n) {
        n = ParseUtil_js_1.default.trimSpaces(n);
        if (!n.match(/^[0-9]+$/)) {
            throw new TexError_js_1.default('IllegalParamNumber', 'Illegal number of parameters specified in %1', name);
        }
    }
    NewcommandUtil_js_1.default.addEnvironment(parser, env, NewcommandMethods.BeginEnv, [true, bdef, edef, n, opt]);
};
NewcommandMethods.MacroDef = function (parser, name) {
    var cs = NewcommandUtil_js_1.default.GetCSname(parser, name);
    var params = NewcommandUtil_js_1.default.GetTemplate(parser, name, '\\' + cs);
    var def = parser.GetArgument(name);
    !(params instanceof Array) ?
        NewcommandUtil_js_1.default.addMacro(parser, cs, NewcommandMethods.Macro, [def, params]) :
        NewcommandUtil_js_1.default.addMacro(parser, cs, NewcommandMethods.MacroWithTemplate, [def].concat(params));
};
NewcommandMethods.Let = function (parser, name) {
    var cs = NewcommandUtil_js_1.default.GetCSname(parser, name);
    var c = parser.GetNext();
    if (c === '=') {
        parser.i++;
        c = parser.GetNext();
    }
    var handlers = parser.configuration.handlers;
    if (c === '\\') {
        name = NewcommandUtil_js_1.default.GetCSname(parser, name);
        var macro_1 = handlers.get('delimiter').lookup('\\' + name);
        if (macro_1) {
            NewcommandUtil_js_1.default.addDelimiter(parser, '\\' + cs, macro_1.char, macro_1.attributes);
            return;
        }
        var map_1 = handlers.get('macro').applicable(name);
        if (!map_1) {
            return;
        }
        if (map_1 instanceof sm.MacroMap) {
            var macro_2 = map_1.lookup(name);
            NewcommandUtil_js_1.default.addMacro(parser, cs, macro_2.func, macro_2.args, macro_2.symbol);
            return;
        }
        macro_1 = map_1.lookup(name);
        var newArgs = NewcommandUtil_js_1.default.disassembleSymbol(cs, macro_1);
        var method = function (p, _cs) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var symb = NewcommandUtil_js_1.default.assembleSymbol(rest);
            return map_1.parser(p, symb);
        };
        NewcommandUtil_js_1.default.addMacro(parser, cs, method, newArgs);
        return;
    }
    parser.i++;
    var macro = handlers.get('delimiter').lookup(c);
    if (macro) {
        NewcommandUtil_js_1.default.addDelimiter(parser, '\\' + cs, macro.char, macro.attributes);
        return;
    }
    NewcommandUtil_js_1.default.addMacro(parser, cs, NewcommandMethods.Macro, [c]);
};
NewcommandMethods.MacroWithTemplate = function (parser, name, text, n) {
    var params = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        params[_i - 4] = arguments[_i];
    }
    var argCount = parseInt(n, 10);
    if (argCount) {
        var args = [];
        parser.GetNext();
        if (params[0] && !NewcommandUtil_js_1.default.MatchParam(parser, params[0])) {
            throw new TexError_js_1.default('MismatchUseDef', 'Use of %1 doesn\'t match its definition', name);
        }
        for (var i = 0; i < argCount; i++) {
            args.push(NewcommandUtil_js_1.default.GetParameter(parser, name, params[i + 1]));
        }
        text = ParseUtil_js_1.default.substituteArgs(parser, args, text);
    }
    parser.string = ParseUtil_js_1.default.addArgs(parser, text, parser.string.slice(parser.i));
    parser.i = 0;
    if (++parser.macroCount > parser.configuration.options['maxMacros']) {
        throw new TexError_js_1.default('MaxMacroSub1', 'MathJax maximum macro substitution count exceeded; ' +
            'is here a recursive macro call?');
    }
};
NewcommandMethods.BeginEnv = function (parser, begin, bdef, edef, n, def) {
    if (begin.getProperty('end') && parser.stack.env['closing'] === begin.getName()) {
        delete parser.stack.env['closing'];
        var rest = parser.string.slice(parser.i);
        parser.string = edef;
        parser.i = 0;
        parser.Parse();
        parser.string = rest;
        parser.i = 0;
        return parser.itemFactory.create('end').setProperty('name', begin.getName());
    }
    if (n) {
        var args = [];
        if (def != null) {
            var optional = parser.GetBrackets('\\begin{' + begin.getName() + '}');
            args.push(optional == null ? def : optional);
        }
        for (var i = args.length; i < n; i++) {
            args.push(parser.GetArgument('\\begin{' + begin.getName() + '}'));
        }
        bdef = ParseUtil_js_1.default.substituteArgs(parser, args, bdef);
        edef = ParseUtil_js_1.default.substituteArgs(parser, [], edef);
    }
    parser.string = ParseUtil_js_1.default.addArgs(parser, bdef, parser.string.slice(parser.i));
    parser.i = 0;
    return parser.itemFactory.create('beginEnv').setProperty('name', begin.getName());
};
NewcommandMethods.Macro = BaseMethods_js_1.default.Macro;
exports.default = NewcommandMethods;
//# sourceMappingURL=NewcommandMethods.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewcommandConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
var NewcommandItems_js_1 = __webpack_require__(55);
var NewcommandUtil_js_1 = __webpack_require__(19);
__webpack_require__(56);
var ParseMethods_js_1 = __webpack_require__(9);
var sm = __webpack_require__(1);
var init = function (config) {
    new sm.DelimiterMap(NewcommandUtil_js_1.default.NEW_DELIMITER, ParseMethods_js_1.default.delimiter, {});
    new sm.CommandMap(NewcommandUtil_js_1.default.NEW_COMMAND, {}, {});
    new sm.EnvironmentMap(NewcommandUtil_js_1.default.NEW_ENVIRONMENT, ParseMethods_js_1.default.environment, {}, {});
    config.append(Configuration_js_1.Configuration.local({ handler: { character: [],
            delimiter: [NewcommandUtil_js_1.default.NEW_DELIMITER],
            macro: [NewcommandUtil_js_1.default.NEW_DELIMITER,
                NewcommandUtil_js_1.default.NEW_COMMAND],
            environment: [NewcommandUtil_js_1.default.NEW_ENVIRONMENT]
        },
        priority: -1 }));
};
exports.NewcommandConfiguration = Configuration_js_1.Configuration.create('newcommand', {
    handler: {
        macro: ['Newcommand-macros']
    },
    items: (_a = {},
        _a[NewcommandItems_js_1.BeginEnvItem.prototype.kind] = NewcommandItems_js_1.BeginEnvItem,
        _a),
    options: { maxMacros: 1000 },
    init: init
});
//# sourceMappingURL=NewcommandConfiguration.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TextMacrosMethods = void 0;
var TexParser_js_1 = __webpack_require__(5);
var Retries_js_1 = __webpack_require__(71);
var BaseMethods_js_1 = __webpack_require__(8);
exports.TextMacrosMethods = {
    Comment: function (parser, _c) {
        while (parser.i < parser.string.length && parser.string.charAt(parser.i) !== '\n') {
            parser.i++;
        }
        parser.i++;
    },
    Math: function (parser, open) {
        parser.saveText();
        var i = parser.i;
        var j, c;
        var braces = 0;
        while ((c = parser.GetNext())) {
            j = parser.i++;
            switch (c) {
                case '\\':
                    var cs = parser.GetCS();
                    if (cs === ')')
                        c = '\\(';
                case '$':
                    if (braces === 0 && open === c) {
                        var config = parser.texParser.configuration;
                        var mml = (new TexParser_js_1.default(parser.string.substr(i, j - i), parser.stack.env, config)).mml();
                        parser.PushMath(mml);
                        return;
                    }
                    break;
                case '{':
                    braces++;
                    break;
                case '}':
                    if (braces === 0) {
                        parser.Error('ExtraCloseMissingOpen', 'Extra close brace or missing open brace');
                    }
                    braces--;
                    break;
            }
        }
        parser.Error('MathNotTerminated', 'Math-mode is not properly terminated');
    },
    MathModeOnly: function (parser, c) {
        parser.Error('MathModeOnly', '\'%1\' allowed only in math mode', c);
    },
    Misplaced: function (parser, c) {
        parser.Error('Misplaced', '\'%1\' can not be used here', c);
    },
    OpenBrace: function (parser, _c) {
        var env = parser.stack.env;
        parser.envStack.push(env);
        parser.stack.env = Object.assign({}, env);
    },
    CloseBrace: function (parser, _c) {
        if (parser.envStack.length) {
            parser.saveText();
            parser.stack.env = parser.envStack.pop();
        }
        else {
            parser.Error('ExtraCloseMissingOpen', 'Extra close brace or missing open brace');
        }
    },
    OpenQuote: function (parser, c) {
        if (parser.string.charAt(parser.i) === c) {
            parser.text += '\u201C';
            parser.i++;
        }
        else {
            parser.text += '\u2018';
        }
    },
    CloseQuote: function (parser, c) {
        if (parser.string.charAt(parser.i) === c) {
            parser.text += '\u201D';
            parser.i++;
        }
        else {
            parser.text += '\u2019';
        }
    },
    Tilde: function (parser, _c) {
        parser.text += '\u00A0';
    },
    Space: function (parser, _c) {
        parser.text += ' ';
        while (parser.GetNext().match(/\s/))
            parser.i++;
    },
    SelfQuote: function (parser, name) {
        parser.text += name.substr(1);
    },
    Insert: function (parser, _name, c) {
        parser.text += c;
    },
    Accent: function (parser, _name, c) {
        var base = parser.ParseArg(name);
        var accent = parser.create('token', 'mo', {}, c);
        parser.addAttributes(accent);
        parser.Push(parser.create('node', 'mover', [base, accent]));
    },
    Emph: function (parser, name) {
        var variant = (parser.stack.env.mathvariant === '-tex-mathit' ? 'normal' : '-tex-mathit');
        parser.Push(parser.ParseTextArg(name, { mathvariant: variant }));
    },
    SetFont: function (parser, _name, variant) {
        parser.saveText();
        parser.stack.env.mathvariant = variant;
    },
    SetSize: function (parser, _name, size) {
        parser.saveText();
        parser.stack.env.mathsize = size;
    },
    CheckAutoload: function (parser, name) {
        var autoload = parser.configuration.packageData.get('autoload');
        var texParser = parser.texParser;
        name = name.slice(1);
        var macro = texParser.lookup('macro', name);
        if (!macro || (autoload && macro._func === autoload.Autoload)) {
            texParser.parse('macro', [texParser, name]);
            if (!macro)
                return;
            Retries_js_1.retryAfter(Promise.resolve());
        }
        texParser.parse('macro', [parser, name]);
    },
    Macro: BaseMethods_js_1.default.Macro,
    Spacer: BaseMethods_js_1.default.Spacer,
    Hskip: BaseMethods_js_1.default.Hskip,
    rule: BaseMethods_js_1.default.rule,
    Rule: BaseMethods_js_1.default.Rule,
    HandleRef: BaseMethods_js_1.default.HandleRef
};
//# sourceMappingURL=TextMacrosMethods.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.PackageError = MathJax._.components["package"].PackageError;
exports.Package = MathJax._.components["package"].Package;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionConfiguration = exports.ActionMethods = void 0;
var Configuration_js_1 = __webpack_require__(0);
var TexParser_js_1 = __webpack_require__(5);
var SymbolMap_js_1 = __webpack_require__(1);
var BaseMethods_js_1 = __webpack_require__(8);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmsConfiguration = exports.AmsTags = void 0;
var Configuration_js_1 = __webpack_require__(0);
var AmsItems_js_1 = __webpack_require__(31);
var Tags_js_1 = __webpack_require__(17);
var AmsMethods_js_1 = __webpack_require__(11);
__webpack_require__(32);
var SymbolMap_js_1 = __webpack_require__(1);
var AmsTags = (function (_super) {
    __extends(AmsTags, _super);
    function AmsTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AmsTags;
}(Tags_js_1.AbstractTags));
exports.AmsTags = AmsTags;
var init = function (config) {
    new SymbolMap_js_1.CommandMap(AmsMethods_js_1.NEW_OPS, {}, {});
    config.append(Configuration_js_1.Configuration.local({ handler: { macro: [AmsMethods_js_1.NEW_OPS] },
        priority: -1 }));
};
exports.AmsConfiguration = Configuration_js_1.Configuration.create('ams', {
    handler: {
        delimiter: ['AMSsymbols-delimiter', 'AMSmath-delimiter'],
        macro: ['AMSsymbols-mathchar0mi', 'AMSsymbols-mathchar0m0',
            'AMSsymbols-delimiter', 'AMSsymbols-macros',
            'AMSmath-mathchar0mo', 'AMSmath-macros', 'AMSmath-delimiter'],
        environment: ['AMSmath-environment']
    },
    items: (_a = {}, _a[AmsItems_js_1.MultlineItem.prototype.kind] = AmsItems_js_1.MultlineItem, _a),
    tags: { 'ams': AmsTags },
    init: init
});
//# sourceMappingURL=AmsConfiguration.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultlineItem = void 0;
var BaseItems_js_1 = __webpack_require__(16);
var ParseUtil_js_1 = __webpack_require__(3);
var NodeUtil_js_1 = __webpack_require__(4);
var TexError_js_1 = __webpack_require__(2);
var TexConstants_js_1 = __webpack_require__(6);
var MultlineItem = (function (_super) {
    __extends(MultlineItem, _super);
    function MultlineItem(factory) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, factory) || this;
        _this.factory.configuration.tags.start('multline', true, args[0]);
        return _this;
    }
    Object.defineProperty(MultlineItem.prototype, "kind", {
        get: function () {
            return 'multline';
        },
        enumerable: false,
        configurable: true
    });
    MultlineItem.prototype.EndEntry = function () {
        if (this.table.length) {
            ParseUtil_js_1.default.fixInitialMO(this.factory.configuration, this.nodes);
        }
        var shove = this.getProperty('shove');
        var mtd = this.create('node', 'mtd', this.nodes, shove ? { columnalign: shove } : {});
        this.setProperty('shove', null);
        this.row.push(mtd);
        this.Clear();
    };
    MultlineItem.prototype.EndRow = function () {
        if (this.row.length !== 1) {
            throw new TexError_js_1.default('MultlineRowsOneCol', 'The rows within the %1 environment must have exactly one column', 'multline');
        }
        var row = this.create('node', 'mtr', this.row);
        this.table.push(row);
        this.row = [];
    };
    MultlineItem.prototype.EndTable = function () {
        _super.prototype.EndTable.call(this);
        if (this.table.length) {
            var m = this.table.length - 1, label = -1;
            if (!NodeUtil_js_1.default.getAttribute(NodeUtil_js_1.default.getChildren(this.table[0])[0], 'columnalign')) {
                NodeUtil_js_1.default.setAttribute(NodeUtil_js_1.default.getChildren(this.table[0])[0], 'columnalign', TexConstants_js_1.TexConstant.Align.LEFT);
            }
            if (!NodeUtil_js_1.default.getAttribute(NodeUtil_js_1.default.getChildren(this.table[m])[0], 'columnalign')) {
                NodeUtil_js_1.default.setAttribute(NodeUtil_js_1.default.getChildren(this.table[m])[0], 'columnalign', TexConstants_js_1.TexConstant.Align.RIGHT);
            }
            var tag = this.factory.configuration.tags.getTag();
            if (tag) {
                label = (this.arraydef.side === TexConstants_js_1.TexConstant.Align.LEFT ? 0 : this.table.length - 1);
                var mtr = this.table[label];
                var mlabel = this.create('node', 'mlabeledtr', [tag].concat(NodeUtil_js_1.default.getChildren(mtr)));
                NodeUtil_js_1.default.copyAttributes(mtr, mlabel);
                this.table[label] = mlabel;
            }
        }
        this.factory.configuration.tags.end();
    };
    return MultlineItem;
}(BaseItems_js_1.ArrayItem));
exports.MultlineItem = MultlineItem;
//# sourceMappingURL=AmsItems.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AmsMethods_js_1 = __webpack_require__(11);
var sm = __webpack_require__(1);
var TexConstants_js_1 = __webpack_require__(6);
var ParseMethods_js_1 = __webpack_require__(9);
var ParseUtil_js_1 = __webpack_require__(3);
var MmlNode_js_1 = __webpack_require__(7);
var COLS = function (W) {
    var WW = [];
    for (var i = 0, m = W.length; i < m; i++) {
        WW[i] = ParseUtil_js_1.default.Em(W[i]);
    }
    return WW.join(' ');
};
new sm.CharacterMap('AMSmath-mathchar0mo', ParseMethods_js_1.default.mathchar0mo, {
    iiiint: ['\u2A0C', { texClass: MmlNode_js_1.TEXCLASS.OP }]
});
new sm.CommandMap('AMSmath-macros', {
    mathring: ['Accent', '02DA'],
    nobreakspace: 'Tilde',
    negmedspace: ['Spacer', TexConstants_js_1.TexConstant.Length.NEGATIVEMEDIUMMATHSPACE],
    negthickspace: ['Spacer', TexConstants_js_1.TexConstant.Length.NEGATIVETHICKMATHSPACE],
    idotsint: ['MultiIntegral', '\\int\\cdots\\int'],
    dddot: ['Accent', '20DB'],
    ddddot: ['Accent', '20DC'],
    sideset: ['Macro', '\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1' +
            '\\!\\mathop{#3}\\nolimits#2}', 3],
    boxed: ['Macro', '\\fbox{$\\displaystyle{#1}$}', 1],
    tag: 'HandleTag',
    notag: 'HandleNoTag',
    eqref: ['HandleRef', true],
    substack: ['Macro', '\\begin{subarray}{c}#1\\end{subarray}', 1],
    injlim: ['NamedOp', 'inj&thinsp;lim'],
    projlim: ['NamedOp', 'proj&thinsp;lim'],
    varliminf: ['Macro', '\\mathop{\\underline{\\mmlToken{mi}{lim}}}'],
    varlimsup: ['Macro', '\\mathop{\\overline{\\mmlToken{mi}{lim}}}'],
    varinjlim: ['Macro', '\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}'],
    varprojlim: ['Macro', '\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}'],
    DeclareMathOperator: 'HandleDeclareOp',
    operatorname: 'HandleOperatorName',
    SkipLimits: 'SkipLimits',
    genfrac: 'Genfrac',
    frac: ['Genfrac', '', '', '', ''],
    tfrac: ['Genfrac', '', '', '', '1'],
    dfrac: ['Genfrac', '', '', '', '0'],
    binom: ['Genfrac', '(', ')', '0', ''],
    tbinom: ['Genfrac', '(', ')', '0', '1'],
    dbinom: ['Genfrac', '(', ')', '0', '0'],
    cfrac: 'CFrac',
    shoveleft: ['HandleShove', TexConstants_js_1.TexConstant.Align.LEFT],
    shoveright: ['HandleShove', TexConstants_js_1.TexConstant.Align.RIGHT],
    xrightarrow: ['xArrow', 0x2192, 5, 6],
    xleftarrow: ['xArrow', 0x2190, 7, 3]
}, AmsMethods_js_1.AmsMethods);
new sm.EnvironmentMap('AMSmath-environment', ParseMethods_js_1.default.environment, {
    'eqnarray*': ['EqnArray', null, false, true, 'rcl',
        '0 ' + TexConstants_js_1.TexConstant.Length.THICKMATHSPACE, '.5em'],
    align: ['EqnArray', null, true, true, 'rlrlrlrlrlrl',
        COLS([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0])],
    'align*': ['EqnArray', null, false, true, 'rlrlrlrlrlrl',
        COLS([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0])],
    multline: ['Multline', null, true],
    'multline*': ['Multline', null, false],
    split: ['EqnArray', null, false, false, 'rl', COLS([0])],
    gather: ['EqnArray', null, true, true, 'c'],
    'gather*': ['EqnArray', null, false, true, 'c'],
    alignat: ['AlignAt', null, true, true],
    'alignat*': ['AlignAt', null, false, true],
    alignedat: ['AlignAt', null, false, false],
    aligned: ['AmsEqnArray', null, null, null, 'rlrlrlrlrlrl',
        COLS([0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0]), '.5em', 'D'],
    gathered: ['AmsEqnArray', null, null, null, 'c', null, '.5em', 'D'],
    subarray: ['Array', null, null, null, null, COLS([0]), '0.1em', 'S', 1],
    smallmatrix: ['Array', null, null, null, 'c', COLS([1 / 3]),
        '.2em', 'S', 1],
    matrix: ['Array', null, null, null, 'c'],
    pmatrix: ['Array', null, '(', ')', 'c'],
    bmatrix: ['Array', null, '[', ']', 'c'],
    Bmatrix: ['Array', null, '\\{', '\\}', 'c'],
    vmatrix: ['Array', null, '\\vert', '\\vert', 'c'],
    Vmatrix: ['Array', null, '\\Vert', '\\Vert', 'c'],
    cases: ['Array', null, '\\{', '.', 'll', null, '.2em', 'T']
}, AmsMethods_js_1.AmsMethods);
new sm.DelimiterMap('AMSmath-delimiter', ParseMethods_js_1.default.delimiter, {
    '\\lvert': ['\u007C', { texClass: MmlNode_js_1.TEXCLASS.OPEN }],
    '\\rvert': ['\u007C', { texClass: MmlNode_js_1.TEXCLASS.CLOSE }],
    '\\lVert': ['\u2016', { texClass: MmlNode_js_1.TEXCLASS.OPEN }],
    '\\rVert': ['\u2016', { texClass: MmlNode_js_1.TEXCLASS.CLOSE }]
});
new sm.CharacterMap('AMSsymbols-mathchar0mi', ParseMethods_js_1.default.mathchar0mi, {
    digamma: '\u03DD',
    varkappa: '\u03F0',
    varGamma: ['\u0393', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varDelta: ['\u0394', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varTheta: ['\u0398', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varLambda: ['\u039B', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varXi: ['\u039E', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varPi: ['\u03A0', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varSigma: ['\u03A3', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varUpsilon: ['\u03A5', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varPhi: ['\u03A6', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varPsi: ['\u03A8', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    varOmega: ['\u03A9', { mathvariant: TexConstants_js_1.TexConstant.Variant.ITALIC }],
    beth: '\u2136',
    gimel: '\u2137',
    daleth: '\u2138',
    backprime: ['\u2035', { variantForm: true }],
    hslash: '\u210F',
    varnothing: ['\u2205', { variantForm: true }],
    blacktriangle: '\u25B4',
    triangledown: ['\u25BD', { variantForm: true }],
    blacktriangledown: '\u25BE',
    square: '\u25FB',
    Box: '\u25FB',
    blacksquare: '\u25FC',
    lozenge: '\u25CA',
    Diamond: '\u25CA',
    blacklozenge: '\u29EB',
    circledS: ['\u24C8', { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    bigstar: '\u2605',
    sphericalangle: '\u2222',
    measuredangle: '\u2221',
    nexists: '\u2204',
    complement: '\u2201',
    mho: '\u2127',
    eth: ['\u00F0', { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    Finv: '\u2132',
    diagup: '\u2571',
    Game: '\u2141',
    diagdown: '\u2572',
    Bbbk: ['\u006B',
        { mathvariant: TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK }],
    yen: '\u00A5',
    circledR: '\u00AE',
    checkmark: '\u2713',
    maltese: '\u2720'
});
new sm.CharacterMap('AMSsymbols-mathchar0m0', ParseMethods_js_1.default.mathchar0mo, {
    dotplus: '\u2214',
    ltimes: '\u22C9',
    smallsetminus: ['\u2216', { variantForm: true }],
    rtimes: '\u22CA',
    Cap: '\u22D2',
    doublecap: '\u22D2',
    leftthreetimes: '\u22CB',
    Cup: '\u22D3',
    doublecup: '\u22D3',
    rightthreetimes: '\u22CC',
    barwedge: '\u22BC',
    curlywedge: '\u22CF',
    veebar: '\u22BB',
    curlyvee: '\u22CE',
    doublebarwedge: '\u2A5E',
    boxminus: '\u229F',
    circleddash: '\u229D',
    boxtimes: '\u22A0',
    circledast: '\u229B',
    boxdot: '\u22A1',
    circledcirc: '\u229A',
    boxplus: '\u229E',
    centerdot: ['\u22C5', { variantForm: true }],
    divideontimes: '\u22C7',
    intercal: '\u22BA',
    leqq: '\u2266',
    geqq: '\u2267',
    leqslant: '\u2A7D',
    geqslant: '\u2A7E',
    eqslantless: '\u2A95',
    eqslantgtr: '\u2A96',
    lesssim: '\u2272',
    gtrsim: '\u2273',
    lessapprox: '\u2A85',
    gtrapprox: '\u2A86',
    approxeq: '\u224A',
    lessdot: '\u22D6',
    gtrdot: '\u22D7',
    lll: '\u22D8',
    llless: '\u22D8',
    ggg: '\u22D9',
    gggtr: '\u22D9',
    lessgtr: '\u2276',
    gtrless: '\u2277',
    lesseqgtr: '\u22DA',
    gtreqless: '\u22DB',
    lesseqqgtr: '\u2A8B',
    gtreqqless: '\u2A8C',
    doteqdot: '\u2251',
    Doteq: '\u2251',
    eqcirc: '\u2256',
    risingdotseq: '\u2253',
    circeq: '\u2257',
    fallingdotseq: '\u2252',
    triangleq: '\u225C',
    backsim: '\u223D',
    thicksim: ['\u223C', { variantForm: true }],
    backsimeq: '\u22CD',
    thickapprox: ['\u2248', { variantForm: true }],
    subseteqq: '\u2AC5',
    supseteqq: '\u2AC6',
    Subset: '\u22D0',
    Supset: '\u22D1',
    sqsubset: '\u228F',
    sqsupset: '\u2290',
    preccurlyeq: '\u227C',
    succcurlyeq: '\u227D',
    curlyeqprec: '\u22DE',
    curlyeqsucc: '\u22DF',
    precsim: '\u227E',
    succsim: '\u227F',
    precapprox: '\u2AB7',
    succapprox: '\u2AB8',
    vartriangleleft: '\u22B2',
    lhd: '\u22B2',
    vartriangleright: '\u22B3',
    rhd: '\u22B3',
    trianglelefteq: '\u22B4',
    unlhd: '\u22B4',
    trianglerighteq: '\u22B5',
    unrhd: '\u22B5',
    vDash: ['\u22A8', { variantForm: true }],
    Vdash: '\u22A9',
    Vvdash: '\u22AA',
    smallsmile: ['\u2323', { variantForm: true }],
    shortmid: ['\u2223', { variantForm: true }],
    smallfrown: ['\u2322', { variantForm: true }],
    shortparallel: ['\u2225', { variantForm: true }],
    bumpeq: '\u224F',
    between: '\u226C',
    Bumpeq: '\u224E',
    pitchfork: '\u22D4',
    varpropto: ['\u221D', { variantForm: true }],
    backepsilon: '\u220D',
    blacktriangleleft: '\u25C2',
    blacktriangleright: '\u25B8',
    therefore: '\u2234',
    because: '\u2235',
    eqsim: '\u2242',
    vartriangle: ['\u25B3', { variantForm: true }],
    Join: '\u22C8',
    nless: '\u226E',
    ngtr: '\u226F',
    nleq: '\u2270',
    ngeq: '\u2271',
    nleqslant: ['\u2A87', { variantForm: true }],
    ngeqslant: ['\u2A88', { variantForm: true }],
    nleqq: ['\u2270', { variantForm: true }],
    ngeqq: ['\u2271', { variantForm: true }],
    lneq: '\u2A87',
    gneq: '\u2A88',
    lneqq: '\u2268',
    gneqq: '\u2269',
    lvertneqq: ['\u2268', { variantForm: true }],
    gvertneqq: ['\u2269', { variantForm: true }],
    lnsim: '\u22E6',
    gnsim: '\u22E7',
    lnapprox: '\u2A89',
    gnapprox: '\u2A8A',
    nprec: '\u2280',
    nsucc: '\u2281',
    npreceq: ['\u22E0', { variantForm: true }],
    nsucceq: ['\u22E1', { variantForm: true }],
    precneqq: '\u2AB5',
    succneqq: '\u2AB6',
    precnsim: '\u22E8',
    succnsim: '\u22E9',
    precnapprox: '\u2AB9',
    succnapprox: '\u2ABA',
    nsim: '\u2241',
    ncong: '\u2247',
    nshortmid: ['\u2224', { variantForm: true }],
    nshortparallel: ['\u2226', { variantForm: true }],
    nmid: '\u2224',
    nparallel: '\u2226',
    nvdash: '\u22AC',
    nvDash: '\u22AD',
    nVdash: '\u22AE',
    nVDash: '\u22AF',
    ntriangleleft: '\u22EA',
    ntriangleright: '\u22EB',
    ntrianglelefteq: '\u22EC',
    ntrianglerighteq: '\u22ED',
    nsubseteq: '\u2288',
    nsupseteq: '\u2289',
    nsubseteqq: ['\u2288', { variantForm: true }],
    nsupseteqq: ['\u2289', { variantForm: true }],
    subsetneq: '\u228A',
    supsetneq: '\u228B',
    varsubsetneq: ['\u228A', { variantForm: true }],
    varsupsetneq: ['\u228B', { variantForm: true }],
    subsetneqq: '\u2ACB',
    supsetneqq: '\u2ACC',
    varsubsetneqq: ['\u2ACB', { variantForm: true }],
    varsupsetneqq: ['\u2ACC', { variantForm: true }],
    leftleftarrows: '\u21C7',
    rightrightarrows: '\u21C9',
    leftrightarrows: '\u21C6',
    rightleftarrows: '\u21C4',
    Lleftarrow: '\u21DA',
    Rrightarrow: '\u21DB',
    twoheadleftarrow: '\u219E',
    twoheadrightarrow: '\u21A0',
    leftarrowtail: '\u21A2',
    rightarrowtail: '\u21A3',
    looparrowleft: '\u21AB',
    looparrowright: '\u21AC',
    leftrightharpoons: '\u21CB',
    rightleftharpoons: ['\u21CC', { variantForm: true }],
    curvearrowleft: '\u21B6',
    curvearrowright: '\u21B7',
    circlearrowleft: '\u21BA',
    circlearrowright: '\u21BB',
    Lsh: '\u21B0',
    Rsh: '\u21B1',
    upuparrows: '\u21C8',
    downdownarrows: '\u21CA',
    upharpoonleft: '\u21BF',
    upharpoonright: '\u21BE',
    downharpoonleft: '\u21C3',
    restriction: '\u21BE',
    multimap: '\u22B8',
    downharpoonright: '\u21C2',
    leftrightsquigarrow: '\u21AD',
    rightsquigarrow: '\u21DD',
    leadsto: '\u21DD',
    dashrightarrow: '\u21E2',
    dashleftarrow: '\u21E0',
    nleftarrow: '\u219A',
    nrightarrow: '\u219B',
    nLeftarrow: '\u21CD',
    nRightarrow: '\u21CF',
    nleftrightarrow: '\u21AE',
    nLeftrightarrow: '\u21CE'
});
new sm.DelimiterMap('AMSsymbols-delimiter', ParseMethods_js_1.default.delimiter, {
    '\\ulcorner': '\u231C',
    '\\urcorner': '\u231D',
    '\\llcorner': '\u231E',
    '\\lrcorner': '\u231F'
});
new sm.CommandMap('AMSsymbols-macros', {
    implies: ['Macro', '\\;\\Longrightarrow\\;'],
    impliedby: ['Macro', '\\;\\Longleftarrow\\;']
}, AmsMethods_js_1.AmsMethods);
//# sourceMappingURL=AmsMappings.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AmsCdConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
__webpack_require__(34);
exports.AmsCdConfiguration = Configuration_js_1.Configuration.create('amscd', {
    handler: {
        character: ['amscd_special'],
        macro: ['amscd_macros'],
        environment: ['amscd_environment']
    },
    options: {
        amscd: {
            colspace: '5pt',
            rowspace: '5pt',
            harrowsize: '2.75em',
            varrowsize: '1.75em',
            hideHorizontalLabels: false
        }
    }
});
//# sourceMappingURL=AmsCdConfiguration.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sm = __webpack_require__(1);
var ParseMethods_js_1 = __webpack_require__(9);
var AmsCdMethods_js_1 = __webpack_require__(35);
new sm.EnvironmentMap('amscd_environment', ParseMethods_js_1.default.environment, { CD: 'CD' }, AmsCdMethods_js_1.default);
new sm.CommandMap('amscd_macros', {
    minCDarrowwidth: 'minCDarrowwidth',
    minCDarrowheight: 'minCDarrowheight',
}, AmsCdMethods_js_1.default);
new sm.MacroMap('amscd_special', { '@': 'arrow' }, AmsCdMethods_js_1.default);
//# sourceMappingURL=AmsCdMappings.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TexParser_js_1 = __webpack_require__(5);
var BaseConfiguration_js_1 = __webpack_require__(22);
var MmlNode_js_1 = __webpack_require__(7);
var NodeUtil_js_1 = __webpack_require__(4);
var AmsCdMethods = {};
AmsCdMethods.CD = function (parser, begin) {
    parser.Push(begin);
    var item = parser.itemFactory.create('array');
    var options = parser.configuration.options.amscd;
    item.setProperties({
        minw: parser.stack.env.CD_minw || options.harrowsize,
        minh: parser.stack.env.CD_minh || options.varrowsize
    });
    item.arraydef = {
        columnalign: 'center',
        columnspacing: options.colspace,
        rowspacing: options.rowspace,
        displaystyle: true
    };
    return item;
};
AmsCdMethods.arrow = function (parser, name) {
    var c = parser.string.charAt(parser.i);
    if (!c.match(/[><VA.|=]/)) {
        return BaseConfiguration_js_1.Other(parser, name);
    }
    else {
        parser.i++;
    }
    var first = parser.stack.Top();
    if (!first.isKind('array') || first.Size()) {
        AmsCdMethods.cell(parser, name);
        first = parser.stack.Top();
    }
    var top = first;
    var arrowRow = ((top.table.length % 2) === 1);
    var n = (top.row.length + (arrowRow ? 0 : 1)) % 2;
    while (n) {
        AmsCdMethods.cell(parser, name);
        n--;
    }
    var mml;
    var hdef = { minsize: top.getProperty('minw'), stretchy: true }, vdef = { minsize: top.getProperty('minh'),
        stretchy: true, symmetric: true, lspace: 0, rspace: 0 };
    if (c === '.') {
    }
    else if (c === '|') {
        mml = parser.create('token', 'mo', vdef, '\u2225');
    }
    else if (c === '=') {
        mml = parser.create('token', 'mo', hdef, '=');
    }
    else {
        var arrow = {
            '>': '\u2192', '<': '\u2190', 'V': '\u2193', 'A': '\u2191'
        }[c];
        var a = parser.GetUpTo(name + c, c);
        var b = parser.GetUpTo(name + c, c);
        if (c === '>' || c === '<') {
            mml = parser.create('token', 'mo', hdef, arrow);
            if (!a) {
                a = '\\kern ' + top.getProperty('minw');
            }
            if (a || b) {
                var pad = { width: '.67em', lspace: '.33em' };
                mml = parser.create('node', 'munderover', [mml]);
                if (a) {
                    var nodeA = new TexParser_js_1.default(a, parser.stack.env, parser.configuration).mml();
                    var mpadded = parser.create('node', 'mpadded', [nodeA], pad);
                    NodeUtil_js_1.default.setAttribute(mpadded, 'voffset', '.1em');
                    NodeUtil_js_1.default.setChild(mml, mml.over, mpadded);
                }
                if (b) {
                    var nodeB = new TexParser_js_1.default(b, parser.stack.env, parser.configuration).mml();
                    NodeUtil_js_1.default.setChild(mml, mml.under, parser.create('node', 'mpadded', [nodeB], pad));
                }
                if (parser.configuration.options.amscd.hideHorizontalLabels) {
                    mml = parser.create('node', 'mpadded', mml, { depth: 0, height: '.67em' });
                }
            }
        }
        else {
            var arrowNode = parser.create('token', 'mo', vdef, arrow);
            mml = arrowNode;
            if (a || b) {
                mml = parser.create('node', 'mrow');
                if (a) {
                    NodeUtil_js_1.default.appendChildren(mml, [new TexParser_js_1.default('\\scriptstyle\\llap{' + a + '}', parser.stack.env, parser.configuration).mml()]);
                }
                arrowNode.texClass = MmlNode_js_1.TEXCLASS.ORD;
                NodeUtil_js_1.default.appendChildren(mml, [arrowNode]);
                if (b) {
                    NodeUtil_js_1.default.appendChildren(mml, [new TexParser_js_1.default('\\scriptstyle\\rlap{' + b + '}', parser.stack.env, parser.configuration).mml()]);
                }
            }
        }
    }
    if (mml) {
        parser.Push(mml);
    }
    AmsCdMethods.cell(parser, name);
};
AmsCdMethods.cell = function (parser, name) {
    var top = parser.stack.Top();
    if ((top.table || []).length % 2 === 0 && (top.row || []).length === 0) {
        parser.Push(parser.create('node', 'mpadded', [], { height: '8.5pt', depth: '2pt' }));
    }
    parser.Push(parser.itemFactory.create('cell').setProperties({ isEntry: true, name: name }));
};
AmsCdMethods.minCDarrowwidth = function (parser, name) {
    parser.stack.env.CD_minw = parser.GetDimen(name);
};
AmsCdMethods.minCDarrowheight = function (parser, name) {
    parser.stack.env.CD_minh = parser.GetDimen(name);
};
exports.default = AmsCdMethods;
//# sourceMappingURL=AmsCdMethods.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BboxConfiguration = exports.BboxMethods = void 0;
var Configuration_js_1 = __webpack_require__(0);
var SymbolMap_js_1 = __webpack_require__(1);
var TexError_js_1 = __webpack_require__(2);
exports.BboxMethods = {};
exports.BboxMethods.BBox = function (parser, name) {
    var bbox = parser.GetBrackets(name, '');
    var math = parser.ParseArg(name);
    var parts = bbox.split(/,/);
    var def, background, style;
    for (var i = 0, m = parts.length; i < m; i++) {
        var part = parts[i].trim();
        var match = part.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);
        if (match) {
            if (def) {
                throw new TexError_js_1.default('MultipleBBoxProperty', '%1 specified twice in %2', 'Padding', name);
            }
            var pad = BBoxPadding(match[1] + match[3]);
            if (pad) {
                def = {
                    height: '+' + pad,
                    depth: '+' + pad,
                    lspace: pad,
                    width: '+' + (2 * parseInt(match[1], 10)) + match[3]
                };
            }
        }
        else if (part.match(/^([a-z0-9]+|\#[0-9a-f]{6}|\#[0-9a-f]{3})$/i)) {
            if (background) {
                throw new TexError_js_1.default('MultipleBBoxProperty', '%1 specified twice in %2', 'Background', name);
            }
            background = part;
        }
        else if (part.match(/^[-a-z]+:/i)) {
            if (style) {
                throw new TexError_js_1.default('MultipleBBoxProperty', '%1 specified twice in %2', 'Style', name);
            }
            style = BBoxStyle(part);
        }
        else if (part !== '') {
            throw new TexError_js_1.default('InvalidBBoxProperty', '"%1" doesn\'t look like a color, a padding dimension, or a style', part);
        }
    }
    if (def) {
        math = parser.create('node', 'mpadded', [math], def);
    }
    if (background || style) {
        def = {};
        if (background) {
            Object.assign(def, { mathbackground: background });
        }
        if (style) {
            Object.assign(def, { style: style });
        }
        math = parser.create('node', 'mstyle', [math], def);
    }
    parser.Push(math);
};
var BBoxStyle = function (styles) {
    return styles;
};
var BBoxPadding = function (pad) {
    return pad;
};
new SymbolMap_js_1.CommandMap('bbox', { bbox: 'BBox' }, exports.BboxMethods);
exports.BboxConfiguration = Configuration_js_1.Configuration.create('bbox', { handler: { macro: ['bbox'] } });
//# sourceMappingURL=BboxConfiguration.js.map

/***/ }),
/* 37 */
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
var Configuration_js_1 = __webpack_require__(0);
var NodeUtil_js_1 = __webpack_require__(4);
var TexConstants_js_1 = __webpack_require__(6);
var SymbolMap_js_1 = __webpack_require__(1);
var NodeFactory_js_1 = __webpack_require__(23);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BraketConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
var BraketItems_js_1 = __webpack_require__(39);
__webpack_require__(40);
exports.BraketConfiguration = Configuration_js_1.Configuration.create('braket', {
    handler: {
        character: ['Braket-characters'],
        macro: ['Braket-macros']
    },
    items: (_a = {},
        _a[BraketItems_js_1.BraketItem.prototype.kind] = BraketItems_js_1.BraketItem,
        _a)
});
//# sourceMappingURL=BraketConfiguration.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BraketItem = void 0;
var StackItem_js_1 = __webpack_require__(13);
var MmlNode_js_1 = __webpack_require__(7);
var ParseUtil_js_1 = __webpack_require__(3);
var BraketItem = (function (_super) {
    __extends(BraketItem, _super);
    function BraketItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BraketItem.prototype, "kind", {
        get: function () {
            return 'braket';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BraketItem.prototype, "isOpen", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    BraketItem.prototype.checkItem = function (item) {
        if (item.isKind('close')) {
            return [[this.factory.create('mml', this.toMml())], true];
        }
        if (item.isKind('mml')) {
            this.Push(item.toMml());
            if (this.getProperty('single')) {
                return [[this.toMml()], true];
            }
            return StackItem_js_1.BaseItem.fail;
        }
        return _super.prototype.checkItem.call(this, item);
    };
    BraketItem.prototype.toMml = function () {
        var inner = _super.prototype.toMml.call(this);
        var open = this.getProperty('open');
        var close = this.getProperty('close');
        if (this.getProperty('stretchy')) {
            return ParseUtil_js_1.default.fenced(this.factory.configuration, open, inner, close);
        }
        var attrs = { fence: true, stretchy: false, symmetric: true, texClass: MmlNode_js_1.TEXCLASS.OPEN };
        var openNode = this.create('token', 'mo', attrs, open);
        attrs.texClass = MmlNode_js_1.TEXCLASS.CLOSE;
        var closeNode = this.create('token', 'mo', attrs, close);
        var mrow = this.create('node', 'mrow', [openNode, inner, closeNode], { open: open, close: close, texClass: MmlNode_js_1.TEXCLASS.INNER });
        return mrow;
    };
    return BraketItem;
}(StackItem_js_1.BaseItem));
exports.BraketItem = BraketItem;
//# sourceMappingURL=BraketItems.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SymbolMap_js_1 = __webpack_require__(1);
var BraketMethods_js_1 = __webpack_require__(41);
new SymbolMap_js_1.CommandMap('Braket-macros', {
    bra: ['Macro', '{\\langle {#1} \\vert}', 1],
    ket: ['Macro', '{\\vert {#1} \\rangle}', 1],
    braket: ['Braket', '\u27E8', '\u27E9', false, Infinity],
    'set': ['Braket', '{', '}', false, 1],
    Bra: ['Macro', '{\\left\\langle {#1} \\right\\vert}', 1],
    Ket: ['Macro', '{\\left\\vert {#1} \\right\\rangle}', 1],
    Braket: ['Braket', '\u27E8', '\u27E9', true, Infinity],
    Set: ['Braket', '{', '}', true, 1],
    ketbra: ['Macro', '{\\vert {#1} \\rangle\\langle {#2} \\vert}', 2],
    Ketbra: ['Macro', '{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}', 2],
    '|': 'Bar'
}, BraketMethods_js_1.default);
new SymbolMap_js_1.MacroMap('Braket-characters', {
    '|': 'Bar'
}, BraketMethods_js_1.default);
//# sourceMappingURL=BraketMappings.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseMethods_js_1 = __webpack_require__(8);
var MmlNode_js_1 = __webpack_require__(7);
var TexError_js_1 = __webpack_require__(2);
var BraketMethods = {};
BraketMethods.Macro = BaseMethods_js_1.default.Macro;
BraketMethods.Braket = function (parser, _name, open, close, stretchy, barmax) {
    var next = parser.GetNext();
    if (next === '') {
        throw new TexError_js_1.default('MissingArgFor', 'Missing argument for %1', parser.currentCS);
    }
    var single = true;
    if (next === '{') {
        parser.i++;
        single = false;
    }
    parser.Push(parser.itemFactory.create('braket')
        .setProperties({ barmax: barmax, barcount: 0, open: open,
        close: close, stretchy: stretchy, single: single }));
};
BraketMethods.Bar = function (parser, name) {
    var c = name === '|' ? '|' : '\u2225';
    var top = parser.stack.Top();
    if (top.kind !== 'braket' ||
        top.getProperty('barcount') >= top.getProperty('barmax')) {
        var mml = parser.create('token', 'mo', { texClass: MmlNode_js_1.TEXCLASS.ORD, stretchy: false }, c);
        parser.Push(mml);
        return;
    }
    if (c === '|' && parser.GetNext() === '|') {
        parser.i++;
        c = '\u2225';
    }
    var stretchy = top.getProperty('stretchy');
    if (!stretchy) {
        var node_1 = parser.create('token', 'mo', { stretchy: false, braketbar: true }, c);
        parser.Push(node_1);
        return;
    }
    var node = parser.create('node', 'TeXAtom', [], { texClass: MmlNode_js_1.TEXCLASS.CLOSE });
    parser.Push(node);
    top.setProperty('barcount', top.getProperty('barcount') + 1);
    node = parser.create('token', 'mo', { stretchy: true, braketbar: true }, c);
    parser.Push(node);
    node = parser.create('node', 'TeXAtom', [], { texClass: MmlNode_js_1.TEXCLASS.OPEN });
    parser.Push(node);
};
exports.default = BraketMethods;
//# sourceMappingURL=BraketMethods.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BussproofsConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
var BussproofsItems_js_1 = __webpack_require__(43);
var BussproofsUtil_js_1 = __webpack_require__(18);
__webpack_require__(45);
exports.BussproofsConfiguration = Configuration_js_1.Configuration.create('bussproofs', {
    handler: {
        macro: ['Bussproofs-macros'],
        environment: ['Bussproofs-environments']
    },
    items: (_a = {},
        _a[BussproofsItems_js_1.ProofTreeItem.prototype.kind] = BussproofsItems_js_1.ProofTreeItem,
        _a),
    preprocessors: [
        [BussproofsUtil_js_1.saveDocument, 1]
    ],
    postprocessors: [
        [BussproofsUtil_js_1.clearDocument, 3],
        [BussproofsUtil_js_1.makeBsprAttributes, 2],
        [BussproofsUtil_js_1.balanceRules, 1]
    ]
});
//# sourceMappingURL=BussproofsConfiguration.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProofTreeItem = void 0;
var TexError_js_1 = __webpack_require__(2);
var StackItem_js_1 = __webpack_require__(13);
var Stack_js_1 = __webpack_require__(44);
var BussproofsUtil = __webpack_require__(18);
var ProofTreeItem = (function (_super) {
    __extends(ProofTreeItem, _super);
    function ProofTreeItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftLabel = null;
        _this.rigthLabel = null;
        _this.innerStack = new Stack_js_1.default(_this.factory, {}, true);
        return _this;
    }
    Object.defineProperty(ProofTreeItem.prototype, "kind", {
        get: function () {
            return 'proofTree';
        },
        enumerable: false,
        configurable: true
    });
    ProofTreeItem.prototype.checkItem = function (item) {
        if (item.isKind('end') && item.getName() === 'prooftree') {
            var node = this.toMml();
            BussproofsUtil.setProperty(node, 'proof', true);
            return [[this.factory.create('mml', node), item], true];
        }
        if (item.isKind('stop')) {
            throw new TexError_js_1.default('EnvMissingEnd', 'Missing \\end{%1}', this.getName());
        }
        this.innerStack.Push(item);
        return StackItem_js_1.BaseItem.fail;
    };
    ProofTreeItem.prototype.toMml = function () {
        var tree = _super.prototype.toMml.call(this);
        var start = this.innerStack.Top();
        if (start.isKind('start') && !start.Size()) {
            return tree;
        }
        this.innerStack.Push(this.factory.create('stop'));
        var prefix = this.innerStack.Top().toMml();
        return this.create('node', 'mrow', [prefix, tree], {});
    };
    return ProofTreeItem;
}(StackItem_js_1.BaseItem));
exports.ProofTreeItem = ProofTreeItem;
//# sourceMappingURL=BussproofsItems.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.Stack["default"];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BussproofsMethods_js_1 = __webpack_require__(46);
var ParseMethods_js_1 = __webpack_require__(9);
var SymbolMap_js_1 = __webpack_require__(1);
new SymbolMap_js_1.CommandMap('Bussproofs-macros', {
    AxiomC: 'Axiom',
    UnaryInfC: ['Inference', 1],
    BinaryInfC: ['Inference', 2],
    TrinaryInfC: ['Inference', 3],
    QuaternaryInfC: ['Inference', 4],
    QuinaryInfC: ['Inference', 5],
    RightLabel: ['Label', 'right'],
    LeftLabel: ['Label', 'left'],
    AXC: 'Axiom',
    UIC: ['Inference', 1],
    BIC: ['Inference', 2],
    TIC: ['Inference', 3],
    RL: ['Label', 'right'],
    LL: ['Label', 'left'],
    noLine: ['SetLine', 'none', false],
    singleLine: ['SetLine', 'solid', false],
    solidLine: ['SetLine', 'solid', false],
    dashedLine: ['SetLine', 'dashed', false],
    alwaysNoLine: ['SetLine', 'none', true],
    alwaysSingleLine: ['SetLine', 'solid', true],
    alwaysSolidLine: ['SetLine', 'solid', true],
    alwaysDashedLine: ['SetLine', 'dashed', true],
    rootAtTop: ['RootAtTop', true],
    alwaysRootAtTop: ['RootAtTop', true],
    rootAtBottom: ['RootAtTop', false],
    alwaysRootAtBottom: ['RootAtTop', false],
    fCenter: 'FCenter',
    Axiom: 'AxiomF',
    UnaryInf: ['InferenceF', 1],
    BinaryInf: ['InferenceF', 2],
    TrinaryInf: ['InferenceF', 3],
    QuaternaryInf: ['InferenceF', 4],
    QuinaryInf: ['InferenceF', 5]
}, BussproofsMethods_js_1.default);
new SymbolMap_js_1.EnvironmentMap('Bussproofs-environments', ParseMethods_js_1.default.environment, {
    prooftree: ['Prooftree', null, false]
}, BussproofsMethods_js_1.default);
//# sourceMappingURL=BussproofsMappings.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TexError_js_1 = __webpack_require__(2);
var TexParser_js_1 = __webpack_require__(5);
var ParseUtil_js_1 = __webpack_require__(3);
var BussproofsUtil = __webpack_require__(18);
var BussproofsMethods = {};
BussproofsMethods.Prooftree = function (parser, begin) {
    parser.Push(begin);
    var newItem = parser.itemFactory.create('proofTree').
        setProperties({ name: begin.getName(),
        line: 'solid', currentLine: 'solid', rootAtTop: false });
    return newItem;
};
BussproofsMethods.Axiom = function (parser, name) {
    var top = parser.stack.Top();
    if (top.kind !== 'proofTree') {
        throw new TexError_js_1.default('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
    }
    var content = paddedContent(parser, parser.GetArgument(name));
    BussproofsUtil.setProperty(content, 'axiom', true);
    top.Push(content);
};
var paddedContent = function (parser, content) {
    var nodes = ParseUtil_js_1.default.internalMath(parser, ParseUtil_js_1.default.trimSpaces(content), 0);
    if (!nodes[0].childNodes[0].childNodes.length) {
        return parser.create('node', 'mrow', []);
    }
    var lpad = parser.create('node', 'mspace', [], { width: '.5ex' });
    var rpad = parser.create('node', 'mspace', [], { width: '.5ex' });
    return parser.create('node', 'mrow', __spread([lpad], nodes, [rpad]));
};
BussproofsMethods.Inference = function (parser, name, n) {
    var top = parser.stack.Top();
    if (top.kind !== 'proofTree') {
        throw new TexError_js_1.default('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
    }
    if (top.Size() < n) {
        throw new TexError_js_1.default('BadProofTree', 'Proof tree badly specified.');
    }
    var rootAtTop = top.getProperty('rootAtTop');
    var childCount = (n === 1 && !top.Peek()[0].childNodes.length) ? 0 : n;
    var children = [];
    do {
        if (children.length) {
            children.unshift(parser.create('node', 'mtd', [], {}));
        }
        children.unshift(parser.create('node', 'mtd', [top.Pop()], { 'rowalign': (rootAtTop ? 'top' : 'bottom') }));
        n--;
    } while (n > 0);
    var row = parser.create('node', 'mtr', children, {});
    var table = parser.create('node', 'mtable', [row], { framespacing: '0 0' });
    var conclusion = paddedContent(parser, parser.GetArgument(name));
    var style = top.getProperty('currentLine');
    if (style !== top.getProperty('line')) {
        top.setProperty('currentLine', top.getProperty('line'));
    }
    var rule = createRule(parser, table, [conclusion], top.getProperty('left'), top.getProperty('right'), style, rootAtTop);
    top.setProperty('left', null);
    top.setProperty('right', null);
    BussproofsUtil.setProperty(rule, 'inference', childCount);
    parser.configuration.addNode('inference', rule);
    top.Push(rule);
};
function createRule(parser, premise, conclusions, left, right, style, rootAtTop) {
    var upper = parser.create('node', 'mtr', [parser.create('node', 'mtd', [premise], {})], {});
    var lower = parser.create('node', 'mtr', [parser.create('node', 'mtd', conclusions, {})], {});
    var rule = parser.create('node', 'mtable', rootAtTop ? [lower, upper] : [upper, lower], { align: 'top 2', rowlines: style, framespacing: '0 0' });
    BussproofsUtil.setProperty(rule, 'inferenceRule', rootAtTop ? 'up' : 'down');
    var leftLabel, rightLabel;
    if (left) {
        leftLabel = parser.create('node', 'mpadded', [left], { height: '+.5em', width: '+.5em', voffset: '-.15em' });
        BussproofsUtil.setProperty(leftLabel, 'prooflabel', 'left');
    }
    if (right) {
        rightLabel = parser.create('node', 'mpadded', [right], { height: '+.5em', width: '+.5em', voffset: '-.15em' });
        BussproofsUtil.setProperty(rightLabel, 'prooflabel', 'right');
    }
    var children, label;
    if (left && right) {
        children = [leftLabel, rule, rightLabel];
        label = 'both';
    }
    else if (left) {
        children = [leftLabel, rule];
        label = 'left';
    }
    else if (right) {
        children = [rule, rightLabel];
        label = 'right';
    }
    else {
        return rule;
    }
    rule = parser.create('node', 'mrow', children);
    BussproofsUtil.setProperty(rule, 'labelledRule', label);
    return rule;
}
BussproofsMethods.Label = function (parser, name, side) {
    var top = parser.stack.Top();
    if (top.kind !== 'proofTree') {
        throw new TexError_js_1.default('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
    }
    var content = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name), 0);
    var label = (content.length > 1) ?
        parser.create('node', 'mrow', content, {}) : content[0];
    top.setProperty(side, label);
};
BussproofsMethods.SetLine = function (parser, _name, style, always) {
    var top = parser.stack.Top();
    if (top.kind !== 'proofTree') {
        throw new TexError_js_1.default('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
    }
    top.setProperty('currentLine', style);
    if (always) {
        top.setProperty('line', style);
    }
};
BussproofsMethods.RootAtTop = function (parser, _name, where) {
    var top = parser.stack.Top();
    if (top.kind !== 'proofTree') {
        throw new TexError_js_1.default('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
    }
    top.setProperty('rootAtTop', where);
};
BussproofsMethods.AxiomF = function (parser, name) {
    var top = parser.stack.Top();
    if (top.kind !== 'proofTree') {
        throw new TexError_js_1.default('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
    }
    var line = parseFCenterLine(parser, name);
    BussproofsUtil.setProperty(line, 'axiom', true);
    top.Push(line);
};
function parseFCenterLine(parser, name) {
    var dollar = parser.GetNext();
    if (dollar !== '$') {
        throw new TexError_js_1.default('IllegalUseOfCommand', 'Use of %1 does not match it\'s definition.', name);
    }
    parser.i++;
    var axiom = parser.GetUpTo(name, '$');
    if (axiom.indexOf('\\fCenter') === -1) {
        throw new TexError_js_1.default('IllegalUseOfCommand', 'Missing \\fCenter in %1.', name);
    }
    var _a = __read(axiom.split('\\fCenter'), 2), prem = _a[0], conc = _a[1];
    var premise = (new TexParser_js_1.default(prem, parser.stack.env, parser.configuration)).mml();
    var conclusion = (new TexParser_js_1.default(conc, parser.stack.env, parser.configuration)).mml();
    var fcenter = (new TexParser_js_1.default('\\fCenter', parser.stack.env, parser.configuration)).mml();
    var left = parser.create('node', 'mtd', [premise], {});
    var middle = parser.create('node', 'mtd', [fcenter], {});
    var right = parser.create('node', 'mtd', [conclusion], {});
    var row = parser.create('node', 'mtr', [left, middle, right], {});
    var table = parser.create('node', 'mtable', [row], { columnspacing: '.5ex', columnalign: 'center 2' });
    BussproofsUtil.setProperty(table, 'sequent', true);
    parser.configuration.addNode('sequent', row);
    return table;
}
BussproofsMethods.FCenter = function (_parser, _name) { };
BussproofsMethods.InferenceF = function (parser, name, n) {
    var top = parser.stack.Top();
    if (top.kind !== 'proofTree') {
        throw new TexError_js_1.default('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
    }
    if (top.Size() < n) {
        throw new TexError_js_1.default('BadProofTree', 'Proof tree badly specified.');
    }
    var rootAtTop = top.getProperty('rootAtTop');
    var childCount = (n === 1 && !top.Peek()[0].childNodes.length) ? 0 : n;
    var children = [];
    do {
        if (children.length) {
            children.unshift(parser.create('node', 'mtd', [], {}));
        }
        children.unshift(parser.create('node', 'mtd', [top.Pop()], { 'rowalign': (rootAtTop ? 'top' : 'bottom') }));
        n--;
    } while (n > 0);
    var row = parser.create('node', 'mtr', children, {});
    var table = parser.create('node', 'mtable', [row], { framespacing: '0 0' });
    var conclusion = parseFCenterLine(parser, name);
    var style = top.getProperty('currentLine');
    if (style !== top.getProperty('line')) {
        top.setProperty('currentLine', top.getProperty('line'));
    }
    var rule = createRule(parser, table, [conclusion], top.getProperty('left'), top.getProperty('right'), style, rootAtTop);
    top.setProperty('left', null);
    top.setProperty('right', null);
    BussproofsUtil.setProperty(rule, 'inference', childCount);
    parser.configuration.addNode('inference', rule);
    top.Push(rule);
};
exports.default = BussproofsMethods;
//# sourceMappingURL=BussproofsMethods.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelConfiguration = exports.CancelMethods = void 0;
var Configuration_js_1 = __webpack_require__(0);
var TexConstants_js_1 = __webpack_require__(6);
var SymbolMap_js_1 = __webpack_require__(1);
var ParseUtil_js_1 = __webpack_require__(3);
var EncloseConfiguration_js_1 = __webpack_require__(24);
exports.CancelMethods = {};
exports.CancelMethods.Cancel = function (parser, name, notation) {
    var attr = parser.GetBrackets(name, '');
    var math = parser.ParseArg(name);
    var def = ParseUtil_js_1.default.keyvalOptions(attr, EncloseConfiguration_js_1.ENCLOSE_OPTIONS);
    def['notation'] = notation;
    parser.Push(parser.create('node', 'menclose', [math], def));
};
exports.CancelMethods.CancelTo = function (parser, name) {
    var attr = parser.GetBrackets(name, '');
    var value = parser.ParseArg(name);
    var math = parser.ParseArg(name);
    var def = ParseUtil_js_1.default.keyvalOptions(attr, EncloseConfiguration_js_1.ENCLOSE_OPTIONS);
    def['notation'] = [TexConstants_js_1.TexConstant.Notation.UPDIAGONALSTRIKE,
        TexConstants_js_1.TexConstant.Notation.UPDIAGONALARROW,
        TexConstants_js_1.TexConstant.Notation.NORTHEASTARROW].join(' ');
    value = parser.create('node', 'mpadded', [value], { depth: '-.1em', height: '+.1em', voffset: '.1em' });
    parser.Push(parser.create('node', 'msup', [parser.create('node', 'menclose', [math], def), value]));
};
new SymbolMap_js_1.CommandMap('cancel', {
    cancel: ['Cancel', TexConstants_js_1.TexConstant.Notation.UPDIAGONALSTRIKE],
    bcancel: ['Cancel', TexConstants_js_1.TexConstant.Notation.DOWNDIAGONALSTRIKE],
    xcancel: ['Cancel', TexConstants_js_1.TexConstant.Notation.UPDIAGONALSTRIKE + ' ' +
            TexConstants_js_1.TexConstant.Notation.DOWNDIAGONALSTRIKE],
    cancelto: 'CancelTo'
}, exports.CancelMethods);
exports.CancelConfiguration = Configuration_js_1.Configuration.create('cancel', { handler: { macro: ['cancel'] } });
//# sourceMappingURL=CancelConfiguration.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorConfiguration = void 0;
var SymbolMap_js_1 = __webpack_require__(1);
var Configuration_js_1 = __webpack_require__(0);
var ColorMethods_js_1 = __webpack_require__(49);
var ColorUtil_js_1 = __webpack_require__(50);
new SymbolMap_js_1.CommandMap('color', {
    color: 'Color',
    textcolor: 'TextColor',
    definecolor: 'DefineColor',
    colorbox: 'ColorBox',
    fcolorbox: 'FColorBox'
}, ColorMethods_js_1.ColorMethods);
var config = function (_config, jax) {
    jax.parseOptions.packageData.set('color', { model: new ColorUtil_js_1.ColorModel() });
};
exports.ColorConfiguration = Configuration_js_1.Configuration.create('color', {
    handler: {
        macro: ['color'],
    },
    options: {
        color: {
            padding: '5px',
            borderWidth: '2px'
        }
    },
    config: config
});
//# sourceMappingURL=ColorConfiguration.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorMethods = void 0;
var NodeUtil_js_1 = __webpack_require__(4);
var ParseUtil_js_1 = __webpack_require__(3);
function padding(colorPadding) {
    var pad = "+" + colorPadding;
    var unit = colorPadding.replace(/^.*?([a-z]*)$/, '$1');
    var pad2 = 2 * parseFloat(pad);
    return {
        width: "+" + pad2 + unit,
        height: pad,
        depth: pad,
        lspace: colorPadding,
    };
}
exports.ColorMethods = {};
exports.ColorMethods.Color = function (parser, name) {
    var model = parser.GetBrackets(name, '');
    var colorDef = parser.GetArgument(name);
    var colorModel = parser.configuration.packageData.get('color').model;
    var color = colorModel.getColor(model, colorDef);
    var style = parser.itemFactory.create('style')
        .setProperties({ styles: { mathcolor: color } });
    parser.stack.env['color'] = color;
    parser.Push(style);
};
exports.ColorMethods.TextColor = function (parser, name) {
    var model = parser.GetBrackets(name, '');
    var colorDef = parser.GetArgument(name);
    var colorModel = parser.configuration.packageData.get('color').model;
    var color = colorModel.getColor(model, colorDef);
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
};
exports.ColorMethods.DefineColor = function (parser, name) {
    var cname = parser.GetArgument(name);
    var model = parser.GetArgument(name);
    var def = parser.GetArgument(name);
    var colorModel = parser.configuration.packageData.get('color').model;
    colorModel.defineColor(model, cname, def);
};
exports.ColorMethods.ColorBox = function (parser, name) {
    var cname = parser.GetArgument(name);
    var math = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name));
    var colorModel = parser.configuration.packageData.get('color').model;
    var node = parser.create('node', 'mpadded', math, {
        mathbackground: colorModel.getColor('named', cname)
    });
    NodeUtil_js_1.default.setProperties(node, padding(parser.options.color.padding));
    parser.Push(node);
};
exports.ColorMethods.FColorBox = function (parser, name) {
    var fname = parser.GetArgument(name);
    var cname = parser.GetArgument(name);
    var math = ParseUtil_js_1.default.internalMath(parser, parser.GetArgument(name));
    var options = parser.options.color;
    var colorModel = parser.configuration.packageData.get('color').model;
    var node = parser.create('node', 'mpadded', math, {
        mathbackground: colorModel.getColor('named', cname),
        style: "border: " + options.borderWidth + " solid " + colorModel.getColor('named', fname)
    });
    NodeUtil_js_1.default.setProperties(node, padding(options.padding));
    parser.Push(node);
};
//# sourceMappingURL=ColorMethods.js.map

/***/ }),
/* 50 */
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
exports.ColorModel = void 0;
var TexError_js_1 = __webpack_require__(2);
var ColorConstants_js_1 = __webpack_require__(51);
var ColorModelProcessors = new Map();
var ColorModel = (function () {
    function ColorModel() {
        this.userColors = new Map();
    }
    ColorModel.prototype.normalizeColor = function (model, def) {
        if (!model || model === 'named') {
            return def;
        }
        if (ColorModelProcessors.has(model)) {
            var modelProcessor = ColorModelProcessors.get(model);
            return modelProcessor(def);
        }
        throw new TexError_js_1.default('UndefinedColorModel', 'Color model \'%1\' not defined', model);
    };
    ColorModel.prototype.getColor = function (model, def) {
        if (!model || model === 'named') {
            return this.getColorByName(def);
        }
        return this.normalizeColor(model, def);
    };
    ColorModel.prototype.getColorByName = function (name) {
        if (this.userColors.has(name)) {
            return this.userColors.get(name);
        }
        if (ColorConstants_js_1.COLORS.has(name)) {
            return ColorConstants_js_1.COLORS.get(name);
        }
        return name;
    };
    ColorModel.prototype.defineColor = function (model, name, def) {
        var normalized = this.normalizeColor(model, def);
        this.userColors.set(name, normalized);
    };
    return ColorModel;
}());
exports.ColorModel = ColorModel;
ColorModelProcessors.set('rgb', function (rgb) {
    var e_1, _a;
    var rgbParts = rgb.trim().split(/\s*,\s*/);
    var RGB = '#';
    if (rgbParts.length !== 3) {
        throw new TexError_js_1.default('ModelArg1', 'Color values for the %1 model require 3 numbers', 'rgb');
    }
    try {
        for (var rgbParts_1 = __values(rgbParts), rgbParts_1_1 = rgbParts_1.next(); !rgbParts_1_1.done; rgbParts_1_1 = rgbParts_1.next()) {
            var rgbPart = rgbParts_1_1.value;
            if (!rgbPart.match(/^(\d+(\.\d*)?|\.\d+)$/)) {
                throw new TexError_js_1.default('InvalidDecimalNumber', 'Invalid decimal number');
            }
            var n = parseFloat(rgbPart);
            if (n < 0 || n > 1) {
                throw new TexError_js_1.default('ModelArg2', 'Color values for the %1 model must be between %2 and %3', 'rgb', '0', '1');
            }
            var pn = Math.floor(n * 255).toString(16);
            if (pn.length < 2) {
                pn = '0' + pn;
            }
            RGB += pn;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (rgbParts_1_1 && !rgbParts_1_1.done && (_a = rgbParts_1.return)) _a.call(rgbParts_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return RGB;
});
ColorModelProcessors.set('RGB', function (rgb) {
    var e_2, _a;
    var rgbParts = rgb.trim().split(/\s*,\s*/);
    var RGB = '#';
    if (rgbParts.length !== 3) {
        throw new TexError_js_1.default('ModelArg1', 'Color values for the %1 model require 3 numbers', 'RGB');
    }
    try {
        for (var rgbParts_2 = __values(rgbParts), rgbParts_2_1 = rgbParts_2.next(); !rgbParts_2_1.done; rgbParts_2_1 = rgbParts_2.next()) {
            var rgbPart = rgbParts_2_1.value;
            if (!rgbPart.match(/^\d+$/)) {
                throw new TexError_js_1.default('InvalidNumber', 'Invalid number');
            }
            var n = parseInt(rgbPart);
            if (n > 255) {
                throw new TexError_js_1.default('ModelArg2', 'Color values for the %1 model must be between %2 and %3', 'RGB', '0', '255');
            }
            var pn = n.toString(16);
            if (pn.length < 2) {
                pn = '0' + pn;
            }
            RGB += pn;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (rgbParts_2_1 && !rgbParts_2_1.done && (_a = rgbParts_2.return)) _a.call(rgbParts_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return RGB;
});
ColorModelProcessors.set('gray', function (gray) {
    if (!gray.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/)) {
        throw new TexError_js_1.default('InvalidDecimalNumber', 'Invalid decimal number');
    }
    var n = parseFloat(gray);
    if (n < 0 || n > 1) {
        throw new TexError_js_1.default('ModelArg2', 'Color values for the %1 model must be between %2 and %3', 'gray', '0', '1');
    }
    var pn = Math.floor(n * 255).toString(16);
    if (pn.length < 2) {
        pn = '0' + pn;
    }
    return "#" + pn + pn + pn;
});
//# sourceMappingURL=ColorUtil.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = void 0;
exports.COLORS = new Map([
    ['Apricot', '#FBB982'],
    ['Aquamarine', '#00B5BE'],
    ['Bittersweet', '#C04F17'],
    ['Black', '#221E1F'],
    ['Blue', '#2D2F92'],
    ['BlueGreen', '#00B3B8'],
    ['BlueViolet', '#473992'],
    ['BrickRed', '#B6321C'],
    ['Brown', '#792500'],
    ['BurntOrange', '#F7921D'],
    ['CadetBlue', '#74729A'],
    ['CarnationPink', '#F282B4'],
    ['Cerulean', '#00A2E3'],
    ['CornflowerBlue', '#41B0E4'],
    ['Cyan', '#00AEEF'],
    ['Dandelion', '#FDBC42'],
    ['DarkOrchid', '#A4538A'],
    ['Emerald', '#00A99D'],
    ['ForestGreen', '#009B55'],
    ['Fuchsia', '#8C368C'],
    ['Goldenrod', '#FFDF42'],
    ['Gray', '#949698'],
    ['Green', '#00A64F'],
    ['GreenYellow', '#DFE674'],
    ['JungleGreen', '#00A99A'],
    ['Lavender', '#F49EC4'],
    ['LimeGreen', '#8DC73E'],
    ['Magenta', '#EC008C'],
    ['Mahogany', '#A9341F'],
    ['Maroon', '#AF3235'],
    ['Melon', '#F89E7B'],
    ['MidnightBlue', '#006795'],
    ['Mulberry', '#A93C93'],
    ['NavyBlue', '#006EB8'],
    ['OliveGreen', '#3C8031'],
    ['Orange', '#F58137'],
    ['OrangeRed', '#ED135A'],
    ['Orchid', '#AF72B0'],
    ['Peach', '#F7965A'],
    ['Periwinkle', '#7977B8'],
    ['PineGreen', '#008B72'],
    ['Plum', '#92268F'],
    ['ProcessBlue', '#00B0F0'],
    ['Purple', '#99479B'],
    ['RawSienna', '#974006'],
    ['Red', '#ED1B23'],
    ['RedOrange', '#F26035'],
    ['RedViolet', '#A1246B'],
    ['Rhodamine', '#EF559F'],
    ['RoyalBlue', '#0071BC'],
    ['RoyalPurple', '#613F99'],
    ['RubineRed', '#ED017D'],
    ['Salmon', '#F69289'],
    ['SeaGreen', '#3FBC9D'],
    ['Sepia', '#671800'],
    ['SkyBlue', '#46C5DD'],
    ['SpringGreen', '#C6DC67'],
    ['Tan', '#DA9D76'],
    ['TealBlue', '#00AEB3'],
    ['Thistle', '#D883B7'],
    ['Turquoise', '#00B4CE'],
    ['Violet', '#58429B'],
    ['VioletRed', '#EF58A0'],
    ['White', '#FFFFFF'],
    ['WildStrawberry', '#EE2967'],
    ['Yellow', '#FFF200'],
    ['YellowGreen', '#98CC70'],
    ['YellowOrange', '#FAA21A'],
]);
//# sourceMappingURL=ColorConstants.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorConfiguration = exports.ColorV2Methods = void 0;
var SymbolMap_js_1 = __webpack_require__(1);
var Configuration_js_1 = __webpack_require__(0);
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
/* 53 */
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
exports.ConfigMacrosConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
var Options_js_1 = __webpack_require__(10);
var SymbolMap_js_1 = __webpack_require__(1);
var Symbol_js_1 = __webpack_require__(12);
var NewcommandMethods_js_1 = __webpack_require__(25);
var MACROSMAP = 'configmacros-map';
function configmacrosInit(config) {
    new SymbolMap_js_1.CommandMap(MACROSMAP, {}, {});
    config.append(Configuration_js_1.Configuration.local({ handler: { macro: [MACROSMAP] }, priority: 3 }));
}
function configmacrosConfig(_config, jax) {
    var e_1, _a;
    var macrosMap = jax.parseOptions.handlers.retrieve(MACROSMAP);
    var macros = jax.parseOptions.options.macros;
    try {
        for (var _b = __values(Object.keys(macros)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var cs = _c.value;
            var def = (typeof macros[cs] === 'string' ? [macros[cs]] : macros[cs]);
            var macro = Array.isArray(def[2]) ?
                new Symbol_js_1.Macro(cs, NewcommandMethods_js_1.default.MacroWithTemplate, def.slice(0, 2).concat(def[2])) :
                new Symbol_js_1.Macro(cs, NewcommandMethods_js_1.default.Macro, def);
            macrosMap.add(cs, macro);
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
exports.ConfigMacrosConfiguration = Configuration_js_1.Configuration.create('configmacros', {
    init: configmacrosInit,
    config: configmacrosConfig,
    options: { macros: Options_js_1.expandable({}) }
});
//# sourceMappingURL=ConfigMacrosConfiguration.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtpfeilConfiguration = exports.ExtpfeilMethods = void 0;
var Configuration_js_1 = __webpack_require__(0);
var SymbolMap_js_1 = __webpack_require__(1);
var AmsMethods_js_1 = __webpack_require__(11);
var NewcommandUtil_js_1 = __webpack_require__(19);
var NewcommandConfiguration_js_1 = __webpack_require__(26);
var TexError_js_1 = __webpack_require__(2);
exports.ExtpfeilMethods = {};
exports.ExtpfeilMethods.xArrow = AmsMethods_js_1.AmsMethods.xArrow;
exports.ExtpfeilMethods.NewExtArrow = function (parser, name) {
    var cs = parser.GetArgument(name);
    var space = parser.GetArgument(name);
    var chr = parser.GetArgument(name);
    if (!cs.match(/^\\([a-z]+|.)$/i)) {
        throw new TexError_js_1.default('NewextarrowArg1', 'First argument to %1 must be a control sequence name', name);
    }
    if (!space.match(/^(\d+),(\d+)$/)) {
        throw new TexError_js_1.default('NewextarrowArg2', 'Second argument to %1 must be two integers separated by a comma', name);
    }
    if (!chr.match(/^(\d+|0x[0-9A-F]+)$/i)) {
        throw new TexError_js_1.default('NewextarrowArg3', 'Third argument to %1 must be a unicode character number', name);
    }
    cs = cs.substr(1);
    var spaces = space.split(',');
    NewcommandUtil_js_1.default.addMacro(parser, cs, exports.ExtpfeilMethods.xArrow, [parseInt(chr), parseInt(spaces[0]), parseInt(spaces[1])]);
};
new SymbolMap_js_1.CommandMap('extpfeil', {
    xtwoheadrightarrow: ['xArrow', 0x21A0, 12, 16],
    xtwoheadleftarrow: ['xArrow', 0x219E, 17, 13],
    xmapsto: ['xArrow', 0x21A6, 6, 7],
    xlongequal: ['xArrow', 0x003D, 7, 7],
    xtofrom: ['xArrow', 0x21C4, 12, 12],
    Newextarrow: 'NewExtArrow'
}, exports.ExtpfeilMethods);
var init = function (config) {
    NewcommandConfiguration_js_1.NewcommandConfiguration.init(config);
};
exports.ExtpfeilConfiguration = Configuration_js_1.Configuration.create('extpfeil', {
    handler: { macro: ['extpfeil'] },
    init: init
});
//# sourceMappingURL=ExtpfeilConfiguration.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeginEnvItem = void 0;
var TexError_js_1 = __webpack_require__(2);
var StackItem_js_1 = __webpack_require__(13);
var BeginEnvItem = (function (_super) {
    __extends(BeginEnvItem, _super);
    function BeginEnvItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BeginEnvItem.prototype, "kind", {
        get: function () {
            return 'beginEnv';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BeginEnvItem.prototype, "isOpen", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    BeginEnvItem.prototype.checkItem = function (item) {
        if (item.isKind('end')) {
            if (item.getName() !== this.getName()) {
                throw new TexError_js_1.default('EnvBadEnd', '\\begin{%1} ended with \\end{%2}', this.getName(), item.getName());
            }
            return [[this.factory.create('mml', this.toMml())], true];
        }
        if (item.isKind('stop')) {
            throw new TexError_js_1.default('EnvMissingEnd', 'Missing \\end{%1}', this.getName());
        }
        return _super.prototype.checkItem.call(this, item);
    };
    return BeginEnvItem;
}(StackItem_js_1.BaseItem));
exports.BeginEnvItem = BeginEnvItem;
//# sourceMappingURL=NewcommandItems.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NewcommandMethods_js_1 = __webpack_require__(25);
var SymbolMap_js_1 = __webpack_require__(1);
new SymbolMap_js_1.CommandMap('Newcommand-macros', {
    newcommand: 'NewCommand',
    renewcommand: 'NewCommand',
    newenvironment: 'NewEnvironment',
    renewenvironment: 'NewEnvironment',
    def: 'MacroDef',
    'let': 'Let'
}, NewcommandMethods_js_1.default);
//# sourceMappingURL=NewcommandMappings.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
var SymbolMap_js_1 = __webpack_require__(1);
var HtmlMethods_js_1 = __webpack_require__(58);
new SymbolMap_js_1.CommandMap('html_macros', {
    href: 'Href',
    'class': 'Class',
    style: 'Style',
    cssId: 'Id'
}, HtmlMethods_js_1.default);
exports.HtmlConfiguration = Configuration_js_1.Configuration.create('html', { handler: { macro: ['html_macros'] } });
//# sourceMappingURL=HtmlConfiguration.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeUtil_js_1 = __webpack_require__(4);
var HtmlMethods = {};
HtmlMethods.Href = function (parser, name) {
    var url = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    NodeUtil_js_1.default.setAttribute(arg, 'href', url);
    parser.Push(arg);
};
HtmlMethods.Class = function (parser, name) {
    var CLASS = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    var oldClass = NodeUtil_js_1.default.getAttribute(arg, 'class');
    if (oldClass) {
        CLASS = oldClass + ' ' + CLASS;
    }
    NodeUtil_js_1.default.setAttribute(arg, 'class', CLASS);
    parser.Push(arg);
};
HtmlMethods.Style = function (parser, name) {
    var style = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    var oldStyle = NodeUtil_js_1.default.getAttribute(arg, 'style');
    if (oldStyle) {
        if (style.charAt(style.length - 1) !== ';') {
            style += ';';
        }
        style = oldStyle + ' ' + style;
    }
    NodeUtil_js_1.default.setAttribute(arg, 'style', style);
    parser.Push(arg);
};
HtmlMethods.Id = function (parser, name) {
    var ID = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    NodeUtil_js_1.default.setAttribute(arg, 'id', ID);
    parser.Push(arg);
};
var GetArgumentMML = function (parser, name) {
    var arg = parser.ParseArg(name);
    if (!NodeUtil_js_1.default.isInferred(arg)) {
        return arg;
    }
    var children = NodeUtil_js_1.default.getChildren(arg);
    if (children.length === 1) {
        return children[0];
    }
    var mrow = parser.create('node', 'mrow');
    NodeUtil_js_1.default.copyChildren(arg, mrow);
    NodeUtil_js_1.default.copyAttributes(arg, mrow);
    return mrow;
};
exports.default = HtmlMethods;
//# sourceMappingURL=HtmlMethods.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MhchemConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
var SymbolMap_js_1 = __webpack_require__(1);
var TexError_js_1 = __webpack_require__(2);
var BaseMethods_js_1 = __webpack_require__(8);
var AmsMethods_js_1 = __webpack_require__(11);
var mhchem_parser_js_1 = __webpack_require__(60);
var MhchemMethods = {};
MhchemMethods.Macro = BaseMethods_js_1.default.Macro;
MhchemMethods.xArrow = AmsMethods_js_1.AmsMethods.xArrow;
MhchemMethods.Machine = function (parser, name, machine) {
    try {
        var arg = parser.GetArgument(name);
        var data = mhchem_parser_js_1.mhchemParser.go(arg, machine);
        var tex = mhchem_parser_js_1.texify.go(data);
        parser.string = tex + parser.string.substr(parser.i);
        parser.i = 0;
    }
    catch (err) {
        throw new TexError_js_1.default(err[0], err[1], err.slice(2));
    }
};
new SymbolMap_js_1.CommandMap('mhchem', {
    ce: ['Machine', 'ce'],
    pu: ['Machine', 'pu'],
    longrightleftharpoons: ['Macro',
        '\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}'],
    longRightleftharpoons: ['Macro',
        '\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\smash{\\leftharpoondown}}'],
    longLeftrightharpoons: ['Macro',
        '\\stackrel{\\textstyle\\vphantom{{-}}{\\rightharpoonup}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}'],
    longleftrightarrows: ['Macro',
        '\\stackrel{\\longrightarrow}{\\smash{\\longleftarrow}\\Rule{0px}{.25em}{0px}}'],
    tripledash: ['Macro',
        '\\vphantom{-}\\raise2mu{\\kern2mu\\tiny\\text{-}\\kern1mu\\text{-}\\kern1mu\\text{-}\\kern2mu}'],
    xrightarrow: ['xArrow', 0x2192, 5, 6],
    xleftarrow: ['xArrow', 0x2190, 7, 3],
    xleftrightarrow: ['xArrow', 0x2194, 6, 6],
    xrightleftharpoons: ['xArrow', 0x21CC, 5, 7],
    xRightleftharpoons: ['xArrow', 0x21CC, 5, 7],
    xLeftrightharpoons: ['xArrow', 0x21CC, 5, 7]
}, MhchemMethods);
exports.MhchemConfiguration = Configuration_js_1.Configuration.create('mhchem', { handler: { macro: ['mhchem'] } });
//# sourceMappingURL=MhchemConfiguration.js.map

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', {value: true});
//
// Core parser for mhchem syntax  (recursive)
//
/** @type {MhchemParser} */
var mhchemParser = {
  //
  // Parses mchem \ce syntax
  //
  // Call like
  //   go("H2O");
  //
  go: function (input, stateMachine) {
    if (!input) { return []; }
    if (stateMachine === undefined) { stateMachine = 'ce'; }
    var state = '0';

    //
    // String buffers for parsing:
    //
    // buffer.a == amount
    // buffer.o == element
    // buffer.b == left-side superscript
    // buffer.p == left-side subscript
    // buffer.q == right-side subscript
    // buffer.d == right-side superscript
    //
    // buffer.r == arrow
    // buffer.rdt == arrow, script above, type
    // buffer.rd == arrow, script above, content
    // buffer.rqt == arrow, script below, type
    // buffer.rq == arrow, script below, content
    //
    // buffer.text_
    // buffer.rm
    // etc.
    //
    // buffer.parenthesisLevel == int, starting at 0
    // buffer.sb == bool, space before
    // buffer.beginsWithBond == bool
    //
    // These letters are also used as state names.
    //
    // Other states:
    // 0 == begin of main part (arrow/operator unlikely)
    // 1 == next entity
    // 2 == next entity (arrow/operator unlikely)
    // 3 == next atom
    // c == macro
    //
    /** @type {Buffer} */
    var buffer = {};
    buffer['parenthesisLevel'] = 0;

    input = input.replace(/\n/g, " ");
    input = input.replace(/[\u2212\u2013\u2014\u2010]/g, "-");
    input = input.replace(/[\u2026]/g, "...");

    //
    // Looks through mhchemParser.transitions, to execute a matching action
    // (recursive)
    //
    var lastInput;
    var watchdog = 10;
    /** @type {ParserOutput[]} */
    var output = [];
    while (true) {
      if (lastInput !== input) {
        watchdog = 10;
        lastInput = input;
      } else {
        watchdog--;
      }
      //
      // Find actions in transition table
      //
      var machine = mhchemParser.stateMachines[stateMachine];
      var t = machine.transitions[state] || machine.transitions['*'];
      iterateTransitions:
      for (var i=0; i<t.length; i++) {
        var matches = mhchemParser.patterns.match_(t[i].pattern, input);
        if (matches) {
          //
          // Execute actions
          //
          var task = t[i].task;
          for (var iA=0; iA<task.action_.length; iA++) {
            var o;
            //
            // Find and execute action
            //
            if (machine.actions[task.action_[iA].type_]) {
              o = machine.actions[task.action_[iA].type_](buffer, matches.match_, task.action_[iA].option);
            } else if (mhchemParser.actions[task.action_[iA].type_]) {
              o = mhchemParser.actions[task.action_[iA].type_](buffer, matches.match_, task.action_[iA].option);
            } else {
              throw ["MhchemBugA", "mhchem bug A. Please report. (" + task.action_[iA].type_ + ")"];  // Trying to use non-existing action
            }
            //
            // Add output
            //
            mhchemParser.concatArray(output, o);
          }
          //
          // Set next state,
          // Shorten input,
          // Continue with next character
          //   (= apply only one transition per position)
          //
          state = task.nextState || state;
          if (input.length > 0) {
            if (!task.revisit) {
              input = matches.remainder;
            }
            if (!task.toContinue) {
              break iterateTransitions;
            }
          } else {
            return output;
          }
        }
      }
      //
      // Prevent infinite loop
      //
      if (watchdog <= 0) {
        throw ["MhchemBugU", "mhchem bug U. Please report."];  // Unexpected character
      }
    }
  },
  concatArray: function (a, b) {
    if (b) {
      if (Array.isArray(b)) {
        for (var iB=0; iB<b.length; iB++) {
          a.push(b[iB]);
        }
      } else {
        a.push(b);
      }
    }
  },

  patterns: {
    //
    // Matching patterns
    // either regexps or function that return null or {match_:"a", remainder:"bc"}
    //
    patterns: {
      // property names must not look like integers ("2") for correct property traversal order, later on
      'empty': /^$/,
      'else': /^./,
      'else2': /^./,
      'space': /^\s/,
      'space A': /^\s(?=[A-Z\\$])/,
      'space$': /^\s$/,
      'a-z': /^[a-z]/,
      'x': /^x/,
      'x$': /^x$/,
      'i$': /^i$/,
      'letters': /^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,
      '\\greek': /^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,
      'one lowercase latin letter $': /^(?:([a-z])(?:$|[^a-zA-Z]))$/,
      '$one lowercase latin letter$ $': /^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,
      'one lowercase greek letter $': /^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,
      'digits': /^[0-9]+/,
      '-9.,9': /^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,
      '-9.,9 no missing 0': /^[+\-]?[0-9]+(?:[.,][0-9]+)?/,
      '(-)(9.,9)(e)(99)': function (input) {
        var m = input.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:([eE]|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);
        if (m && m[0]) {
          return { match_: m.splice(1), remainder: input.substr(m[0].length) };
        }
        return null;
      },
      '(-)(9)^(-9)': function (input) {
        var m = input.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/);
        if (m && m[0]) {
          return { match_: m.splice(1), remainder: input.substr(m[0].length) };
        }
        return null;
      },
      'state of aggregation $': function (input) {  // ... or crystal system
        var a = mhchemParser.patterns.findObserveGroups(input, "", /^\([a-z]{1,3}(?=[\),])/, ")", "");  // (aq), (aq,$\infty$), (aq, sat)
        if (a  &&  a.remainder.match(/^($|[\s,;\)\]\}])/)) { return a; }  //  AND end of 'phrase'
        var m = input.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);  // OR crystal system ($o$) (\ca$c$)
        if (m) {
          return { match_: m[0], remainder: input.substr(m[0].length) };
        }
        return null;
      },
      '_{(state of aggregation)}$': /^_\{(\([a-z]{1,3}\))\}/,
      '{[(': /^(?:\\\{|\[|\()/,
      ')]}': /^(?:\)|\]|\\\})/,
      ', ': /^[,;]\s*/,
      ',': /^[,;]/,
      '.': /^[.]/,
      '. ': /^([.\u22C5\u00B7\u2022])\s*/,
      '...': /^\.\.\.(?=$|[^.])/,
      '* ': /^([*])\s*/,
      '^{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "^{", "", "", "}"); },
      '^($...$)': function (input) { return mhchemParser.patterns.findObserveGroups(input, "^", "$", "$", ""); },
      '^a': /^\^([0-9]+|[^\\_])/,
      '^\\x{}{}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "^", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true); },
      '^\\x{}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "^", /^\\[a-zA-Z]+\{/, "}", ""); },
      '^\\x': /^\^(\\[a-zA-Z]+)\s*/,
      '^(-1)': /^\^(-?\d+)/,
      '\'': /^'/,
      '_{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "_{", "", "", "}"); },
      '_($...$)': function (input) { return mhchemParser.patterns.findObserveGroups(input, "_", "$", "$", ""); },
      '_9': /^_([+\-]?[0-9]+|[^\\])/,
      '_\\x{}{}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "_", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true); },
      '_\\x{}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "_", /^\\[a-zA-Z]+\{/, "}", ""); },
      '_\\x': /^_(\\[a-zA-Z]+)\s*/,
      '^_': /^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,
      '{}': /^\{\}/,
      '{...}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "", "{", "}", ""); },
      '{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "{", "", "", "}"); },
      '$...$': function (input) { return mhchemParser.patterns.findObserveGroups(input, "", "$", "$", ""); },
      '${(...)}$': function (input) { return mhchemParser.patterns.findObserveGroups(input, "${", "", "", "}$"); },
      '$(...)$': function (input) { return mhchemParser.patterns.findObserveGroups(input, "$", "", "", "$"); },
      '=<>': /^[=<>]/,
      '#': /^[#\u2261]/,
      '+': /^\+/,
      '-$': /^-(?=[\s_},;\]/]|$|\([a-z]+\))/,  // -space -, -; -] -/ -$ -state-of-aggregation
      '-9': /^-(?=[0-9])/,
      '- orbital overlap': /^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,
      '-': /^-/,
      'pm-operator': /^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,
      'operator': /^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,
      'arrowUpDown': /^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,
      '\\bond{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\bond{", "", "", "}"); },
      '->': /^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,
      'CMT': /^[CMT](?=\[)/,
      '[(...)]': function (input) { return mhchemParser.patterns.findObserveGroups(input, "[", "", "", "]"); },
      '1st-level escape': /^(&|\\\\|\\hline)\s*/,
      '\\,': /^(?:\\[,\ ;:])/,  // \\x - but output no space before
      '\\x{}{}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "", /^\\[a-zA-Z]+\{/, "}", "", "", "{", "}", "", true); },
      '\\x{}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "", /^\\[a-zA-Z]+\{/, "}", ""); },
      '\\ca': /^\\ca(?:\s+|(?![a-zA-Z]))/,
      '\\x': /^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,
      'orbital': /^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,  // only those with numbers in front, because the others will be formatted correctly anyway
      'others': /^[\/~|]/,
      '\\frac{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\frac{", "", "", "}", "{", "", "", "}"); },
      '\\overset{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\overset{", "", "", "}", "{", "", "", "}"); },
      '\\underset{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\underset{", "", "", "}", "{", "", "", "}"); },
      '\\underbrace{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\underbrace{", "", "", "}_", "{", "", "", "}"); },
      '\\color{(...)}0': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\color{", "", "", "}"); },
      '\\color{(...)}{(...)}1': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\color{", "", "", "}", "{", "", "", "}"); },
      '\\color(...){(...)}2': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\color", "\\", "", /^(?=\{)/, "{", "", "", "}"); },
      '\\ce{(...)}': function (input) { return mhchemParser.patterns.findObserveGroups(input, "\\ce{", "", "", "}"); },
      'oxidation$': /^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,
      'd-oxidation$': /^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,  // 0 could be oxidation or charge
      'roman numeral': /^[IVX]+/,
      '1/2$': /^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,
      'amount': function (input) {
        var match;
        // e.g. 2, 0.5, 1/2, -2, n/2, +;  $a$ could be added later in parsing
        match = input.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/);
        if (match) {
          return { match_: match[0], remainder: input.substr(match[0].length) };
        }
        var a = mhchemParser.patterns.findObserveGroups(input, "", "$", "$", "");
        if (a) {  // e.g. $2n-1$, $-$
          match = a.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/);
          if (match) {
            return { match_: match[0], remainder: input.substr(match[0].length) };
          }
        }
        return null;
      },
      'amount2': function (input) { return this['amount'](input); },
      '(KV letters),': /^(?:[A-Z][a-z]{0,2}|i)(?=,)/,
      'formula$': function (input) {
        if (input.match(/^\([a-z]+\)$/)) { return null; }  // state of aggregation = no formula
        var match = input.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);
        if (match) {
          return { match_: match[0], remainder: input.substr(match[0].length) };
        }
        return null;
      },
      'uprightEntities': /^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,
      '/': /^\s*(\/)\s*/,
      '//': /^\s*(\/\/)\s*/,
      '*': /^\s*[*.]\s*/
    },
    findObserveGroups: function (input, begExcl, begIncl, endIncl, endExcl, beg2Excl, beg2Incl, end2Incl, end2Excl, combine) {
      /** @type {{(input: string, pattern: string | RegExp): string | string[] | null;}} */
      var _match = function (input, pattern) {
        if (typeof pattern === "string") {
          if (input.indexOf(pattern) !== 0) { return null; }
          return pattern;
        } else {
          var match = input.match(pattern);
          if (!match) { return null; }
          return match[0];
        }
      };
      /** @type {{(input: string, i: number, endChars: string | RegExp): {endMatchBegin: number, endMatchEnd: number} | null;}} */
      var _findObserveGroups = function (input, i, endChars) {
        var braces = 0;
        while (i < input.length) {
          var a = input.charAt(i);
          var match = _match(input.substr(i), endChars);
          if (match !== null  &&  braces === 0) {
            return { endMatchBegin: i, endMatchEnd: i + match.length };
          } else if (a === "{") {
            braces++;
          } else if (a === "}") {
            if (braces === 0) {
              throw ["ExtraCloseMissingOpen", "Extra close brace or missing open brace"];
            } else {
              braces--;
            }
          }
          i++;
        }
        if (braces > 0) {
          return null;
        }
        return null;
      };
      var match = _match(input, begExcl);
      if (match === null) { return null; }
      input = input.substr(match.length);
      match = _match(input, begIncl);
      if (match === null) { return null; }
      var e = _findObserveGroups(input, match.length, endIncl || endExcl);
      if (e === null) { return null; }
      var match1 = input.substring(0, (endIncl ? e.endMatchEnd : e.endMatchBegin));
      if (!(beg2Excl || beg2Incl)) {
        return {
          match_: match1,
          remainder: input.substr(e.endMatchEnd)
        };
      } else {
        var group2 = this.findObserveGroups(input.substr(e.endMatchEnd), beg2Excl, beg2Incl, end2Incl, end2Excl);
        if (group2 === null) { return null; }
        /** @type {string[]} */
        var matchRet = [match1, group2.match_];
        return {
          match_: (combine ? matchRet.join("") : matchRet),
          remainder: group2.remainder
        };
      }
    },

    //
    // Matching function
    // e.g. match("a", input) will look for the regexp called "a" and see if it matches
    // returns null or {match_:"a", remainder:"bc"}
    //
    match_: function (m, input) {
      var pattern = mhchemParser.patterns.patterns[m];
      if (pattern === undefined) {
        throw ["MhchemBugP", "mhchem bug P. Please report. (" + m + ")"];  // Trying to use non-existing pattern
      } else if (typeof pattern === "function") {
        return mhchemParser.patterns.patterns[m](input);  // cannot use cached var pattern here, because some pattern functions need this===mhchemParser
      } else {  // RegExp
        var match = input.match(pattern);
        if (match) {
          var mm;
          if (match[2]) {
            mm = [ match[1], match[2] ];
          } else if (match[1]) {
            mm = match[1];
          } else {
            mm = match[0];
          }
          return { match_: mm, remainder: input.substr(match[0].length) };
        }
        return null;
      }
    }
  },

  //
  // Generic state machine actions
  //
  actions: {
    'a=': function (buffer, m) { buffer.a = (buffer.a || "") + m; },
    'b=': function (buffer, m) { buffer.b = (buffer.b || "") + m; },
    'p=': function (buffer, m) { buffer.p = (buffer.p || "") + m; },
    'o=': function (buffer, m) { buffer.o = (buffer.o || "") + m; },
    'q=': function (buffer, m) { buffer.q = (buffer.q || "") + m; },
    'd=': function (buffer, m) { buffer.d = (buffer.d || "") + m; },
    'rm=': function (buffer, m) { buffer.rm = (buffer.rm || "") + m; },
    'text=': function (buffer, m) { buffer.text_ = (buffer.text_ || "") + m; },
    'insert': function (buffer, m, a) { return { type_: a }; },
    'insert+p1': function (buffer, m, a) { return { type_: a, p1: m }; },
    'insert+p1+p2': function (buffer, m, a) { return { type_: a, p1: m[0], p2: m[1] }; },
    'copy': function (buffer, m) { return m; },
    'rm': function (buffer, m) { return { type_: 'rm', p1: m || ""}; },
    'text': function (buffer, m) { return mhchemParser.go(m, 'text'); },
    '{text}': function (buffer, m) {
      var ret = [ "{" ];
      mhchemParser.concatArray(ret, mhchemParser.go(m, 'text'));
      ret.push("}");
      return ret;
    },
    'tex-math': function (buffer, m) { return mhchemParser.go(m, 'tex-math'); },
    'tex-math tight': function (buffer, m) { return mhchemParser.go(m, 'tex-math tight'); },
    'bond': function (buffer, m, k) { return { type_: 'bond', kind_: k || m }; },
    'color0-output': function (buffer, m) { return { type_: 'color0', color: m[0] }; },
    'ce': function (buffer, m) { return mhchemParser.go(m); },
    '1/2': function (buffer, m) {
      /** @type {ParserOutput[]} */
      var ret = [];
      if (m.match(/^[+\-]/)) {
        ret.push(m.substr(0, 1));
        m = m.substr(1);
      }
      var n = m.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);
      n[1] = n[1].replace(/\$/g, "");
      ret.push({ type_: 'frac', p1: n[1], p2: n[2] });
      if (n[3]) {
        n[3] = n[3].replace(/\$/g, "");
        ret.push({ type_: 'tex-math', p1: n[3] });
      }
      return ret;
    },
    '9,9': function (buffer, m) { return mhchemParser.go(m, '9,9'); }
  },
  //
  // createTransitions
  // convert  { 'letter': { 'state': { action_: 'output' } } }  to  { 'state' => [ { pattern: 'letter', task: { action_: [{type_: 'output'}] } } ] }
  // with expansion of 'a|b' to 'a' and 'b' (at 2 places)
  //
  createTransitions: function (o) {
    var pattern, state;
    /** @type {string[]} */
    var stateArray;
    var i;
    //
    // 1. Collect all states
    //
    /** @type {Transitions} */
    var transitions = {};
    for (pattern in o) {
      for (state in o[pattern]) {
        stateArray = state.split("|");
        o[pattern][state].stateArray = stateArray;
        for (i=0; i<stateArray.length; i++) {
          transitions[stateArray[i]] = [];
        }
      }
    }
    //
    // 2. Fill states
    //
    for (pattern in o) {
      for (state in o[pattern]) {
        stateArray = o[pattern][state].stateArray || [];
        for (i=0; i<stateArray.length; i++) {
          //
          // 2a. Normalize actions into array:  'text=' ==> [{type_:'text='}]
          // (Note to myself: Resolving the function here would be problematic. It would need .bind (for *this*) and currying (for *option*).)
          //
          /** @type {any} */
          var p = o[pattern][state];
          if (p.action_) {
            p.action_ = [].concat(p.action_);
            for (var k=0; k<p.action_.length; k++) {
              if (typeof p.action_[k] === "string") {
                p.action_[k] = { type_: p.action_[k] };
              }
            }
          } else {
            p.action_ = [];
          }
          //
          // 2.b Multi-insert
          //
          var patternArray = pattern.split("|");
          for (var j=0; j<patternArray.length; j++) {
            if (stateArray[i] === '*') {  // insert into all
              for (var t in transitions) {
                transitions[t].push({ pattern: patternArray[j], task: p });
              }
            } else {
              transitions[stateArray[i]].push({ pattern: patternArray[j], task: p });
            }
          }
        }
      }
    }
    return transitions;
  },
  stateMachines: {}
};

//
// Definition of state machines
//
mhchemParser.stateMachines = {
  //
  // \ce state machines
  //
  //#region ce
  'ce': {  // main parser
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': { action_: 'output' } },
      'else':  {
        '0|1|2': { action_: 'beginsWithBond=false', revisit: true, toContinue: true } },
      'oxidation$': {
        '0': { action_: 'oxidation-output' } },
      'CMT': {
        'r': { action_: 'rdt=', nextState: 'rt' },
        'rd': { action_: 'rqt=', nextState: 'rdt' } },
      'arrowUpDown': {
        '0|1|2|as': { action_: [ 'sb=false', 'output', 'operator' ], nextState: '1' } },
      'uprightEntities': {
        '0|1|2': { action_: [ 'o=', 'output' ], nextState: '1' } },
      'orbital': {
        '0|1|2|3': { action_: 'o=', nextState: 'o' } },
      '->': {
        '0|1|2|3': { action_: 'r=', nextState: 'r' },
        'a|as': { action_: [ 'output', 'r=' ], nextState: 'r' },
        '*': { action_: [ 'output', 'r=' ], nextState: 'r' } },
      '+': {
        'o': { action_: 'd= kv',  nextState: 'd' },
        'd|D': { action_: 'd=', nextState: 'd' },
        'q': { action_: 'd=',  nextState: 'qd' },
        'qd|qD': { action_: 'd=', nextState: 'qd' },
        'dq': { action_: [ 'output', 'd=' ], nextState: 'd' },
        '3': { action_: [ 'sb=false', 'output', 'operator' ], nextState: '0' } },
      'amount': {
        '0|2': { action_: 'a=', nextState: 'a' } },
      'pm-operator': {
        '0|1|2|a|as': { action_: [ 'sb=false', 'output', { type_: 'operator', option: '\\pm' } ], nextState: '0' } },
      'operator': {
        '0|1|2|a|as': { action_: [ 'sb=false', 'output', 'operator' ], nextState: '0' } },
      '-$': {
        'o|q': { action_: [ 'charge or bond', 'output' ],  nextState: 'qd' },
        'd': { action_: 'd=', nextState: 'd' },
        'D': { action_: [ 'output', { type_: 'bond', option: "-" } ], nextState: '3' },
        'q': { action_: 'd=',  nextState: 'qd' },
        'qd': { action_: 'd=', nextState: 'qd' },
        'qD|dq': { action_: [ 'output', { type_: 'bond', option: "-" } ], nextState: '3' } },
      '-9': {
        '3|o': { action_: [ 'output', { type_: 'insert', option: 'hyphen' } ], nextState: '3' } },
      '- orbital overlap': {
        'o': { action_: [ 'output', { type_: 'insert', option: 'hyphen' } ], nextState: '2' },
        'd': { action_: [ 'output', { type_: 'insert', option: 'hyphen' } ], nextState: '2' } },
      '-': {
        '0|1|2': { action_: [ { type_: 'output', option: 1 }, 'beginsWithBond=true', { type_: 'bond', option: "-" } ], nextState: '3' },
        '3': { action_: { type_: 'bond', option: "-" } },
        'a': { action_: [ 'output', { type_: 'insert', option: 'hyphen' } ], nextState: '2' },
        'as': { action_: [ { type_: 'output', option: 2 }, { type_: 'bond', option: "-" } ], nextState: '3' },
        'b': { action_: 'b=' },
        'o': { action_: { type_: '- after o/d', option: false }, nextState: '2' },
        'q': { action_: { type_: '- after o/d', option: false }, nextState: '2' },
        'd|qd|dq': { action_: { type_: '- after o/d', option: true }, nextState: '2' },
        'D|qD|p': { action_: [ 'output', { type_: 'bond', option: "-" } ], nextState: '3' } },
      'amount2': {
        '1|3': { action_: 'a=', nextState: 'a' } },
      'letters': {
        '0|1|2|3|a|as|b|p|bp|o': { action_: 'o=', nextState: 'o' },
        'q|dq': { action_: ['output', 'o='], nextState: 'o' },
        'd|D|qd|qD': { action_: 'o after d', nextState: 'o' } },
      'digits': {
        'o': { action_: 'q=', nextState: 'q' },
        'd|D': { action_: 'q=', nextState: 'dq' },
        'q': { action_: [ 'output', 'o=' ], nextState: 'o' },
        'a': { action_: 'o=', nextState: 'o' } },
      'space A': {
        'b|p|bp': {} },
      'space': {
        'a': { nextState: 'as' },
        '0': { action_: 'sb=false' },
        '1|2': { action_: 'sb=true' },
        'r|rt|rd|rdt|rdq': { action_: 'output', nextState: '0' },
        '*': { action_: [ 'output', 'sb=true' ], nextState: '1'} },
      '1st-level escape': {
        '1|2': { action_: [ 'output', { type_: 'insert+p1', option: '1st-level escape' } ] },
        '*': { action_: [ 'output', { type_: 'insert+p1', option: '1st-level escape' } ], nextState: '0' } },
      '[(...)]': {
        'r|rt': { action_: 'rd=', nextState: 'rd' },
        'rd|rdt': { action_: 'rq=', nextState: 'rdq' } },
      '...': {
        'o|d|D|dq|qd|qD': { action_: [ 'output', { type_: 'bond', option: "..." } ], nextState: '3' },
        '*': { action_: [ { type_: 'output', option: 1 }, { type_: 'insert', option: 'ellipsis' } ], nextState: '1' } },
      '. |* ': {
        '*': { action_: [ 'output', { type_: 'insert', option: 'addition compound' } ], nextState: '1' } },
      'state of aggregation $': {
        '*': { action_: [ 'output', 'state of aggregation' ], nextState: '1' } },
      '{[(': {
        'a|as|o': { action_: [ 'o=', 'output', 'parenthesisLevel++' ], nextState: '2' },
        '0|1|2|3': { action_: [ 'o=', 'output', 'parenthesisLevel++' ], nextState: '2' },
        '*': { action_: [ 'output', 'o=', 'output', 'parenthesisLevel++' ], nextState: '2' } },
      ')]}': {
        '0|1|2|3|b|p|bp|o': { action_: [ 'o=', 'parenthesisLevel--' ], nextState: 'o' },
        'a|as|d|D|q|qd|qD|dq': { action_: [ 'output', 'o=', 'parenthesisLevel--' ], nextState: 'o' } },
      ', ': {
        '*': { action_: [ 'output', 'comma' ], nextState: '0' } },
      '^_': {  // ^ and _ without a sensible argument
        '*': { } },
      '^{(...)}|^($...$)': {
        '0|1|2|as': { action_: 'b=', nextState: 'b' },
        'p': { action_: 'b=', nextState: 'bp' },
        '3|o': { action_: 'd= kv', nextState: 'D' },
        'q': { action_: 'd=', nextState: 'qD' },
        'd|D|qd|qD|dq': { action_: [ 'output', 'd=' ], nextState: 'D' } },
      '^a|^\\x{}{}|^\\x{}|^\\x|\'': {
        '0|1|2|as': { action_: 'b=', nextState: 'b' },
        'p': { action_: 'b=', nextState: 'bp' },
        '3|o': { action_: 'd= kv', nextState: 'd' },
        'q': { action_: 'd=', nextState: 'qd' },
        'd|qd|D|qD': { action_: 'd=' },
        'dq': { action_: [ 'output', 'd=' ], nextState: 'd' } },
      '_{(state of aggregation)}$': {
        'd|D|q|qd|qD|dq': { action_: [ 'output', 'q=' ], nextState: 'q' } },
      '_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x': {
        '0|1|2|as': { action_: 'p=', nextState: 'p' },
        'b': { action_: 'p=', nextState: 'bp' },
        '3|o': { action_: 'q=', nextState: 'q' },
        'd|D': { action_: 'q=', nextState: 'dq' },
        'q|qd|qD|dq': { action_: [ 'output', 'q=' ], nextState: 'q' } },
      '=<>': {
        '0|1|2|3|a|as|o|q|d|D|qd|qD|dq': { action_: [ { type_: 'output', option: 2 }, 'bond' ], nextState: '3' } },
      '#': {
        '0|1|2|3|a|as|o': { action_: [ { type_: 'output', option: 2 }, { type_: 'bond', option: "#" } ], nextState: '3' } },
      '{}': {
        '*': { action_: { type_: 'output', option: 1 },  nextState: '1' } },
      '{...}': {
        '0|1|2|3|a|as|b|p|bp': { action_: 'o=', nextState: 'o' },
        'o|d|D|q|qd|qD|dq': { action_: [ 'output', 'o=' ], nextState: 'o' } },
      '$...$': {
        'a': { action_: 'a=' },  // 2$n$
        '0|1|2|3|as|b|p|bp|o': { action_: 'o=', nextState: 'o' },  // not 'amount'
        'as|o': { action_: 'o=' },
        'q|d|D|qd|qD|dq': { action_: [ 'output', 'o=' ], nextState: 'o' } },
      '\\bond{(...)}': {
        '*': { action_: [ { type_: 'output', option: 2 }, 'bond' ], nextState: "3" } },
      '\\frac{(...)}': {
        '*': { action_: [ { type_: 'output', option: 1 }, 'frac-output' ], nextState: '3' } },
      '\\overset{(...)}': {
        '*': { action_: [ { type_: 'output', option: 2 }, 'overset-output' ], nextState: '3' } },
      '\\underset{(...)}': {
        '*': { action_: [ { type_: 'output', option: 2 }, 'underset-output' ], nextState: '3' } },
      '\\underbrace{(...)}': {
        '*': { action_: [ { type_: 'output', option: 2 }, 'underbrace-output' ], nextState: '3' } },
      '\\color{(...)}{(...)}1|\\color(...){(...)}2': {
        '*': { action_: [ { type_: 'output', option: 2 }, 'color-output' ], nextState: '3' } },
      '\\color{(...)}0': {
        '*': { action_: [ { type_: 'output', option: 2 }, 'color0-output' ] } },
      '\\ce{(...)}': {
        '*': { action_: [ { type_: 'output', option: 2 }, 'ce' ], nextState: '3' } },
      '\\,': {
        '*': { action_: [ { type_: 'output', option: 1 }, 'copy' ], nextState: '1' } },
      '\\x{}{}|\\x{}|\\x': {
        '0|1|2|3|a|as|b|p|bp|o|c0': { action_: [ 'o=', 'output' ], nextState: '3' },
        '*': { action_: ['output', 'o=', 'output' ], nextState: '3' } },
      'others': {
        '*': { action_: [ { type_: 'output', option: 1 }, 'copy' ], nextState: '3' } },
      'else2': {
        'a': { action_: 'a to o', nextState: 'o', revisit: true },
        'as': { action_: [ 'output', 'sb=true' ], nextState: '1', revisit: true },
        'r|rt|rd|rdt|rdq': { action_: [ 'output' ], nextState: '0', revisit: true },
        '*': { action_: [ 'output', 'copy' ], nextState: '3' } }
    }),
    actions: {
      'o after d': function (buffer, m) {
        var ret;
        if ((buffer.d || "").match(/^[0-9]+$/)) {
          var tmp = buffer.d;
          buffer.d = undefined;
          ret = this['output'](buffer);
          buffer.b = tmp;
        } else {
          ret = this['output'](buffer);
        }
        mhchemParser.actions['o='](buffer, m);
        return ret;
      },
      'd= kv': function (buffer, m) {
        buffer.d = m;
        buffer.dType = 'kv';
      },
      'charge or bond': function (buffer, m) {
        if (buffer['beginsWithBond']) {
          /** @type {ParserOutput[]} */
          var ret = [];
          mhchemParser.concatArray(ret, this['output'](buffer));
          mhchemParser.concatArray(ret, mhchemParser.actions['bond'](buffer, m, "-"));
          return ret;
        } else {
          buffer.d = m;
        }
      },
      '- after o/d': function (buffer, m, isAfterD) {
        var c1 = mhchemParser.patterns.match_('orbital', buffer.o || "");
        var c2 = mhchemParser.patterns.match_('one lowercase greek letter $', buffer.o || "");
        var c3 = mhchemParser.patterns.match_('one lowercase latin letter $', buffer.o || "");
        var c4 = mhchemParser.patterns.match_('$one lowercase latin letter$ $', buffer.o || "");
        var hyphenFollows =  m==="-" && ( c1 && c1.remainder===""  ||  c2  ||  c3  ||  c4 );
        if (hyphenFollows && !buffer.a && !buffer.b && !buffer.p && !buffer.d && !buffer.q && !c1 && c3) {
          buffer.o = '$' + buffer.o + '$';
        }
        /** @type {ParserOutput[]} */
        var ret = [];
        if (hyphenFollows) {
          mhchemParser.concatArray(ret, this['output'](buffer));
          ret.push({ type_: 'hyphen' });
        } else {
          c1 = mhchemParser.patterns.match_('digits', buffer.d || "");
          if (isAfterD && c1 && c1.remainder==='') {
            mhchemParser.concatArray(ret, mhchemParser.actions['d='](buffer, m));
            mhchemParser.concatArray(ret, this['output'](buffer));
          } else {
            mhchemParser.concatArray(ret, this['output'](buffer));
            mhchemParser.concatArray(ret, mhchemParser.actions['bond'](buffer, m, "-"));
          }
        }
        return ret;
      },
      'a to o': function (buffer) {
        buffer.o = buffer.a;
        buffer.a = undefined;
      },
      'sb=true': function (buffer) { buffer.sb = true; },
      'sb=false': function (buffer) { buffer.sb = false; },
      'beginsWithBond=true': function (buffer) { buffer['beginsWithBond'] = true; },
      'beginsWithBond=false': function (buffer) { buffer['beginsWithBond'] = false; },
      'parenthesisLevel++': function (buffer) { buffer['parenthesisLevel']++; },
      'parenthesisLevel--': function (buffer) { buffer['parenthesisLevel']--; },
      'state of aggregation': function (buffer, m) {
        return { type_: 'state of aggregation', p1: mhchemParser.go(m, 'o') };
      },
      'comma': function (buffer, m) {
        var a = m.replace(/\s*$/, '');
        var withSpace = (a !== m);
        if (withSpace  &&  buffer['parenthesisLevel'] === 0) {
          return { type_: 'comma enumeration L', p1: a };
        } else {
          return { type_: 'comma enumeration M', p1: a };
        }
      },
      'output': function (buffer, m, entityFollows) {
        // entityFollows:
        //   undefined = if we have nothing else to output, also ignore the just read space (buffer.sb)
        //   1 = an entity follows, never omit the space if there was one just read before (can only apply to state 1)
        //   2 = 1 + the entity can have an amount, so output a\, instead of converting it to o (can only apply to states a|as)
        /** @type {ParserOutput | ParserOutput[]} */
        var ret;
        if (!buffer.r) {
          ret = [];
          if (!buffer.a && !buffer.b && !buffer.p && !buffer.o && !buffer.q && !buffer.d && !entityFollows) {
            //ret = [];
          } else {
            if (buffer.sb) {
              ret.push({ type_: 'entitySkip' });
            }
            if (!buffer.o && !buffer.q && !buffer.d && !buffer.b && !buffer.p && entityFollows!==2) {
              buffer.o = buffer.a;
              buffer.a = undefined;
            } else if (!buffer.o && !buffer.q && !buffer.d && (buffer.b || buffer.p)) {
              buffer.o = buffer.a;
              buffer.d = buffer.b;
              buffer.q = buffer.p;
              buffer.a = buffer.b = buffer.p = undefined;
            } else {
              if (buffer.o && buffer.dType==='kv' && mhchemParser.patterns.match_('d-oxidation$', buffer.d || "")) {
                buffer.dType = 'oxidation';
              } else if (buffer.o && buffer.dType==='kv' && !buffer.q) {
                buffer.dType = undefined;
              }
            }
            ret.push({
              type_: 'chemfive',
              a: mhchemParser.go(buffer.a, 'a'),
              b: mhchemParser.go(buffer.b, 'bd'),
              p: mhchemParser.go(buffer.p, 'pq'),
              o: mhchemParser.go(buffer.o, 'o'),
              q: mhchemParser.go(buffer.q, 'pq'),
              d: mhchemParser.go(buffer.d, (buffer.dType === 'oxidation' ? 'oxidation' : 'bd')),
              dType: buffer.dType
            });
          }
        } else {  // r
          /** @type {ParserOutput[]} */
          var rd;
          if (buffer.rdt === 'M') {
            rd = mhchemParser.go(buffer.rd, 'tex-math');
          } else if (buffer.rdt === 'T') {
            rd = [ { type_: 'text', p1: buffer.rd || "" } ];
          } else {
            rd = mhchemParser.go(buffer.rd);
          }
          /** @type {ParserOutput[]} */
          var rq;
          if (buffer.rqt === 'M') {
            rq = mhchemParser.go(buffer.rq, 'tex-math');
          } else if (buffer.rqt === 'T') {
            rq = [ { type_: 'text', p1: buffer.rq || ""} ];
          } else {
            rq = mhchemParser.go(buffer.rq);
          }
          ret = {
            type_: 'arrow',
            r: buffer.r,
            rd: rd,
            rq: rq
          };
        }
        for (var p in buffer) {
          if (p !== 'parenthesisLevel'  &&  p !== 'beginsWithBond') {
            delete buffer[p];
          }
        }
        return ret;
      },
      'oxidation-output': function (buffer, m) {
        var ret = [ "{" ];
        mhchemParser.concatArray(ret, mhchemParser.go(m, 'oxidation'));
        ret.push("}");
        return ret;
      },
      'frac-output': function (buffer, m) {
        return { type_: 'frac-ce', p1: mhchemParser.go(m[0]), p2: mhchemParser.go(m[1]) };
      },
      'overset-output': function (buffer, m) {
        return { type_: 'overset', p1: mhchemParser.go(m[0]), p2: mhchemParser.go(m[1]) };
      },
      'underset-output': function (buffer, m) {
        return { type_: 'underset', p1: mhchemParser.go(m[0]), p2: mhchemParser.go(m[1]) };
      },
      'underbrace-output': function (buffer, m) {
        return { type_: 'underbrace', p1: mhchemParser.go(m[0]), p2: mhchemParser.go(m[1]) };
      },
      'color-output': function (buffer, m) {
        return { type_: 'color', color1: m[0], color2: mhchemParser.go(m[1]) };
      },
      'r=': function (buffer, m) { buffer.r = m; },
      'rdt=': function (buffer, m) { buffer.rdt = m; },
      'rd=': function (buffer, m) { buffer.rd = m; },
      'rqt=': function (buffer, m) { buffer.rqt = m; },
      'rq=': function (buffer, m) { buffer.rq = m; },
      'operator': function (buffer, m, p1) { return { type_: 'operator', kind_: (p1 || m) }; }
    }
  },
  'a': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': {} },
      '1/2$': {
        '0': { action_: '1/2' } },
      'else': {
        '0': { nextState: '1', revisit: true } },
      '$(...)$': {
        '*': { action_: 'tex-math tight', nextState: '1' } },
      ',': {
        '*': { action_: { type_: 'insert', option: 'commaDecimal' } } },
      'else2': {
        '*': { action_: 'copy' } }
    }),
    actions: {}
  },
  'o': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': {} },
      '1/2$': {
        '0': { action_: '1/2' } },
      'else': {
        '0': { nextState: '1', revisit: true } },
      'letters': {
        '*': { action_: 'rm' } },
      '\\ca': {
        '*': { action_: { type_: 'insert', option: 'circa' } } },
      '\\x{}{}|\\x{}|\\x': {
        '*': { action_: 'copy' } },
      '${(...)}$|$(...)$': {
        '*': { action_: 'tex-math' } },
      '{(...)}': {
        '*': { action_: '{text}' } },
      'else2': {
        '*': { action_: 'copy' } }
    }),
    actions: {}
  },
  'text': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': { action_: 'output' } },
      '{...}': {
        '*': { action_: 'text=' } },
      '${(...)}$|$(...)$': {
        '*': { action_: 'tex-math' } },
      '\\greek': {
        '*': { action_: [ 'output', 'rm' ] } },
      '\\,|\\x{}{}|\\x{}|\\x': {
        '*': { action_: [ 'output', 'copy' ] } },
      'else': {
        '*': { action_: 'text=' } }
    }),
    actions: {
      'output': function (buffer) {
        if (buffer.text_) {
          /** @type {ParserOutput} */
          var ret = { type_: 'text', p1: buffer.text_ };
          for (var p in buffer) { delete buffer[p]; }
          return ret;
        }
      }
    }
  },
  'pq': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': {} },
      'state of aggregation $': {
        '*': { action_: 'state of aggregation' } },
      'i$': {
        '0': { nextState: '!f', revisit: true } },
      '(KV letters),': {
        '0': { action_: 'rm', nextState: '0' } },
      'formula$': {
        '0': { nextState: 'f', revisit: true } },
      '1/2$': {
        '0': { action_: '1/2' } },
      'else': {
        '0': { nextState: '!f', revisit: true } },
      '${(...)}$|$(...)$': {
        '*': { action_: 'tex-math' } },
      '{(...)}': {
        '*': { action_: 'text' } },
      'a-z': {
        'f': { action_: 'tex-math' } },
      'letters': {
        '*': { action_: 'rm' } },
      '-9.,9': {
        '*': { action_: '9,9'  } },
      ',': {
        '*': { action_: { type_: 'insert+p1', option: 'comma enumeration S' } } },
      '\\color{(...)}{(...)}1|\\color(...){(...)}2': {
        '*': { action_: 'color-output' } },
      '\\color{(...)}0': {
        '*': { action_: 'color0-output' } },
      '\\ce{(...)}': {
        '*': { action_: 'ce' } },
      '\\,|\\x{}{}|\\x{}|\\x': {
        '*': { action_: 'copy' } },
      'else2': {
        '*': { action_: 'copy' } }
    }),
    actions: {
      'state of aggregation': function (buffer, m) {
        return { type_: 'state of aggregation subscript', p1: mhchemParser.go(m, 'o') };
      },
      'color-output': function (buffer, m) {
        return { type_: 'color', color1: m[0], color2: mhchemParser.go(m[1], 'pq') };
      }
    }
  },
  'bd': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': {} },
      'x$': {
        '0': { nextState: '!f', revisit: true } },
      'formula$': {
        '0': { nextState: 'f', revisit: true } },
      'else': {
        '0': { nextState: '!f', revisit: true } },
      '-9.,9 no missing 0': {
        '*': { action_: '9,9' } },
      '.': {
        '*': { action_: { type_: 'insert', option: 'electron dot' } } },
      'a-z': {
        'f': { action_: 'tex-math' } },
      'x': {
        '*': { action_: { type_: 'insert', option: 'KV x' } } },
      'letters': {
        '*': { action_: 'rm' } },
      '\'': {
        '*': { action_: { type_: 'insert', option: 'prime' } } },
      '${(...)}$|$(...)$': {
        '*': { action_: 'tex-math' } },
      '{(...)}': {
        '*': { action_: 'text' } },
      '\\color{(...)}{(...)}1|\\color(...){(...)}2': {
        '*': { action_: 'color-output' } },
      '\\color{(...)}0': {
        '*': { action_: 'color0-output' } },
      '\\ce{(...)}': {
        '*': { action_: 'ce' } },
      '\\,|\\x{}{}|\\x{}|\\x': {
        '*': { action_: 'copy' } },
      'else2': {
        '*': { action_: 'copy' } }
    }),
    actions: {
      'color-output': function (buffer, m) {
        return { type_: 'color', color1: m[0], color2: mhchemParser.go(m[1], 'bd') };
      }
    }
  },
  'oxidation': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': {} },
      'roman numeral': {
        '*': { action_: 'roman-numeral' } },
      '${(...)}$|$(...)$': {
        '*': { action_: 'tex-math' } },
      'else': {
        '*': { action_: 'copy' } }
    }),
    actions: {
      'roman-numeral': function (buffer, m) { return { type_: 'roman numeral', p1: m || "" }; }
    }
  },
  'tex-math': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': { action_: 'output' } },
      '\\ce{(...)}': {
        '*': { action_: [ 'output', 'ce' ] } },
      '{...}|\\,|\\x{}{}|\\x{}|\\x': {
        '*': { action_: 'o=' } },
      'else': {
        '*': { action_: 'o=' } }
    }),
    actions: {
      'output': function (buffer) {
        if (buffer.o) {
          /** @type {ParserOutput} */
          var ret = { type_: 'tex-math', p1: buffer.o };
          for (var p in buffer) { delete buffer[p]; }
          return ret;
        }
      }
    }
  },
  'tex-math tight': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': { action_: 'output' } },
      '\\ce{(...)}': {
        '*': { action_: [ 'output', 'ce' ] } },
      '{...}|\\,|\\x{}{}|\\x{}|\\x': {
        '*': { action_: 'o=' } },
      '-|+': {
        '*': { action_: 'tight operator' } },
      'else': {
        '*': { action_: 'o=' } }
    }),
    actions: {
      'tight operator': function (buffer, m) { buffer.o = (buffer.o || "") + "{"+m+"}"; },
      'output': function (buffer) {
        if (buffer.o) {
          /** @type {ParserOutput} */
          var ret = { type_: 'tex-math', p1: buffer.o };
          for (var p in buffer) { delete buffer[p]; }
          return ret;
        }
      }
    }
  },
  '9,9': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': {} },
      ',': {
        '*': { action_: 'comma' } },
      'else': {
        '*': { action_: 'copy' } }
    }),
    actions: {
      'comma': function () { return { type_: 'commaDecimal' }; }
    }
  },
  //#endregion
  //
  // \pu state machines
  //
  //#region pu
  'pu': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': { action_: 'output' } },
      'space$': {
        '*': { action_: [ 'output', 'space' ] } },
      '{[(|)]}': {
        '0|a': { action_: 'copy' } },
      '(-)(9)^(-9)': {
        '0': { action_: 'number^', nextState: 'a' } },
      '(-)(9.,9)(e)(99)': {
        '0': { action_: 'enumber', nextState: 'a' } },
      'space': {
        '0|a': {} },
      'pm-operator': {
        '0|a': { action_: { type_: 'operator', option: '\\pm' }, nextState: '0' } },
      'operator': {
        '0|a': { action_: 'copy', nextState: '0' } },
      '//': {
        'd': { action_: 'o=', nextState: '/' } },
      '/': {
        'd': { action_: 'o=', nextState: '/' } },
      '{...}|else': {
        '0|d': { action_: 'd=', nextState: 'd' },
        'a': { action_: [ 'space', 'd=' ], nextState: 'd' },
        '/|q': { action_: 'q=', nextState: 'q' } }
    }),
    actions: {
      'enumber': function (buffer, m) {
        /** @type {ParserOutput[]} */
        var ret = [];
        if (m[0] === "+-"  ||  m[0] === "+/-") {
          ret.push("\\pm ");
        } else if (m[0]) {
          ret.push(m[0]);
        }
        if (m[1]) {
          mhchemParser.concatArray(ret, mhchemParser.go(m[1], 'pu-9,9'));
          if (m[2]) {
            if (m[2].match(/[,.]/)) {
              mhchemParser.concatArray(ret, mhchemParser.go(m[2], 'pu-9,9'));
            } else {
              ret.push(m[2]);
            }
          }
          m[3] = m[4] || m[3];
          if (m[3]) {
            m[3] = m[3].trim();
            if (m[3] === "e"  ||  m[3].substr(0, 1) === "*") {
              ret.push({ type_: 'cdot' });
            } else {
              ret.push({ type_: 'times' });
            }
          }
        }
        if (m[3]) {
          ret.push("10^{"+m[5]+"}");
        }
        return ret;
      },
      'number^': function (buffer, m) {
        /** @type {ParserOutput[]} */
        var ret = [];
        if (m[0] === "+-"  ||  m[0] === "+/-") {
          ret.push("\\pm ");
        } else if (m[0]) {
          ret.push(m[0]);
        }
        mhchemParser.concatArray(ret, mhchemParser.go(m[1], 'pu-9,9'));
        ret.push("^{"+m[2]+"}");
        return ret;
      },
      'operator': function (buffer, m, p1) { return { type_: 'operator', kind_: (p1 || m) }; },
      'space': function () { return { type_: 'pu-space-1' }; },
      'output': function (buffer) {
        /** @type {ParserOutput | ParserOutput[]} */
        var ret;
        var md = mhchemParser.patterns.match_('{(...)}', buffer.d || "");
        if (md  &&  md.remainder === '') { buffer.d = md.match_; }
        var mq = mhchemParser.patterns.match_('{(...)}', buffer.q || "");
        if (mq  &&  mq.remainder === '') { buffer.q = mq.match_; }
        if (buffer.d) {
          buffer.d = buffer.d.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C");
          buffer.d = buffer.d.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
        }
        if (buffer.q) {  // fraction
          buffer.q = buffer.q.replace(/\u00B0C|\^oC|\^{o}C/g, "{}^{\\circ}C");
          buffer.q = buffer.q.replace(/\u00B0F|\^oF|\^{o}F/g, "{}^{\\circ}F");
          var b5 = {
            d: mhchemParser.go(buffer.d, 'pu'),
            q: mhchemParser.go(buffer.q, 'pu')
          };
          if (buffer.o === '//') {
            ret = { type_: 'pu-frac', p1: b5.d, p2: b5.q };
          } else {
            ret = b5.d;
            if (b5.d.length > 1  ||  b5.q.length > 1) {
              ret.push({ type_: ' / ' });
            } else {
              ret.push({ type_: '/' });
            }
            mhchemParser.concatArray(ret, b5.q);
          }
        } else {  // no fraction
          ret = mhchemParser.go(buffer.d, 'pu-2');
        }
        for (var p in buffer) { delete buffer[p]; }
        return ret;
      }
    }
  },
  'pu-2': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '*': { action_: 'output' } },
      '*': {
        '*': { action_: [ 'output', 'cdot' ], nextState: '0' } },
      '\\x': {
        '*': { action_: 'rm=' } },
      'space': {
        '*': { action_: [ 'output', 'space' ], nextState: '0' } },
      '^{(...)}|^(-1)': {
        '1': { action_: '^(-1)' } },
      '-9.,9': {
        '0': { action_: 'rm=', nextState: '0' },
        '1': { action_: '^(-1)', nextState: '0' } },
      '{...}|else': {
        '*': { action_: 'rm=', nextState: '1' } }
    }),
    actions: {
      'cdot': function () { return { type_: 'tight cdot' }; },
      '^(-1)': function (buffer, m) { buffer.rm += "^{"+m+"}"; },
      'space': function () { return { type_: 'pu-space-2' }; },
      'output': function (buffer) {
        /** @type {ParserOutput | ParserOutput[]} */
        var ret = [];
        if (buffer.rm) {
          var mrm = mhchemParser.patterns.match_('{(...)}', buffer.rm || "");
          if (mrm  &&  mrm.remainder === '') {
            ret = mhchemParser.go(mrm.match_, 'pu');
          } else {
            ret = { type_: 'rm', p1: buffer.rm };
          }
        }
        for (var p in buffer) { delete buffer[p]; }
        return ret;
      }
    }
  },
  'pu-9,9': {
    transitions: mhchemParser.createTransitions({
      'empty': {
        '0': { action_: 'output-0' },
        'o': { action_: 'output-o' } },
      ',': {
        '0': { action_: [ 'output-0', 'comma' ], nextState: 'o' } },
      '.': {
        '0': { action_: [ 'output-0', 'copy' ], nextState: 'o' } },
      'else': {
        '*': { action_: 'text=' } }
    }),
    actions: {
      'comma': function () { return { type_: 'commaDecimal' }; },
      'output-0': function (buffer) {
        /** @type {ParserOutput[]} */
        var ret = [];
        buffer.text_ = buffer.text_ || "";
        if (buffer.text_.length > 4) {
          var a = buffer.text_.length % 3;
          if (a === 0) { a = 3; }
          for (var i=buffer.text_.length-3; i>0; i-=3) {
            ret.push(buffer.text_.substr(i, 3));
            ret.push({ type_: '1000 separator' });
          }
          ret.push(buffer.text_.substr(0, a));
          ret.reverse();
        } else {
          ret.push(buffer.text_);
        }
        for (var p in buffer) { delete buffer[p]; }
        return ret;
      },
      'output-o': function (buffer) {
        /** @type {ParserOutput[]} */
        var ret = [];
        buffer.text_ = buffer.text_ || "";
        if (buffer.text_.length > 4) {
          var a = buffer.text_.length - 3;
          for (var i=0; i<a; i+=3) {
            ret.push(buffer.text_.substr(i, 3));
            ret.push({ type_: '1000 separator' });
          }
          ret.push(buffer.text_.substr(i));
        } else {
          ret.push(buffer.text_);
        }
        for (var p in buffer) { delete buffer[p]; }
        return ret;
      }
    }
  }
  //#endregion
};

//
// texify: Take MhchemParser output and convert it to TeX
//
/** @type {Texify} */
var texify = {
  go: function (input, isInner) {  // (recursive, max 4 levels)
    if (!input) { return ""; }
    var res = "";
    var cee = false;
    for (var i=0; i < input.length; i++) {
      var inputi = input[i];
      if (typeof inputi === "string") {
        res += inputi;
      } else {
        res += texify._go2(inputi);
        if (inputi.type_ === '1st-level escape') { cee = true; }
      }
    }
    if (!isInner && !cee && res) {
      res = "{" + res + "}";
    }
    return res;
  },
  _goInner: function (input) {
    if (!input) { return input; }
    return texify.go(input, true);
  },
  _go2: function (buf) {
    /** @type {undefined | string} */
    var res;
    switch (buf.type_) {
    case 'chemfive':
      res = "";
      var b5 = {
        a: texify._goInner(buf.a),
        b: texify._goInner(buf.b),
        p: texify._goInner(buf.p),
        o: texify._goInner(buf.o),
        q: texify._goInner(buf.q),
        d: texify._goInner(buf.d)
      };
      //
      // a
      //
      if (b5.a) {
        if (b5.a.match(/^[+\-]/)) { b5.a = "{"+b5.a+"}"; }
        res += b5.a + "\\,";
      }
      //
      // b and p
      //
      if (b5.b || b5.p) {
        res += "{\\vphantom{X}}";
        res += "^{\\hphantom{"+(b5.b||"")+"}}_{\\hphantom{"+(b5.p||"")+"}}";
        res += "{\\vphantom{X}}";
        res += "^{\\smash[t]{\\vphantom{2}}\\llap{"+(b5.b||"")+"}}";
        res += "_{\\vphantom{2}\\llap{\\smash[t]{"+(b5.p||"")+"}}}";
      }
      //
      // o
      //
      if (b5.o) {
        if (b5.o.match(/^[+\-]/)) { b5.o = "{"+b5.o+"}"; }
        res += b5.o;
      }
      //
      // q and d
      //
      if (buf.dType === 'kv') {
        if (b5.d || b5.q) {
          res += "{\\vphantom{X}}";
        }
        if (b5.d) {
          res += "^{"+b5.d+"}";
        }
        if (b5.q) {
          res += "_{\\smash[t]{"+b5.q+"}}";
        }
      } else if (buf.dType === 'oxidation') {
        if (b5.d) {
          res += "{\\vphantom{X}}";
          res += "^{"+b5.d+"}";
        }
        if (b5.q) {
          res += "{\\vphantom{X}}";
          res += "_{\\smash[t]{"+b5.q+"}}";
        }
      } else {
        if (b5.q) {
          res += "{\\vphantom{X}}";
          res += "_{\\smash[t]{"+b5.q+"}}";
        }
        if (b5.d) {
          res += "{\\vphantom{X}}";
          res += "^{"+b5.d+"}";
        }
      }
      break;
    case 'rm':
      res = "\\mathrm{"+buf.p1+"}";
      break;
    case 'text':
      if (buf.p1.match(/[\^_]/)) {
        buf.p1 = buf.p1.replace(" ", "~").replace("-", "\\text{-}");
        res = "\\mathrm{"+buf.p1+"}";
      } else {
        res = "\\text{"+buf.p1+"}";
      }
      break;
    case 'roman numeral':
      res = "\\mathrm{"+buf.p1+"}";
      break;
    case 'state of aggregation':
      res = "\\mskip2mu "+texify._goInner(buf.p1);
      break;
    case 'state of aggregation subscript':
      res = "\\mskip1mu "+texify._goInner(buf.p1);
      break;
    case 'bond':
      res = texify._getBond(buf.kind_);
      if (!res) {
        throw ["MhchemErrorBond", "mhchem Error. Unknown bond type (" + buf.kind_ + ")"];
      }
      break;
    case 'frac':
      var c = "\\frac{" + buf.p1 + "}{" + buf.p2 + "}";
      res = "\\mathchoice{\\textstyle"+c+"}{"+c+"}{"+c+"}{"+c+"}";
      break;
    case 'pu-frac':
      var d = "\\frac{" + texify._goInner(buf.p1) + "}{" + texify._goInner(buf.p2) + "}";
      res = "\\mathchoice{\\textstyle"+d+"}{"+d+"}{"+d+"}{"+d+"}";
      break;
    case 'tex-math':
      res = buf.p1 + " ";
      break;
    case 'frac-ce':
      res = "\\frac{" + texify._goInner(buf.p1) + "}{" + texify._goInner(buf.p2) + "}";
      break;
    case 'overset':
      res = "\\overset{" + texify._goInner(buf.p1) + "}{" + texify._goInner(buf.p2) + "}";
      break;
    case 'underset':
      res = "\\underset{" + texify._goInner(buf.p1) + "}{" + texify._goInner(buf.p2) + "}";
      break;
    case 'underbrace':
      res =  "\\underbrace{" + texify._goInner(buf.p1) + "}_{" + texify._goInner(buf.p2) + "}";
      break;
    case 'color':
      res = "{\\color{" + buf.color1 + "}{" + texify._goInner(buf.color2) + "}}";
      break;
    case 'color0':
      res = "\\color{" + buf.color + "}";
      break;
    case 'arrow':
      var b6 = {
        rd: texify._goInner(buf.rd),
        rq: texify._goInner(buf.rq)
      };
      var arrow = texify._getArrow(buf.r);
      if (b6.rd || b6.rq) {
        if (buf.r === "<=>"  ||  buf.r === "<=>>"  ||  buf.r === "<<=>"  ||  buf.r === "<-->") {
          // arrows that cannot stretch correctly yet, https://github.com/mathjax/MathJax/issues/1491
          arrow = "\\long"+arrow;
          if (b6.rd) { arrow = "\\overset{"+b6.rd+"}{"+arrow+"}"; }
          if (b6.rq) { arrow = "\\underset{\\lower7mu{"+b6.rq+"}}{"+arrow+"}"; }
          arrow = " {}\\mathrel{"+arrow+"}{} ";
        } else {
          if (b6.rq) { arrow += "[{"+b6.rq+"}]"; }
          arrow += "{"+b6.rd+"}";
          arrow = " {}\\mathrel{\\x"+arrow+"}{} ";
        }
      } else {
        arrow = " {}\\mathrel{\\long"+arrow+"}{} ";
      }
      res = arrow;
      break;
    case 'operator':
      res = texify._getOperator(buf.kind_);
      break;
    case '1st-level escape':
      res = buf.p1+" ";  // &, \\\\, \\hlin
      break;
    case 'space':
      res = " ";
      break;
    case 'entitySkip':
      res = "~";
      break;
    case 'pu-space-1':
      res = "~";
      break;
    case 'pu-space-2':
      res = "\\mkern3mu ";
      break;
    case '1000 separator':
      res = "\\mkern2mu ";
      break;
    case 'commaDecimal':
      res = "{,}";
      break;
    case 'comma enumeration L':
      res = "{"+buf.p1+"}\\mkern6mu ";
      break;
    case 'comma enumeration M':
      res = "{"+buf.p1+"}\\mkern3mu ";
      break;
    case 'comma enumeration S':
      res = "{"+buf.p1+"}\\mkern1mu ";
      break;
    case 'hyphen':
      res = "\\text{-}";
      break;
    case 'addition compound':
      res = "\\,{\\cdot}\\,";
      break;
    case 'electron dot':
      res = "\\mkern1mu \\bullet\\mkern1mu ";
      break;
    case 'KV x':
      res = "{\\times}";
      break;
    case 'prime':
      res = "\\prime ";
      break;
    case 'cdot':
      res = "\\cdot ";
      break;
    case 'tight cdot':
      res = "\\mkern1mu{\\cdot}\\mkern1mu ";
      break;
    case 'times':
      res = "\\times ";
      break;
    case 'circa':
      res = "{\\sim}";
      break;
    case '^':
      res = "uparrow";
      break;
    case 'v':
      res = "downarrow";
      break;
    case 'ellipsis':
      res = "\\ldots ";
      break;
    case '/':
      res = "/";
      break;
    case ' / ':
      res = "\\,/\\,";
      break;
    default:
      assertNever(buf);
      throw ["MhchemBugT", "mhchem bug T. Please report."];  // Missing texify rule or unknown MhchemParser output
    }
    assertString(res);
    return res;
  },
  _getArrow: function (a) {
    switch (a) {
    case "->": return "rightarrow";
    case "\u2192": return "rightarrow";
    case "\u27F6": return "rightarrow";
    case "<-": return "leftarrow";
    case "<->": return "leftrightarrow";
    case "<-->": return "leftrightarrows";
    case "<=>": return "rightleftharpoons";
    case "\u21CC": return "rightleftharpoons";
    case "<=>>": return "Rightleftharpoons";
    case "<<=>": return "Leftrightharpoons";
    default:
      assertNever(a);
      throw ["MhchemBugT", "mhchem bug T. Please report."];
    }
  },
  _getBond: function (a) {
    switch (a) {
    case "-": return "{-}";
    case "1": return "{-}";
    case "=": return "{=}";
    case "2": return "{=}";
    case "#": return "{\\equiv}";
    case "3": return "{\\equiv}";
    case "~": return "{\\tripledash}";
    case "~-": return "{\\rlap{\\lower.1em{-}}\\raise.1em{\\tripledash}}";
    case "~=": return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";
    case "~--": return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{\\tripledash}}-}";
    case "-~-": return "{\\rlap{\\lower.2em{-}}\\rlap{\\raise.2em{-}}\\tripledash}";
    case "...": return "{{\\cdot}{\\cdot}{\\cdot}}";
    case "....": return "{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";
    case "->": return "{\\rightarrow}";
    case "<-": return "{\\leftarrow}";
    case "<": return "{<}";
    case ">": return "{>}";
    default:
      assertNever(a);
      throw ["MhchemBugT", "mhchem bug T. Please report."];
    }
  },
  _getOperator: function (a) {
    switch (a) {
    case "+": return " {}+{} ";
    case "-": return " {}-{} ";
    case "=": return " {}={} ";
    case "<": return " {}<{} ";
    case ">": return " {}>{} ";
    case "<<": return " {}\\ll{} ";
    case ">>": return " {}\\gg{} ";
    case "\\pm": return " {}\\pm{} ";
    case "\\approx": return " {}\\approx{} ";
    case "$\\approx$": return " {}\\approx{} ";
    case "v": return " \\downarrow{} ";
    case "(v)": return " \\downarrow{} ";
    case "^": return " \\uparrow{} ";
    case "(^)": return " \\uparrow{} ";
    default:
      assertNever(a);
      throw ["MhchemBugT", "mhchem bug T. Please report."];
    }
  }
};

//
// Helpers for code anaylsis
// Will show type error at calling position
//
/** @param {number} a */
function assertNever(a) {}
/** @param {string} a */
function assertString(a) {}

exports.mhchemParser = mhchemParser;
exports.texify = texify;
exports.assertNever = assertNever;
exports.assertString = assertString;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NoErrorsConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
function noErrors(factory, message, _id, expr) {
    var mtext = factory.create('token', 'mtext', {}, expr.replace(/\n/g, ' '));
    var error = factory.create('node', 'merror', [mtext], { 'data-mjx-error': message, title: message });
    return error;
}
exports.NoErrorsConfiguration = Configuration_js_1.Configuration.create('noerrors', { nodes: { 'error': noErrors } });
//# sourceMappingURL=NoErrorsConfiguration.js.map

/***/ }),
/* 62 */
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
exports.NoUndefinedConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
function noUndefined(parser, name) {
    var e_1, _a;
    var textNode = parser.create('text', '\\' + name);
    var options = parser.options.noundefined || {};
    var def = {};
    try {
        for (var _b = __values(['color', 'background', 'size']), _c = _b.next(); !_c.done; _c = _b.next()) {
            var id = _c.value;
            if (options[id]) {
                def['math' + id] = options[id];
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
    parser.Push(parser.create('node', 'mtext', [], def, textNode));
}
exports.NoUndefinedConfiguration = Configuration_js_1.Configuration.create('noundefined', {
    fallback: { macro: noUndefined },
    options: {
        noundefined: {
            color: 'red',
            background: '',
            size: ''
        }
    },
    priority: 3
});
//# sourceMappingURL=NoUndefinedConfiguration.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicsConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(0);
var PhysicsItems_js_1 = __webpack_require__(64);
__webpack_require__(65);
exports.PhysicsConfiguration = Configuration_js_1.Configuration.create('physics', {
    handler: {
        macro: [
            'Physics-automatic-bracing-macros',
            'Physics-vector-macros',
            'Physics-vector-chars',
            'Physics-derivative-macros',
            'Physics-expressions-macros',
            'Physics-quick-quad-macros',
            'Physics-bra-ket-macros',
            'Physics-matrix-macros'
        ],
        character: ['Physics-characters'],
        environment: ['Physics-aux-envs']
    },
    items: (_a = {},
        _a[PhysicsItems_js_1.AutoOpen.prototype.kind] = PhysicsItems_js_1.AutoOpen,
        _a)
});
//# sourceMappingURL=PhysicsConfiguration.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoOpen = void 0;
var StackItem_js_1 = __webpack_require__(13);
var ParseUtil_js_1 = __webpack_require__(3);
var TexParser_js_1 = __webpack_require__(5);
var AutoOpen = (function (_super) {
    __extends(AutoOpen, _super);
    function AutoOpen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AutoOpen.prototype, "kind", {
        get: function () {
            return 'auto open';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AutoOpen.prototype, "isOpen", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    AutoOpen.prototype.toMml = function () {
        var parser = this.factory.configuration.parser;
        var right = this.getProperty('right');
        if (this.getProperty('smash')) {
            var mml_1 = _super.prototype.toMml.call(this);
            var smash = parser.create('node', 'mpadded', [mml_1], { height: 0, depth: 0 });
            this.Clear();
            this.Push(parser.create('node', 'TeXAtom', [smash]));
        }
        if (right) {
            this.Push(new TexParser_js_1.default(right, parser.stack.env, parser.configuration).mml());
        }
        var mml = _super.prototype.toMml.call(this);
        return ParseUtil_js_1.default.fenced(this.factory.configuration, this.getProperty('open'), mml, this.getProperty('close'), this.getProperty('big'));
    };
    AutoOpen.prototype.checkItem = function (item) {
        var close = item.getProperty('autoclose');
        if (close && close === this.getProperty('close')) {
            if (this.getProperty('ignore')) {
                this.Clear();
                return [[], true];
            }
            return [[this.toMml()], true];
        }
        return _super.prototype.checkItem.call(this, item);
    };
    return AutoOpen;
}(StackItem_js_1.BaseItem));
exports.AutoOpen = AutoOpen;
//# sourceMappingURL=PhysicsItems.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SymbolMap_js_1 = __webpack_require__(1);
var PhysicsMethods_js_1 = __webpack_require__(66);
var TexConstants_js_1 = __webpack_require__(6);
var ParseMethods_js_1 = __webpack_require__(9);
var MmlNode_js_1 = __webpack_require__(7);
new SymbolMap_js_1.CommandMap('Physics-automatic-bracing-macros', {
    'quantity': 'Quantity',
    'qty': 'Quantity',
    'pqty': ['Quantity', '(', ')', true],
    'bqty': ['Quantity', '[', ']', true],
    'vqty': ['Quantity', '|', '|', true],
    'Bqty': ['Quantity', '{', '}', true],
    'absolutevalue': ['Quantity', '|', '|', true],
    'abs': ['Quantity', '|', '|', true],
    'norm': ['Quantity', '\\|', '\\|', true],
    'evaluated': 'Eval',
    'eval': 'Eval',
    'order': ['Quantity', '(', ')', true, 'O',
        TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
    'commutator': 'Commutator',
    'comm': 'Commutator',
    'anticommutator': ['Commutator', '\\{', '\\}'],
    'acomm': ['Commutator', '\\{', '\\}'],
    'poissonbracket': ['Commutator', '\\{', '\\}'],
    'pb': ['Commutator', '\\{', '\\}']
}, PhysicsMethods_js_1.default);
new SymbolMap_js_1.CharacterMap('Physics-vector-chars', ParseMethods_js_1.default.mathchar0mi, {
    dotproduct: ['\u22C5', { mathvariant: TexConstants_js_1.TexConstant.Variant.BOLD }],
    vdot: ['\u22C5', { mathvariant: TexConstants_js_1.TexConstant.Variant.BOLD }],
    crossproduct: '\u00D7',
    cross: '\u00D7',
    cp: '\u00D7',
    gradientnabla: ['\u2207', { mathvariant: TexConstants_js_1.TexConstant.Variant.BOLD }],
    real: ['\u211C', { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }],
    imaginary: ['\u2111', { mathvariant: TexConstants_js_1.TexConstant.Variant.NORMAL }]
});
new SymbolMap_js_1.CommandMap('Physics-vector-macros', {
    'vectorbold': 'VectorBold',
    'vb': 'VectorBold',
    'vectorarrow': ['StarMacro', 1, '\\vec{\\vb', '{#1}}'],
    'va': ['StarMacro', 1, '\\vec{\\vb', '{#1}}'],
    'vectorunit': ['StarMacro', 1, '\\hat{\\vb', '{#1}}'],
    'vu': ['StarMacro', 1, '\\hat{\\vb', '{#1}}'],
    'gradient': ['OperatorApplication', '\\gradientnabla', '(', '['],
    'grad': ['OperatorApplication', '\\gradientnabla', '(', '['],
    'divergence': ['VectorOperator', '\\gradientnabla\\vdot', '(', '['],
    'div': ['VectorOperator', '\\gradientnabla\\vdot', '(', '['],
    'curl': ['VectorOperator',
        '\\gradientnabla\\crossproduct', '(', '['],
    'laplacian': ['OperatorApplication', '\\nabla^2', '(', '['],
}, PhysicsMethods_js_1.default);
new SymbolMap_js_1.CommandMap('Physics-expressions-macros', {
    'sin': 'Expression',
    'sinh': 'Expression',
    'arcsin': 'Expression',
    'asin': 'Expression',
    'cos': 'Expression',
    'cosh': 'Expression',
    'arccos': 'Expression',
    'acos': 'Expression',
    'tan': 'Expression',
    'tanh': 'Expression',
    'arctan': 'Expression',
    'atan': 'Expression',
    'csc': 'Expression',
    'csch': 'Expression',
    'arccsc': 'Expression',
    'acsc': 'Expression',
    'sec': 'Expression',
    'sech': 'Expression',
    'arcsec': 'Expression',
    'asec': 'Expression',
    'cot': 'Expression',
    'coth': 'Expression',
    'arccot': 'Expression',
    'acot': 'Expression',
    'exp': ['Expression', false],
    'log': 'Expression',
    'ln': 'Expression',
    'det': ['Expression', false],
    'Pr': ['Expression', false],
    'tr': ['Expression', false],
    'trace': ['Expression', false, 'tr'],
    'Tr': ['Expression', false],
    'Trace': ['Expression', false, 'Tr'],
    'rank': 'NamedFn',
    'erf': ['Expression', false],
    'Res': ['OperatorApplication', '{\\rm Res}', '(', '[', '{'],
    'principalvalue': ['OperatorApplication', '{\\cal P}'],
    'pv': ['OperatorApplication', '{\\cal P}'],
    'PV': ['OperatorApplication', '{\\rm P.V.}'],
    'Re': ['OperatorApplication', '{\\rm Re}', '{'],
    'Im': ['OperatorApplication', '{\\rm Im}', '{'],
    'sine': ['NamedFn', 'sin'],
    'hypsine': ['NamedFn', 'sinh'],
    'arcsine': ['NamedFn', 'arcsin'],
    'asine': ['NamedFn', 'asin'],
    'cosine': ['NamedFn', 'cos'],
    'hypcosine': ['NamedFn', 'cosh'],
    'arccosine': ['NamedFn', 'arccos'],
    'acosine': ['NamedFn', 'acos'],
    'tangent': ['NamedFn', 'tan'],
    'hyptangent': ['NamedFn', 'tanh'],
    'arctangent': ['NamedFn', 'arctan'],
    'atangent': ['NamedFn', 'atan'],
    'cosecant': ['NamedFn', 'csc'],
    'hypcosecant': ['NamedFn', 'csch'],
    'arccosecant': ['NamedFn', 'arccsc'],
    'acosecant': ['NamedFn', 'acsc'],
    'secant': ['NamedFn', 'sec'],
    'hypsecant': ['NamedFn', 'sech'],
    'arcsecant': ['NamedFn', 'arcsec'],
    'asecant': ['NamedFn', 'asec'],
    'cotangent': ['NamedFn', 'cot'],
    'hypcotangent': ['NamedFn', 'coth'],
    'arccotangent': ['NamedFn', 'arccot'],
    'acotangent': ['NamedFn', 'acot'],
    'exponential': ['NamedFn', 'exp'],
    'logarithm': ['NamedFn', 'log'],
    'naturallogarithm': ['NamedFn', 'ln'],
    'determinant': ['NamedFn', 'det'],
    'Probability': ['NamedFn', 'Pr'],
}, PhysicsMethods_js_1.default);
new SymbolMap_js_1.CommandMap('Physics-quick-quad-macros', {
    'qqtext': 'Qqtext',
    'qq': 'Qqtext',
    'qcomma': ['Macro', '\\qqtext*{,}'],
    'qc': ['Macro', '\\qqtext*{,}'],
    'qcc': ['Qqtext', 'c.c.'],
    'qif': ['Qqtext', 'if'],
    'qthen': ['Qqtext', 'then'],
    'qelse': ['Qqtext', 'else'],
    'qotherwise': ['Qqtext', 'otherwise'],
    'qunless': ['Qqtext', 'unless'],
    'qgiven': ['Qqtext', 'given'],
    'qusing': ['Qqtext', 'using'],
    'qassume': ['Qqtext', 'assume'],
    'qsince,': ['Qqtext', 'since,'],
    'qlet': ['Qqtext', 'let'],
    'qfor': ['Qqtext', 'for'],
    'qall': ['Qqtext', 'all'],
    'qeven': ['Qqtext', 'even'],
    'qodd': ['Qqtext', 'odd'],
    'qinteger': ['Qqtext', 'integer'],
    'qand': ['Qqtext', 'and'],
    'qor': ['Qqtext', 'or'],
    'qas': ['Qqtext', 'as'],
    'qin': ['Qqtext', 'in'],
}, PhysicsMethods_js_1.default);
new SymbolMap_js_1.CommandMap('Physics-derivative-macros', {
    'flatfrac': ['Macro', '\\left.#1\\middle/#2\\right.', 2],
    'differential': ['Differential', '{\\rm d}'],
    'dd': ['Differential', '{\\rm d}'],
    'variation': ['Differential', '\\delta'],
    'var': ['Differential', '\\delta'],
    'derivative': ['Derivative', 2, '{\\rm d}'],
    'dv': ['Derivative', 2, '{\\rm d}'],
    'partialderivative': ['Derivative', 3, '\\partial'],
    'pderivative': ['Derivative', 3, '\\partial'],
    'pdv': ['Derivative', 3, '\\partial'],
    'functionalderivative': ['Derivative', 2, '\\delta'],
    'fderivative': ['Derivative', 2, '\\delta'],
    'fdv': ['Derivative', 2, '\\delta'],
}, PhysicsMethods_js_1.default);
new SymbolMap_js_1.CommandMap('Physics-bra-ket-macros', {
    'bra': 'Bra',
    'ket': 'Ket',
    'innerproduct': 'BraKet',
    'braket': 'BraKet',
    'outerproduct': 'KetBra',
    'dyad': 'KetBra',
    'ketbra': 'KetBra',
    'op': 'KetBra',
    'expectationvalue': 'Expectation',
    'expval': 'Expectation',
    'ev': 'Expectation',
    'matrixelement': 'MatrixElement',
    'matrixel': 'MatrixElement',
    'mel': 'MatrixElement',
}, PhysicsMethods_js_1.default);
new SymbolMap_js_1.CommandMap('Physics-matrix-macros', {
    'matrixquantity': 'MatrixQuantity',
    'mqty': 'MatrixQuantity',
    'pmqty': ['Macro', '\\mqty(#1)', 1],
    'Pmqty': ['Macro', '\\mqty*(#1)', 1],
    'bmqty': ['Macro', '\\mqty[#1]', 1],
    'vmqty': ['Macro', '\\mqty|#1|', 1],
    'smallmatrixquantity': ['MatrixQuantity', true],
    'smqty': ['MatrixQuantity', true],
    'spmqty': ['Macro', '\\smqty(#1)', 1],
    'sPmqty': ['Macro', '\\smqty*(#1)', 1],
    'sbmqty': ['Macro', '\\smqty[#1]', 1],
    'svmqty': ['Macro', '\\smqty|#1|', 1],
    'matrixdeterminant': ['Macro', '\\vmqty{#1}', 1],
    'mdet': ['Macro', '\\vmqty{#1}', 1],
    'smdet': ['Macro', '\\svmqty{#1}', 1],
    'identitymatrix': 'IdentityMatrix',
    'imat': 'IdentityMatrix',
    'xmatrix': 'XMatrix',
    'xmat': 'XMatrix',
    'zeromatrix': ['Macro', '\\xmat{0}{#1}{#2}', 2],
    'zmat': ['Macro', '\\xmat{0}{#1}{#2}', 2],
    'paulimatrix': 'PauliMatrix',
    'pmat': 'PauliMatrix',
    'diagonalmatrix': 'DiagonalMatrix',
    'dmat': 'DiagonalMatrix',
    'antidiagonalmatrix': ['DiagonalMatrix', true],
    'admat': ['DiagonalMatrix', true]
}, PhysicsMethods_js_1.default);
new SymbolMap_js_1.EnvironmentMap('Physics-aux-envs', ParseMethods_js_1.default.environment, {
    smallmatrix: ['Array', null, null, null, 'c', '0.333em', '.2em', 'S', 1]
}, PhysicsMethods_js_1.default);
new SymbolMap_js_1.MacroMap('Physics-characters', {
    '|': ['AutoClose', MmlNode_js_1.TEXCLASS.ORD],
    ')': 'AutoClose',
    ']': 'AutoClose'
}, PhysicsMethods_js_1.default);
//# sourceMappingURL=PhysicsMappings.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseMethods_js_1 = __webpack_require__(8);
var TexParser_js_1 = __webpack_require__(5);
var TexError_js_1 = __webpack_require__(2);
var MmlNode_js_1 = __webpack_require__(7);
var ParseUtil_js_1 = __webpack_require__(3);
var NodeUtil_js_1 = __webpack_require__(4);
var NodeFactory_js_1 = __webpack_require__(23);
var PhysicsMethods = {};
var pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '|': '|',
};
var biggs = /^(b|B)i(g{1,2})$/;
PhysicsMethods.Quantity = function (parser, name, open, close, arg, named, variant) {
    if (open === void 0) { open = '('; }
    if (close === void 0) { close = ')'; }
    if (arg === void 0) { arg = false; }
    if (named === void 0) { named = ''; }
    if (variant === void 0) { variant = ''; }
    var star = arg ? parser.GetStar() : false;
    var next = parser.GetNext();
    var position = parser.i;
    var big = null;
    if (next === '\\') {
        parser.i++;
        big = parser.GetCS();
        if (!big.match(biggs)) {
            var empty = parser.create('node', 'mrow');
            parser.Push(ParseUtil_js_1.default.fenced(parser.configuration, open, empty, close));
            parser.i = position;
            return;
        }
        next = parser.GetNext();
    }
    var right = pairs[next];
    if (arg && next !== '{') {
        throw new TexError_js_1.default('MissingArgFor', 'Missing argument for %1', parser.currentCS);
    }
    if (!right) {
        var empty = parser.create('node', 'mrow');
        parser.Push(ParseUtil_js_1.default.fenced(parser.configuration, open, empty, close));
        parser.i = position;
        return;
    }
    if (named) {
        var mml = parser.create('token', 'mi', { texClass: MmlNode_js_1.TEXCLASS.OP }, named);
        if (variant) {
            NodeUtil_js_1.default.setAttribute(mml, 'mathvariant', variant);
        }
        parser.Push(parser.itemFactory.create('fn', mml));
    }
    if (next === '{') {
        var argument = parser.GetArgument(name);
        next = arg ? open : '\\{';
        right = arg ? close : '\\}';
        argument = star ? next + ' ' + argument + ' ' + right :
            (big ?
                '\\' + big + 'l' + next + ' ' + argument + ' ' + '\\' + big + 'r' + right :
                '\\left' + next + ' ' + argument + ' ' + '\\right' + right);
        parser.Push(new TexParser_js_1.default(argument, parser.stack.env, parser.configuration).mml());
        return;
    }
    if (arg) {
        next = open;
        right = close;
    }
    parser.i++;
    parser.Push(parser.itemFactory.create('auto open')
        .setProperties({ open: next, close: right, big: big }));
};
PhysicsMethods.Eval = function (parser, name) {
    var star = parser.GetStar();
    var next = parser.GetNext();
    if (next === '{') {
        var arg = parser.GetArgument(name);
        var replace = '\\left. ' +
            (star ? '\\smash{' + arg + '}' : arg) +
            ' ' + '\\vphantom{\\int}\\right|';
        parser.string = parser.string.slice(0, parser.i) + replace +
            parser.string.slice(parser.i);
        return;
    }
    if (next === '(' || next === '[') {
        parser.i++;
        parser.Push(parser.itemFactory.create('auto open')
            .setProperties({ open: next, close: '|',
            smash: star, right: '\\vphantom{\\int}' }));
        return;
    }
    throw new TexError_js_1.default('MissingArgFor', 'Missing argument for %1', parser.currentCS);
};
PhysicsMethods.Commutator = function (parser, name, open, close) {
    if (open === void 0) { open = '['; }
    if (close === void 0) { close = ']'; }
    var star = parser.GetStar();
    var next = parser.GetNext();
    var big = null;
    if (next === '\\') {
        parser.i++;
        big = parser.GetCS();
        if (!big.match(biggs)) {
            throw new TexError_js_1.default('MissingArgFor', 'Missing argument for %1', parser.currentCS);
        }
        next = parser.GetNext();
    }
    if (next !== '{') {
        throw new TexError_js_1.default('MissingArgFor', 'Missing argument for %1', parser.currentCS);
    }
    var arg1 = parser.GetArgument(name);
    var arg2 = parser.GetArgument(name);
    var argument = arg1 + ',' + arg2;
    argument = star ? open + ' ' + argument + ' ' + close :
        (big ?
            '\\' + big + 'l' + open + ' ' + argument + ' ' + '\\' + big + 'r' + close :
            '\\left' + open + ' ' + argument + ' ' + '\\right' + close);
    parser.Push(new TexParser_js_1.default(argument, parser.stack.env, parser.configuration).mml());
};
var latinCap = [0x41, 0x5A];
var latinSmall = [0x61, 0x7A];
var greekCap = [0x391, 0x3A9];
var greekSmall = [0x3B1, 0x3C9];
var digits = [0x30, 0x39];
function inRange(value, range) {
    return (value >= range[0] && value <= range[1]);
}
function createVectorToken(factory, kind, def, text) {
    var parser = factory.configuration.parser;
    var token = NodeFactory_js_1.NodeFactory.createToken(factory, kind, def, text);
    var code = text.codePointAt(0);
    if (text.length === 1 && !parser.stack.env.font &&
        parser.stack.env.vectorFont &&
        (inRange(code, latinCap) || inRange(code, latinSmall) ||
            inRange(code, greekCap) || inRange(code, digits) ||
            (inRange(code, greekSmall) && parser.stack.env.vectorStar) ||
            NodeUtil_js_1.default.getAttribute(token, 'accent'))) {
        NodeUtil_js_1.default.setAttribute(token, 'mathvariant', parser.stack.env.vectorFont);
    }
    return token;
}
PhysicsMethods.VectorBold = function (parser, name) {
    var star = parser.GetStar();
    var arg = parser.GetArgument(name);
    var oldToken = parser.configuration.nodeFactory.get('token');
    var oldFont = parser.stack.env.font;
    delete parser.stack.env.font;
    parser.configuration.nodeFactory.set('token', createVectorToken);
    parser.stack.env.vectorFont = star ? 'bold-italic' : 'bold';
    parser.stack.env.vectorStar = star;
    var node = new TexParser_js_1.default(arg, parser.stack.env, parser.configuration).mml();
    if (oldFont) {
        parser.stack.env.font = oldFont;
    }
    delete parser.stack.env.vectorFont;
    delete parser.stack.env.vectorStar;
    parser.configuration.nodeFactory.set('token', oldToken);
    parser.Push(node);
};
PhysicsMethods.StarMacro = function (parser, name, argcount) {
    var parts = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        parts[_i - 3] = arguments[_i];
    }
    var star = parser.GetStar();
    var args = [];
    if (argcount) {
        for (var i = args.length; i < argcount; i++) {
            args.push(parser.GetArgument(name));
        }
    }
    var macro = parts.join(star ? '*' : '');
    macro = ParseUtil_js_1.default.substituteArgs(parser, args, macro);
    parser.string = ParseUtil_js_1.default.addArgs(parser, macro, parser.string.slice(parser.i));
    parser.i = 0;
    if (++parser.macroCount > parser.configuration.options['maxMacros']) {
        throw new TexError_js_1.default('MaxMacroSub1', 'MathJax maximum macro substitution count exceeded; ' +
            'is there a recursive macro call?');
    }
};
var vectorApplication = function (parser, kind, name, operator, fences) {
    var op = new TexParser_js_1.default(operator, parser.stack.env, parser.configuration).mml();
    parser.Push(parser.itemFactory.create(kind, op));
    var left = parser.GetNext();
    var right = pairs[left];
    if (!right) {
        return;
    }
    var lfence = '', rfence = '', arg = '';
    var enlarge = fences.indexOf(left) !== -1;
    if (left === '{') {
        arg = parser.GetArgument(name);
        lfence = enlarge ? '\\left\\{' : '';
        rfence = enlarge ? '\\right\\}' : '';
        var macro = lfence + ' ' + arg + ' ' + rfence;
        parser.string = macro + parser.string.slice(parser.i);
        parser.i = 0;
        return;
    }
    if (!enlarge) {
        return;
    }
    parser.i++;
    parser.Push(parser.itemFactory.create('auto open')
        .setProperties({ open: left, close: right }));
};
PhysicsMethods.OperatorApplication = function (parser, name, operator) {
    var fences = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        fences[_i - 3] = arguments[_i];
    }
    vectorApplication(parser, 'fn', name, operator, fences);
};
PhysicsMethods.VectorOperator = function (parser, name, operator) {
    var fences = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        fences[_i - 3] = arguments[_i];
    }
    vectorApplication(parser, 'mml', name, operator, fences);
};
PhysicsMethods.Expression = function (parser, name, opt, id) {
    if (opt === void 0) { opt = true; }
    if (id === void 0) { id = ''; }
    id = id || name.slice(1);
    var exp = opt ? parser.GetBrackets(name) : null;
    var mml = parser.create('token', 'mi', { texClass: MmlNode_js_1.TEXCLASS.OP }, id);
    if (exp) {
        var sup = new TexParser_js_1.default(exp, parser.stack.env, parser.configuration).mml();
        mml = parser.create('node', 'msup', [mml, sup]);
    }
    parser.Push(parser.itemFactory.create('fn', mml));
    if (parser.GetNext() !== '(') {
        return;
    }
    parser.i++;
    parser.Push(parser.itemFactory.create('auto open')
        .setProperties({ open: '(', close: ')' }));
};
PhysicsMethods.Qqtext = function (parser, name, text) {
    var star = parser.GetStar();
    var arg = text ? text : parser.GetArgument(name);
    var replace = (star ? '' : '\\quad') + '\\text{' + arg + '}\\quad ';
    parser.string = parser.string.slice(0, parser.i) + replace +
        parser.string.slice(parser.i);
};
PhysicsMethods.Differential = function (parser, name, op) {
    var optArg = parser.GetBrackets(name);
    var power = optArg != null ? '^{' + optArg + '}' : ' ';
    var parens = parser.GetNext() === '(';
    var braces = parser.GetNext() === '{';
    var macro = op + power;
    if (!(parens || braces)) {
        macro += parser.GetArgument(name, true) || '';
        var mml = new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml();
        parser.Push(mml);
        return;
    }
    if (braces) {
        macro += parser.GetArgument(name);
        var mml = new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml();
        parser.Push(parser.create('node', 'TeXAtom', [mml], { texClass: MmlNode_js_1.TEXCLASS.OP }));
        return;
    }
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
    parser.i++;
    parser.Push(parser.itemFactory.create('auto open')
        .setProperties({ open: '(', close: ')' }));
};
PhysicsMethods.Derivative = function (parser, name, argMax, op) {
    var star = parser.GetStar();
    var optArg = parser.GetBrackets(name);
    var argCounter = 1;
    var args = [];
    args.push(parser.GetArgument(name));
    while (parser.GetNext() === '{' && argCounter < argMax) {
        args.push(parser.GetArgument(name));
        argCounter++;
    }
    var ignore = false;
    var power1 = ' ';
    var power2 = ' ';
    if (argMax > 2 && args.length > 2) {
        power1 = '^{' + (args.length - 1) + '}';
        ignore = true;
    }
    else if (optArg != null) {
        if (argMax > 2 && args.length > 1) {
            ignore = true;
        }
        power1 = '^{' + optArg + '}';
        power2 = power1;
    }
    var frac = star ? '\\flatfrac' : '\\frac';
    var first = args.length > 1 ? args[0] : '';
    var second = args.length > 1 ? args[1] : args[0];
    var rest = '';
    for (var i = 2, arg = void 0; arg = args[i]; i++) {
        rest += op + ' ' + arg;
    }
    var macro = frac + '{' + op + power1 + first + '}' +
        '{' + op + ' ' + second + power2 + ' ' + rest + '}';
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
    if (parser.GetNext() === '(') {
        parser.i++;
        parser.Push(parser.itemFactory.create('auto open')
            .setProperties({ open: '(', close: ')', ignore: ignore }));
    }
};
PhysicsMethods.Bra = function (parser, name) {
    var starBra = parser.GetStar();
    var bra = parser.GetArgument(name);
    var ket = '';
    var hasKet = false;
    var starKet = false;
    if (parser.GetNext() === '\\') {
        var saveI = parser.i;
        parser.i++;
        var cs = parser.GetCS();
        var symbol = parser.lookup('macro', cs);
        if (symbol && symbol.symbol === 'ket') {
            hasKet = true;
            saveI = parser.i;
            starKet = parser.GetStar();
            if (parser.GetNext() === '{') {
                ket = parser.GetArgument(cs, true);
            }
            else {
                parser.i = saveI;
                starKet = false;
            }
        }
        else {
            parser.i = saveI;
        }
    }
    var macro = '';
    if (hasKet) {
        macro = (starBra || starKet) ?
            "\\langle{" + bra + "}\\vert{" + ket + "}\\rangle" :
            "\\left\\langle{" + bra + "}\\middle\\vert{" + ket + "}\\right\\rangle";
    }
    else {
        macro = (starBra || starKet) ?
            "\\langle{" + bra + "}\\vert" : "\\left\\langle{" + bra + "}\\right\\vert{" + ket + "}";
    }
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
};
PhysicsMethods.Ket = function (parser, name) {
    var star = parser.GetStar();
    var ket = parser.GetArgument(name);
    var macro = star ? "\\vert{" + ket + "}\\rangle" :
        "\\left\\vert{" + ket + "}\\right\\rangle";
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
};
PhysicsMethods.BraKet = function (parser, name) {
    var star = parser.GetStar();
    var bra = parser.GetArgument(name);
    var ket = null;
    if (parser.GetNext() === '{') {
        ket = parser.GetArgument(name, true);
    }
    var macro = '';
    if (ket == null) {
        macro = star ?
            "\\langle{" + bra + "}\\vert{" + bra + "}\\rangle" :
            "\\left\\langle{" + bra + "}\\middle\\vert{" + bra + "}\\right\\rangle";
    }
    else {
        macro = star ?
            "\\langle{" + bra + "}\\vert{" + ket + "}\\rangle" :
            "\\left\\langle{" + bra + "}\\middle\\vert{" + ket + "}\\right\\rangle";
    }
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
};
PhysicsMethods.KetBra = function (parser, name) {
    var star = parser.GetStar();
    var ket = parser.GetArgument(name);
    var bra = null;
    if (parser.GetNext() === '{') {
        bra = parser.GetArgument(name, true);
    }
    var macro = '';
    if (bra == null) {
        macro = star ?
            "\\vert{" + ket + "}\\rangle\\!\\langle{" + ket + "}\\vert" :
            "\\left\\vert{" + ket + "}\\middle\\rangle\\!\\middle\\langle{" + ket + "}\\right\\vert";
    }
    else {
        macro = star ?
            "\\vert{" + ket + "}\\rangle\\!\\langle{" + bra + "}\\vert" :
            "\\left\\vert{" + ket + "}\\middle\\rangle\\!\\middle\\langle{" + bra + "}\\right\\vert";
    }
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
};
function outputBraket(_a, star1, star2) {
    var _b = __read(_a, 3), arg1 = _b[0], arg2 = _b[1], arg3 = _b[2];
    return (star1 && star2) ?
        "\\left\\langle{" + arg1 + "}\\middle\\vert{" + arg2 + "}\\middle\\vert{" + arg3 + "}\\right\\rangle" :
        (star1 ? "\\langle{" + arg1 + "}\\vert{" + arg2 + "}\\vert{" + arg3 + "}\\rangle" :
            "\\left\\langle{" + arg1 + "}\\right\\vert{" + arg2 + "}\\left\\vert{" + arg3 + "}\\right\\rangle");
}
PhysicsMethods.Expectation = function (parser, name) {
    var star1 = parser.GetStar();
    var star2 = star1 && parser.GetStar();
    var arg1 = parser.GetArgument(name);
    var arg2 = null;
    if (parser.GetNext() === '{') {
        arg2 = parser.GetArgument(name, true);
    }
    var macro = (arg1 && arg2) ?
        outputBraket([arg2, arg1, arg2], star1, star2) :
        (star1 ? "\\langle {" + arg1 + "} \\rangle" :
            "\\left\\langle {" + arg1 + "} \\right\\rangle");
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
};
PhysicsMethods.MatrixElement = function (parser, name) {
    var star1 = parser.GetStar();
    var star2 = star1 && parser.GetStar();
    var arg1 = parser.GetArgument(name);
    var arg2 = parser.GetArgument(name);
    var arg3 = parser.GetArgument(name);
    var macro = outputBraket([arg1, arg2, arg3], star1, star2);
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
};
PhysicsMethods.MatrixQuantity = function (parser, name, small) {
    var star = parser.GetStar();
    var next = parser.GetNext();
    var array = small ? 'smallmatrix' : 'array';
    var arg = '';
    var open = '';
    var close = '';
    switch (next) {
        case '{':
            arg = parser.GetArgument(name);
            break;
        case '(':
            parser.i++;
            open = star ? '\\lgroup' : '(';
            close = star ? '\\rgroup' : ')';
            arg = parser.GetUpTo(name, ')');
            break;
        case '[':
            parser.i++;
            open = '[';
            close = ']';
            arg = parser.GetUpTo(name, ']');
            break;
        case '|':
            parser.i++;
            open = '|';
            close = '|';
            arg = parser.GetUpTo(name, '|');
            break;
        default:
            open = '(';
            close = ')';
            break;
    }
    var macro = (open ? '\\left' : '') + open +
        '\\begin{' + array + '}{} ' + arg + '\\end{' + array + '}' +
        (open ? '\\right' : '') + close;
    parser.Push(new TexParser_js_1.default(macro, parser.stack.env, parser.configuration).mml());
};
PhysicsMethods.IdentityMatrix = function (parser, name) {
    var arg = parser.GetArgument(name);
    var size = parseInt(arg, 10);
    if (isNaN(size)) {
        throw new TexError_js_1.default('InvalidNumber', 'Invalid number');
    }
    if (size <= 1) {
        parser.string = '1' + parser.string.slice(parser.i);
        parser.i = 0;
        return;
    }
    var zeros = Array(size).fill('0');
    var columns = [];
    for (var i = 0; i < size; i++) {
        var row = zeros.slice();
        row[i] = '1';
        columns.push(row.join(' & '));
    }
    parser.string = columns.join('\\\\ ') + parser.string.slice(parser.i);
    parser.i = 0;
};
PhysicsMethods.XMatrix = function (parser, name) {
    var star = parser.GetStar();
    var arg1 = parser.GetArgument(name);
    var arg2 = parser.GetArgument(name);
    var arg3 = parser.GetArgument(name);
    var n = parseInt(arg2, 10);
    var m = parseInt(arg3, 10);
    if (isNaN(n) || isNaN(m) || m.toString() !== arg3 || n.toString() !== arg2) {
        throw new TexError_js_1.default('InvalidNumber', 'Invalid number');
    }
    n = n < 1 ? 1 : n;
    m = m < 1 ? 1 : m;
    if (!star) {
        var row = Array(m).fill(arg1).join(' & ');
        var matrix_1 = Array(n).fill(row).join('\\\\ ');
        parser.string = matrix_1 + parser.string.slice(parser.i);
        parser.i = 0;
        return;
    }
    var matrix = '';
    if (n === 1 && m === 1) {
        matrix = arg1;
    }
    else if (n === 1) {
        var row = [];
        for (var i = 1; i <= m; i++) {
            row.push(arg1 + "_{" + i + "}");
        }
        matrix = row.join(' & ');
    }
    else if (m === 1) {
        var row = [];
        for (var i = 1; i <= n; i++) {
            row.push(arg1 + "_{" + i + "}");
        }
        matrix = row.join('\\\\ ');
    }
    else {
        var rows = [];
        for (var i = 1; i <= n; i++) {
            var row = [];
            for (var j = 1; j <= m; j++) {
                row.push(arg1 + "_{{" + i + "}{" + j + "}}");
            }
            rows.push(row.join(' & '));
        }
        matrix = rows.join('\\\\ ');
    }
    parser.string = matrix + parser.string.slice(parser.i);
    parser.i = 0;
    return;
};
PhysicsMethods.PauliMatrix = function (parser, name) {
    var arg = parser.GetArgument(name);
    var matrix = arg.slice(1);
    switch (arg[0]) {
        case '0':
            matrix += ' 1 & 0\\\\ 0 & 1';
            break;
        case '1':
        case 'x':
            matrix += ' 0 & 1\\\\ 1 & 0';
            break;
        case '2':
        case 'y':
            matrix += ' 0 & -i\\\\ i & 0';
            break;
        case '3':
        case 'z':
            matrix += ' 1 & 0\\\\ 0 & -1';
            break;
        default:
    }
    parser.string = matrix + parser.string.slice(parser.i);
    parser.i = 0;
};
PhysicsMethods.DiagonalMatrix = function (parser, name, anti) {
    if (parser.GetNext() !== '{') {
        return;
    }
    var startI = parser.i;
    parser.GetArgument(name);
    var endI = parser.i;
    parser.i = startI + 1;
    var elements = [];
    var element = '';
    var currentI = parser.i;
    while (currentI < endI) {
        try {
            element = parser.GetUpTo(name, ',');
        }
        catch (e) {
            parser.i = endI;
            elements.push(parser.string.slice(currentI, endI - 1));
            break;
        }
        if (parser.i >= endI) {
            elements.push(parser.string.slice(currentI, endI));
            break;
        }
        currentI = parser.i;
        elements.push(element);
    }
    parser.string = makeDiagMatrix(elements, anti) + parser.string.slice(endI);
    parser.i = 0;
};
function makeDiagMatrix(elements, anti) {
    var length = elements.length;
    var matrix = [];
    for (var i = 0; i < length; i++) {
        matrix.push(Array(anti ? length - i : i + 1).join('&') +
            '\\mqty{' + elements[i] + '}');
    }
    return matrix.join('\\\\ ');
}
PhysicsMethods.AutoClose = function (parser, fence, _texclass) {
    var mo = parser.create('token', 'mo', { stretchy: false }, fence);
    var item = parser.itemFactory.create('mml', mo).
        setProperties({ autoclose: fence });
    parser.Push(item);
};
PhysicsMethods.Macro = BaseMethods_js_1.default.Macro;
PhysicsMethods.NamedFn = BaseMethods_js_1.default.NamedFn;
PhysicsMethods.Array = BaseMethods_js_1.default.Array;
exports.default = PhysicsMethods;
//# sourceMappingURL=PhysicsMethods.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagFormatConfiguration = exports.tagformatConfig = void 0;
var Configuration_js_1 = __webpack_require__(0);
var Tags_js_1 = __webpack_require__(17);
var tagID = 0;
function tagformatConfig(config, jax) {
    var tags = jax.parseOptions.options.tags;
    if (tags !== 'base' && config.tags.hasOwnProperty(tags)) {
        Tags_js_1.TagsFactory.add(tags, config.tags[tags]);
    }
    var TagClass = Tags_js_1.TagsFactory.create(jax.parseOptions.options.tags).constructor;
    var TagFormat = (function (_super) {
        __extends(TagFormat, _super);
        function TagFormat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TagFormat.prototype.formatNumber = function (n) {
            return jax.parseOptions.options.tagformat.number(n);
        };
        TagFormat.prototype.formatTag = function (tag) {
            return jax.parseOptions.options.tagformat.tag(tag);
        };
        TagFormat.prototype.formatId = function (id) {
            return jax.parseOptions.options.tagformat.id(id);
        };
        TagFormat.prototype.formatUrl = function (id, base) {
            return jax.parseOptions.options.tagformat.url(id, base);
        };
        return TagFormat;
    }(TagClass));
    tagID++;
    var tagName = 'configTags-' + tagID;
    Tags_js_1.TagsFactory.add(tagName, TagFormat);
    jax.parseOptions.options.tags = tagName;
}
exports.tagformatConfig = tagformatConfig;
exports.TagFormatConfiguration = Configuration_js_1.Configuration.create('tagformat', {
    config: [tagformatConfig, 10],
    options: {
        tagformat: {
            number: function (n) { return n.toString(); },
            tag: function (tag) { return '(' + tag + ')'; },
            id: function (id) { return 'mjx-eqn-' + id.replace(/\s/g, '_'); },
            url: function (id, base) { return base + '#' + encodeURIComponent(id); },
        }
    }
});
//# sourceMappingURL=TagFormatConfiguration.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.textBase = void 0;
var Configuration_js_1 = __webpack_require__(0);
var ParseOptions_js_1 = __webpack_require__(69);
var Tags_js_1 = __webpack_require__(17);
var BaseItems_js_1 = __webpack_require__(16);
var TextParser_js_1 = __webpack_require__(70);
var TextMacrosMethods_js_1 = __webpack_require__(27);
__webpack_require__(72);
exports.textBase = Configuration_js_1.Configuration.local({
    handler: {
        character: ['command', 'text-special'],
        macro: ['text-macros']
    },
    fallback: {
        character: function (parser, c) {
            parser.text += c;
        },
        macro: function (parser, name) {
            var texParser = parser.texParser;
            var macro = texParser.lookup('macro', name);
            if (macro && macro._func !== TextMacrosMethods_js_1.TextMacrosMethods.Macro) {
                parser.Error('MathMacro', '%1 is only supported in math mode', '\\' + name);
            }
            texParser.parse('macro', [macro ? parser : texParser, name]);
        }
    },
    items: (_a = {},
        _a[BaseItems_js_1.StartItem.prototype.kind] = BaseItems_js_1.StartItem,
        _a[BaseItems_js_1.StopItem.prototype.kind] = BaseItems_js_1.StopItem,
        _a[BaseItems_js_1.MmlItem.prototype.kind] = BaseItems_js_1.MmlItem,
        _a[BaseItems_js_1.StyleItem.prototype.kind] = BaseItems_js_1.StyleItem,
        _a)
});
function internalMath(parser, text, level, mathvariant) {
    var config = parser.configuration.packageData.get('textmacros');
    if (!(parser instanceof TextParser_js_1.TextParser)) {
        config.texParser = parser;
    }
    return [(new TextParser_js_1.TextParser(text, mathvariant ? { mathvariant: mathvariant } : {}, config.parseOptions, level)).mml()];
}
Configuration_js_1.Configuration.create('textmacros', {
    config: function (_config, jax) {
        var textConf = new Configuration_js_1.ParserConfiguration([]);
        textConf.append(exports.textBase);
        textConf.init();
        var parseOptions = new ParseOptions_js_1.default(textConf, []);
        parseOptions.options = jax.parseOptions.options;
        textConf.config(jax);
        Tags_js_1.TagsFactory.addTags(textConf.tags);
        parseOptions.tags = Tags_js_1.TagsFactory.getDefault();
        parseOptions.tags.configuration = parseOptions;
        parseOptions.packageData = jax.parseOptions.packageData;
        parseOptions.packageData.set('textmacros', { parseOptions: parseOptions, jax: jax, texParser: null });
        parseOptions.options.internalMath = internalMath;
    },
    preprocessors: [function (data) {
            var config = data.data.packageData.get('textmacros');
            config.parseOptions.nodeFactory.setMmlFactory(config.jax.mmlFactory);
        }]
});
//# sourceMappingURL=TextMacrosConfiguration.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseOptions["default"];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextParser = void 0;
var TexParser_js_1 = __webpack_require__(5);
var TexError_js_1 = __webpack_require__(2);
var ParseUtil_js_1 = __webpack_require__(3);
var MmlNode_js_1 = __webpack_require__(7);
var NodeUtil_js_1 = __webpack_require__(4);
var BaseItems_js_1 = __webpack_require__(16);
var TextParser = (function (_super) {
    __extends(TextParser, _super);
    function TextParser(text, env, configuration, level) {
        var _this = _super.call(this, text, env, configuration) || this;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(TextParser.prototype, "texParser", {
        get: function () {
            return this.configuration.packageData.get('textmacros').texParser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextParser.prototype, "tags", {
        get: function () {
            return this.texParser.tags;
        },
        enumerable: false,
        configurable: true
    });
    TextParser.prototype.mml = function () {
        return (this.level != null ?
            this.create('node', 'mstyle', this.nodes, { displaystyle: false, scriptlevel: this.level }) :
            this.nodes.length === 1 ? this.nodes[0] : this.create('node', 'inferredMrow', this.nodes));
    };
    TextParser.prototype.Parse = function () {
        this.text = '';
        this.nodes = [];
        this.envStack = [];
        _super.prototype.Parse.call(this);
    };
    TextParser.prototype.saveText = function () {
        if (this.text) {
            var mathvariant = this.stack.env.mathvariant;
            var text = ParseUtil_js_1.default.internalText(this, this.text, mathvariant ? { mathvariant: mathvariant } : {});
            this.text = '';
            this.Push(text);
        }
    };
    TextParser.prototype.Push = function (mml) {
        if (this.text) {
            this.saveText();
        }
        if (mml instanceof BaseItems_js_1.StopItem) {
            return _super.prototype.Push.call(this, mml);
        }
        if (mml instanceof BaseItems_js_1.StyleItem) {
            this.stack.env.mathcolor = this.stack.env.color;
            return;
        }
        if (mml instanceof MmlNode_js_1.AbstractMmlNode) {
            this.addAttributes(mml);
            this.nodes.push(mml);
        }
    };
    TextParser.prototype.PushMath = function (mml) {
        var e_1, _a;
        var env = this.stack.env;
        try {
            for (var _b = __values(['mathsize', 'mathcolor']), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                if (env[name_1] && !mml.attributes.getExplicit(name_1)) {
                    if (!mml.isToken && !mml.isKind('mstyle')) {
                        mml = this.create('node', 'mstyle', [mml]);
                    }
                    NodeUtil_js_1.default.setAttribute(mml, name_1, env[name_1]);
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
        if (mml.isKind('inferredMrow')) {
            mml = this.create('node', 'mrow', mml.childNodes);
        }
        this.nodes.push(mml);
    };
    TextParser.prototype.addAttributes = function (mml) {
        var e_2, _a;
        var env = this.stack.env;
        if (!mml.isToken)
            return;
        try {
            for (var _b = __values(['mathsize', 'mathcolor', 'mathvariant']), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_2 = _c.value;
                if (env[name_2] && !mml.attributes.getExplicit(name_2)) {
                    NodeUtil_js_1.default.setAttribute(mml, name_2, env[name_2]);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    TextParser.prototype.ParseTextArg = function (name, env) {
        var text = this.GetArgument(name);
        env = Object.assign(Object.assign({}, this.stack.env), env);
        return (new TextParser(text, env, this.configuration)).mml();
    };
    TextParser.prototype.ParseArg = function (name) {
        return (new TextParser(this.GetArgument(name), this.stack.env, this.configuration)).mml();
    };
    TextParser.prototype.Error = function (id, message) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        throw new (TexError_js_1.default.bind.apply(TexError_js_1.default, __spread([void 0, id, message], args)))();
    };
    return TextParser;
}(TexParser_js_1.default));
exports.TextParser = TextParser;
//# sourceMappingURL=TextParser.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.handleRetriesFor = MathJax._.util.Retries.handleRetriesFor;
exports.retryAfter = MathJax._.util.Retries.retryAfter;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SymbolMap_js_1 = __webpack_require__(1);
var TexConstants_js_1 = __webpack_require__(6);
var TextMacrosMethods_js_1 = __webpack_require__(27);
new SymbolMap_js_1.MacroMap('text-special', {
    '$': 'Math',
    '%': 'Comment',
    '^': 'MathModeOnly',
    '_': 'MathModeOnly',
    '&': 'Misplaced',
    '#': 'Misplaced',
    '~': 'Tilde',
    ' ': 'Space',
    '\t': 'Space',
    '\r': 'Space',
    '\n': 'Space',
    '\u00A0': 'Tilde',
    '{': 'OpenBrace',
    '}': 'CloseBrace',
    '`': 'OpenQuote',
    '\'': 'CloseQuote'
}, TextMacrosMethods_js_1.TextMacrosMethods);
new SymbolMap_js_1.CommandMap('text-macros', {
    '(': 'Math',
    '$': 'SelfQuote',
    '_': 'SelfQuote',
    '%': 'SelfQuote',
    '{': 'SelfQuote',
    '}': 'SelfQuote',
    ' ': 'SelfQuote',
    '&': 'SelfQuote',
    '#': 'SelfQuote',
    '\\': 'SelfQuote',
    '\'': ['Accent', '\u00B4'],
    '\u2019': ['Accent', '\u00B4'],
    '`': ['Accent', '\u0060'],
    '\u2018': ['Accent', '\u0060'],
    '^': ['Accent', '^'],
    '\"': ['Accent', '\u00A8'],
    '~': ['Accent', '~'],
    '=': ['Accent', '\u00AF'],
    '.': ['Accent', '\u02D9'],
    'u': ['Accent', '\u02D8'],
    'v': ['Accent', '\u02C7'],
    emph: 'Emph',
    rm: ['SetFont', TexConstants_js_1.TexConstant.Variant.NORMAL],
    mit: ['SetFont', TexConstants_js_1.TexConstant.Variant.ITALIC],
    oldstyle: ['SetFont', TexConstants_js_1.TexConstant.Variant.OLDSTYLE],
    cal: ['SetFont', TexConstants_js_1.TexConstant.Variant.CALLIGRAPHIC],
    it: ['SetFont', '-tex-mathit'],
    bf: ['SetFont', TexConstants_js_1.TexConstant.Variant.BOLD],
    bbFont: ['SetFont', TexConstants_js_1.TexConstant.Variant.DOUBLESTRUCK],
    scr: ['SetFont', TexConstants_js_1.TexConstant.Variant.SCRIPT],
    frak: ['SetFont', TexConstants_js_1.TexConstant.Variant.FRAKTUR],
    sf: ['SetFont', TexConstants_js_1.TexConstant.Variant.SANSSERIF],
    tt: ['SetFont', TexConstants_js_1.TexConstant.Variant.MONOSPACE],
    tiny: ['SetSize', 0.5],
    Tiny: ['SetSize', 0.6],
    scriptsize: ['SetSize', 0.7],
    small: ['SetSize', 0.85],
    normalsize: ['SetSize', 1.0],
    large: ['SetSize', 1.2],
    Large: ['SetSize', 1.44],
    LARGE: ['SetSize', 1.73],
    huge: ['SetSize', 2.07],
    Huge: ['SetSize', 2.49],
    mathcal: 'MathModeOnly',
    mathscr: 'MathModeOnly',
    mathrm: 'MathModeOnly',
    mathbf: 'MathModeOnly',
    mathbb: 'MathModeOnly',
    mathit: 'MathModeOnly',
    mathfrak: 'MathModeOnly',
    mathsf: 'MathModeOnly',
    mathtt: 'MathModeOnly',
    Bbb: ['Macro', '{\\bbFont #1}', 1],
    textrm: ['Macro', '{\\rm #1}', 1],
    textit: ['Macro', '{\\it #1}', 1],
    textbf: ['Macro', '{\\bf #1}', 1],
    textsf: ['Macro', '{\\sf #1}', 1],
    texttt: ['Macro', '{\\tt #1}', 1],
    dagger: ['Insert', '\u2020'],
    ddagger: ['Insert', '\u2021'],
    S: ['Insert', '\u00A7'],
    ',': ['Spacer', TexConstants_js_1.TexConstant.Length.THINMATHSPACE],
    ':': ['Spacer', TexConstants_js_1.TexConstant.Length.MEDIUMMATHSPACE],
    '>': ['Spacer', TexConstants_js_1.TexConstant.Length.MEDIUMMATHSPACE],
    ';': ['Spacer', TexConstants_js_1.TexConstant.Length.THICKMATHSPACE],
    '!': ['Spacer', TexConstants_js_1.TexConstant.Length.NEGATIVETHINMATHSPACE],
    enspace: ['Spacer', '.5em'],
    quad: ['Spacer', '1em'],
    qquad: ['Spacer', '2em'],
    thinspace: ['Spacer', TexConstants_js_1.TexConstant.Length.THINMATHSPACE],
    negthinspace: ['Spacer', TexConstants_js_1.TexConstant.Length.NEGATIVETHINMATHSPACE],
    hskip: 'Hskip',
    hspace: 'Hskip',
    kern: 'Hskip',
    mskip: 'Hskip',
    mspace: 'Hskip',
    mkern: 'Hskip',
    rule: 'rule',
    Rule: ['Rule'],
    Space: ['Rule', 'blank'],
    color: 'CheckAutoload',
    textcolor: 'CheckAutoload',
    colorbox: 'CheckAutoload',
    fcolorbox: 'CheckAutoload',
    href: 'CheckAutoload',
    style: 'CheckAutoload',
    class: 'CheckAutoload',
    cssId: 'CheckAutoload',
    unicode: 'CheckAutoload',
    ref: ['HandleRef', false],
    eqref: ['HandleRef', true],
}, TextMacrosMethods_js_1.TextMacrosMethods);
//# sourceMappingURL=TextMacrosMappings.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicodeConfiguration = exports.UnicodeMethods = void 0;
var Configuration_js_1 = __webpack_require__(0);
var TexError_js_1 = __webpack_require__(2);
var SymbolMap_js_1 = __webpack_require__(1);
var ParseUtil_js_1 = __webpack_require__(3);
var NodeUtil_js_1 = __webpack_require__(4);
var Entities_js_1 = __webpack_require__(74);
exports.UnicodeMethods = {};
var UnicodeCache = {};
exports.UnicodeMethods.Unicode = function (parser, name) {
    var HD = parser.GetBrackets(name);
    var HDsplit = null;
    var font = null;
    if (HD) {
        if (HD.replace(/ /g, '').
            match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)) {
            HDsplit = HD.replace(/ /g, '').split(/,/);
            font = parser.GetBrackets(name);
        }
        else {
            font = HD;
        }
    }
    var n = ParseUtil_js_1.default.trimSpaces(parser.GetArgument(name)).replace(/^0x/, 'x');
    if (!n.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/)) {
        throw new TexError_js_1.default('BadUnicode', 'Argument to \\unicode must be a number');
    }
    var N = parseInt(n.match(/^x/) ? '0' + n : n);
    if (!UnicodeCache[N]) {
        UnicodeCache[N] = [800, 200, font, N];
    }
    else if (!font) {
        font = UnicodeCache[N][2];
    }
    if (HDsplit) {
        UnicodeCache[N][0] = Math.floor(parseFloat(HDsplit[0]) * 1000);
        UnicodeCache[N][1] = Math.floor(parseFloat(HDsplit[1]) * 1000);
    }
    var variant = parser.stack.env.font;
    var def = {};
    if (font) {
        UnicodeCache[N][2] = def.fontfamily = font.replace(/'/g, '\'');
        if (variant) {
            if (variant.match(/bold/)) {
                def.fontweight = 'bold';
            }
            if (variant.match(/italic|-mathit/)) {
                def.fontstyle = 'italic';
            }
        }
    }
    else if (variant) {
        def.mathvariant = variant;
    }
    var node = parser.create('token', 'mtext', def, Entities_js_1.numeric(n));
    NodeUtil_js_1.default.setProperty(node, 'unicode', true);
    parser.Push(node);
};
new SymbolMap_js_1.CommandMap('unicode', { unicode: 'Unicode' }, exports.UnicodeMethods);
exports.UnicodeConfiguration = Configuration_js_1.Configuration.create('unicode', { handler: { macro: ['unicode'] } });
//# sourceMappingURL=UnicodeConfiguration.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.options = MathJax._.util.Entities.options;
exports.entities = MathJax._.util.Entities.entities;
exports.add = MathJax._.util.Entities.add;
exports.remove = MathJax._.util.Entities.remove;
exports.translate = MathJax._.util.Entities.translate;
exports.numeric = MathJax._.util.Entities.numeric;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VerbConfiguration = exports.VerbMethods = void 0;
var Configuration_js_1 = __webpack_require__(0);
var TexConstants_js_1 = __webpack_require__(6);
var SymbolMap_js_1 = __webpack_require__(1);
var TexError_js_1 = __webpack_require__(2);
exports.VerbMethods = {};
exports.VerbMethods.Verb = function (parser, name) {
    var c = parser.GetNext();
    var start = ++parser.i;
    if (c === '') {
        throw new TexError_js_1.default('MissingArgFor', 'Missing argument for %1', name);
    }
    while (parser.i < parser.string.length &&
        parser.string.charAt(parser.i) !== c) {
        parser.i++;
    }
    if (parser.i === parser.string.length) {
        throw new TexError_js_1.default('NoClosingDelim', 'Can\'t find closing delimiter for %1', parser.currentCS);
    }
    var text = parser.string.slice(start, parser.i).replace(/ /g, '\u00A0');
    parser.i++;
    parser.Push(parser.create('token', 'mtext', { mathvariant: TexConstants_js_1.TexConstant.Variant.MONOSPACE }, text));
};
new SymbolMap_js_1.CommandMap('verb', { verb: 'Verb' }, exports.VerbMethods);
exports.VerbConfiguration = Configuration_js_1.Configuration.create('verb', { handler: { macro: ['verb'] } });
//# sourceMappingURL=VerbConfiguration.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Loader = MathJax._.components.loader.Loader;
exports.MathJax = MathJax._.components.loader.MathJax;
exports.CONFIG = MathJax._.components.loader.CONFIG;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.mathjax = MathJax._.mathjax.mathjax;

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(20);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/AllPackages.js
var AllPackages = __webpack_require__(15);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/autoload/AutoloadConfiguration.js
var AutoloadConfiguration = __webpack_require__(21);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/require/RequireConfiguration.js
var RequireConfiguration = __webpack_require__(14);

// CONCATENATED MODULE: ./lib/all-packages.js




Object(global["combineWithMathJax"])({
  _: {
    input: {
      tex: {
        AllPackages: AllPackages,
        autoload: {
          AutoloadConfiguration: AutoloadConfiguration
        },
        require: {
          RequireConfiguration: RequireConfiguration
        }
      }
    }
  }
});
// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/util/Options.js
var Options = __webpack_require__(10);

// CONCATENATED MODULE: ./all-packages.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







if (MathJax.loader) {
  MathJax.loader.preLoad('[tex]/autoload', '[tex]/require');
}

if (MathJax.startup) {
  if (!MathJax.config.tex) {
    MathJax.config.tex = {};
  }

  var all_packages_packages = MathJax.config.tex.packages;
  MathJax.config.tex.packages = ['autoload', 'require'].concat(_toConsumableArray(AllPackages["AllPackages"]));

  if (all_packages_packages) {
    Object(Options["insert"])(MathJax.config.tex, {
      packages: all_packages_packages
    });
  }
}

/***/ })
/******/ ]);
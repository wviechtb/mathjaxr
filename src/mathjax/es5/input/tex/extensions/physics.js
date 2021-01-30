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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var StackItem_js_1 = __webpack_require__(8);
var ParseUtil_js_1 = __webpack_require__(2);
var TexParser_js_1 = __webpack_require__(3);
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
/* 1 */
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
var BaseMethods_js_1 = __webpack_require__(11);
var TexParser_js_1 = __webpack_require__(3);
var TexError_js_1 = __webpack_require__(12);
var MmlNode_js_1 = __webpack_require__(4);
var ParseUtil_js_1 = __webpack_require__(2);
var NodeUtil_js_1 = __webpack_require__(13);
var NodeFactory_js_1 = __webpack_require__(14);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseUtil["default"];

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicsConfiguration = void 0;
var Configuration_js_1 = __webpack_require__(7);
var PhysicsItems_js_1 = __webpack_require__(0);
__webpack_require__(9);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Configuration = MathJax._.input.tex.Configuration.Configuration;
exports.ConfigurationHandler = MathJax._.input.tex.Configuration.ConfigurationHandler;
exports.ParserConfiguration = MathJax._.input.tex.Configuration.ParserConfiguration;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlStack = MathJax._.input.tex.StackItem.MmlStack;
exports.BaseItem = MathJax._.input.tex.StackItem.BaseItem;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SymbolMap_js_1 = __webpack_require__(10);
var PhysicsMethods_js_1 = __webpack_require__(1);
var TexConstants_js_1 = __webpack_require__(15);
var ParseMethods_js_1 = __webpack_require__(16);
var MmlNode_js_1 = __webpack_require__(4);
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.base.BaseMethods["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.TexError["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.NodeUtil["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.NodeFactory = MathJax._.input.tex.NodeFactory.NodeFactory;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TexConstant = MathJax._.input.tex.TexConstants.TexConstant;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseMethods["default"];

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(5);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/physics/PhysicsConfiguration.js
var PhysicsConfiguration = __webpack_require__(6);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/physics/PhysicsItems.js
var PhysicsItems = __webpack_require__(0);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/physics/PhysicsMethods.js
var PhysicsMethods = __webpack_require__(1);

// CONCATENATED MODULE: ./lib/physics.js




Object(global["combineWithMathJax"])({
  _: {
    input: {
      tex: {
        physics: {
          PhysicsConfiguration: PhysicsConfiguration,
          PhysicsItems: PhysicsItems,
          PhysicsMethods: PhysicsMethods
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./physics.js


/***/ })
/******/ ]);
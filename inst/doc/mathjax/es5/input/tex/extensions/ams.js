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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NEW_OPS = exports.AmsMethods = void 0;
var ParseUtil_js_1 = __webpack_require__(1);
var NodeUtil_js_1 = __webpack_require__(4);
var TexConstants_js_1 = __webpack_require__(2);
var TexParser_js_1 = __webpack_require__(13);
var TexError_js_1 = __webpack_require__(5);
var Symbol_js_1 = __webpack_require__(14);
var BaseMethods_js_1 = __webpack_require__(15);
var MmlNode_js_1 = __webpack_require__(6);
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseUtil["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TexConstant = MathJax._.input.tex.TexConstants.TexConstant;

/***/ }),
/* 3 */
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
var BaseItems_js_1 = __webpack_require__(11);
var ParseUtil_js_1 = __webpack_require__(1);
var NodeUtil_js_1 = __webpack_require__(4);
var TexError_js_1 = __webpack_require__(5);
var TexConstants_js_1 = __webpack_require__(2);
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
exports["default"] = MathJax._.input.tex.TexError["default"];

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
var Configuration_js_1 = __webpack_require__(10);
var AmsItems_js_1 = __webpack_require__(3);
var Tags_js_1 = __webpack_require__(12);
var AmsMethods_js_1 = __webpack_require__(0);
__webpack_require__(16);
var SymbolMap_js_1 = __webpack_require__(7);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Configuration = MathJax._.input.tex.Configuration.Configuration;
exports.ConfigurationHandler = MathJax._.input.tex.Configuration.ConfigurationHandler;
exports.ParserConfiguration = MathJax._.input.tex.Configuration.ParserConfiguration;

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.TexParser["default"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Symbol = MathJax._.input.tex.Symbol.Symbol;
exports.Macro = MathJax._.input.tex.Symbol.Macro;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.base.BaseMethods["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AmsMethods_js_1 = __webpack_require__(0);
var sm = __webpack_require__(7);
var TexConstants_js_1 = __webpack_require__(2);
var ParseMethods_js_1 = __webpack_require__(17);
var ParseUtil_js_1 = __webpack_require__(1);
var MmlNode_js_1 = __webpack_require__(6);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseMethods["default"];

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(8);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/ams/AmsConfiguration.js
var AmsConfiguration = __webpack_require__(9);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/ams/AmsItems.js
var AmsItems = __webpack_require__(3);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/ams/AmsMethods.js
var AmsMethods = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/ams.js




Object(global["combineWithMathJax"])({
  _: {
    input: {
      tex: {
        ams: {
          AmsConfiguration: AmsConfiguration,
          AmsItems: AmsItems,
          AmsMethods: AmsMethods
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./ams.js


/***/ })
/******/ ]);
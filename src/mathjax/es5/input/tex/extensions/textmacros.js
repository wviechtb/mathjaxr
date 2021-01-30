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
exports.TextMacrosMethods = void 0;
var TexParser_js_1 = __webpack_require__(3);
var Retries_js_1 = __webpack_require__(13);
var BaseMethods_js_1 = __webpack_require__(14);
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
/* 1 */
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
var TexParser_js_1 = __webpack_require__(3);
var TexError_js_1 = __webpack_require__(9);
var ParseUtil_js_1 = __webpack_require__(10);
var MmlNode_js_1 = __webpack_require__(11);
var NodeUtil_js_1 = __webpack_require__(12);
var BaseItems_js_1 = __webpack_require__(2);
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
/* 2 */
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
exports.isObject = MathJax._.components.global.isObject;
exports.combineConfig = MathJax._.components.global.combineConfig;
exports.combineDefaults = MathJax._.components.global.combineDefaults;
exports.combineWithMathJax = MathJax._.components.global.combineWithMathJax;
exports.MathJax = MathJax._.components.global.MathJax;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.textBase = void 0;
var Configuration_js_1 = __webpack_require__(6);
var ParseOptions_js_1 = __webpack_require__(7);
var Tags_js_1 = __webpack_require__(8);
var BaseItems_js_1 = __webpack_require__(2);
var TextParser_js_1 = __webpack_require__(1);
var TextMacrosMethods_js_1 = __webpack_require__(0);
__webpack_require__(15);
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Configuration = MathJax._.input.tex.Configuration.Configuration;
exports.ConfigurationHandler = MathJax._.input.tex.Configuration.ConfigurationHandler;
exports.ParserConfiguration = MathJax._.input.tex.Configuration.ParserConfiguration;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseOptions["default"];

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.TexError["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.ParseUtil["default"];

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.NodeUtil["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.handleRetriesFor = MathJax._.util.Retries.handleRetriesFor;
exports.retryAfter = MathJax._.util.Retries.retryAfter;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports["default"] = MathJax._.input.tex.base.BaseMethods["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SymbolMap_js_1 = __webpack_require__(16);
var TexConstants_js_1 = __webpack_require__(17);
var TextMacrosMethods_js_1 = __webpack_require__(0);
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TexConstant = MathJax._.input.tex.TexConstants.TexConstant;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(4);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/textmacros/TextMacrosConfiguration.js
var TextMacrosConfiguration = __webpack_require__(5);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/textmacros/TextMacrosMethods.js
var TextMacrosMethods = __webpack_require__(0);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/input/tex/textmacros/TextParser.js
var TextParser = __webpack_require__(1);

// CONCATENATED MODULE: ./lib/textmacros.js




Object(global["combineWithMathJax"])({
  _: {
    input: {
      tex: {
        textmacros: {
          TextMacrosConfiguration: TextMacrosConfiguration,
          TextMacrosMethods: TextMacrosMethods,
          TextParser: TextParser
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./textmacros.js


/***/ })
/******/ ]);
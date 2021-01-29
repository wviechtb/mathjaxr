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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.ComplexityHandler = exports.ComplexityMathDocumentMixin = exports.ComplexityMathItemMixin = void 0;
var MathItem_js_1 = __webpack_require__(7);
var semantic_enrich_js_1 = __webpack_require__(2);
var visitor_js_1 = __webpack_require__(3);
var Options_js_1 = __webpack_require__(5);
MathItem_js_1.newState('COMPLEXITY', 40);
function ComplexityMathItemMixin(BaseMathItem, computeComplexity) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.complexity = function (document, force) {
            if (force === void 0) { force = false; }
            if (this.state() >= MathItem_js_1.STATE.COMPLEXITY)
                return;
            if (!this.isEscaped && (document.options.enableComplexity || force)) {
                this.enrich(document, true);
                computeComplexity(this.root);
            }
            this.state(MathItem_js_1.STATE.COMPLEXITY);
        };
        return class_1;
    }(BaseMathItem));
}
exports.ComplexityMathItemMixin = ComplexityMathItemMixin;
function ComplexityMathDocumentMixin(BaseDocument) {
    var _a;
    return _a = (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                var ProcessBits = _this.constructor.ProcessBits;
                if (!ProcessBits.has('complexity')) {
                    ProcessBits.allocate('complexity');
                }
                var visitorOptions = Options_js_1.selectOptionsFromKeys(_this.options, _this.options.ComplexityVisitor.OPTIONS);
                _this.complexityVisitor = new _this.options.ComplexityVisitor(_this.mmlFactory, visitorOptions);
                var computeComplexity = (function (node) { return _this.complexityVisitor.visitTree(node); });
                _this.options.MathItem =
                    ComplexityMathItemMixin(_this.options.MathItem, computeComplexity);
                return _this;
            }
            class_2.prototype.complexity = function () {
                var e_1, _a;
                if (!this.processed.isSet('complexity')) {
                    if (this.options.enableComplexity) {
                        try {
                            for (var _b = __values(this.math), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var math = _c.value;
                                math.complexity(this);
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
                    this.processed.set('complexity');
                }
                return this;
            };
            class_2.prototype.state = function (state, restore) {
                if (restore === void 0) { restore = false; }
                _super.prototype.state.call(this, state, restore);
                if (state < MathItem_js_1.STATE.COMPLEXITY) {
                    this.processed.clear('complexity');
                }
                return this;
            };
            return class_2;
        }(BaseDocument)),
        _a.OPTIONS = __assign(__assign(__assign({}, BaseDocument.OPTIONS), visitor_js_1.ComplexityVisitor.OPTIONS), { enableComplexity: true, ComplexityVisitor: visitor_js_1.ComplexityVisitor, renderActions: Options_js_1.expandable(__assign(__assign({}, BaseDocument.OPTIONS.renderActions), { complexity: [MathItem_js_1.STATE.COMPLEXITY] })) }),
        _a;
}
exports.ComplexityMathDocumentMixin = ComplexityMathDocumentMixin;
function ComplexityHandler(handler, MmlJax) {
    if (MmlJax === void 0) { MmlJax = null; }
    if (!handler.documentClass.prototype.enrich && MmlJax) {
        handler = semantic_enrich_js_1.EnrichHandler(handler, MmlJax);
    }
    handler.documentClass = ComplexityMathDocumentMixin(handler.documentClass);
    return handler;
}
exports.ComplexityHandler = ComplexityHandler;
//# sourceMappingURL=complexity.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.EnrichedMathItemMixin = MathJax._.a11y['semantic-enrich'].EnrichedMathItemMixin;
exports.EnrichedMathDocumentMixin = MathJax._.a11y['semantic-enrich'].EnrichedMathDocumentMixin;
exports.EnrichHandler = MathJax._.a11y['semantic-enrich'].EnrichHandler;

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
exports.ComplexityVisitor = void 0;
var MmlVisitor_js_1 = __webpack_require__(8);
var collapse_js_1 = __webpack_require__(4);
var Options_js_1 = __webpack_require__(5);
var ComplexityVisitor = (function (_super) {
    __extends(ComplexityVisitor, _super);
    function ComplexityVisitor(factory, options) {
        var _this = _super.call(this, factory) || this;
        _this.complexity = {
            text: .5,
            token: .5,
            child: 1,
            script: .8,
            sqrt: 2,
            subsup: 2,
            underover: 2,
            fraction: 2,
            enclose: 2,
            action: 2,
            phantom: 0,
            xml: 2,
            glyph: 2
        };
        var CLASS = _this.constructor;
        _this.options = Options_js_1.userOptions(Options_js_1.defaultOptions({}, CLASS.OPTIONS), options);
        _this.collapse = new _this.options.Collapse(_this);
        _this.factory = factory;
        return _this;
    }
    ComplexityVisitor.prototype.visitTree = function (node) {
        _super.prototype.visitTree.call(this, node, true);
        if (this.options.makeCollapsible) {
            this.collapse.makeCollapse(node);
        }
    };
    ComplexityVisitor.prototype.visitNode = function (node, save) {
        if (node.attributes.get('data-semantic-complexity'))
            return;
        return _super.prototype.visitNode.call(this, node, save);
    };
    ComplexityVisitor.prototype.visitDefault = function (node, save) {
        var complexity;
        if (node.isToken) {
            var text = node.getText();
            complexity = this.complexity.text * text.length + this.complexity.token;
        }
        else {
            complexity = this.childrenComplexity(node);
        }
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMfracNode = function (node, save) {
        var complexity = this.childrenComplexity(node) * this.complexity.script + this.complexity.fraction;
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMsqrtNode = function (node, save) {
        var complexity = this.childrenComplexity(node) + this.complexity.sqrt;
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMrootNode = function (node, save) {
        var complexity = this.childrenComplexity(node) + this.complexity.sqrt
            - (1 - this.complexity.script) * this.getComplexity(node.childNodes[1]);
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMphantomNode = function (node, save) {
        return this.setComplexity(node, this.complexity.phantom, save);
    };
    ComplexityVisitor.prototype.visitMsNode = function (node, save) {
        var text = node.attributes.get('lquote')
            + node.getText()
            + node.attributes.get('rquote');
        var complexity = text.length * this.complexity.text;
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMsubsupNode = function (node, save) {
        _super.prototype.visitDefault.call(this, node, true);
        var sub = node.childNodes[node.sub];
        var sup = node.childNodes[node.sup];
        var base = node.childNodes[node.base];
        var complexity = Math.max(sub ? this.getComplexity(sub) : 0, sup ? this.getComplexity(sup) : 0) * this.complexity.script;
        complexity += this.complexity.child * ((sub ? 1 : 0) + (sup ? 1 : 0));
        complexity += (base ? this.getComplexity(base) + this.complexity.child : 0);
        complexity += this.complexity.subsup;
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMsubNode = function (node, save) {
        return this.visitMsubsupNode(node, save);
    };
    ComplexityVisitor.prototype.visitMsupNode = function (node, save) {
        return this.visitMsubsupNode(node, save);
    };
    ComplexityVisitor.prototype.visitMunderoverNode = function (node, save) {
        _super.prototype.visitDefault.call(this, node, true);
        var under = node.childNodes[node.under];
        var over = node.childNodes[node.over];
        var base = node.childNodes[node.base];
        var complexity = Math.max(under ? this.getComplexity(under) : 0, over ? this.getComplexity(over) : 0) * this.complexity.script;
        if (base) {
            complexity = Math.max(this.getComplexity(base), complexity);
        }
        complexity += this.complexity.child * ((under ? 1 : 0) + (over ? 1 : 0) + (base ? 1 : 0));
        complexity += this.complexity.underover;
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMunderNode = function (node, save) {
        return this.visitMunderoverNode(node, save);
    };
    ComplexityVisitor.prototype.visitMoverNode = function (node, save) {
        return this.visitMunderoverNode(node, save);
    };
    ComplexityVisitor.prototype.visitMencloseNode = function (node, save) {
        var complexity = this.childrenComplexity(node) + this.complexity.enclose;
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMactionNode = function (node, save) {
        this.childrenComplexity(node);
        var complexity = this.getComplexity(node.selected);
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitMsemanticsNode = function (node, save) {
        var child = node.childNodes[0];
        var complexity = 0;
        if (child) {
            this.visitNode(child, true);
            complexity = this.getComplexity(child);
        }
        return this.setComplexity(node, complexity, save);
    };
    ComplexityVisitor.prototype.visitAnnotationNode = function (node, save) {
        return this.setComplexity(node, this.complexity.xml, save);
    };
    ComplexityVisitor.prototype.visitAnnotation_xmlNode = function (node, save) {
        return this.setComplexity(node, this.complexity.xml, save);
    };
    ComplexityVisitor.prototype.visitMglyphNode = function (node, save) {
        return this.setComplexity(node, this.complexity.glyph, save);
    };
    ComplexityVisitor.prototype.getComplexity = function (node) {
        var collapsed = node.getProperty('collapsedComplexity');
        return (collapsed != null ? collapsed : node.attributes.get('data-semantic-complexity'));
    };
    ComplexityVisitor.prototype.setComplexity = function (node, complexity, save) {
        if (save) {
            if (this.options.identifyCollapsible) {
                complexity = this.collapse.check(node, complexity);
            }
            node.attributes.set('data-semantic-complexity', complexity);
        }
        return complexity;
    };
    ComplexityVisitor.prototype.childrenComplexity = function (node) {
        var e_1, _a;
        _super.prototype.visitDefault.call(this, node, true);
        var complexity = 0;
        try {
            for (var _b = __values(node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                complexity += this.getComplexity(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (node.childNodes.length > 1) {
            complexity += node.childNodes.length * this.complexity.child;
        }
        return complexity;
    };
    ComplexityVisitor.OPTIONS = {
        identifyCollapsible: true,
        makeCollapsible: true,
        Collapse: collapse_js_1.Collapse
    };
    return ComplexityVisitor;
}(MmlVisitor_js_1.MmlVisitor));
exports.ComplexityVisitor = ComplexityVisitor;
//# sourceMappingURL=visitor.js.map

/***/ }),
/* 4 */
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
exports.Collapse = void 0;
var Collapse = (function () {
    function Collapse(visitor) {
        var _this = this;
        this.cutoff = {
            identifier: 3,
            number: 3,
            text: 10,
            infixop: 15,
            relseq: 15,
            multirel: 15,
            fenced: 18,
            bigop: 20,
            integral: 20,
            fraction: 12,
            sqrt: 9,
            root: 12,
            vector: 15,
            matrix: 15,
            cases: 15,
            superscript: 9,
            subscript: 9,
            subsup: 9,
            punctuated: {
                endpunct: Collapse.NOCOLLAPSE,
                startpunct: Collapse.NOCOLLAPSE,
                value: 12
            }
        };
        this.marker = {
            identifier: 'x',
            number: '#',
            text: '...',
            appl: {
                'limit function': 'lim',
                value: 'f()'
            },
            fraction: '/',
            sqrt: '\u221A',
            root: '\u221A',
            superscript: '\u25FD\u02D9',
            subscript: '\u25FD.',
            subsup: '\u25FD:',
            vector: {
                binomial: '(:)',
                determinant: '|:|',
                value: '\u27E8:\u27E9'
            },
            matrix: {
                squarematrix: '[::]',
                rowvector: '\u27E8\u22EF\u27E9',
                columnvector: '\u27E8\u22EE\u27E9',
                determinant: '|::|',
                value: '(::)'
            },
            cases: '{:',
            infixop: {
                addition: '+',
                subtraction: '\u2212',
                multiplication: '\u22C5',
                implicit: '\u22C5',
                value: '+'
            },
            punctuated: {
                text: '...',
                value: ','
            }
        };
        this.collapse = new Map([
            ['fenced', function (node, complexity) {
                    complexity = _this.uncollapseChild(complexity, node, 1);
                    if (complexity > _this.cutoff.fenced && node.attributes.get('data-semantic-role') === 'leftright') {
                        complexity = _this.recordCollapse(node, complexity, _this.getText(node.childNodes[0]) +
                            _this.getText(node.childNodes[node.childNodes.length - 1]));
                    }
                    return complexity;
                }],
            ['appl', function (node, complexity) {
                    if (_this.canUncollapse(node, 2, 2)) {
                        complexity = _this.complexity.visitNode(node, false);
                        var marker = _this.marker.appl;
                        var text = marker[node.attributes.get('data-semantic-role')] || marker.value;
                        complexity = _this.recordCollapse(node, complexity, text);
                    }
                    return complexity;
                }],
            ['sqrt', function (node, complexity) {
                    complexity = _this.uncollapseChild(complexity, node, 0);
                    if (complexity > _this.cutoff.sqrt) {
                        complexity = _this.recordCollapse(node, complexity, _this.marker.sqrt);
                    }
                    return complexity;
                }],
            ['root', function (node, complexity) {
                    complexity = _this.uncollapseChild(complexity, node, 0, 2);
                    if (complexity > _this.cutoff.sqrt) {
                        complexity = _this.recordCollapse(node, complexity, _this.marker.sqrt);
                    }
                    return complexity;
                }],
            ['enclose', function (node, complexity) {
                    if (_this.splitAttribute(node, 'children').length === 1) {
                        var child = _this.canUncollapse(node, 1);
                        if (child) {
                            var marker = child.getProperty('collapse-marker');
                            _this.unrecordCollapse(child);
                            complexity = _this.recordCollapse(node, _this.complexity.visitNode(node, false), marker);
                        }
                    }
                    return complexity;
                }],
            ['bigop', function (node, complexity) {
                    if (complexity > _this.cutoff.bigop || !node.isKind('mo')) {
                        var id = _this.splitAttribute(node, 'content').pop();
                        var op = _this.findChildText(node, id);
                        complexity = _this.recordCollapse(node, complexity, op);
                    }
                    return complexity;
                }],
            ['integral', function (node, complexity) {
                    if (complexity > _this.cutoff.integral || !node.isKind('mo')) {
                        var id = _this.splitAttribute(node, 'content').pop();
                        var op = _this.findChildText(node, id);
                        complexity = _this.recordCollapse(node, complexity, op);
                    }
                    return complexity;
                }],
            ['relseq', function (node, complexity) {
                    if (complexity > _this.cutoff.relseq) {
                        var id = _this.splitAttribute(node, 'content')[0];
                        var text = _this.findChildText(node, id);
                        complexity = _this.recordCollapse(node, complexity, text);
                    }
                    return complexity;
                }],
            ['multirel', function (node, complexity) {
                    if (complexity > _this.cutoff.relseq) {
                        var id = _this.splitAttribute(node, 'content')[0];
                        var text = _this.findChildText(node, id) + '\u22EF';
                        complexity = _this.recordCollapse(node, complexity, text);
                    }
                    return complexity;
                }],
            ['superscript', function (node, complexity) {
                    complexity = _this.uncollapseChild(complexity, node, 0, 2);
                    if (complexity > _this.cutoff.superscript) {
                        complexity = _this.recordCollapse(node, complexity, _this.marker.superscript);
                    }
                    return complexity;
                }],
            ['subscript', function (node, complexity) {
                    complexity = _this.uncollapseChild(complexity, node, 0, 2);
                    if (complexity > _this.cutoff.subscript) {
                        complexity = _this.recordCollapse(node, complexity, _this.marker.subscript);
                    }
                    return complexity;
                }],
            ['subsup', function (node, complexity) {
                    complexity = _this.uncollapseChild(complexity, node, 0, 3);
                    if (complexity > _this.cutoff.subsup) {
                        complexity = _this.recordCollapse(node, complexity, _this.marker.subsup);
                    }
                    return complexity;
                }]
        ]);
        this.idCount = 0;
        this.complexity = visitor;
    }
    Collapse.prototype.check = function (node, complexity) {
        var type = node.attributes.get('data-semantic-type');
        if (this.collapse.has(type)) {
            return this.collapse.get(type).call(this, node, complexity);
        }
        if (this.cutoff.hasOwnProperty(type)) {
            return this.defaultCheck(node, complexity, type);
        }
        return complexity;
    };
    Collapse.prototype.defaultCheck = function (node, complexity, type) {
        var role = node.attributes.get('data-semantic-role');
        var check = this.cutoff[type];
        var cutoff = (typeof check === 'number' ? check : check[role] || check.value);
        if (complexity > cutoff) {
            var marker = this.marker[type] || '??';
            var text = (typeof marker === 'string' ? marker : marker[role] || marker.value);
            complexity = this.recordCollapse(node, complexity, text);
        }
        return complexity;
    };
    Collapse.prototype.recordCollapse = function (node, complexity, text) {
        text = '\u25C2' + text + '\u25B8';
        node.setProperty('collapse-marker', text);
        node.setProperty('collapse-complexity', complexity);
        return text.length * this.complexity.complexity.text;
    };
    Collapse.prototype.unrecordCollapse = function (node) {
        var complexity = node.getProperty('collapse-complexity');
        if (complexity != null) {
            node.attributes.set('data-semantic-complexity', complexity);
            node.removeProperty('collapse-complexity');
            node.removeProperty('collapse-marker');
        }
    };
    Collapse.prototype.canUncollapse = function (node, n, m) {
        if (m === void 0) { m = 1; }
        if (this.splitAttribute(node, 'children').length === m) {
            var mml = (node.childNodes.length === 1 &&
                node.childNodes[0].isInferred ? node.childNodes[0] : node);
            if (mml && mml.childNodes[n]) {
                var child = mml.childNodes[n];
                if (child.getProperty('collapse-marker')) {
                    return child;
                }
            }
        }
        return null;
    };
    Collapse.prototype.uncollapseChild = function (complexity, node, n, m) {
        if (m === void 0) { m = 1; }
        var child = this.canUncollapse(node, n, m);
        if (child) {
            this.unrecordCollapse(child);
            if (child.parent !== node) {
                child.parent.attributes.set('data-semantic-complexity', undefined);
            }
            complexity = this.complexity.visitNode(node, false);
        }
        return complexity;
    };
    Collapse.prototype.splitAttribute = function (node, id) {
        return (node.attributes.get('data-semantic-' + id) || '').split(/,/);
    };
    Collapse.prototype.getText = function (node) {
        var _this = this;
        if (node.isToken)
            return node.getText();
        return node.childNodes.map(function (n) { return _this.getText(n); }).join('');
    };
    Collapse.prototype.findChildText = function (node, id) {
        var child = this.findChild(node, id);
        return this.getText(child.coreMO() || child);
    };
    Collapse.prototype.findChild = function (node, id) {
        var e_1, _a;
        if (!node || node.attributes.get('data-semantic-id') === id)
            return node;
        if (!node.isToken) {
            try {
                for (var _b = __values(node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var mml = _c.value;
                    var child = this.findChild(mml, id);
                    if (child)
                        return child;
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
        return null;
    };
    Collapse.prototype.makeCollapse = function (node) {
        var nodes = [];
        node.walkTree(function (child) {
            if (child.getProperty('collapse-marker')) {
                nodes.push(child);
            }
        });
        this.makeActions(nodes);
    };
    Collapse.prototype.makeActions = function (nodes) {
        var e_2, _a;
        try {
            for (var nodes_1 = __values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
                var node = nodes_1_1.value;
                this.makeAction(node);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Collapse.prototype.makeId = function () {
        return 'mjx-collapse-' + this.idCount++;
    };
    Collapse.prototype.makeAction = function (node) {
        if (node.isKind('math')) {
            node = this.addMrow(node);
        }
        var factory = this.complexity.factory;
        var marker = node.getProperty('collapse-marker');
        var parent = node.parent;
        var maction = factory.create('maction', {
            actiontype: 'toggle',
            selection: 2,
            'data-collapsible': true,
            id: this.makeId(),
            'data-semantic-complexity': node.attributes.get('data-semantic-complexity')
        }, [
            factory.create('mtext', { mathcolor: 'blue' }, [
                factory.create('text').setText(marker)
            ])
        ]);
        maction.inheritAttributesFrom(node);
        node.attributes.set('data-semantic-complexity', node.getProperty('collapse-complexity'));
        node.removeProperty('collapse-marker');
        node.removeProperty('collapse-complexity');
        parent.replaceChild(maction, node);
        maction.appendChild(node);
    };
    Collapse.prototype.addMrow = function (node) {
        var e_3, _a;
        var mrow = this.complexity.factory.create('mrow', null, node.childNodes[0].childNodes);
        node.childNodes[0].setChildren([mrow]);
        var attributes = node.attributes.getAllAttributes();
        try {
            for (var _b = __values(Object.keys(attributes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                if (name_1.substr(0, 14) === 'data-semantic-') {
                    mrow.attributes.set(name_1, attributes[name_1]);
                    delete attributes[name_1];
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        mrow.setProperty('collapse-marker', node.getProperty('collapse-marker'));
        mrow.setProperty('collapse-complexity', node.getProperty('collapse-complexity'));
        node.removeProperty('collapse-marker');
        node.removeProperty('collapse-complexity');
        return mrow;
    };
    Collapse.NOCOLLAPSE = 10000000;
    return Collapse;
}());
exports.Collapse = Collapse;
//# sourceMappingURL=collapse.js.map

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sreReady = MathJax._.a11y.sre.sreReady;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.protoItem = MathJax._.core.MathItem.protoItem;
exports.AbstractMathItem = MathJax._.core.MathItem.AbstractMathItem;
exports.STATE = MathJax._.core.MathItem.STATE;
exports.newState = MathJax._.core.MathItem.newState;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlVisitor = MathJax._.core.MmlTree.MmlVisitor.MmlVisitor;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(0);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/complexity.js
var complexity = __webpack_require__(1);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/complexity/collapse.js
var collapse = __webpack_require__(4);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/complexity/visitor.js
var visitor = __webpack_require__(3);

// EXTERNAL MODULE: ../semantic-enrich/lib/a11y/semantic-enrich.js
var semantic_enrich = __webpack_require__(2);

// EXTERNAL MODULE: ../semantic-enrich/lib/a11y/sre.js
var sre = __webpack_require__(6);

// CONCATENATED MODULE: ./lib/complexity.js






Object(global["combineWithMathJax"])({
  _: {
    a11y: {
      complexity_ts: complexity,
      complexity: {
        collapse: collapse,
        visitor: visitor
      },
      "semantic-enrich": semantic_enrich,
      sre: sre
    }
  }
});
// CONCATENATED MODULE: ./complexity.js




if (MathJax.startup) {
  MathJax.startup.extendHandler(function (handler) {
    return Object(complexity["ComplexityHandler"])(handler);
  });
  Object(global["combineDefaults"])(MathJax.config, 'options', MathJax.config['a11y/complexity'] || {});
}

/***/ })
/******/ ]);
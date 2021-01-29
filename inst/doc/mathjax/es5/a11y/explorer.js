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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sreReady = MathJax._.a11y.sre.sreReady;

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
exports.AbstractExplorer = void 0;
__webpack_require__(0);
var AbstractExplorer = (function () {
    function AbstractExplorer(document, region, node) {
        var _rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            _rest[_i - 3] = arguments[_i];
        }
        this.document = document;
        this.region = region;
        this.node = node;
        this.stoppable = true;
        this.events = [];
        this.highlighter = this.getHighlighter();
        this._active = false;
    }
    AbstractExplorer.stopEvent = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
        if (event.stopImmediatePropagation) {
            event.stopImmediatePropagation();
        }
        else if (event.stopPropagation) {
            event.stopPropagation();
        }
        event.cancelBubble = true;
    };
    AbstractExplorer.create = function (document, region, node) {
        var rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            rest[_i - 3] = arguments[_i];
        }
        var explorer = new (this.bind.apply(this, __spread([void 0, document, region, node], rest)))();
        return explorer;
    };
    AbstractExplorer.prototype.Events = function () {
        return this.events;
    };
    Object.defineProperty(AbstractExplorer.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (flag) {
            this._active = flag;
        },
        enumerable: false,
        configurable: true
    });
    AbstractExplorer.prototype.Attach = function () {
        this.AddEvents();
    };
    AbstractExplorer.prototype.Detach = function () {
        this.RemoveEvents();
    };
    AbstractExplorer.prototype.Start = function () {
        this.highlighter = this.getHighlighter();
        this.active = true;
    };
    AbstractExplorer.prototype.Stop = function () {
        if (this.active) {
            this.region.Clear();
            this.region.Hide();
            this.active = false;
        }
    };
    AbstractExplorer.prototype.AddEvents = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), eventkind = _d[0], eventfunc = _d[1];
                this.node.addEventListener(eventkind, eventfunc);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    AbstractExplorer.prototype.RemoveEvents = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), eventkind = _d[0], eventfunc = _d[1];
                this.node.removeEventListener(eventkind, eventfunc);
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
    AbstractExplorer.prototype.Update = function (force) {
        if (force === void 0) { force = false; }
    };
    AbstractExplorer.prototype.getHighlighter = function () {
        var opts = this.document.options.a11y;
        var foreground = { color: opts.foregroundColor.toLowerCase(),
            alpha: opts.foregroundOpacity / 100 };
        var background = { color: opts.backgroundColor.toLowerCase(),
            alpha: opts.backgroundOpacity / 100 };
        return sre.HighlighterFactory.highlighter(background, foreground, { renderer: this.document.outputJax.name, browser: 'v3' });
    };
    AbstractExplorer.prototype.stopEvent = function (event) {
        if (this.stoppable) {
            AbstractExplorer.stopEvent(event);
        }
    };
    return AbstractExplorer;
}());
exports.AbstractExplorer = AbstractExplorer;
//# sourceMappingURL=Explorer.js.map

/***/ }),
/* 2 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverRegion = exports.LiveRegion = exports.ToolTip = exports.StringRegion = exports.DummyRegion = exports.AbstractRegion = void 0;
var StyleList_js_1 = __webpack_require__(13);
__webpack_require__(0);
var AbstractRegion = (function () {
    function AbstractRegion(document) {
        this.document = document;
        this.CLASS = this.constructor;
        this.AddStyles();
        this.AddElement();
    }
    AbstractRegion.prototype.AddStyles = function () {
        if (this.CLASS.styleAdded) {
            return;
        }
        var node = this.document.adaptor.node('style');
        node.innerHTML = this.CLASS.style.cssText;
        this.document.adaptor.head(this.document.adaptor.document).
            appendChild(node);
        this.CLASS.styleAdded = true;
    };
    AbstractRegion.prototype.AddElement = function () {
        var element = this.document.adaptor.node('div');
        element.classList.add(this.CLASS.className);
        element.style.backgroundColor = 'white';
        this.div = element;
        this.inner = this.document.adaptor.node('div');
        this.div.appendChild(this.inner);
        this.document.adaptor.
            body(this.document.adaptor.document).
            appendChild(this.div);
    };
    AbstractRegion.prototype.Show = function (node, highlighter) {
        this.position(node);
        this.highlight(highlighter);
        this.div.classList.add(this.CLASS.className + '_Show');
    };
    AbstractRegion.prototype.Hide = function () {
        this.div.classList.remove(this.CLASS.className + '_Show');
    };
    AbstractRegion.prototype.stackRegions = function (node) {
        var rect = node.getBoundingClientRect();
        var baseBottom = 0;
        var baseLeft = Number.POSITIVE_INFINITY;
        var regions = this.document.adaptor.document.getElementsByClassName(this.CLASS.className + '_Show');
        for (var i = 0, region = void 0; region = regions[i]; i++) {
            if (region !== this.div) {
                baseBottom = Math.max(region.getBoundingClientRect().bottom, baseBottom);
                baseLeft = Math.min(region.getBoundingClientRect().left, baseLeft);
            }
        }
        var bot = (baseBottom ? baseBottom : rect.bottom + 10) + window.pageYOffset;
        var left = (baseLeft < Number.POSITIVE_INFINITY ? baseLeft : rect.left) + window.pageXOffset;
        this.div.style.top = bot + 'px';
        this.div.style.left = left + 'px';
    };
    AbstractRegion.styleAdded = false;
    return AbstractRegion;
}());
exports.AbstractRegion = AbstractRegion;
var DummyRegion = (function (_super) {
    __extends(DummyRegion, _super);
    function DummyRegion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DummyRegion.prototype.Clear = function () { };
    DummyRegion.prototype.Update = function () { };
    DummyRegion.prototype.Hide = function () { };
    DummyRegion.prototype.Show = function () { };
    DummyRegion.prototype.AddElement = function () { };
    DummyRegion.prototype.AddStyles = function () { };
    DummyRegion.prototype.position = function () { };
    DummyRegion.prototype.highlight = function (_highlighter) { };
    return DummyRegion;
}(AbstractRegion));
exports.DummyRegion = DummyRegion;
var StringRegion = (function (_super) {
    __extends(StringRegion, _super);
    function StringRegion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringRegion.prototype.Clear = function () {
        this.Update('');
        this.inner.style.top = '';
        this.inner.style.backgroundColor = '';
    };
    StringRegion.prototype.Update = function (speech) {
        this.inner.textContent = '';
        this.inner.textContent = speech;
    };
    StringRegion.prototype.position = function (node) {
        this.stackRegions(node);
    };
    StringRegion.prototype.highlight = function (highlighter) {
        var color = highlighter.colorString();
        this.inner.style.backgroundColor = color.background;
        this.inner.style.color = color.foreground;
    };
    return StringRegion;
}(AbstractRegion));
exports.StringRegion = StringRegion;
var ToolTip = (function (_super) {
    __extends(ToolTip, _super);
    function ToolTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolTip.className = 'MJX_ToolTip';
    ToolTip.style = new StyleList_js_1.CssStyles((_a = {},
        _a['.' + ToolTip.className] = {
            position: 'absolute', display: 'inline-block',
            height: '1px', width: '1px'
        },
        _a['.' + ToolTip.className + '_Show'] = {
            width: 'auto', height: 'auto', opacity: 1, 'text-align': 'center',
            'border-radius': '6px', padding: '0px 0px',
            'border-bottom': '1px dotted black', position: 'absolute',
            'z-index': 202
        },
        _a));
    return ToolTip;
}(StringRegion));
exports.ToolTip = ToolTip;
var LiveRegion = (function (_super) {
    __extends(LiveRegion, _super);
    function LiveRegion(document) {
        var _this = _super.call(this, document) || this;
        _this.document = document;
        _this.div.setAttribute('aria-live', 'assertive');
        return _this;
    }
    LiveRegion.className = 'MJX_LiveRegion';
    LiveRegion.style = new StyleList_js_1.CssStyles((_b = {},
        _b['.' + LiveRegion.className] = {
            position: 'absolute', top: '0', height: '1px', width: '1px',
            padding: '1px', overflow: 'hidden'
        },
        _b['.' + LiveRegion.className + '_Show'] = {
            top: '0', position: 'absolute', width: 'auto', height: 'auto',
            padding: '0px 0px', opacity: 1, 'z-index': '202',
            left: 0, right: 0, 'margin': '0 auto',
            'background-color': 'rgba(0, 0, 255, 0.2)', 'box-shadow': '0px 10px 20px #888',
            border: '2px solid #CCCCCC'
        },
        _b));
    return LiveRegion;
}(StringRegion));
exports.LiveRegion = LiveRegion;
var HoverRegion = (function (_super) {
    __extends(HoverRegion, _super);
    function HoverRegion(document) {
        var _this = _super.call(this, document) || this;
        _this.document = document;
        _this.inner.style.lineHeight = '0';
        return _this;
    }
    HoverRegion.prototype.position = function (node) {
        var nodeRect = node.getBoundingClientRect();
        var divRect = this.div.getBoundingClientRect();
        var xCenter = nodeRect.left + (nodeRect.width / 2);
        var left = xCenter - (divRect.width / 2);
        left = (left < 0) ? 0 : left;
        left = left + window.pageXOffset;
        var top;
        switch (this.document.options.a11y.align) {
            case 'top':
                top = nodeRect.top - divRect.height - 10;
                break;
            case 'bottom':
                top = nodeRect.bottom + 10;
                break;
            case 'center':
            default:
                var yCenter = nodeRect.top + (nodeRect.height / 2);
                top = yCenter - (divRect.height / 2);
        }
        top = top + window.pageYOffset;
        top = (top < 0) ? 0 : top;
        this.div.style.top = top + 'px';
        this.div.style.left = left + 'px';
    };
    HoverRegion.prototype.highlight = function (highlighter) {
        if (this.inner.firstChild &&
            !this.inner.firstChild.hasAttribute('sre-highlight')) {
            return;
        }
        var color = highlighter.colorString();
        this.inner.style.backgroundColor = color.background;
        this.inner.style.color = color.foreground;
    };
    HoverRegion.prototype.Show = function (node, highlighter) {
        this.div.style.fontSize = this.document.options.a11y.magnify;
        this.Update(node);
        _super.prototype.Show.call(this, node, highlighter);
    };
    HoverRegion.prototype.Clear = function () {
        this.inner.textContent = '';
        this.inner.style.top = '';
        this.inner.style.backgroundColor = '';
    };
    HoverRegion.prototype.Update = function (node) {
        this.Clear();
        var mjx = this.cloneNode(node);
        this.inner.appendChild(mjx);
    };
    HoverRegion.prototype.cloneNode = function (node) {
        var mjx = node.cloneNode(true);
        if (mjx.nodeName !== 'MJX-CONTAINER') {
            if (mjx.nodeName !== 'g') {
                mjx.style.marginLeft = mjx.style.marginRight = '0';
            }
            var container = node;
            while (container && container.nodeName !== 'MJX-CONTAINER') {
                container = container.parentNode;
            }
            if (mjx.nodeName !== 'MJX-MATH' && mjx.nodeName !== 'svg') {
                var child = container.firstChild;
                mjx = child.cloneNode(false).appendChild(mjx).parentNode;
                if (mjx.nodeName === 'svg') {
                    mjx.firstChild.setAttribute('transform', 'matrix(1 0 0 -1 0 0)');
                    var W = parseFloat(mjx.getAttribute('viewBox').split(/ /)[2]);
                    var w = parseFloat(mjx.getAttribute('width'));
                    var _a = node.getBBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                    mjx.setAttribute('viewBox', [x, -(y + height), width, height].join(' '));
                    mjx.removeAttribute('style');
                    mjx.setAttribute('width', (w / W * width) + 'ex');
                    mjx.setAttribute('height', (w / W * height) + 'ex');
                    container.setAttribute('sre-highlight', 'false');
                }
            }
            mjx = container.cloneNode(false).appendChild(mjx).parentNode;
            mjx.style.margin = '0';
        }
        return mjx;
    };
    HoverRegion.className = 'MJX_HoverRegion';
    HoverRegion.style = new StyleList_js_1.CssStyles((_c = {},
        _c['.' + HoverRegion.className] = {
            position: 'absolute', height: '1px', width: '1px',
            padding: '1px', overflow: 'hidden'
        },
        _c['.' + HoverRegion.className + '_Show'] = {
            position: 'absolute', width: 'max-content', height: 'auto',
            padding: '0px 0px', opacity: 1, 'z-index': '202', 'margin': '0 auto',
            'background-color': 'rgba(0, 0, 255, 0.2)',
            'box-shadow': '0px 10px 20px #888', border: '2px solid #CCCCCC'
        },
        _c));
    return HoverRegion;
}(AbstractRegion));
exports.HoverRegion = HoverRegion;
//# sourceMappingURL=Region.js.map

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
exports.setA11yOption = exports.setA11yOptions = exports.ExplorerHandler = exports.ExplorerMathDocumentMixin = exports.ExplorerMathItemMixin = void 0;
var MathItem_js_1 = __webpack_require__(8);
var semantic_enrich_js_1 = __webpack_require__(9);
var Options_js_1 = __webpack_require__(10);
var SerializedMmlVisitor_js_1 = __webpack_require__(11);
var MJContextMenu_js_1 = __webpack_require__(12);
var ke = __webpack_require__(5);
var me = __webpack_require__(6);
var TreeExplorer_js_1 = __webpack_require__(7);
var Region_js_1 = __webpack_require__(2);
MathItem_js_1.newState('EXPLORER', 160);
function ExplorerMathItemMixin(BaseMathItem, toMathML) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.explorers = {};
            _this.attached = [];
            _this.restart = false;
            _this.refocus = false;
            _this.savedId = null;
            return _this;
        }
        class_1.prototype.explorable = function (document, force) {
            if (force === void 0) { force = false; }
            if (this.state() >= MathItem_js_1.STATE.EXPLORER)
                return;
            if (!this.isEscaped && (document.options.enableExplorer || force)) {
                var node = this.typesetRoot;
                var mml = toMathML(this.root);
                if (this.savedId) {
                    this.typesetRoot.setAttribute('sre-explorer-id', this.savedId);
                    this.savedId = null;
                }
                this.explorers = initExplorers(document, node, mml);
                this.attachExplorers(document);
            }
            this.state(MathItem_js_1.STATE.EXPLORER);
        };
        class_1.prototype.attachExplorers = function (document) {
            var e_1, _a;
            this.attached = [];
            try {
                for (var _b = __values(Object.keys(this.explorers)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    var explorer = this.explorers[key];
                    if (document.options.a11y[key]) {
                        explorer.Attach();
                        this.attached.push(explorer);
                    }
                    else {
                        explorer.Detach();
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
            this.addExplorers(this.attached);
        };
        class_1.prototype.rerender = function (document, start) {
            var e_2, _a;
            if (start === void 0) { start = MathItem_js_1.STATE.RERENDER; }
            this.savedId = this.typesetRoot.getAttribute('sre-explorer-id');
            this.refocus = (window.document.activeElement === this.typesetRoot);
            try {
                for (var _b = __values(this.attached), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var explorer = _c.value;
                    if (explorer.active) {
                        this.restart = true;
                        explorer.Stop();
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
            _super.prototype.rerender.call(this, document, start);
        };
        class_1.prototype.updateDocument = function (document) {
            _super.prototype.updateDocument.call(this, document);
            this.refocus && this.typesetRoot.focus();
            this.restart && this.attached.forEach(function (x) { return x.Start(); });
            this.refocus = this.restart = false;
        };
        class_1.prototype.addExplorers = function (explorers) {
            var e_3, _a;
            if (explorers.length <= 1)
                return;
            var lastKeyExplorer = null;
            try {
                for (var _b = __values(this.attached), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var explorer = _c.value;
                    if (!(explorer instanceof ke.AbstractKeyExplorer))
                        continue;
                    explorer.stoppable = false;
                    lastKeyExplorer = explorer;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (lastKeyExplorer) {
                lastKeyExplorer.stoppable = true;
            }
        };
        return class_1;
    }(BaseMathItem));
}
exports.ExplorerMathItemMixin = ExplorerMathItemMixin;
function ExplorerMathDocumentMixin(BaseDocument) {
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
                if (!ProcessBits.has('explorer')) {
                    ProcessBits.allocate('explorer');
                }
                var visitor = new SerializedMmlVisitor_js_1.SerializedMmlVisitor(_this.mmlFactory);
                var toMathML = (function (node) { return visitor.visitTree(node); });
                _this.options.MathItem = ExplorerMathItemMixin(_this.options.MathItem, toMathML);
                _this.explorerRegions = initExplorerRegions(_this);
                return _this;
            }
            class_2.prototype.explorable = function () {
                var e_4, _a;
                if (!this.processed.isSet('explorer')) {
                    if (this.options.enableExplorer) {
                        try {
                            for (var _b = __values(this.math), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var math = _c.value;
                                math.explorable(this);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                    this.processed.set('explorer');
                }
                return this;
            };
            class_2.prototype.state = function (state, restore) {
                if (restore === void 0) { restore = false; }
                _super.prototype.state.call(this, state, restore);
                if (state < MathItem_js_1.STATE.EXPLORER) {
                    this.processed.clear('explorer');
                }
                return this;
            };
            return class_2;
        }(BaseDocument)),
        _a.OPTIONS = __assign(__assign({}, BaseDocument.OPTIONS), { enrichSpeech: 'shallow', enableExplorer: true, renderActions: Options_js_1.expandable(__assign(__assign({}, BaseDocument.OPTIONS.renderActions), { explorable: [MathItem_js_1.STATE.EXPLORER] })), a11y: {
                align: 'top',
                backgroundColor: 'Blue',
                backgroundOpacity: 20,
                braille: false,
                flame: false,
                foregroundColor: 'Black',
                foregroundOpacity: 100,
                highlight: 'None',
                hover: false,
                infoPrefix: false,
                infoRole: false,
                infoType: false,
                keyMagnifier: false,
                locale: 'en',
                magnification: 'None',
                magnify: '400%',
                mouseMagnifier: false,
                speech: true,
                speechRules: 'mathspeak-default',
                subtitles: true,
                treeColoring: false,
                viewBraille: false
            } }),
        _a;
}
exports.ExplorerMathDocumentMixin = ExplorerMathDocumentMixin;
function ExplorerHandler(handler, MmlJax) {
    if (MmlJax === void 0) { MmlJax = null; }
    if (!handler.documentClass.prototype.enrich && MmlJax) {
        handler = semantic_enrich_js_1.EnrichHandler(handler, MmlJax);
    }
    handler.documentClass = ExplorerMathDocumentMixin(handler.documentClass);
    return handler;
}
exports.ExplorerHandler = ExplorerHandler;
function initExplorerRegions(document) {
    return {
        speechRegion: new Region_js_1.LiveRegion(document),
        brailleRegion: new Region_js_1.LiveRegion(document),
        magnifier: new Region_js_1.HoverRegion(document),
        tooltip1: new Region_js_1.ToolTip(document),
        tooltip2: new Region_js_1.ToolTip(document),
        tooltip3: new Region_js_1.ToolTip(document)
    };
}
var allExplorers = {
    speech: function (doc, node) {
        var _a;
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var explorer = (_a = ke.SpeechExplorer).create.apply(_a, __spread([doc, doc.explorerRegions.speechRegion, node], rest));
        var _b = __read(doc.options.a11y.speechRules.split('-'), 2), domain = _b[0], style = _b[1];
        explorer.speechGenerator.setOptions({
            locale: doc.options.a11y.locale, domain: domain,
            style: style, modality: 'speech', cache: false
        });
        explorer.showRegion = 'subtitles';
        return explorer;
    },
    braille: function (doc, node) {
        var _a;
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var explorer = (_a = ke.SpeechExplorer).create.apply(_a, __spread([doc, doc.explorerRegions.brailleRegion, node], rest));
        explorer.speechGenerator.setOptions({ locale: 'nemeth', domain: 'default',
            style: 'default', modality: 'braille' });
        explorer.showRegion = 'viewBraille';
        return explorer;
    },
    keyMagnifier: function (doc, node) {
        var _a;
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        return (_a = ke.Magnifier).create.apply(_a, __spread([doc, doc.explorerRegions.magnifier, node], rest));
    },
    mouseMagnifier: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.ContentHoverer.create(doc, doc.explorerRegions.magnifier, node, function (x) { return x.hasAttribute('data-semantic-type'); }, function (x) { return x; });
    },
    hover: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.FlameHoverer.create(doc, null, node);
    },
    infoType: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.ValueHoverer.create(doc, doc.explorerRegions.tooltip1, node, function (x) { return x.hasAttribute('data-semantic-type'); }, function (x) { return x.getAttribute('data-semantic-type'); });
    },
    infoRole: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.ValueHoverer.create(doc, doc.explorerRegions.tooltip2, node, function (x) { return x.hasAttribute('data-semantic-role'); }, function (x) { return x.getAttribute('data-semantic-role'); });
    },
    infoPrefix: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return me.ValueHoverer.create(doc, doc.explorerRegions.tooltip3, node, function (x) { return x.hasAttribute('data-semantic-prefix'); }, function (x) { return x.getAttribute('data-semantic-prefix'); });
    },
    flame: function (doc, node) {
        var _rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _rest[_i - 2] = arguments[_i];
        }
        return TreeExplorer_js_1.FlameColorer.create(doc, null, node);
    },
    treeColoring: function (doc, node) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        return TreeExplorer_js_1.TreeColorer.create.apply(TreeExplorer_js_1.TreeColorer, __spread([doc, null, node], rest));
    }
};
function initExplorers(document, node, mml) {
    var e_5, _a;
    var explorers = {};
    try {
        for (var _b = __values(Object.keys(allExplorers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            explorers[key] = allExplorers[key](document, node, mml);
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return explorers;
}
function setA11yOptions(document, options) {
    var e_6, _a;
    for (var key in options) {
        if (document.options.a11y[key] !== undefined) {
            setA11yOption(document, key, options[key]);
        }
    }
    try {
        for (var _b = __values(document.math), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            item.attachExplorers(document);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
exports.setA11yOptions = setA11yOptions;
function setA11yOption(document, option, value) {
    switch (option) {
        case 'magnification':
            switch (value) {
                case 'None':
                    document.options.a11y.magnification = value;
                    document.options.a11y.keyMagnifier = false;
                    document.options.a11y.mouseMagnifier = false;
                    break;
                case 'Keyboard':
                    document.options.a11y.magnification = value;
                    document.options.a11y.keyMagnifier = true;
                    document.options.a11y.mouseMagnifier = false;
                    break;
                case 'Mouse':
                    document.options.a11y.magnification = value;
                    document.options.a11y.keyMagnifier = false;
                    document.options.a11y.mouseMagnifier = true;
                    break;
            }
            break;
        case 'highlight':
            switch (value) {
                case 'None':
                    document.options.a11y.highlight = value;
                    document.options.a11y.hover = false;
                    document.options.a11y.flame = false;
                    break;
                case 'Hover':
                    document.options.a11y.highlight = value;
                    document.options.a11y.hover = true;
                    document.options.a11y.flame = false;
                    break;
                case 'Flame':
                    document.options.a11y.highlight = value;
                    document.options.a11y.hover = false;
                    document.options.a11y.flame = true;
                    break;
            }
            break;
        default:
            document.options.a11y[option] = value;
    }
}
exports.setA11yOption = setA11yOption;
var csPrefsSetting = {};
var csPrefsVariables = function (menu, prefs) {
    var e_7, _a;
    var srVariable = menu.pool.lookup('speechRules');
    var _loop_1 = function (pref) {
        if (csPrefsSetting[pref])
            return "continue";
        menu.factory.get('variable')(menu.factory, {
            name: 'csprf_' + pref,
            setter: function (value) {
                csPrefsSetting[pref] = value;
                srVariable.setValue('clearspeak-' +
                    sre.ClearspeakPreferences.addPreference(sre.Engine.DOMAIN_TO_STYLES['clearspeak'], pref, value));
            },
            getter: function () { return csPrefsSetting[pref] || 'Auto'; }
        }, menu.pool);
    };
    try {
        for (var prefs_1 = __values(prefs), prefs_1_1 = prefs_1.next(); !prefs_1_1.done; prefs_1_1 = prefs_1.next()) {
            var pref = prefs_1_1.value;
            _loop_1(pref);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (prefs_1_1 && !prefs_1_1.done && (_a = prefs_1.return)) _a.call(prefs_1);
        }
        finally { if (e_7) throw e_7.error; }
    }
};
var csSelectionBox = function (menu, locale) {
    var e_8, _a;
    var prefs = sre.ClearspeakPreferences.getLocalePreferences();
    var props = prefs[locale];
    if (!props) {
        var csEntry = menu.findID('Accessibility', 'Speech', 'Clearspeak');
        if (csEntry) {
            csEntry.disable();
        }
        return null;
    }
    csPrefsVariables(menu, Object.keys(props));
    var items = [];
    var _loop_2 = function (prop) {
        items.push({
            'title': prop,
            'values': props[prop].map(function (x) { return x.replace(RegExp('^' + prop + '_'), ''); }),
            'variable': 'csprf_' + prop
        });
    };
    try {
        for (var _b = __values(Object.getOwnPropertyNames(props)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var prop = _c.value;
            _loop_2(prop);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_8) throw e_8.error; }
    }
    var sb = menu.factory.get('selectionBox')(menu.factory, {
        'title': 'Clearspeak Preferences',
        'signature': '',
        'order': 'alphabetic',
        'grid': 'square',
        'selections': items
    }, menu);
    return { 'type': 'command',
        'id': 'ClearspeakPreferences',
        'content': 'Select Preferences', 'action': function () { return sb.post(0, 0); } };
};
var csMenu = function (menu, sub) {
    var locale = menu.pool.lookup('locale').getValue();
    var box = csSelectionBox(menu, locale);
    var items = sre.ClearspeakPreferences.smartPreferences(menu.mathItem, locale);
    if (box) {
        items.splice(2, 0, box);
    }
    return menu.factory.get('subMenu')(menu.factory, {
        items: items,
        id: 'Clearspeak'
    }, sub);
};
MJContextMenu_js_1.MJContextMenu.DynamicSubmenus.set('Clearspeak', csMenu);
var iso = {
    'de': 'German',
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French'
};
var language = function (menu, sub) {
    var e_9, _a;
    var radios = [];
    try {
        for (var _b = __values(sre.Variables.LOCALES), _c = _b.next(); !_c.done; _c = _b.next()) {
            var lang = _c.value;
            if (lang === 'nemeth')
                continue;
            radios.push({ type: 'radio', id: lang,
                content: iso[lang] || lang, variable: 'locale' });
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    radios.sort(function (x, y) { return x.content.localeCompare(y.content, 'en'); });
    return menu.factory.get('subMenu')(menu.factory, {
        items: radios, id: 'Language'
    }, sub);
};
MJContextMenu_js_1.MJContextMenu.DynamicSubmenus.set('A11yLanguage', language);
//# sourceMappingURL=explorer.js.map

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
exports.Magnifier = exports.SpeechExplorer = exports.AbstractKeyExplorer = void 0;
var Explorer_js_1 = __webpack_require__(1);
var sre_js_1 = __webpack_require__(0);
var AbstractKeyExplorer = (function (_super) {
    __extends(AbstractKeyExplorer, _super);
    function AbstractKeyExplorer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = _super.prototype.Events.call(_this).concat([['keydown', _this.KeyDown.bind(_this)],
            ['focusin', _this.FocusIn.bind(_this)],
            ['focusout', _this.FocusOut.bind(_this)]]);
        _this.oldIndex = null;
        return _this;
    }
    AbstractKeyExplorer.prototype.FocusIn = function (_event) {
    };
    AbstractKeyExplorer.prototype.FocusOut = function (_event) {
        this.Stop();
    };
    AbstractKeyExplorer.prototype.Update = function (force) {
        if (force === void 0) { force = false; }
        if (!this.active && !force)
            return;
        this.highlighter.unhighlight();
        this.highlighter.highlight(this.walker.getFocus(true).getNodes());
    };
    AbstractKeyExplorer.prototype.Attach = function () {
        _super.prototype.Attach.call(this);
        this.oldIndex = this.node.tabIndex;
        this.node.tabIndex = 1;
        this.node.setAttribute('role', 'application');
    };
    AbstractKeyExplorer.prototype.Detach = function () {
        this.node.tabIndex = this.oldIndex;
        this.oldIndex = null;
        this.node.removeAttribute('role');
        _super.prototype.Detach.call(this);
    };
    AbstractKeyExplorer.prototype.Stop = function () {
        if (this.active) {
            this.highlighter.unhighlight();
            this.walker.deactivate();
        }
        _super.prototype.Stop.call(this);
    };
    return AbstractKeyExplorer;
}(Explorer_js_1.AbstractExplorer));
exports.AbstractKeyExplorer = AbstractKeyExplorer;
var SpeechExplorer = (function (_super) {
    __extends(SpeechExplorer, _super);
    function SpeechExplorer(document, region, node, mml) {
        var _this = _super.call(this, document, region, node) || this;
        _this.document = document;
        _this.region = region;
        _this.node = node;
        _this.mml = mml;
        _this.showRegion = 'subtitles';
        _this.init = false;
        _this.restarted = false;
        _this.initWalker();
        return _this;
    }
    SpeechExplorer.prototype.Start = function () {
        var _this = this;
        var options = this.getOptions();
        if (!this.init) {
            this.init = true;
            sre_js_1.sreReady().then(function () {
                if (SRE.engineSetup().locale !== options.locale) {
                    SRE.setupEngine({ locale: options.locale });
                }
                sre_js_1.sreReady().then(function () {
                    _this.Speech(_this.walker);
                    _this.Start();
                });
            }).catch(function (error) { return console.log(error.message); });
            return;
        }
        _super.prototype.Start.call(this);
        this.speechGenerator = sre.SpeechGeneratorFactory.generator('Direct');
        this.speechGenerator.setOptions(options);
        this.walker = sre.WalkerFactory.walker('table', this.node, this.speechGenerator, this.highlighter, this.mml);
        this.walker.activate();
        this.Update();
        if (this.document.options.a11y[this.showRegion]) {
            this.region.Show(this.node, this.highlighter);
        }
        this.restarted = true;
    };
    SpeechExplorer.prototype.Update = function (force) {
        if (force === void 0) { force = false; }
        _super.prototype.Update.call(this, force);
        this.region.Update(this.walker.speech());
        var options = this.speechGenerator.getOptions();
        if (options.modality === 'speech') {
            this.document.options.a11y.speechRules = options.domain + '-' + options.style;
        }
    };
    SpeechExplorer.prototype.Speech = function (walker) {
        walker.speech();
        this.node.setAttribute('hasspeech', 'true');
        this.Update();
        if (this.restarted && this.document.options.a11y[this.showRegion]) {
            this.region.Show(this.node, this.highlighter);
        }
    };
    SpeechExplorer.prototype.KeyDown = function (event) {
        var code = event.keyCode;
        if (code === 27) {
            this.Stop();
            this.stopEvent(event);
            return;
        }
        if (this.active) {
            this.Move(code);
            this.stopEvent(event);
            return;
        }
        if (code === 32 && event.shiftKey || code === 13) {
            this.Start();
            this.stopEvent(event);
        }
    };
    SpeechExplorer.prototype.Move = function (key) {
        this.walker.move(key);
        this.Update();
    };
    SpeechExplorer.prototype.initWalker = function () {
        this.speechGenerator = sre.SpeechGeneratorFactory.generator('Tree');
        var dummy = sre.WalkerFactory.walker('dummy', this.node, this.speechGenerator, this.highlighter, this.mml);
        this.walker = dummy;
    };
    SpeechExplorer.prototype.getOptions = function () {
        var options = this.speechGenerator.getOptions();
        var _a = __read(this.document.options.a11y.speechRules.split('-'), 2), domain = _a[0], style = _a[1];
        if (options.modality === 'speech' &&
            (options.locale !== this.document.options.a11y.locale ||
                options.domain !== domain || options.style !== style)) {
            options.domain = domain;
            options.style = style;
            options.locale = this.document.options.a11y.locale;
            this.walker.update(options);
        }
        return options;
    };
    return SpeechExplorer;
}(AbstractKeyExplorer));
exports.SpeechExplorer = SpeechExplorer;
var Magnifier = (function (_super) {
    __extends(Magnifier, _super);
    function Magnifier(document, region, node, mml) {
        var _this = _super.call(this, document, region, node) || this;
        _this.document = document;
        _this.region = region;
        _this.node = node;
        _this.mml = mml;
        _this.walker = sre.WalkerFactory.walker('table', _this.node, sre.SpeechGeneratorFactory.generator('Dummy'), _this.highlighter, _this.mml);
        return _this;
    }
    Magnifier.prototype.Update = function (force) {
        if (force === void 0) { force = false; }
        _super.prototype.Update.call(this, force);
        this.showFocus();
    };
    Magnifier.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.region.Show(this.node, this.highlighter);
        this.walker.activate();
        this.Update();
    };
    Magnifier.prototype.showFocus = function () {
        var node = this.walker.getFocus().getNodes()[0];
        this.region.Show(node, this.highlighter);
    };
    Magnifier.prototype.Move = function (key) {
        var result = this.walker.move(key);
        if (result) {
            this.Update();
        }
    };
    Magnifier.prototype.KeyDown = function (event) {
        var code = event.keyCode;
        if (code === 27) {
            this.Stop();
            this.stopEvent(event);
            return;
        }
        if (this.active && code !== 13) {
            this.Move(code);
            this.stopEvent(event);
            return;
        }
        if (code === 32 && event.shiftKey || code === 13) {
            this.Start();
            this.stopEvent(event);
        }
    };
    return Magnifier;
}(AbstractKeyExplorer));
exports.Magnifier = Magnifier;
//# sourceMappingURL=KeyExplorer.js.map

/***/ }),
/* 6 */
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
exports.FlameHoverer = exports.ContentHoverer = exports.ValueHoverer = exports.Hoverer = exports.AbstractMouseExplorer = void 0;
var Region_js_1 = __webpack_require__(2);
var Explorer_js_1 = __webpack_require__(1);
__webpack_require__(0);
var AbstractMouseExplorer = (function (_super) {
    __extends(AbstractMouseExplorer, _super);
    function AbstractMouseExplorer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = _super.prototype.Events.call(_this).concat([
            ['mouseover', _this.MouseOver.bind(_this)],
            ['mouseout', _this.MouseOut.bind(_this)]
        ]);
        return _this;
    }
    AbstractMouseExplorer.prototype.MouseOver = function (_event) {
        this.Start();
    };
    AbstractMouseExplorer.prototype.MouseOut = function (_event) {
        this.Stop();
    };
    return AbstractMouseExplorer;
}(Explorer_js_1.AbstractExplorer));
exports.AbstractMouseExplorer = AbstractMouseExplorer;
var Hoverer = (function (_super) {
    __extends(Hoverer, _super);
    function Hoverer(document, region, node, nodeQuery, nodeAccess) {
        var _this = _super.call(this, document, region, node) || this;
        _this.document = document;
        _this.region = region;
        _this.node = node;
        _this.nodeQuery = nodeQuery;
        _this.nodeAccess = nodeAccess;
        return _this;
    }
    Hoverer.prototype.MouseOut = function (event) {
        if (event.clientX === this.coord[0] &&
            event.clientY === this.coord[1]) {
            return;
        }
        this.highlighter.unhighlight();
        this.region.Hide();
        _super.prototype.MouseOut.call(this, event);
    };
    Hoverer.prototype.MouseOver = function (event) {
        _super.prototype.MouseOver.call(this, event);
        var target = event.target;
        this.coord = [event.clientX, event.clientY];
        var _a = __read(this.getNode(target), 2), node = _a[0], kind = _a[1];
        if (!node) {
            return;
        }
        this.highlighter.unhighlight();
        this.highlighter.highlight([node]);
        this.region.Update(kind);
        this.region.Show(node, this.highlighter);
    };
    Hoverer.prototype.getNode = function (node) {
        var original = node;
        while (node && node !== this.node) {
            if (this.nodeQuery(node)) {
                return [node, this.nodeAccess(node)];
            }
            node = node.parentNode;
        }
        node = original;
        while (node) {
            if (this.nodeQuery(node)) {
                return [node, this.nodeAccess(node)];
            }
            var child = node.childNodes[0];
            node = (child && child.tagName === 'defs') ?
                node.childNodes[1] : child;
        }
        return [null, null];
    };
    return Hoverer;
}(AbstractMouseExplorer));
exports.Hoverer = Hoverer;
var ValueHoverer = (function (_super) {
    __extends(ValueHoverer, _super);
    function ValueHoverer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValueHoverer;
}(Hoverer));
exports.ValueHoverer = ValueHoverer;
var ContentHoverer = (function (_super) {
    __extends(ContentHoverer, _super);
    function ContentHoverer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContentHoverer;
}(Hoverer));
exports.ContentHoverer = ContentHoverer;
var FlameHoverer = (function (_super) {
    __extends(FlameHoverer, _super);
    function FlameHoverer(document, _ignore, node) {
        var _this = _super.call(this, document, new Region_js_1.DummyRegion(document), node, function (x) { return _this.highlighter.isMactionNode(x); }, function () { }) || this;
        _this.document = document;
        _this.node = node;
        return _this;
    }
    return FlameHoverer;
}(Hoverer));
exports.FlameHoverer = FlameHoverer;
//# sourceMappingURL=MouseExplorer.js.map

/***/ }),
/* 7 */
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
exports.TreeColorer = exports.FlameColorer = exports.AbstractTreeExplorer = void 0;
var Explorer_js_1 = __webpack_require__(1);
__webpack_require__(0);
var AbstractTreeExplorer = (function (_super) {
    __extends(AbstractTreeExplorer, _super);
    function AbstractTreeExplorer(document, region, node, mml) {
        var _this = _super.call(this, document, null, node) || this;
        _this.document = document;
        _this.region = region;
        _this.node = node;
        _this.mml = mml;
        _this.stoppable = false;
        return _this;
    }
    AbstractTreeExplorer.prototype.Attach = function () {
        _super.prototype.Attach.call(this);
        this.Start();
    };
    AbstractTreeExplorer.prototype.Detach = function () {
        this.Stop();
        _super.prototype.Detach.call(this);
    };
    return AbstractTreeExplorer;
}(Explorer_js_1.AbstractExplorer));
exports.AbstractTreeExplorer = AbstractTreeExplorer;
var FlameColorer = (function (_super) {
    __extends(FlameColorer, _super);
    function FlameColorer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlameColorer.prototype.Start = function () {
        if (this.active)
            return;
        this.active = true;
        this.highlighter.highlightAll(this.node);
    };
    FlameColorer.prototype.Stop = function () {
        if (this.active) {
            this.highlighter.unhighlightAll(this.node);
        }
        this.active = false;
    };
    return FlameColorer;
}(AbstractTreeExplorer));
exports.FlameColorer = FlameColorer;
var TreeColorer = (function (_super) {
    __extends(TreeColorer, _super);
    function TreeColorer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeColorer.prototype.Start = function () {
        if (this.active)
            return;
        this.active = true;
        var generator = sre.SpeechGeneratorFactory.generator('Color');
        if (!this.node.hasAttribute('hasforegroundcolor')) {
            generator.generateSpeech(this.node, this.mml);
            this.node.setAttribute('hasforegroundcolor', 'true');
        }
        this.highlighter.colorizeAll(this.node);
    };
    TreeColorer.prototype.Stop = function () {
        if (this.active) {
            this.highlighter.uncolorizeAll(this.node);
        }
        this.active = false;
    };
    return TreeColorer;
}(AbstractTreeExplorer));
exports.TreeColorer = TreeColorer;
//# sourceMappingURL=TreeExplorer.js.map

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.EnrichedMathItemMixin = MathJax._.a11y['semantic-enrich'].EnrichedMathItemMixin;
exports.EnrichedMathDocumentMixin = MathJax._.a11y['semantic-enrich'].EnrichedMathDocumentMixin;
exports.EnrichHandler = MathJax._.a11y['semantic-enrich'].EnrichHandler;

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


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.DATAMJX = MathJax._.core.MmlTree.SerializedMmlVisitor.DATAMJX;
exports.toEntity = MathJax._.core.MmlTree.SerializedMmlVisitor.toEntity;
exports.SerializedMmlVisitor = MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MJContextMenu = MathJax._.ui.menu.MJContextMenu.MJContextMenu;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.CssStyles = MathJax._.util.StyleList.CssStyles;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(4);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/explorer.js
var explorer = __webpack_require__(3);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/explorer/Explorer.js
var Explorer = __webpack_require__(1);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/explorer/KeyExplorer.js
var KeyExplorer = __webpack_require__(5);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/explorer/MouseExplorer.js
var MouseExplorer = __webpack_require__(6);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/explorer/Region.js
var Region = __webpack_require__(2);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/explorer/TreeExplorer.js
var TreeExplorer = __webpack_require__(7);

// EXTERNAL MODULE: ../semantic-enrich/lib/a11y/sre.js
var sre = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/explorer.js








Object(global["combineWithMathJax"])({
  _: {
    a11y: {
      explorer_ts: explorer,
      explorer: {
        Explorer: Explorer,
        KeyExplorer: KeyExplorer,
        MouseExplorer: MouseExplorer,
        Region: Region,
        TreeExplorer: TreeExplorer
      },
      sre: sre
    }
  }
});
// CONCATENATED MODULE: ./explorer.js




if (MathJax.startup) {
  MathJax.startup.extendHandler(function (handler) {
    return Object(explorer["ExplorerHandler"])(handler);
  });
}

/***/ })
/******/ ]);
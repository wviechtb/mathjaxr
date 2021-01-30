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
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHTMLWrapper = exports.SPACE = exports.FONTSIZE = void 0;
var LENGTHS = __webpack_require__(2);
var Wrapper_js_1 = __webpack_require__(21);
var BBox_js_1 = __webpack_require__(1);
exports.FONTSIZE = {
    '70.7%': 's',
    '70%': 's',
    '50%': 'ss',
    '60%': 'Tn',
    '85%': 'sm',
    '120%': 'lg',
    '144%': 'Lg',
    '173%': 'LG',
    '207%': 'hg',
    '249%': 'HG'
};
exports.SPACE = (_a = {},
    _a[LENGTHS.em(2 / 18)] = '1',
    _a[LENGTHS.em(3 / 18)] = '2',
    _a[LENGTHS.em(4 / 18)] = '3',
    _a[LENGTHS.em(5 / 18)] = '4',
    _a[LENGTHS.em(6 / 18)] = '5',
    _a);
var CHTMLWrapper = (function (_super) {
    __extends(CHTMLWrapper, _super);
    function CHTMLWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chtml = null;
        return _this;
    }
    CHTMLWrapper.prototype.toCHTML = function (parent) {
        var e_1, _a;
        var chtml = this.standardCHTMLnode(parent);
        try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                child.toCHTML(chtml);
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
    CHTMLWrapper.prototype.standardCHTMLnode = function (parent) {
        this.markUsed();
        var chtml = this.createCHTMLnode(parent);
        this.handleStyles();
        this.handleVariant();
        this.handleScale();
        this.handleColor();
        this.handleSpace();
        this.handleAttributes();
        this.handlePWidth();
        return chtml;
    };
    CHTMLWrapper.prototype.markUsed = function () {
        this.constructor.used = true;
    };
    CHTMLWrapper.prototype.createCHTMLnode = function (parent) {
        var href = this.node.attributes.get('href');
        if (href) {
            parent = this.adaptor.append(parent, this.html('a', { href: href }));
        }
        this.chtml = this.adaptor.append(parent, this.html('mjx-' + this.node.kind));
        return this.chtml;
    };
    CHTMLWrapper.prototype.handleStyles = function () {
        if (!this.styles)
            return;
        var styles = this.styles.cssText;
        if (styles) {
            this.adaptor.setAttribute(this.chtml, 'style', styles);
            var family = this.styles.get('font-family');
            if (family) {
                this.adaptor.setStyle(this.chtml, 'font-family', 'MJXZERO, ' + family);
            }
        }
    };
    CHTMLWrapper.prototype.handleVariant = function () {
        if (this.node.isToken && this.variant !== '-explicitFont') {
            this.adaptor.setAttribute(this.chtml, 'class', (this.font.getVariant(this.variant) || this.font.getVariant('normal')).classes);
        }
    };
    CHTMLWrapper.prototype.handleScale = function () {
        this.setScale(this.chtml, this.bbox.rscale);
    };
    CHTMLWrapper.prototype.setScale = function (chtml, rscale) {
        var scale = (Math.abs(rscale - 1) < .001 ? 1 : rscale);
        if (chtml && scale !== 1) {
            var size = this.percent(scale);
            if (exports.FONTSIZE[size]) {
                this.adaptor.setAttribute(chtml, 'size', exports.FONTSIZE[size]);
            }
            else {
                this.adaptor.setStyle(chtml, 'fontSize', size);
            }
        }
        return chtml;
    };
    CHTMLWrapper.prototype.handleSpace = function () {
        var e_2, _a;
        try {
            for (var _b = __values([[this.bbox.L, 'space', 'marginLeft'],
                [this.bbox.R, 'rspace', 'marginRight']]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var data = _c.value;
                var _d = __read(data, 3), dimen = _d[0], name_1 = _d[1], margin = _d[2];
                if (dimen) {
                    var space = this.em(dimen);
                    if (exports.SPACE[space]) {
                        this.adaptor.setAttribute(this.chtml, name_1, exports.SPACE[space]);
                    }
                    else {
                        this.adaptor.setStyle(this.chtml, margin, space);
                    }
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
    CHTMLWrapper.prototype.handleColor = function () {
        var attributes = this.node.attributes;
        var mathcolor = attributes.getExplicit('mathcolor');
        var color = attributes.getExplicit('color');
        var mathbackground = attributes.getExplicit('mathbackground');
        var background = attributes.getExplicit('background');
        if (mathcolor || color) {
            this.adaptor.setStyle(this.chtml, 'color', mathcolor || color);
        }
        if (mathbackground || background) {
            this.adaptor.setStyle(this.chtml, 'backgroundColor', mathbackground || background);
        }
    };
    CHTMLWrapper.prototype.handleAttributes = function () {
        var e_3, _a, e_4, _b;
        var attributes = this.node.attributes;
        var defaults = attributes.getAllDefaults();
        var skip = CHTMLWrapper.skipAttributes;
        try {
            for (var _c = __values(attributes.getExplicitNames()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var name_2 = _d.value;
                if (skip[name_2] === false || (!(name_2 in defaults) && !skip[name_2] &&
                    !this.adaptor.hasAttribute(this.chtml, name_2))) {
                    this.adaptor.setAttribute(this.chtml, name_2, attributes.getExplicit(name_2));
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (attributes.get('class')) {
            var names = attributes.get('class').trim().split(/ +/);
            try {
                for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
                    var name_3 = names_1_1.value;
                    this.adaptor.addClass(this.chtml, name_3);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (names_1_1 && !names_1_1.done && (_b = names_1.return)) _b.call(names_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    };
    CHTMLWrapper.prototype.handlePWidth = function () {
        if (this.bbox.pwidth) {
            if (this.bbox.pwidth === BBox_js_1.BBox.fullWidth) {
                this.adaptor.setAttribute(this.chtml, 'width', 'full');
            }
            else {
                this.adaptor.setStyle(this.chtml, 'width', this.bbox.pwidth);
            }
        }
    };
    CHTMLWrapper.prototype.setIndent = function (chtml, align, shift) {
        var adaptor = this.adaptor;
        if (align === 'center' || align === 'left') {
            var L = this.getBBox().L;
            adaptor.setStyle(chtml, 'margin-left', this.em(shift + L));
        }
        if (align === 'center' || align === 'right') {
            var R = this.getBBox().R;
            adaptor.setStyle(chtml, 'margin-right', this.em(-shift + R));
        }
    };
    CHTMLWrapper.prototype.drawBBox = function () {
        var _a = this.getBBox(), w = _a.w, h = _a.h, d = _a.d, R = _a.R;
        var box = this.html('mjx-box', { style: {
                opacity: .25, 'margin-left': this.em(-w - R)
            } }, [
            this.html('mjx-box', { style: {
                    height: this.em(h),
                    width: this.em(w),
                    'background-color': 'red'
                } }),
            this.html('mjx-box', { style: {
                    height: this.em(d),
                    width: this.em(w),
                    'margin-left': this.em(-w),
                    'vertical-align': this.em(-d),
                    'background-color': 'green'
                } })
        ]);
        var node = this.chtml || this.parent.chtml;
        var size = this.adaptor.getAttribute(node, 'size');
        if (size) {
            this.adaptor.setAttribute(box, 'size', size);
        }
        var fontsize = this.adaptor.getStyle(node, 'fontSize');
        if (fontsize) {
            this.adaptor.setStyle(box, 'fontSize', fontsize);
        }
        this.adaptor.append(this.adaptor.parent(node), box);
        this.adaptor.setStyle(node, 'backgroundColor', '#FFEE00');
    };
    CHTMLWrapper.prototype.html = function (type, def, content) {
        if (def === void 0) { def = {}; }
        if (content === void 0) { content = []; }
        return this.jax.html(type, def, content);
    };
    CHTMLWrapper.prototype.text = function (text) {
        return this.jax.text(text);
    };
    CHTMLWrapper.prototype.char = function (n) {
        return this.font.charSelector(n).substr(1);
    };
    CHTMLWrapper.kind = 'unknown';
    CHTMLWrapper.autoStyle = true;
    CHTMLWrapper.used = false;
    return CHTMLWrapper;
}(Wrapper_js_1.CommonWrapper));
exports.CHTMLWrapper = CHTMLWrapper;
//# sourceMappingURL=Wrapper.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.BBoxStyleAdjust = MathJax._.util.BBox.BBoxStyleAdjust;
exports.BBox = MathJax._.util.BBox.BBox;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.BIGDIMEN = MathJax._.util.lengths.BIGDIMEN;
exports.UNITS = MathJax._.util.lengths.UNITS;
exports.RELUNITS = MathJax._.util.lengths.RELUNITS;
exports.MATHSPACE = MathJax._.util.lengths.MATHSPACE;
exports.length2em = MathJax._.util.lengths.length2em;
exports.percent = MathJax._.util.lengths.percent;
exports.em = MathJax._.util.lengths.em;
exports.emRounded = MathJax._.util.lengths.emRounded;
exports.px = MathJax._.util.lengths.px;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sortLength = MathJax._.util.string.sortLength;
exports.quotePattern = MathJax._.util.string.quotePattern;
exports.unicodeChars = MathJax._.util.string.unicodeChars;
exports.isPercent = MathJax._.util.string.isPercent;
exports.split = MathJax._.util.string.split;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.FontData = exports.NOSTRETCH = exports.H = exports.V = void 0;
exports.V = 1;
exports.H = 2;
exports.NOSTRETCH = { dir: 0 };
var FontData = (function () {
    function FontData() {
        var e_1, _a;
        this.variant = {};
        this.delimiters = {};
        this.cssFontMap = {};
        this.remapChars = {};
        var CLASS = this.constructor;
        this.params = __assign({}, CLASS.defaultParams);
        this.sizeVariants = __spread(CLASS.defaultSizeVariants);
        this.cssFontMap = __assign({}, CLASS.defaultCssFonts);
        this.cssFamilyPrefix = CLASS.defaultCssFamilyPrefix;
        this.createVariants(CLASS.defaultVariants);
        this.defineDelimiters(CLASS.defaultDelimiters);
        try {
            for (var _b = __values(Object.keys(CLASS.defaultChars)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_1 = _c.value;
                this.defineChars(name_1, CLASS.defaultChars[name_1]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.defineRemap('accent', CLASS.defaultAccentMap);
        this.defineRemap('mo', CLASS.defaultMoMap);
        this.defineRemap('mn', CLASS.defaultMnMap);
    }
    FontData.charOptions = function (font, n) {
        var char = font[n];
        if (char.length === 3) {
            char[3] = {};
        }
        return char[3];
    };
    FontData.prototype.createVariant = function (name, inherit, link) {
        if (inherit === void 0) { inherit = null; }
        if (link === void 0) { link = null; }
        var variant = {
            linked: [],
            chars: (inherit ? Object.create(this.variant[inherit].chars) : {})
        };
        if (link && this.variant[link]) {
            Object.assign(variant.chars, this.variant[link].chars);
            this.variant[link].linked.push(variant.chars);
            variant.chars = Object.create(variant.chars);
        }
        this.remapSmpChars(variant.chars, name);
        this.variant[name] = variant;
    };
    FontData.prototype.remapSmpChars = function (chars, name) {
        var e_2, _a, e_3, _b;
        var CLASS = this.constructor;
        if (CLASS.VariantSmp[name]) {
            var SmpRemap = CLASS.SmpRemap;
            var SmpGreek = [null, null, CLASS.SmpRemapGreekU, CLASS.SmpRemapGreekL];
            try {
                for (var _c = __values(CLASS.SmpRanges), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 3), i = _e[0], lo = _e[1], hi = _e[2];
                    var base = CLASS.VariantSmp[name][i];
                    if (!base)
                        continue;
                    for (var n = lo; n <= hi; n++) {
                        if (n === 0x3A2)
                            continue;
                        var smp = base + n - lo;
                        chars[n] = this.smpChar(SmpRemap[smp] || smp);
                    }
                    if (SmpGreek[i]) {
                        try {
                            for (var _f = (e_3 = void 0, __values(Object.keys(SmpGreek[i]).map(function (x) { return parseInt(x); }))), _g = _f.next(); !_g.done; _g = _f.next()) {
                                var n = _g.value;
                                chars[n] = this.smpChar(base + SmpGreek[i][n]);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (name === 'bold') {
            chars[0x3DC] = this.smpChar(0x1D7CA);
            chars[0x3DD] = this.smpChar(0x1D7CB);
        }
    };
    FontData.prototype.smpChar = function (n) {
        return [, , , { smp: n }];
    };
    FontData.prototype.createVariants = function (variants) {
        var e_4, _a;
        try {
            for (var variants_1 = __values(variants), variants_1_1 = variants_1.next(); !variants_1_1.done; variants_1_1 = variants_1.next()) {
                var variant = variants_1_1.value;
                this.createVariant(variant[0], variant[1], variant[2]);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (variants_1_1 && !variants_1_1.done && (_a = variants_1.return)) _a.call(variants_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    FontData.prototype.defineChars = function (name, chars) {
        var e_5, _a;
        var variant = this.variant[name];
        Object.assign(variant.chars, chars);
        try {
            for (var _b = __values(variant.linked), _c = _b.next(); !_c.done; _c = _b.next()) {
                var link = _c.value;
                Object.assign(link, chars);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    FontData.prototype.defineDelimiters = function (delims) {
        Object.assign(this.delimiters, delims);
    };
    FontData.prototype.defineRemap = function (name, remap) {
        if (!this.remapChars.hasOwnProperty(name)) {
            this.remapChars[name] = {};
        }
        Object.assign(this.remapChars[name], remap);
    };
    FontData.prototype.getDelimiter = function (n) {
        return this.delimiters[n];
    };
    FontData.prototype.getSizeVariant = function (n, i) {
        if (this.delimiters[n].variants) {
            i = this.delimiters[n].variants[i];
        }
        return this.sizeVariants[i];
    };
    FontData.prototype.getChar = function (name, n) {
        return this.variant[name].chars[n];
    };
    FontData.prototype.getVariant = function (name) {
        return this.variant[name];
    };
    FontData.prototype.getCssFont = function (variant) {
        return this.cssFontMap[variant] || ['serif', false, false];
    };
    FontData.prototype.getFamily = function (family) {
        return (this.cssFamilyPrefix ? this.cssFamilyPrefix + ', ' + family : family);
    };
    FontData.prototype.getRemappedChar = function (name, c) {
        var map = this.remapChars[name] || {};
        return map[c];
    };
    FontData.OPTIONS = {};
    FontData.defaultVariants = [
        ['normal'],
        ['bold', 'normal'],
        ['italic', 'normal'],
        ['bold-italic', 'italic', 'bold'],
        ['double-struck', 'bold'],
        ['fraktur', 'normal'],
        ['bold-fraktur', 'bold', 'fraktur'],
        ['script', 'italic'],
        ['bold-script', 'bold-italic', 'script'],
        ['sans-serif', 'normal'],
        ['bold-sans-serif', 'bold', 'sans-serif'],
        ['sans-serif-italic', 'italic', 'sans-serif'],
        ['sans-serif-bold-italic', 'bold-italic', 'bold-sans-serif'],
        ['monospace', 'normal']
    ];
    FontData.defaultCssFonts = {
        normal: ['serif', false, false],
        bold: ['serif', false, true],
        italic: ['serif', true, false],
        'bold-italic': ['serif', true, true],
        'double-struck': ['serif', false, true],
        fraktur: ['serif', false, false],
        'bold-fraktur': ['serif', false, true],
        script: ['cursive', false, false],
        'bold-script': ['cursive', false, true],
        'sans-serif': ['sans-serif', false, false],
        'bold-sans-serif': ['sans-serif', false, true],
        'sans-serif-italic': ['sans-serif', true, false],
        'sans-serif-bold-italic': ['sans-serif', true, true],
        monospace: ['monospace', false, false]
    };
    FontData.defaultCssFamilyPrefix = '';
    FontData.VariantSmp = {
        bold: [0x1D400, 0x1D41A, 0x1D6A8, 0x1D6C2, 0x1D7CE],
        italic: [0x1D434, 0x1D44E, 0x1D6E2, 0x1D6FC],
        'bold-italic': [0x1D468, 0x1D482, 0x1D71C, 0x1D736],
        script: [0x1D49C, 0x1D4B6],
        'bold-script': [0x1D4D0, 0x1D4EA],
        fraktur: [0x1D504, 0x1D51E],
        'double-struck': [0x1D538, 0x1D552, , , 0x1D7D8],
        'bold-fraktur': [0x1D56C, 0x1D586],
        'sans-serif': [0x1D5A0, 0x1D5BA, , , 0x1D7E2],
        'bold-sans-serif': [0x1D5D4, 0x1D5EE, 0x1D756, 0x1D770, 0x1D7EC],
        'sans-serif-italic': [0x1D608, 0x1D622],
        'sans-serif-bold-italic': [0x1D63C, 0x1D656, 0x1D790, 0x1D7AA],
        'monospace': [0x1D670, 0x1D68A, , , 0x1D7F6]
    };
    FontData.SmpRanges = [
        [0, 0x41, 0x5A],
        [1, 0x61, 0x7A],
        [2, 0x391, 0x3A9],
        [3, 0x3B1, 0x3C9],
        [4, 0x30, 0x39]
    ];
    FontData.SmpRemap = {
        0x1D455: 0x210E,
        0x1D49D: 0x212C,
        0x1D4A0: 0x2130,
        0x1D4A1: 0x2131,
        0x1D4A3: 0x210B,
        0x1D4A4: 0x2110,
        0x1D4A7: 0x2112,
        0x1D4A8: 0x2133,
        0x1D4AD: 0x211B,
        0x1D4BA: 0x212F,
        0x1D4BC: 0x210A,
        0x1D4C4: 0x2134,
        0x1D506: 0x212D,
        0x1D50B: 0x210C,
        0x1D50C: 0x2111,
        0x1D515: 0x211C,
        0x1D51D: 0x2128,
        0x1D53A: 0x2102,
        0x1D53F: 0x210D,
        0x1D545: 0x2115,
        0x1D547: 0x2119,
        0x1D548: 0x211A,
        0x1D549: 0x211D,
        0x1D551: 0x2124,
    };
    FontData.SmpRemapGreekU = {
        0x2207: 0x19,
        0x03F4: 0x11
    };
    FontData.SmpRemapGreekL = {
        0x3D1: 0x1B,
        0x3D5: 0x1D,
        0x3D6: 0x1F,
        0x3F0: 0x1C,
        0x3F1: 0x1E,
        0x3F5: 0x1A,
        0x2202: 0x19
    };
    FontData.defaultAccentMap = {
        0x0300: '\u02CB',
        0x0301: '\u02CA',
        0x0302: '\u02C6',
        0x0303: '\u02DC',
        0x0304: '\u02C9',
        0x0306: '\u02D8',
        0x0307: '\u02D9',
        0x0308: '\u00A8',
        0x030A: '\u02DA',
        0x030C: '\u02C7',
        0x2192: '\u20D7',
        0x2032: '\'',
        0x2033: '\'\'',
        0x2034: '\'\'\'',
        0x2035: '`',
        0x2036: '``',
        0x2037: '```',
        0x2057: '\'\'\'\'',
        0x20D0: '\u21BC',
        0x20D1: '\u21C0',
        0x20D6: '\u2190',
        0x20E1: '\u2194',
        0x20F0: '*',
        0x20DB: '...',
        0x20DC: '....',
        0x20EC: '\u21C1',
        0x20ED: '\u21BD',
        0x20EE: '\u2190',
        0x20EF: '\u2192'
    };
    FontData.defaultMoMap = {
        0x002D: '\u2212'
    };
    FontData.defaultMnMap = {
        0x002D: '\u2212'
    };
    FontData.defaultParams = {
        x_height: .442,
        quad: 1,
        num1: .676,
        num2: .394,
        num3: .444,
        denom1: .686,
        denom2: .345,
        sup1: .413,
        sup2: .363,
        sup3: .289,
        sub1: .15,
        sub2: .247,
        sup_drop: .386,
        sub_drop: .05,
        delim1: 2.39,
        delim2: 1.0,
        axis_height: .25,
        rule_thickness: .06,
        big_op_spacing1: .111,
        big_op_spacing2: .167,
        big_op_spacing3: .2,
        big_op_spacing4: .6,
        big_op_spacing5: .1,
        surd_height: .075,
        scriptspace: .05,
        nulldelimiterspace: .12,
        delimiterfactor: 901,
        delimitershortfall: .3,
        min_rule_thickness: 1.25
    };
    FontData.defaultDelimiters = {};
    FontData.defaultChars = {};
    FontData.defaultSizeVariants = [];
    return FontData;
}());
exports.FontData = FontData;
//# sourceMappingURL=FontData.js.map

/***/ }),
/* 5 */
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
/* 6 */
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
exports.CommonArrow = exports.CommonDiagonalArrow = exports.CommonDiagonalStrike = exports.CommonBorder2 = exports.CommonBorder = exports.arrowBBox = exports.diagonalArrowDef = exports.arrowDef = exports.arrowBBoxW = exports.arrowBBoxHD = exports.arrowHead = exports.fullBorder = exports.fullPadding = exports.fullBBox = exports.sideNames = exports.sideIndex = exports.SOLID = exports.PADDING = exports.THICKNESS = exports.ARROWY = exports.ARROWDX = exports.ARROWX = void 0;
exports.ARROWX = 4, exports.ARROWDX = 1, exports.ARROWY = 2;
exports.THICKNESS = .067;
exports.PADDING = .2;
exports.SOLID = exports.THICKNESS + 'em solid';
exports.sideIndex = { top: 0, right: 1, bottom: 2, left: 3 };
exports.sideNames = Object.keys(exports.sideIndex);
exports.fullBBox = (function (node) { return new Array(4).fill(node.thickness + node.padding); });
exports.fullPadding = (function (node) { return new Array(4).fill(node.padding); });
exports.fullBorder = (function (node) { return new Array(4).fill(node.thickness); });
exports.arrowHead = function (node) {
    return Math.max(node.padding, node.thickness * (node.arrowhead.x + node.arrowhead.dx + 1));
};
exports.arrowBBoxHD = function (node, TRBL) {
    if (node.childNodes[0]) {
        var _a = node.childNodes[0].getBBox(), h = _a.h, d = _a.d;
        TRBL[0] = TRBL[2] = Math.max(0, node.thickness * node.arrowhead.y - (h + d) / 2);
    }
    return TRBL;
};
exports.arrowBBoxW = function (node, TRBL) {
    if (node.childNodes[0]) {
        var w = node.childNodes[0].getBBox().w;
        TRBL[1] = TRBL[3] = Math.max(0, node.thickness * node.arrowhead.y - w / 2);
    }
    return TRBL;
};
exports.arrowDef = {
    up: [-Math.PI / 2, false, true, 'verticalstrike'],
    down: [Math.PI / 2, false, true, 'verticakstrike'],
    right: [0, false, false, 'horizontalstrike'],
    left: [Math.PI, false, false, 'horizontalstrike'],
    updown: [Math.PI / 2, true, true, 'verticalstrike uparrow downarrow'],
    leftright: [0, true, false, 'horizontalstrike leftarrow rightarrow']
};
exports.diagonalArrowDef = {
    updiagonal: [-1, 0, false, 'updiagonalstrike northeastarrow'],
    northeast: [-1, 0, false, 'updiagonalstrike updiagonalarrow'],
    southeast: [1, 0, false, 'downdiagonalstrike'],
    northwest: [1, Math.PI, false, 'downdiagonalstrike'],
    southwest: [-1, Math.PI, false, 'updiagonalstrike'],
    northeastsouthwest: [-1, 0, true, 'updiagonalstrike northeastarrow updiagonalarrow southwestarrow'],
    northwestsoutheast: [1, 0, true, 'downdiagonalstrike northwestarrow southeastarrow']
};
exports.arrowBBox = {
    up: function (node) { return exports.arrowBBoxW(node, [exports.arrowHead(node), 0, node.padding, 0]); },
    down: function (node) { return exports.arrowBBoxW(node, [node.padding, 0, exports.arrowHead(node), 0]); },
    right: function (node) { return exports.arrowBBoxHD(node, [0, exports.arrowHead(node), 0, node.padding]); },
    left: function (node) { return exports.arrowBBoxHD(node, [0, node.padding, 0, exports.arrowHead(node)]); },
    updown: function (node) { return exports.arrowBBoxW(node, [exports.arrowHead(node), 0, exports.arrowHead(node), 0]); },
    leftright: function (node) { return exports.arrowBBoxHD(node, [0, exports.arrowHead(node), 0, exports.arrowHead(node)]); }
};
exports.CommonBorder = function (render) {
    return function (side) {
        var i = exports.sideIndex[side];
        return [side, {
                renderer: render,
                bbox: function (node) {
                    var bbox = [0, 0, 0, 0];
                    bbox[i] = node.thickness + node.padding;
                    return bbox;
                },
                border: function (node) {
                    var bbox = [0, 0, 0, 0];
                    bbox[i] = node.thickness;
                    return bbox;
                }
            }];
    };
};
exports.CommonBorder2 = function (render) {
    return function (name, side1, side2) {
        var i1 = exports.sideIndex[side1];
        var i2 = exports.sideIndex[side2];
        return [name, {
                renderer: render,
                bbox: function (node) {
                    var t = node.thickness + node.padding;
                    var bbox = [0, 0, 0, 0];
                    bbox[i1] = bbox[i2] = t;
                    return bbox;
                },
                border: function (node) {
                    var bbox = [0, 0, 0, 0];
                    bbox[i1] = bbox[i2] = node.thickness;
                    return bbox;
                },
                remove: side1 + ' ' + side2
            }];
    };
};
exports.CommonDiagonalStrike = function (render) {
    return function (name) {
        var cname = 'mjx-' + name.charAt(0) + 'strike';
        return [name + 'diagonalstrike', {
                renderer: render(cname),
                bbox: exports.fullBBox
            }];
    };
};
exports.CommonDiagonalArrow = function (render) {
    return function (name) {
        var _a = __read(exports.diagonalArrowDef[name], 4), c = _a[0], pi = _a[1], double = _a[2], remove = _a[3];
        return [name + 'arrow', {
                renderer: function (node, _child) {
                    var _a = node.arrowData(), a = _a.a, W = _a.W;
                    var arrow = node.arrow(W, c * (a - pi), double);
                    render(node, arrow);
                },
                bbox: function (node) {
                    var _a = node.arrowData(), a = _a.a, x = _a.x, y = _a.y;
                    var _b = __read([node.arrowhead.x, node.arrowhead.y, node.arrowhead.dx], 3), ax = _b[0], ay = _b[1], adx = _b[2];
                    var _c = __read(node.getArgMod(ax + adx, ay), 2), b = _c[0], ar = _c[1];
                    var dy = y + (b > a ? node.thickness * ar * Math.sin(b - a) : 0);
                    var dx = x + (b > Math.PI / 2 - a ? node.thickness * ar * Math.sin(b + a - Math.PI / 2) : 0);
                    return [dy, dx, dy, dx];
                },
                remove: remove
            }];
    };
};
exports.CommonArrow = function (render) {
    return function (name) {
        var _a = __read(exports.arrowDef[name], 4), angle = _a[0], double = _a[1], isVertical = _a[2], remove = _a[3];
        return [name + 'arrow', {
                renderer: function (node, _child) {
                    var _a = node.getBBox(), w = _a.w, h = _a.h, d = _a.d;
                    var W = (isVertical ? h + d : w);
                    var arrow = node.arrow(W, angle, double);
                    render(node, arrow);
                },
                bbox: exports.arrowBBox[name],
                remove: remove
            }];
    };
};
//# sourceMappingURL=Notation.js.map

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
exports.CHTMLmsubsup = exports.CHTMLmsup = exports.CHTMLmsub = void 0;
var scriptbase_js_1 = __webpack_require__(49);
var msubsup_js_1 = __webpack_require__(8);
var msubsup_js_2 = __webpack_require__(8);
var msubsup_js_3 = __webpack_require__(8);
var msubsup_js_4 = __webpack_require__(89);
var CHTMLmsub = (function (_super) {
    __extends(CHTMLmsub, _super);
    function CHTMLmsub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmsub.kind = msubsup_js_4.MmlMsub.prototype.kind;
    CHTMLmsub.useIC = false;
    return CHTMLmsub;
}(msubsup_js_1.CommonMsubMixin(scriptbase_js_1.CHTMLscriptbase)));
exports.CHTMLmsub = CHTMLmsub;
var CHTMLmsup = (function (_super) {
    __extends(CHTMLmsup, _super);
    function CHTMLmsup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmsup.kind = msubsup_js_4.MmlMsup.prototype.kind;
    CHTMLmsup.useIC = true;
    return CHTMLmsup;
}(msubsup_js_2.CommonMsupMixin(scriptbase_js_1.CHTMLscriptbase)));
exports.CHTMLmsup = CHTMLmsup;
var CHTMLmsubsup = (function (_super) {
    __extends(CHTMLmsubsup, _super);
    function CHTMLmsubsup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmsubsup.prototype.markUsed = function () {
        _super.prototype.markUsed.call(this);
        CHTMLmsubsup.used = true;
    };
    CHTMLmsubsup.prototype.toCHTML = function (parent) {
        var chtml = this.standardCHTMLnode(parent);
        var _a = __read([this.baseChild, this.supChild, this.subChild], 3), base = _a[0], sup = _a[1], sub = _a[2];
        var _b = __read(this.getUVQ(base.getBBox(), sub.getBBox(), sup.getBBox()), 3), v = _b[1], q = _b[2];
        var x = this.baseCore.bbox.ic ? this.coreIC() * this.coreScale() : 0;
        var style = { 'vertical-align': this.em(v) };
        base.toCHTML(chtml);
        var stack = this.adaptor.append(chtml, this.html('mjx-script', { style: style }));
        sup.toCHTML(stack);
        this.adaptor.append(stack, this.html('mjx-spacer', { style: { 'margin-top': this.em(q) } }));
        sub.toCHTML(stack);
        var corebox = this.baseCore.bbox;
        if (corebox.ic) {
            this.adaptor.setStyle(sup.chtml, 'marginLeft', this.em(x / sup.bbox.rscale));
        }
    };
    CHTMLmsubsup.kind = msubsup_js_4.MmlMsubsup.prototype.kind;
    CHTMLmsubsup.styles = {
        'mjx-script': {
            display: 'inline-block',
            'padding-right': '.05em'
        },
        'mjx-script > *': {
            display: 'block'
        }
    };
    CHTMLmsubsup.useIC = false;
    return CHTMLmsubsup;
}(msubsup_js_3.CommonMsubsupMixin(scriptbase_js_1.CHTMLscriptbase)));
exports.CHTMLmsubsup = CHTMLmsubsup;
//# sourceMappingURL=msubsup.js.map

/***/ }),
/* 8 */
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
exports.CommonMsubsupMixin = exports.CommonMsupMixin = exports.CommonMsubMixin = void 0;
function CommonMsubMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "script", {
            get: function () {
                return this.childNodes[this.node.sub];
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.getOffset = function (bbox, sbox) {
            return [0, -this.getV(bbox, sbox)];
        };
        return class_1;
    }(Base));
}
exports.CommonMsubMixin = CommonMsubMixin;
function CommonMsupMixin(Base) {
    return (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_2.prototype, "script", {
            get: function () {
                return this.childNodes[this.node.sup];
            },
            enumerable: false,
            configurable: true
        });
        class_2.prototype.getOffset = function (bbox, sbox) {
            var x = (this.baseCore.bbox.ic ? .05 * this.baseCore.bbox.ic + .05 : 0);
            return [x * this.coreScale(), this.getU(bbox, sbox)];
        };
        return class_2;
    }(Base));
}
exports.CommonMsupMixin = CommonMsupMixin;
function CommonMsubsupMixin(Base) {
    return (function (_super) {
        __extends(class_3, _super);
        function class_3() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.UVQ = null;
            return _this;
        }
        Object.defineProperty(class_3.prototype, "subChild", {
            get: function () {
                return this.childNodes[this.node.sub];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_3.prototype, "supChild", {
            get: function () {
                return this.childNodes[this.node.sup];
            },
            enumerable: false,
            configurable: true
        });
        class_3.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            var basebox = this.baseChild.getBBox();
            var subbox = this.subChild.getBBox();
            var supbox = this.supChild.getBBox();
            bbox.empty();
            bbox.append(basebox);
            var w = bbox.w;
            var _a = __read(this.getUVQ(basebox, subbox, supbox), 2), u = _a[0], v = _a[1];
            var x = (this.baseCore.bbox.ic ? this.coreIC() * this.coreScale() : 0);
            bbox.combine(subbox, w, v);
            bbox.combine(supbox, w + x, u);
            bbox.w += this.font.params.scriptspace;
            bbox.clean();
            this.setChildPWidths(recompute);
        };
        class_3.prototype.getUVQ = function (basebox, subbox, supbox) {
            if (this.UVQ)
                return this.UVQ;
            var tex = this.font.params;
            var t = 3 * tex.rule_thickness;
            var subscriptshift = this.length2em(this.node.attributes.get('subscriptshift'), tex.sub2);
            var drop = (this.isCharBase() ? 0 : basebox.d * basebox.rscale + tex.sub_drop * subbox.rscale);
            var _a = __read([this.getU(basebox, supbox), Math.max(drop, subscriptshift)], 2), u = _a[0], v = _a[1];
            var q = (u - supbox.d * supbox.rscale) - (subbox.h * subbox.rscale - v);
            if (q < t) {
                v += t - q;
                var p = (4 / 5) * tex.x_height - (u - supbox.d * supbox.rscale);
                if (p > 0) {
                    u += p;
                    v -= p;
                }
            }
            u = Math.max(this.length2em(this.node.attributes.get('superscriptshift'), u), u);
            v = Math.max(this.length2em(this.node.attributes.get('subscriptshift'), v), v);
            q = (u - supbox.d * supbox.rscale) - (subbox.h * subbox.rscale - v);
            this.UVQ = [u, -v, q];
            return this.UVQ;
        };
        return class_3;
    }(Base));
}
exports.CommonMsubsupMixin = CommonMsubsupMixin;
//# sourceMappingURL=msubsup.js.map

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
exports.CommonMunderoverMixin = exports.CommonMoverMixin = exports.CommonMunderMixin = void 0;
function CommonMunderMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.stretchChildren();
            return _this;
        }
        Object.defineProperty(class_1.prototype, "script", {
            get: function () {
                return this.childNodes[this.node.under];
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            if (this.hasMovableLimits()) {
                _super.prototype.computeBBox.call(this, bbox, recompute);
                return;
            }
            bbox.empty();
            var basebox = this.baseChild.getBBox();
            var underbox = this.script.getBBox();
            var v = this.getUnderKV(basebox, underbox)[1];
            var delta = this.getDelta(true);
            var _a = __read(this.getDeltaW([basebox, underbox], [0, -delta]), 2), bw = _a[0], uw = _a[1];
            bbox.combine(basebox, bw, 0);
            bbox.combine(underbox, uw, v);
            bbox.d += this.font.params.big_op_spacing5;
            bbox.ic = -this.baseCore.bbox.ic;
            bbox.clean();
            this.setChildPWidths(recompute);
        };
        return class_1;
    }(Base));
}
exports.CommonMunderMixin = CommonMunderMixin;
function CommonMoverMixin(Base) {
    return (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.stretchChildren();
            return _this;
        }
        Object.defineProperty(class_2.prototype, "script", {
            get: function () {
                return this.childNodes[this.node.over];
            },
            enumerable: false,
            configurable: true
        });
        class_2.prototype.computeBBox = function (bbox) {
            if (this.hasMovableLimits()) {
                _super.prototype.computeBBox.call(this, bbox);
                return;
            }
            bbox.empty();
            var basebox = this.baseChild.getBBox();
            var overbox = this.script.getBBox();
            var u = this.getOverKU(basebox, overbox)[1];
            var delta = this.getDelta();
            var _a = __read(this.getDeltaW([basebox, overbox], [0, delta]), 2), bw = _a[0], ow = _a[1];
            bbox.combine(basebox, bw, 0);
            bbox.combine(overbox, ow, u);
            bbox.h += this.font.params.big_op_spacing5;
            bbox.ic = -this.baseCore.bbox.ic;
            bbox.clean();
        };
        return class_2;
    }(Base));
}
exports.CommonMoverMixin = CommonMoverMixin;
function CommonMunderoverMixin(Base) {
    return (function (_super) {
        __extends(class_3, _super);
        function class_3() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.stretchChildren();
            return _this;
        }
        Object.defineProperty(class_3.prototype, "underChild", {
            get: function () {
                return this.childNodes[this.node.under];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_3.prototype, "overChild", {
            get: function () {
                return this.childNodes[this.node.over];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_3.prototype, "subChild", {
            get: function () {
                return this.underChild;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_3.prototype, "supChild", {
            get: function () {
                return this.overChild;
            },
            enumerable: false,
            configurable: true
        });
        class_3.prototype.computeBBox = function (bbox) {
            if (this.hasMovableLimits()) {
                _super.prototype.computeBBox.call(this, bbox);
                return;
            }
            bbox.empty();
            var overbox = this.overChild.getBBox();
            var basebox = this.baseChild.getBBox();
            var underbox = this.underChild.getBBox();
            var u = this.getOverKU(basebox, overbox)[1];
            var v = this.getUnderKV(basebox, underbox)[1];
            var delta = this.getDelta();
            var _a = __read(this.getDeltaW([basebox, underbox, overbox], [0, -delta, delta]), 3), bw = _a[0], uw = _a[1], ow = _a[2];
            bbox.combine(basebox, bw, 0);
            bbox.combine(overbox, ow, u);
            bbox.combine(underbox, uw, v);
            var z = this.font.params.big_op_spacing5;
            bbox.h += z;
            bbox.d += z;
            bbox.ic = -this.baseCore.bbox.ic;
            bbox.clean();
        };
        return class_3;
    }(Base));
}
exports.CommonMunderoverMixin = CommonMunderoverMixin;
//# sourceMappingURL=munderover.js.map

/***/ }),
/* 10 */
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
exports.CommonInferredMrowMixin = exports.CommonMrowMixin = void 0;
var BBox_js_1 = __webpack_require__(1);
function CommonMrowMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var e_1, _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.stretchChildren();
            try {
                for (var _b = __values(_this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    if (child.bbox.pwidth) {
                        _this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
                        break;
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
            return _this;
        }
        Object.defineProperty(class_1.prototype, "fixesPWidth", {
            get: function () {
                return false;
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.stretchChildren = function () {
            var e_2, _a, e_3, _b, e_4, _c;
            var stretchy = [];
            try {
                for (var _d = __values(this.childNodes), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var child = _e.value;
                    if (child.canStretch(1)) {
                        stretchy.push(child);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var count = stretchy.length;
            var nodeCount = this.childNodes.length;
            if (count && nodeCount > 1) {
                var H = 0, D = 0;
                var all = (count > 1 && count === nodeCount);
                try {
                    for (var _f = __values(this.childNodes), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var child = _g.value;
                        var noStretch = (child.stretch.dir === 0);
                        if (all || noStretch) {
                            var _h = child.getBBox(noStretch), h = _h.h, d = _h.d;
                            if (h > H)
                                H = h;
                            if (d > D)
                                D = d;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                try {
                    for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next(); !stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
                        var child = stretchy_1_1.value;
                        child.coreMO().getStretchedVariant([H, D]);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return)) _c.call(stretchy_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        };
        return class_1;
    }(Base));
}
exports.CommonMrowMixin = CommonMrowMixin;
function CommonInferredMrowMixin(Base) {
    return (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.getScale = function () {
            this.bbox.scale = this.parent.bbox.scale;
            this.bbox.rscale = 1;
        };
        return class_2;
    }(Base));
}
exports.CommonInferredMrowMixin = CommonInferredMrowMixin;
//# sourceMappingURL=mrow.js.map

/***/ }),
/* 11 */
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
exports.CHTMLmsqrt = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var msqrt_js_1 = __webpack_require__(46);
var msqrt_js_2 = __webpack_require__(87);
var CHTMLmsqrt = (function (_super) {
    __extends(CHTMLmsqrt, _super);
    function CHTMLmsqrt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmsqrt.prototype.toCHTML = function (parent) {
        var surd = this.childNodes[this.surd];
        var base = this.childNodes[this.base];
        var sbox = surd.getBBox();
        var bbox = base.getBBox();
        var _a = __read(this.getPQ(sbox), 2), q = _a[1];
        var t = this.font.params.rule_thickness;
        var H = bbox.h + q + t;
        var CHTML = this.standardCHTMLnode(parent);
        var SURD, BASE, ROOT, root;
        if (this.root != null) {
            ROOT = this.adaptor.append(CHTML, this.html('mjx-root'));
            root = this.childNodes[this.root];
        }
        var SQRT = this.adaptor.append(CHTML, this.html('mjx-sqrt', {}, [
            SURD = this.html('mjx-surd'),
            BASE = this.html('mjx-box', { style: { paddingTop: this.em(q) } })
        ]));
        this.addRoot(ROOT, root, sbox, H);
        surd.toCHTML(SURD);
        base.toCHTML(BASE);
        if (surd.size < 0) {
            this.adaptor.addClass(SQRT, 'mjx-tall');
        }
    };
    CHTMLmsqrt.prototype.addRoot = function (_ROOT, _root, _sbox, _H) {
    };
    CHTMLmsqrt.kind = msqrt_js_2.MmlMsqrt.prototype.kind;
    CHTMLmsqrt.styles = {
        'mjx-root': {
            display: 'inline-block',
            'white-space': 'nowrap'
        },
        'mjx-surd': {
            display: 'inline-block',
            'vertical-align': 'top'
        },
        'mjx-sqrt': {
            display: 'inline-block',
            'padding-top': '.07em'
        },
        'mjx-sqrt > mjx-box': {
            'border-top': '.07em solid'
        },
        'mjx-sqrt.mjx-tall > mjx-box': {
            'padding-left': '.3em',
            'margin-left': '-.3em'
        }
    };
    return CHTMLmsqrt;
}(msqrt_js_1.CommonMsqrtMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmsqrt = CHTMLmsqrt;
//# sourceMappingURL=msqrt.js.map

/***/ }),
/* 12 */
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
exports.CommonMlabeledtrMixin = exports.CommonMtrMixin = void 0;
function CommonMtrMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "fixesPWidth", {
            get: function () {
                return false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1.prototype, "numCells", {
            get: function () {
                return this.childNodes.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1.prototype, "labeled", {
            get: function () {
                return false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1.prototype, "tableCells", {
            get: function () {
                return this.childNodes;
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.getChild = function (i) {
            return this.childNodes[i];
        };
        class_1.prototype.getChildBBoxes = function () {
            return this.childNodes.map(function (cell) { return cell.getBBox(); });
        };
        class_1.prototype.stretchChildren = function (HD) {
            var e_1, _a, e_2, _b, e_3, _c;
            if (HD === void 0) { HD = null; }
            var stretchy = [];
            var children = (this.labeled ? this.childNodes.slice(1) : this.childNodes);
            try {
                for (var children_1 = __values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                    var mtd = children_1_1.value;
                    var child = mtd.childNodes[0];
                    if (child.canStretch(1)) {
                        stretchy.push(child);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var count = stretchy.length;
            var nodeCount = this.childNodes.length;
            if (count && nodeCount > 1) {
                if (HD === null) {
                    var H = 0, D = 0;
                    var all = (count > 1 && count === nodeCount);
                    try {
                        for (var children_2 = __values(children), children_2_1 = children_2.next(); !children_2_1.done; children_2_1 = children_2.next()) {
                            var mtd = children_2_1.value;
                            var child = mtd.childNodes[0];
                            var noStretch = (child.stretch.dir === 0);
                            if (all || noStretch) {
                                var _d = child.getBBox(noStretch), h = _d.h, d = _d.d;
                                if (h > H) {
                                    H = h;
                                }
                                if (d > D) {
                                    D = d;
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (children_2_1 && !children_2_1.done && (_b = children_2.return)) _b.call(children_2);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    HD = [H, D];
                }
                try {
                    for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next(); !stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
                        var child = stretchy_1_1.value;
                        child.coreMO().getStretchedVariant(HD);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return)) _c.call(stretchy_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        };
        return class_1;
    }(Base));
}
exports.CommonMtrMixin = CommonMtrMixin;
function CommonMlabeledtrMixin(Base) {
    return (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_2.prototype, "numCells", {
            get: function () {
                return Math.max(0, this.childNodes.length - 1);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_2.prototype, "labeled", {
            get: function () {
                return true;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_2.prototype, "tableCells", {
            get: function () {
                return this.childNodes.slice(1);
            },
            enumerable: false,
            configurable: true
        });
        class_2.prototype.getChild = function (i) {
            return this.childNodes[i + 1];
        };
        class_2.prototype.getChildBBoxes = function () {
            return this.childNodes.slice(1).map(function (cell) { return cell.getBBox(); });
        };
        return class_2;
    }(Base));
}
exports.CommonMlabeledtrMixin = CommonMlabeledtrMixin;
//# sourceMappingURL=mtr.js.map

/***/ }),
/* 13 */
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonMactionMixin = exports.TooltipData = void 0;
var string_js_1 = __webpack_require__(3);
exports.TooltipData = {
    dx: '.2em',
    dy: '.1em',
    postDelay: 600,
    clearDelay: 100,
    hoverTimer: new Map(),
    clearTimer: new Map(),
    stopTimers: function (node, data) {
        if (data.clearTimer.has(node)) {
            clearTimeout(data.clearTimer.get(node));
            data.clearTimer.delete(node);
        }
        if (data.hoverTimer.has(node)) {
            clearTimeout(data.hoverTimer.get(node));
            data.hoverTimer.delete(node);
        }
    }
};
function CommonMactionMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            var actions = _this.constructor.actions;
            var action = _this.node.attributes.get('actiontype');
            var _a = __read(actions.get(action) || [(function (_node, _data) { }), {}], 2), handler = _a[0], data = _a[1];
            _this.action = handler;
            _this.data = data;
            _this.getParameters();
            return _this;
        }
        Object.defineProperty(class_1.prototype, "selected", {
            get: function () {
                var selection = this.node.attributes.get('selection');
                var i = Math.max(1, Math.min(this.childNodes.length, selection)) - 1;
                return this.childNodes[i] || this.wrap(this.node.selected);
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.getParameters = function () {
            var offsets = this.node.attributes.get('data-offsets');
            var _a = __read(string_js_1.split(offsets || ''), 2), dx = _a[0], dy = _a[1];
            this.dx = this.length2em(dx || exports.TooltipData.dx);
            this.dy = this.length2em(dy || exports.TooltipData.dy);
        };
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            bbox.updateFrom(this.selected.getBBox());
            this.selected.setChildPWidths(recompute);
        };
        return class_1;
    }(Base));
}
exports.CommonMactionMixin = CommonMactionMixin;
//# sourceMappingURL=maction.js.map

/***/ }),
/* 14 */
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
/* 15 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHTML = void 0;
var OutputJax_js_1 = __webpack_require__(17);
var WrapperFactory_js_1 = __webpack_require__(18);
var tex_js_1 = __webpack_require__(100);
var LENGTHS = __webpack_require__(2);
var string_js_1 = __webpack_require__(3);
var CHTML = (function (_super) {
    __extends(CHTML, _super);
    function CHTML(options) {
        if (options === void 0) { options = null; }
        var _this = _super.call(this, options, WrapperFactory_js_1.CHTMLWrapperFactory, tex_js_1.TeXFont) || this;
        _this.chtmlStyles = null;
        _this.font.adaptiveCSS(_this.options.adaptiveCSS);
        return _this;
    }
    CHTML.prototype.escaped = function (math, html) {
        this.setDocument(html);
        return this.html('span', {}, [this.text(math.math)]);
    };
    CHTML.prototype.styleSheet = function (html) {
        if (this.chtmlStyles && !this.options.adaptiveCSS) {
            return null;
        }
        var sheet = this.chtmlStyles = _super.prototype.styleSheet.call(this, html);
        this.adaptor.setAttribute(sheet, 'id', CHTML.STYLESHEETID);
        return sheet;
    };
    CHTML.prototype.addClassStyles = function (CLASS) {
        var _a;
        if (!this.options.adaptiveCSS || CLASS.used) {
            if (CLASS.autoStyle && CLASS.kind !== 'unknown') {
                this.cssStyles.addStyles((_a = {},
                    _a['mjx-' + CLASS.kind] = {
                        display: 'inline-block',
                        'text-align': 'left'
                    },
                    _a));
            }
            _super.prototype.addClassStyles.call(this, CLASS);
        }
    };
    CHTML.prototype.processMath = function (math, parent) {
        this.factory.wrap(math).toCHTML(parent);
    };
    CHTML.prototype.clearCache = function () {
        var e_1, _a;
        this.cssStyles.clear();
        this.font.clearCache();
        try {
            for (var _b = __values(this.factory.getKinds()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var kind = _c.value;
                this.factory.getNodeClass(kind).used = false;
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
    CHTML.prototype.unknownText = function (text, variant) {
        var styles = {};
        var scale = 100 / this.math.metrics.scale;
        if (scale !== 100) {
            styles['font-size'] = this.fixed(scale, 1) + '%';
            styles.padding = LENGTHS.em(75 / scale) + ' 0 ' + LENGTHS.em(20 / scale) + ' 0';
        }
        if (variant !== '-explicitFont') {
            var c = string_js_1.unicodeChars(text);
            if (c.length !== 1 || c[0] < 0x1D400 || c[0] > 0x1D7FF) {
                this.cssFontStyles(this.font.getCssFont(variant), styles);
            }
        }
        return this.html('mjx-utext', { variant: variant, style: styles }, [this.text(text)]);
    };
    CHTML.prototype.measureTextNode = function (text) {
        var adaptor = this.adaptor;
        text = adaptor.clone(text);
        var style = { position: 'absolute', 'white-space': 'nowrap' };
        var node = this.html('mjx-measure-text', { style: style }, [text]);
        adaptor.append(adaptor.parent(this.math.start.node), this.container);
        adaptor.append(this.container, node);
        var w = adaptor.nodeSize(text, this.math.metrics.em)[0] / this.math.metrics.scale;
        adaptor.remove(this.container);
        adaptor.remove(node);
        return { w: w, h: .75, d: .2 };
    };
    CHTML.NAME = 'CHTML';
    CHTML.OPTIONS = __assign(__assign({}, OutputJax_js_1.CommonOutputJax.OPTIONS), { adaptiveCSS: true });
    CHTML.commonStyles = {
        'mjx-container[jax="CHTML"]': { 'line-height': 0 },
        'mjx-container [space="1"]': { 'margin-left': '.111em' },
        'mjx-container [space="2"]': { 'margin-left': '.167em' },
        'mjx-container [space="3"]': { 'margin-left': '.222em' },
        'mjx-container [space="4"]': { 'margin-left': '.278em' },
        'mjx-container [space="5"]': { 'margin-left': '.333em' },
        'mjx-container [rspace="1"]': { 'margin-right': '.111em' },
        'mjx-container [rspace="2"]': { 'margin-right': '.167em' },
        'mjx-container [rspace="3"]': { 'margin-right': '.222em' },
        'mjx-container [rspace="4"]': { 'margin-right': '.278em' },
        'mjx-container [rspace="5"]': { 'margin-right': '.333em' },
        'mjx-container [size="s"]': { 'font-size': '70.7%' },
        'mjx-container [size="ss"]': { 'font-size': '50%' },
        'mjx-container [size="Tn"]': { 'font-size': '60%' },
        'mjx-container [size="sm"]': { 'font-size': '85%' },
        'mjx-container [size="lg"]': { 'font-size': '120%' },
        'mjx-container [size="Lg"]': { 'font-size': '144%' },
        'mjx-container [size="LG"]': { 'font-size': '173%' },
        'mjx-container [size="hg"]': { 'font-size': '207%' },
        'mjx-container [size="HG"]': { 'font-size': '249%' },
        'mjx-container [width="full"]': { width: '100%' },
        'mjx-box': { display: 'inline-block' },
        'mjx-block': { display: 'block' },
        'mjx-itable': { display: 'inline-table' },
        'mjx-row': { display: 'table-row' },
        'mjx-row > *': { display: 'table-cell' },
        'mjx-mtext': {
            display: 'inline-block'
        },
        'mjx-mstyle': {
            display: 'inline-block'
        },
        'mjx-merror': {
            display: 'inline-block',
            color: 'red',
            'background-color': 'yellow'
        },
        'mjx-mphantom': { visibility: 'hidden' }
    };
    CHTML.STYLESHEETID = 'MJX-CHTML-styles';
    return CHTML;
}(OutputJax_js_1.CommonOutputJax));
exports.CHTML = CHTML;
//# sourceMappingURL=chtml.js.map

/***/ }),
/* 16 */
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCSS = exports.CHTMLFontData = void 0;
var FontData_js_1 = __webpack_require__(4);
var lengths_js_1 = __webpack_require__(2);
var Options_js_1 = __webpack_require__(68);
__exportStar(__webpack_require__(4), exports);
var CHTMLFontData = (function (_super) {
    __extends(CHTMLFontData, _super);
    function CHTMLFontData(options) {
        if (options === void 0) { options = null; }
        var _this = _super.call(this) || this;
        var CLASS = _this.constructor;
        _this.options = Options_js_1.userOptions(Options_js_1.defaultOptions({}, CLASS.OPTIONS), options);
        return _this;
    }
    CHTMLFontData.charOptions = function (font, n) {
        return _super.charOptions.call(this, font, n);
    };
    CHTMLFontData.prototype.adaptiveCSS = function (adapt) {
        this.options.adaptiveCSS = adapt;
    };
    CHTMLFontData.prototype.clearCache = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        if (!this.options.adaptiveCSS)
            return;
        try {
            for (var _d = __values(Object.keys(this.delimiters)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var n = _e.value;
                this.delimiters[parseInt(n)].used = false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _f = __values(Object.keys(this.variant)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var name_1 = _g.value;
                var chars = this.variant[name_1].chars;
                try {
                    for (var _h = (e_3 = void 0, __values(Object.keys(chars))), _j = _h.next(); !_j.done; _j = _h.next()) {
                        var n = _j.value;
                        var options = chars[parseInt(n)][3];
                        if (options) {
                            options.used = false;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    CHTMLFontData.prototype.createVariant = function (name, inherit, link) {
        if (inherit === void 0) { inherit = null; }
        if (link === void 0) { link = null; }
        _super.prototype.createVariant.call(this, name, inherit, link);
        var CLASS = this.constructor;
        this.variant[name].classes = CLASS.defaultVariantClasses[name];
        this.variant[name].letter = CLASS.defaultVariantLetters[name];
    };
    CHTMLFontData.prototype.defineChars = function (name, chars) {
        var e_4, _a;
        _super.prototype.defineChars.call(this, name, chars);
        var letter = this.variant[name].letter;
        try {
            for (var _b = __values(Object.keys(chars)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var n = _c.value;
                var options = CHTMLFontData.charOptions(chars, parseInt(n));
                if (options.f === undefined) {
                    options.f = letter;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    Object.defineProperty(CHTMLFontData.prototype, "styles", {
        get: function () {
            var e_5, _a;
            var CLASS = this.constructor;
            var styles = __assign({}, CLASS.defaultStyles);
            this.addFontURLs(styles, CLASS.defaultFonts, this.options.fontURL);
            try {
                for (var _b = __values(Object.keys(this.delimiters)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var n = _c.value;
                    var N = parseInt(n);
                    this.addDelimiterStyles(styles, N, this.delimiters[N]);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            this.addVariantChars(styles);
            return styles;
        },
        enumerable: false,
        configurable: true
    });
    CHTMLFontData.prototype.addVariantChars = function (styles) {
        var e_6, _a, e_7, _b;
        var allCSS = !this.options.adaptiveCSS;
        try {
            for (var _c = __values(Object.keys(this.variant)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var name_2 = _d.value;
                var variant = this.variant[name_2];
                var vletter = variant.letter;
                try {
                    for (var _e = (e_7 = void 0, __values(Object.keys(variant.chars))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var n = _f.value;
                        var N = parseInt(n);
                        var char = variant.chars[N];
                        if ((char[3] || {}).smp)
                            continue;
                        if (allCSS && char.length < 4) {
                            char[3] = {};
                        }
                        if (char.length === 4 || allCSS) {
                            this.addCharStyles(styles, vletter, N, char);
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    CHTMLFontData.prototype.addFontURLs = function (styles, fonts, url) {
        var e_8, _a;
        try {
            for (var _b = __values(Object.keys(fonts)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var name_3 = _c.value;
                var font = __assign({}, fonts[name_3]);
                font.src = font.src.replace(/%%URL%%/, url);
                styles[name_3] = font;
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
    };
    CHTMLFontData.prototype.addDelimiterStyles = function (styles, n, data) {
        if (this.options.adaptiveCSS && !data.used)
            return;
        var c = this.charSelector(n);
        if (data.c && data.c !== n) {
            styles['.mjx-stretched mjx-c' + c + '::before'] = {
                content: this.charContent(data.c)
            };
        }
        if (!data.stretch)
            return;
        if (data.dir === 1) {
            this.addDelimiterVStyles(styles, c, data);
        }
        else {
            this.addDelimiterHStyles(styles, c, data);
        }
    };
    CHTMLFontData.prototype.addDelimiterVStyles = function (styles, c, data) {
        var W = data.HDW[2];
        var _a = __read(data.stretch, 4), beg = _a[0], ext = _a[1], end = _a[2], mid = _a[3];
        var Hb = this.addDelimiterVPart(styles, c, W, 'beg', beg);
        this.addDelimiterVPart(styles, c, W, 'ext', ext);
        var He = this.addDelimiterVPart(styles, c, W, 'end', end);
        var css = {};
        if (mid) {
            var Hm = this.addDelimiterVPart(styles, c, W, 'mid', mid);
            css.height = '50%';
            styles['mjx-stretchy-v' + c + ' > mjx-mid'] = {
                'margin-top': this.em(-Hm / 2),
                'margin-bottom': this.em(-Hm / 2)
            };
        }
        if (Hb) {
            css['border-top-width'] = this.em0(Hb - .03);
        }
        if (He) {
            css['border-bottom-width'] = this.em0(He - .03);
            styles['mjx-stretchy-v' + c + ' > mjx-end'] = { 'margin-top': this.em(-He) };
        }
        if (Object.keys(css).length) {
            styles['mjx-stretchy-v' + c + ' > mjx-ext'] = css;
        }
    };
    CHTMLFontData.prototype.addDelimiterVPart = function (styles, c, W, part, n) {
        if (!n)
            return 0;
        var data = this.getDelimiterData(n);
        var dw = (W - data[2]) / 2;
        var css = { content: this.charContent(n) };
        if (part !== 'ext') {
            css.padding = this.padding(data, dw);
        }
        else if (dw) {
            css['padding-left'] = this.em0(dw);
        }
        styles['mjx-stretchy-v' + c + ' mjx-' + part + ' mjx-c::before'] = css;
        return data[0] + data[1];
    };
    CHTMLFontData.prototype.addDelimiterHStyles = function (styles, c, data) {
        var _a = __read(data.stretch, 4), beg = _a[0], ext = _a[1], end = _a[2], mid = _a[3];
        this.addDelimiterHPart(styles, c, 'beg', beg);
        this.addDelimiterHPart(styles, c, 'ext', ext, !(beg || end));
        this.addDelimiterHPart(styles, c, 'end', end);
        if (mid) {
            this.addDelimiterHPart(styles, c, 'mid', mid);
            styles['mjx-stretchy-h' + c + ' > mjx-ext'] = { width: '50%' };
        }
    };
    CHTMLFontData.prototype.addDelimiterHPart = function (styles, c, part, n, force) {
        if (force === void 0) { force = false; }
        if (!n)
            return;
        var data = this.getDelimiterData(n);
        var options = data[3];
        var css = { content: (options && options.c ? '"' + options.c + '"' : this.charContent(n)) };
        if (part !== 'ext' || force) {
            css.padding = this.padding(data, 0, -data[2]);
        }
        styles['mjx-stretchy-h' + c + ' mjx-' + part + ' mjx-c::before'] = css;
    };
    CHTMLFontData.prototype.addCharStyles = function (styles, vletter, n, data) {
        var _a = __read(data, 4), w = _a[2], options = _a[3];
        if (this.options.adaptiveCSS && !options.used)
            return;
        var letter = (options.f !== undefined ? options.f : vletter);
        var selector = 'mjx-c' + this.charSelector(n) + (letter ? '.TEX-' + letter : '');
        styles[selector + '::before'] = {
            padding: this.padding(data, 0, options.ic || 0),
            content: (options.c != null ? '"' + options.c + '"' : this.charContent(n))
        };
        if (options.ic) {
            styles['[noIC] ' + selector + ':last-child::before'] = {
                'padding-right': this.em(w)
            };
        }
    };
    CHTMLFontData.prototype.getDelimiterData = function (n) {
        return this.getChar('-smallop', n);
    };
    CHTMLFontData.prototype.em = function (n) {
        return lengths_js_1.em(n);
    };
    CHTMLFontData.prototype.em0 = function (n) {
        return lengths_js_1.em(Math.max(0, n));
    };
    CHTMLFontData.prototype.padding = function (_a, dw, ic) {
        var _b = __read(_a, 3), h = _b[0], d = _b[1], w = _b[2];
        if (dw === void 0) { dw = 0; }
        if (ic === void 0) { ic = 0; }
        return [h, w + ic, d, dw].map(this.em0).join(' ');
    };
    CHTMLFontData.prototype.charContent = function (n) {
        return '"' + (n >= 0x20 && n <= 0x7E && n !== 0x22 && n !== 0x27 && n !== 0x5C ?
            String.fromCharCode(n) : '\\' + n.toString(16).toUpperCase()) + '"';
    };
    CHTMLFontData.prototype.charSelector = function (n) {
        return '.mjx-c' + n.toString(16).toUpperCase();
    };
    CHTMLFontData.OPTIONS = {
        fontURL: 'js/output/chtml/fonts/tex-woff-v2'
    };
    CHTMLFontData.defaultVariantClasses = {};
    CHTMLFontData.defaultVariantLetters = {};
    CHTMLFontData.defaultStyles = {
        'mjx-c::before': {
            display: 'block',
            width: 0
        }
    };
    CHTMLFontData.defaultFonts = {
        '@font-face /* 0 */': {
            'font-family': 'MJXZERO',
            src: 'url("%%URL%%/MathJax_Zero.woff") format("woff")'
        }
    };
    return CHTMLFontData;
}(FontData_js_1.FontData));
exports.CHTMLFontData = CHTMLFontData;
function AddCSS(font, options) {
    var e_9, _a;
    try {
        for (var _b = __values(Object.keys(options)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var c = _c.value;
            var n = parseInt(c);
            Object.assign(FontData_js_1.FontData.charOptions(font, n), options[n]);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return font;
}
exports.AddCSS = AddCSS;
//# sourceMappingURL=FontData.js.map

/***/ }),
/* 17 */
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
exports.CommonOutputJax = void 0;
var OutputJax_js_1 = __webpack_require__(70);
var MathItem_js_1 = __webpack_require__(71);
var Options_js_1 = __webpack_require__(68);
var lengths_js_1 = __webpack_require__(2);
var Styles_js_1 = __webpack_require__(69);
var StyleList_js_1 = __webpack_require__(72);
var CommonOutputJax = (function (_super) {
    __extends(CommonOutputJax, _super);
    function CommonOutputJax(options, defaultFactory, defaultFont) {
        if (options === void 0) { options = null; }
        if (defaultFactory === void 0) { defaultFactory = null; }
        if (defaultFont === void 0) { defaultFont = null; }
        var _this = this;
        var _a = __read(Options_js_1.separateOptions(options, defaultFont.OPTIONS), 2), jaxOptions = _a[0], fontOptions = _a[1];
        _this = _super.call(this, jaxOptions) || this;
        _this.factory = _this.options.wrapperFactory ||
            new defaultFactory();
        _this.factory.jax = _this;
        _this.cssStyles = _this.options.cssStyles || new StyleList_js_1.CssStyles();
        _this.font = _this.options.font || new defaultFont(fontOptions);
        _this.unknownCache = new Map();
        return _this;
    }
    CommonOutputJax.prototype.typeset = function (math, html) {
        this.setDocument(html);
        var node = this.createNode();
        this.toDOM(math, node, html);
        return node;
    };
    CommonOutputJax.prototype.createNode = function () {
        var jax = this.constructor.NAME;
        return this.html('mjx-container', { 'class': 'MathJax', jax: jax });
    };
    CommonOutputJax.prototype.setScale = function (node) {
        var scale = this.math.metrics.scale * this.options.scale;
        if (scale !== 1) {
            this.adaptor.setStyle(node, 'fontSize', lengths_js_1.percent(scale));
        }
    };
    CommonOutputJax.prototype.toDOM = function (math, node, html) {
        if (html === void 0) { html = null; }
        this.setDocument(html);
        this.math = math;
        this.pxPerEm = math.metrics.ex / this.font.params.x_height;
        math.root.setTeXclass(null);
        this.setScale(node);
        this.nodeMap = new Map();
        this.container = node;
        this.processMath(math.root, node);
        this.nodeMap = null;
        this.executeFilters(this.postFilters, math, html, node);
    };
    CommonOutputJax.prototype.getBBox = function (math, html) {
        this.setDocument(html);
        this.math = math;
        math.root.setTeXclass(null);
        this.nodeMap = new Map();
        var bbox = this.factory.wrap(math.root).getBBox();
        this.nodeMap = null;
        return bbox;
    };
    CommonOutputJax.prototype.getMetrics = function (html) {
        var e_1, _a;
        this.setDocument(html);
        var adaptor = this.adaptor;
        var maps = this.getMetricMaps(html);
        try {
            for (var _b = __values(html.math), _c = _b.next(); !_c.done; _c = _b.next()) {
                var math = _c.value;
                var parent_1 = adaptor.parent(math.start.node);
                if (math.state() < MathItem_js_1.STATE.METRICS && parent_1) {
                    var map = maps[math.display ? 1 : 0];
                    var _d = map.get(parent_1), em = _d.em, ex = _d.ex, containerWidth = _d.containerWidth, lineWidth = _d.lineWidth, scale = _d.scale, family = _d.family;
                    math.setMetrics(em, ex, containerWidth, lineWidth, scale);
                    if (this.options.mtextInheritFont) {
                        math.outputData.mtextFamily = family;
                    }
                    if (this.options.merrorInheritFont) {
                        math.outputData.merrorFamily = family;
                    }
                    math.state(MathItem_js_1.STATE.METRICS);
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
    };
    CommonOutputJax.prototype.getMetricsFor = function (node, display) {
        var getFamily = (this.options.mtextInheritFont || this.options.merrorInheritFont);
        var test = this.getTestElement(node, display);
        var metrics = this.measureMetrics(test, getFamily);
        this.adaptor.remove(test);
        return metrics;
    };
    CommonOutputJax.prototype.getMetricMaps = function (html) {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d, e_6, _e;
        var adaptor = this.adaptor;
        var domMaps = [new Map(), new Map()];
        try {
            for (var _f = __values(html.math), _g = _f.next(); !_g.done; _g = _f.next()) {
                var math = _g.value;
                var node = adaptor.parent(math.start.node);
                if (node && math.state() < MathItem_js_1.STATE.METRICS) {
                    var map = domMaps[math.display ? 1 : 0];
                    if (!map.has(node)) {
                        map.set(node, this.getTestElement(node, math.display));
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var getFamily = this.options.mtextInheritFont || this.options.merrorInheritFont;
        var maps = [new Map(), new Map()];
        try {
            for (var _h = __values(maps.keys()), _j = _h.next(); !_j.done; _j = _h.next()) {
                var i = _j.value;
                try {
                    for (var _k = (e_4 = void 0, __values(domMaps[i].keys())), _l = _k.next(); !_l.done; _l = _k.next()) {
                        var node = _l.value;
                        maps[i].set(node, this.measureMetrics(domMaps[i].get(node), getFamily));
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _m = __values(maps.keys()), _o = _m.next(); !_o.done; _o = _m.next()) {
                var i = _o.value;
                try {
                    for (var _p = (e_6 = void 0, __values(domMaps[i].values())), _q = _p.next(); !_q.done; _q = _p.next()) {
                        var node = _q.value;
                        adaptor.remove(node);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return maps;
    };
    CommonOutputJax.prototype.getTestElement = function (node, display) {
        var adaptor = this.adaptor;
        if (!this.testInline) {
            this.testInline = this.html('mjx-test', { style: {
                    display: 'inline-block',
                    width: '100%',
                    'font-style': 'normal',
                    'font-weight': 'normal',
                    'font-size': '100%',
                    'font-size-adjust': 'none',
                    'text-indent': 0,
                    'text-transform': 'none',
                    'letter-spacing': 'normal',
                    'word-spacing': 'normal',
                    overflow: 'hidden',
                    height: '1px',
                    'margin-right': '-1px'
                } }, [
                this.html('mjx-left-box', { style: {
                        display: 'inline-block',
                        width: 0,
                        'float': 'left'
                    } }),
                this.html('mjx-ex-box', { style: {
                        position: 'absolute',
                        overflow: 'hidden',
                        width: '1px', height: '60ex'
                    } }),
                this.html('mjx-right-box', { style: {
                        display: 'inline-block',
                        width: 0,
                        'float': 'right'
                    } })
            ]);
            this.testDisplay = adaptor.clone(this.testInline);
            adaptor.setStyle(this.testDisplay, 'display', 'table');
            adaptor.setStyle(this.testDisplay, 'margin-right', '');
            adaptor.setStyle(adaptor.firstChild(this.testDisplay), 'display', 'none');
            var right = adaptor.lastChild(this.testDisplay);
            adaptor.setStyle(right, 'display', 'table-cell');
            adaptor.setStyle(right, 'width', '10000em');
            adaptor.setStyle(right, 'float', '');
        }
        return adaptor.append(node, adaptor.clone(display ? this.testDisplay : this.testInline));
    };
    CommonOutputJax.prototype.measureMetrics = function (node, getFamily) {
        var adaptor = this.adaptor;
        var family = (getFamily ? adaptor.fontFamily(node) : '');
        var em = adaptor.fontSize(node);
        var ex = (adaptor.nodeSize(adaptor.childNode(node, 1))[1] / 60) || (em * this.options.exFactor);
        var containerWidth = (adaptor.getStyle(node, 'display') === 'table' ?
            adaptor.nodeSize(adaptor.lastChild(node))[0] - 1 :
            adaptor.nodeBBox(adaptor.lastChild(node)).left -
                adaptor.nodeBBox(adaptor.firstChild(node)).left - 2);
        var scale = Math.max(this.options.minScale, this.options.matchFontHeight ? ex / this.font.params.x_height / em : 1);
        var lineWidth = 1000000;
        return { em: em, ex: ex, containerWidth: containerWidth, lineWidth: lineWidth, scale: scale, family: family };
    };
    CommonOutputJax.prototype.styleSheet = function (html) {
        var e_7, _a, e_8, _b;
        this.setDocument(html);
        this.cssStyles.clear();
        this.cssStyles.addStyles(this.constructor.commonStyles);
        if ('getStyles' in html) {
            try {
                for (var _c = __values(html.getStyles()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var styles = _d.value;
                    this.cssStyles.addStyles(styles);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        try {
            for (var _e = __values(this.factory.getKinds()), _f = _e.next(); !_f.done; _f = _e.next()) {
                var kind = _f.value;
                this.addClassStyles(this.factory.getNodeClass(kind));
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_8) throw e_8.error; }
        }
        this.cssStyles.addStyles(this.font.styles);
        var sheet = this.html('style', { id: 'MJX-styles' }, [this.text('\n' + this.cssStyles.cssText + '\n')]);
        return sheet;
    };
    CommonOutputJax.prototype.addClassStyles = function (CLASS) {
        this.cssStyles.addStyles(CLASS.styles);
    };
    CommonOutputJax.prototype.setDocument = function (html) {
        if (html) {
            this.document = html;
            this.adaptor.document = html.document;
        }
    };
    CommonOutputJax.prototype.html = function (type, def, content, ns) {
        if (def === void 0) { def = {}; }
        if (content === void 0) { content = []; }
        return this.adaptor.node(type, def, content, ns);
    };
    CommonOutputJax.prototype.text = function (text) {
        return this.adaptor.text(text);
    };
    CommonOutputJax.prototype.fixed = function (m, n) {
        if (n === void 0) { n = 3; }
        if (Math.abs(m) < .0006) {
            return '0';
        }
        return m.toFixed(n).replace(/\.?0+$/, '');
    };
    CommonOutputJax.prototype.measureText = function (text, variant, font) {
        if (font === void 0) { font = ['', false, false]; }
        var node = this.unknownText(text, variant);
        if (variant === '-explicitFont') {
            var styles = this.cssFontStyles(font);
            this.adaptor.setAttributes(node, { style: styles });
        }
        return this.measureTextNodeWithCache(node, text, variant, font);
    };
    CommonOutputJax.prototype.measureTextNodeWithCache = function (text, chars, variant, font) {
        if (font === void 0) { font = ['', false, false]; }
        if (variant === '-explicitFont') {
            variant = [font[0], font[1] ? 'T' : 'F', font[2] ? 'T' : 'F', ''].join('-');
        }
        if (!this.unknownCache.has(variant)) {
            this.unknownCache.set(variant, new Map());
        }
        var map = this.unknownCache.get(variant);
        var cached = map.get(chars);
        if (cached)
            return cached;
        var bbox = this.measureTextNode(text);
        map.set(chars, bbox);
        return bbox;
    };
    CommonOutputJax.prototype.measureXMLnode = function (xml) {
        var adaptor = this.adaptor;
        var content = this.html('mjx-xml-block', { style: { display: 'inline-block' } }, [adaptor.clone(xml)]);
        var base = this.html('mjx-baseline', { style: { display: 'inline-block', width: 0, height: 0 } });
        var style = {
            position: 'absolute',
            display: 'inline-block',
            'font-family': 'initial',
            'line-height': 'normal'
        };
        var node = this.html('mjx-measure-xml', { style: style }, [base, content]);
        adaptor.append(adaptor.parent(this.math.start.node), this.container);
        adaptor.append(this.container, node);
        var em = this.math.metrics.em * this.math.metrics.scale;
        var _a = adaptor.nodeBBox(content), left = _a.left, right = _a.right, bottom = _a.bottom, top = _a.top;
        var w = (right - left) / em;
        var h = (adaptor.nodeBBox(base).top - top) / em;
        var d = (bottom - top) / em - h;
        adaptor.remove(this.container);
        adaptor.remove(node);
        return { w: w, h: h, d: d };
    };
    CommonOutputJax.prototype.cssFontStyles = function (font, styles) {
        if (styles === void 0) { styles = {}; }
        var _a = __read(font, 3), family = _a[0], italic = _a[1], bold = _a[2];
        styles['font-family'] = this.font.getFamily(family);
        if (italic)
            styles['font-style'] = 'italic';
        if (bold)
            styles['font-weight'] = 'bold';
        return styles;
    };
    CommonOutputJax.prototype.getFontData = function (styles) {
        if (!styles) {
            styles = new Styles_js_1.Styles();
        }
        return [this.font.getFamily(styles.get('font-family')),
            styles.get('font-style') === 'italic',
            styles.get('font-weight') === 'bold'];
    };
    CommonOutputJax.NAME = 'Common';
    CommonOutputJax.OPTIONS = __assign(__assign({}, OutputJax_js_1.AbstractOutputJax.OPTIONS), { scale: 1, minScale: .5, matchFontHeight: true, mtextInheritFont: false, merrorInheritFont: false, mtextFont: '', merrorFont: 'serif', mathmlSpacing: false, skipAttributes: {}, exFactor: .5, displayAlign: 'center', displayIndent: '0', wrapperFactory: null, font: null, cssStyles: null });
    CommonOutputJax.commonStyles = {};
    return CommonOutputJax;
}(OutputJax_js_1.AbstractOutputJax));
exports.CommonOutputJax = CommonOutputJax;
//# sourceMappingURL=OutputJax.js.map

/***/ }),
/* 18 */
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
exports.CHTMLWrapperFactory = void 0;
var WrapperFactory_js_1 = __webpack_require__(19);
var Wrappers_js_1 = __webpack_require__(20);
var CHTMLWrapperFactory = (function (_super) {
    __extends(CHTMLWrapperFactory, _super);
    function CHTMLWrapperFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLWrapperFactory.defaultNodes = Wrappers_js_1.CHTMLWrappers;
    return CHTMLWrapperFactory;
}(WrapperFactory_js_1.CommonWrapperFactory));
exports.CHTMLWrapperFactory = CHTMLWrapperFactory;
//# sourceMappingURL=WrapperFactory.js.map

/***/ }),
/* 19 */
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
exports.CommonWrapperFactory = void 0;
var WrapperFactory_js_1 = __webpack_require__(73);
var CommonWrapperFactory = (function (_super) {
    __extends(CommonWrapperFactory, _super);
    function CommonWrapperFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jax = null;
        return _this;
    }
    Object.defineProperty(CommonWrapperFactory.prototype, "Wrappers", {
        get: function () {
            return this.node;
        },
        enumerable: false,
        configurable: true
    });
    CommonWrapperFactory.defaultNodes = {};
    return CommonWrapperFactory;
}(WrapperFactory_js_1.AbstractWrapperFactory));
exports.CommonWrapperFactory = CommonWrapperFactory;
//# sourceMappingURL=WrapperFactory.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHTMLWrappers = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var math_js_1 = __webpack_require__(22);
var mi_js_1 = __webpack_require__(24);
var mo_js_1 = __webpack_require__(26);
var mn_js_1 = __webpack_require__(28);
var ms_js_1 = __webpack_require__(30);
var mtext_js_1 = __webpack_require__(32);
var mspace_js_1 = __webpack_require__(34);
var mpadded_js_1 = __webpack_require__(36);
var menclose_js_1 = __webpack_require__(38);
var mrow_js_1 = __webpack_require__(41);
var mfenced_js_1 = __webpack_require__(42);
var mfrac_js_1 = __webpack_require__(44);
var msqrt_js_1 = __webpack_require__(11);
var mroot_js_1 = __webpack_require__(47);
var msubsup_js_1 = __webpack_require__(7);
var munderover_js_1 = __webpack_require__(51);
var mmultiscripts_js_1 = __webpack_require__(52);
var mtable_js_1 = __webpack_require__(54);
var mtr_js_1 = __webpack_require__(56);
var mtd_js_1 = __webpack_require__(57);
var maction_js_1 = __webpack_require__(59);
var mglyph_js_1 = __webpack_require__(60);
var semantics_js_1 = __webpack_require__(62);
var TeXAtom_js_1 = __webpack_require__(64);
var TextNode_js_1 = __webpack_require__(66);
exports.CHTMLWrappers = (_a = {},
    _a[math_js_1.CHTMLmath.kind] = math_js_1.CHTMLmath,
    _a[mrow_js_1.CHTMLmrow.kind] = mrow_js_1.CHTMLmrow,
    _a[mrow_js_1.CHTMLinferredMrow.kind] = mrow_js_1.CHTMLinferredMrow,
    _a[mi_js_1.CHTMLmi.kind] = mi_js_1.CHTMLmi,
    _a[mo_js_1.CHTMLmo.kind] = mo_js_1.CHTMLmo,
    _a[mn_js_1.CHTMLmn.kind] = mn_js_1.CHTMLmn,
    _a[ms_js_1.CHTMLms.kind] = ms_js_1.CHTMLms,
    _a[mtext_js_1.CHTMLmtext.kind] = mtext_js_1.CHTMLmtext,
    _a[mspace_js_1.CHTMLmspace.kind] = mspace_js_1.CHTMLmspace,
    _a[mpadded_js_1.CHTMLmpadded.kind] = mpadded_js_1.CHTMLmpadded,
    _a[menclose_js_1.CHTMLmenclose.kind] = menclose_js_1.CHTMLmenclose,
    _a[mfrac_js_1.CHTMLmfrac.kind] = mfrac_js_1.CHTMLmfrac,
    _a[msqrt_js_1.CHTMLmsqrt.kind] = msqrt_js_1.CHTMLmsqrt,
    _a[mroot_js_1.CHTMLmroot.kind] = mroot_js_1.CHTMLmroot,
    _a[msubsup_js_1.CHTMLmsub.kind] = msubsup_js_1.CHTMLmsub,
    _a[msubsup_js_1.CHTMLmsup.kind] = msubsup_js_1.CHTMLmsup,
    _a[msubsup_js_1.CHTMLmsubsup.kind] = msubsup_js_1.CHTMLmsubsup,
    _a[munderover_js_1.CHTMLmunder.kind] = munderover_js_1.CHTMLmunder,
    _a[munderover_js_1.CHTMLmover.kind] = munderover_js_1.CHTMLmover,
    _a[munderover_js_1.CHTMLmunderover.kind] = munderover_js_1.CHTMLmunderover,
    _a[mmultiscripts_js_1.CHTMLmmultiscripts.kind] = mmultiscripts_js_1.CHTMLmmultiscripts,
    _a[mfenced_js_1.CHTMLmfenced.kind] = mfenced_js_1.CHTMLmfenced,
    _a[mtable_js_1.CHTMLmtable.kind] = mtable_js_1.CHTMLmtable,
    _a[mtr_js_1.CHTMLmtr.kind] = mtr_js_1.CHTMLmtr,
    _a[mtr_js_1.CHTMLmlabeledtr.kind] = mtr_js_1.CHTMLmlabeledtr,
    _a[mtd_js_1.CHTMLmtd.kind] = mtd_js_1.CHTMLmtd,
    _a[maction_js_1.CHTMLmaction.kind] = maction_js_1.CHTMLmaction,
    _a[mglyph_js_1.CHTMLmglyph.kind] = mglyph_js_1.CHTMLmglyph,
    _a[semantics_js_1.CHTMLsemantics.kind] = semantics_js_1.CHTMLsemantics,
    _a[semantics_js_1.CHTMLannotation.kind] = semantics_js_1.CHTMLannotation,
    _a[semantics_js_1.CHTMLannotationXML.kind] = semantics_js_1.CHTMLannotationXML,
    _a[semantics_js_1.CHTMLxml.kind] = semantics_js_1.CHTMLxml,
    _a[TeXAtom_js_1.CHTMLTeXAtom.kind] = TeXAtom_js_1.CHTMLTeXAtom,
    _a[TextNode_js_1.CHTMLTextNode.kind] = TextNode_js_1.CHTMLTextNode,
    _a[Wrapper_js_1.CHTMLWrapper.kind] = Wrapper_js_1.CHTMLWrapper,
    _a);
//# sourceMappingURL=Wrappers.js.map

/***/ }),
/* 21 */
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
exports.CommonWrapper = void 0;
var Wrapper_js_1 = __webpack_require__(74);
var MmlNode_js_1 = __webpack_require__(5);
var string_js_1 = __webpack_require__(3);
var LENGTHS = __webpack_require__(2);
var Styles_js_1 = __webpack_require__(69);
var BBox_js_1 = __webpack_require__(1);
var FontData_js_1 = __webpack_require__(4);
var SMALLSIZE = 2 / 18;
function MathMLSpace(script, size) {
    return (script ? size < SMALLSIZE ? 0 : SMALLSIZE : size);
}
var CommonWrapper = (function (_super) {
    __extends(CommonWrapper, _super);
    function CommonWrapper(factory, node, parent) {
        if (parent === void 0) { parent = null; }
        var _this = _super.call(this, factory, node) || this;
        _this.parent = null;
        _this.removedStyles = null;
        _this.styles = null;
        _this.variant = '';
        _this.bboxComputed = false;
        _this.stretch = FontData_js_1.NOSTRETCH;
        _this.font = null;
        _this.parent = parent;
        _this.font = factory.jax.font;
        _this.bbox = BBox_js_1.BBox.zero();
        _this.getStyles();
        _this.getVariant();
        _this.getScale();
        _this.getSpace();
        _this.childNodes = node.childNodes.map(function (child) {
            var wrapped = _this.wrap(child);
            if (wrapped.bbox.pwidth && (node.notParent || node.isKind('math'))) {
                _this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
            }
            return wrapped;
        });
        return _this;
    }
    Object.defineProperty(CommonWrapper.prototype, "jax", {
        get: function () {
            return this.factory.jax;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonWrapper.prototype, "adaptor", {
        get: function () {
            return this.factory.jax.adaptor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonWrapper.prototype, "metrics", {
        get: function () {
            return this.factory.jax.math.metrics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommonWrapper.prototype, "fixesPWidth", {
        get: function () {
            return !this.node.notParent && !this.node.isToken;
        },
        enumerable: false,
        configurable: true
    });
    CommonWrapper.prototype.wrap = function (node, parent) {
        if (parent === void 0) { parent = null; }
        var wrapped = this.factory.wrap(node, parent || this);
        if (parent) {
            parent.childNodes.push(wrapped);
        }
        this.jax.nodeMap.set(node, wrapped);
        return wrapped;
    };
    CommonWrapper.prototype.getBBox = function (save) {
        if (save === void 0) { save = true; }
        if (this.bboxComputed) {
            return this.bbox;
        }
        var bbox = (save ? this.bbox : BBox_js_1.BBox.zero());
        this.computeBBox(bbox);
        this.bboxComputed = save;
        return bbox;
    };
    CommonWrapper.prototype.computeBBox = function (bbox, recompute) {
        var e_1, _a;
        if (recompute === void 0) { recompute = false; }
        bbox.empty();
        try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                bbox.append(child.getBBox());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        bbox.clean();
        if (this.fixesPWidth && this.setChildPWidths(recompute)) {
            this.computeBBox(bbox, true);
        }
    };
    CommonWrapper.prototype.setChildPWidths = function (recompute, w, clear) {
        var e_2, _a;
        if (w === void 0) { w = null; }
        if (clear === void 0) { clear = true; }
        if (recompute) {
            return false;
        }
        if (clear) {
            this.bbox.pwidth = '';
        }
        var changed = false;
        try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                var cbox = child.getBBox();
                if (cbox.pwidth && child.setChildPWidths(recompute, w === null ? cbox.w : w, clear)) {
                    changed = true;
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
        return changed;
    };
    CommonWrapper.prototype.invalidateBBox = function () {
        if (this.bboxComputed) {
            this.bboxComputed = false;
            if (this.parent) {
                this.parent.invalidateBBox();
            }
        }
    };
    CommonWrapper.prototype.copySkewIC = function (bbox) {
        var first = this.childNodes[0];
        if (first && first.bbox.sk) {
            bbox.sk = first.bbox.sk;
        }
        var last = this.childNodes[this.childNodes.length - 1];
        if (last && last.bbox.ic) {
            bbox.ic = last.bbox.ic;
            bbox.w += bbox.ic;
        }
    };
    CommonWrapper.prototype.getStyles = function () {
        var styleString = this.node.attributes.getExplicit('style');
        if (!styleString)
            return;
        var style = this.styles = new Styles_js_1.Styles(styleString);
        for (var i = 0, m = CommonWrapper.removeStyles.length; i < m; i++) {
            var id = CommonWrapper.removeStyles[i];
            if (style.get(id)) {
                if (!this.removedStyles)
                    this.removedStyles = {};
                this.removedStyles[id] = style.get(id);
                style.set(id, '');
            }
        }
    };
    CommonWrapper.prototype.getVariant = function () {
        if (!this.node.isToken)
            return;
        var attributes = this.node.attributes;
        var variant = attributes.get('mathvariant');
        if (!attributes.getExplicit('mathvariant')) {
            var values = attributes.getList('fontfamily', 'fontweight', 'fontstyle');
            if (this.removedStyles) {
                var style = this.removedStyles;
                if (style.fontFamily)
                    values.family = style.fontFamily;
                if (style.fontWeight)
                    values.weight = style.fontWeight;
                if (style.fontStyle)
                    values.style = style.fontStyle;
            }
            if (values.fontfamily)
                values.family = values.fontfamily;
            if (values.fontweight)
                values.weight = values.fontweight;
            if (values.fontstyle)
                values.style = values.fontstyle;
            if (values.weight && values.weight.match(/^\d+$/)) {
                values.weight = (parseInt(values.weight) > 600 ? 'bold' : 'normal');
            }
            if (values.family) {
                variant = this.explicitVariant(values.family, values.weight, values.style);
            }
            else {
                if (this.node.getProperty('variantForm'))
                    variant = '-tex-variant';
                variant = (CommonWrapper.BOLDVARIANTS[values.weight] || {})[variant] || variant;
                variant = (CommonWrapper.ITALICVARIANTS[values.style] || {})[variant] || variant;
            }
        }
        this.variant = variant;
    };
    CommonWrapper.prototype.explicitVariant = function (fontFamily, fontWeight, fontStyle) {
        var style = this.styles;
        if (!style)
            style = this.styles = new Styles_js_1.Styles();
        style.set('fontFamily', fontFamily);
        if (fontWeight)
            style.set('fontWeight', fontWeight);
        if (fontStyle)
            style.set('fontStyle', fontStyle);
        return '-explicitFont';
    };
    CommonWrapper.prototype.getScale = function () {
        var scale = 1, parent = this.parent;
        var pscale = (parent ? parent.bbox.scale : 1);
        var attributes = this.node.attributes;
        var scriptlevel = Math.min(attributes.get('scriptlevel'), 2);
        var fontsize = attributes.get('fontsize');
        var mathsize = (this.node.isToken || this.node.isKind('mstyle') ?
            attributes.get('mathsize') : attributes.getInherited('mathsize'));
        if (scriptlevel !== 0) {
            scale = Math.pow(attributes.get('scriptsizemultiplier'), scriptlevel);
            var scriptminsize = this.length2em(attributes.get('scriptminsize'), .8, 1);
            if (scale < scriptminsize)
                scale = scriptminsize;
        }
        if (this.removedStyles && this.removedStyles.fontSize && !fontsize) {
            fontsize = this.removedStyles.fontSize;
        }
        if (fontsize && !attributes.getExplicit('mathsize')) {
            mathsize = fontsize;
        }
        if (mathsize !== '1') {
            scale *= this.length2em(mathsize, 1, 1);
        }
        this.bbox.scale = scale;
        this.bbox.rscale = scale / pscale;
    };
    CommonWrapper.prototype.getSpace = function () {
        var isTop = this.isTopEmbellished();
        var hasSpacing = this.node.hasSpacingAttributes();
        if (this.jax.options.mathmlSpacing || hasSpacing) {
            isTop && this.getMathMLSpacing();
        }
        else {
            this.getTeXSpacing(isTop, hasSpacing);
        }
    };
    CommonWrapper.prototype.getMathMLSpacing = function () {
        var node = this.node.coreMO();
        var attributes = node.attributes;
        var isScript = (attributes.get('scriptlevel') > 0);
        this.bbox.L = (attributes.isSet('lspace') ?
            Math.max(0, this.length2em(attributes.get('lspace'))) :
            MathMLSpace(isScript, node.lspace));
        this.bbox.R = (attributes.isSet('rspace') ?
            Math.max(0, this.length2em(attributes.get('rspace'))) :
            MathMLSpace(isScript, node.rspace));
    };
    CommonWrapper.prototype.getTeXSpacing = function (isTop, hasSpacing) {
        if (!hasSpacing) {
            var space = this.node.texSpacing();
            if (space) {
                this.bbox.L = this.length2em(space);
            }
        }
        if (isTop || hasSpacing) {
            var attributes = this.node.coreMO().attributes;
            if (attributes.isSet('lspace')) {
                this.bbox.L = Math.max(0, this.length2em(attributes.get('lspace')));
            }
            if (attributes.isSet('rspace')) {
                this.bbox.R = Math.max(0, this.length2em(attributes.get('rspace')));
            }
        }
    };
    CommonWrapper.prototype.isTopEmbellished = function () {
        return (this.node.isEmbellished &&
            !(this.node.Parent && this.node.Parent.isEmbellished));
    };
    CommonWrapper.prototype.core = function () {
        return this.jax.nodeMap.get(this.node.core());
    };
    CommonWrapper.prototype.coreMO = function () {
        return this.jax.nodeMap.get(this.node.coreMO());
    };
    CommonWrapper.prototype.getText = function () {
        var e_3, _a;
        var text = '';
        if (this.node.isToken) {
            try {
                for (var _b = __values(this.node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    if (child instanceof MmlNode_js_1.TextNode) {
                        text += child.getText();
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
        }
        return text;
    };
    CommonWrapper.prototype.canStretch = function (direction) {
        this.stretch = FontData_js_1.NOSTRETCH;
        if (this.node.isEmbellished) {
            var core = this.core();
            if (core && core.node !== this.node) {
                if (core.canStretch(direction)) {
                    this.stretch = core.stretch;
                }
            }
        }
        return this.stretch.dir !== 0;
    };
    CommonWrapper.prototype.getAlignShift = function () {
        var _a;
        var _b = (_a = this.node.attributes).getList.apply(_a, __spread(MmlNode_js_1.indentAttributes)), indentalign = _b.indentalign, indentshift = _b.indentshift, indentalignfirst = _b.indentalignfirst, indentshiftfirst = _b.indentshiftfirst;
        if (indentalignfirst !== 'indentalign') {
            indentalign = indentalignfirst;
        }
        if (indentalign === 'auto') {
            indentalign = this.jax.options.displayAlign;
        }
        if (indentshiftfirst !== 'indentshift') {
            indentshift = indentshiftfirst;
        }
        if (indentshift === 'auto') {
            indentshift = this.jax.options.displayIndent;
            if (indentalign === 'right' && !indentshift.match(/^\s*0[a-z]*\s*$/)) {
                indentshift = ('-' + indentshift.trim()).replace(/^--/, '');
            }
        }
        var shift = this.length2em(indentshift, this.metrics.containerWidth);
        return [indentalign, shift];
    };
    CommonWrapper.prototype.getAlignX = function (W, bbox, align) {
        return (align === 'right' ? W - (bbox.w + bbox.R) * bbox.rscale :
            align === 'left' ? bbox.L * bbox.rscale :
                (W - bbox.w * bbox.rscale) / 2);
    };
    CommonWrapper.prototype.getAlignY = function (H, D, h, d, align) {
        return (align === 'top' ? H - h :
            align === 'bottom' ? d - D :
                align === 'middle' ? ((H - h) - (D - d)) / 2 :
                    0);
    };
    CommonWrapper.prototype.getWrapWidth = function (i) {
        return this.childNodes[i].getBBox().w;
    };
    CommonWrapper.prototype.getChildAlign = function (_i) {
        return 'left';
    };
    CommonWrapper.prototype.percent = function (m) {
        return LENGTHS.percent(m);
    };
    CommonWrapper.prototype.em = function (m) {
        return LENGTHS.em(m);
    };
    CommonWrapper.prototype.px = function (m, M) {
        if (M === void 0) { M = -LENGTHS.BIGDIMEN; }
        return LENGTHS.px(m, M, this.metrics.em);
    };
    CommonWrapper.prototype.length2em = function (length, size, scale) {
        if (size === void 0) { size = 1; }
        if (scale === void 0) { scale = null; }
        if (scale === null) {
            scale = this.bbox.scale;
        }
        return LENGTHS.length2em(length, size, scale, this.jax.pxPerEm);
    };
    CommonWrapper.prototype.unicodeChars = function (text, name) {
        if (name === void 0) { name = this.variant; }
        var chars = string_js_1.unicodeChars(text);
        var variant = this.font.getVariant(name);
        if (variant && variant.chars) {
            var map_1 = variant.chars;
            chars = chars.map(function (n) { return ((map_1[n] || [])[3] || {}).smp || n; });
        }
        return chars;
    };
    CommonWrapper.prototype.remapChars = function (chars) {
        return chars;
    };
    CommonWrapper.prototype.mmlText = function (text) {
        return this.node.factory.create('text').setText(text);
    };
    CommonWrapper.prototype.mmlNode = function (kind, properties, children) {
        if (properties === void 0) { properties = {}; }
        if (children === void 0) { children = []; }
        return this.node.factory.create(kind, properties, children);
    };
    CommonWrapper.prototype.createMo = function (text) {
        var mmlFactory = this.node.factory;
        var textNode = mmlFactory.create('text').setText(text);
        var mml = mmlFactory.create('mo', { stretchy: true }, [textNode]);
        mml.inheritAttributesFrom(this.node);
        var node = this.wrap(mml);
        node.parent = this;
        return node;
    };
    CommonWrapper.prototype.getVariantChar = function (variant, n) {
        var char = this.font.getChar(variant, n) || [0, 0, 0, { unknown: true }];
        if (char.length === 3) {
            char[3] = {};
        }
        return char;
    };
    CommonWrapper.kind = 'unknown';
    CommonWrapper.styles = {};
    CommonWrapper.removeStyles = [
        'fontSize', 'fontFamily', 'fontWeight',
        'fontStyle', 'fontVariant', 'font'
    ];
    CommonWrapper.skipAttributes = {
        fontfamily: true, fontsize: true, fontweight: true, fontstyle: true,
        color: true, background: true,
        'class': true, href: true, style: true,
        xmlns: true
    };
    CommonWrapper.BOLDVARIANTS = {
        bold: {
            normal: 'bold',
            italic: 'bold-italic',
            fraktur: 'bold-fraktur',
            script: 'bold-script',
            'sans-serif': 'bold-sans-serif',
            'sans-serif-italic': 'sans-serif-bold-italic'
        },
        normal: {
            bold: 'normal',
            'bold-italic': 'italic',
            'bold-fraktur': 'fraktur',
            'bold-script': 'script',
            'bold-sans-serif': 'sans-serif',
            'sans-serif-bold-italic': 'sans-serif-italic'
        }
    };
    CommonWrapper.ITALICVARIANTS = {
        italic: {
            normal: 'italic',
            bold: 'bold-italic',
            'sans-serif': 'sans-serif-italic',
            'bold-sans-serif': 'sans-serif-bold-italic'
        },
        normal: {
            italic: 'normal',
            'bold-italic': 'bold',
            'sans-serif-italic': 'sans-serif',
            'sans-serif-bold-italic': 'bold-sans-serif'
        }
    };
    return CommonWrapper;
}(Wrapper_js_1.AbstractWrapper));
exports.CommonWrapper = CommonWrapper;
//# sourceMappingURL=Wrapper.js.map

/***/ }),
/* 22 */
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
exports.CHTMLmath = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var math_js_1 = __webpack_require__(23);
var math_js_2 = __webpack_require__(75);
var BBox_js_1 = __webpack_require__(1);
var CHTMLmath = (function (_super) {
    __extends(CHTMLmath, _super);
    function CHTMLmath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmath.prototype.toCHTML = function (parent) {
        _super.prototype.toCHTML.call(this, parent);
        var chtml = this.chtml;
        var adaptor = this.adaptor;
        var display = (this.node.attributes.get('display') === 'block');
        if (display) {
            adaptor.setAttribute(chtml, 'display', 'true');
            adaptor.setAttribute(parent, 'display', 'true');
            this.handleDisplay(parent);
        }
        else {
            this.handleInline(parent);
        }
        adaptor.addClass(chtml, 'MJX-TEX');
    };
    CHTMLmath.prototype.handleDisplay = function (parent) {
        var adaptor = this.adaptor;
        var _a = __read(this.getAlignShift(), 2), align = _a[0], shift = _a[1];
        if (align !== 'center') {
            adaptor.setAttribute(parent, 'justify', align);
        }
        if (this.bbox.pwidth === BBox_js_1.BBox.fullWidth) {
            adaptor.setAttribute(parent, 'width', 'full');
            if (this.jax.table) {
                var _b = this.jax.table.getBBox(), L = _b.L, w = _b.w, R = _b.R;
                if (align === 'right') {
                    R = Math.max(R || -shift, -shift);
                }
                else if (align === 'left') {
                    L = Math.max(L || shift, shift);
                }
                else if (align === 'center') {
                    w += 2 * Math.abs(shift);
                }
                var W = this.em(Math.max(0, L + w + R));
                adaptor.setStyle(parent, 'min-width', W);
                adaptor.setStyle(this.jax.table.chtml, 'min-width', W);
            }
        }
        else {
            this.setIndent(this.chtml, align, shift);
        }
    };
    CHTMLmath.prototype.handleInline = function (parent) {
        var adaptor = this.adaptor;
        var margin = adaptor.getStyle(this.chtml, 'margin-right');
        if (margin) {
            adaptor.setStyle(this.chtml, 'margin-right', '');
            adaptor.setStyle(parent, 'margin-right', margin);
            adaptor.setStyle(parent, 'width', '0');
        }
    };
    CHTMLmath.prototype.setChildPWidths = function (recompute, w, clear) {
        if (w === void 0) { w = null; }
        if (clear === void 0) { clear = true; }
        return (this.parent ? _super.prototype.setChildPWidths.call(this, recompute, w, clear) : false);
    };
    CHTMLmath.kind = math_js_2.MmlMath.prototype.kind;
    CHTMLmath.styles = {
        'mjx-math': {
            'line-height': 0,
            'text-align': 'left',
            'text-indent': 0,
            'font-style': 'normal',
            'font-weight': 'normal',
            'font-size': '100%',
            'font-size-adjust': 'none',
            'letter-spacing': 'normal',
            'word-wrap': 'normal',
            'word-spacing': 'normal',
            'white-space': 'nowrap',
            'direction': 'ltr',
            'padding': '1px 0'
        },
        'mjx-container[jax="CHTML"][display="true"]': {
            display: 'block',
            'text-align': 'center',
            margin: '1em 0'
        },
        'mjx-container[jax="CHTML"][display="true"][width="full"]': {
            display: 'flex'
        },
        'mjx-container[jax="CHTML"][display="true"] mjx-math': {
            padding: 0
        },
        'mjx-container[jax="CHTML"][justify="left"]': {
            'text-align': 'left'
        },
        'mjx-container[jax="CHTML"][justify="right"]': {
            'text-align': 'right'
        }
    };
    return CHTMLmath;
}(math_js_1.CommonMathMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmath = CHTMLmath;
//# sourceMappingURL=math.js.map

/***/ }),
/* 23 */
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
exports.CommonMathMixin = void 0;
function CommonMathMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getWrapWidth = function (_i) {
            return (this.parent ? this.getBBox().w : this.metrics.containerWidth / this.jax.pxPerEm);
        };
        return class_1;
    }(Base));
}
exports.CommonMathMixin = CommonMathMixin;
//# sourceMappingURL=math.js.map

/***/ }),
/* 24 */
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
exports.CHTMLmi = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mi_js_1 = __webpack_require__(25);
var mi_js_2 = __webpack_require__(76);
var CHTMLmi = (function (_super) {
    __extends(CHTMLmi, _super);
    function CHTMLmi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmi.prototype.toCHTML = function (parent) {
        _super.prototype.toCHTML.call(this, parent);
        if (this.noIC) {
            this.adaptor.setAttribute(this.chtml, 'noIC', 'true');
        }
    };
    CHTMLmi.kind = mi_js_2.MmlMi.prototype.kind;
    return CHTMLmi;
}(mi_js_1.CommonMiMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmi = CHTMLmi;
//# sourceMappingURL=mi.js.map

/***/ }),
/* 25 */
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
exports.CommonMiMixin = void 0;
function CommonMiMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.noIC = false;
            return _this;
        }
        class_1.prototype.computeBBox = function (bbox, _recompute) {
            if (_recompute === void 0) { _recompute = false; }
            _super.prototype.computeBBox.call(this, bbox);
            this.copySkewIC(bbox);
            if (this.noIC) {
                bbox.w -= bbox.ic;
            }
        };
        return class_1;
    }(Base));
}
exports.CommonMiMixin = CommonMiMixin;
//# sourceMappingURL=mi.js.map

/***/ }),
/* 26 */
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
exports.CHTMLmo = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mo_js_1 = __webpack_require__(27);
var mo_js_2 = __webpack_require__(77);
var BBox_js_1 = __webpack_require__(1);
var CHTMLmo = (function (_super) {
    __extends(CHTMLmo, _super);
    function CHTMLmo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmo.prototype.toCHTML = function (parent) {
        var e_1, _a;
        var attributes = this.node.attributes;
        var symmetric = attributes.get('symmetric') && this.stretch.dir !== 2;
        var stretchy = this.stretch.dir !== 0;
        if (stretchy && this.size === null) {
            this.getStretchedVariant([]);
        }
        var chtml = this.standardCHTMLnode(parent);
        if (this.noIC) {
            this.adaptor.setAttribute(chtml, 'noIC', 'true');
        }
        if (stretchy && this.size < 0) {
            this.stretchHTML(chtml);
        }
        else {
            if (symmetric || attributes.get('largeop')) {
                var bbox = BBox_js_1.BBox.empty();
                _super.prototype.computeBBox.call(this, bbox);
                var u = this.em((bbox.d - bbox.h) / 2 + this.font.params.axis_height);
                if (u !== '0') {
                    this.adaptor.setStyle(chtml, 'verticalAlign', u);
                }
            }
            try {
                for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    child.toCHTML(chtml);
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
    };
    CHTMLmo.prototype.stretchHTML = function (chtml) {
        var c = this.getText().codePointAt(0);
        var delim = this.stretch;
        delim.used = true;
        var stretch = delim.stretch;
        var content = [];
        if (stretch[0]) {
            content.push(this.html('mjx-beg', {}, [this.html('mjx-c')]));
        }
        content.push(this.html('mjx-ext', {}, [this.html('mjx-c')]));
        if (stretch.length === 4) {
            content.push(this.html('mjx-mid', {}, [this.html('mjx-c')]), this.html('mjx-ext', {}, [this.html('mjx-c')]));
        }
        if (stretch[2]) {
            content.push(this.html('mjx-end', {}, [this.html('mjx-c')]));
        }
        var styles = {};
        var _a = this.bbox, h = _a.h, d = _a.d, w = _a.w;
        if (delim.dir === 1) {
            content.push(this.html('mjx-mark'));
            styles.height = this.em(h + d);
            styles.verticalAlign = this.em(-d);
        }
        else {
            styles.width = this.em(w);
        }
        var dir = mo_js_1.DirectionVH[delim.dir];
        var properties = { class: this.char(delim.c || c), style: styles };
        var html = this.html('mjx-stretchy-' + dir, properties, content);
        this.adaptor.append(chtml, html);
    };
    CHTMLmo.kind = mo_js_2.MmlMo.prototype.kind;
    CHTMLmo.styles = {
        'mjx-stretchy-h': {
            display: 'inline-table',
            width: '100%'
        },
        'mjx-stretchy-h > *': {
            display: 'table-cell',
            width: 0
        },
        'mjx-stretchy-h > * > mjx-c': {
            display: 'inline-block',
            transform: 'scalex(1.0000001)'
        },
        'mjx-stretchy-h > * > mjx-c::before': {
            display: 'inline-block',
            padding: '.001em 0',
            width: 'initial'
        },
        'mjx-stretchy-h > mjx-ext': {
            overflow: 'hidden',
            width: '100%'
        },
        'mjx-stretchy-h > mjx-ext > mjx-c::before': {
            transform: 'scalex(500)'
        },
        'mjx-stretchy-h > mjx-ext > mjx-c': {
            width: 0
        },
        'mjx-stretchy-h > mjx-beg > mjx-c': {
            'margin-right': '-.1em'
        },
        'mjx-stretchy-h > mjx-end > mjx-c': {
            'margin-left': '-.1em'
        },
        'mjx-stretchy-v': {
            display: 'inline-block'
        },
        'mjx-stretchy-v > *': {
            display: 'block'
        },
        'mjx-stretchy-v > mjx-beg': {
            height: 0
        },
        'mjx-stretchy-v > mjx-end > mjx-c': {
            display: 'block'
        },
        'mjx-stretchy-v > * > mjx-c': {
            transform: 'scaley(1.0000001)',
            'transform-origin': 'left center',
            overflow: 'hidden'
        },
        'mjx-stretchy-v > mjx-ext': {
            display: 'block',
            height: '100%',
            'box-sizing': 'border-box',
            border: '0px solid transparent',
            overflow: 'hidden'
        },
        'mjx-stretchy-v > mjx-ext > mjx-c::before': {
            width: 'initial'
        },
        'mjx-stretchy-v > mjx-ext > mjx-c': {
            transform: 'scaleY(500) translateY(.1em)',
            overflow: 'visible'
        },
        'mjx-mark': {
            display: 'inline-block',
            height: '0px'
        }
    };
    return CHTMLmo;
}(mo_js_1.CommonMoMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmo = CHTMLmo;
//# sourceMappingURL=mo.js.map

/***/ }),
/* 27 */
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonMoMixin = exports.DirectionVH = void 0;
var FontData_js_1 = __webpack_require__(4);
exports.DirectionVH = (_a = {},
    _a[1] = 'v',
    _a[2] = 'h',
    _a);
function CommonMoMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.noIC = false;
            _this.size = null;
            _this.isAccent = _this.node.isAccent;
            return _this;
        }
        class_1.prototype.computeBBox = function (bbox, _recompute) {
            if (_recompute === void 0) { _recompute = false; }
            var stretchy = (this.stretch.dir !== 0);
            if (stretchy && this.size === null) {
                this.getStretchedVariant([0]);
            }
            if (stretchy && this.size < 0)
                return;
            _super.prototype.computeBBox.call(this, bbox);
            this.copySkewIC(bbox);
            if (this.noIC) {
                bbox.w -= bbox.ic;
            }
            if (this.node.attributes.get('symmetric') &&
                this.stretch.dir !== 2) {
                var d = ((bbox.h + bbox.d) / 2 + this.font.params.axis_height) - bbox.h;
                bbox.h += d;
                bbox.d -= d;
            }
        };
        class_1.prototype.getVariant = function () {
            if (this.node.attributes.get('largeop')) {
                this.variant = (this.node.attributes.get('displaystyle') ? '-largeop' : '-smallop');
            }
            else {
                _super.prototype.getVariant.call(this);
            }
        };
        class_1.prototype.canStretch = function (direction) {
            if (this.stretch.dir !== 0) {
                return this.stretch.dir === direction;
            }
            var attributes = this.node.attributes;
            if (!attributes.get('stretchy'))
                return false;
            var c = this.getText();
            if (Array.from(c).length !== 1)
                return false;
            var delim = this.font.getDelimiter(c.codePointAt(0));
            this.stretch = (delim && delim.dir === direction ? delim : FontData_js_1.NOSTRETCH);
            return this.stretch.dir !== 0;
        };
        class_1.prototype.getStretchedVariant = function (WH, exact) {
            var e_1, _a;
            if (exact === void 0) { exact = false; }
            if (this.stretch.dir !== 0) {
                var D = this.getWH(WH);
                var min = this.getSize('minsize', 0);
                var max = this.getSize('maxsize', Infinity);
                D = Math.max(min, Math.min(max, D));
                var m = (min || exact ? D : Math.max(D * this.font.params.delimiterfactor / 1000, D - this.font.params.delimitershortfall));
                var delim = this.stretch;
                var c = delim.c || this.getText().codePointAt(0);
                var i = 0;
                if (delim.sizes) {
                    try {
                        for (var _b = __values(delim.sizes), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var d = _c.value;
                            if (d >= m) {
                                this.variant = this.font.getSizeVariant(c, i);
                                this.size = i;
                                return;
                            }
                            i++;
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
                if (delim.stretch) {
                    this.size = -1;
                    this.invalidateBBox();
                    this.getStretchBBox(WH, D, delim);
                }
                else {
                    this.variant = this.font.getSizeVariant(c, i - 1);
                    this.size = i - 1;
                }
            }
        };
        class_1.prototype.getSize = function (name, value) {
            var attributes = this.node.attributes;
            if (attributes.isSet(name)) {
                value = this.length2em(attributes.get(name), 1, 1);
            }
            return value;
        };
        class_1.prototype.getWH = function (WH) {
            if (WH.length === 0)
                return 0;
            if (WH.length === 1)
                return WH[0];
            var _a = __read(WH, 2), H = _a[0], D = _a[1];
            var a = this.font.params.axis_height;
            return (this.node.attributes.get('symmetric') ? 2 * Math.max(H - a, D + a) : H + D);
        };
        class_1.prototype.getStretchBBox = function (WHD, D, C) {
            var _a;
            if (C.hasOwnProperty('min') && C.min > D) {
                D = C.min;
            }
            var _b = __read(C.HDW, 3), h = _b[0], d = _b[1], w = _b[2];
            if (this.stretch.dir === 1) {
                _a = __read(this.getBaseline(WHD, D, C), 2), h = _a[0], d = _a[1];
            }
            else {
                w = D;
            }
            this.bbox.h = h;
            this.bbox.d = d;
            this.bbox.w = w;
        };
        class_1.prototype.getBaseline = function (WHD, HD, C) {
            var hasWHD = (WHD.length === 2 && WHD[0] + WHD[1] === HD);
            var symmetric = this.node.attributes.get('symmetric');
            var _a = __read((hasWHD ? WHD : [HD, 0]), 2), H = _a[0], D = _a[1];
            var _b = __read([H + D, 0], 2), h = _b[0], d = _b[1];
            if (symmetric) {
                var a = this.font.params.axis_height;
                if (hasWHD) {
                    h = 2 * Math.max(H - a, D + a);
                }
                d = h / 2 - a;
            }
            else if (hasWHD) {
                d = D;
            }
            else {
                var _c = __read((C.HDW || [.75, .25]), 2), ch = _c[0], cd = _c[1];
                d = cd * (h / (ch + cd));
            }
            return [h - d, d];
        };
        class_1.prototype.remapChars = function (chars) {
            if (chars.length === 1) {
                var parent_1 = this.node.coreParent().parent;
                var isAccent = this.isAccent && !parent_1.isKind('mrow');
                var map = (isAccent ? 'accent' : 'mo');
                var text = this.font.getRemappedChar(map, chars[0]);
                if (text) {
                    chars = this.unicodeChars(text, this.variant);
                }
            }
            return chars;
        };
        return class_1;
    }(Base));
}
exports.CommonMoMixin = CommonMoMixin;
//# sourceMappingURL=mo.js.map

/***/ }),
/* 28 */
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
exports.CHTMLmn = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mn_js_1 = __webpack_require__(29);
var mn_js_2 = __webpack_require__(78);
var CHTMLmn = (function (_super) {
    __extends(CHTMLmn, _super);
    function CHTMLmn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmn.kind = mn_js_2.MmlMn.prototype.kind;
    return CHTMLmn;
}(mn_js_1.CommonMnMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmn = CHTMLmn;
//# sourceMappingURL=mn.js.map

/***/ }),
/* 29 */
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
exports.CommonMnMixin = void 0;
function CommonMnMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.remapChars = function (chars) {
            if (chars.length) {
                var text = this.font.getRemappedChar('mn', chars[0]);
                if (text) {
                    var c = this.unicodeChars(text, this.variant);
                    if (c.length === 1) {
                        chars[0] = c[0];
                    }
                    else {
                        chars = c.concat(chars.slice(1));
                    }
                }
            }
            return chars;
        };
        return class_1;
    }(Base));
}
exports.CommonMnMixin = CommonMnMixin;
//# sourceMappingURL=mn.js.map

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHTMLms = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var ms_js_1 = __webpack_require__(31);
var ms_js_2 = __webpack_require__(79);
var CHTMLms = (function (_super) {
    __extends(CHTMLms, _super);
    function CHTMLms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLms.kind = ms_js_2.MmlMs.prototype.kind;
    return CHTMLms;
}(ms_js_1.CommonMsMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLms = CHTMLms;
//# sourceMappingURL=ms.js.map

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
exports.CommonMsMixin = void 0;
function CommonMsMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            var attributes = _this.node.attributes;
            var quotes = attributes.getList('lquote', 'rquote');
            if (_this.variant !== 'monospace') {
                if (!attributes.isSet('lquote') && quotes.lquote === '"')
                    quotes.lquote = '\u201C';
                if (!attributes.isSet('rquote') && quotes.rquote === '"')
                    quotes.rquote = '\u201D';
            }
            _this.childNodes.unshift(_this.createText(quotes.lquote));
            _this.childNodes.push(_this.createText(quotes.rquote));
            return _this;
        }
        class_1.prototype.createText = function (text) {
            var node = this.wrap(this.mmlText(text));
            node.parent = this;
            return node;
        };
        return class_1;
    }(Base));
}
exports.CommonMsMixin = CommonMsMixin;
//# sourceMappingURL=ms.js.map

/***/ }),
/* 32 */
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
exports.CHTMLmtext = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mtext_js_1 = __webpack_require__(33);
var mtext_js_2 = __webpack_require__(80);
var CHTMLmtext = (function (_super) {
    __extends(CHTMLmtext, _super);
    function CHTMLmtext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmtext.kind = mtext_js_2.MmlMtext.prototype.kind;
    return CHTMLmtext;
}(mtext_js_1.CommonMtextMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmtext = CHTMLmtext;
//# sourceMappingURL=mtext.js.map

/***/ }),
/* 33 */
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
exports.CommonMtextMixin = void 0;
function CommonMtextMixin(Base) {
    var _a;
    return _a = (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.getVariant = function () {
                var options = this.jax.options;
                var data = this.jax.math.outputData;
                var merror = ((!!data.merrorFamily || !!options.merrorFont) && this.node.Parent.isKind('merror'));
                if (!!data.mtextFamily || !!options.mtextFont || merror) {
                    var variant = this.node.attributes.get('mathvariant');
                    var font = this.constructor.INHERITFONTS[variant] || this.jax.font.getCssFont(variant);
                    var family = font[0] || (merror ? data.merrorFamily || options.merrorFont :
                        data.mtextFamily || options.mtextFont);
                    this.variant = this.explicitVariant(family, font[2] ? 'bold' : '', font[1] ? 'italic' : '');
                    return;
                }
                _super.prototype.getVariant.call(this);
            };
            return class_1;
        }(Base)),
        _a.INHERITFONTS = {
            normal: ['', false, false],
            bold: ['', false, true],
            italic: ['', true, false],
            'bold-italic': ['', true, true]
        },
        _a;
}
exports.CommonMtextMixin = CommonMtextMixin;
//# sourceMappingURL=mtext.js.map

/***/ }),
/* 34 */
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
exports.CHTMLmspace = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mspace_js_1 = __webpack_require__(35);
var mspace_js_2 = __webpack_require__(81);
var CHTMLmspace = (function (_super) {
    __extends(CHTMLmspace, _super);
    function CHTMLmspace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmspace.prototype.toCHTML = function (parent) {
        var chtml = this.standardCHTMLnode(parent);
        var _a = this.getBBox(), w = _a.w, h = _a.h, d = _a.d;
        if (w < 0) {
            this.adaptor.setStyle(chtml, 'marginRight', this.em(w));
            w = 0;
        }
        if (w) {
            this.adaptor.setStyle(chtml, 'width', this.em(w));
        }
        h = Math.max(0, h + d);
        if (h) {
            this.adaptor.setStyle(chtml, 'height', this.em(Math.max(0, h)));
        }
        if (d) {
            this.adaptor.setStyle(chtml, 'verticalAlign', this.em(-d));
        }
    };
    CHTMLmspace.kind = mspace_js_2.MmlMspace.prototype.kind;
    return CHTMLmspace;
}(mspace_js_1.CommonMspaceMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmspace = CHTMLmspace;
//# sourceMappingURL=mspace.js.map

/***/ }),
/* 35 */
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
exports.CommonMspaceMixin = void 0;
function CommonMspaceMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function (bbox, _recompute) {
            if (_recompute === void 0) { _recompute = false; }
            var attributes = this.node.attributes;
            bbox.w = this.length2em(attributes.get('width'), 0);
            bbox.h = this.length2em(attributes.get('height'), 0);
            bbox.d = this.length2em(attributes.get('depth'), 0);
        };
        class_1.prototype.handleVariant = function () {
        };
        return class_1;
    }(Base));
}
exports.CommonMspaceMixin = CommonMspaceMixin;
//# sourceMappingURL=mspace.js.map

/***/ }),
/* 36 */
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
exports.CHTMLmpadded = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mpadded_js_1 = __webpack_require__(37);
var mpadded_js_2 = __webpack_require__(82);
var CHTMLmpadded = (function (_super) {
    __extends(CHTMLmpadded, _super);
    function CHTMLmpadded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmpadded.prototype.toCHTML = function (parent) {
        var e_1, _a;
        var chtml = this.standardCHTMLnode(parent);
        var content = [];
        var style = {};
        var _b = __read(this.getDimens(), 9), W = _b[2], dh = _b[3], dd = _b[4], dw = _b[5], x = _b[6], y = _b[7], dx = _b[8];
        if (dw) {
            style.width = this.em(W + dw);
        }
        if (dh || dd) {
            style.margin = this.em(dh) + ' 0 ' + this.em(dd);
        }
        if (x + dx || y) {
            style.position = 'relative';
            var rbox = this.html('mjx-rbox', { style: { left: this.em(x + dx), top: this.em(-y) } });
            if (x + dx && this.childNodes[0].getBBox().pwidth) {
                this.adaptor.setAttribute(rbox, 'width', 'full');
                this.adaptor.setStyle(rbox, 'left', this.em(x));
            }
            content.push(rbox);
        }
        chtml = this.adaptor.append(chtml, this.html('mjx-block', { style: style }, content));
        try {
            for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
                var child = _d.value;
                child.toCHTML(content[0] || chtml);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    CHTMLmpadded.kind = mpadded_js_2.MmlMpadded.prototype.kind;
    CHTMLmpadded.styles = {
        'mjx-mpadded': {
            display: 'inline-block'
        },
        'mjx-rbox': {
            display: 'inline-block',
            position: 'relative'
        }
    };
    return CHTMLmpadded;
}(mpadded_js_1.CommonMpaddedMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmpadded = CHTMLmpadded;
//# sourceMappingURL=mpadded.js.map

/***/ }),
/* 37 */
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
exports.CommonMpaddedMixin = void 0;
function CommonMpaddedMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getDimens = function () {
            var values = this.node.attributes.getList('width', 'height', 'depth', 'lspace', 'voffset');
            var bbox = this.childNodes[0].getBBox();
            var w = bbox.w, h = bbox.h, d = bbox.d;
            var W = w, H = h, D = d, x = 0, y = 0, dx = 0;
            if (values.width !== '')
                w = this.dimen(values.width, bbox, 'w', 0);
            if (values.height !== '')
                h = this.dimen(values.height, bbox, 'h', 0);
            if (values.depth !== '')
                d = this.dimen(values.depth, bbox, 'd', 0);
            if (values.voffset !== '')
                y = this.dimen(values.voffset, bbox);
            if (values.lspace !== '')
                x = this.dimen(values.lspace, bbox);
            var align = this.node.attributes.get('data-align');
            if (align) {
                dx = this.getAlignX(w, bbox, align);
            }
            return [H, D, W, h - H, d - D, w - W, x, y, dx];
        };
        class_1.prototype.dimen = function (length, bbox, d, m) {
            if (d === void 0) { d = ''; }
            if (m === void 0) { m = null; }
            length = String(length);
            var match = length.match(/width|height|depth/);
            var size = (match ? bbox[match[0].charAt(0)] :
                (d ? bbox[d] : 0));
            var dimen = (this.length2em(length, size) || 0);
            if (length.match(/^[-+]/) && d) {
                dimen += size;
            }
            if (m != null) {
                dimen = Math.max(m, dimen);
            }
            return dimen;
        };
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            var _a = __read(this.getDimens(), 6), H = _a[0], D = _a[1], W = _a[2], dh = _a[3], dd = _a[4], dw = _a[5];
            bbox.w = W + dw;
            bbox.h = H + dh;
            bbox.d = D + dd;
            this.setChildPWidths(recompute, bbox.w);
        };
        class_1.prototype.getWrapWidth = function (_i) {
            return this.getBBox().w;
        };
        class_1.prototype.getChildAlign = function (_i) {
            return this.node.attributes.get('data-align') || 'left';
        };
        return class_1;
    }(Base));
}
exports.CommonMpaddedMixin = CommonMpaddedMixin;
//# sourceMappingURL=mpadded.js.map

/***/ }),
/* 38 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHTMLmenclose = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var menclose_js_1 = __webpack_require__(39);
var Notation = __webpack_require__(40);
var menclose_js_2 = __webpack_require__(83);
var lengths_js_1 = __webpack_require__(2);
function Angle(x, y) {
    return Math.atan2(x, y).toFixed(3).replace(/\.?0+$/, '');
}
var ANGLE = Angle(Notation.ARROWDX, Notation.ARROWY);
var CHTMLmenclose = (function (_super) {
    __extends(CHTMLmenclose, _super);
    function CHTMLmenclose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmenclose.prototype.toCHTML = function (parent) {
        var e_1, _a, e_2, _b;
        var adaptor = this.adaptor;
        var chtml = this.standardCHTMLnode(parent);
        var block = adaptor.append(chtml, this.html('mjx-box'));
        if (this.renderChild) {
            this.renderChild(this, block);
        }
        else {
            this.childNodes[0].toCHTML(block);
        }
        try {
            for (var _c = __values(Object.keys(this.notations)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var name_1 = _d.value;
                var notation = this.notations[name_1];
                !notation.renderChild && notation.renderer(this, block);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var pbox = this.getPadding();
        try {
            for (var _e = __values(Notation.sideNames), _f = _e.next(); !_f.done; _f = _e.next()) {
                var name_2 = _f.value;
                var i = Notation.sideIndex[name_2];
                pbox[i] > 0 && adaptor.setStyle(block, 'padding-' + name_2, this.em(pbox[i]));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    CHTMLmenclose.prototype.arrow = function (w, a, double) {
        if (double === void 0) { double = false; }
        var W = this.getBBox().w;
        var style = { width: this.em(w) };
        if (W !== w) {
            style.left = this.em((W - w) / 2);
        }
        if (a) {
            style.transform = 'rotate(' + this.fixed(a) + 'rad)';
        }
        var arrow = this.html('mjx-arrow', { style: style }, [
            this.html('mjx-aline'), this.html('mjx-rthead'), this.html('mjx-rbhead')
        ]);
        if (double) {
            this.adaptor.append(arrow, this.html('mjx-lthead'));
            this.adaptor.append(arrow, this.html('mjx-lbhead'));
            this.adaptor.setAttribute(arrow, 'double', 'true');
        }
        this.adjustArrow(arrow, double);
        return arrow;
    };
    CHTMLmenclose.prototype.adjustArrow = function (arrow, double) {
        var _this = this;
        var t = this.thickness;
        var head = this.arrowhead;
        if (head.x === Notation.ARROWX && head.y === Notation.ARROWY &&
            head.dx === Notation.ARROWDX && t === Notation.THICKNESS)
            return;
        var _a = __read([t * head.x, t * head.y].map(function (x) { return _this.em(x); }), 2), x = _a[0], y = _a[1];
        var a = Angle(head.dx, head.y);
        var _b = __read(this.adaptor.childNodes(arrow), 5), line = _b[0], rthead = _b[1], rbhead = _b[2], lthead = _b[3], lbhead = _b[4];
        this.adjustHead(rthead, [y, '0', '1px', x], a);
        this.adjustHead(rbhead, ['1px', '0', y, x], '-' + a);
        this.adjustHead(lthead, [y, x, '1px', '0'], '-' + a);
        this.adjustHead(lbhead, ['1px', x, y, '0'], a);
        this.adjustLine(line, t, head.x, double);
    };
    CHTMLmenclose.prototype.adjustHead = function (head, border, a) {
        if (head) {
            this.adaptor.setStyle(head, 'border-width', border.join(' '));
            this.adaptor.setStyle(head, 'transform', 'skewX(' + a + 'rad)');
        }
    };
    CHTMLmenclose.prototype.adjustLine = function (line, t, x, double) {
        this.adaptor.setStyle(line, 'borderTop', this.em(t) + ' solid');
        this.adaptor.setStyle(line, 'top', this.em(-t / 2));
        this.adaptor.setStyle(line, 'right', this.em(t * (x - 1)));
        if (double) {
            this.adaptor.setStyle(line, 'left', this.em(t * (x - 1)));
        }
    };
    CHTMLmenclose.prototype.adjustBorder = function (node) {
        if (this.thickness !== Notation.THICKNESS) {
            this.adaptor.setStyle(node, 'borderWidth', this.em(this.thickness));
        }
        return node;
    };
    CHTMLmenclose.prototype.adjustThickness = function (shape) {
        if (this.thickness !== Notation.THICKNESS) {
            this.adaptor.setStyle(shape, 'strokeWidth', this.fixed(this.thickness));
        }
        return shape;
    };
    CHTMLmenclose.prototype.fixed = function (m, n) {
        if (n === void 0) { n = 3; }
        if (Math.abs(m) < .0006) {
            return '0';
        }
        return m.toFixed(n).replace(/\.?0+$/, '');
    };
    CHTMLmenclose.prototype.em = function (m) {
        return _super.prototype.em.call(this, m);
    };
    CHTMLmenclose.kind = menclose_js_2.MmlMenclose.prototype.kind;
    CHTMLmenclose.styles = {
        'mjx-menclose': {
            position: 'relative'
        },
        'mjx-menclose > mjx-dstrike': {
            display: 'inline-block',
            left: 0, top: 0,
            position: 'absolute',
            'border-top': Notation.SOLID,
            'transform-origin': 'top left'
        },
        'mjx-menclose > mjx-ustrike': {
            display: 'inline-block',
            left: 0, bottom: 0,
            position: 'absolute',
            'border-top': Notation.SOLID,
            'transform-origin': 'bottom left'
        },
        'mjx-menclose > mjx-hstrike': {
            'border-top': Notation.SOLID,
            position: 'absolute',
            left: 0, right: 0, bottom: '50%',
            transform: 'translateY(' + lengths_js_1.em(Notation.THICKNESS / 2) + ')'
        },
        'mjx-menclose > mjx-vstrike': {
            'border-left': Notation.SOLID,
            position: 'absolute',
            top: 0, bottom: 0, right: '50%',
            transform: 'translateX(' + lengths_js_1.em(Notation.THICKNESS / 2) + ')'
        },
        'mjx-menclose > mjx-rbox': {
            position: 'absolute',
            top: 0, bottom: 0, right: 0, left: 0,
            'border': Notation.SOLID,
            'border-radius': lengths_js_1.em(Notation.THICKNESS + Notation.PADDING)
        },
        'mjx-menclose > mjx-cbox': {
            position: 'absolute',
            top: 0, bottom: 0, right: 0, left: 0,
            'border': Notation.SOLID,
            'border-radius': '50%'
        },
        'mjx-menclose > mjx-arrow': {
            position: 'absolute',
            left: 0, bottom: '50%', height: 0, width: 0
        },
        'mjx-menclose > mjx-arrow > *': {
            display: 'block',
            position: 'absolute',
            'transform-origin': 'bottom',
            'border-left': lengths_js_1.em(Notation.THICKNESS * Notation.ARROWX) + ' solid',
            'border-right': 0,
            'box-sizing': 'border-box'
        },
        'mjx-menclose > mjx-arrow > mjx-aline': {
            left: 0, top: lengths_js_1.em(-Notation.THICKNESS / 2),
            right: lengths_js_1.em(Notation.THICKNESS * (Notation.ARROWX - 1)), height: 0,
            'border-top': lengths_js_1.em(Notation.THICKNESS) + ' solid',
            'border-left': 0
        },
        'mjx-menclose > mjx-arrow[double] > mjx-aline': {
            left: lengths_js_1.em(Notation.THICKNESS * (Notation.ARROWX - 1)), height: 0,
        },
        'mjx-menclose > mjx-arrow > mjx-rthead': {
            transform: 'skewX(' + ANGLE + 'rad)',
            right: 0, bottom: '-1px',
            'border-bottom': '1px solid transparent',
            'border-top': lengths_js_1.em(Notation.THICKNESS * Notation.ARROWY) + ' solid transparent'
        },
        'mjx-menclose > mjx-arrow > mjx-rbhead': {
            transform: 'skewX(-' + ANGLE + 'rad)',
            'transform-origin': 'top',
            right: 0, top: '-1px',
            'border-top': '1px solid transparent',
            'border-bottom': lengths_js_1.em(Notation.THICKNESS * Notation.ARROWY) + ' solid transparent'
        },
        'mjx-menclose > mjx-arrow > mjx-lthead': {
            transform: 'skewX(-' + ANGLE + 'rad)',
            left: 0, bottom: '-1px',
            'border-left': 0,
            'border-right': lengths_js_1.em(Notation.THICKNESS * Notation.ARROWX) + ' solid',
            'border-bottom': '1px solid transparent',
            'border-top': lengths_js_1.em(Notation.THICKNESS * Notation.ARROWY) + ' solid transparent'
        },
        'mjx-menclose > mjx-arrow > mjx-lbhead': {
            transform: 'skewX(' + ANGLE + 'rad)',
            'transform-origin': 'top',
            left: 0, top: '-1px',
            'border-left': 0,
            'border-right': lengths_js_1.em(Notation.THICKNESS * Notation.ARROWX) + ' solid',
            'border-top': '1px solid transparent',
            'border-bottom': lengths_js_1.em(Notation.THICKNESS * Notation.ARROWY) + ' solid transparent'
        },
        'mjx-menclose > dbox': {
            position: 'absolute',
            top: 0, bottom: 0, left: lengths_js_1.em(-1.5 * Notation.PADDING),
            width: lengths_js_1.em(3 * Notation.PADDING),
            border: lengths_js_1.em(Notation.THICKNESS) + ' solid',
            'border-radius': '50%',
            'clip-path': 'inset(0 0 0 ' + lengths_js_1.em(1.5 * Notation.PADDING) + ')',
            'box-sizing': 'border-box'
        }
    };
    CHTMLmenclose.notations = new Map([
        Notation.Border('top'),
        Notation.Border('right'),
        Notation.Border('bottom'),
        Notation.Border('left'),
        Notation.Border2('actuarial', 'top', 'right'),
        Notation.Border2('madruwb', 'bottom', 'right'),
        Notation.DiagonalStrike('up', 1),
        Notation.DiagonalStrike('down', -1),
        ['horizontalstrike', {
                renderer: Notation.RenderElement('hstrike', 'Y'),
                bbox: function (node) { return [0, node.padding, 0, node.padding]; }
            }],
        ['verticalstrike', {
                renderer: Notation.RenderElement('vstrike', 'X'),
                bbox: function (node) { return [node.padding, 0, node.padding, 0]; }
            }],
        ['box', {
                renderer: function (node, child) {
                    node.adaptor.setStyle(child, 'border', node.em(node.thickness) + ' solid');
                },
                bbox: Notation.fullBBox,
                border: Notation.fullBorder,
                remove: 'left right top bottom'
            }],
        ['roundedbox', {
                renderer: Notation.RenderElement('rbox'),
                bbox: Notation.fullBBox
            }],
        ['circle', {
                renderer: Notation.RenderElement('cbox'),
                bbox: Notation.fullBBox
            }],
        ['phasorangle', {
                renderer: function (node, child) {
                    var _a = node.getBBox(), h = _a.h, d = _a.d;
                    var _b = __read(node.getArgMod(1.75 * node.padding, h + d), 2), a = _b[0], W = _b[1];
                    var t = node.thickness * Math.sin(a) * .9;
                    node.adaptor.setStyle(child, 'border-bottom', node.em(node.thickness) + ' solid');
                    var strike = node.adjustBorder(node.html('mjx-ustrike', { style: {
                            width: node.em(W),
                            transform: 'translateX(' + node.em(t) + ') rotate(' + node.fixed(-a) + 'rad)',
                        } }));
                    node.adaptor.append(node.chtml, strike);
                },
                bbox: function (node) {
                    var p = node.padding / 2;
                    var t = node.thickness;
                    return [2 * p, p, p + t, 3 * p + t];
                },
                border: function (node) { return [0, 0, node.thickness, 0]; },
                remove: 'bottom'
            }],
        Notation.Arrow('up'),
        Notation.Arrow('down'),
        Notation.Arrow('left'),
        Notation.Arrow('right'),
        Notation.Arrow('updown'),
        Notation.Arrow('leftright'),
        Notation.DiagonalArrow('updiagonal'),
        Notation.DiagonalArrow('northeast'),
        Notation.DiagonalArrow('southeast'),
        Notation.DiagonalArrow('northwest'),
        Notation.DiagonalArrow('southwest'),
        Notation.DiagonalArrow('northeastsouthwest'),
        Notation.DiagonalArrow('northwestsoutheast'),
        ['longdiv', {
                renderer: function (node, child) {
                    var adaptor = node.adaptor;
                    adaptor.setStyle(child, 'border-top', node.em(node.thickness) + ' solid');
                    var arc = adaptor.append(node.chtml, node.html('dbox'));
                    var t = node.thickness;
                    var p = node.padding;
                    if (t !== Notation.THICKNESS) {
                        adaptor.setStyle(arc, 'border-width', node.em(t));
                    }
                    if (p !== Notation.PADDING) {
                        adaptor.setStyle(arc, 'left', node.em(-1.5 * p));
                        adaptor.setStyle(arc, 'width', node.em(3 * p));
                        adaptor.setStyle(arc, 'clip-path', 'inset(0 0 0 ' + node.em(1.5 * p) + ')');
                    }
                },
                bbox: function (node) {
                    var p = node.padding;
                    var t = node.thickness;
                    return [p + t, p, p, 2 * p + t / 2];
                }
            }],
        ['radical', {
                renderer: function (node, child) {
                    node.msqrt.toCHTML(child);
                    var TRBL = node.sqrtTRBL();
                    node.adaptor.setStyle(node.msqrt.chtml, 'margin', TRBL.map(function (x) { return node.em(-x); }).join(' '));
                },
                init: function (node) {
                    node.msqrt = node.createMsqrt(node.childNodes[0]);
                },
                bbox: function (node) { return node.sqrtTRBL(); },
                renderChild: true
            }]
    ]);
    return CHTMLmenclose;
}(menclose_js_1.CommonMencloseMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmenclose = CHTMLmenclose;
//# sourceMappingURL=menclose.js.map

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
exports.CommonMencloseMixin = void 0;
var Notation = __webpack_require__(6);
var string_js_1 = __webpack_require__(3);
function CommonMencloseMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.notations = {};
            _this.renderChild = null;
            _this.msqrt = null;
            _this.padding = Notation.PADDING;
            _this.thickness = Notation.THICKNESS;
            _this.arrowhead = { x: Notation.ARROWX, y: Notation.ARROWY, dx: Notation.ARROWDX };
            _this.getParameters();
            _this.getNotations();
            _this.removeRedundantNotations();
            _this.initializeNotations();
            return _this;
        }
        class_1.prototype.getParameters = function () {
            var attributes = this.node.attributes;
            var padding = attributes.get('data-padding');
            if (padding !== undefined) {
                this.padding = this.length2em(padding, Notation.PADDING);
            }
            var thickness = attributes.get('data-thickness');
            if (thickness !== undefined) {
                this.thickness = this.length2em(thickness, Notation.THICKNESS);
            }
            var arrowhead = attributes.get('data-arrowhead');
            if (arrowhead !== undefined) {
                var _b = __read(string_js_1.split(arrowhead), 3), x = _b[0], y = _b[1], dx = _b[2];
                this.arrowhead = {
                    x: (x ? parseFloat(x) : Notation.ARROWX),
                    y: (y ? parseFloat(y) : Notation.ARROWY),
                    dx: (dx ? parseFloat(dx) : Notation.ARROWDX)
                };
            }
        };
        class_1.prototype.getNotations = function () {
            var e_1, _b;
            var Notations = this.constructor.notations;
            try {
                for (var _c = __values(string_js_1.split(this.node.attributes.get('notation'))), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var name_1 = _d.value;
                    var notation = Notations.get(name_1);
                    if (notation) {
                        this.notations[name_1] = notation;
                        if (notation.renderChild) {
                            this.renderChild = notation.renderer;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        class_1.prototype.removeRedundantNotations = function () {
            var e_2, _b, e_3, _c;
            try {
                for (var _d = __values(Object.keys(this.notations)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var name_2 = _e.value;
                    if (this.notations[name_2]) {
                        var remove = this.notations[name_2].remove || '';
                        try {
                            for (var _f = (e_3 = void 0, __values(remove.split(/ /))), _g = _f.next(); !_g.done; _g = _f.next()) {
                                var notation = _g.value;
                                delete this.notations[notation];
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        class_1.prototype.initializeNotations = function () {
            var e_4, _b;
            try {
                for (var _c = __values(Object.keys(this.notations)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var name_3 = _d.value;
                    var init = this.notations[name_3].init;
                    init && init(this);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            var _b = __read(this.getBBoxExtenders(), 4), T = _b[0], R = _b[1], B = _b[2], L = _b[3];
            var child = this.childNodes[0].getBBox();
            bbox.combine(child, L, 0);
            bbox.h += T;
            bbox.d += B;
            bbox.w += R;
            this.setChildPWidths(recompute);
        };
        class_1.prototype.getBBoxExtenders = function () {
            var e_5, _b;
            var TRBL = [0, 0, 0, 0];
            try {
                for (var _c = __values(Object.keys(this.notations)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var name_4 = _d.value;
                    this.maximizeEntries(TRBL, this.notations[name_4].bbox(this));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return TRBL;
        };
        class_1.prototype.getPadding = function () {
            var e_6, _b;
            var TRBL = [0, 0, 0, 0];
            var BTRBL = [0, 0, 0, 0];
            try {
                for (var _c = __values(Object.keys(this.notations)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var name_5 = _d.value;
                    this.maximizeEntries(TRBL, this.notations[name_5].bbox(this));
                    var border = this.notations[name_5].border;
                    if (border) {
                        this.maximizeEntries(BTRBL, border(this));
                    }
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return [0, 1, 2, 3].map(function (i) { return TRBL[i] - BTRBL[i]; });
        };
        class_1.prototype.maximizeEntries = function (X, Y) {
            for (var i = 0; i < X.length; i++) {
                if (X[i] < Y[i]) {
                    X[i] = Y[i];
                }
            }
        };
        class_1.prototype.getArgMod = function (w, h) {
            return [Math.atan2(h, w), Math.sqrt(w * w + h * h)];
        };
        class_1.prototype.arrow = function (_w, _a, _double) {
            if (_double === void 0) { _double = false; }
            return null;
        };
        class_1.prototype.arrowData = function () {
            var _b = __read([this.padding, this.thickness], 2), p = _b[0], t = _b[1];
            var r = t * (this.arrowhead.x + Math.max(1, this.arrowhead.dx));
            var _c = this.childNodes[0].getBBox(), h = _c.h, d = _c.d, w = _c.w;
            var H = h + d;
            var R = Math.sqrt(H * H + w * w);
            var x = Math.max(p, r * w / R);
            var y = Math.max(p, r * H / R);
            var _d = __read(this.getArgMod(w + 2 * x, H + 2 * y), 2), a = _d[0], W = _d[1];
            return { a: a, W: W, x: x, y: y };
        };
        class_1.prototype.createMsqrt = function (child) {
            var mmlFactory = this.node.factory;
            var mml = mmlFactory.create('msqrt');
            mml.inheritAttributesFrom(this.node);
            mml.childNodes[0] = child.node;
            var node = this.wrap(mml);
            node.parent = this;
            return node;
        };
        class_1.prototype.sqrtTRBL = function () {
            var bbox = this.msqrt.getBBox();
            var cbox = this.msqrt.childNodes[0].getBBox();
            return [bbox.h - cbox.h, 0, bbox.d - cbox.d, bbox.w - cbox.w];
        };
        return class_1;
    }(Base));
}
exports.CommonMencloseMixin = CommonMencloseMixin;
//# sourceMappingURL=menclose.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arrow = exports.DiagonalArrow = exports.DiagonalStrike = exports.Border2 = exports.Border = exports.RenderElement = void 0;
var Notation = __webpack_require__(6);
__exportStar(__webpack_require__(6), exports);
exports.RenderElement = function (name, offset) {
    if (offset === void 0) { offset = ''; }
    return (function (node, _child) {
        var shape = node.adjustBorder(node.html('mjx-' + name));
        if (offset && node.thickness !== Notation.THICKNESS) {
            var transform = 'translate' + offset + '(' + node.em(node.thickness / 2) + ')';
            node.adaptor.setStyle(shape, 'transform', transform);
        }
        node.adaptor.append(node.chtml, shape);
    });
};
exports.Border = function (side) {
    return Notation.CommonBorder(function (node, child) {
        node.adaptor.setStyle(child, 'border-' + side, node.em(node.thickness) + ' solid');
    })(side);
};
exports.Border2 = function (name, side1, side2) {
    return Notation.CommonBorder2(function (node, child) {
        var border = node.em(node.thickness) + ' solid';
        node.adaptor.setStyle(child, 'border-' + side1, border);
        node.adaptor.setStyle(child, 'border-' + side2, border);
    })(name, side1, side2);
};
exports.DiagonalStrike = function (name, neg) {
    return Notation.CommonDiagonalStrike(function (cname) { return function (node, _child) {
        var _a = node.getBBox(), w = _a.w, h = _a.h, d = _a.d;
        var _b = __read(node.getArgMod(w, h + d), 2), a = _b[0], W = _b[1];
        var t = neg * node.thickness / 2;
        var strike = node.adjustBorder(node.html(cname, { style: {
                width: node.em(W),
                transform: 'rotate(' + node.fixed(-neg * a) + 'rad) translateY(' + t + 'em)',
            } }));
        node.adaptor.append(node.chtml, strike);
    }; })(name);
};
exports.DiagonalArrow = function (name) {
    return Notation.CommonDiagonalArrow(function (node, arrow) {
        node.adaptor.append(node.chtml, arrow);
    })(name);
};
exports.Arrow = function (name) {
    return Notation.CommonArrow(function (node, arrow) {
        node.adaptor.append(node.chtml, arrow);
    })(name);
};
//# sourceMappingURL=Notation.js.map

/***/ }),
/* 41 */
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
exports.CHTMLinferredMrow = exports.CHTMLmrow = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mrow_js_1 = __webpack_require__(10);
var mrow_js_2 = __webpack_require__(10);
var mrow_js_3 = __webpack_require__(84);
var CHTMLmrow = (function (_super) {
    __extends(CHTMLmrow, _super);
    function CHTMLmrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmrow.prototype.toCHTML = function (parent) {
        var e_1, _a;
        var chtml = (this.node.isInferred ? (this.chtml = parent) : this.standardCHTMLnode(parent));
        var hasNegative = false;
        try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                child.toCHTML(chtml);
                if (child.bbox.w < 0) {
                    hasNegative = true;
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
        if (hasNegative) {
            var w = this.getBBox().w;
            if (w) {
                this.adaptor.setStyle(chtml, 'width', this.em(Math.max(0, w)));
                if (w < 0) {
                    this.adaptor.setStyle(chtml, 'marginRight', this.em(w));
                }
            }
        }
    };
    CHTMLmrow.kind = mrow_js_3.MmlMrow.prototype.kind;
    return CHTMLmrow;
}(mrow_js_1.CommonMrowMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmrow = CHTMLmrow;
var CHTMLinferredMrow = (function (_super) {
    __extends(CHTMLinferredMrow, _super);
    function CHTMLinferredMrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLinferredMrow.kind = mrow_js_3.MmlInferredMrow.prototype.kind;
    return CHTMLinferredMrow;
}(mrow_js_2.CommonInferredMrowMixin(CHTMLmrow)));
exports.CHTMLinferredMrow = CHTMLinferredMrow;
//# sourceMappingURL=mrow.js.map

/***/ }),
/* 42 */
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
exports.CHTMLmfenced = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mfenced_js_1 = __webpack_require__(43);
var mfenced_js_2 = __webpack_require__(85);
var CHTMLmfenced = (function (_super) {
    __extends(CHTMLmfenced, _super);
    function CHTMLmfenced() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmfenced.prototype.toCHTML = function (parent) {
        var chtml = this.standardCHTMLnode(parent);
        this.mrow.toCHTML(chtml);
    };
    CHTMLmfenced.kind = mfenced_js_2.MmlMfenced.prototype.kind;
    return CHTMLmfenced;
}(mfenced_js_1.CommonMfencedMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmfenced = CHTMLmfenced;
//# sourceMappingURL=mfenced.js.map

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
exports.CommonMfencedMixin = void 0;
function CommonMfencedMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.mrow = null;
            _this.createMrow();
            _this.addMrowChildren();
            return _this;
        }
        class_1.prototype.createMrow = function () {
            var mmlFactory = this.node.factory;
            var mrow = mmlFactory.create('inferredMrow');
            mrow.inheritAttributesFrom(this.node);
            this.mrow = this.wrap(mrow);
            this.mrow.parent = this;
        };
        class_1.prototype.addMrowChildren = function () {
            var e_1, _a;
            var mfenced = this.node;
            var mrow = this.mrow;
            this.addMo(mfenced.open);
            if (this.childNodes.length) {
                mrow.childNodes.push(this.childNodes[0]);
            }
            var i = 0;
            try {
                for (var _b = __values(this.childNodes.slice(1)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    this.addMo(mfenced.separators[i++]);
                    mrow.childNodes.push(child);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.addMo(mfenced.close);
            mrow.stretchChildren();
        };
        class_1.prototype.addMo = function (node) {
            if (!node)
                return;
            var mo = this.wrap(node);
            this.mrow.childNodes.push(mo);
            mo.parent = this.mrow;
        };
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            bbox.updateFrom(this.mrow.getBBox());
            this.setChildPWidths(recompute);
        };
        return class_1;
    }(Base));
}
exports.CommonMfencedMixin = CommonMfencedMixin;
//# sourceMappingURL=mfenced.js.map

/***/ }),
/* 44 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHTMLmfrac = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mfrac_js_1 = __webpack_require__(45);
var mfrac_js_2 = __webpack_require__(86);
var CHTMLmfrac = (function (_super) {
    __extends(CHTMLmfrac, _super);
    function CHTMLmfrac() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmfrac.prototype.toCHTML = function (parent) {
        this.standardCHTMLnode(parent);
        var _a = this.node.attributes.getList('linethickness', 'bevelled'), linethickness = _a.linethickness, bevelled = _a.bevelled;
        var display = this.isDisplay();
        if (bevelled) {
            this.makeBevelled(display);
        }
        else {
            var thickness = this.length2em(String(linethickness), .06);
            if (thickness === 0) {
                this.makeAtop(display);
            }
            else {
                this.makeFraction(display, thickness);
            }
        }
    };
    CHTMLmfrac.prototype.makeFraction = function (display, t) {
        var _a = this.node.attributes.getList('numalign', 'denomalign'), numalign = _a.numalign, denomalign = _a.denomalign;
        var withDelims = this.node.getProperty('withDelims');
        var attr = (display ? { type: 'd' } : {});
        var fattr = (withDelims ? __assign(__assign({}, attr), { delims: 'true' }) : __assign({}, attr));
        var nattr = (numalign !== 'center' ? { align: numalign } : {});
        var dattr = (denomalign !== 'center' ? { align: denomalign } : {});
        var dsattr = __assign({}, attr), nsattr = __assign({}, attr);
        var tex = this.font.params;
        if (t !== .06) {
            var a = tex.axis_height;
            var tEm = this.em(t);
            var _b = this.getTUV(display, t), T = _b.T, u = _b.u, v = _b.v;
            var m = (display ? this.em(3 * t) : tEm) + ' -.1em';
            attr.style = { height: tEm, 'border-top': tEm + ' solid', margin: m };
            var nh = this.em(Math.max(0, u));
            nsattr.style = { height: nh, 'vertical-align': '-' + nh };
            dsattr.style = { height: this.em(Math.max(0, v)) };
            fattr.style = { 'vertical-align': this.em(a - T) };
        }
        var num, den;
        this.adaptor.append(this.chtml, this.html('mjx-frac', fattr, [
            num = this.html('mjx-num', nattr, [this.html('mjx-nstrut', nsattr)]),
            this.html('mjx-dbox', {}, [
                this.html('mjx-dtable', {}, [
                    this.html('mjx-line', attr),
                    this.html('mjx-row', {}, [
                        den = this.html('mjx-den', dattr, [this.html('mjx-dstrut', dsattr)])
                    ])
                ])
            ])
        ]));
        this.childNodes[0].toCHTML(num);
        this.childNodes[1].toCHTML(den);
    };
    CHTMLmfrac.prototype.makeAtop = function (display) {
        var _a = this.node.attributes.getList('numalign', 'denomalign'), numalign = _a.numalign, denomalign = _a.denomalign;
        var withDelims = this.node.getProperty('withDelims');
        var attr = (display ? { type: 'd', atop: true } : { atop: true });
        var fattr = (withDelims ? __assign(__assign({}, attr), { delims: true }) : __assign({}, attr));
        var nattr = (numalign !== 'center' ? { align: numalign } : {});
        var dattr = (denomalign !== 'center' ? { align: denomalign } : {});
        var _b = this.getUVQ(display), v = _b.v, q = _b.q;
        nattr.style = { 'padding-bottom': this.em(q) };
        fattr.style = { 'vertical-align': this.em(-v) };
        var num, den;
        this.adaptor.append(this.chtml, this.html('mjx-frac', fattr, [
            num = this.html('mjx-num', nattr),
            den = this.html('mjx-den', dattr)
        ]));
        this.childNodes[0].toCHTML(num);
        this.childNodes[1].toCHTML(den);
    };
    CHTMLmfrac.prototype.makeBevelled = function (display) {
        var adaptor = this.adaptor;
        adaptor.setAttribute(this.chtml, 'bevelled', 'ture');
        var num = adaptor.append(this.chtml, this.html('mjx-num'));
        this.childNodes[0].toCHTML(num);
        this.bevel.toCHTML(this.chtml);
        var den = adaptor.append(this.chtml, this.html('mjx-den'));
        this.childNodes[1].toCHTML(den);
        var _a = this.getBevelData(display), u = _a.u, v = _a.v, delta = _a.delta, nbox = _a.nbox, dbox = _a.dbox;
        if (u) {
            adaptor.setStyle(num, 'verticalAlign', this.em(u / nbox.scale));
        }
        if (v) {
            adaptor.setStyle(den, 'verticalAlign', this.em(v / dbox.scale));
        }
        var dx = this.em(-delta / 2);
        adaptor.setStyle(this.bevel.chtml, 'marginLeft', dx);
        adaptor.setStyle(this.bevel.chtml, 'marginRight', dx);
    };
    CHTMLmfrac.kind = mfrac_js_2.MmlMfrac.prototype.kind;
    CHTMLmfrac.styles = {
        'mjx-frac': {
            display: 'inline-block',
            'vertical-align': '0.17em',
            padding: '0 .22em'
        },
        'mjx-frac[type="d"]': {
            'vertical-align': '.04em'
        },
        'mjx-frac[delims]': {
            padding: '0 .1em'
        },
        'mjx-frac[atop]': {
            padding: '0 .12em'
        },
        'mjx-frac[atop][delims]': {
            padding: '0'
        },
        'mjx-dtable': {
            display: 'inline-table',
            width: '100%'
        },
        'mjx-dtable > *': {
            'font-size': '2000%'
        },
        'mjx-dbox': {
            display: 'block',
            'font-size': '5%'
        },
        'mjx-num': {
            display: 'block',
            'text-align': 'center'
        },
        'mjx-den': {
            display: 'block',
            'text-align': 'center'
        },
        'mjx-mfrac[bevelled] > mjx-num': {
            display: 'inline-block'
        },
        'mjx-mfrac[bevelled] > mjx-den': {
            display: 'inline-block'
        },
        'mjx-den[align="right"], mjx-num[align="right"]': {
            'text-align': 'right'
        },
        'mjx-den[align="left"], mjx-num[align="left"]': {
            'text-align': 'left'
        },
        'mjx-nstrut': {
            display: 'inline-block',
            height: '.054em',
            width: 0,
            'vertical-align': '-.054em'
        },
        'mjx-nstrut[type="d"]': {
            height: '.217em',
            'vertical-align': '-.217em',
        },
        'mjx-dstrut': {
            display: 'inline-block',
            height: '.505em',
            width: 0
        },
        'mjx-dstrut[type="d"]': {
            height: '.726em',
        },
        'mjx-line': {
            display: 'block',
            'box-sizing': 'border-box',
            'min-height': '1px',
            height: '.06em',
            'border-top': '.06em solid',
            margin: '.06em -.1em',
            overflow: 'hidden'
        },
        'mjx-line[type="d"]': {
            margin: '.18em -.1em'
        }
    };
    return CHTMLmfrac;
}(mfrac_js_1.CommonMfracMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmfrac = CHTMLmfrac;
//# sourceMappingURL=mfrac.js.map

/***/ }),
/* 45 */
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonMfracMixin = void 0;
function CommonMfracMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.bevel = null;
            _this.pad = (_this.node.getProperty('withDelims') ? 0 : _this.font.params.nulldelimiterspace);
            if (_this.node.attributes.get('bevelled')) {
                var H = _this.getBevelData(_this.isDisplay()).H;
                var bevel = _this.bevel = _this.createMo('/');
                bevel.canStretch(1);
                bevel.getStretchedVariant([H], true);
            }
            return _this;
        }
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            bbox.empty();
            var _a = this.node.attributes.getList('linethickness', 'bevelled'), linethickness = _a.linethickness, bevelled = _a.bevelled;
            var display = this.isDisplay();
            var w = null;
            if (bevelled) {
                this.getBevelledBBox(bbox, display);
            }
            else {
                var thickness = this.length2em(String(linethickness), .06);
                w = -2 * this.pad;
                if (thickness === 0) {
                    this.getAtopBBox(bbox, display);
                }
                else {
                    this.getFractionBBox(bbox, display, thickness);
                    w -= .2;
                }
                w += bbox.w;
            }
            bbox.clean();
            this.setChildPWidths(recompute, w);
        };
        class_1.prototype.getFractionBBox = function (bbox, display, t) {
            var nbox = this.childNodes[0].getBBox();
            var dbox = this.childNodes[1].getBBox();
            var tex = this.font.params;
            var a = tex.axis_height;
            var _a = this.getTUV(display, t), T = _a.T, u = _a.u, v = _a.v;
            bbox.combine(nbox, 0, a + T + Math.max(nbox.d * nbox.rscale, u));
            bbox.combine(dbox, 0, a - T - Math.max(dbox.h * dbox.rscale, v));
            bbox.w += 2 * this.pad + .2;
        };
        class_1.prototype.getTUV = function (display, t) {
            var tex = this.font.params;
            var a = tex.axis_height;
            var T = (display ? 3.5 : 1.5) * t;
            return { T: (display ? 3.5 : 1.5) * t,
                u: (display ? tex.num1 : tex.num2) - a - T,
                v: (display ? tex.denom1 : tex.denom2) + a - T };
        };
        class_1.prototype.getAtopBBox = function (bbox, display) {
            var _a = this.getUVQ(display), u = _a.u, v = _a.v, nbox = _a.nbox, dbox = _a.dbox;
            bbox.combine(nbox, 0, u);
            bbox.combine(dbox, 0, -v);
            bbox.w += 2 * this.pad;
        };
        class_1.prototype.getUVQ = function (display) {
            var nbox = this.childNodes[0].getBBox();
            var dbox = this.childNodes[1].getBBox();
            var tex = this.font.params;
            var _a = __read((display ? [tex.num1, tex.denom1] : [tex.num3, tex.denom2]), 2), u = _a[0], v = _a[1];
            var p = (display ? 7 : 3) * tex.rule_thickness;
            var q = (u - nbox.d * nbox.scale) - (dbox.h * dbox.scale - v);
            if (q < p) {
                u += (p - q) / 2;
                v += (p - q) / 2;
                q = p;
            }
            return { u: u, v: v, q: q, nbox: nbox, dbox: dbox };
        };
        class_1.prototype.getBevelledBBox = function (bbox, display) {
            var _a = this.getBevelData(display), u = _a.u, v = _a.v, delta = _a.delta, nbox = _a.nbox, dbox = _a.dbox;
            var lbox = this.bevel.getBBox();
            bbox.combine(nbox, 0, u);
            bbox.combine(lbox, bbox.w - delta / 2, 0);
            bbox.combine(dbox, bbox.w - delta / 2, v);
        };
        class_1.prototype.getBevelData = function (display) {
            var nbox = this.childNodes[0].getBBox();
            var dbox = this.childNodes[1].getBBox();
            var delta = (display ? .4 : .15);
            var H = Math.max(nbox.scale * (nbox.h + nbox.d), dbox.scale * (dbox.h + dbox.d)) + 2 * delta;
            var a = this.font.params.axis_height;
            var u = nbox.scale * (nbox.d - nbox.h) / 2 + a + delta;
            var v = dbox.scale * (dbox.d - dbox.h) / 2 + a - delta;
            return { H: H, delta: delta, u: u, v: v, nbox: nbox, dbox: dbox };
        };
        class_1.prototype.canStretch = function (_direction) {
            return false;
        };
        class_1.prototype.isDisplay = function () {
            var _a = this.node.attributes.getList('displaystyle', 'scriptlevel'), displaystyle = _a.displaystyle, scriptlevel = _a.scriptlevel;
            return displaystyle && scriptlevel === 0;
        };
        class_1.prototype.getWrapWidth = function (i) {
            var attributes = this.node.attributes;
            if (attributes.get('bevelled')) {
                return this.childNodes[i].getBBox().w;
            }
            var w = this.getBBox().w;
            var thickness = this.length2em(attributes.get('linethickness'));
            return w - (thickness ? .2 : 0) - 2 * this.pad;
        };
        class_1.prototype.getChildAlign = function (i) {
            var attributes = this.node.attributes;
            return (attributes.get('bevelled') ? 'left' : attributes.get(['numalign', 'denomalign'][i]));
        };
        return class_1;
    }(Base));
}
exports.CommonMfracMixin = CommonMfracMixin;
//# sourceMappingURL=mfrac.js.map

/***/ }),
/* 46 */
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonMsqrtMixin = void 0;
var BBox_js_1 = __webpack_require__(1);
function CommonMsqrtMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            var surd = _this.createMo('\u221A');
            surd.canStretch(1);
            var _a = _this.childNodes[_this.base].getBBox(), h = _a.h, d = _a.d;
            var t = _this.font.params.rule_thickness;
            var p = (_this.node.attributes.get('displaystyle') ? _this.font.params.x_height : t);
            _this.surdH = h + d + 2 * t + p / 4;
            surd.getStretchedVariant([_this.surdH - d, d], true);
            return _this;
        }
        Object.defineProperty(class_1.prototype, "base", {
            get: function () {
                return 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1.prototype, "surd", {
            get: function () {
                return 1;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1.prototype, "root", {
            get: function () {
                return null;
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.createMo = function (text) {
            var node = _super.prototype.createMo.call(this, text);
            this.childNodes.push(node);
            return node;
        };
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            var surdbox = this.childNodes[this.surd].getBBox();
            var basebox = new BBox_js_1.BBox(this.childNodes[this.base].getBBox());
            var q = this.getPQ(surdbox)[1];
            var t = this.font.params.rule_thickness;
            var H = basebox.h + q + t;
            var _a = __read(this.getRootDimens(surdbox, H), 1), x = _a[0];
            bbox.h = H + t;
            this.combineRootBBox(bbox, surdbox, H);
            bbox.combine(surdbox, x, H - surdbox.h);
            bbox.combine(basebox, x + surdbox.w, 0);
            bbox.clean();
            this.setChildPWidths(recompute);
        };
        class_1.prototype.combineRootBBox = function (_bbox, _sbox, _H) {
        };
        class_1.prototype.getPQ = function (sbox) {
            var t = this.font.params.rule_thickness;
            var p = (this.node.attributes.get('displaystyle') ? this.font.params.x_height : t);
            var q = (sbox.h + sbox.d > this.surdH ?
                ((sbox.h + sbox.d) - (this.surdH - 2 * t - p / 2)) / 2 :
                t + p / 4);
            return [p, q];
        };
        class_1.prototype.getRootDimens = function (_sbox, _H) {
            return [0, 0, 0, 0];
        };
        return class_1;
    }(Base));
}
exports.CommonMsqrtMixin = CommonMsqrtMixin;
//# sourceMappingURL=msqrt.js.map

/***/ }),
/* 47 */
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
exports.CHTMLmroot = void 0;
var msqrt_js_1 = __webpack_require__(11);
var mroot_js_1 = __webpack_require__(48);
var mroot_js_2 = __webpack_require__(88);
var CHTMLmroot = (function (_super) {
    __extends(CHTMLmroot, _super);
    function CHTMLmroot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmroot.prototype.addRoot = function (ROOT, root, sbox, H) {
        root.toCHTML(ROOT);
        var _a = __read(this.getRootDimens(sbox, H), 3), x = _a[0], h = _a[1], dx = _a[2];
        this.adaptor.setStyle(ROOT, 'verticalAlign', this.em(h));
        this.adaptor.setStyle(ROOT, 'width', this.em(x));
        if (dx) {
            this.adaptor.setStyle(this.adaptor.firstChild(ROOT), 'paddingLeft', this.em(dx));
        }
    };
    CHTMLmroot.kind = mroot_js_2.MmlMroot.prototype.kind;
    return CHTMLmroot;
}(mroot_js_1.CommonMrootMixin(msqrt_js_1.CHTMLmsqrt)));
exports.CHTMLmroot = CHTMLmroot;
//# sourceMappingURL=mroot.js.map

/***/ }),
/* 48 */
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
exports.CommonMrootMixin = void 0;
function CommonMrootMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "surd", {
            get: function () {
                return 2;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(class_1.prototype, "root", {
            get: function () {
                return 1;
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.combineRootBBox = function (BBOX, sbox, H) {
            var bbox = this.childNodes[this.root].getBBox();
            var h = this.getRootDimens(sbox, H)[1];
            BBOX.combine(bbox, 0, h);
        };
        class_1.prototype.getRootDimens = function (sbox, H) {
            var surd = this.childNodes[this.surd];
            var bbox = this.childNodes[this.root].getBBox();
            var offset = (surd.size < 0 ? .5 : .6) * sbox.w;
            var w = bbox.w, rscale = bbox.rscale;
            var W = Math.max(w, offset / rscale);
            var dx = Math.max(0, W - w);
            var h = this.rootHeight(bbox, sbox, surd.size, H);
            var x = W * rscale - offset;
            return [x, h, dx];
        };
        class_1.prototype.rootHeight = function (rbox, sbox, size, H) {
            var h = sbox.h + sbox.d;
            var b = (size < 0 ? 1.9 : .55 * h) - (h - H);
            return b + Math.max(0, rbox.d * rbox.rscale);
        };
        return class_1;
    }(Base));
}
exports.CommonMrootMixin = CommonMrootMixin;
//# sourceMappingURL=mroot.js.map

/***/ }),
/* 49 */
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
exports.CHTMLscriptbase = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var scriptbase_js_1 = __webpack_require__(50);
var CHTMLscriptbase = (function (_super) {
    __extends(CHTMLscriptbase, _super);
    function CHTMLscriptbase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLscriptbase.prototype.toCHTML = function (parent) {
        this.chtml = this.standardCHTMLnode(parent);
        var _a = __read(this.getOffset(this.baseChild.getBBox(), this.script.getBBox()), 2), x = _a[0], v = _a[1];
        var style = { 'vertical-align': this.em(v) };
        if (x) {
            style['margin-left'] = this.em(x);
        }
        this.baseChild.toCHTML(this.chtml);
        this.script.toCHTML(this.adaptor.append(this.chtml, this.html('mjx-script', { style: style })));
    };
    CHTMLscriptbase.prototype.setDeltaW = function (nodes, dx) {
        for (var i = 0; i < dx.length; i++) {
            if (dx[i]) {
                this.adaptor.setStyle(nodes[i], 'paddingLeft', this.em(dx[i]));
            }
        }
    };
    CHTMLscriptbase.prototype.adjustOverDepth = function (over, overbox) {
        if (overbox.d >= 0)
            return;
        this.adaptor.setStyle(over, 'marginBottom', this.em(overbox.d * overbox.rscale));
    };
    CHTMLscriptbase.prototype.adjustUnderDepth = function (under, underbox) {
        var e_1, _a;
        if (underbox.d >= 0)
            return;
        var adaptor = this.adaptor;
        var v = this.em(underbox.d);
        var box = this.html('mjx-box', { style: { 'margin-bottom': v, 'vertical-align': v } });
        try {
            for (var _b = __values(adaptor.childNodes(adaptor.firstChild(under))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                adaptor.append(box, child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        adaptor.append(adaptor.firstChild(under), box);
    };
    CHTMLscriptbase.kind = 'scriptbase';
    CHTMLscriptbase.useIC = false;
    return CHTMLscriptbase;
}(scriptbase_js_1.CommonScriptbaseMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLscriptbase = CHTMLscriptbase;
//# sourceMappingURL=scriptbase.js.map

/***/ }),
/* 50 */
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
exports.CommonScriptbaseMixin = void 0;
var DELTA = 1.5;
function CommonScriptbaseMixin(Base) {
    var _a;
    return _a = (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                var core = _this.baseCore = _this.childNodes[0];
                if (!core)
                    return _this;
                while (core.childNodes.length === 1 &&
                    (core.node.isKind('mrow') || core.node.isKind('TeXAtom') ||
                        core.node.isKind('mstyle') || core.node.isKind('mpadded') ||
                        core.node.isKind('mphantom') || core.node.isKind('semantics'))) {
                    core = core.childNodes[0];
                    if (!core)
                        return _this;
                }
                if (!('noIC' in core))
                    return _this;
                _this.baseCore = core;
                if (!_this.constructor.useIC) {
                    core.noIC = true;
                }
                return _this;
            }
            Object.defineProperty(class_1.prototype, "baseChild", {
                get: function () {
                    return this.childNodes[this.node.base];
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(class_1.prototype, "script", {
                get: function () {
                    return this.childNodes[1];
                },
                enumerable: false,
                configurable: true
            });
            class_1.prototype.computeBBox = function (bbox, recompute) {
                if (recompute === void 0) { recompute = false; }
                var basebox = this.baseChild.getBBox();
                var scriptbox = this.script.getBBox();
                var _a = __read(this.getOffset(basebox, scriptbox), 2), x = _a[0], y = _a[1];
                bbox.append(basebox);
                bbox.combine(scriptbox, bbox.w + x, y);
                bbox.w += this.font.params.scriptspace;
                bbox.clean();
                this.setChildPWidths(recompute);
            };
            class_1.prototype.coreIC = function () {
                var corebox = this.baseCore.getBBox();
                return (corebox.ic ? 1.05 * corebox.ic + .05 : 0);
            };
            class_1.prototype.coreScale = function () {
                var scale = this.baseChild.getBBox().rscale;
                var base = this.baseChild;
                while ((base.node.isKind('mstyle') || base.node.isKind('mrow') || base.node.isKind('TeXAtom'))
                    && base.childNodes.length === 1) {
                    base = base.childNodes[0];
                    scale *= base.getBBox().rscale;
                }
                return scale;
            };
            class_1.prototype.isCharBase = function () {
                var base = this.baseChild;
                while ((base.node.isKind('mstyle') || base.node.isKind('mrow')) && base.childNodes.length === 1) {
                    base = base.childNodes[0];
                }
                return ((base.node.isKind('mo') || base.node.isKind('mi') || base.node.isKind('mn')) &&
                    base.bbox.rscale === 1 && Array.from(base.getText()).length === 1 &&
                    !base.node.attributes.get('largeop'));
            };
            class_1.prototype.getOffset = function (_bbox, _sbox) {
                return [0, 0];
            };
            class_1.prototype.getV = function (bbox, sbox) {
                var tex = this.font.params;
                var subscriptshift = this.length2em(this.node.attributes.get('subscriptshift'), tex.sub1);
                return Math.max(this.isCharBase() ? 0 : bbox.d * bbox.rscale + tex.sub_drop * sbox.rscale, subscriptshift, sbox.h * sbox.rscale - (4 / 5) * tex.x_height);
            };
            class_1.prototype.getU = function (bbox, sbox) {
                var tex = this.font.params;
                var attr = this.node.attributes.getList('displaystyle', 'superscriptshift');
                var prime = this.node.getProperty('texprimestyle');
                var p = prime ? tex.sup3 : (attr.displaystyle ? tex.sup1 : tex.sup2);
                var superscriptshift = this.length2em(attr.superscriptshift, p);
                return Math.max(this.isCharBase() ? 0 : bbox.h * bbox.rscale - tex.sup_drop * sbox.rscale, superscriptshift, sbox.d * sbox.rscale + (1 / 4) * tex.x_height);
            };
            class_1.prototype.hasMovableLimits = function () {
                var display = this.node.attributes.get('displaystyle');
                var mo = this.baseChild.coreMO().node;
                return (!display && !!mo.attributes.get('movablelimits'));
            };
            class_1.prototype.getOverKU = function (basebox, overbox) {
                var accent = this.node.attributes.get('accent');
                var tex = this.font.params;
                var d = overbox.d * overbox.rscale;
                var k = (accent ? tex.rule_thickness :
                    Math.max(tex.big_op_spacing1, tex.big_op_spacing3 - Math.max(0, d))) -
                    (this.baseChild.node.isKind('munderover') ? .1 : 0);
                return [k, basebox.h * basebox.rscale + k + d];
            };
            class_1.prototype.getUnderKV = function (basebox, underbox) {
                var accent = this.node.attributes.get('accentunder');
                var tex = this.font.params;
                var h = underbox.h * underbox.rscale;
                var k = (accent ? tex.rule_thickness :
                    Math.max(tex.big_op_spacing2, tex.big_op_spacing4 - h)) -
                    (this.baseChild.node.isKind('munderover') ? .1 : 0);
                return [k, -(basebox.d * basebox.rscale + k + h)];
            };
            class_1.prototype.getDeltaW = function (boxes, delta) {
                var e_1, _a, e_2, _b;
                if (delta === void 0) { delta = [0, 0, 0]; }
                var align = this.node.attributes.get('align');
                var widths = boxes.map(function (box) { return box.w * box.rscale; });
                var w = Math.max.apply(Math, __spread(widths));
                var dw = [];
                var m = 0;
                try {
                    for (var _c = __values(widths.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var i = _d.value;
                        dw[i] = (align === 'center' ? (w - widths[i]) / 2 :
                            align === 'right' ? w - widths[i] : 0) + delta[i];
                        if (dw[i] < m) {
                            m = -dw[i];
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (m) {
                    try {
                        for (var _e = __values(dw.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var i = _f.value;
                            dw[i] += m;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return dw;
            };
            class_1.prototype.getDelta = function (noskew) {
                if (noskew === void 0) { noskew = false; }
                var accent = this.node.attributes.get('accent');
                var ddelta = (accent && !noskew ? this.baseChild.coreMO().bbox.sk : 0);
                return (DELTA * this.baseCore.bbox.ic / 2 + ddelta) * this.coreScale();
            };
            class_1.prototype.stretchChildren = function () {
                var e_3, _a, e_4, _b, e_5, _c;
                var stretchy = [];
                try {
                    for (var _d = __values(this.childNodes), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var child = _e.value;
                        if (child.canStretch(2)) {
                            stretchy.push(child);
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
                var count = stretchy.length;
                var nodeCount = this.childNodes.length;
                if (count && nodeCount > 1) {
                    var W = 0;
                    var all = (count > 1 && count === nodeCount);
                    try {
                        for (var _f = __values(this.childNodes), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var child = _g.value;
                            var noStretch = (child.stretch.dir === 0);
                            if (all || noStretch) {
                                var _h = child.getBBox(noStretch), w = _h.w, rscale = _h.rscale;
                                if (w * rscale > W)
                                    W = w * rscale;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    try {
                        for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next(); !stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
                            var child = stretchy_1_1.value;
                            child.coreMO().getStretchedVariant([W / child.bbox.rscale]);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return)) _c.call(stretchy_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            };
            return class_1;
        }(Base)),
        _a.useIC = false,
        _a;
}
exports.CommonScriptbaseMixin = CommonScriptbaseMixin;
//# sourceMappingURL=scriptbase.js.map

/***/ }),
/* 51 */
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
exports.CHTMLmunderover = exports.CHTMLmover = exports.CHTMLmunder = void 0;
var msubsup_js_1 = __webpack_require__(7);
var munderover_js_1 = __webpack_require__(9);
var munderover_js_2 = __webpack_require__(9);
var munderover_js_3 = __webpack_require__(9);
var munderover_js_4 = __webpack_require__(90);
var CHTMLmunder = (function (_super) {
    __extends(CHTMLmunder, _super);
    function CHTMLmunder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmunder.prototype.toCHTML = function (parent) {
        if (this.hasMovableLimits()) {
            _super.prototype.toCHTML.call(this, parent);
            this.adaptor.setAttribute(this.chtml, 'limits', 'false');
            return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var base = this.adaptor.append(this.adaptor.append(this.chtml, this.html('mjx-row')), this.html('mjx-base'));
        var under = this.adaptor.append(this.adaptor.append(this.chtml, this.html('mjx-row')), this.html('mjx-under'));
        this.baseChild.toCHTML(base);
        this.script.toCHTML(under);
        var basebox = this.baseChild.getBBox();
        var underbox = this.script.getBBox();
        var k = this.getUnderKV(basebox, underbox)[0];
        var delta = this.getDelta(true);
        this.adaptor.setStyle(under, 'paddingTop', this.em(k));
        this.setDeltaW([base, under], this.getDeltaW([basebox, underbox], [0, -delta]));
        this.adjustUnderDepth(under, underbox);
    };
    CHTMLmunder.kind = munderover_js_4.MmlMunder.prototype.kind;
    CHTMLmunder.useIC = true;
    CHTMLmunder.styles = {
        'mjx-over': {
            'text-align': 'left'
        },
        'mjx-munder:not([limits="false"])': {
            display: 'inline-table',
        },
        'mjx-munder > mjx-row': {
            'text-align': 'left'
        },
        'mjx-under': {
            'padding-bottom': '.1em'
        }
    };
    return CHTMLmunder;
}(munderover_js_1.CommonMunderMixin(msubsup_js_1.CHTMLmsub)));
exports.CHTMLmunder = CHTMLmunder;
var CHTMLmover = (function (_super) {
    __extends(CHTMLmover, _super);
    function CHTMLmover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmover.prototype.toCHTML = function (parent) {
        if (this.hasMovableLimits()) {
            _super.prototype.toCHTML.call(this, parent);
            this.adaptor.setAttribute(this.chtml, 'limits', 'false');
            return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var over = this.adaptor.append(this.chtml, this.html('mjx-over'));
        var base = this.adaptor.append(this.chtml, this.html('mjx-base'));
        this.script.toCHTML(over);
        this.baseChild.toCHTML(base);
        var overbox = this.script.getBBox();
        var basebox = this.baseChild.getBBox();
        var k = this.getOverKU(basebox, overbox)[0];
        var delta = this.getDelta();
        this.adaptor.setStyle(over, 'paddingBottom', this.em(k));
        this.setDeltaW([base, over], this.getDeltaW([basebox, overbox], [0, delta]));
        this.adjustOverDepth(over, overbox);
    };
    CHTMLmover.kind = munderover_js_4.MmlMover.prototype.kind;
    CHTMLmover.useIC = true;
    CHTMLmover.styles = {
        'mjx-mover:not([limits="false"])': {
            'padding-top': '.1em'
        },
        'mjx-mover:not([limits="false"]) > *': {
            display: 'block',
            'text-align': 'left'
        }
    };
    return CHTMLmover;
}(munderover_js_2.CommonMoverMixin(msubsup_js_1.CHTMLmsup)));
exports.CHTMLmover = CHTMLmover;
var CHTMLmunderover = (function (_super) {
    __extends(CHTMLmunderover, _super);
    function CHTMLmunderover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmunderover.prototype.toCHTML = function (parent) {
        if (this.hasMovableLimits()) {
            _super.prototype.toCHTML.call(this, parent);
            this.adaptor.setAttribute(this.chtml, 'limits', 'false');
            return;
        }
        this.chtml = this.standardCHTMLnode(parent);
        var over = this.adaptor.append(this.chtml, this.html('mjx-over'));
        var table = this.adaptor.append(this.adaptor.append(this.chtml, this.html('mjx-box')), this.html('mjx-munder'));
        var base = this.adaptor.append(this.adaptor.append(table, this.html('mjx-row')), this.html('mjx-base'));
        var under = this.adaptor.append(this.adaptor.append(table, this.html('mjx-row')), this.html('mjx-under'));
        this.overChild.toCHTML(over);
        this.baseChild.toCHTML(base);
        this.underChild.toCHTML(under);
        var overbox = this.overChild.getBBox();
        var basebox = this.baseChild.getBBox();
        var underbox = this.underChild.getBBox();
        var ok = this.getOverKU(basebox, overbox)[0];
        var uk = this.getUnderKV(basebox, underbox)[0];
        var delta = this.getDelta();
        this.adaptor.setStyle(over, 'paddingBottom', this.em(ok));
        this.adaptor.setStyle(under, 'paddingTop', this.em(uk));
        this.setDeltaW([base, under, over], this.getDeltaW([basebox, underbox, overbox], [0, -delta, delta]));
        this.adjustOverDepth(over, overbox);
        this.adjustUnderDepth(under, underbox);
    };
    CHTMLmunderover.kind = munderover_js_4.MmlMunderover.prototype.kind;
    CHTMLmunderover.useIC = true;
    CHTMLmunderover.styles = {
        'mjx-munderover:not([limits="false"])': {
            'padding-top': '.1em'
        },
        'mjx-munderover:not([limits="false"]) > *': {
            display: 'block'
        },
    };
    return CHTMLmunderover;
}(munderover_js_3.CommonMunderoverMixin(msubsup_js_1.CHTMLmsubsup)));
exports.CHTMLmunderover = CHTMLmunderover;
//# sourceMappingURL=munderover.js.map

/***/ }),
/* 52 */
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
exports.CHTMLmmultiscripts = void 0;
var msubsup_js_1 = __webpack_require__(7);
var mmultiscripts_js_1 = __webpack_require__(53);
var mmultiscripts_js_2 = __webpack_require__(91);
var CHTMLmmultiscripts = (function (_super) {
    __extends(CHTMLmmultiscripts, _super);
    function CHTMLmmultiscripts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmmultiscripts.prototype.toCHTML = function (parent) {
        var chtml = this.standardCHTMLnode(parent);
        var data = this.getScriptData();
        var sub = this.combinePrePost(data.sub, data.psub);
        var sup = this.combinePrePost(data.sup, data.psup);
        var _a = __read(this.getUVQ(data.base, sub, sup), 2), u = _a[0], v = _a[1];
        if (data.numPrescripts) {
            this.addScripts(u, -v, true, data.psub, data.psup, this.firstPrescript, data.numPrescripts);
        }
        this.childNodes[0].toCHTML(chtml);
        if (data.numScripts) {
            this.addScripts(u, -v, false, data.sub, data.sup, 1, data.numScripts);
        }
    };
    CHTMLmmultiscripts.prototype.addScripts = function (u, v, isPre, sub, sup, i, n) {
        var adaptor = this.adaptor;
        var q = (u - sup.d) + (v - sub.h);
        var U = (u < 0 && v === 0 ? sub.h + u : u);
        var rowdef = (q > 0 ? { style: { height: this.em(q) } } : {});
        var tabledef = (U ? { style: { 'vertical-align': this.em(U) } } : {});
        var supRow = this.html('mjx-row');
        var sepRow = this.html('mjx-row', rowdef);
        var subRow = this.html('mjx-row');
        var name = 'mjx-' + (isPre ? 'pre' : '') + 'scripts';
        adaptor.append(this.chtml, this.html(name, tabledef, [supRow, sepRow, subRow]));
        var m = i + 2 * n;
        while (i < m) {
            this.childNodes[i++].toCHTML(adaptor.append(subRow, this.html('mjx-cell')));
            this.childNodes[i++].toCHTML(adaptor.append(supRow, this.html('mjx-cell')));
        }
    };
    CHTMLmmultiscripts.kind = mmultiscripts_js_2.MmlMmultiscripts.prototype.kind;
    CHTMLmmultiscripts.styles = {
        'mjx-prescripts': {
            display: 'inline-table',
            'padding-left': '.05em'
        },
        'mjx-scripts': {
            display: 'inline-table',
            'padding-right': '.05em'
        },
        'mjx-prescripts > mjx-row > mjx-cell': {
            'text-align': 'right'
        }
    };
    return CHTMLmmultiscripts;
}(mmultiscripts_js_1.CommonMmultiscriptsMixin(msubsup_js_1.CHTMLmsubsup)));
exports.CHTMLmmultiscripts = CHTMLmmultiscripts;
//# sourceMappingURL=mmultiscripts.js.map

/***/ }),
/* 53 */
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
exports.CommonMmultiscriptsMixin = exports.ScriptNames = exports.NextScript = void 0;
var BBox_js_1 = __webpack_require__(1);
exports.NextScript = {
    base: 'subList',
    subList: 'supList',
    supList: 'subList',
    psubList: 'psupList',
    psupList: 'psubList',
};
exports.ScriptNames = ['sup', 'sup', 'psup', 'psub'];
function CommonMmultiscriptsMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.scriptData = null;
            _this.firstPrescript = 0;
            return _this;
        }
        class_1.prototype.combinePrePost = function (pre, post) {
            var bbox = new BBox_js_1.BBox(pre);
            bbox.combine(post, 0, 0);
            return bbox;
        };
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            var scriptspace = this.font.params.scriptspace;
            var data = this.getScriptData();
            var sub = this.combinePrePost(data.sub, data.psub);
            var sup = this.combinePrePost(data.sup, data.psup);
            var _a = __read(this.getUVQ(data.base, sub, sup), 2), u = _a[0], v = _a[1];
            bbox.empty();
            if (data.numPrescripts) {
                bbox.combine(data.psup, scriptspace, u);
                bbox.combine(data.psub, scriptspace, v);
            }
            bbox.append(data.base);
            if (data.numScripts) {
                var w = bbox.w;
                bbox.combine(data.sup, w, u);
                bbox.combine(data.sub, w, v);
                bbox.w += scriptspace;
            }
            bbox.clean();
            this.setChildPWidths(recompute);
        };
        class_1.prototype.getScriptData = function () {
            if (this.scriptData) {
                return this.scriptData;
            }
            var data = this.scriptData = {
                base: null, sub: BBox_js_1.BBox.empty(), sup: BBox_js_1.BBox.empty(), psub: BBox_js_1.BBox.empty(), psup: BBox_js_1.BBox.empty(),
                numPrescripts: 0, numScripts: 0
            };
            var lists = this.getScriptBBoxLists();
            this.combineBBoxLists(data.sub, data.sup, lists.subList, lists.supList);
            this.combineBBoxLists(data.psub, data.psup, lists.psubList, lists.psupList);
            this.scriptData.base = lists.base[0];
            this.scriptData.numPrescripts = lists.psubList.length;
            this.scriptData.numScripts = lists.subList.length;
            return this.scriptData;
        };
        class_1.prototype.getScriptBBoxLists = function () {
            var e_1, _a;
            var lists = {
                base: [], subList: [], supList: [], psubList: [], psupList: []
            };
            var script = 'base';
            try {
                for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    if (child.node.isKind('mprescripts')) {
                        script = 'psubList';
                    }
                    else {
                        lists[script].push(child.getBBox());
                        script = exports.NextScript[script];
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
            this.firstPrescript = lists.subList.length + lists.supList.length + 2;
            this.padLists(lists.subList, lists.supList);
            this.padLists(lists.psubList, lists.psupList);
            return lists;
        };
        class_1.prototype.padLists = function (list1, list2) {
            if (list1.length > list2.length) {
                list2.push(BBox_js_1.BBox.empty());
            }
        };
        class_1.prototype.combineBBoxLists = function (bbox1, bbox2, list1, list2) {
            for (var i = 0; i < list1.length; i++) {
                var _a = __read(this.getScaledWHD(list1[i]), 3), w1 = _a[0], h1 = _a[1], d1 = _a[2];
                var _b = __read(this.getScaledWHD(list2[i]), 3), w2 = _b[0], h2 = _b[1], d2 = _b[2];
                var w = Math.max(w1, w2);
                bbox1.w += w;
                bbox2.w += w;
                if (h1 > bbox1.h)
                    bbox1.h = h1;
                if (d1 > bbox1.d)
                    bbox1.d = d1;
                if (h2 > bbox2.h)
                    bbox2.h = h2;
                if (d2 > bbox2.d)
                    bbox2.d = d2;
            }
        };
        class_1.prototype.getScaledWHD = function (bbox) {
            var w = bbox.w, h = bbox.h, d = bbox.d, rscale = bbox.rscale;
            return [w * rscale, h * rscale, d * rscale];
        };
        class_1.prototype.getUVQ = function (basebox, subbox, supbox) {
            var _a;
            if (!this.UVQ) {
                var _b = __read([0, 0, 0], 3), u = _b[0], v = _b[1], q = _b[2];
                if (subbox.h === 0 && subbox.d === 0) {
                    u = this.getU(basebox, supbox);
                }
                else if (supbox.h === 0 && supbox.d === 0) {
                    u = -this.getV(basebox, subbox);
                }
                else {
                    _a = __read(_super.prototype.getUVQ.call(this, basebox, subbox, supbox), 3), u = _a[0], v = _a[1], q = _a[2];
                }
                this.UVQ = [u, v, q];
            }
            return this.UVQ;
        };
        return class_1;
    }(Base));
}
exports.CommonMmultiscriptsMixin = CommonMmultiscriptsMixin;
//# sourceMappingURL=mmultiscripts.js.map

/***/ }),
/* 54 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHTMLmtable = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mtable_js_1 = __webpack_require__(55);
var mtable_js_2 = __webpack_require__(93);
var string_js_1 = __webpack_require__(3);
var CHTMLmtable = (function (_super) {
    __extends(CHTMLmtable, _super);
    function CHTMLmtable(factory, node, parent) {
        if (parent === void 0) { parent = null; }
        var _this = _super.call(this, factory, node, parent) || this;
        _this.itable = _this.html('mjx-itable');
        _this.labels = _this.html('mjx-itable');
        return _this;
    }
    CHTMLmtable.prototype.getAlignShift = function () {
        var data = _super.prototype.getAlignShift.call(this);
        if (!this.isTop) {
            data[1] = 0;
        }
        return data;
    };
    CHTMLmtable.prototype.toCHTML = function (parent) {
        var e_1, _a;
        var chtml = this.standardCHTMLnode(parent);
        this.adaptor.append(chtml, this.html('mjx-table', {}, [this.itable]));
        try {
            for (var _b = __values(this.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                child.toCHTML(this.itable);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.padRows();
        this.handleColumnSpacing();
        this.handleColumnLines();
        this.handleColumnWidths();
        this.handleRowSpacing();
        this.handleRowLines();
        this.handleEqualRows();
        this.handleFrame();
        this.handleWidth();
        this.handleLabels();
        this.handleAlign();
        this.handleJustify();
        this.shiftColor();
    };
    CHTMLmtable.prototype.shiftColor = function () {
        var adaptor = this.adaptor;
        var color = adaptor.getStyle(this.chtml, 'backgroundColor');
        if (color) {
            adaptor.setStyle(this.chtml, 'backgroundColor', '');
            adaptor.setStyle(this.itable, 'backgroundColor', color);
        }
    };
    CHTMLmtable.prototype.padRows = function () {
        var e_2, _a;
        var adaptor = this.adaptor;
        try {
            for (var _b = __values(adaptor.childNodes(this.itable)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var row = _c.value;
                while (adaptor.childNodes(row).length < this.numCols) {
                    adaptor.append(row, this.html('mjx-mtd'));
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
    CHTMLmtable.prototype.handleColumnSpacing = function () {
        var e_3, _a, e_4, _b;
        var spacing = this.getEmHalfSpacing(this.fSpace[0], this.cSpace);
        var frame = this.frame;
        try {
            for (var _c = __values(this.tableRows), _d = _c.next(); !_d.done; _d = _c.next()) {
                var row = _d.value;
                var i = 0;
                try {
                    for (var _e = (e_4 = void 0, __values(row.tableCells)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var cell = _f.value;
                        var lspace = spacing[i++];
                        var rspace = spacing[i];
                        var styleNode = (cell ? cell.chtml : this.adaptor.childNodes(row.chtml)[i]);
                        if ((i > 1 && lspace !== '0.4em') || (frame && i === 1)) {
                            this.adaptor.setStyle(styleNode, 'paddingLeft', lspace);
                        }
                        if ((i < this.numCols && rspace !== '0.4em') || (frame && i === this.numCols)) {
                            this.adaptor.setStyle(styleNode, 'paddingRight', rspace);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    CHTMLmtable.prototype.handleColumnLines = function () {
        var e_5, _a, e_6, _b;
        if (this.node.attributes.get('columnlines') === 'none')
            return;
        var lines = this.getColumnAttributes('columnlines');
        try {
            for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
                var row = _d.value;
                var i = 0;
                try {
                    for (var _e = (e_6 = void 0, __values(this.adaptor.childNodes(row.chtml).slice(1))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var cell = _f.value;
                        var line = lines[i++];
                        if (line === 'none')
                            continue;
                        this.adaptor.setStyle(cell, 'borderLeft', '.07em ' + line);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    CHTMLmtable.prototype.handleColumnWidths = function () {
        var e_7, _a, e_8, _b;
        try {
            for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
                var row = _d.value;
                var i = 0;
                try {
                    for (var _e = (e_8 = void 0, __values(this.adaptor.childNodes(row.chtml))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var cell = _f.value;
                        var w = this.cWidths[i++];
                        if (w !== null) {
                            var width = (typeof w === 'number' ? this.em(w) : w);
                            this.adaptor.setStyle(cell, 'width', width);
                            this.adaptor.setStyle(cell, 'maxWidth', width);
                            this.adaptor.setStyle(cell, 'minWidth', width);
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    CHTMLmtable.prototype.handleRowSpacing = function () {
        var e_9, _a, e_10, _b;
        var spacing = this.getEmHalfSpacing(this.fSpace[1], this.rSpace);
        var frame = this.frame;
        var i = 0;
        try {
            for (var _c = __values(this.childNodes), _d = _c.next(); !_d.done; _d = _c.next()) {
                var row = _d.value;
                var tspace = spacing[i++];
                var bspace = spacing[i];
                try {
                    for (var _e = (e_10 = void 0, __values(row.childNodes)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var cell = _f.value;
                        if ((i > 1 && tspace !== '0.215em') || (frame && i === 1)) {
                            this.adaptor.setStyle(cell.chtml, 'paddingTop', tspace);
                        }
                        if ((i < this.numRows && bspace !== '0.215em') || (frame && i === this.numRows)) {
                            this.adaptor.setStyle(cell.chtml, 'paddingBottom', bspace);
                        }
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_9) throw e_9.error; }
        }
    };
    CHTMLmtable.prototype.handleRowLines = function () {
        var e_11, _a, e_12, _b;
        if (this.node.attributes.get('rowlines') === 'none')
            return;
        var lines = this.getRowAttributes('rowlines');
        var i = 0;
        try {
            for (var _c = __values(this.childNodes.slice(1)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var row = _d.value;
                var line = lines[i++];
                if (line === 'none')
                    continue;
                try {
                    for (var _e = (e_12 = void 0, __values(this.adaptor.childNodes(row.chtml))), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var cell = _f.value;
                        this.adaptor.setStyle(cell, 'borderTop', '.07em ' + line);
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_11) throw e_11.error; }
        }
    };
    CHTMLmtable.prototype.handleEqualRows = function () {
        if (!this.node.attributes.get('equalrows'))
            return;
        var space = this.getRowHalfSpacing();
        var _a = this.getTableData(), H = _a.H, D = _a.D, NH = _a.NH, ND = _a.ND;
        var HD = this.getEqualRowHeight();
        for (var i = 0; i < this.numRows; i++) {
            var row = this.childNodes[i];
            if (HD !== NH[i] + ND[i]) {
                this.setRowHeight(row, HD, (HD - H[i] + D[i]) / 2, space[i] + space[i + 1]);
            }
        }
    };
    CHTMLmtable.prototype.setRowHeight = function (row, HD, D, space) {
        var e_13, _a;
        this.adaptor.setStyle(row.chtml, 'height', this.em(HD + space));
        var ralign = row.node.attributes.get('rowalign');
        try {
            for (var _b = __values(row.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var cell = _c.value;
                if (this.setCellBaseline(cell, ralign, HD, D))
                    break;
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
    };
    CHTMLmtable.prototype.setCellBaseline = function (cell, ralign, HD, D) {
        var calign = cell.node.attributes.get('rowalign');
        if (calign === 'baseline' || calign === 'axis') {
            var adaptor = this.adaptor;
            var child = adaptor.lastChild(cell.chtml);
            adaptor.setStyle(child, 'height', this.em(HD));
            adaptor.setStyle(child, 'verticalAlign', this.em(-D));
            var row = cell.parent;
            if ((!row.node.isKind('mlabeledtr') || cell !== row.childNodes[0]) &&
                (ralign === 'baseline' || ralign === 'axis')) {
                return true;
            }
        }
        return false;
    };
    CHTMLmtable.prototype.handleFrame = function () {
        if (this.frame) {
            this.adaptor.setStyle(this.itable, 'border', '.07em ' + this.node.attributes.get('frame'));
        }
    };
    CHTMLmtable.prototype.handleWidth = function () {
        var adaptor = this.adaptor;
        var _a = this.getBBox(), w = _a.w, L = _a.L, R = _a.R;
        adaptor.setStyle(this.chtml, 'minWidth', this.em(L + w + R));
        var W = this.node.attributes.get('width');
        if (string_js_1.isPercent(W)) {
            adaptor.setStyle(this.chtml, 'width', '');
            adaptor.setAttribute(this.chtml, 'width', 'full');
        }
        else if (!this.hasLabels) {
            if (W === 'auto')
                return;
            W = this.em(this.length2em(W) + 2 * this.fLine);
        }
        var table = adaptor.firstChild(this.chtml);
        adaptor.setStyle(table, 'width', W);
        adaptor.setStyle(table, 'minWidth', this.em(w));
        if (L || R) {
            adaptor.setStyle(this.chtml, 'margin', '');
            if (L === R) {
                adaptor.setStyle(table, 'margin', '0 ' + this.em(R));
            }
            else {
                adaptor.setStyle(table, 'margin', '0 ' + this.em(R) + ' 0 ' + this.em(L));
            }
        }
        adaptor.setAttribute(this.itable, 'width', 'full');
    };
    CHTMLmtable.prototype.handleAlign = function () {
        var _a = __read(this.getAlignmentRow(), 2), align = _a[0], row = _a[1];
        if (row === null) {
            if (align !== 'axis') {
                this.adaptor.setAttribute(this.chtml, 'align', align);
            }
        }
        else {
            var y = this.getVerticalPosition(row, align);
            this.adaptor.setAttribute(this.chtml, 'align', 'top');
            this.adaptor.setStyle(this.chtml, 'verticalAlign', this.em(y));
        }
    };
    CHTMLmtable.prototype.handleJustify = function () {
        var align = this.getAlignShift()[0];
        if (align !== 'center') {
            this.adaptor.setAttribute(this.chtml, 'justify', align);
        }
    };
    CHTMLmtable.prototype.handleLabels = function () {
        if (!this.hasLabels)
            return;
        var labels = this.labels;
        var attributes = this.node.attributes;
        var adaptor = this.adaptor;
        var side = attributes.get('side');
        adaptor.setAttribute(this.chtml, 'side', side);
        adaptor.setAttribute(labels, 'align', side);
        adaptor.setStyle(labels, side, '0');
        var _a = __read(this.addLabelPadding(side), 2), align = _a[0], shift = _a[1];
        if (shift) {
            var table = adaptor.firstChild(this.chtml);
            this.setIndent(table, align, shift);
        }
        this.updateRowHeights();
        this.addLabelSpacing();
    };
    CHTMLmtable.prototype.addLabelPadding = function (side) {
        var _a = __read(this.getPadAlignShift(side), 3), align = _a[1], shift = _a[2];
        var styles = {};
        if (side === 'right') {
            var W = this.node.attributes.get('width');
            var _b = this.getBBox(), w = _b.w, L = _b.L, R = _b.R;
            styles.style = {
                width: (string_js_1.isPercent(W) ? 'calc(' + W + ' + ' + this.em(L + R) + ')' : this.em(L + w + R))
            };
        }
        this.adaptor.append(this.chtml, this.html('mjx-labels', styles, [this.labels]));
        return [align, shift];
    };
    CHTMLmtable.prototype.updateRowHeights = function () {
        if (this.node.attributes.get('equalrows'))
            return;
        var _a = this.getTableData(), H = _a.H, D = _a.D, NH = _a.NH, ND = _a.ND;
        var space = this.getRowHalfSpacing();
        for (var i = 0; i < this.numRows; i++) {
            var row = this.childNodes[i];
            if (H[i] !== NH[i] || D[i] !== ND[i]) {
                this.setRowHeight(row, H[i] + D[i], D[i], space[i] + space[i + 1]);
            }
            else if (row.node.isKind('mlabeledtr')) {
                this.setCellBaseline(row.childNodes[0], '', H[i] + D[i], D[i]);
            }
        }
    };
    CHTMLmtable.prototype.addLabelSpacing = function () {
        var adaptor = this.adaptor;
        var equal = this.node.attributes.get('equalrows');
        var _a = this.getTableData(), H = _a.H, D = _a.D;
        var HD = (equal ? this.getEqualRowHeight() : 0);
        var space = this.getRowHalfSpacing();
        var h = this.fLine;
        var current = adaptor.firstChild(this.labels);
        for (var i = 0; i < this.numRows; i++) {
            var row = this.childNodes[i];
            if (row.node.isKind('mlabeledtr')) {
                h && adaptor.insert(this.html('mjx-mtr', { style: { height: this.em(h) } }), current);
                adaptor.setStyle(current, 'height', this.em((equal ? HD : H[i] + D[i]) + space[i] + space[i + 1]));
                current = adaptor.next(current);
                h = this.rLines[i];
            }
            else {
                h += space[i] + (equal ? HD : H[i] + D[i]) + space[i + 1] + this.rLines[i];
            }
        }
    };
    CHTMLmtable.kind = mtable_js_2.MmlMtable.prototype.kind;
    CHTMLmtable.styles = {
        'mjx-mtable': {
            'vertical-align': '.25em',
            'text-align': 'center',
            'position': 'relative',
            'box-sizing': 'border-box'
        },
        'mjx-labels': {
            position: 'absolute',
            left: 0,
            top: 0
        },
        'mjx-table': {
            'display': 'inline-block',
            'vertical-align': '-.5ex'
        },
        'mjx-table > mjx-itable': {
            'vertical-align': 'middle',
            'text-align': 'left',
            'box-sizing': 'border-box'
        },
        'mjx-labels > mjx-itable': {
            position: 'absolute',
            top: 0
        },
        'mjx-mtable[justify="left"]': {
            'text-align': 'left'
        },
        'mjx-mtable[justify="right"]': {
            'text-align': 'right'
        },
        'mjx-mtable[justify="left"][side="left"]': {
            'padding-right': '0 ! important'
        },
        'mjx-mtable[justify="left"][side="right"]': {
            'padding-left': '0 ! important'
        },
        'mjx-mtable[justify="right"][side="left"]': {
            'padding-right': '0 ! important'
        },
        'mjx-mtable[justify="right"][side="right"]': {
            'padding-left': '0 ! important'
        },
        'mjx-mtable[align]': {
            'vertical-align': 'baseline'
        },
        'mjx-mtable[align="top"] > mjx-table': {
            'vertical-align': 'top'
        },
        'mjx-mtable[align="bottom"] > mjx-table': {
            'vertical-align': 'bottom'
        },
        'mjx-mtable[side="right"] mjx-labels': {
            'min-width': '100%'
        }
    };
    return CHTMLmtable;
}(mtable_js_1.CommonMtableMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmtable = CHTMLmtable;
//# sourceMappingURL=mtable.js.map

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
exports.CommonMtableMixin = void 0;
var BBox_js_1 = __webpack_require__(1);
var string_js_1 = __webpack_require__(3);
var numeric_js_1 = __webpack_require__(92);
function CommonMtableMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.numCols = 0;
            _this.numRows = 0;
            _this.data = null;
            _this.pwidthCells = [];
            _this.pWidth = 0;
            _this.numCols = numeric_js_1.max(_this.tableRows.map(function (row) { return row.numCells; }));
            _this.numRows = _this.childNodes.length;
            _this.hasLabels = _this.childNodes.reduce(function (value, row) { return value || row.node.isKind('mlabeledtr'); }, false);
            _this.findContainer();
            _this.isTop = !_this.container || (_this.container.node.isKind('math') && !_this.container.parent);
            if (_this.isTop) {
                _this.jax.table = _this;
            }
            _this.getPercentageWidth();
            var attributes = _this.node.attributes;
            _this.frame = attributes.get('frame') !== 'none';
            _this.fLine = (_this.frame ? .07 : 0);
            _this.fSpace = (_this.frame ? _this.convertLengths(_this.getAttributeArray('framespacing')) : [0, 0]);
            _this.cSpace = _this.convertLengths(_this.getColumnAttributes('columnspacing'));
            _this.rSpace = _this.convertLengths(_this.getRowAttributes('rowspacing'));
            _this.cLines = _this.getColumnAttributes('columnlines').map(function (x) { return (x === 'none' ? 0 : .07); });
            _this.rLines = _this.getRowAttributes('rowlines').map(function (x) { return (x === 'none' ? 0 : .07); });
            _this.cWidths = _this.getColumnWidths();
            _this.stretchRows();
            _this.stretchColumns();
            return _this;
        }
        Object.defineProperty(class_1.prototype, "tableRows", {
            get: function () {
                return this.childNodes;
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.findContainer = function () {
            var node = this;
            var parent = node.parent;
            while (parent && (parent.node.notParent || parent.node.isKind('mrow'))) {
                node = parent;
                parent = parent.parent;
            }
            this.container = parent;
            this.containerI = node.node.childPosition();
        };
        class_1.prototype.getPercentageWidth = function () {
            if (this.hasLabels) {
                this.bbox.pwidth = BBox_js_1.BBox.fullWidth;
            }
            else {
                var width = this.node.attributes.get('width');
                if (string_js_1.isPercent(width)) {
                    this.bbox.pwidth = width;
                }
            }
        };
        class_1.prototype.stretchRows = function () {
            var equal = this.node.attributes.get('equalrows');
            var HD = (equal ? this.getEqualRowHeight() : 0);
            var _a = (equal ? this.getTableData() : { H: [0], D: [0] }), H = _a.H, D = _a.D;
            var rows = this.tableRows;
            for (var i = 0; i < this.numRows; i++) {
                var hd = (equal ? [(HD + H[i] - D[i]) / 2, (HD - H[i] + D[i]) / 2] : null);
                rows[i].stretchChildren(hd);
            }
        };
        class_1.prototype.stretchColumns = function () {
            for (var i = 0; i < this.numCols; i++) {
                var width = (typeof this.cWidths[i] === 'number' ? this.cWidths[i] : null);
                this.stretchColumn(i, width);
            }
        };
        class_1.prototype.stretchColumn = function (i, W) {
            var e_1, _a, e_2, _b, e_3, _c;
            var stretchy = [];
            try {
                for (var _d = __values(this.tableRows), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var row = _e.value;
                    var cell = row.getChild(i);
                    if (cell) {
                        var child = cell.childNodes[0];
                        if (child.stretch.dir === 0 &&
                            child.canStretch(2)) {
                            stretchy.push(child);
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var count = stretchy.length;
            var nodeCount = this.childNodes.length;
            if (count && nodeCount > 1) {
                if (W === null) {
                    W = 0;
                    var all = (count > 1 && count === nodeCount);
                    try {
                        for (var _f = __values(this.tableRows), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var row = _g.value;
                            var cell = row.getChild(i);
                            if (cell) {
                                var child = cell.childNodes[0];
                                var noStretch = (child.stretch.dir === 0);
                                if (all || noStretch) {
                                    var w = child.getBBox(noStretch).w;
                                    if (w > W) {
                                        W = w;
                                    }
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                try {
                    for (var stretchy_1 = __values(stretchy), stretchy_1_1 = stretchy_1.next(); !stretchy_1_1.done; stretchy_1_1 = stretchy_1.next()) {
                        var child = stretchy_1_1.value;
                        child.coreMO().getStretchedVariant([W]);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (stretchy_1_1 && !stretchy_1_1.done && (_c = stretchy_1.return)) _c.call(stretchy_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        };
        class_1.prototype.getTableData = function () {
            if (this.data) {
                return this.data;
            }
            var H = new Array(this.numRows).fill(0);
            var D = new Array(this.numRows).fill(0);
            var W = new Array(this.numCols).fill(0);
            var NH = new Array(this.numRows);
            var ND = new Array(this.numRows);
            var LW = [0];
            var rows = this.tableRows;
            for (var j = 0; j < rows.length; j++) {
                var row = rows[j];
                for (var i = 0; i < row.numCells; i++) {
                    var cell = row.getChild(i);
                    this.updateHDW(cell, i, j, H, D, W);
                    this.recordPWidthCell(cell, i);
                }
                NH[j] = H[j];
                ND[j] = D[j];
                if (row.labeled) {
                    this.updateHDW(row.childNodes[0], 0, j, H, D, LW);
                }
            }
            var L = LW[0];
            this.data = { H: H, D: D, W: W, NH: NH, ND: ND, L: L };
            return this.data;
        };
        class_1.prototype.updateHDW = function (cell, i, j, H, D, W) {
            if (W === void 0) { W = null; }
            var _a = cell.getBBox(), h = _a.h, d = _a.d, w = _a.w;
            if (h < .75)
                h = .75;
            if (d < .25)
                d = .25;
            if (h > H[j])
                H[j] = h;
            if (d > D[j])
                D[j] = d;
            if (W && w > W[i])
                W[i] = w;
        };
        class_1.prototype.recordPWidthCell = function (cell, i) {
            if (cell.childNodes[0] && cell.childNodes[0].getBBox().pwidth) {
                this.pwidthCells.push([cell, i]);
            }
        };
        class_1.prototype.computeBBox = function (bbox, _recompute) {
            if (_recompute === void 0) { _recompute = false; }
            var _a = this.getTableData(), H = _a.H, D = _a.D;
            var height, width;
            if (this.node.attributes.get('equalrows')) {
                var HD = this.getEqualRowHeight();
                height = numeric_js_1.sum([].concat(this.rLines, this.rSpace)) + HD * this.numRows;
            }
            else {
                height = numeric_js_1.sum(H.concat(D, this.rLines, this.rSpace));
            }
            height += 2 * (this.fLine + this.fSpace[1]);
            var CW = this.getComputedWidths();
            width = numeric_js_1.sum(CW.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
            var w = this.node.attributes.get('width');
            if (w !== 'auto') {
                width = Math.max(this.length2em(w, 0) + 2 * this.fLine, width);
            }
            var _b = __read(this.getBBoxHD(height), 2), h = _b[0], d = _b[1];
            bbox.h = h;
            bbox.d = d;
            bbox.w = width;
            var _c = __read(this.getBBoxLR(), 2), L = _c[0], R = _c[1];
            bbox.L = L;
            bbox.R = R;
            if (!string_js_1.isPercent(w)) {
                this.setColumnPWidths();
            }
        };
        class_1.prototype.setChildPWidths = function (_recompute, cwidth, _clear) {
            var width = this.node.attributes.get('width');
            if (!string_js_1.isPercent(width))
                return false;
            if (!this.hasLabels) {
                this.bbox.pwidth = '';
                this.container.bbox.pwidth = '';
            }
            var _a = this.bbox, w = _a.w, L = _a.L, R = _a.R;
            var W = Math.max(w, this.length2em(width, Math.max(cwidth, L + w + R)));
            var cols = (this.node.attributes.get('equalcolumns') ?
                Array(this.numCols).fill(this.percent(1 / Math.max(1, this.numCols))) :
                this.getColumnAttributes('columnwidth', 0));
            this.cWidths = this.getColumnWidthsFixed(cols, W);
            var CW = this.getComputedWidths();
            this.pWidth = numeric_js_1.sum(CW.concat(this.cLines, this.cSpace)) + 2 * (this.fLine + this.fSpace[0]);
            if (this.isTop) {
                this.bbox.w = this.pWidth;
            }
            this.setColumnPWidths();
            if (this.pWidth !== w) {
                this.parent.invalidateBBox();
            }
            return this.pWidth !== w;
        };
        class_1.prototype.setColumnPWidths = function () {
            var e_4, _a;
            var W = this.cWidths;
            try {
                for (var _b = __values(this.pwidthCells), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), cell = _d[0], i = _d[1];
                    if (cell.setChildPWidths(false, W[i])) {
                        cell.invalidateBBox();
                        cell.getBBox();
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        class_1.prototype.getBBoxHD = function (height) {
            var _a = __read(this.getAlignmentRow(), 2), align = _a[0], row = _a[1];
            if (row === null) {
                var a = this.font.params.axis_height;
                var h2 = height / 2;
                var HD = {
                    top: [0, height],
                    center: [h2, h2],
                    bottom: [height, 0],
                    baseline: [h2, h2],
                    axis: [h2 + a, h2 - a]
                };
                return HD[align] || [h2, h2];
            }
            else {
                var y = this.getVerticalPosition(row, align);
                return [y, height - y];
            }
        };
        class_1.prototype.getBBoxLR = function () {
            if (this.hasLabels) {
                var side = this.node.attributes.get('side');
                var _a = __read(this.getPadAlignShift(side), 2), pad = _a[0], align = _a[1];
                return (align === 'center' ? [pad, pad] :
                    side === 'left' ? [pad, 0] : [0, pad]);
            }
            return [0, 0];
        };
        class_1.prototype.getPadAlignShift = function (side) {
            var L = this.getTableData().L;
            var sep = this.length2em(this.node.attributes.get('minlabelspacing'));
            var pad = L + sep;
            var _a = __read((this.styles == null ? ['', ''] :
                [this.styles.get('padding-left'), this.styles.get('padding-right')]), 2), lpad = _a[0], rpad = _a[1];
            if (lpad || rpad) {
                pad = Math.max(pad, this.length2em(lpad || '0'), this.length2em(rpad || '0'));
            }
            var _b = __read(this.getAlignShift(), 2), align = _b[0], shift = _b[1];
            if (align === side) {
                shift = (side === 'left' ? Math.max(pad, shift) - pad : Math.min(-pad, shift) + pad);
            }
            return [pad, align, shift];
        };
        class_1.prototype.getAlignShift = function () {
            return (this.isTop ? _super.prototype.getAlignShift.call(this) :
                [this.container.getChildAlign(this.containerI), 0]);
        };
        class_1.prototype.getWidth = function () {
            return this.pWidth || this.getBBox().w;
        };
        class_1.prototype.getEqualRowHeight = function () {
            var _a = this.getTableData(), H = _a.H, D = _a.D;
            var HD = Array.from(H.keys()).map(function (i) { return H[i] + D[i]; });
            return Math.max.apply(Math, HD);
        };
        class_1.prototype.getComputedWidths = function () {
            var _this = this;
            var W = this.getTableData().W;
            var CW = Array.from(W.keys()).map(function (i) {
                return (typeof _this.cWidths[i] === 'number' ? _this.cWidths[i] : W[i]);
            });
            if (this.node.attributes.get('equalcolumns')) {
                CW = Array(CW.length).fill(numeric_js_1.max(CW));
            }
            return CW;
        };
        class_1.prototype.getColumnWidths = function () {
            var width = this.node.attributes.get('width');
            if (this.node.attributes.get('equalcolumns')) {
                return this.getEqualColumns(width);
            }
            var swidths = this.getColumnAttributes('columnwidth', 0);
            if (width === 'auto') {
                return this.getColumnWidthsAuto(swidths);
            }
            if (string_js_1.isPercent(width)) {
                return this.getColumnWidthsPercent(swidths);
            }
            return this.getColumnWidthsFixed(swidths, this.length2em(width));
        };
        class_1.prototype.getEqualColumns = function (width) {
            var n = Math.max(1, this.numCols);
            var cwidth;
            if (width === 'auto') {
                var W = this.getTableData().W;
                cwidth = numeric_js_1.max(W);
            }
            else if (string_js_1.isPercent(width)) {
                cwidth = this.percent(1 / n);
            }
            else {
                var w = numeric_js_1.sum([].concat(this.cLines, this.cSpace)) + 2 * this.fSpace[0];
                cwidth = Math.max(0, this.length2em(width) - w) / n;
            }
            return Array(this.numCols).fill(cwidth);
        };
        class_1.prototype.getColumnWidthsAuto = function (swidths) {
            var _this = this;
            return swidths.map(function (x) {
                if (x === 'auto' || x === 'fit')
                    return null;
                if (string_js_1.isPercent(x))
                    return x;
                return _this.length2em(x);
            });
        };
        class_1.prototype.getColumnWidthsPercent = function (swidths) {
            var _this = this;
            var hasFit = swidths.indexOf('fit') >= 0;
            var W = (hasFit ? this.getTableData() : { W: null }).W;
            return Array.from(swidths.keys()).map(function (i) {
                var x = swidths[i];
                if (x === 'fit')
                    return null;
                if (x === 'auto')
                    return (hasFit ? W[i] : null);
                if (string_js_1.isPercent(x))
                    return x;
                return _this.length2em(x);
            });
        };
        class_1.prototype.getColumnWidthsFixed = function (swidths, width) {
            var _this = this;
            var indices = Array.from(swidths.keys());
            var fit = indices.filter(function (i) { return swidths[i] === 'fit'; });
            var auto = indices.filter(function (i) { return swidths[i] === 'auto'; });
            var n = fit.length || auto.length;
            var W = (n ? this.getTableData() : { W: null }).W;
            var cwidth = width - numeric_js_1.sum([].concat(this.cLines, this.cSpace)) - 2 * this.fSpace[0];
            var dw = cwidth;
            indices.forEach(function (i) {
                var x = swidths[i];
                dw -= (x === 'fit' || x === 'auto' ? W[i] : _this.length2em(x, width));
            });
            var fw = (n && dw > 0 ? dw / n : 0);
            return indices.map(function (i) {
                var x = swidths[i];
                if (x === 'fit')
                    return W[i] + fw;
                if (x === 'auto')
                    return W[i] + (fit.length === 0 ? fw : 0);
                return _this.length2em(x, cwidth);
            });
        };
        class_1.prototype.getVerticalPosition = function (i, align) {
            var equal = this.node.attributes.get('equalrows');
            var _a = this.getTableData(), H = _a.H, D = _a.D;
            var HD = (equal ? this.getEqualRowHeight() : 0);
            var space = this.getRowHalfSpacing();
            var y = this.fLine;
            for (var j = 0; j < i; j++) {
                y += space[j] + (equal ? HD : H[j] + D[j]) + space[j + 1] + this.rLines[j];
            }
            var _b = __read((equal ? [(HD + H[i] - D[i]) / 2, (HD - H[i] + D[i]) / 2] : [H[i], D[i]]), 2), h = _b[0], d = _b[1];
            var offset = {
                top: 0,
                center: space[i] + (h + d) / 2,
                bottom: space[i] + h + d + space[i + 1],
                baseline: space[i] + h,
                axis: space[i] + h - .25
            };
            y += offset[align] || 0;
            return y;
        };
        class_1.prototype.getEmHalfSpacing = function (fspace, space) {
            var fspaceEm = this.em(fspace);
            var spaceEm = this.addEm(space, 2);
            spaceEm.unshift(fspaceEm);
            spaceEm.push(fspaceEm);
            return spaceEm;
        };
        class_1.prototype.getRowHalfSpacing = function () {
            var space = this.rSpace.map(function (x) { return x / 2; });
            space.unshift(this.fSpace[1]);
            space.push(this.fSpace[1]);
            return space;
        };
        class_1.prototype.getColumnHalfSpacing = function () {
            var space = this.cSpace.map(function (x) { return x / 2; });
            space.unshift(this.fSpace[0]);
            space.push(this.fSpace[0]);
            return space;
        };
        class_1.prototype.getAlignmentRow = function () {
            var _a = __read(string_js_1.split(this.node.attributes.get('align')), 2), align = _a[0], row = _a[1];
            if (row == null)
                return [align, null];
            var i = parseInt(row);
            if (i < 0)
                i += this.numRows + 1;
            return [align, i < 1 || i > this.numRows ? null : i - 1];
        };
        class_1.prototype.getColumnAttributes = function (name, i) {
            if (i === void 0) { i = 1; }
            var n = this.numCols - i;
            var columns = this.getAttributeArray(name);
            if (columns.length === 0)
                return null;
            while (columns.length < n) {
                columns.push(columns[columns.length - 1]);
            }
            if (columns.length > n) {
                columns.splice(n);
            }
            return columns;
        };
        class_1.prototype.getRowAttributes = function (name, i) {
            if (i === void 0) { i = 1; }
            var n = this.numRows - i;
            var rows = this.getAttributeArray(name);
            if (rows.length === 0)
                return null;
            while (rows.length < n) {
                rows.push(rows[rows.length - 1]);
            }
            if (rows.length > n) {
                rows.splice(n);
            }
            return rows;
        };
        class_1.prototype.getAttributeArray = function (name) {
            var value = this.node.attributes.get(name);
            if (!value)
                return [this.node.attributes.getDefault(name)];
            return string_js_1.split(value);
        };
        class_1.prototype.addEm = function (list, n) {
            var _this = this;
            if (n === void 0) { n = 1; }
            if (!list)
                return null;
            return list.map(function (x) { return _this.em(x / n); });
        };
        class_1.prototype.convertLengths = function (list) {
            var _this = this;
            if (!list)
                return null;
            return list.map(function (x) { return _this.length2em(x); });
        };
        return class_1;
    }(Base));
}
exports.CommonMtableMixin = CommonMtableMixin;
//# sourceMappingURL=mtable.js.map

/***/ }),
/* 56 */
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
exports.CHTMLmlabeledtr = exports.CHTMLmtr = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mtr_js_1 = __webpack_require__(12);
var mtr_js_2 = __webpack_require__(12);
var mtr_js_3 = __webpack_require__(94);
var CHTMLmtr = (function (_super) {
    __extends(CHTMLmtr, _super);
    function CHTMLmtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmtr.prototype.toCHTML = function (parent) {
        _super.prototype.toCHTML.call(this, parent);
        var align = this.node.attributes.get('rowalign');
        if (align !== 'baseline') {
            this.adaptor.setAttribute(this.chtml, 'rowalign', align);
        }
    };
    CHTMLmtr.kind = mtr_js_3.MmlMtr.prototype.kind;
    CHTMLmtr.styles = {
        'mjx-mtr': {
            display: 'table-row',
        },
        'mjx-mtr[rowalign="top"] > mjx-mtd': {
            'vertical-align': 'top'
        },
        'mjx-mtr[rowalign="center"] > mjx-mtd': {
            'vertical-align': 'middle'
        },
        'mjx-mtr[rowalign="bottom"] > mjx-mtd': {
            'vertical-align': 'bottom'
        },
        'mjx-mtr[rowalign="baseline"] > mjx-mtd': {
            'vertical-align': 'baseline'
        },
        'mjx-mtr[rowalign="axis"] > mjx-mtd': {
            'vertical-align': '.25em'
        }
    };
    return CHTMLmtr;
}(mtr_js_1.CommonMtrMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmtr = CHTMLmtr;
var CHTMLmlabeledtr = (function (_super) {
    __extends(CHTMLmlabeledtr, _super);
    function CHTMLmlabeledtr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmlabeledtr.prototype.toCHTML = function (parent) {
        _super.prototype.toCHTML.call(this, parent);
        var child = this.adaptor.firstChild(this.chtml);
        if (child) {
            this.adaptor.remove(child);
            var align = this.node.attributes.get('rowalign');
            var attr = (align !== 'baseline' && align !== 'axis' ? { rowalign: align } : {});
            var row = this.html('mjx-mtr', attr, [child]);
            CHTMLmtr.used = true;
            this.adaptor.append(this.parent.labels, row);
        }
    };
    CHTMLmlabeledtr.kind = mtr_js_3.MmlMlabeledtr.prototype.kind;
    CHTMLmlabeledtr.styles = {
        'mjx-mlabeledtr': {
            display: 'table-row'
        },
        'mjx-mlabeledtr[rowalign="top"] > mjx-mtd': {
            'vertical-align': 'top'
        },
        'mjx-mlabeledtr[rowalign="center"] > mjx-mtd': {
            'vertical-align': 'middle'
        },
        'mjx-mlabeledtr[rowalign="bottom"] > mjx-mtd': {
            'vertical-align': 'bottom'
        },
        'mjx-mlabeledtr[rowalign="baseline"] > mjx-mtd': {
            'vertical-align': 'baseline'
        },
        'mjx-mlabeledtr[rowalign="axis"] > mjx-mtd': {
            'vertical-align': '.25em'
        }
    };
    return CHTMLmlabeledtr;
}(mtr_js_2.CommonMlabeledtrMixin(CHTMLmtr)));
exports.CHTMLmlabeledtr = CHTMLmlabeledtr;
//# sourceMappingURL=mtr.js.map

/***/ }),
/* 57 */
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
exports.CHTMLmtd = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mtd_js_1 = __webpack_require__(58);
var mtd_js_2 = __webpack_require__(95);
var CHTMLmtd = (function (_super) {
    __extends(CHTMLmtd, _super);
    function CHTMLmtd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmtd.prototype.toCHTML = function (parent) {
        _super.prototype.toCHTML.call(this, parent);
        var ralign = this.node.attributes.get('rowalign');
        var calign = this.node.attributes.get('columnalign');
        var palign = this.parent.node.attributes.get('rowalign');
        if (ralign !== palign) {
            this.adaptor.setAttribute(this.chtml, 'rowalign', ralign);
        }
        if (calign !== 'center' &&
            (this.parent.kind !== 'mlabeledtr' || this !== this.parent.childNodes[0] ||
                calign !== this.parent.parent.node.attributes.get('side'))) {
            this.adaptor.setStyle(this.chtml, 'textAlign', calign);
        }
        this.adaptor.append(this.chtml, this.html('mjx-tstrut'));
    };
    CHTMLmtd.kind = mtd_js_2.MmlMtd.prototype.kind;
    CHTMLmtd.styles = {
        'mjx-mtd': {
            display: 'table-cell',
            'text-align': 'center',
            'padding': '.215em .4em'
        },
        'mjx-mtd:first-child': {
            'padding-left': 0
        },
        'mjx-mtd:last-child': {
            'padding-right': 0
        },
        'mjx-mtable > * > mjx-itable > *:first-child > mjx-mtd': {
            'padding-top': 0
        },
        'mjx-mtable > * > mjx-itable > *:last-child > mjx-mtd': {
            'padding-bottom': 0
        },
        'mjx-tstrut': {
            display: 'inline-block',
            height: '1em',
            'vertical-align': '-.25em'
        },
        'mjx-labels[align="left"] > mjx-mtr > mjx-mtd': {
            'text-align': 'left'
        },
        'mjx-labels[align="right"] > mjx-mtr > mjx-mtd': {
            'text-align': 'right'
        },
        'mjx-mtr mjx-mtd[rowalign="top"], mjx-mlabeledtr mjx-mtd[rowalign="top"]': {
            'vertical-align': 'top'
        },
        'mjx-mtr mjx-mtd[rowalign="center"], mjx-mlabeledtr mjx-mtd[rowalign="center"]': {
            'vertical-align': 'middle'
        },
        'mjx-mtr mjx-mtd[rowalign="bottom"], mjx-mlabeledtr mjx-mtd[rowalign="bottom"]': {
            'vertical-align': 'bottom'
        },
        'mjx-mtr mjx-mtd[rowalign="baseline"], mjx-mlabeledtr mjx-mtd[rowalign="baseline"]': {
            'vertical-align': 'baseline'
        },
        'mjx-mtr mjx-mtd[rowalign="axis"], mjx-mlabeledtr mjx-mtd[rowalign="axis"]': {
            'vertical-align': '.25em'
        }
    };
    return CHTMLmtd;
}(mtd_js_1.CommonMtdMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmtd = CHTMLmtd;
//# sourceMappingURL=mtd.js.map

/***/ }),
/* 58 */
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
exports.CommonMtdMixin = void 0;
function CommonMtdMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(class_1.prototype, "fixesPWidth", {
            get: function () {
                return false;
            },
            enumerable: false,
            configurable: true
        });
        class_1.prototype.invalidateBBox = function () {
            this.bboxComputed = false;
        };
        class_1.prototype.getWrapWidth = function (_j) {
            var table = this.parent.parent;
            var row = this.parent;
            var i = this.node.childPosition() - (row.labeled ? 1 : 0);
            return (typeof (table.cWidths[i]) === 'number' ? table.cWidths[i] : table.getTableData().W[i]);
        };
        class_1.prototype.getChildAlign = function (_i) {
            return this.node.attributes.get('columnalign');
        };
        return class_1;
    }(Base));
}
exports.CommonMtdMixin = CommonMtdMixin;
//# sourceMappingURL=mtd.js.map

/***/ }),
/* 59 */
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
exports.CHTMLmaction = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var maction_js_1 = __webpack_require__(13);
var maction_js_2 = __webpack_require__(13);
var maction_js_3 = __webpack_require__(96);
var CHTMLmaction = (function (_super) {
    __extends(CHTMLmaction, _super);
    function CHTMLmaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmaction.prototype.toCHTML = function (parent) {
        var chtml = this.standardCHTMLnode(parent);
        var child = this.selected;
        child.toCHTML(chtml);
        this.action(this, this.data);
    };
    CHTMLmaction.prototype.setEventHandler = function (type, handler) {
        this.chtml.addEventListener(type, handler);
    };
    CHTMLmaction.kind = maction_js_3.MmlMaction.prototype.kind;
    CHTMLmaction.styles = {
        'mjx-maction': {
            position: 'relative'
        },
        'mjx-maction > mjx-tool': {
            display: 'none',
            position: 'absolute',
            bottom: 0, right: 0,
            width: 0, height: 0,
            'z-index': 500
        },
        'mjx-tool > mjx-tip': {
            display: 'inline-block',
            padding: '.2em',
            border: '1px solid #888',
            'font-size': '70%',
            'background-color': '#F8F8F8',
            color: 'black',
            'box-shadow': '2px 2px 5px #AAAAAA'
        },
        'mjx-maction[toggle]': {
            cursor: 'pointer'
        },
        'mjx-status': {
            display: 'block',
            position: 'fixed',
            left: '1em',
            bottom: '1em',
            'min-width': '25%',
            padding: '.2em .4em',
            border: '1px solid #888',
            'font-size': '90%',
            'background-color': '#F8F8F8',
            color: 'black'
        }
    };
    CHTMLmaction.actions = new Map([
        ['toggle', [function (node, _data) {
                    node.adaptor.setAttribute(node.chtml, 'toggle', node.node.attributes.get('selection'));
                    var math = node.factory.jax.math;
                    var document = node.factory.jax.document;
                    var mml = node.node;
                    node.setEventHandler('click', function (event) {
                        if (!math.end.node) {
                            math.start.node = math.end.node = math.typesetRoot;
                            math.start.n = math.end.n = 0;
                        }
                        mml.nextToggleSelection();
                        math.rerender(document);
                        event.stopPropagation();
                    });
                }, {}]],
        ['tooltip', [function (node, data) {
                    var tip = node.childNodes[1];
                    if (!tip)
                        return;
                    if (tip.node.isKind('mtext')) {
                        var text = tip.node.getText();
                        node.adaptor.setAttribute(node.chtml, 'title', text);
                    }
                    else {
                        var adaptor_1 = node.adaptor;
                        var tool_1 = adaptor_1.append(node.chtml, node.html('mjx-tool', {
                            style: { bottom: node.em(-node.dy), right: node.em(-node.dx) }
                        }, [node.html('mjx-tip')]));
                        tip.toCHTML(adaptor_1.firstChild(tool_1));
                        node.setEventHandler('mouseover', function (event) {
                            data.stopTimers(node, data);
                            var timeout = setTimeout(function () { return adaptor_1.setStyle(tool_1, 'display', 'block'); }, data.postDelay);
                            data.hoverTimer.set(node, timeout);
                            event.stopPropagation();
                        });
                        node.setEventHandler('mouseout', function (event) {
                            data.stopTimers(node, data);
                            var timeout = setTimeout(function () { return adaptor_1.setStyle(tool_1, 'display', ''); }, data.clearDelay);
                            data.clearTimer.set(node, timeout);
                            event.stopPropagation();
                        });
                    }
                }, maction_js_2.TooltipData]],
        ['statusline', [function (node, data) {
                    var tip = node.childNodes[1];
                    if (!tip)
                        return;
                    if (tip.node.isKind('mtext')) {
                        var adaptor_2 = node.adaptor;
                        var text_1 = tip.node.getText();
                        adaptor_2.setAttribute(node.chtml, 'statusline', text_1);
                        node.setEventHandler('mouseover', function (event) {
                            if (data.status === null) {
                                var body = adaptor_2.body(adaptor_2.document);
                                data.status = adaptor_2.append(body, node.html('mjx-status', {}, [node.text(text_1)]));
                            }
                            event.stopPropagation();
                        });
                        node.setEventHandler('mouseout', function (event) {
                            if (data.status) {
                                adaptor_2.remove(data.status);
                                data.status = null;
                            }
                            event.stopPropagation();
                        });
                    }
                }, {
                    status: null
                }]]
    ]);
    return CHTMLmaction;
}(maction_js_1.CommonMactionMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmaction = CHTMLmaction;
//# sourceMappingURL=maction.js.map

/***/ }),
/* 60 */
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
exports.CHTMLmglyph = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var mglyph_js_1 = __webpack_require__(61);
var mglyph_js_2 = __webpack_require__(97);
var CHTMLmglyph = (function (_super) {
    __extends(CHTMLmglyph, _super);
    function CHTMLmglyph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLmglyph.prototype.toCHTML = function (parent) {
        var chtml = this.standardCHTMLnode(parent);
        var _a = this.node.attributes.getList('src', 'alt'), src = _a.src, alt = _a.alt;
        var styles = {
            width: this.em(this.width),
            height: this.em(this.height)
        };
        if (this.valign) {
            styles.verticalAlign = this.em(this.valign);
        }
        var img = this.html('img', { src: src, style: styles, alt: alt, title: alt });
        this.adaptor.append(chtml, img);
    };
    CHTMLmglyph.kind = mglyph_js_2.MmlMglyph.prototype.kind;
    CHTMLmglyph.styles = {
        'mjx-mglyph > img': {
            display: 'inline-block',
            border: 0,
            padding: 0
        }
    };
    return CHTMLmglyph;
}(mglyph_js_1.CommonMglyphMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLmglyph = CHTMLmglyph;
//# sourceMappingURL=mglyph.js.map

/***/ }),
/* 61 */
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonMglyphMixin = void 0;
function CommonMglyphMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this.getParameters();
            return _this;
        }
        class_1.prototype.getParameters = function () {
            var _a = this.node.attributes.getList('width', 'height', 'valign'), width = _a.width, height = _a.height, valign = _a.valign;
            this.width = (width === 'auto' ? 1 : this.length2em(width));
            this.height = (height === 'auto' ? 1 : this.length2em(height));
            this.valign = this.length2em(valign || '0');
        };
        class_1.prototype.computeBBox = function (bbox, _recompute) {
            if (_recompute === void 0) { _recompute = false; }
            bbox.w = this.width;
            bbox.h = this.height + this.valign;
            bbox.d = -this.valign;
        };
        return class_1;
    }(Base));
}
exports.CommonMglyphMixin = CommonMglyphMixin;
//# sourceMappingURL=mglyph.js.map

/***/ }),
/* 62 */
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
exports.CHTMLxml = exports.CHTMLannotationXML = exports.CHTMLannotation = exports.CHTMLsemantics = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var semantics_js_1 = __webpack_require__(63);
var semantics_js_2 = __webpack_require__(98);
var MmlNode_js_1 = __webpack_require__(5);
var CHTMLsemantics = (function (_super) {
    __extends(CHTMLsemantics, _super);
    function CHTMLsemantics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLsemantics.prototype.toCHTML = function (parent) {
        var chtml = this.standardCHTMLnode(parent);
        if (this.childNodes.length) {
            this.childNodes[0].toCHTML(chtml);
        }
    };
    CHTMLsemantics.kind = semantics_js_2.MmlSemantics.prototype.kind;
    return CHTMLsemantics;
}(semantics_js_1.CommonSemanticsMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLsemantics = CHTMLsemantics;
var CHTMLannotation = (function (_super) {
    __extends(CHTMLannotation, _super);
    function CHTMLannotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLannotation.prototype.toCHTML = function (parent) {
        _super.prototype.toCHTML.call(this, parent);
    };
    CHTMLannotation.prototype.computeBBox = function () {
        return this.bbox;
    };
    CHTMLannotation.kind = semantics_js_2.MmlAnnotation.prototype.kind;
    return CHTMLannotation;
}(Wrapper_js_1.CHTMLWrapper));
exports.CHTMLannotation = CHTMLannotation;
var CHTMLannotationXML = (function (_super) {
    __extends(CHTMLannotationXML, _super);
    function CHTMLannotationXML() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLannotationXML.kind = semantics_js_2.MmlAnnotationXML.prototype.kind;
    CHTMLannotationXML.styles = {
        'mjx-annotation-xml': {
            'font-family': 'initial',
            'line-height': 'normal'
        }
    };
    return CHTMLannotationXML;
}(Wrapper_js_1.CHTMLWrapper));
exports.CHTMLannotationXML = CHTMLannotationXML;
var CHTMLxml = (function (_super) {
    __extends(CHTMLxml, _super);
    function CHTMLxml() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLxml.prototype.toCHTML = function (parent) {
        this.chtml = this.adaptor.append(parent, this.adaptor.clone(this.node.getXML()));
    };
    CHTMLxml.prototype.computeBBox = function (bbox, _recompute) {
        if (_recompute === void 0) { _recompute = false; }
        var _a = this.jax.measureXMLnode(this.node.getXML()), w = _a.w, h = _a.h, d = _a.d;
        bbox.w = w;
        bbox.h = h;
        bbox.d = d;
    };
    CHTMLxml.prototype.getStyles = function () { };
    CHTMLxml.prototype.getScale = function () { };
    CHTMLxml.prototype.getVariant = function () { };
    CHTMLxml.kind = MmlNode_js_1.XMLNode.prototype.kind;
    CHTMLxml.autoStyle = false;
    return CHTMLxml;
}(Wrapper_js_1.CHTMLWrapper));
exports.CHTMLxml = CHTMLxml;
//# sourceMappingURL=semantics.js.map

/***/ }),
/* 63 */
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
exports.CommonSemanticsMixin = void 0;
function CommonSemanticsMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function (bbox, _recompute) {
            if (_recompute === void 0) { _recompute = false; }
            if (this.childNodes.length) {
                var _a = this.childNodes[0].getBBox(), w = _a.w, h = _a.h, d = _a.d;
                bbox.w = w;
                bbox.h = h;
                bbox.d = d;
            }
        };
        return class_1;
    }(Base));
}
exports.CommonSemanticsMixin = CommonSemanticsMixin;
//# sourceMappingURL=semantics.js.map

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
exports.CHTMLTeXAtom = void 0;
var Wrapper_js_1 = __webpack_require__(0);
var TeXAtom_js_1 = __webpack_require__(65);
var TeXAtom_js_2 = __webpack_require__(99);
var MmlNode_js_1 = __webpack_require__(5);
var CHTMLTeXAtom = (function (_super) {
    __extends(CHTMLTeXAtom, _super);
    function CHTMLTeXAtom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLTeXAtom.prototype.toCHTML = function (parent) {
        _super.prototype.toCHTML.call(this, parent);
        this.adaptor.setAttribute(this.chtml, 'texclass', MmlNode_js_1.TEXCLASSNAMES[this.node.texClass]);
        if (this.node.texClass === MmlNode_js_1.TEXCLASS.VCENTER) {
            var bbox = this.childNodes[0].getBBox();
            var h = bbox.h, d = bbox.d;
            var a = this.font.params.axis_height;
            var dh = ((h + d) / 2 + a) - h;
            this.adaptor.setStyle(this.chtml, 'verticalAlign', this.em(dh));
        }
    };
    CHTMLTeXAtom.kind = TeXAtom_js_2.TeXAtom.prototype.kind;
    return CHTMLTeXAtom;
}(TeXAtom_js_1.CommonTeXAtomMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLTeXAtom = CHTMLTeXAtom;
//# sourceMappingURL=TeXAtom.js.map

/***/ }),
/* 65 */
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
exports.CommonTeXAtomMixin = void 0;
var MmlNode_js_1 = __webpack_require__(5);
function CommonTeXAtomMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function (bbox, recompute) {
            if (recompute === void 0) { recompute = false; }
            _super.prototype.computeBBox.call(this, bbox, recompute);
            if (this.childNodes[0] && this.childNodes[0].bbox.ic) {
                bbox.ic = this.childNodes[0].bbox.ic;
            }
            if (this.node.texClass === MmlNode_js_1.TEXCLASS.VCENTER) {
                var h = bbox.h, d = bbox.d;
                var a = this.font.params.axis_height;
                var dh = ((h + d) / 2 + a) - h;
                bbox.h += dh;
                bbox.d -= dh;
            }
        };
        return class_1;
    }(Base));
}
exports.CommonTeXAtomMixin = CommonTeXAtomMixin;
//# sourceMappingURL=TeXAtom.js.map

/***/ }),
/* 66 */
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
exports.CHTMLTextNode = void 0;
var MmlNode_js_1 = __webpack_require__(5);
var Wrapper_js_1 = __webpack_require__(0);
var TextNode_js_1 = __webpack_require__(67);
var CHTMLTextNode = (function (_super) {
    __extends(CHTMLTextNode, _super);
    function CHTMLTextNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHTMLTextNode.prototype.toCHTML = function (parent) {
        var e_1, _a;
        this.markUsed();
        var adaptor = this.adaptor;
        var variant = this.parent.variant;
        var text = this.node.getText();
        if (variant === '-explicitFont') {
            var font = this.jax.getFontData(this.parent.styles);
            adaptor.append(parent, this.jax.unknownText(text, variant, font));
        }
        else {
            var chars = this.remappedText(text, variant);
            try {
                for (var chars_1 = __values(chars), chars_1_1 = chars_1.next(); !chars_1_1.done; chars_1_1 = chars_1.next()) {
                    var n = chars_1_1.value;
                    var data = this.getVariantChar(variant, n)[3];
                    var font = (data.f ? ' TEX-' + data.f : '');
                    var node = (data.unknown ?
                        this.jax.unknownText(String.fromCodePoint(n), variant) :
                        this.html('mjx-c', { class: this.char(n) + font }));
                    adaptor.append(parent, node);
                    data.used = true;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (chars_1_1 && !chars_1_1.done && (_a = chars_1.return)) _a.call(chars_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    CHTMLTextNode.kind = MmlNode_js_1.TextNode.prototype.kind;
    CHTMLTextNode.autoStyle = false;
    CHTMLTextNode.styles = {
        'mjx-c': {
            display: 'inline-block'
        },
        'mjx-utext': {
            display: 'inline-block',
            padding: '.75em 0 .2em 0'
        }
    };
    return CHTMLTextNode;
}(TextNode_js_1.CommonTextNodeMixin(Wrapper_js_1.CHTMLWrapper)));
exports.CHTMLTextNode = CHTMLTextNode;
//# sourceMappingURL=TextNode.js.map

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonTextNodeMixin = void 0;
function CommonTextNodeMixin(Base) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.computeBBox = function (bbox, _recompute) {
            var e_1, _a;
            if (_recompute === void 0) { _recompute = false; }
            var variant = this.parent.variant;
            var text = this.node.getText();
            if (variant === '-explicitFont') {
                var font = this.jax.getFontData(this.parent.styles);
                var _b = this.jax.measureText(text, variant, font), w = _b.w, h = _b.h, d = _b.d;
                bbox.h = h;
                bbox.d = d;
                bbox.w = w;
            }
            else {
                var chars = this.remappedText(text, variant);
                bbox.empty();
                try {
                    for (var chars_1 = __values(chars), chars_1_1 = chars_1.next(); !chars_1_1.done; chars_1_1 = chars_1.next()) {
                        var char = chars_1_1.value;
                        var _c = __read(this.getVariantChar(variant, char), 4), h = _c[0], d = _c[1], w = _c[2], data = _c[3];
                        if (data.unknown) {
                            var cbox = this.jax.measureText(String.fromCodePoint(char), variant);
                            w = cbox.w;
                            h = cbox.h;
                            d = cbox.d;
                        }
                        bbox.w += w;
                        if (h > bbox.h)
                            bbox.h = h;
                        if (d > bbox.d)
                            bbox.d = d;
                        bbox.ic = data.ic || 0;
                        bbox.sk = data.sk || 0;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (chars_1_1 && !chars_1_1.done && (_a = chars_1.return)) _a.call(chars_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (chars.length > 1) {
                    bbox.sk = 0;
                }
                bbox.clean();
            }
        };
        class_1.prototype.remappedText = function (text, variant) {
            var c = this.parent.stretch.c;
            return (c ? [c] : this.parent.remapChars(this.unicodeChars(text, variant)));
        };
        class_1.prototype.getStyles = function () { };
        class_1.prototype.getVariant = function () { };
        class_1.prototype.getScale = function () { };
        class_1.prototype.getSpace = function () { };
        return class_1;
    }(Base));
}
exports.CommonTextNodeMixin = CommonTextNodeMixin;
//# sourceMappingURL=TextNode.js.map

/***/ }),
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.Styles = MathJax._.util.Styles.Styles;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.AbstractOutputJax = MathJax._.core.OutputJax.AbstractOutputJax;

/***/ }),
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.CssStyles = MathJax._.util.StyleList.CssStyles;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.AbstractWrapperFactory = MathJax._.core.Tree.WrapperFactory.AbstractWrapperFactory;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.AbstractWrapper = MathJax._.core.Tree.Wrapper.AbstractWrapper;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMath = MathJax._.core.MmlTree.MmlNodes.math.MmlMath;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMi = MathJax._.core.MmlTree.MmlNodes.mi.MmlMi;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMo = MathJax._.core.MmlTree.MmlNodes.mo.MmlMo;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMn = MathJax._.core.MmlTree.MmlNodes.mn.MmlMn;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMs = MathJax._.core.MmlTree.MmlNodes.ms.MmlMs;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMtext = MathJax._.core.MmlTree.MmlNodes.mtext.MmlMtext;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMspace = MathJax._.core.MmlTree.MmlNodes.mspace.MmlMspace;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMpadded = MathJax._.core.MmlTree.MmlNodes.mpadded.MmlMpadded;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMenclose = MathJax._.core.MmlTree.MmlNodes.menclose.MmlMenclose;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMrow = MathJax._.core.MmlTree.MmlNodes.mrow.MmlMrow;
exports.MmlInferredMrow = MathJax._.core.MmlTree.MmlNodes.mrow.MmlInferredMrow;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMfenced = MathJax._.core.MmlTree.MmlNodes.mfenced.MmlMfenced;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMfrac = MathJax._.core.MmlTree.MmlNodes.mfrac.MmlMfrac;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMsqrt = MathJax._.core.MmlTree.MmlNodes.msqrt.MmlMsqrt;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMroot = MathJax._.core.MmlTree.MmlNodes.mroot.MmlMroot;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMsubsup = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsubsup;
exports.MmlMsub = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsub;
exports.MmlMsup = MathJax._.core.MmlTree.MmlNodes.msubsup.MmlMsup;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMunderover = MathJax._.core.MmlTree.MmlNodes.munderover.MmlMunderover;
exports.MmlMunder = MathJax._.core.MmlTree.MmlNodes.munderover.MmlMunder;
exports.MmlMover = MathJax._.core.MmlTree.MmlNodes.munderover.MmlMover;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMmultiscripts = MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlMmultiscripts;
exports.MmlMprescripts = MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlMprescripts;
exports.MmlNone = MathJax._.core.MmlTree.MmlNodes.mmultiscripts.MmlNone;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.sum = MathJax._.util.numeric.sum;
exports.max = MathJax._.util.numeric.max;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMtable = MathJax._.core.MmlTree.MmlNodes.mtable.MmlMtable;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMtr = MathJax._.core.MmlTree.MmlNodes.mtr.MmlMtr;
exports.MmlMlabeledtr = MathJax._.core.MmlTree.MmlNodes.mtr.MmlMlabeledtr;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMtd = MathJax._.core.MmlTree.MmlNodes.mtd.MmlMtd;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMaction = MathJax._.core.MmlTree.MmlNodes.maction.MmlMaction;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlMglyph = MathJax._.core.MmlTree.MmlNodes.mglyph.MmlMglyph;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MmlSemantics = MathJax._.core.MmlTree.MmlNodes.semantics.MmlSemantics;
exports.MmlAnnotationXML = MathJax._.core.MmlTree.MmlNodes.semantics.MmlAnnotationXML;
exports.MmlAnnotation = MathJax._.core.MmlTree.MmlNodes.semantics.MmlAnnotation;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.TeXAtom = MathJax._.core.MmlTree.MmlNodes.TeXAtom.TeXAtom;

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeXFont", function() { return TeXFont; });
/* harmony import */ var _js_output_chtml_FontData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _js_output_chtml_FontData_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_output_chtml_FontData_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var TeXFont = /*#__PURE__*/function (_FontData) {
  _inherits(TeXFont, _FontData);

  var _super = _createSuper(TeXFont);

  function TeXFont() {
    _classCallCheck(this, TeXFont);

    return _super.apply(this, arguments);
  }

  return TeXFont;
}(_js_output_chtml_FontData_js__WEBPACK_IMPORTED_MODULE_0__["FontData"]);
;
TeXFont.OPTIONS = {
  fontURL: '.'
};

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(14);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml.js
var chtml = __webpack_require__(15);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/FontData.js
var FontData = __webpack_require__(16);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Notation.js
var Notation = __webpack_require__(40);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrapper.js
var Wrapper = __webpack_require__(0);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/WrapperFactory.js
var WrapperFactory = __webpack_require__(18);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers.js
var Wrappers = __webpack_require__(20);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/TeXAtom.js
var TeXAtom = __webpack_require__(64);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/TextNode.js
var TextNode = __webpack_require__(66);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/maction.js
var maction = __webpack_require__(59);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/math.js
var math = __webpack_require__(22);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/menclose.js
var menclose = __webpack_require__(38);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mfenced.js
var mfenced = __webpack_require__(42);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mfrac.js
var mfrac = __webpack_require__(44);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mglyph.js
var mglyph = __webpack_require__(60);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mi.js
var mi = __webpack_require__(24);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mmultiscripts.js
var mmultiscripts = __webpack_require__(52);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mn.js
var mn = __webpack_require__(28);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mo.js
var mo = __webpack_require__(26);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mpadded.js
var mpadded = __webpack_require__(36);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mroot.js
var mroot = __webpack_require__(47);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mrow.js
var mrow = __webpack_require__(41);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/ms.js
var ms = __webpack_require__(30);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mspace.js
var mspace = __webpack_require__(34);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/msqrt.js
var msqrt = __webpack_require__(11);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/msubsup.js
var msubsup = __webpack_require__(7);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mtable.js
var mtable = __webpack_require__(54);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mtd.js
var mtd = __webpack_require__(57);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mtext.js
var mtext = __webpack_require__(32);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/mtr.js
var mtr = __webpack_require__(56);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/munderover.js
var munderover = __webpack_require__(51);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/scriptbase.js
var scriptbase = __webpack_require__(49);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/chtml/Wrappers/semantics.js
var semantics = __webpack_require__(62);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/FontData.js
var common_FontData = __webpack_require__(4);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Notation.js
var common_Notation = __webpack_require__(6);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/OutputJax.js
var OutputJax = __webpack_require__(17);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrapper.js
var common_Wrapper = __webpack_require__(21);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/WrapperFactory.js
var common_WrapperFactory = __webpack_require__(19);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/TeXAtom.js
var Wrappers_TeXAtom = __webpack_require__(65);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/TextNode.js
var Wrappers_TextNode = __webpack_require__(67);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/maction.js
var Wrappers_maction = __webpack_require__(13);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/math.js
var Wrappers_math = __webpack_require__(23);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/menclose.js
var Wrappers_menclose = __webpack_require__(39);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mfenced.js
var Wrappers_mfenced = __webpack_require__(43);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mfrac.js
var Wrappers_mfrac = __webpack_require__(45);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mglyph.js
var Wrappers_mglyph = __webpack_require__(61);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mi.js
var Wrappers_mi = __webpack_require__(25);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mmultiscripts.js
var Wrappers_mmultiscripts = __webpack_require__(53);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mn.js
var Wrappers_mn = __webpack_require__(29);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mo.js
var Wrappers_mo = __webpack_require__(27);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mpadded.js
var Wrappers_mpadded = __webpack_require__(37);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mroot.js
var Wrappers_mroot = __webpack_require__(48);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mrow.js
var Wrappers_mrow = __webpack_require__(10);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/ms.js
var Wrappers_ms = __webpack_require__(31);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mspace.js
var Wrappers_mspace = __webpack_require__(35);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/msqrt.js
var Wrappers_msqrt = __webpack_require__(46);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/msubsup.js
var Wrappers_msubsup = __webpack_require__(8);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mtable.js
var Wrappers_mtable = __webpack_require__(55);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mtd.js
var Wrappers_mtd = __webpack_require__(58);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mtext.js
var Wrappers_mtext = __webpack_require__(33);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/mtr.js
var Wrappers_mtr = __webpack_require__(12);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/munderover.js
var Wrappers_munderover = __webpack_require__(9);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/scriptbase.js
var Wrappers_scriptbase = __webpack_require__(50);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/output/common/Wrappers/semantics.js
var Wrappers_semantics = __webpack_require__(63);

// CONCATENATED MODULE: ./lib/chtml.js
































































Object(global["combineWithMathJax"])({
  _: {
    output: {
      chtml_ts: chtml,
      chtml: {
        FontData: FontData,
        Notation: Notation,
        Wrapper: Wrapper,
        WrapperFactory: WrapperFactory,
        Wrappers_ts: Wrappers,
        Wrappers: {
          TeXAtom: TeXAtom,
          TextNode: TextNode,
          maction: maction,
          math: math,
          menclose: menclose,
          mfenced: mfenced,
          mfrac: mfrac,
          mglyph: mglyph,
          mi: mi,
          mmultiscripts: mmultiscripts,
          mn: mn,
          mo: mo,
          mpadded: mpadded,
          mroot: mroot,
          mrow: mrow,
          ms: ms,
          mspace: mspace,
          msqrt: msqrt,
          msubsup: msubsup,
          mtable: mtable,
          mtd: mtd,
          mtext: mtext,
          mtr: mtr,
          munderover: munderover,
          scriptbase: scriptbase,
          semantics: semantics
        }
      },
      common: {
        FontData: common_FontData,
        Notation: common_Notation,
        OutputJax: OutputJax,
        Wrapper: common_Wrapper,
        WrapperFactory: common_WrapperFactory,
        Wrappers: {
          TeXAtom: Wrappers_TeXAtom,
          TextNode: Wrappers_TextNode,
          maction: Wrappers_maction,
          math: Wrappers_math,
          menclose: Wrappers_menclose,
          mfenced: Wrappers_mfenced,
          mfrac: Wrappers_mfrac,
          mglyph: Wrappers_mglyph,
          mi: Wrappers_mi,
          mmultiscripts: Wrappers_mmultiscripts,
          mn: Wrappers_mn,
          mo: Wrappers_mo,
          mpadded: Wrappers_mpadded,
          mroot: Wrappers_mroot,
          mrow: Wrappers_mrow,
          ms: Wrappers_ms,
          mspace: Wrappers_mspace,
          msqrt: Wrappers_msqrt,
          msubsup: Wrappers_msubsup,
          mtable: Wrappers_mtable,
          mtd: Wrappers_mtd,
          mtext: Wrappers_mtext,
          mtr: Wrappers_mtr,
          munderover: Wrappers_munderover,
          scriptbase: Wrappers_scriptbase,
          semantics: Wrappers_semantics
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./chtml.js




if (MathJax.loader) {
  Object(global["combineDefaults"])(MathJax.config.loader, 'output/chtml', {
    checkReady: function checkReady() {
      return MathJax.loader.load("output/chtml/fonts/tex");
    }
  });
}

if (MathJax.startup) {
  MathJax.startup.registerConstructor('chtml', chtml["CHTML"]);
  MathJax.startup.useOutput('chtml');
}

/***/ })
/******/ ]);
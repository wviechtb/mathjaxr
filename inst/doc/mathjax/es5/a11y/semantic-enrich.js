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

Object.defineProperty(exports, "__esModule", { value: true });
exports.sreReady = void 0;
var AsyncLoad_js_1 = __webpack_require__(8);
var SRELIB = (typeof window === 'undefined' ? './a11y/sre-node.js' :
    '../../../speech-rule-engine/lib/sre_browser.js');
var srePromise = (typeof sre === 'undefined' ? AsyncLoad_js_1.asyncLoad(SRELIB) : Promise.resolve());
var SRE_DELAY = 100;
var SRE_TIMEOUT = 20 * 1000;
exports.sreReady = function () {
    return new Promise(function (resolve, reject) {
        srePromise.then(function () {
            var start = new Date().getTime();
            var checkSRE = function () {
                if (sre.Engine.isReady()) {
                    resolve();
                }
                else {
                    if (new Date().getTime() - start < SRE_TIMEOUT) {
                        setTimeout(checkSRE, SRE_DELAY);
                    }
                    else {
                        reject('Timed out waiting for Speech-Rule-Engine');
                    }
                }
            };
            checkSRE();
        }).catch(function (error) { return reject(error.message || error); });
    });
};
//# sourceMappingURL=sre.js.map

/***/ }),
/* 1 */
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
exports.EnrichHandler = exports.EnrichedMathDocumentMixin = exports.EnrichedMathItemMixin = void 0;
var mathjax_js_1 = __webpack_require__(4);
var MathItem_js_1 = __webpack_require__(5);
var SerializedMmlVisitor_js_1 = __webpack_require__(6);
var Options_js_1 = __webpack_require__(7);
var sre_js_1 = __webpack_require__(0);
var currentSpeech = 'none';
MathItem_js_1.newState('ENRICHED', 30);
MathItem_js_1.newState('ATTACHSPEECH', 155);
function EnrichedMathItemMixin(BaseMathItem, MmlJax, toMathML) {
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.serializeMml = function (node) {
            if ('outerHTML' in node) {
                return node.outerHTML;
            }
            if (typeof Element !== 'undefined' && typeof window !== 'undefined' && node instanceof Element) {
                var div = window.document.createElement('div');
                div.appendChild(node);
                return div.innerHTML;
            }
            return node.toString();
        };
        class_1.prototype.enrich = function (document, force) {
            if (force === void 0) { force = false; }
            if (this.state() >= MathItem_js_1.STATE.ENRICHED)
                return;
            if (!this.isEscaped && (document.options.enableEnrichment || force)) {
                if (typeof sre === 'undefined' || !sre.Engine.isReady()) {
                    mathjax_js_1.mathjax.retryAfter(sre_js_1.sreReady());
                }
                if (document.options.enrichSpeech !== currentSpeech) {
                    SRE.setupEngine({ speech: document.options.enrichSpeech });
                    currentSpeech = document.options.enrichSpeech;
                }
                var math = new document.options.MathItem('', MmlJax);
                math.math = this.serializeMml(SRE.toEnriched(toMathML(this.root)));
                math.display = this.display;
                math.compile(document);
                this.root = math.root;
                this.inputData.originalMml = math.math;
            }
            this.state(MathItem_js_1.STATE.ENRICHED);
        };
        class_1.prototype.attachSpeech = function (document) {
            var e_1, _a;
            if (this.state() >= MathItem_js_1.STATE.ATTACHSPEECH)
                return;
            var attributes = this.root.attributes;
            var speech = (attributes.get('aria-label') ||
                this.getSpeech(this.root));
            if (speech) {
                var adaptor = document.adaptor;
                var node = this.typesetRoot;
                adaptor.setAttribute(node, 'aria-label', speech);
                try {
                    for (var _b = __values(adaptor.childNodes(node)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        adaptor.setAttribute(child, 'aria-hidden', 'true');
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
            this.state(MathItem_js_1.STATE.ATTACHSPEECH);
        };
        class_1.prototype.getSpeech = function (node) {
            var e_2, _a;
            var attributes = node.attributes;
            if (!attributes)
                return '';
            var speech = attributes.getExplicit('data-semantic-speech');
            if (!attributes.getExplicit('data-semantic-parent') && speech) {
                return speech;
            }
            try {
                for (var _b = __values(node.childNodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    var value = this.getSpeech(child);
                    if (value != null) {
                        return value;
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
            return '';
        };
        return class_1;
    }(BaseMathItem));
}
exports.EnrichedMathItemMixin = EnrichedMathItemMixin;
function EnrichedMathDocumentMixin(BaseDocument, MmlJax) {
    var _a;
    return _a = (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, __spread(args)) || this;
                MmlJax.setMmlFactory(_this.mmlFactory);
                var ProcessBits = _this.constructor.ProcessBits;
                if (!ProcessBits.has('enriched')) {
                    ProcessBits.allocate('enriched');
                    ProcessBits.allocate('attach-speech');
                }
                var visitor = new SerializedMmlVisitor_js_1.SerializedMmlVisitor(_this.mmlFactory);
                var toMathML = (function (node) { return visitor.visitTree(node); });
                _this.options.MathItem =
                    EnrichedMathItemMixin(_this.options.MathItem, MmlJax, toMathML);
                return _this;
            }
            class_2.prototype.attachSpeech = function () {
                var e_3, _a;
                if (!this.processed.isSet('attach-speech')) {
                    try {
                        for (var _b = __values(this.math), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var math = _c.value;
                            math.attachSpeech(this);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    this.processed.set('attach-speech');
                }
                return this;
            };
            class_2.prototype.enrich = function () {
                var e_4, _a;
                if (!this.processed.isSet('enriched')) {
                    if (this.options.enableEnrichment) {
                        try {
                            for (var _b = __values(this.math), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var math = _c.value;
                                math.enrich(this);
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
                    this.processed.set('enriched');
                }
                return this;
            };
            class_2.prototype.state = function (state, restore) {
                if (restore === void 0) { restore = false; }
                _super.prototype.state.call(this, state, restore);
                if (state < MathItem_js_1.STATE.ENRICHED) {
                    this.processed.clear('enriched');
                }
                return this;
            };
            return class_2;
        }(BaseDocument)),
        _a.OPTIONS = __assign(__assign({}, BaseDocument.OPTIONS), { enableEnrichment: true, enrichSpeech: 'none', renderActions: Options_js_1.expandable(__assign(__assign({}, BaseDocument.OPTIONS.renderActions), { enrich: [MathItem_js_1.STATE.ENRICHED], attachSpeech: [MathItem_js_1.STATE.ATTACHSPEECH] })) }),
        _a;
}
exports.EnrichedMathDocumentMixin = EnrichedMathDocumentMixin;
function EnrichHandler(handler, MmlJax) {
    MmlJax.setAdaptor(handler.adaptor);
    handler.documentClass =
        EnrichedMathDocumentMixin(handler.documentClass, MmlJax);
    return handler;
}
exports.EnrichHandler = EnrichHandler;
//# sourceMappingURL=semantic-enrich.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.MathML = MathJax._.input.mathml_ts.MathML;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.mathjax = MathJax._.mathjax.mathjax;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.DATAMJX = MathJax._.core.MmlTree.SerializedMmlVisitor.DATAMJX;
exports.toEntity = MathJax._.core.MmlTree.SerializedMmlVisitor.toEntity;
exports.SerializedMmlVisitor = MathJax._.core.MmlTree.SerializedMmlVisitor.SerializedMmlVisitor;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.asyncLoad = MathJax._.util.AsyncLoad.asyncLoad;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/core/lib/components/global.js
var global = __webpack_require__(1);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/semantic-enrich.js
var semantic_enrich = __webpack_require__(2);

// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/js/a11y/sre.js
var sre = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/semantic-enrich.js



Object(global["combineWithMathJax"])({
  _: {
    a11y: {
      "semantic-enrich": semantic_enrich,
      sre: sre
    }
  }
});
// EXTERNAL MODULE: /home/wviechtb/work/software/mathjaxr/mjsource/components/src/input/mml/lib/input/mathml.js
var mathml = __webpack_require__(3);

// CONCATENATED MODULE: ./semantic-enrich.js






if (MathJax.loader) {
  Object(global["combineDefaults"])(MathJax.config.loader, 'a11y/semantic-enrich', {
    checkReady: function checkReady() {
      return Object(sre["sreReady"])();
    }
  });
}

if (MathJax.startup) {
  MathJax.startup.extendHandler(function (handler) {
    return Object(semantic_enrich["EnrichHandler"])(handler, new mathml["MathML"]());
  });
}

/***/ })
/******/ ]);
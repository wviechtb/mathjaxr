/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/

// NAMESPACE OBJECT: ./mjs/a11y/explorer/Highlighter.js
var Highlighter_namespaceObject = {};
__webpack_require__.r(Highlighter_namespaceObject);
__webpack_require__.d(Highlighter_namespaceObject, {
  getHighlighter: () => (getHighlighter)
});

// NAMESPACE OBJECT: ./mjs/a11y/explorer/Region.js
var Region_namespaceObject = {};
__webpack_require__.r(Region_namespaceObject);
__webpack_require__.d(Region_namespaceObject, {
  AbstractRegion: () => (AbstractRegion),
  DummyRegion: () => (DummyRegion),
  HoverRegion: () => (HoverRegion),
  LiveRegion: () => (LiveRegion),
  SpeechRegion: () => (SpeechRegion),
  StringRegion: () => (StringRegion),
  ToolTip: () => (ToolTip)
});

// NAMESPACE OBJECT: ./mjs/a11y/explorer/Explorer.js
var Explorer_namespaceObject = {};
__webpack_require__.r(Explorer_namespaceObject);
__webpack_require__.d(Explorer_namespaceObject, {
  AbstractExplorer: () => (AbstractExplorer)
});

// NAMESPACE OBJECT: ./mjs/a11y/explorer/KeyExplorer.js
var KeyExplorer_namespaceObject = {};
__webpack_require__.r(KeyExplorer_namespaceObject);
__webpack_require__.d(KeyExplorer_namespaceObject, {
  SpeechExplorer: () => (SpeechExplorer),
  hasModifiers: () => (hasModifiers),
  isContainer: () => (isContainer)
});

// NAMESPACE OBJECT: ./mjs/a11y/explorer/MouseExplorer.js
var MouseExplorer_namespaceObject = {};
__webpack_require__.r(MouseExplorer_namespaceObject);
__webpack_require__.d(MouseExplorer_namespaceObject, {
  AbstractMouseExplorer: () => (AbstractMouseExplorer),
  ContentHoverer: () => (ContentHoverer),
  FlameHoverer: () => (FlameHoverer),
  Hoverer: () => (Hoverer),
  ValueHoverer: () => (ValueHoverer)
});

// NAMESPACE OBJECT: ./mjs/a11y/explorer/TreeExplorer.js
var TreeExplorer_namespaceObject = {};
__webpack_require__.r(TreeExplorer_namespaceObject);
__webpack_require__.d(TreeExplorer_namespaceObject, {
  AbstractTreeExplorer: () => (AbstractTreeExplorer),
  ContrastPicker: () => (ContrastPicker),
  FlameColorer: () => (FlameColorer),
  TreeColorer: () => (TreeColorer)
});

// NAMESPACE OBJECT: ./mjs/a11y/explorer/ExplorerPool.js
var ExplorerPool_namespaceObject = {};
__webpack_require__.r(ExplorerPool_namespaceObject);
__webpack_require__.d(ExplorerPool_namespaceObject, {
  ExplorerPool: () => (ExplorerPool),
  RegionPool: () => (RegionPool)
});

// NAMESPACE OBJECT: ./mjs/a11y/explorer.js
var explorer_namespaceObject = {};
__webpack_require__.r(explorer_namespaceObject);
__webpack_require__.d(explorer_namespaceObject, {
  ExplorerHandler: () => (ExplorerHandler),
  ExplorerMathDocumentMixin: () => (ExplorerMathDocumentMixin),
  ExplorerMathItemMixin: () => (ExplorerMathItemMixin),
  setA11yOption: () => (setA11yOption),
  setA11yOptions: () => (setA11yOptions)
});

;// ./components/mjs/core/lib/components/global.js
const g = (typeof window !== 'undefined' ? window : global);
const def = g.MathJax._.components.global;
const GLOBAL = def.GLOBAL;
const isObject = def.isObject;
const combineConfig = def.combineConfig;
const combineDefaults = def.combineDefaults;
const combineWithMathJax = def.combineWithMathJax;
const global_MathJax = def.MathJax;

;// ./mjs/components/version.js
const VERSION = '4.0.0';
//# sourceMappingURL=version.js.map
;// ./components/mjs/core/lib/core/MathItem.js
const MathItem_def = MathJax._.core.MathItem;
const protoItem = MathItem_def.protoItem;
const AbstractMathItem = MathItem_def.AbstractMathItem;
const STATE = MathItem_def.STATE;
const newState = MathItem_def.newState;

;// ./components/mjs/a11y/speech/lib/a11y/speech.js
const speech_def = MathJax._.a11y.speech_ts;
const SpeechMathItemMixin = speech_def.SpeechMathItemMixin;
const SpeechMathDocumentMixin = speech_def.SpeechMathDocumentMixin;
const SpeechHandler = speech_def.SpeechHandler;

;// ./components/mjs/core/lib/util/Options.js
const Options_def = MathJax._.util.Options;
const Options_isObject = Options_def.isObject;
const APPEND = Options_def.APPEND;
const REMOVE = Options_def.REMOVE;
const OPTIONS = Options_def.OPTIONS;
const Expandable = Options_def.Expandable;
const expandable = Options_def.expandable;
const makeArray = Options_def.makeArray;
const keys = Options_def.keys;
const copy = Options_def.copy;
const insert = Options_def.insert;
const defaultOptions = Options_def.defaultOptions;
const userOptions = Options_def.userOptions;
const selectOptions = Options_def.selectOptions;
const selectOptionsFromKeys = Options_def.selectOptionsFromKeys;
const separateOptions = Options_def.separateOptions;
const lookup = Options_def.lookup;

;// ./components/mjs/core/lib/core/MmlTree/SerializedMmlVisitor.js
const SerializedMmlVisitor_def = MathJax._.core.MmlTree.SerializedMmlVisitor;
const SerializedMmlVisitor = SerializedMmlVisitor_def.SerializedMmlVisitor;

;// ./components/mjs/core/lib/util/context.js
const context_def = MathJax._.util.context;
const hasWindow = context_def.hasWindow;
const context = context_def.context;

;// ./components/mjs/core/lib/util/StyleJson.js
const StyleJson_def = MathJax._.util.StyleJson;
const StyleJsonSheet = StyleJson_def.StyleJsonSheet;

;// ./mjs/a11y/explorer/Highlighter.js
const namedColors = {
    red: { red: 255, green: 0, blue: 0 },
    green: { red: 0, green: 255, blue: 0 },
    blue: { red: 0, green: 0, blue: 255 },
    yellow: { red: 255, green: 255, blue: 0 },
    cyan: { red: 0, green: 255, blue: 255 },
    magenta: { red: 255, green: 0, blue: 255 },
    white: { red: 255, green: 255, blue: 255 },
    black: { red: 0, green: 0, blue: 0 },
};
function getColorString(color, deflt) {
    var _a;
    const channel = namedColors[color.color] || namedColors[deflt.color];
    channel.alpha = (_a = color.alpha) !== null && _a !== void 0 ? _a : deflt.alpha;
    return rgba(channel);
}
function rgba(color) {
    var _a;
    return `rgba(${color.red},${color.green},${color.blue},${(_a = color.alpha) !== null && _a !== void 0 ? _a : 1})`;
}
const DEFAULT_BACKGROUND = { color: 'blue', alpha: 1 };
const DEFAULT_FOREGROUND = { color: 'black', alpha: 1 };
let counter = 0;
class AbstractHighlighter {
    constructor() {
        this.counter = counter++;
        this.ATTR = 'sre-highlight-' + this.counter.toString();
        this.mactionName = '';
        this.currentHighlights = [];
    }
    highlight(nodes) {
        this.currentHighlights.push(nodes.map((node) => {
            const info = this.highlightNode(node);
            this.setHighlighted(node);
            return info;
        }));
    }
    highlightAll(node) {
        const mactions = this.getMactionNodes(node);
        for (let i = 0, maction; (maction = mactions[i]); i++) {
            this.highlight([maction]);
        }
    }
    unhighlight() {
        const nodes = this.currentHighlights.pop();
        if (!nodes) {
            return;
        }
        nodes.forEach((highlight) => {
            if (this.isHighlighted(highlight.node)) {
                this.unhighlightNode(highlight);
                this.unsetHighlighted(highlight.node);
            }
        });
    }
    unhighlightAll() {
        while (this.currentHighlights.length > 0) {
            this.unhighlight();
        }
    }
    setColor(background, foreground) {
        this._foreground = getColorString(foreground, DEFAULT_FOREGROUND);
        this._background = getColorString(background, DEFAULT_BACKGROUND);
    }
    get foreground() {
        return this._foreground;
    }
    get background() {
        return this._background;
    }
    getMactionNodes(node) {
        return Array.from(node.getElementsByClassName(this.mactionName));
    }
    isMactionNode(node) {
        const className = node.className || node.getAttribute('class');
        return className ? !!className.match(new RegExp(this.mactionName)) : false;
    }
    isHighlighted(node) {
        return node.hasAttribute(this.ATTR);
    }
    setHighlighted(node) {
        node.setAttribute(this.ATTR, 'true');
    }
    unsetHighlighted(node) {
        node.removeAttribute(this.ATTR);
    }
}
class SvgHighlighter extends AbstractHighlighter {
    constructor() {
        super();
        this.mactionName = 'maction';
    }
    highlightNode(node) {
        let info;
        if (this.isHighlighted(node)) {
            info = {
                node: node,
                background: this.background,
                foreground: this.foreground,
            };
            return info;
        }
        if (node.tagName === 'svg' || node.tagName === 'MJX-CONTAINER') {
            info = {
                node: node,
                background: node.style.backgroundColor,
                foreground: node.style.color,
            };
            node.style.backgroundColor = this.background;
            node.style.color = this.foreground;
            return info;
        }
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('sre-highlighter-added', 'true');
        const padding = 40;
        const bbox = node.getBBox();
        rect.setAttribute('x', (bbox.x - padding).toString());
        rect.setAttribute('y', (bbox.y - padding).toString());
        rect.setAttribute('width', (bbox.width + 2 * padding).toString());
        rect.setAttribute('height', (bbox.height + 2 * padding).toString());
        const transform = node.getAttribute('transform');
        if (transform) {
            rect.setAttribute('transform', transform);
        }
        rect.setAttribute('fill', this.background);
        node.setAttribute(this.ATTR, 'true');
        node.parentNode.insertBefore(rect, node);
        info = { node: node, foreground: node.getAttribute('fill') };
        if (node.nodeName !== 'rect') {
            node.setAttribute('fill', this.foreground);
        }
        return info;
    }
    setHighlighted(node) {
        if (node.tagName === 'svg') {
            super.setHighlighted(node);
        }
    }
    unhighlightNode(info) {
        const previous = info.node.previousSibling;
        if (previous && previous.hasAttribute('sre-highlighter-added')) {
            info.foreground
                ? info.node.setAttribute('fill', info.foreground)
                : info.node.removeAttribute('fill');
            info.node.parentNode.removeChild(previous);
            return;
        }
        info.node.style.backgroundColor = info.background;
        info.node.style.color = info.foreground;
    }
    isMactionNode(node) {
        return node.getAttribute('data-mml-node') === this.mactionName;
    }
    getMactionNodes(node) {
        return Array.from(node.querySelectorAll(`[data-mml-node="${this.mactionName}"]`));
    }
}
class ChtmlHighlighter extends AbstractHighlighter {
    constructor() {
        super();
        this.mactionName = 'mjx-maction';
    }
    highlightNode(node) {
        const info = {
            node: node,
            background: node.style.backgroundColor,
            foreground: node.style.color,
        };
        if (!this.isHighlighted(node)) {
            node.style.backgroundColor = this.background;
            node.style.color = this.foreground;
        }
        return info;
    }
    unhighlightNode(info) {
        info.node.style.backgroundColor = info.background;
        info.node.style.color = info.foreground;
    }
    isMactionNode(node) {
        var _a;
        return ((_a = node.tagName) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === this.mactionName.toUpperCase();
    }
    getMactionNodes(node) {
        return Array.from(node.getElementsByTagName(this.mactionName));
    }
}
function getHighlighter(back, fore, renderer) {
    const highlighter = new highlighterMapping[renderer]();
    highlighter.setColor(back, fore);
    return highlighter;
}
const highlighterMapping = {
    SVG: SvgHighlighter,
    CHTML: ChtmlHighlighter,
    generic: ChtmlHighlighter,
};
//# sourceMappingURL=Highlighter.js.map
;// ./components/mjs/a11y/speech/lib/a11y/speech/SpeechUtil.js
const SpeechUtil_def = MathJax._.a11y.speech.SpeechUtil;
const ssmlParsing = SpeechUtil_def.ssmlParsing;
const buildLabel = SpeechUtil_def.buildLabel;
const buildSpeech = SpeechUtil_def.buildSpeech;
const honk = SpeechUtil_def.honk;
const InPlace = SpeechUtil_def.InPlace;
const SemAttr = SpeechUtil_def.SemAttr;

;// ./mjs/a11y/explorer/Region.js



class AbstractRegion {
    constructor(document) {
        this.document = document;
        this.CLASS = this.constructor;
        this.AddStyles();
    }
    AddStyles() {
        if (this.CLASS.styleAdded) {
            return;
        }
        const node = this.document.adaptor.node('style');
        node.innerHTML = this.CLASS.style.cssText;
        this.document.adaptor
            .head(this.document.adaptor.document)
            .appendChild(node);
        this.CLASS.styleAdded = true;
    }
    AddElement() {
        if (this.div)
            return;
        const element = this.document.adaptor.node('div');
        element.classList.add(this.CLASS.className);
        this.div = element;
        this.inner = this.document.adaptor.node('div');
        this.div.appendChild(this.inner);
        this.document.adaptor
            .body(this.document.adaptor.document)
            .appendChild(this.div);
    }
    Show(node, highlighter) {
        this.AddElement();
        this.position(node);
        this.highlight(highlighter);
        this.div.classList.add(this.CLASS.className + '_Show');
    }
    Hide() {
        if (!this.div)
            return;
        this.div.parentNode.removeChild(this.div);
        this.div = null;
        this.inner = null;
    }
    stackRegions(node) {
        const rect = node.getBoundingClientRect();
        let baseBottom = 0;
        let baseLeft = Number.POSITIVE_INFINITY;
        const regions = this.document.adaptor.document.getElementsByClassName(this.CLASS.className + '_Show');
        for (let i = 0, region; (region = regions[i]); i++) {
            if (region !== this.div) {
                baseBottom = Math.max(region.getBoundingClientRect().bottom, baseBottom);
                baseLeft = Math.min(region.getBoundingClientRect().left, baseLeft);
            }
        }
        const bot = (baseBottom ? baseBottom : rect.bottom + 10) + window.scrollY;
        const left = (baseLeft < Number.POSITIVE_INFINITY ? baseLeft : rect.left) +
            window.scrollX;
        this.div.style.top = bot + 'px';
        this.div.style.left = left + 'px';
    }
}
AbstractRegion.styleAdded = false;
class DummyRegion extends AbstractRegion {
    Clear() { }
    Update() { }
    Hide() { }
    Show() { }
    AddElement() { }
    AddStyles() { }
    position() { }
    highlight(_highlighter) { }
}
class StringRegion extends AbstractRegion {
    Clear() {
        if (!this.div)
            return;
        this.Update('');
        this.inner.style.top = '';
        this.inner.style.backgroundColor = '';
    }
    Update(speech) {
        if (speech) {
            this.AddElement();
        }
        if (this.inner) {
            this.inner.textContent = '';
            this.inner.textContent = speech || '\u00a0';
        }
    }
    position(node) {
        this.stackRegions(node);
    }
    highlight(highlighter) {
        if (!this.div)
            return;
        this.inner.style.backgroundColor = highlighter.background;
        this.inner.style.color = highlighter.foreground;
    }
}
class ToolTip extends StringRegion {
}
ToolTip.className = 'MJX_ToolTip';
ToolTip.style = new StyleJsonSheet({
    ['.' + ToolTip.className]: {
        width: 'auto',
        height: 'auto',
        opacity: 1,
        'text-align': 'center',
        'border-radius': '4px',
        padding: 0,
        'border-bottom': '1px dotted black',
        position: 'absolute',
        display: 'inline-block',
        'background-color': 'white',
        'z-index': 202,
    },
    ['.' + ToolTip.className + ' > div']: {
        'border-radius': 'inherit',
        padding: '0 2px',
    },
});
class LiveRegion extends StringRegion {
}
LiveRegion.className = 'MJX_LiveRegion';
LiveRegion.style = new StyleJsonSheet({
    ['.' + LiveRegion.className]: {
        position: 'absolute',
        top: 0,
        display: 'none',
        width: 'auto',
        height: 'auto',
        padding: 0,
        opacity: 1,
        'z-index': '202',
        left: 0,
        right: 0,
        margin: '0 auto',
        'background-color': 'white',
        'box-shadow': '0px 5px 20px #888',
        border: '2px solid #CCCCCC',
    },
    ['.' + LiveRegion.className + '_Show']: {
        display: 'block',
    },
});
class SpeechRegion extends LiveRegion {
    constructor() {
        super(...arguments);
        this.active = false;
        this.node = null;
        this.clear = false;
        this.highlighter = getHighlighter({ color: 'red' }, { color: 'black' }, this.document.outputJax.name);
        this.voiceRequest = false;
        this.voiceCancelled = false;
    }
    Show(node, highlighter) {
        super.Update('\u00a0');
        this.node = node;
        super.Show(node, highlighter);
    }
    Update(speech) {
        if (this.voiceRequest) {
            this.makeVoice(speech);
            return;
        }
        speechSynthesis.onvoiceschanged = (() => (this.voiceRequest = true)).bind(this);
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                if (this.voiceRequest) {
                    resolve(true);
                }
                else {
                    setTimeout(() => {
                        this.voiceRequest = true;
                        resolve(true);
                    }, 100);
                }
            }, 100);
        });
        promise.then(() => this.makeVoice(speech));
    }
    makeVoice(speech) {
        this.active =
            this.document.options.a11y.voicing &&
                !!speechSynthesis.getVoices().length;
        speechSynthesis.cancel();
        this.clear = true;
        const [text, ssml] = buildSpeech(speech, this.document.options.sre.locale, this.document.options.sre.rate);
        super.Update(text);
        if (this.active && text) {
            this.makeUtterances(ssml, this.document.options.sre.locale);
        }
    }
    makeUtterances(ssml, locale) {
        this.voiceCancelled = false;
        let utterance = null;
        for (const utter of ssml) {
            if (utter.mark) {
                if (!utterance) {
                    this.highlightNode(utter.mark, true);
                    continue;
                }
                utterance.addEventListener('end', (_event) => {
                    if (!this.voiceCancelled) {
                        this.highlightNode(utter.mark);
                    }
                });
                continue;
            }
            if (utter.pause) {
                const time = parseInt(utter.pause.match(/^[0-9]+/)[0]);
                if (isNaN(time) || !utterance) {
                    continue;
                }
                utterance.addEventListener('end', (_event) => {
                    speechSynthesis.pause();
                    setTimeout(() => {
                        speechSynthesis.resume();
                    }, time);
                });
                continue;
            }
            utterance = new SpeechSynthesisUtterance(utter.text);
            if (utter.rate) {
                utterance.rate = utter.rate;
            }
            if (utter.pitch) {
                utterance.pitch = utter.pitch;
            }
            utterance.lang = locale;
            speechSynthesis.speak(utterance);
        }
        if (utterance) {
            utterance.addEventListener('end', (_event) => {
                this.highlighter.unhighlight();
            });
        }
    }
    Hide() {
        this.cancelVoice();
        super.Hide();
    }
    cancelVoice() {
        this.voiceCancelled = true;
        speechSynthesis.cancel();
        this.highlighter.unhighlight();
    }
    highlightNode(id, init = false) {
        this.highlighter.unhighlight();
        const nodes = Array.from(this.node.querySelectorAll(`[data-semantic-id="${id}"]`));
        if (!this.clear || init) {
            this.highlighter.highlight(nodes);
        }
        this.clear = false;
    }
}
class HoverRegion extends AbstractRegion {
    position(node) {
        const nodeRect = node.getBoundingClientRect();
        const divRect = this.div.getBoundingClientRect();
        const xCenter = nodeRect.left + nodeRect.width / 2;
        let left = xCenter - divRect.width / 2;
        left = left < 0 ? 0 : left;
        left = left + window.scrollX;
        let top;
        switch (this.document.options.a11y.align) {
            case 'top':
                top = nodeRect.top - divRect.height - 10;
                break;
            case 'bottom':
                top = nodeRect.bottom + 10;
                break;
            case 'center':
            default: {
                const yCenter = nodeRect.top + nodeRect.height / 2;
                top = yCenter - divRect.height / 2;
            }
        }
        top = top + window.scrollY;
        top = top < 0 ? 0 : top;
        this.div.style.top = top + 'px';
        this.div.style.left = left + 'px';
    }
    highlight(highlighter) {
        if (!this.div)
            return;
        if (this.inner.firstChild &&
            !this.inner.firstChild.hasAttribute('sre-highlight')) {
            return;
        }
        this.inner.style.backgroundColor = highlighter.background;
        this.inner.style.color = highlighter.foreground;
    }
    Show(node, highlighter) {
        this.AddElement();
        this.div.style.fontSize = this.document.options.a11y.magnify;
        this.Update(node);
        super.Show(node, highlighter);
    }
    Clear() {
        if (!this.div)
            return;
        this.inner.textContent = '';
        this.inner.style.top = '';
        this.inner.style.backgroundColor = '';
    }
    Update(node) {
        if (!this.div)
            return;
        this.Clear();
        const mjx = this.cloneNode(node);
        const selected = mjx.querySelector('[data-mjx-clone]');
        this.inner.style.backgroundColor = node.style.backgroundColor;
        selected.style.backgroundColor = '';
        selected.classList.remove('mjx-selected');
        this.inner.appendChild(mjx);
        this.position(node);
    }
    cloneNode(node) {
        let mjx = node.cloneNode(true);
        mjx.setAttribute('data-mjx-clone', 'true');
        if (mjx.nodeName !== 'MJX-CONTAINER') {
            if (mjx.nodeName !== 'g') {
                mjx.style.marginLeft = mjx.style.marginRight = '0';
            }
            let container = node;
            while (container && container.nodeName !== 'MJX-CONTAINER') {
                container = container.parentNode;
            }
            if (mjx.nodeName !== 'MJX-MATH' && mjx.nodeName !== 'svg') {
                const child = container.firstChild;
                mjx = child.cloneNode(false).appendChild(mjx).parentNode;
                if (mjx.nodeName === 'svg') {
                    mjx.firstChild.setAttribute('transform', 'matrix(1 0 0 -1 0 0)');
                    const W = parseFloat(mjx.getAttribute('viewBox').split(/ /)[2]);
                    const w = parseFloat(mjx.getAttribute('width'));
                    const { x, y, width, height } = node.getBBox();
                    mjx.setAttribute('viewBox', [x, -(y + height), width, height].join(' '));
                    mjx.removeAttribute('style');
                    mjx.setAttribute('width', (w / W) * width + 'ex');
                    mjx.setAttribute('height', (w / W) * height + 'ex');
                    container.setAttribute('sre-highlight', 'false');
                }
            }
            mjx = container.cloneNode(false).appendChild(mjx)
                .parentNode;
            mjx.style.margin = '0';
        }
        return mjx;
    }
}
HoverRegion.className = 'MJX_HoverRegion';
HoverRegion.style = new StyleJsonSheet({
    ['.' + HoverRegion.className]: {
        display: 'block',
        position: 'absolute',
        width: 'max-content',
        height: 'auto',
        padding: 0,
        opacity: 1,
        'z-index': '202',
        margin: '0 auto',
        'background-color': 'white',
        'line-height': 0,
        'box-shadow': '0px 10px 20px #888',
        border: '2px solid #CCCCCC',
    },
    ['.' + HoverRegion.className + ' > div']: {
        overflow: 'hidden',
    },
});
//# sourceMappingURL=Region.js.map
;// ./mjs/a11y/explorer/Explorer.js
class AbstractExplorer {
    get highlighter() {
        return this.pool.highlighter;
    }
    static stopEvent(event) {
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
    }
    static create(document, pool, region, node, ...rest) {
        const explorer = new this(document, pool, region, node, ...rest);
        return explorer;
    }
    constructor(document, pool, region, node, ..._rest) {
        this.document = document;
        this.pool = pool;
        this.region = region;
        this.node = node;
        this.stoppable = true;
        this.events = [];
        this._active = false;
    }
    Events() {
        return this.events;
    }
    get active() {
        return this._active;
    }
    set active(flag) {
        this._active = flag;
    }
    Attach() {
        this.AddEvents();
    }
    Detach() {
        this.RemoveEvents();
    }
    Start() {
        this.active = true;
    }
    Stop() {
        if (this.active) {
            this.region.Clear();
            this.region.Hide();
            this.active = false;
        }
    }
    AddEvents() {
        for (const [eventkind, eventfunc] of this.events) {
            this.node.addEventListener(eventkind, eventfunc);
        }
    }
    RemoveEvents() {
        for (const [eventkind, eventfunc] of this.events) {
            this.node.removeEventListener(eventkind, eventfunc);
        }
    }
    Update(_force = false) { }
    stopEvent(event) {
        if (this.stoppable) {
            AbstractExplorer.stopEvent(event);
        }
    }
}
//# sourceMappingURL=Explorer.js.map
;// ./mjs/a11y/explorer/KeyExplorer.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const nav = '[data-speech-node]';
function isContainer(el) {
    return el.matches('mjx-container');
}
function hasModifiers(event, shift = true) {
    return ((event.shiftKey && shift) || event.metaKey || event.altKey || event.ctrlKey);
}
function helpMessage(title, select) {
    return `
<H2>Exploring expressions ${title}</h2>

<p>The mathematics on this page is being rendered by <a
href="https://www.mathjax.org/" target="_blank">MathJax</a>, which
generates both the text spoken by screen readers, as well as the
visual layout for sighted users.</p>

<p>Expressions typeset by MathJax can be explored interactively, and
are focusable.  You can use the <kbd>Tab</kbd> key to move to a typeset
expression${select}.  Initially, the expression will be read in full,
but you can use the following keys to explore the expression
further:<p>

<ul>

<li><kbd>Down Arrow</kbd> moves one level deeper into the expression to
allow you to explore the current subexpression term by term.</li>

<li><kbd>Up Arrow</kbd> moves back up a level within the expression.</li>

<li><kbd>Right Arrow</kbd> moves to the next term in the current
subexpression.</li>

<li><kbd>Left Arrow</kbd> moves to the next term in the current
subexpression.</li>

<li><kbd>Shift</kbd>+<kbd>Arrow</kbd> moves to a neighboring cell within a table.

<li><kbd>0-9</kbd>+<kbd>0-9</kbd> jumps to a cell by its index in the table, where 0 = 10.

<li><kbd>Home</kbd> takes you to the top of the expression.</li>

<li><kbd>Enter</kbd> or <kbd>Return</kbd> clicks a link or activates an active
subexpression.</li>

<li><kbd>Space</kbd> opens the MathJax contextual menu where you can view
or copy the source format of the expression, or modify MathJax's
settings.</li>

<li><kbd>Escape</kbd> exits the expression explorer.</li>

<li><kbd>x</kbd> gives a summary of the current subexpression.</li>

<li><kbd>z</kbd> gives the full text of a collapsed expression.</li>

<li><kbd>d</kbd> gives the current depth within the expression.</li>

<li><kbd>s</kbd> starts or stops auto-voicing with synchronized highlighting.</li>

<li><kbd>v</kbd> marks the current position in the expression.</li>

<li><kbd>p</kbd> cycles through the marked positions in the expression.</li>

<li><kbd>u</kbd> clears all marked positions and returns to the starting position.</li>

<li><kbd>&gt;</kbd> cycles through the available speech rule sets
(MathSpeak, ClearSpeak).</li>

<li><kbd>&lt;</kbd> cycles through the verbosity levels for the current
rule set.</li>

<li><kbd>h</kbd> produces this help listing.</li>
</ul>

<p>The MathJax contextual menu allows you to enable or disable speech
or Braille generation for mathematical expressions, the language to
use for the spoken mathematics, and other features of MathJax.  In
particular, the Explorer submenu allows you to specify how the
mathematics should be identified in the page (e.g., by saying "math"
when the expression is spoken), and whether or not to include a
message about the letter "h" bringing up this dialog box.</p>

<p>The contextual menu also provides options for viewing or copying a
MathML version of the expression or its original source format,
creating an SVG version of the expression, and viewing various other
information.</p>

<p>For more help, see the <a
href="https://docs.mathjax.org/en/latest/basic/accessibility.html"
targe="_blank">MathJax accessibility documentation.</a></p>
`;
}
const helpData = new Map([
    [
        'MacOS',
        [
            'on MacOS and iOS using VoiceOver',
            ', or the VoiceOver arrow keys to select an expression',
        ],
    ],
    [
        'Windows',
        [
            'in Windows using NVDA or JAWS',
            `. The screen reader should enter focus or forms mode automatically
when the expression gets the browser focus, but if not, you can toggle
focus mode using NVDA+space in NVDA; for JAWS, Enter should start
forms mode while Numpad Plus leaves it.  Also note that you can use
the NVDA or JAWS key plus the arrow keys to explore the expression
even in browse mode, and you can use NVDA+shift+arrow keys to
navigate out of an expression that has the focus in NVDA`,
        ],
    ],
    [
        'Unix',
        [
            'in Unix using Orca',
            `, and Orca should enter focus mode automatically.  If not, use the
Orca+a key to toggle focus mode on or off.  Also note that you can use
Orca+arrow keys to explore expressions even in browse mode`,
        ],
    ],
    ['unknown', ['with a Screen Reader.', '']],
]);
class SpeechExplorer extends AbstractExplorer {
    get generators() {
        var _a;
        return (_a = this.item) === null || _a === void 0 ? void 0 : _a.generatorPool;
    }
    get role() {
        return this.item.ariaRole;
    }
    get description() {
        return this.item.roleDescription;
    }
    get none() {
        return this.item.none;
    }
    FocusIn(_event) {
        if (this.item.outputData.nofocus) {
            this.item.outputData.nofocus = false;
            return;
        }
        if (!this.clicked) {
            this.Start();
        }
        this.clicked = null;
    }
    FocusOut(_event) {
        if (this.current && !this.focusSpeech) {
            this.setCurrent(null);
            this.Stop();
            if (!document.hasFocus()) {
                this.focusTop();
            }
        }
    }
    KeyDown(event) {
        this.pendingIndex.shift();
        this.region.cancelVoice();
        if (hasModifiers(event, false))
            return;
        const CLASS = this.constructor;
        const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
        const [action, value] = CLASS.keyMap.get(key) || [];
        const result = action
            ? value === undefined || this.active
                ? action(this, event)
                : value
            : this.undefinedKey(event);
        if (result)
            return;
        this.stopEvent(event);
        if (result === false && this.sound) {
            this.NoMove();
        }
    }
    MouseDown(event) {
        var _a;
        this.pendingIndex = [];
        this.region.cancelVoice();
        if (hasModifiers(event) || event.buttons === 2) {
            this.item.outputData.nofocus = true;
            return;
        }
        const clicked = this.findClicked(event.target, event.x, event.y);
        if (clicked === this.document.infoIcon) {
            this.stopEvent(event);
            return;
        }
        (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
        if (event.target.getAttribute('sre-highlighter-added')) {
            this.refocus = clicked;
        }
        else {
            this.clicked = clicked;
        }
    }
    Click(event) {
        if (hasModifiers(event) ||
            event.buttons === 2 ||
            document.getSelection().type === 'Range') {
            this.FocusOut(null);
            return;
        }
        const clicked = this.findClicked(event.target, event.x, event.y);
        if (clicked === this.document.infoIcon) {
            this.stopEvent(event);
            this.help();
            return;
        }
        if (!clicked || this.node.contains(clicked)) {
            this.stopEvent(event);
            this.refocus = clicked;
            if (!this.triggerLinkMouse()) {
                this.Start();
            }
        }
    }
    DblClick(event) {
        var _a;
        const direction = (_a = document.getSelection().direction) !== null && _a !== void 0 ? _a : 'none';
        if (hasModifiers(event) || event.buttons === 2 || direction !== 'none') {
            this.FocusOut(null);
        }
        else {
            this.stopEvent(event);
            this.refocus = this.rootNode();
            this.Start();
        }
    }
    spaceKey() {
        this.refocus = this.current;
        return true;
    }
    hKey() {
        this.refocus = this.current;
        this.help();
    }
    escapeKey() {
        this.Stop();
        this.focusTop();
        return true;
    }
    enterKey(event) {
        if (this.active) {
            if (this.triggerLinkKeyboard(event)) {
                this.Stop();
            }
            else {
                const expandable = this.actionable(this.current);
                if (!expandable) {
                    return false;
                }
                this.refocus = expandable;
                expandable.dispatchEvent(new Event('click'));
            }
        }
        else {
            this.Start();
        }
    }
    homeKey() {
        this.setCurrent(this.rootNode());
    }
    moveDown(shift) {
        return shift
            ? this.moveToNeighborCell(1, 0)
            : this.moveTo(this.firstNode(this.current));
    }
    moveUp(shift) {
        return shift
            ? this.moveToNeighborCell(-1, 0)
            : this.moveTo(this.getParent(this.current));
    }
    moveRight(shift) {
        return shift
            ? this.moveToNeighborCell(0, 1)
            : this.moveTo(this.nextSibling(this.current));
    }
    moveLeft(shift) {
        return shift
            ? this.moveToNeighborCell(0, -1)
            : this.moveTo(this.prevSibling(this.current));
    }
    moveTo(node) {
        if (!node)
            return false;
        this.setCurrent(node);
    }
    moveToNeighborCell(di, dj) {
        const cell = this.tableCell(this.current);
        if (!cell)
            return false;
        const [i, j] = this.cellPosition(cell);
        if (i == null)
            return false;
        const move = this.cellAt(this.cellTable(cell), i + di, j + dj);
        if (!move)
            return false;
        this.setCurrent(move);
    }
    undefinedKey(event) {
        return !this.active || hasModifiers(event);
    }
    addMark() {
        if (this.current === this.marks[this.marks.length - 1]) {
            this.setCurrent(this.current);
        }
        else {
            this.currentMark = this.marks.length - 1;
            this.marks.push(this.current);
            this.speak('Position marked');
        }
    }
    prevMark() {
        if (this.currentMark < 0) {
            if (this.marks.length === 0) {
                this.setCurrent(this.lastMark || this.rootNode());
                return;
            }
            this.currentMark = this.marks.length - 1;
        }
        const current = this.currentMark;
        this.setCurrent(this.marks[current]);
        this.currentMark = current - 1;
    }
    clearMarks() {
        this.marks = [];
        this.currentMark = -1;
        this.prevMark();
    }
    autoVoice() {
        const value = !this.document.options.a11y.voicing;
        if (this.document.menu) {
            this.document.menu.menu.pool.lookup('voicing').setValue(value);
        }
        else {
            this.document.options.a11y.voicing = value;
        }
        this.Update();
    }
    numberKey(n) {
        if (!this.tableCell(this.current))
            return false;
        if (n === 0) {
            n = 10;
        }
        if (this.pendingIndex.length) {
            const table = this.cellTable(this.tableCell(this.current));
            const cell = this.cellAt(table, this.pendingIndex[0] - 1, n - 1);
            this.pendingIndex = [];
            this.speak(String(n));
            if (!cell)
                return false;
            setTimeout(() => this.setCurrent(cell), 500);
        }
        else {
            this.pendingIndex = [null, n];
            this.speak(`Jump to row ${n} and column`);
        }
    }
    depth() {
        var _a, _b, _c;
        if (this.speechType === 'd') {
            this.setCurrent(this.current);
            return;
        }
        this.speechType = 'd';
        const parts = [
            [
                (_a = this.node.getAttribute('data-semantic-level')) !== null && _a !== void 0 ? _a : 'Level',
                (_b = this.current.getAttribute('aria-level')) !== null && _b !== void 0 ? _b : '0',
            ]
                .join(' ')
                .trim(),
        ];
        const action = this.actionable(this.current);
        if (action) {
            parts.unshift((_c = this.node.getAttribute(action.getAttribute('toggle') === '1'
                ? 'data-semantic-expandable'
                : 'data-semantic-collapsible')) !== null && _c !== void 0 ? _c : '');
        }
        this.speak(parts.join(' '), this.current.getAttribute(SemAttr.BRAILLE));
    }
    summary() {
        if (this.speechType === 'x') {
            this.setCurrent(this.current);
            return;
        }
        this.speechType = 'x';
        const summary = this.current.getAttribute(SemAttr.SUMMARY);
        this.speak(summary, this.current.getAttribute(SemAttr.BRAILLE), this.SsmlAttributes(this.current, SemAttr.SUMMARY_SSML));
    }
    nextRules() {
        this.node.removeAttribute('data-speech-attached');
        this.restartAfter(this.generators.nextRules(this.item));
    }
    nextStyle() {
        this.node.removeAttribute('data-speech-attached');
        this.restartAfter(this.generators.nextStyle(this.current, this.item));
    }
    details() {
        const action = this.actionable(this.current);
        if (!action ||
            !action.getAttribute('data-collapsible') ||
            action.getAttribute('toggle') !== '1' ||
            this.speechType === 'z') {
            this.setCurrent(this.current);
            return;
        }
        this.speechType = 'z';
        const id = this.nodeId(this.current);
        let current;
        this.item.root.walkTree((node) => {
            if (node.attributes.get('data-semantic-id') === id) {
                current = node;
            }
        });
        let mml = this.item.toMathML(current, this.item);
        if (!current.isKind('math')) {
            mml = `<math>${mml}</math>`;
        }
        mml = mml.replace(/ (?:data-semantic-|aria-|data-speech-|data-latex).*?=".*?"/g, '');
        this.item
            .speechFor(mml)
            .then(([speech, braille]) => this.speak(speech, braille));
    }
    help() {
        const adaptor = this.document.adaptor;
        const helpBackground = adaptor.node('mjx-help-background');
        const close = (event) => {
            helpBackground.remove();
            this.node.focus();
            this.stopEvent(event);
        };
        helpBackground.addEventListener('click', close);
        const helpSizer = adaptor.node('mjx-help-sizer', {}, [
            adaptor.node('mjx-help-dialog', { tabindex: 0, role: 'dialog', 'aria-labeledby': 'mjx-help-label' }, [
                adaptor.node('h1', { id: 'mjx-help-label' }, [
                    adaptor.text('MathJax Expression Explorer Help'),
                ]),
                adaptor.node('div'),
                adaptor.node('input', { type: 'button', value: 'Close' }),
            ]),
        ]);
        helpBackground.append(helpSizer);
        const help = helpSizer.firstChild;
        help.addEventListener('click', (event) => this.stopEvent(event));
        help.lastChild.addEventListener('click', close);
        help.addEventListener('keydown', (event) => {
            if (event.code === 'Escape') {
                close(event);
            }
        });
        const [title, select] = helpData.get(context.os);
        help.childNodes[1].innerHTML = helpMessage(title, select);
        document.body.append(helpBackground);
        help.focus();
    }
    setCurrent(node, addDescription = false) {
        this.speechType = '';
        if (!document.hasFocus()) {
            this.refocus = this.current;
        }
        this.node.setAttribute('aria-busy', 'true');
        if (this.current) {
            for (const part of this.getSplitNodes(this.current)) {
                part.classList.remove('mjx-selected');
            }
            this.pool.unhighlight();
            if (this.document.options.a11y.tabSelects === 'last') {
                this.refocus = this.current;
            }
            if (!node) {
                this.lastMark = this.current;
                this.removeSpeech();
            }
            this.current = null;
        }
        this.current = node;
        this.currentMark = -1;
        if (this.current) {
            const parts = this.getSplitNodes(this.current);
            for (const part of parts) {
                part.classList.add('mjx-selected');
            }
            this.pool.highlight(parts);
            this.addSpeech(node, addDescription);
        }
        this.node.removeAttribute('aria-busy');
    }
    getSplitNodes(node) {
        const id = this.nodeId(node);
        if (!id) {
            return [node];
        }
        return Array.from(this.node.querySelectorAll(`[data-semantic-id="${id}"]`));
    }
    addSpeech(node, describe) {
        var _a;
        (_a = this.img) === null || _a === void 0 ? void 0 : _a.remove();
        let speech = [
            node.getAttribute(SemAttr.PREFIX),
            node.getAttribute(SemAttr.SPEECH),
            node.getAttribute(SemAttr.POSTFIX),
        ]
            .join(' ')
            .trim();
        if (describe) {
            let description = this.description === this.none ? '' : ', ' + this.description;
            if (this.document.options.a11y.help) {
                description += ', press h for help';
            }
            speech += description;
        }
        this.speak(speech, node.getAttribute(SemAttr.BRAILLE), this.SsmlAttributes(node, SemAttr.SPEECH_SSML));
        this.node.setAttribute('tabindex', '-1');
    }
    removeSpeech() {
        if (this.speech) {
            this.speech.remove();
            this.speech = null;
            if (this.img) {
                this.node.append(this.img);
            }
            this.node.setAttribute('tabindex', '0');
        }
    }
    speak(speech, braille = '', ssml = null, description = this.none) {
        const oldspeech = this.speech;
        this.speech = document.createElement('mjx-speech');
        this.speech.setAttribute('role', this.role);
        this.speech.setAttribute('aria-label', speech);
        this.speech.setAttribute(SemAttr.SPEECH, speech);
        if (ssml) {
            this.speech.setAttribute(SemAttr.PREFIX_SSML, ssml[0] || '');
            this.speech.setAttribute(SemAttr.SPEECH_SSML, ssml[1] || '');
            this.speech.setAttribute(SemAttr.POSTFIX_SSML, ssml[2] || '');
        }
        if (braille) {
            this.speech.setAttribute('aria-braillelabel', braille);
        }
        this.speech.setAttribute('aria-roledescription', description);
        this.speech.setAttribute('tabindex', '0');
        this.node.append(this.speech);
        this.focusSpeech = true;
        this.speech.focus();
        this.focusSpeech = false;
        this.Update();
        if (oldspeech) {
            setTimeout(() => oldspeech.remove(), 100);
        }
    }
    attachSpeech() {
        var _a;
        const item = this.item;
        const container = this.node;
        if (!container.hasAttribute('has-speech')) {
            for (const child of Array.from(container.childNodes)) {
                child.setAttribute('aria-hidden', 'true');
            }
            container.setAttribute('has-speech', 'true');
        }
        const description = item.roleDescription;
        const speech = (container.getAttribute(SemAttr.SPEECH) || '') +
            (description ? ', ' + description : '');
        (_a = this.img) === null || _a === void 0 ? void 0 : _a.remove();
        this.img = this.document.adaptor.node('mjx-speech', {
            'aria-label': speech,
            role: 'img',
            'aria-roledescription': item.none,
        });
        container.appendChild(this.img);
    }
    detachSpeech() {
        var _a;
        const container = this.node;
        (_a = this.img) === null || _a === void 0 ? void 0 : _a.remove();
        container.removeAttribute('has-speech');
        for (const child of Array.from(container.childNodes)) {
            child.removeAttribute('aria-hidden');
        }
    }
    focus() {
        this.node.focus();
    }
    nodeId(node) {
        return node.getAttribute('data-semantic-id');
    }
    parentId(node) {
        return node.getAttribute('data-semantic-parent');
    }
    getNode(id) {
        return id ? this.node.querySelector(`[data-semantic-id="${id}"]`) : null;
    }
    getParent(node) {
        return this.getNode(this.parentId(node));
    }
    childArray(node) {
        return node ? node.getAttribute('data-semantic-children').split(/,/) : [];
    }
    isCell(node) {
        return (!!node && this.cellTypes.includes(node.getAttribute('data-semantic-type')));
    }
    isRow(node) {
        return !!node && node.getAttribute('data-semantic-type') === 'row';
    }
    tableCell(node) {
        while (node && node !== this.node) {
            if (this.isCell(node)) {
                return node;
            }
            node = node.parentNode;
        }
        return null;
    }
    cellTable(cell) {
        const row = this.getParent(cell);
        return this.isRow(row) ? this.getParent(row) : row;
    }
    cellPosition(cell) {
        const row = this.getParent(cell);
        const j = this.childArray(row).indexOf(this.nodeId(cell));
        if (!this.isRow(row)) {
            return [j, 1];
        }
        const table = this.getParent(row);
        const i = this.childArray(table).indexOf(this.nodeId(row));
        return [i, j];
    }
    cellAt(table, i, j) {
        const row = this.getNode(this.childArray(table)[i]);
        if (!this.isRow(row)) {
            return j === 1 ? row : null;
        }
        const cell = this.getNode(this.childArray(row)[j]);
        return cell;
    }
    firstNode(node) {
        const owns = node.getAttribute('data-semantic-owns');
        if (!owns) {
            return node.querySelector(nav);
        }
        const ownsList = owns.split(/ /);
        for (const id of ownsList) {
            const node = this.getNode(id);
            if (node === null || node === void 0 ? void 0 : node.hasAttribute('data-speech-node')) {
                return node;
            }
        }
        return node.querySelector(nav);
    }
    rootNode() {
        const base = this.node.querySelector('[data-semantic-structure]');
        if (!base) {
            return this.node.querySelector(nav);
        }
        const id = base
            .getAttribute('data-semantic-structure')
            .split(/ /)[0]
            .replace('(', '');
        return this.getNode(id);
    }
    nextSibling(node) {
        var _a;
        const id = this.parentId(node);
        if (!id)
            return null;
        const owns = (_a = this.getNode(id)
            .getAttribute('data-semantic-owns')) === null || _a === void 0 ? void 0 : _a.split(/ /);
        if (!owns)
            return null;
        let i = owns.indexOf(this.nodeId(node));
        let next;
        do {
            next = this.getNode(owns[++i]);
        } while (next && !next.hasAttribute('data-speech-node'));
        return next;
    }
    prevSibling(node) {
        var _a;
        const id = this.parentId(node);
        if (!id)
            return null;
        const owns = (_a = this.getNode(id)
            .getAttribute('data-semantic-owns')) === null || _a === void 0 ? void 0 : _a.split(/ /);
        if (!owns)
            return null;
        let i = owns.indexOf(this.nodeId(node));
        let prev;
        do {
            prev = this.getNode(owns[--i]);
        } while (prev && !prev.hasAttribute('data-speech-node'));
        return prev;
    }
    findClicked(node, x, y) {
        const icon = this.document.infoIcon;
        if (icon === node || icon.contains(node)) {
            return icon;
        }
        if (this.node.getAttribute('jax') !== 'SVG') {
            return node.closest(nav);
        }
        let found = null;
        let clicked = this.node;
        while (clicked) {
            if (clicked.matches(nav)) {
                found = clicked;
            }
            const nodes = Array.from(clicked.childNodes);
            clicked = null;
            for (const child of nodes) {
                if (child !== this.speech &&
                    child !== this.img &&
                    child.tagName.toLowerCase() !== 'rect') {
                    const { left, right, top, bottom } = child.getBoundingClientRect();
                    if (left <= x && x <= right && top <= y && y <= bottom) {
                        clicked = child;
                        break;
                    }
                }
            }
        }
        return found;
    }
    focusTop() {
        this.focusSpeech = true;
        this.node.focus();
        this.focusSpeech = false;
    }
    SsmlAttributes(node, center) {
        return [
            node.getAttribute(SemAttr.PREFIX_SSML),
            node.getAttribute(center),
            node.getAttribute(SemAttr.POSTFIX_SSML),
        ];
    }
    restartAfter(promise) {
        return __awaiter(this, void 0, void 0, function* () {
            yield promise;
            this.attachSpeech();
            const current = this.current;
            this.current = null;
            this.pool.unhighlight();
            this.setCurrent(current);
        });
    }
    constructor(document, pool, region, node, brailleRegion, magnifyRegion, _mml, item) {
        super(document, pool, null, node);
        this.document = document;
        this.pool = pool;
        this.region = region;
        this.node = node;
        this.brailleRegion = brailleRegion;
        this.magnifyRegion = magnifyRegion;
        this.item = item;
        this.sound = false;
        this.current = null;
        this.clicked = null;
        this.refocus = null;
        this.focusSpeech = false;
        this.restarted = null;
        this.speech = null;
        this.speechType = '';
        this.img = null;
        this.attached = false;
        this.eventsAttached = false;
        this.marks = [];
        this.currentMark = -1;
        this.lastMark = null;
        this.pendingIndex = [];
        this.cellTypes = ['cell', 'line'];
        this.events = super.Events().concat([
            ['focusin', this.FocusIn.bind(this)],
            ['focusout', this.FocusOut.bind(this)],
            ['keydown', this.KeyDown.bind(this)],
            ['mousedown', this.MouseDown.bind(this)],
            ['click', this.Click.bind(this)],
            ['dblclick', this.DblClick.bind(this)],
        ]);
    }
    findStartNode() {
        let node = this.refocus || this.current;
        if (!node && this.restarted) {
            node = this.node.querySelector(this.restarted);
        }
        this.refocus = this.restarted = null;
        return node;
    }
    Start() {
        const _super = Object.create(null, {
            Start: { get: () => super.Start }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.attached || this.active)
                return;
            this.document.activeItem = this.item;
            if (this.item.state() < STATE.ATTACHSPEECH) {
                this.item.attachSpeech(this.document);
                yield this.generators.promise;
            }
            if (this.focusSpeech)
                return;
            this.node.classList.add('mjx-explorer-active');
            this.node.append(this.document.infoIcon);
            const node = this.findStartNode();
            this.setCurrent(node || this.rootNode(), !node);
            _super.Start.call(this);
            const options = this.document.options;
            const a11y = options.a11y;
            if (a11y.subtitles && a11y.speech && options.enableSpeech) {
                this.region.Show(this.node, this.highlighter);
            }
            if (a11y.viewBraille && a11y.braille && options.enableBraille) {
                this.brailleRegion.Show(this.node, this.highlighter);
            }
            if (a11y.keyMagnifier) {
                this.magnifyRegion.Show(this.current, this.highlighter);
            }
            this.Update();
        });
    }
    Stop() {
        if (this.active) {
            const description = this.description;
            if (this.node.getAttribute('aria-roledescription') !== description) {
                this.node.setAttribute('aria-roledescription', description);
            }
            this.node.classList.remove('mjx-explorer-active');
            this.document.infoIcon.remove();
            this.pool.unhighlight();
            this.magnifyRegion.Hide();
            this.region.Hide();
            this.brailleRegion.Hide();
        }
        super.Stop();
    }
    Update() {
        if (!this.active)
            return;
        this.region.node = this.node;
        this.generators.updateRegions(this.speech || this.node, this.region, this.brailleRegion);
        this.magnifyRegion.Update(this.current);
    }
    Attach() {
        if (this.attached)
            return;
        super.Attach();
        this.node.setAttribute('tabindex', '0');
        this.attached = true;
    }
    Detach() {
        var _a;
        super.RemoveEvents();
        this.node.removeAttribute('role');
        this.node.removeAttribute('aria-roledescription');
        this.node.removeAttribute('aria-label');
        (_a = this.img) === null || _a === void 0 ? void 0 : _a.remove();
        if (this.active) {
            this.node.setAttribute('tabindex', '0');
        }
        this.attached = false;
    }
    NoMove() {
        honk();
    }
    AddEvents() {
        if (!this.eventsAttached) {
            super.AddEvents();
            this.eventsAttached = true;
        }
    }
    actionable(node) {
        const parent = node === null || node === void 0 ? void 0 : node.parentNode;
        return parent && this.highlighter.isMactionNode(parent) ? parent : null;
    }
    triggerLinkKeyboard(event) {
        if (!this.current) {
            if (event.target instanceof HTMLAnchorElement) {
                event.target.dispatchEvent(new MouseEvent('click'));
                return true;
            }
            return false;
        }
        return this.triggerLink(this.current);
    }
    triggerLink(node) {
        var _a;
        const focus = (_a = node === null || node === void 0 ? void 0 : node.getAttribute('data-semantic-postfix')) === null || _a === void 0 ? void 0 : _a.match(/(^| )link($| )/);
        if (focus) {
            while (node && node !== this.node) {
                if (node instanceof HTMLAnchorElement) {
                    node.dispatchEvent(new MouseEvent('click'));
                    setTimeout(() => this.FocusOut(null), 50);
                    return true;
                }
                node = node.parentNode;
            }
        }
        return false;
    }
    triggerLinkMouse() {
        let node = this.refocus;
        while (node && node !== this.node) {
            if (this.triggerLink(node)) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    semanticFocus() {
        const focus = [];
        let name = 'data-semantic-id';
        let node = this.current || this.refocus || this.node;
        const action = this.actionable(node);
        if (action) {
            name = action.hasAttribute('data-maction-id') ? 'data-maction-id' : 'id';
            node = action;
            focus.push(nav);
        }
        const attr = node.getAttribute(name);
        if (attr) {
            focus.unshift(`[${name}="${attr}"]`);
        }
        return focus.join(' ');
    }
}
SpeechExplorer.keyMap = new Map([
    ['Tab', [() => true]],
    ['Escape', [(explorer) => explorer.escapeKey()]],
    ['Enter', [(explorer, event) => explorer.enterKey(event)]],
    ['Home', [(explorer) => explorer.homeKey()]],
    [
        'ArrowDown',
        [(explorer, event) => explorer.moveDown(event.shiftKey), true],
    ],
    ['ArrowUp', [(explorer, event) => explorer.moveUp(event.shiftKey), true]],
    [
        'ArrowLeft',
        [(explorer, event) => explorer.moveLeft(event.shiftKey), true],
    ],
    [
        'ArrowRight',
        [(explorer, event) => explorer.moveRight(event.shiftKey), true],
    ],
    [' ', [(explorer) => explorer.spaceKey()]],
    ['h', [(explorer) => explorer.hKey()]],
    ['>', [(explorer) => explorer.nextRules(), false]],
    ['<', [(explorer) => explorer.nextStyle(), false]],
    ['x', [(explorer) => explorer.summary(), false]],
    ['z', [(explorer) => explorer.details(), false]],
    ['d', [(explorer) => explorer.depth(), false]],
    ['v', [(explorer) => explorer.addMark(), false]],
    ['p', [(explorer) => explorer.prevMark(), false]],
    ['u', [(explorer) => explorer.clearMarks(), false]],
    ['s', [(explorer) => explorer.autoVoice(), false]],
    ...[...'0123456789'].map((n) => [
        n,
        [(explorer) => explorer.numberKey(parseInt(n)), false],
    ]),
]);
//# sourceMappingURL=KeyExplorer.js.map
;// ./components/mjs/a11y/sre/lib/a11y/sre.js
const sre_def = MathJax._.a11y.sre_ts;
const locales = sre_def.locales;
const setupEngine = sre_def.setupEngine;
const engineSetup = sre_def.engineSetup;
const toEnriched = sre_def.toEnriched;
const parseDOM = sre_def.parseDOM;
const addPreference = sre_def.addPreference;
const fromPreference = sre_def.fromPreference;
const toPreference = sre_def.toPreference;

;// ./mjs/a11y/explorer/MouseExplorer.js



class AbstractMouseExplorer extends AbstractExplorer {
    constructor() {
        super(...arguments);
        this.events = super.Events().concat([
            ['mouseover', this.MouseOver.bind(this)],
            ['mouseout', this.MouseOut.bind(this)],
        ]);
    }
    MouseOver(_event) {
        this.Start();
    }
    MouseOut(_event) {
        this.Stop();
    }
}
class Hoverer extends AbstractMouseExplorer {
    constructor(document, pool, region, node, nodeQuery, nodeAccess) {
        super(document, pool, region, node);
        this.document = document;
        this.pool = pool;
        this.region = region;
        this.node = node;
        this.nodeQuery = nodeQuery;
        this.nodeAccess = nodeAccess;
    }
    MouseOut(event) {
        this.highlighter.unhighlight();
        this.region.Hide();
        super.MouseOut(event);
    }
    MouseOver(event) {
        super.MouseOver(event);
        const target = event.target;
        const [node, kind] = this.getNode(target);
        if (!node) {
            return;
        }
        this.highlighter.unhighlight();
        this.highlighter.highlight([node]);
        this.region.Update(kind);
        this.region.Show(node, this.highlighter);
    }
    getNode(node) {
        const original = node;
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
            const child = node.childNodes[0];
            node =
                child && child.tagName === 'defs'
                    ? node.childNodes[1]
                    : child;
        }
        return [null, null];
    }
}
class ValueHoverer extends Hoverer {
}
class ContentHoverer extends Hoverer {
}
class FlameHoverer extends Hoverer {
    constructor(document, pool, _ignore, node) {
        super(document, pool, new DummyRegion(document), node, (x) => this.highlighter.isMactionNode(x), () => { });
        this.document = document;
        this.pool = pool;
        this.node = node;
    }
}
//# sourceMappingURL=MouseExplorer.js.map
;// ./mjs/a11y/explorer/TreeExplorer.js

class AbstractTreeExplorer extends AbstractExplorer {
    constructor(document, pool, region, node, mml) {
        super(document, pool, null, node);
        this.document = document;
        this.pool = pool;
        this.region = region;
        this.node = node;
        this.mml = mml;
        this.stoppable = false;
    }
    Attach() {
        super.Attach();
        this.Start();
    }
    Detach() {
        this.Stop();
        super.Detach();
    }
}
class FlameColorer extends AbstractTreeExplorer {
    Start() {
        if (this.active)
            return;
        this.active = true;
        this.highlighter.highlightAll(this.node);
    }
    Stop() {
        if (this.active) {
            this.highlighter.unhighlightAll();
        }
        this.active = false;
    }
}
class TreeColorer extends AbstractTreeExplorer {
    constructor() {
        super(...arguments);
        this.contrast = new ContrastPicker();
        this.leaves = [];
        this.modality = 'data-semantic-foreground';
    }
    Start() {
        if (this.active)
            return;
        this.active = true;
        if (!this.node.hasAttribute('hasforegroundcolor')) {
            this.colorLeaves();
            this.node.setAttribute('hasforegroundcolor', 'true');
        }
        this.leaves.forEach((leaf) => this.colorize(leaf));
    }
    Stop() {
        if (this.active) {
            this.leaves.forEach((leaf) => this.uncolorize(leaf));
        }
        this.active = false;
    }
    colorLeaves() {
        this.leaves = Array.from(this.node.querySelectorAll('[data-semantic-id]:not([data-semantic-children])'));
        for (const leaf of this.leaves) {
            leaf.setAttribute(this.modality, this.contrast.generate());
            this.contrast.increment();
        }
    }
    colorize(node) {
        if (node.hasAttribute(this.modality)) {
            node.setAttribute(this.modality + '-old', node.style.color);
            node.style.color = node.getAttribute(this.modality);
        }
    }
    uncolorize(node) {
        const fore = this.modality + '-old';
        if (node.hasAttribute(fore)) {
            node.style.color = node.getAttribute(fore);
        }
    }
}
class ContrastPicker {
    constructor() {
        this.hue = 10;
        this.sat = 100;
        this.light = 50;
        this.incr = 53;
    }
    generate() {
        return ContrastPicker.hsl2rgb(this.hue, this.sat, this.light);
    }
    increment() {
        this.hue = (this.hue + this.incr) % 360;
    }
    static hsl2rgb(h, s, l) {
        s = s > 1 ? s / 100 : s;
        l = l > 1 ? l / 100 : l;
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const m = l - c / 2;
        let r = 0, g = 0, b = 0;
        if (0 <= h && h < 60) {
            [r, g, b] = [c, x, 0];
        }
        else if (60 <= h && h < 120) {
            [r, g, b] = [x, c, 0];
        }
        else if (120 <= h && h < 180) {
            [r, g, b] = [0, c, x];
        }
        else if (180 <= h && h < 240) {
            [r, g, b] = [0, x, c];
        }
        else if (240 <= h && h < 300) {
            [r, g, b] = [x, 0, c];
        }
        else if (300 <= h && h < 360) {
            [r, g, b] = [c, 0, x];
        }
        return `rgb(${(r + m) * 255}, ${(g + m) * 255}, ${(b + m) * 255})`;
    }
}
//# sourceMappingURL=TreeExplorer.js.map
;// ./mjs/a11y/explorer/ExplorerPool.js





class RegionPool {
    constructor(document) {
        this.document = document;
        this.speechRegion = new SpeechRegion(this.document);
        this.brailleRegion = new LiveRegion(this.document);
        this.magnifier = new HoverRegion(this.document);
        this.tooltip1 = new ToolTip(this.document);
        this.tooltip2 = new ToolTip(this.document);
        this.tooltip3 = new ToolTip(this.document);
    }
}
const allExplorers = {
    speech: (doc, pool, node, ...rest) => {
        const explorer = SpeechExplorer.create(doc, pool, doc.explorerRegions.speechRegion, node, doc.explorerRegions.brailleRegion, doc.explorerRegions.magnifier, rest[0], rest[1]);
        explorer.sound = true;
        return explorer;
    },
    mouseMagnifier: (doc, pool, node, ..._rest) => ContentHoverer.create(doc, pool, doc.explorerRegions.magnifier, node, (x) => x.hasAttribute('data-semantic-type'), (x) => x),
    hover: (doc, pool, node, ..._rest) => FlameHoverer.create(doc, pool, null, node),
    infoType: (doc, pool, node, ..._rest) => ValueHoverer.create(doc, pool, doc.explorerRegions.tooltip1, node, (x) => x.hasAttribute('data-semantic-type'), (x) => x.getAttribute('data-semantic-type')),
    infoRole: (doc, pool, node, ..._rest) => ValueHoverer.create(doc, pool, doc.explorerRegions.tooltip2, node, (x) => x.hasAttribute('data-semantic-role'), (x) => x.getAttribute('data-semantic-role')),
    infoPrefix: (doc, pool, node, ..._rest) => ValueHoverer.create(doc, pool, doc.explorerRegions.tooltip3, node, (x) => { var _a; return (_a = x.hasAttribute) === null || _a === void 0 ? void 0 : _a.call(x, 'data-semantic-prefix-none'); }, (x) => { var _a; return (_a = x.getAttribute) === null || _a === void 0 ? void 0 : _a.call(x, 'data-semantic-prefix-none'); }),
    flame: (doc, pool, node, ..._rest) => FlameColorer.create(doc, pool, null, node),
    treeColoring: (doc, pool, node, ...rest) => TreeColorer.create(doc, pool, null, node, ...rest),
};
class ExplorerPool {
    constructor() {
        this.explorers = {};
        this.attached = [];
        this._restart = [];
        this.speechExplorerKeys = ['speech', 'braille', 'keyMagnifier'];
    }
    get highlighter() {
        if (this._renderer !== this.document.outputJax.name) {
            this._renderer = this.document.outputJax.name;
            this.setPrimaryHighlighter();
            return this._highlighter;
        }
        const [foreground, background] = this.colorOptions();
        this._highlighter.setColor(background, foreground);
        return this._highlighter;
    }
    init(document, node, mml, item) {
        this.document = document;
        this.mml = mml;
        this.node = node;
        this.setPrimaryHighlighter();
        for (const key of Object.keys(allExplorers)) {
            this.explorers[key] = allExplorers[key](this.document, this, this.node, this.mml, item);
        }
        this.setSecondaryHighlighter();
        this.attach();
    }
    attach() {
        this.attached = [];
        const keyExplorers = [];
        const a11y = this.document.options.a11y;
        for (const [key, explorer] of Object.entries(this.explorers)) {
            if (explorer instanceof SpeechExplorer) {
                explorer.stoppable = false;
                keyExplorers.unshift(explorer);
                if (this.speechExplorerKeys.some((exKey) => this.document.options.a11y[exKey])) {
                    explorer.Attach();
                    this.attached.push(key);
                }
                else {
                    explorer.Detach();
                }
                continue;
            }
            if (a11y[key] ||
                (key === 'speech' && (a11y.braille || a11y.keyMagnifier))) {
                explorer.Attach();
                this.attached.push(key);
            }
            else {
                explorer.Detach();
            }
        }
        for (const explorer of keyExplorers) {
            if (explorer.attached) {
                explorer.stoppable = true;
                break;
            }
        }
    }
    reattach() {
        for (const key of this.attached) {
            const explorer = this.explorers[key];
            if (explorer.active) {
                this._restart.push(key);
                explorer.Stop();
            }
        }
    }
    restart() {
        this._restart.forEach((x) => {
            this.explorers[x].Start();
        });
        this._restart = [];
    }
    setPrimaryHighlighter() {
        const [foreground, background] = this.colorOptions();
        this._highlighter = getHighlighter(background, foreground, this.document.outputJax.name);
    }
    setSecondaryHighlighter() {
        this.secondaryHighlighter = getHighlighter({ color: 'red' }, { color: 'black' }, this.document.outputJax.name);
        this.speech.region.highlighter =
            this.secondaryHighlighter;
    }
    highlight(nodes) {
        this.highlighter.highlight(nodes);
    }
    unhighlight() {
        this.secondaryHighlighter.unhighlight();
        this.highlighter.unhighlight();
    }
    get speech() {
        return this.explorers['speech'];
    }
    colorOptions() {
        const opts = this.document.options.a11y;
        const foreground = {
            color: opts.foregroundColor.toLowerCase(),
            alpha: opts.foregroundOpacity / 100,
        };
        const background = {
            color: opts.backgroundColor.toLowerCase(),
            alpha: opts.backgroundOpacity / 100,
        };
        return [foreground, background];
    }
}
//# sourceMappingURL=ExplorerPool.js.map
;// ./mjs/a11y/explorer.js








const isUnix = context.os === 'Unix';
newState('EXPLORER', STATE.INSERTED + 30);
function ExplorerMathItemMixin(BaseMathItem, toMathML) {
    var _a;
    return _a = class BaseClass extends BaseMathItem {
            constructor() {
                super(...arguments);
                this.refocus = null;
            }
            get ariaRole() {
                return this.constructor.ariaRole;
            }
            get roleDescription() {
                const CLASS = this.constructor;
                return CLASS.roleDescription === 'none'
                    ? CLASS.none
                    : CLASS.roleDescription;
            }
            get none() {
                return this.constructor.none;
            }
            attachSpeech(document) {
                var _b, _c;
                super.attachSpeech(document);
                (_c = (_b = this.outputData.speechPromise) === null || _b === void 0 ? void 0 : _b.then(() => this.explorers.speech.attachSpeech())) === null || _c === void 0 ? void 0 : _c.then(() => {
                    var _b;
                    if ((_b = this.explorers) === null || _b === void 0 ? void 0 : _b.speech) {
                        this.explorers.speech.restarted = this.refocus;
                    }
                    this.refocus = null;
                    if (this.explorers) {
                        this.explorers.restart();
                    }
                });
            }
            detachSpeech(document) {
                super.detachSpeech(document);
                this.explorers.speech.detachSpeech();
            }
            explorable(document, force = false) {
                if (this.state() >= STATE.EXPLORER)
                    return;
                if (!this.isEscaped && (document.options.enableExplorer || force)) {
                    const node = this.typesetRoot;
                    const mml = toMathML(this.root);
                    if (!this.explorers) {
                        this.explorers = new ExplorerPool();
                    }
                    this.explorers.init(document, node, mml, this);
                }
                this.state(STATE.EXPLORER);
            }
            state(state = null, restore = false) {
                if (state < STATE.EXPLORER && this.explorers) {
                    for (const explorer of Object.values(this.explorers.explorers)) {
                        if (explorer.active) {
                            explorer.Stop();
                        }
                    }
                }
                return super.state(state, restore);
            }
            rerender(document, start = STATE.RERENDER) {
                const focus = this.setTemporaryFocus(document);
                super.rerender(document, start);
                this.clearTemporaryFocus(focus);
            }
            setTemporaryFocus(document) {
                var _b;
                let focus = null;
                if (this.explorers) {
                    const speech = this.explorers.speech;
                    focus = (speech === null || speech === void 0 ? void 0 : speech.attached) ? document.tmpFocus : null;
                    if (focus) {
                        this.refocus = (_b = speech.semanticFocus()) !== null && _b !== void 0 ? _b : null;
                        const adaptor = document.adaptor;
                        adaptor.append(adaptor.body(), focus);
                    }
                    this.explorers.reattach();
                    focus === null || focus === void 0 ? void 0 : focus.focus();
                }
                return focus;
            }
            clearTemporaryFocus(focus) {
                var _b;
                if (focus) {
                    const promise = (_b = this.outputData.speechPromise) !== null && _b !== void 0 ? _b : Promise.resolve();
                    promise.then(() => setTimeout(() => focus.remove(), 100));
                }
            }
        },
        _a.ariaRole = isUnix ? 'tree' : 'application',
        _a.roleDescription = 'math',
        _a.none = '\u0091',
        _a;
}
function ExplorerMathDocumentMixin(BaseDocument) {
    var _a;
    return _a = class BaseClass extends BaseDocument {
            constructor(...args) {
                super(...args);
                this.explorerRegions = null;
                this.activeItem = null;
                const ProcessBits = this.constructor.ProcessBits;
                if (!ProcessBits.has('explorer')) {
                    ProcessBits.allocate('explorer');
                }
                const visitor = new SerializedMmlVisitor(this.mmlFactory);
                const toMathML = (node) => visitor.visitTree(node);
                const options = this.options;
                if (!options.a11y.speechRules) {
                    options.a11y.speechRules = `${options.sre.domain}-${options.sre.style}`;
                }
                const mathItem = (options.MathItem = ExplorerMathItemMixin(options.MathItem, toMathML));
                mathItem.roleDescription = options.roleDescription;
                this.explorerRegions = new RegionPool(this);
                if ('addStyles' in this) {
                    this.addStyles(this.constructor.speechStyles);
                }
                const adaptor = this.adaptor;
                const SVGNS = 'http://www.w3.org/2000/svg';
                this.infoIcon = adaptor.node('mjx-help', {}, [
                    adaptor.node('svg', { viewBox: '0 0 18 18', xmlns: SVGNS, 'aria-hidden': 'true' }, [
                        adaptor.node('circle', { stroke: 'none' }, [], SVGNS),
                        adaptor.node('circle', {}, [], SVGNS),
                        adaptor.node('line', { x1: 9, y1: 9, x2: 9, y2: 13 }, [], SVGNS),
                        adaptor.node('line', { x1: 9, y1: 5.5, x2: 9, y2: 5.5 }, [], SVGNS),
                    ], SVGNS),
                ]);
                this.tmpFocus = this.adaptor.node('mjx-focus', {
                    tabIndex: 0,
                    style: {
                        outline: 'none',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: '-10px',
                        width: '1px',
                        height: '1px',
                        overflow: 'hidden',
                    },
                    role: mathItem.ariaRole,
                    'aria-label': mathItem.none,
                    'aria-roledescription': mathItem.none,
                });
            }
            explorable() {
                if (!this.processed.isSet('explorer')) {
                    if (this.options.enableExplorer) {
                        for (const math of this.math) {
                            math.explorable(this);
                        }
                    }
                    this.processed.set('explorer');
                }
                return this;
            }
            rerender(start) {
                const active = this.activeItem;
                const focus = active === null || active === void 0 ? void 0 : active.setTemporaryFocus(this);
                super.rerender(start);
                active === null || active === void 0 ? void 0 : active.clearTemporaryFocus(focus);
                return this;
            }
            state(state, restore = false) {
                super.state(state, restore);
                if (state < STATE.EXPLORER) {
                    this.processed.clear('explorer');
                }
                return this;
            }
        },
        _a.OPTIONS = Object.assign(Object.assign({}, BaseDocument.OPTIONS), { enableExplorer: hasWindow, renderActions: expandable(Object.assign(Object.assign({}, BaseDocument.OPTIONS.renderActions), { explorable: [STATE.EXPLORER] })), sre: expandable(Object.assign(Object.assign({}, BaseDocument.OPTIONS.sre), { speech: 'none' })), a11y: Object.assign(Object.assign({}, BaseDocument.OPTIONS.a11y), { align: 'top', backgroundColor: 'Blue', backgroundOpacity: 20, flame: false, foregroundColor: 'Black', foregroundOpacity: 100, highlight: 'None', hover: false, infoPrefix: false, infoRole: false, infoType: false, keyMagnifier: false, magnification: 'None', magnify: '400%', mouseMagnifier: false, subtitles: false, treeColoring: false, viewBraille: false, voicing: false, help: true, roleDescription: 'math', tabSelects: 'all' }) }),
        _a.speechStyles = {
            'mjx-container[has-speech="true"]': {
                position: 'relative',
                cursor: 'default',
            },
            'mjx-speech': {
                position: 'absolute',
                'z-index': -1,
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
            },
            'mjx-speech:focus': {
                outline: 'none',
            },
            'mjx-container .mjx-selected': {
                outline: '2px solid black',
            },
            'mjx-container > mjx-help': {
                display: 'none',
                position: 'absolute',
                top: '-.33em',
                right: '-.5em',
                width: '.6em',
                height: '.6em',
                cursor: 'pointer',
            },
            'mjx-container[display="true"] > mjx-help': {
                right: 0,
            },
            'mjx-help > svg': {
                stroke: 'black',
                width: '100%',
                height: '100%',
            },
            'mjx-help > svg > circle': {
                'stroke-width': '1.5px',
                cx: '9px',
                cy: '9px',
                r: '9px',
                fill: 'white',
            },
            'mjx-help > svg > circle:nth-child(2)': {
                fill: 'rgba(0, 0, 255, 0.2)',
                r: '7px',
            },
            'mjx-help > svg > line': {
                'stroke-width': '2.5px',
                'stroke-linecap': 'round',
            },
            'mjx-help:hover > svg > circle:nth-child(2)': {
                fill: 'white',
            },
            'mjx-container.mjx-explorer-active > mjx-help': {
                display: 'inline-flex',
                'align-items': 'center',
            },
            'mjx-help-sizer': {
                position: 'fixed',
                width: '40%',
                'max-width': '30em',
                top: '3em',
                left: '50%',
            },
            'mjx-help-dialog': {
                position: 'absolute',
                width: '200%',
                left: '-100%',
                border: '3px outset',
                'border-radius': '15px',
                color: 'black',
                'background-color': '#DDDDDD',
                'z-index': '301',
                'text-align': 'right',
                'font-style': 'normal',
                'text-indent': 0,
                'text-transform': 'none',
                'line-height': 'normal',
                'letter-spacing': 'normal',
                'word-spacing': 'normal',
                'word-wrap': 'normal',
                float: 'none',
                'box-shadow': '0px 10px 20px #808080',
                outline: 'none',
            },
            'mjx-help-dialog > h1': {
                'font-size': '24px',
                'text-align': 'center',
                margin: '.5em 0',
            },
            'mjx-help-dialog > div': {
                margin: '0 1em',
                padding: '3px',
                overflow: 'auto',
                height: '20em',
                border: '2px inset black',
                'background-color': 'white',
                'text-align': 'left',
            },
            'mjx-help-dialog > input': {
                margin: '.5em 2em',
            },
            'mjx-help-dialog kbd': {
                display: 'inline-block',
                padding: '3px 5px',
                'font-size': '11px',
                'line-height': '10px',
                color: '#444d56',
                'vertical-align': 'middle',
                'background-color': '#fafbfc',
                border: 'solid 1.5px #c6cbd1',
                'border-bottom-color': '#959da5',
                'border-radius': '3px',
                'box-shadow': 'inset -.5px -1px 0 #959da5',
            },
            'mjx-help-dialog ul': {
                'list-style-type': 'none',
            },
            'mjx-help-dialog li': {
                'margin-bottom': '.5em',
            },
            'mjx-help-background': {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
        },
        _a;
}
function ExplorerHandler(handler, MmlJax = null) {
    if (!handler.documentClass.prototype.attachSpeech) {
        handler = SpeechHandler(handler, MmlJax);
    }
    handler.documentClass = ExplorerMathDocumentMixin(handler.documentClass);
    return handler;
}
function setA11yOptions(document, options) {
    var _a;
    const sreOptions = engineSetup();
    for (const key in options) {
        if (document.options.a11y[key] !== undefined) {
            setA11yOption(document, key, options[key]);
        }
        else if (sreOptions[key] !== undefined) {
            document.options.sre[key] = options[key];
        }
    }
    if (options.roleDescription) {
        document.options.MathItem.roleDescription = options.roleDescription;
    }
    for (const item of document.math) {
        (_a = item === null || item === void 0 ? void 0 : item.explorers) === null || _a === void 0 ? void 0 : _a.attach();
    }
}
function setA11yOption(document, option, value) {
    switch (option) {
        case 'speechRules': {
            const [domain, style] = value.split('-');
            document.options.sre.domain = domain;
            document.options.sre.style = style;
            break;
        }
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
        case 'locale':
            document.options.sre.locale = value;
            break;
        default:
            document.options.a11y[option] = value;
    }
}
//# sourceMappingURL=explorer.js.map
;// ./components/mjs/a11y/explorer/lib/explorer.js












if (MathJax.loader) {
  MathJax.loader.checkVersion('a11y/explorer', VERSION, 'a11y');
}

combineWithMathJax({_: {
  a11y: {
    explorer_ts: explorer_namespaceObject,
    explorer: {
      Explorer: Explorer_namespaceObject,
      ExplorerPool: ExplorerPool_namespaceObject,
      Highlighter: Highlighter_namespaceObject,
      KeyExplorer: KeyExplorer_namespaceObject,
      MouseExplorer: MouseExplorer_namespaceObject,
      Region: Region_namespaceObject,
      TreeExplorer: TreeExplorer_namespaceObject
    }
  }
}});

;// ./components/mjs/a11y/explorer/explorer.js





if (MathJax.startup && hasWindow) {
  MathJax.startup.extendHandler(handler => ExplorerHandler(handler));
}

/******/ })()
;
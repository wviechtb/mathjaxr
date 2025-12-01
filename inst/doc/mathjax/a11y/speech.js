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

// NAMESPACE OBJECT: ./mjs/a11y/speech/SpeechUtil.js
var SpeechUtil_namespaceObject = {};
__webpack_require__.r(SpeechUtil_namespaceObject);
__webpack_require__.d(SpeechUtil_namespaceObject, {
  InPlace: () => (InPlace),
  SemAttr: () => (SemAttr),
  buildLabel: () => (buildLabel),
  buildSpeech: () => (buildSpeech),
  honk: () => (honk),
  ssmlParsing: () => (ssmlParsing)
});

// NAMESPACE OBJECT: ./mjs/a11y/speech/GeneratorPool.js
var GeneratorPool_namespaceObject = {};
__webpack_require__.r(GeneratorPool_namespaceObject);
__webpack_require__.d(GeneratorPool_namespaceObject, {
  GeneratorPool: () => (GeneratorPool)
});

// NAMESPACE OBJECT: ./mjs/a11y/speech/WebWorker.js
var WebWorker_namespaceObject = {};
__webpack_require__.r(WebWorker_namespaceObject);
__webpack_require__.d(WebWorker_namespaceObject, {
  WorkerHandler: () => (WorkerHandler)
});

// NAMESPACE OBJECT: ./mjs/a11y/speech.js
var speech_namespaceObject = {};
__webpack_require__.r(speech_namespaceObject);
__webpack_require__.d(speech_namespaceObject, {
  SpeechHandler: () => (SpeechHandler),
  SpeechMathDocumentMixin: () => (SpeechMathDocumentMixin),
  SpeechMathItemMixin: () => (SpeechMathItemMixin)
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
;// ./components/mjs/a11y/semantic-enrich/lib/a11y/semantic-enrich.js
const semantic_enrich_def = MathJax._.a11y['semantic-enrich'];
const enrichVisitor = semantic_enrich_def.enrichVisitor;
const EnrichedMathItemMixin = semantic_enrich_def.EnrichedMathItemMixin;
const EnrichedMathDocumentMixin = semantic_enrich_def.EnrichedMathDocumentMixin;
const EnrichHandler = semantic_enrich_def.EnrichHandler;

;// ./components/mjs/core/lib/core/MathItem.js
const MathItem_def = MathJax._.core.MathItem;
const protoItem = MathItem_def.protoItem;
const AbstractMathItem = MathItem_def.AbstractMathItem;
const STATE = MathItem_def.STATE;
const newState = MathItem_def.newState;

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

;// ./mjs/a11y/speech/SpeechUtil.js

const ProsodyKeys = ['pitch', 'rate', 'volume'];
function ssmlParsing(speech) {
    const xml = parseDOM(speech);
    const instr = [];
    const text = [];
    recurseSsml(Array.from(xml.childNodes), instr, text);
    return [text.join(' '), instr];
}
function recurseSsml(nodes, instr, text, prosody = {}) {
    for (const node of nodes) {
        if (node.nodeType === 3) {
            const content = node.textContent.trim();
            if (content) {
                text.push(content);
                instr.push(Object.assign({ text: content }, prosody));
            }
            continue;
        }
        if (node.nodeType === 1) {
            const element = node;
            const tag = element.tagName;
            if (tag === 'speak') {
                continue;
            }
            if (tag === 'prosody') {
                recurseSsml(Array.from(node.childNodes), instr, text, getProsody(element, prosody));
                continue;
            }
            switch (tag) {
                case 'break':
                    instr.push({ pause: element.getAttribute('time') });
                    break;
                case 'mark':
                    instr.push({ mark: element.getAttribute('name') });
                    break;
                case 'say-as': {
                    const txt = element.textContent;
                    instr.push(Object.assign({ text: txt, character: true }, prosody));
                    text.push(txt);
                    break;
                }
            }
        }
    }
}
const combinePros = {
    pitch: (x, _sign) => 1 * (x / 100),
    volume: (x, _sign) => 0.5 * (x / 100),
    rate: (x, _sign) => 1 * (x / 100),
};
function getProsody(element, prosody) {
    const combine = {};
    for (const pros of ProsodyKeys) {
        if (element.hasAttribute(pros)) {
            const [sign, value] = extractProsody(element.getAttribute(pros));
            if (!sign) {
                combine[pros] = pros === 'volume' ? 0.5 : 1;
                continue;
            }
            let orig = prosody[pros];
            orig = orig ? orig : pros === 'volume' ? 0.5 : 1;
            const relative = combinePros[pros](parseInt(value, 10), sign);
            combine[pros] = sign === '-' ? orig - relative : orig + relative;
        }
    }
    return combine;
}
const prosodyRegexp = /([+-]?)([0-9]+)%/;
function extractProsody(attr) {
    const match = attr.match(prosodyRegexp);
    if (!match) {
        console.warn('Something went wrong with the prosody matching.');
        return ['', '100'];
    }
    return [match[1], match[2]];
}
function buildLabel(speech, prefix, postfix, sep = ' ') {
    if (!speech) {
        return '';
    }
    const label = [speech];
    if (prefix) {
        label.unshift(prefix);
    }
    if (postfix) {
        label.push(postfix);
    }
    return label.join(sep);
}
function buildSpeech(speech, locale = 'en', rate = '100') {
    return ssmlParsing('<?xml version="1.0"?><speak version="1.1"' +
        ' xmlns="http://www.w3.org/2001/10/synthesis"' +
        ` xml:lang="${locale}">` +
        `<prosody rate="${rate}%">${speech}` +
        '</prosody></speak>');
}
function honk() {
    const ac = new AudioContext();
    const os = ac.createOscillator();
    os.frequency.value = 300;
    os.connect(ac.destination);
    os.start(ac.currentTime);
    os.stop(ac.currentTime + 0.05);
}
var InPlace;
(function (InPlace) {
    InPlace[InPlace["NONE"] = 0] = "NONE";
    InPlace[InPlace["DEPTH"] = 1] = "DEPTH";
    InPlace[InPlace["SUMMARY"] = 2] = "SUMMARY";
})(InPlace || (InPlace = {}));
var SemAttr;
(function (SemAttr) {
    SemAttr["SPEECH"] = "data-semantic-speech-none";
    SemAttr["SPEECH_SSML"] = "data-semantic-speech";
    SemAttr["SUMMARY"] = "data-semantic-summary-none";
    SemAttr["SUMMARY_SSML"] = "data-semantic-summary";
    SemAttr["PREFIX"] = "data-semantic-prefix-none";
    SemAttr["PREFIX_SSML"] = "data-semantic-prefix";
    SemAttr["POSTFIX"] = "data-semantic-postfix-none";
    SemAttr["POSTFIX_SSML"] = "data-semantic-postfix";
    SemAttr["BRAILLE"] = "data-semantic-braille";
})(SemAttr || (SemAttr = {}));
//# sourceMappingURL=SpeechUtil.js.map
;// ./mjs/a11y/speech/GeneratorPool.js

class GeneratorPool {
    constructor() {
        this.promise = Promise.resolve();
        this.adaptor = null;
        this._options = {};
        this._init = false;
    }
    set element(element) {
        this._element = element;
    }
    get element() {
        return this._element;
    }
    set options(options) {
        this._options = Object.assign({}, (options === null || options === void 0 ? void 0 : options.sre) || {}, {
            enableSpeech: options.enableSpeech,
            enableBraille: options.enableBraille,
        });
        delete this._options.custom;
    }
    get options() {
        return this._options;
    }
    init(options, adaptor, webworker) {
        this.options = options;
        if (this._init)
            return;
        this.adaptor = adaptor;
        this.webworker = webworker;
        this._init = true;
    }
    update(options) {
        Object.assign(this.options, options);
    }
    Speech(item) {
        const mml = item.outputData.mml;
        const options = Object.assign({}, this.options, { modality: 'speech' });
        return (this.promise = this.webworker.Speech(mml, options, item));
    }
    SpeechFor(item, mml) {
        const options = Object.assign({}, this.options, { modality: 'speech' });
        return this.webworker.speechFor(mml, options, item);
    }
    cancel(item) {
        var _a;
        (_a = this.webworker) === null || _a === void 0 ? void 0 : _a.Cancel(item);
    }
    updateRegions(node, speechRegion, brailleRegion) {
        speechRegion.Update(this.getLabel(node));
        brailleRegion.Update(this.getBraille(node));
    }
    getOptions(node) {
        var _a, _b, _c, _d;
        return {
            locale: (_a = this.adaptor.getAttribute(node, 'data-semantic-locale')) !== null && _a !== void 0 ? _a : '',
            domain: (_b = this.adaptor.getAttribute(node, 'data-semantic-domain')) !== null && _b !== void 0 ? _b : '',
            style: (_c = this.adaptor.getAttribute(node, 'data-semantic-style')) !== null && _c !== void 0 ? _c : '',
            domain2style: (_d = this.adaptor.getAttribute(node, 'data-semantic-domain2style')) !== null && _d !== void 0 ? _d : '',
        };
    }
    nextRules(item) {
        const options = this.getOptions(item.typesetRoot);
        this.update(options);
        return (this.promise = this.webworker.nextRules(item.outputData.mml, Object.assign({}, this.options, { modality: 'speech' }), item));
    }
    nextStyle(node, item) {
        const options = this.getOptions(item.typesetRoot);
        this.update(options);
        return (this.promise = this.webworker.nextStyle(item.outputData.mml, Object.assign({}, this.options, { modality: 'speech' }), this.adaptor.getAttribute(node, 'data-semantic-id'), item));
    }
    getLabel(node, _center = '', sep = ' ') {
        const adaptor = this.adaptor;
        return (buildLabel(adaptor.getAttribute(node, SemAttr.SPEECH_SSML), adaptor.getAttribute(node, SemAttr.PREFIX_SSML), adaptor.getAttribute(node, SemAttr.POSTFIX_SSML), sep) || adaptor.getAttribute(node, 'aria-label'));
    }
    getBraille(node) {
        const adaptor = this.adaptor;
        return (adaptor.getAttribute(node, 'aria-braillelabel') ||
            adaptor.getAttribute(node, SemAttr.BRAILLE));
    }
    getLocalePreferences(prefs) {
        return (this.promise = this.webworker.clearspeakLocalePreferences(this.options, prefs));
    }
    getRelevantPreferences(item, semantic, prefs, counter) {
        const mml = item.outputData.mml;
        return (this.promise = this.webworker.clearspeakRelevantPreferences(mml, semantic, prefs, counter));
    }
}
//# sourceMappingURL=GeneratorPool.js.map
;// ./mjs/a11y/speech/WebWorker.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Task {
    constructor(cmd, item, resolve, reject) {
        this.cmd = cmd;
        this.item = item;
        this.resolve = resolve;
        this.reject = reject;
    }
}
class WorkerHandler {
    constructor(adaptor, options) {
        this.adaptor = adaptor;
        this.options = options;
        this.ready = false;
        this.tasks = [];
        this.Commands = {
            Ready(handler, _data) {
                handler.ready = true;
                handler.postNext();
            },
            Finished(handler, data) {
                const task = handler.tasks.shift();
                if (data.success) {
                    task.resolve(data.result);
                }
                else {
                    task.reject(data.error);
                }
                handler.postNext();
            },
            Log(handler, data) {
                if (handler.options.debug) {
                    console.log('Log:', data);
                }
            },
        };
    }
    Start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.ready)
                throw Error('Worker already started');
            this.worker = yield this.adaptor.createWorker(this.Listener.bind(this), this.options);
        });
    }
    debug(msg, ...rest) {
        if (this.options.debug) {
            console.info(msg, ...rest);
        }
    }
    Listener(event) {
        this.debug('Worker  >>>  Client:', event.data);
        if (Object.hasOwn(this.Commands, event.data.cmd)) {
            this.Commands[event.data.cmd](this, event.data.data);
        }
        else {
            this.debug('Invalid command from worker: ' + event.data.cmd);
        }
    }
    Post(msg, item) {
        const promise = new Promise((resolve, reject) => {
            this.tasks.push(new Task(msg, item, resolve, reject));
        });
        if (this.ready && this.tasks.length === 1) {
            this.postNext();
        }
        return promise;
    }
    postNext() {
        if (this.tasks.length) {
            const msg = Object.assign({}, this.tasks[0].cmd, {
                debug: this.options.debug,
            });
            this.worker.postMessage(msg);
        }
    }
    Cancel(item) {
        const i = this.tasks.findIndex((task) => task.item === item);
        if (i > 0) {
            this.tasks[i].reject(`Task ${this.tasks[i].cmd.cmd} cancelled`);
            this.tasks.splice(i, 1);
        }
    }
    Setup(options) {
        return this.Post({
            cmd: 'setup',
            data: {
                domain: options.domain,
                style: options.style,
                locale: options.locale,
                modality: options.modality,
            },
        });
    }
    Speech(math, options, item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.Attach(item, options.enableSpeech, options.enableBraille, yield this.Post({
                cmd: 'speech',
                data: { mml: math, options: options },
            }, item));
        });
    }
    nextRules(math, options, item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.Attach(item, options.enableSpeech, options.enableBraille, yield this.Post({
                cmd: 'nextRules',
                data: { mml: math, options: options },
            }, item));
        });
    }
    nextStyle(math, options, nodeId, item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.Attach(item, options.enableSpeech, options.enableBraille, yield this.Post({
                cmd: 'nextStyle',
                data: {
                    mml: math,
                    options: options,
                    nodeId: nodeId,
                },
            }, item));
        });
    }
    speechFor(math, options, item) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.Post({
                cmd: 'speech',
                data: { mml: math, options: options },
            }, item);
            return JSON.parse(data);
        });
    }
    Attach(item, speech, braille, structure) {
        const data = JSON.parse(structure);
        const container = item.typesetRoot;
        if (!container)
            return;
        this.setSpecialAttributes(container, data.options, 'data-semantic-', [
            'locale',
            'domain',
            'style',
            'domain2style',
        ]);
        const adaptor = this.adaptor;
        this.setSpecialAttributes(container, data.translations, 'data-semantic-');
        for (const [id, sid] of Object.entries(data.mactions)) {
            let node = adaptor.getElement('#' + id, container);
            if (!node || !adaptor.childNodes(node)[0]) {
                continue;
            }
            node = adaptor.childNodes(node)[0];
            adaptor.setAttribute(node, 'data-semantic-type', 'dummy');
            this.setSpecialAttributes(node, sid, '');
        }
        this.setSpeechAttributes(adaptor.childNodes(container)[0], '', data, speech, braille);
        if (speech) {
            if (data.label) {
                adaptor.setAttribute(container, SemAttr.SPEECH, data.label);
                adaptor.setAttribute(container, SemAttr.SPEECH_SSML, data.ssml);
                item.outputData.speech = data.label;
            }
            adaptor.setAttribute(container, 'data-speech-attached', 'true');
        }
        if (braille) {
            if (data.braillelabel) {
                adaptor.setAttribute(container, SemAttr.BRAILLE, data.braillelabel);
                item.outputData.braille = data.braillelabel;
            }
            if (data.braille) {
                adaptor.setAttribute(container, 'data-braille-attached', 'true');
            }
        }
    }
    setSpeechAttribute(node, data, speech, braille) {
        var _a, _b;
        const adaptor = this.adaptor;
        const id = adaptor.getAttribute(node, 'data-semantic-id');
        adaptor.removeAttribute(node, 'data-speech-node');
        if (speech && data.speech[id]['speech-none']) {
            adaptor.setAttribute(node, 'data-speech-node', 'true');
            for (let [key, value] of Object.entries(data.speech[id])) {
                key = key.replace(/-ssml$/, '');
                if (value) {
                    adaptor.setAttribute(node, `data-semantic-${key}`, value);
                }
            }
        }
        if (braille && ((_b = (_a = data.braille) === null || _a === void 0 ? void 0 : _a[id]) === null || _b === void 0 ? void 0 : _b['braille-none'])) {
            adaptor.setAttribute(node, 'data-speech-node', 'true');
            const value = data.braille[id]['braille-none'];
            adaptor.setAttribute(node, SemAttr.BRAILLE, value);
        }
    }
    setSpeechAttributes(root, rootId, data, speech, braille) {
        const adaptor = this.adaptor;
        if (!root ||
            adaptor.kind(root) === '#text' ||
            adaptor.kind(root) === '#comment') {
            return rootId;
        }
        root = root;
        if (adaptor.hasAttribute(root, 'data-semantic-id')) {
            this.setSpeechAttribute(root, data, speech, braille);
            if (!rootId && !adaptor.hasAttribute(root, 'data-semantic-parent')) {
                rootId = adaptor.getAttribute(root, 'data-semantic-id');
            }
        }
        for (const child of Array.from(adaptor.childNodes(root))) {
            rootId = this.setSpeechAttributes(child, rootId, data, speech, braille);
        }
        return rootId;
    }
    setSpecialAttributes(node, map, prefix, keys) {
        if (!map)
            return;
        keys = keys || Object.keys(map);
        for (const key of keys) {
            const value = map[key];
            if (value) {
                this.adaptor.setAttribute(node, `${prefix}${key.toLowerCase()}`, value);
            }
        }
    }
    Detach(item) {
        const container = item.typesetRoot;
        this.adaptor.removeAttribute(container, 'data-speech-attached');
        this.adaptor.removeAttribute(container, 'data-braille-attached');
        this.detachSpeech(container);
    }
    detachSpeech(node) {
        const adaptor = this.adaptor;
        const children = adaptor.childNodes(node);
        if (!children)
            return;
        if (adaptor.kind(node) !== '#text') {
            for (const key of [
                'none',
                'summary-none',
                'speech',
                'speech-none',
                'summary',
                'braille',
            ]) {
                adaptor.removeAttribute(node, `data-semantic-${key}`);
            }
        }
        for (const child of children) {
            this.detachSpeech(child);
        }
    }
    Terminate() {
        this.debug('Terminating pending tasks');
        for (const task of this.tasks) {
            task.reject(`${task.cmd.data.cmd} cancelled by WorkerHandler termination`);
        }
        this.tasks = [];
        this.debug('Terminating worker');
        return this.worker.terminate();
    }
    Stop() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.worker) {
                throw Error('Worker has not been started');
            }
            yield this.Terminate();
            this.worker = null;
            this.ready = false;
        });
    }
    clearspeakLocalePreferences(options, prefs) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Post({
                cmd: 'localePreferences',
                data: {
                    options: options,
                },
            }).then((data) => {
                prefs.set(options.locale, JSON.parse(data));
            });
        });
    }
    clearspeakRelevantPreferences(math, nodeId, prefs, counter) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Post({
                cmd: 'relevantPreferences',
                data: {
                    mml: math,
                    id: nodeId,
                },
            }).then((e) => {
                prefs.set(counter, e);
            });
        });
    }
}
//# sourceMappingURL=WebWorker.js.map
;// ./components/root-pack.js
//
//  Replacement for __dirname for root directory
//



const config = global_MathJax.config || {};
const mjxRoot = () => config?.loader?.paths?.mathjax || config?.__dirname || '/';

;// ./mjs/components/mjs/sre-root.js
//
//  Replacement for __dirname for sre-root directory
//



const sreRoot = () => mjxRoot() + '/sre';

;// ./mjs/a11y/speech.js
var speech_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






newState('ATTACHSPEECH', STATE.INSERTED + 10);
function SpeechMathItemMixin(EnrichedMathItem) {
    return class extends EnrichedMathItem {
        constructor() {
            super(...arguments);
            this.generatorPool = new GeneratorPool();
        }
        attachSpeech(document) {
            this.outputData.speechPromise = null;
            if (this.state() >= STATE.ATTACHSPEECH)
                return;
            this.state(STATE.ATTACHSPEECH);
            if (this.isEscaped ||
                !(document.options.enableSpeech || document.options.enableBraille) ||
                !document.options.enableEnrichment) {
                return;
            }
            document.getWebworker();
            this.generatorPool.init(document.options, document.adaptor, document.webworker);
            this.outputData.mml = this.toMathML(this.root, this);
            const promise = this.generatorPool
                .Speech(this)
                .catch((err) => document.options.speechError(document, this, err));
            document.savePromise(promise);
            this.outputData.speechPromise = promise;
        }
        detachSpeech(document) {
            document.webworker.Detach(this);
        }
        speechFor(mml) {
            return speech_awaiter(this, void 0, void 0, function* () {
                mml = this.toEnriched(mml);
                const data = yield this.generatorPool.SpeechFor(this, mml);
                return [data.label, data.braillelabel];
            });
        }
        clear() {
            this.generatorPool.cancel(this);
        }
    };
}
function SpeechMathDocumentMixin(EnrichedMathDocument) {
    var _a;
    return _a = class extends EnrichedMathDocument {
            constructor(...args) {
                super(...args);
                this.webworker = null;
                const ProcessBits = this.constructor
                    .ProcessBits;
                if (!ProcessBits.has('attach-speech')) {
                    ProcessBits.allocate('attach-speech');
                }
                this.options.MathItem = SpeechMathItemMixin(this.options.MathItem);
            }
            getWebworker() {
                if (this.webworker)
                    return;
                this.webworker = new WorkerHandler(this.adaptor, this.options.worker);
                this.webworker.Start();
            }
            attachSpeech() {
                if (!this.processed.isSet('attach-speech')) {
                    const options = this.options;
                    if (options.enableEnrichment &&
                        (options.enableSpeech || options.enableBraille)) {
                        this.getWebworker();
                        for (const math of this.math) {
                            math.attachSpeech(this);
                        }
                    }
                    this.processed.set('attach-speech');
                }
                return this;
            }
            speechError(_doc, _math, err) {
                console.warn('Speech generation error:', err);
            }
            state(state, restore = false) {
                super.state(state, restore);
                if (state < STATE.ATTACHSPEECH) {
                    this.processed.clear('attach-speech');
                    if (state >= STATE.TYPESET) {
                        for (const math of this.math) {
                            math.detachSpeech(this);
                        }
                    }
                }
                return this;
            }
            done() {
                const _super = Object.create(null, {
                    done: { get: () => super.done }
                });
                return speech_awaiter(this, void 0, void 0, function* () {
                    var _b;
                    yield ((_b = this.webworker) === null || _b === void 0 ? void 0 : _b.Stop());
                    return _super.done.call(this);
                });
            }
        },
        _a.OPTIONS = Object.assign(Object.assign({}, EnrichedMathDocument.OPTIONS), { enableSpeech: true, enableBraille: true, speechError: (doc, math, err) => doc.speechError(doc, math, err), renderActions: expandable(Object.assign(Object.assign({}, EnrichedMathDocument.OPTIONS.renderActions), { attachSpeech: [STATE.ATTACHSPEECH] })), worker: {
                path: sreRoot(),
                maps: sreRoot().replace(/[cm]js\/a11y\/sre$/, 'bundle/sre/mathmaps'),
                worker: 'speech-worker.js',
                debug: false,
            }, a11y: expandable({
                speech: true,
                braille: true,
            }) }),
        _a;
}
function SpeechHandler(handler, MmlJax) {
    if (!handler.documentClass.prototype.enrich && MmlJax) {
        handler = EnrichHandler(handler, MmlJax);
    }
    handler.documentClass = SpeechMathDocumentMixin(handler.documentClass);
    return handler;
}
//# sourceMappingURL=speech.js.map
;// ./components/mjs/a11y/speech/lib/speech.js








if (MathJax.loader) {
  MathJax.loader.checkVersion('a11y/speech', VERSION, 'a11y');
}

combineWithMathJax({_: {
  a11y: {
    speech_ts: speech_namespaceObject,
    speech: {
      GeneratorPool: GeneratorPool_namespaceObject,
      SpeechUtil: SpeechUtil_namespaceObject,
      WebWorker: WebWorker_namespaceObject
    }
  }
}});

;// ./components/mjs/core/lib/util/FunctionList.js
const FunctionList_def = MathJax._.util.FunctionList;
const FunctionList = FunctionList_def.FunctionList;

;// ./mjs/components/mjs/root.js
//
//  Replacement for __dirname for root directory
//



const root_config = global_MathJax.config || {};
const root_mjxRoot = () => root_config?.loader?.paths?.mathjax || root_config?.__dirname || '/';

;// ./components/mjs/core/lib/util/context.js
const context_def = MathJax._.util.context;
const hasWindow = context_def.hasWindow;
const context = context_def.context;

;// ./mjs/components/loader.js
var loader_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const PathFilters = {
    source: (data) => {
        if (Object.hasOwn(CONFIG.source, data.name)) {
            data.name = CONFIG.source[data.name];
        }
        return true;
    },
    normalize: (data) => {
        const name = data.name;
        if (!name.match(/^(?:[a-z]+:\/)?\/|[a-z]:\\|\[/i)) {
            data.name = '[mathjax]/' + name.replace(/^\.\//, '');
        }
        return true;
    },
    prefix: (data) => {
        let match;
        while ((match = data.name.match(/^\[([^\]]*)\]/))) {
            if (!Object.hasOwn(CONFIG.paths, match[1]))
                break;
            data.name = CONFIG.paths[match[1]] + data.name.substring(match[0].length);
        }
        return true;
    },
    addExtension: (data) => {
        if (data.addExtension && !data.name.match(/\.[^/]+$/)) {
            data.name += '.js';
        }
        return true;
    },
};
const loader_VERSION = global_MathJax.version;
const Loader = {
    versions: new Map(),
    nestedLoads: [],
    ready(...names) {
        if (names.length === 0) {
            names = Array.from(Package.packages.keys());
        }
        const promises = [];
        for (const name of names) {
            const extension = Package.packages.get(name) || new Package(name, true);
            promises.push(extension.promise);
        }
        return Promise.all(promises);
    },
    load(...names) {
        if (names.length === 0) {
            return Promise.resolve([]);
        }
        let nested = [];
        this.nestedLoads.unshift(nested);
        const promise = Promise.resolve().then(() => loader_awaiter(this, void 0, void 0, function* () {
            const promises = [];
            for (const name of names) {
                let extension = Package.packages.get(name);
                if (!extension) {
                    extension = new Package(name);
                    extension.provides(CONFIG.provides[name]);
                }
                extension.checkNoLoad();
                promises.push(extension.promise.then(() => {
                    if (CONFIG.versionWarnings &&
                        extension.isLoaded &&
                        !Loader.versions.has(Package.resolvePath(name))) {
                        console.warn(`No version information available for component ${name}`);
                    }
                    return extension.result;
                }));
            }
            Package.loadAll();
            const result = yield Promise.all(promises);
            while (nested.length) {
                const promise = Promise.all(nested);
                nested = this.nestedLoads[this.nestedLoads.indexOf(nested)] = [];
                yield promise;
            }
            this.nestedLoads.splice(this.nestedLoads.indexOf(nested), 1);
            return result;
        }));
        this.nestedLoads
            .slice(1)
            .forEach((list) => list.push(promise));
        return promise;
    },
    preLoaded(...names) {
        for (const name of names) {
            let extension = Package.packages.get(name);
            if (!extension) {
                extension = new Package(name, true);
                extension.provides(CONFIG.provides[name]);
            }
            extension.loaded();
        }
    },
    addPackageData(name, data) {
        let config = CONFIG[name];
        if (!config) {
            config = CONFIG[name] = {};
        }
        for (const [key, value] of Object.entries(data)) {
            if (Array.isArray(value)) {
                if (!config[key]) {
                    config[key] = [];
                }
                const set = new Set([...config[key], ...value]);
                config[key] = [...set];
            }
            else {
                config[key] = value;
            }
        }
    },
    defaultReady() {
        if (typeof loader_MathJax.startup !== 'undefined') {
            loader_MathJax.config.startup.ready();
        }
    },
    getRoot() {
        if (context.document) {
            const script = context.document.currentScript ||
                context.document.getElementById('MathJax-script');
            if (script && script instanceof HTMLScriptElement) {
                return script.src.replace(/\/[^/]*$/, '');
            }
        }
        return root_mjxRoot();
    },
    checkVersion(name, version, _type) {
        this.saveVersion(name);
        if (CONFIG.versionWarnings && version !== loader_VERSION) {
            console.warn(`Component ${name} uses ${version} of MathJax; version in use is ${loader_VERSION}`);
            return true;
        }
        return false;
    },
    saveVersion(name) {
        Loader.versions.set(Package.resolvePath(name), loader_VERSION);
    },
    pathFilters: new FunctionList(),
};
Loader.pathFilters.add(PathFilters.source, 0);
Loader.pathFilters.add(PathFilters.normalize, 10);
Loader.pathFilters.add(PathFilters.prefix, 20);
Loader.pathFilters.add(PathFilters.addExtension, 30);
const loader_MathJax = global_MathJax;
if (typeof loader_MathJax.loader === 'undefined') {
    combineDefaults(loader_MathJax.config, 'loader', {
        paths: {
            mathjax: Loader.getRoot(),
        },
        source: {},
        dependencies: {},
        provides: {},
        load: [],
        ready: Loader.defaultReady.bind(Loader),
        failed: (error) => console.log(`MathJax(${error.package || '?'}): ${error.message}`),
        require: null,
        pathFilters: [],
        versionWarnings: true,
    });
    combineWithMathJax({
        loader: Loader,
    });
    for (const filter of loader_MathJax.config.loader.pathFilters) {
        if (Array.isArray(filter)) {
            Loader.pathFilters.add(filter[0], filter[1]);
        }
        else {
            Loader.pathFilters.add(filter);
        }
    }
}
const CONFIG = loader_MathJax.config.loader;
//# sourceMappingURL=loader.js.map
;// ./mjs/components/package.js


class PackageError extends Error {
    constructor(message, name) {
        super(message);
        this.package = name;
    }
}
class Package {
    get canLoad() {
        return (this.dependencyCount === 0 &&
            !this.noLoad &&
            !this.isLoading &&
            !this.hasFailed);
    }
    static loadPromise(name) {
        const config = (CONFIG[name] || {});
        const promise = config.extraLoads
            ? Loader.load(...config.extraLoads)
            : Promise.resolve();
        const checkReady = config.checkReady || (() => Promise.resolve());
        return promise.then(() => checkReady());
    }
    static resolvePath(name, addExtension = true) {
        const data = { name, original: name, addExtension };
        Loader.pathFilters.execute(data);
        return data.name;
    }
    static loadAll() {
        for (const extension of this.packages.values()) {
            if (extension.canLoad) {
                extension.load();
            }
        }
    }
    constructor(name, noLoad = false) {
        this.isLoaded = false;
        this.result = {};
        this.isLoading = false;
        this.hasFailed = false;
        this.dependents = [];
        this.dependencies = [];
        this.dependencyCount = 0;
        this.provided = [];
        this.name = name;
        this.noLoad = noLoad;
        Package.packages.set(name, this);
        this.promise = this.makePromise(this.makeDependencies());
    }
    makeDependencies() {
        const promises = [];
        const map = Package.packages;
        const noLoad = this.noLoad;
        const name = this.name;
        const dependencies = [];
        if (Object.hasOwn(CONFIG.dependencies, name)) {
            dependencies.push(...CONFIG.dependencies[name]);
        }
        else if (name !== 'core') {
            dependencies.push('core');
        }
        for (const dependent of dependencies) {
            const extension = map.get(dependent) || new Package(dependent, noLoad);
            if (!this.dependencies.includes(extension)) {
                extension.addDependent(this, noLoad);
                this.dependencies.push(extension);
                if (!extension.isLoaded) {
                    this.dependencyCount++;
                    promises.push(extension.promise);
                }
            }
        }
        return promises;
    }
    makePromise(promises) {
        let promise = new Promise(((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        }));
        const config = (CONFIG[this.name] || {});
        if (config.ready) {
            promise = promise.then((_name) => config.ready(this.name));
        }
        if (promises.length) {
            promises.push(promise);
            promise = Promise.all(promises).then((names) => names.join(', '));
        }
        if (config.failed) {
            promise.catch((message) => config.failed(new PackageError(message, this.name)));
        }
        return promise;
    }
    load() {
        if (!this.isLoaded && !this.isLoading && !this.noLoad) {
            this.isLoading = true;
            const url = Package.resolvePath(this.name);
            if (CONFIG.require) {
                this.loadCustom(url);
            }
            else {
                this.loadScript(url);
            }
        }
    }
    loadCustom(url) {
        try {
            const result = CONFIG.require(url);
            if (result instanceof Promise) {
                result
                    .then((result) => (this.result = result))
                    .then(() => this.checkLoad())
                    .catch((err) => this.failed('Can\'t load "' + url + '"\n' + err.message.trim()));
            }
            else {
                this.result = result;
                this.checkLoad();
            }
        }
        catch (err) {
            this.failed(err.message);
        }
    }
    loadScript(url) {
        const script = context.document.createElement('script');
        script.src = url;
        script.charset = 'UTF-8';
        script.onload = (_event) => this.checkLoad();
        script.onerror = (_event) => this.failed('Can\'t load "' + url + '"');
        context.document.head.appendChild(script);
    }
    loaded() {
        this.isLoaded = true;
        this.isLoading = false;
        for (const dependent of this.dependents) {
            dependent.requirementSatisfied();
        }
        for (const provided of this.provided) {
            provided.loaded();
        }
        this.resolve(this.name);
    }
    failed(message) {
        this.hasFailed = true;
        this.isLoading = false;
        this.reject(new PackageError(message, this.name));
    }
    checkLoad() {
        Package.loadPromise(this.name)
            .then(() => this.loaded())
            .catch((message) => this.failed(message));
    }
    requirementSatisfied() {
        if (this.dependencyCount) {
            this.dependencyCount--;
            if (this.canLoad) {
                this.load();
            }
        }
    }
    provides(names = []) {
        for (const name of names) {
            let provided = Package.packages.get(name);
            if (!provided) {
                if (!CONFIG.dependencies[name]) {
                    CONFIG.dependencies[name] = [];
                }
                CONFIG.dependencies[name].push(name);
                provided = new Package(name, true);
                provided.isLoading = true;
            }
            this.provided.push(provided);
        }
    }
    addDependent(extension, noLoad) {
        this.dependents.push(extension);
        if (!noLoad) {
            this.checkNoLoad();
        }
    }
    checkNoLoad() {
        if (this.noLoad) {
            this.noLoad = false;
            for (const dependency of this.dependencies) {
                dependency.checkNoLoad();
            }
        }
    }
}
Package.packages = new Map();
//# sourceMappingURL=package.js.map
;// ./components/mjs/a11y/speech/speech.js







if (MathJax.loader) {
  let path = Package.resolvePath('[sre]', false);
  let maps = Package.resolvePath('[mathmaps]', false);
  if (hasWindow) {
    path = new URL(path, location).href;
    maps = new URL(maps, location).href;
  } else {
    const REQUIRE = typeof require !== 'undefined' ? require : MathJax.config.loader.require;
    if (REQUIRE?.resolve) {
      path = REQUIRE.resolve(`${path}/require.mjs`).replace(/\/[^\/]*$/, '');
      maps = REQUIRE.resolve(`${maps}/base.json`).replace(/\/[^\/]*$/, '');
    } else {
      path = maps = '';
    }
  }
  if (path) {
    combineDefaults(MathJax.config, 'options', { worker: { path, maps } });
  }
}

if (MathJax.startup) {
  MathJax.startup.extendHandler(handler => SpeechHandler(handler));
}

/******/ })()
;
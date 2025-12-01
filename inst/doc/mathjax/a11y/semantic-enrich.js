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

// NAMESPACE OBJECT: ./mjs/a11y/semantic-enrich.js
var semantic_enrich_namespaceObject = {};
__webpack_require__.r(semantic_enrich_namespaceObject);
__webpack_require__.d(semantic_enrich_namespaceObject, {
  EnrichHandler: () => (EnrichHandler),
  EnrichedMathDocumentMixin: () => (EnrichedMathDocumentMixin),
  EnrichedMathItemMixin: () => (EnrichedMathItemMixin),
  enrichVisitor: () => (enrichVisitor)
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

;// ./components/mjs/core/lib/core/MmlTree/SerializedMmlVisitor.js
const SerializedMmlVisitor_def = MathJax._.core.MmlTree.SerializedMmlVisitor;
const SerializedMmlVisitor = SerializedMmlVisitor_def.SerializedMmlVisitor;

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

;// ./mjs/a11y/semantic-enrich.js




newState('ENRICHED', STATE.COMPILED + 10);
class enrichVisitor extends SerializedMmlVisitor {
    visitTree(node, math) {
        this.mactionId = 0;
        const mml = super.visitTree(node);
        if (this.mactionId) {
            math.inputData.hasMaction = true;
        }
        return mml;
    }
    visitHtmlNode(node, _space) {
        return node.getSerializedXML();
    }
    visitMactionNode(node, space) {
        const [nl, endspace] = node.childNodes.length === 0 ? ['', ''] : ['\n', space];
        const children = this.childNodeMml(node, space + '  ', nl);
        let attributes = this.getAttributes(node);
        if (node.attributes.get('actiontype') === 'toggle') {
            const id = ++this.mactionId;
            node.setProperty('mactionId', id);
            attributes =
                ` data-maction-id="${id}" selection="${node.attributes.get('selection')}"` +
                    attributes
                        .replace(/ selection="\d+"/, '')
                        .replace(/ data-maction-id="\d+"/, '');
        }
        return (`${space}<maction${attributes}>` +
            (children.match(/\S/) ? nl + children + endspace : '') +
            '</maction>');
    }
}
function EnrichedMathItemMixin(BaseMathItem, MmlJax, toMathML) {
    return class extends BaseMathItem {
        constructor() {
            super(...arguments);
            this.toMathML = toMathML;
        }
        serializeMml(node) {
            if ('outerHTML' in node) {
                return node.outerHTML;
            }
            if (typeof Element !== 'undefined' &&
                typeof window !== 'undefined' &&
                node instanceof Element) {
                const div = window.document.createElement('div');
                div.appendChild(node);
                return div.innerHTML;
            }
            return node.toString();
        }
        enrich(document, force = false) {
            if (this.state() >= STATE.ENRICHED)
                return;
            if (!this.isEscaped && (document.options.enableEnrichment || force)) {
                const math = new document.options.MathItem('', MmlJax);
                try {
                    let mml;
                    if (!this.inputData.originalMml) {
                        mml = this.inputData.originalMml = this.toMathML(this.root, this);
                    }
                    else {
                        mml = this.adjustSelections();
                    }
                    const enriched = toEnriched(mml);
                    this.inputData.enrichedMml = math.math = this.serializeMml(enriched);
                    math.math = math.math
                        .replace(/ role="treeitem"/g, ' data-speech-node="true"')
                        .replace(/ aria-(?:posinset|owns|setsize)=".*?"/g, '');
                    math.display = this.display;
                    math.compile(document);
                    this.root = math.root;
                }
                catch (err) {
                    document.options.enrichError(document, this, err);
                }
            }
            this.state(STATE.ENRICHED);
        }
        toEnriched(mml) {
            return this.serializeMml(toEnriched(mml));
        }
        unEnrich(document) {
            const mml = this.inputData.originalMml;
            if (!mml)
                return;
            const math = new document.options.MathItem('', MmlJax);
            math.math = mml;
            math.display = this.display;
            math.compile(document);
            this.root = math.root;
        }
        adjustSelections() {
            const mml = this.inputData.originalMml;
            if (!this.inputData.hasMaction)
                return mml;
            const maction = [];
            this.root.walkTree((node) => {
                if (node.isKind('maction')) {
                    maction[node.attributes.get('data-maction-id')] = node;
                }
            });
            return mml.replace(/(data-maction-id="(\d+)" selection=)"\d+"/g, (_match, prefix, id) => `${prefix}"${maction[id].attributes.get('selection')}"`);
        }
    };
}
function EnrichedMathDocumentMixin(BaseDocument, MmlJax) {
    var _a;
    return _a = class extends BaseDocument {
            constructor(...args) {
                super(...args);
                MmlJax.setMmlFactory(this.mmlFactory);
                const ProcessBits = this.constructor
                    .ProcessBits;
                if (!ProcessBits.has('enriched')) {
                    ProcessBits.allocate('enriched');
                }
                const visitor = new enrichVisitor(this.mmlFactory);
                const toMathML = (node, math) => visitor.visitTree(node, math);
                this.options.MathItem = EnrichedMathItemMixin(this.options.MathItem, MmlJax, toMathML);
            }
            enrich() {
                if (!this.processed.isSet('enriched')) {
                    if (this.options.enableEnrichment) {
                        setupEngine(this.options.sre);
                        for (const math of this.math) {
                            math.enrich(this);
                        }
                    }
                    this.processed.set('enriched');
                }
                return this;
            }
            enrichError(_doc, _math, err) {
                console.warn('Enrichment error:', err);
            }
            state(state, restore = false) {
                super.state(state, restore);
                if (state < STATE.ENRICHED) {
                    this.processed.clear('enriched');
                    if (state >= STATE.COMPILED) {
                        for (const item of this.math) {
                            item.unEnrich(this);
                        }
                    }
                }
                return this;
            }
        },
        _a.OPTIONS = Object.assign(Object.assign({}, BaseDocument.OPTIONS), { enableEnrichment: true, enrichError: (doc, math, err) => doc.enrichError(doc, math, err), renderActions: expandable(Object.assign(Object.assign({}, BaseDocument.OPTIONS.renderActions), { enrich: [STATE.ENRICHED] })), sre: expandable({
                speech: 'none',
                locale: 'en',
                domain: 'clearspeak',
                style: 'default',
                braille: 'nemeth',
                structure: true,
                aria: true,
            }) }),
        _a;
}
function EnrichHandler(handler, MmlJax) {
    MmlJax.setAdaptor(handler.adaptor);
    handler.documentClass = EnrichedMathDocumentMixin(handler.documentClass, MmlJax);
    return handler;
}
//# sourceMappingURL=semantic-enrich.js.map
;// ./components/mjs/a11y/semantic-enrich/lib/semantic-enrich.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('a11y/semantic-enrich', VERSION, 'a11y');
}

combineWithMathJax({_: {
  a11y: {
    "semantic-enrich": semantic_enrich_namespaceObject
  }
}});

;// ./components/mjs/input/mml/lib/input/mathml.js
const mathml_def = MathJax._.input.mathml_ts;
const MathML = mathml_def.MathML;

;// ./components/mjs/a11y/semantic-enrich/semantic-enrich.js






if (MathJax.startup) {
  MathJax.startup.extendHandler(
    handler => EnrichHandler(handler, new MathML({allowHtmlInTokenNodes: true}))
  );
}

/******/ })()
;
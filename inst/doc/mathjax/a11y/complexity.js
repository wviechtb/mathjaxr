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

// NAMESPACE OBJECT: ./components/mjs/a11y/semantic-enrich/lib/a11y/semantic-enrich.js
var semantic_enrich_namespaceObject = {};
__webpack_require__.r(semantic_enrich_namespaceObject);
__webpack_require__.d(semantic_enrich_namespaceObject, {
  EnrichHandler: () => (EnrichHandler),
  EnrichedMathDocumentMixin: () => (EnrichedMathDocumentMixin),
  EnrichedMathItemMixin: () => (EnrichedMathItemMixin),
  enrichVisitor: () => (enrichVisitor)
});

// NAMESPACE OBJECT: ./mjs/a11y/complexity/collapse.js
var collapse_namespaceObject = {};
__webpack_require__.r(collapse_namespaceObject);
__webpack_require__.d(collapse_namespaceObject, {
  Collapse: () => (Collapse)
});

// NAMESPACE OBJECT: ./mjs/a11y/complexity/visitor.js
var visitor_namespaceObject = {};
__webpack_require__.r(visitor_namespaceObject);
__webpack_require__.d(visitor_namespaceObject, {
  ComplexityVisitor: () => (ComplexityVisitor)
});

// NAMESPACE OBJECT: ./mjs/a11y/complexity.js
var complexity_namespaceObject = {};
__webpack_require__.r(complexity_namespaceObject);
__webpack_require__.d(complexity_namespaceObject, {
  ComplexityHandler: () => (ComplexityHandler),
  ComplexityMathDocumentMixin: () => (ComplexityMathDocumentMixin),
  ComplexityMathItemMixin: () => (ComplexityMathItemMixin)
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

;// ./components/mjs/a11y/semantic-enrich/lib/a11y/semantic-enrich.js
const semantic_enrich_def = MathJax._.a11y['semantic-enrich'];
const enrichVisitor = semantic_enrich_def.enrichVisitor;
const EnrichedMathItemMixin = semantic_enrich_def.EnrichedMathItemMixin;
const EnrichedMathDocumentMixin = semantic_enrich_def.EnrichedMathDocumentMixin;
const EnrichHandler = semantic_enrich_def.EnrichHandler;

;// ./components/mjs/core/lib/core/MmlTree/MmlVisitor.js
const MmlVisitor_def = MathJax._.core.MmlTree.MmlVisitor;
const DATAMJX = MmlVisitor_def.DATAMJX;
const MmlVisitor = MmlVisitor_def.MmlVisitor;

;// ./mjs/a11y/complexity/collapse.js
class Collapse {
    constructor(visitor) {
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
                value: 12,
            },
        };
        this.marker = {
            identifier: 'x',
            number: '#',
            text: '...',
            appl: {
                'limit function': 'lim',
                value: 'f()',
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
                value: '\u27E8:\u27E9',
            },
            matrix: {
                squarematrix: '[::]',
                rowvector: '\u27E8\u22EF\u27E9',
                columnvector: '\u27E8\u22EE\u27E9',
                determinant: '|::|',
                value: '(::)',
            },
            cases: '{:',
            infixop: {
                addition: '+',
                subtraction: '\u2212',
                multiplication: '\u22C5',
                implicit: '\u22C5',
                value: '+',
            },
            punctuated: {
                text: '...',
                value: ',',
            },
        };
        this.collapse = new Map([
            [
                'fenced',
                (node, complexity) => {
                    complexity = this.uncollapseChild(complexity, node, 1);
                    if (complexity > this.cutoff.fenced &&
                        node.attributes.get('data-semantic-role') === 'leftright') {
                        complexity = this.recordCollapse(node, complexity, this.getText(node.childNodes[0]) +
                            this.getText(node.childNodes[node.childNodes.length - 1]));
                    }
                    return complexity;
                },
            ],
            [
                'appl',
                (node, complexity) => {
                    if (this.canUncollapse(node, 2, 2)) {
                        complexity = this.complexity.visitNode(node, false);
                        const marker = this.marker.appl;
                        const text = marker[node.attributes.get('data-semantic-role')] ||
                            marker.value;
                        complexity = this.recordCollapse(node, complexity, text);
                    }
                    return complexity;
                },
            ],
            [
                'sqrt',
                (node, complexity) => {
                    complexity = this.uncollapseChild(complexity, node, 0);
                    if (complexity > this.cutoff.sqrt) {
                        node.setProperty('collapse-variant', true);
                        complexity = this.recordCollapse(node, complexity, this.marker.sqrt);
                    }
                    return complexity;
                },
            ],
            [
                'root',
                (node, complexity) => {
                    complexity = this.uncollapseChild(complexity, node, 0, 2);
                    if (complexity > this.cutoff.sqrt) {
                        node.setProperty('collapse-variant', true);
                        complexity = this.recordCollapse(node, complexity, this.marker.sqrt);
                    }
                    return complexity;
                },
            ],
            [
                'enclose',
                (node, complexity) => {
                    if (this.splitAttribute(node, 'children').length === 1) {
                        const child = this.canUncollapse(node, 1);
                        if (child) {
                            const marker = child.getProperty('collapse-marker');
                            this.unrecordCollapse(child);
                            complexity = this.recordCollapse(node, this.complexity.visitNode(node, false), marker);
                        }
                    }
                    return complexity;
                },
            ],
            [
                'bigop',
                (node, complexity) => {
                    if (complexity > this.cutoff.bigop || !node.isKind('mo')) {
                        const id = this.splitAttribute(node, 'content').pop();
                        const op = this.findChildText(node, id);
                        complexity = this.recordCollapse(node, complexity, op);
                    }
                    return complexity;
                },
            ],
            [
                'integral',
                (node, complexity) => {
                    if (complexity > this.cutoff.integral ||
                        !node.isKind('mo')) {
                        const id = this.splitAttribute(node, 'content').pop();
                        const op = this.findChildText(node, id);
                        complexity = this.recordCollapse(node, complexity, op);
                    }
                    return complexity;
                },
            ],
            [
                'relseq',
                (node, complexity) => {
                    if (complexity > this.cutoff.relseq) {
                        const id = this.splitAttribute(node, 'content')[0];
                        const text = this.findChildText(node, id);
                        complexity = this.recordCollapse(node, complexity, text);
                    }
                    return complexity;
                },
            ],
            [
                'multirel',
                (node, complexity) => {
                    if (complexity > this.cutoff.relseq) {
                        const id = this.splitAttribute(node, 'content')[0];
                        const text = this.findChildText(node, id) + '\u22EF';
                        complexity = this.recordCollapse(node, complexity, text);
                    }
                    return complexity;
                },
            ],
            [
                'superscript',
                (node, complexity) => {
                    complexity = this.uncollapseChild(complexity, node, 0, 2);
                    if (complexity > this.cutoff.superscript) {
                        complexity = this.recordCollapse(node, complexity, this.marker.superscript);
                    }
                    return complexity;
                },
            ],
            [
                'subscript',
                (node, complexity) => {
                    complexity = this.uncollapseChild(complexity, node, 0, 2);
                    if (complexity > this.cutoff.subscript) {
                        complexity = this.recordCollapse(node, complexity, this.marker.subscript);
                    }
                    return complexity;
                },
            ],
            [
                'subsup',
                (node, complexity) => {
                    complexity = this.uncollapseChild(complexity, node, 0, 3);
                    if (complexity > this.cutoff.subsup) {
                        complexity = this.recordCollapse(node, complexity, this.marker.subsup);
                    }
                    return complexity;
                },
            ],
        ]);
        this.idCount = 0;
        this.complexity = visitor;
    }
    check(node, complexity) {
        const type = node.attributes.get('data-semantic-type');
        if (this.collapse.has(type)) {
            return this.collapse.get(type).call(this, node, complexity);
        }
        if (Object.hasOwn(this.cutoff, type)) {
            return this.defaultCheck(node, complexity, type);
        }
        return complexity;
    }
    defaultCheck(node, complexity, type) {
        const role = node.attributes.get('data-semantic-role');
        const check = this.cutoff[type];
        const cutoff = typeof check === 'number' ? check : check[role] || check.value;
        if (complexity > cutoff) {
            const marker = this.marker[type] || '??';
            const text = typeof marker === 'string' ? marker : marker[role] || marker.value;
            complexity = this.recordCollapse(node, complexity, text);
        }
        return complexity;
    }
    recordCollapse(node, complexity, text) {
        text = '\u25C2' + text + '\u25B8';
        node.setProperty('collapse-marker', text);
        node.setProperty('collapse-complexity', complexity);
        return text.length * this.complexity.complexity.text;
    }
    unrecordCollapse(node) {
        const complexity = node.getProperty('collapse-complexity');
        if (complexity != null) {
            node.attributes.set('data-semantic-complexity', complexity);
            node.removeProperty('collapse-complexity');
            node.removeProperty('collapse-marker');
        }
    }
    canUncollapse(node, n, m = 1) {
        if (this.splitAttribute(node, 'children').length === m) {
            const mml = node.childNodes.length === 1 && node.childNodes[0].isInferred
                ? node.childNodes[0]
                : node;
            if (mml && mml.childNodes[n]) {
                const child = mml.childNodes[n];
                if (child.getProperty('collapse-marker')) {
                    return child;
                }
            }
        }
        return null;
    }
    uncollapseChild(complexity, node, n, m = 1) {
        const child = this.canUncollapse(node, n, m);
        if (child) {
            this.unrecordCollapse(child);
            if (child.parent !== node) {
                child.parent.attributes.set('data-semantic-complexity', undefined);
            }
            complexity = this.complexity.visitNode(node, false);
        }
        return complexity;
    }
    splitAttribute(node, id) {
        return (node.attributes.get('data-semantic-' + id) || '').split(/,/);
    }
    getText(node) {
        if (node.isToken)
            return node.getText();
        return node.childNodes.map((n) => this.getText(n)).join('');
    }
    findChildText(node, id) {
        const child = this.findChild(node, id);
        return this.getText(child.coreMO() || child);
    }
    findChild(node, id) {
        if (!node || node.attributes.get('data-semantic-id') === id)
            return node;
        if (!node.isToken) {
            for (const mml of node.childNodes) {
                const child = this.findChild(mml, id);
                if (child)
                    return child;
            }
        }
        return null;
    }
    makeCollapse(node, id) {
        let oldCount = null;
        if (id === null) {
            id = this.idCount;
        }
        else {
            oldCount = this.idCount;
            this.idCount = id;
        }
        const nodes = [];
        node.walkTree((child) => {
            if (child.getProperty('collapse-marker')) {
                nodes.push(child);
            }
        });
        this.makeActions(nodes);
        if (oldCount !== null) {
            this.idCount = oldCount;
        }
        return id;
    }
    makeActions(nodes) {
        for (const node of nodes) {
            this.makeAction(node);
        }
    }
    makeId() {
        return 'mjx-collapse-' + this.idCount++;
    }
    makeAction(node) {
        if (node.isKind('math')) {
            node = this.addMrow(node);
        }
        const factory = this.complexity.factory;
        const marker = node.getProperty('collapse-marker');
        const parent = node.parent;
        const variant = node.getProperty('collapse-variant')
            ? { mathvariant: '-tex-variant' }
            : {};
        const maction = factory.create('maction', {
            actiontype: 'toggle',
            selection: 2,
            'data-collapsible': true,
            id: this.makeId(),
            'data-semantic-complexity': node.attributes.get('data-semantic-complexity'),
        }, [
            factory.create('mtext', Object.assign({ mathcolor: 'blue' }, variant), [
                factory.create('text').setText(marker),
            ]),
        ]);
        maction.inheritAttributesFrom(node);
        node.attributes.set('data-semantic-complexity', node.getProperty('collapse-complexity'));
        node.removeProperty('collapse-marker');
        node.removeProperty('collapse-complexity');
        parent.replaceChild(maction, node);
        maction.appendChild(node);
    }
    addMrow(node) {
        const mrow = this.complexity.factory.create('mrow', null, node.childNodes[0].childNodes);
        node.childNodes[0].setChildren([mrow]);
        const attributes = node.attributes.getAllAttributes();
        for (const name of Object.keys(attributes)) {
            if (name.substring(0, 14) === 'data-semantic-' ||
                name.substring(0, 12) === 'data-speech-' ||
                name.substring(0, 5) === 'aria-' ||
                name === 'role') {
                mrow.attributes.set(name, attributes[name]);
                delete attributes[name];
            }
        }
        mrow.setProperty('collapse-marker', node.getProperty('collapse-marker'));
        mrow.setProperty('collapse-complexity', node.getProperty('collapse-complexity'));
        node.removeProperty('collapse-marker');
        node.removeProperty('collapse-complexity');
        return mrow;
    }
}
Collapse.NOCOLLAPSE = 10000000;
//# sourceMappingURL=collapse.js.map
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

;// ./mjs/a11y/complexity/visitor.js



class ComplexityVisitor extends MmlVisitor {
    constructor(factory, options) {
        super(factory);
        this.complexity = {
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
        const CLASS = this.constructor;
        this.options = userOptions(defaultOptions({}, CLASS.OPTIONS), options);
        this.collapse = new this.options.Collapse(this);
        this.factory = factory;
    }
    visitTree(node, id) {
        super.visitTree(node, true);
        if (this.options.makeCollapsible) {
            id = this.collapse.makeCollapse(node, id);
        }
        return id;
    }
    visitNode(node, save) {
        if (node.attributes.get('data-semantic-complexity'))
            return;
        return super.visitNode(node, save);
    }
    visitDefault(node, save) {
        let complexity;
        if (node.isToken) {
            const text = node.getText();
            complexity = this.complexity.text * text.length + this.complexity.token;
        }
        else {
            complexity = this.childrenComplexity(node);
        }
        return this.setComplexity(node, complexity, save);
    }
    visitMfracNode(node, save) {
        const complexity = this.childrenComplexity(node) * this.complexity.script +
            this.complexity.fraction;
        return this.setComplexity(node, complexity, save);
    }
    visitMsqrtNode(node, save) {
        const complexity = this.childrenComplexity(node) + this.complexity.sqrt;
        return this.setComplexity(node, complexity, save);
    }
    visitMrootNode(node, save) {
        const complexity = this.childrenComplexity(node) +
            this.complexity.sqrt -
            (1 - this.complexity.script) * this.getComplexity(node.childNodes[1]);
        return this.setComplexity(node, complexity, save);
    }
    visitMphantomNode(node, save) {
        return this.setComplexity(node, this.complexity.phantom, save);
    }
    visitMsNode(node, save) {
        const text = node.attributes.get('lquote') +
            node.getText() +
            node.attributes.get('rquote');
        const complexity = text.length * this.complexity.text;
        return this.setComplexity(node, complexity, save);
    }
    visitMsubsupNode(node, save) {
        super.visitDefault(node, true);
        const sub = node.childNodes[node.sub];
        const sup = node.childNodes[node.sup];
        const base = node.childNodes[node.base];
        let complexity = Math.max(sub ? this.getComplexity(sub) : 0, sup ? this.getComplexity(sup) : 0) * this.complexity.script;
        complexity += this.complexity.child * ((sub ? 1 : 0) + (sup ? 1 : 0));
        complexity += base ? this.getComplexity(base) + this.complexity.child : 0;
        complexity += this.complexity.subsup;
        return this.setComplexity(node, complexity, save);
    }
    visitMsubNode(node, save) {
        return this.visitMsubsupNode(node, save);
    }
    visitMsupNode(node, save) {
        return this.visitMsubsupNode(node, save);
    }
    visitMunderoverNode(node, save) {
        super.visitDefault(node, true);
        const under = node.childNodes[node.under];
        const over = node.childNodes[node.over];
        const base = node.childNodes[node.base];
        let complexity = Math.max(under ? this.getComplexity(under) : 0, over ? this.getComplexity(over) : 0) * this.complexity.script;
        if (base) {
            complexity = Math.max(this.getComplexity(base), complexity);
        }
        complexity +=
            this.complexity.child *
                ((under ? 1 : 0) + (over ? 1 : 0) + (base ? 1 : 0));
        complexity += this.complexity.underover;
        return this.setComplexity(node, complexity, save);
    }
    visitMunderNode(node, save) {
        return this.visitMunderoverNode(node, save);
    }
    visitMoverNode(node, save) {
        return this.visitMunderoverNode(node, save);
    }
    visitMencloseNode(node, save) {
        const complexity = this.childrenComplexity(node) + this.complexity.enclose;
        return this.setComplexity(node, complexity, save);
    }
    visitMactionNode(node, save) {
        this.childrenComplexity(node);
        const complexity = this.getComplexity(node.selected);
        return this.setComplexity(node, complexity, save);
    }
    visitMsemanticsNode(node, save) {
        const child = node.childNodes[0];
        let complexity = 0;
        if (child) {
            this.visitNode(child, true);
            complexity = this.getComplexity(child);
        }
        return this.setComplexity(node, complexity, save);
    }
    visitAnnotationNode(node, save) {
        return this.setComplexity(node, this.complexity.xml, save);
    }
    visitAnnotation_xmlNode(node, save) {
        return this.setComplexity(node, this.complexity.xml, save);
    }
    visitMglyphNode(node, save) {
        return this.setComplexity(node, this.complexity.glyph, save);
    }
    getComplexity(node) {
        const collapsed = node.getProperty('collapsedComplexity');
        return (collapsed != null
            ? collapsed
            : node.attributes.get('data-semantic-complexity'));
    }
    setComplexity(node, complexity, save) {
        if (save) {
            if (this.options.identifyCollapsible) {
                complexity = this.collapse.check(node, complexity);
            }
            node.attributes.set('data-semantic-complexity', complexity);
        }
        return complexity;
    }
    childrenComplexity(node) {
        super.visitDefault(node, true);
        let complexity = 0;
        for (const child of node.childNodes) {
            complexity += this.getComplexity(child);
        }
        if (node.childNodes.length > 1) {
            complexity += node.childNodes.length * this.complexity.child;
        }
        return complexity;
    }
}
ComplexityVisitor.OPTIONS = {
    identifyCollapsible: true,
    makeCollapsible: true,
    Collapse: Collapse
};
//# sourceMappingURL=visitor.js.map
;// ./mjs/a11y/complexity.js




newState('COMPLEXITY', 40);
function ComplexityMathItemMixin(BaseMathItem, computeComplexity) {
    return class extends BaseMathItem {
        constructor() {
            super(...arguments);
            this.initialID = null;
        }
        complexity(document, force = false) {
            if (this.state() >= STATE.COMPLEXITY)
                return;
            if (!this.isEscaped && (document.options.enableComplexity || force)) {
                this.enrich(document, true);
                computeComplexity(this);
            }
            this.state(STATE.COMPLEXITY);
        }
    };
}
function ComplexityMathDocumentMixin(BaseDocument) {
    var _a;
    return _a = class extends BaseDocument {
            constructor(...args) {
                super(...args);
                const ProcessBits = this.constructor.ProcessBits;
                if (!ProcessBits.has('complexity')) {
                    ProcessBits.allocate('complexity');
                }
                const visitorOptions = selectOptionsFromKeys(this.options, this.options.ComplexityVisitor.OPTIONS);
                this.complexityVisitor = new this.options.ComplexityVisitor(this.mmlFactory, visitorOptions);
                const computeComplexity = (math) => {
                    math.initialID = this.complexityVisitor.visitTree(math.root, math.initialID);
                };
                this.options.MathItem = ComplexityMathItemMixin(this.options.MathItem, computeComplexity);
            }
            complexity() {
                if (!this.processed.isSet('complexity')) {
                    if (this.options.enableComplexity) {
                        for (const math of this.math) {
                            math.complexity(this);
                        }
                    }
                    this.processed.set('complexity');
                }
                return this;
            }
            state(state, restore = false) {
                super.state(state, restore);
                if (state < STATE.COMPLEXITY) {
                    this.processed.clear('complexity');
                }
                return this;
            }
        },
        _a.OPTIONS = Object.assign(Object.assign(Object.assign({}, BaseDocument.OPTIONS), ComplexityVisitor.OPTIONS), { enableComplexity: true, ComplexityVisitor: ComplexityVisitor, renderActions: expandable(Object.assign(Object.assign({}, BaseDocument.OPTIONS.renderActions), { complexity: [STATE.COMPLEXITY] })) }),
        _a;
}
function ComplexityHandler(handler, MmlJax = null) {
    if (!handler.documentClass.prototype.enrich && MmlJax) {
        handler = EnrichHandler(handler, MmlJax);
    }
    handler.documentClass = ComplexityMathDocumentMixin(handler.documentClass);
    return handler;
}
//# sourceMappingURL=complexity.js.map
;// ./components/mjs/a11y/complexity/lib/complexity.js








if (MathJax.loader) {
  MathJax.loader.checkVersion('a11y/complexity', VERSION, 'a11y');
}

combineWithMathJax({_: {
  a11y: {
    complexity_ts: complexity_namespaceObject,
    complexity: {
      collapse: collapse_namespaceObject,
      visitor: visitor_namespaceObject
    },
    "semantic-enrich": semantic_enrich_namespaceObject
  }
}});

;// ./components/mjs/a11y/complexity/complexity.js





if (MathJax.startup) {
  MathJax.startup.extendHandler(handler => ComplexityHandler(handler));
  combineDefaults(MathJax.config, 'options', MathJax.config['a11y/complexity'] || {});
}

/******/ })()
;
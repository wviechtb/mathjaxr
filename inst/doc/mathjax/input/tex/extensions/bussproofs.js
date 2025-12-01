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

// NAMESPACE OBJECT: ./mjs/input/tex/bussproofs/BussproofsUtil.js
var BussproofsUtil_namespaceObject = {};
__webpack_require__.r(BussproofsUtil_namespaceObject);
__webpack_require__.d(BussproofsUtil_namespaceObject, {
  balanceRules: () => (balanceRules),
  clearDocument: () => (clearDocument),
  getProperty: () => (getProperty),
  makeBsprAttributes: () => (makeBsprAttributes),
  removeProperty: () => (removeProperty),
  saveDocument: () => (saveDocument),
  setProperty: () => (setProperty)
});

// NAMESPACE OBJECT: ./mjs/input/tex/bussproofs/BussproofsItems.js
var BussproofsItems_namespaceObject = {};
__webpack_require__.r(BussproofsItems_namespaceObject);
__webpack_require__.d(BussproofsItems_namespaceObject, {
  ProofTreeItem: () => (ProofTreeItem)
});

// NAMESPACE OBJECT: ./mjs/input/tex/bussproofs/BussproofsMethods.js
var BussproofsMethods_namespaceObject = {};
__webpack_require__.r(BussproofsMethods_namespaceObject);
__webpack_require__.d(BussproofsMethods_namespaceObject, {
  "default": () => (bussproofs_BussproofsMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/bussproofs/BussproofsConfiguration.js
var BussproofsConfiguration_namespaceObject = {};
__webpack_require__.r(BussproofsConfiguration_namespaceObject);
__webpack_require__.d(BussproofsConfiguration_namespaceObject, {
  BussproofsConfiguration: () => (BussproofsConfiguration)
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
;// ./components/mjs/input/tex-base/lib/input/tex/HandlerTypes.js
const HandlerTypes_def = MathJax._.input.tex.HandlerTypes;
const ConfigurationType = HandlerTypes_def.ConfigurationType;
const HandlerType = HandlerTypes_def.HandlerType;

;// ./components/mjs/input/tex-base/lib/input/tex/Configuration.js
const Configuration_def = MathJax._.input.tex.Configuration;
const Configuration = Configuration_def.Configuration;
const ConfigurationHandler = Configuration_def.ConfigurationHandler;
const ParserConfiguration = Configuration_def.ParserConfiguration;

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/StackItem.js
const StackItem_def = MathJax._.input.tex.StackItem;
const MmlStack = StackItem_def.MmlStack;
const BaseItem = StackItem_def.BaseItem;

;// ./components/mjs/input/tex-base/lib/input/tex/Stack.js
const Stack_def = MathJax._.input.tex.Stack;
/* harmony default export */ const Stack = (Stack_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/UnitUtil.js
const UnitUtil_def = MathJax._.input.tex.UnitUtil;
const UnitUtil = UnitUtil_def.UnitUtil;

;// ./mjs/input/tex/bussproofs/BussproofsUtil.js


let doc = null;
let item = null;
const getBBox = function (node) {
    item.root = node;
    const { w: width } = doc.outputJax.getBBox(item, doc);
    return width;
};
const getRule = function (node) {
    let i = 0;
    while (node && !NodeUtil.isType(node, 'mtable')) {
        if (NodeUtil.isType(node, 'text')) {
            return null;
        }
        if (NodeUtil.isType(node, 'mrow')) {
            node = node.childNodes[0];
            i = 0;
            continue;
        }
        node = node.parent.childNodes[i];
        i++;
    }
    return node;
};
const getPremises = function (rule, direction) {
    return rule.childNodes[direction === 'up' ? 1 : 0].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[0];
};
const getPremise = function (premises, n) {
    return premises.childNodes[n].childNodes[0].childNodes[0];
};
const firstPremise = function (premises) {
    return getPremise(premises, 0);
};
const lastPremise = function (premises) {
    return getPremise(premises, premises.childNodes.length - 1);
};
const getConclusion = function (rule, direction) {
    return rule.childNodes[direction === 'up' ? 0 : 1].childNodes[0].childNodes[0]
        .childNodes[0];
};
const getColumn = function (inf) {
    while (inf && !NodeUtil.isType(inf, 'mtd')) {
        inf = inf.parent;
    }
    return inf;
};
const nextSibling = function (inf) {
    return inf.parent.childNodes[inf.parent.childNodes.indexOf(inf) + 1];
};
const _previousSibling = function (inf) {
    return inf.parent.childNodes[inf.parent.childNodes.indexOf(inf) - 1];
};
const getParentInf = function (inf) {
    while (inf && getProperty(inf, 'inference') == null) {
        inf = inf.parent;
    }
    return inf;
};
const getSpaces = function (inf, rule, right = false) {
    let result = 0;
    if (inf === rule) {
        return result;
    }
    if (inf !== rule.parent) {
        const children = inf.childNodes;
        const index = right ? children.length - 1 : 0;
        if (NodeUtil.isType(children[index], 'mspace')) {
            result += getBBox(children[index]);
        }
        inf = rule.parent;
    }
    if (inf === rule) {
        return result;
    }
    const children = inf.childNodes;
    const index = right ? children.length - 1 : 0;
    if (children[index] !== rule) {
        result += getBBox(children[index]);
    }
    return result;
};
const adjustValue = function (inf, right = false) {
    const rule = getRule(inf);
    const conc = getConclusion(rule, getProperty(rule, 'inferenceRule'));
    const w = getSpaces(inf, rule, right);
    const x = getBBox(rule);
    const y = getBBox(conc);
    return w + (x - y) / 2;
};
const addSpace = function (config, inf, space, right = false) {
    if (space === 0)
        return;
    if (getProperty(inf, 'inferenceRule') || getProperty(inf, 'labelledRule')) {
        const mrow = config.nodeFactory.create('node', 'mrow');
        inf.parent.replaceChild(mrow, inf);
        mrow.setChildren([inf]);
        moveProperties(inf, mrow);
        inf = mrow;
    }
    const index = right ? inf.childNodes.length - 1 : 0;
    let mspace = inf.childNodes[index];
    if (NodeUtil.isType(mspace, 'mspace')) {
        NodeUtil.setAttribute(mspace, 'width', UnitUtil.em(UnitUtil.dimen2em(NodeUtil.getAttribute(mspace, 'width')) +
            space));
        return;
    }
    mspace = config.nodeFactory.create('node', 'mspace', [], {
        width: UnitUtil.em(space),
    });
    if (right) {
        inf.appendChild(mspace);
        return;
    }
    mspace.parent = inf;
    inf.childNodes.unshift(mspace);
};
const moveProperties = function (src, dest) {
    const props = ['inference', 'proof', 'labelledRule'];
    props.forEach((x) => {
        const value = getProperty(src, x);
        if (value != null) {
            setProperty(dest, x, value);
            removeProperty(src, x);
        }
    });
};
const adjustSequents = function (config) {
    const sequents = config.nodeLists['sequent'];
    if (!sequents) {
        return;
    }
    for (let i = sequents.length - 1, seq; (seq = sequents[i]); i--) {
        if (getProperty(seq, 'sequentProcessed')) {
            removeProperty(seq, 'sequentProcessed');
            continue;
        }
        const collect = [];
        let inf = getParentInf(seq);
        if (getProperty(inf, 'inference') !== 1) {
            continue;
        }
        collect.push(seq);
        while (getProperty(inf, 'inference') === 1) {
            inf = getRule(inf);
            const premise = firstPremise(getPremises(inf, getProperty(inf, 'inferenceRule')));
            const sequent = getProperty(premise, 'inferenceRule')
                ?
                    getConclusion(premise, getProperty(premise, 'inferenceRule'))
                :
                    premise;
            if (getProperty(sequent, 'sequent')) {
                seq = sequent.childNodes[0];
                collect.push(seq);
                setProperty(seq, 'sequentProcessed', true);
            }
            inf = premise;
        }
        adjustSequentPairwise(config, collect);
    }
};
const addSequentSpace = function (config, sequent, position, direction, width) {
    const mspace = config.nodeFactory.create('node', 'mspace', [], {
        width: UnitUtil.em(width),
    });
    if (direction === 'left') {
        const row = sequent.childNodes[position].childNodes[0];
        mspace.parent = row;
        row.childNodes.unshift(mspace);
    }
    else {
        sequent.childNodes[position].appendChild(mspace);
    }
    setProperty(sequent.parent, 'sequentAdjust_' + direction, width);
};
const adjustSequentPairwise = function (config, sequents) {
    let top = sequents.pop();
    while (sequents.length) {
        const bottom = sequents.pop();
        const [left, right] = compareSequents(top, bottom);
        if (getProperty(top.parent, 'axiom')) {
            addSequentSpace(config, left < 0 ? top : bottom, 0, 'left', Math.abs(left));
            addSequentSpace(config, right < 0 ? top : bottom, 2, 'right', Math.abs(right));
        }
        top = bottom;
    }
};
const compareSequents = function (top, bottom) {
    const tr = getBBox(top.childNodes[2]);
    const br = getBBox(bottom.childNodes[2]);
    const tl = getBBox(top.childNodes[0]);
    const bl = getBBox(bottom.childNodes[0]);
    const dl = tl - bl;
    const dr = tr - br;
    return [dl, dr];
};
const balanceRules = function (arg) {
    item = new arg.document.options.MathItem('', null, arg.math.display);
    const config = arg.data;
    adjustSequents(config);
    const inferences = config.nodeLists['inference'] || [];
    let maxAdjust = 0;
    for (const inf of inferences) {
        const isProof = getProperty(inf, 'proof');
        const rule = getRule(inf);
        const premises = getPremises(rule, getProperty(rule, 'inferenceRule'));
        const premiseF = firstPremise(premises);
        let leftAdjust = 0;
        if (getProperty(premiseF, 'inference')) {
            const adjust = adjustValue(premiseF);
            if (adjust) {
                addSpace(config, premiseF, -adjust);
                const w = getSpaces(inf, rule, false);
                addSpace(config, inf, adjust - w);
                leftAdjust = adjust - w;
            }
        }
        const premiseL = lastPremise(premises);
        if (getProperty(premiseL, 'inference') == null) {
            continue;
        }
        const adjust = adjustValue(premiseL, true);
        addSpace(config, premiseL, -adjust, true);
        const w = getSpaces(inf, rule, true);
        const delta = (getBBox(rule) - getBBox(premises.parent)) / 2;
        addSpace(config, inf, delta < leftAdjust ? -delta : -leftAdjust);
        maxAdjust = Math.max(0, Math.max(0, maxAdjust + adjust - w) - delta);
        let column;
        if (isProof || !(column = getColumn(inf))) {
            addSpace(config, getProperty(inf, 'proof') ? inf : inf.parent, maxAdjust, true);
            continue;
        }
        const sibling = nextSibling(column);
        if (sibling) {
            const pos = config.nodeFactory.create('node', 'mspace', [], {
                width: UnitUtil.em(maxAdjust),
            });
            sibling.appendChild(pos);
            maxAdjust = 0;
            continue;
        }
        if (!getParentInf(column)) {
            continue;
        }
    }
};
const property_prefix = 'bspr_';
const prefix_pattern = RegExp('^' + property_prefix);
const setProperty = function (node, property, value) {
    NodeUtil.setProperty(node, property_prefix + property, value);
};
const getProperty = function (node, property) {
    return NodeUtil.getProperty(node, property_prefix + property);
};
const removeProperty = function (node, property) {
    node.removeProperty(property_prefix + property);
};
const makeBsprAttributes = function (arg) {
    arg.data.root.walkTree((mml, _data) => {
        const attr = [];
        mml.getPropertyNames().forEach((x) => {
            if (x.match(prefix_pattern)) {
                attr.push(x + ':' + mml.getProperty(x));
            }
        });
        if (attr.length) {
            NodeUtil.setAttribute(mml, 'semantics', attr.join(';'));
        }
    });
};
const saveDocument = function (arg) {
    doc = arg.document;
    if (!('getBBox' in doc.outputJax)) {
        throw Error('The bussproofs extension requires an output jax with a getBBox() method');
    }
};
const clearDocument = function (_arg) {
    doc = null;
};
//# sourceMappingURL=BussproofsUtil.js.map
;// ./mjs/input/tex/bussproofs/BussproofsItems.js




class ProofTreeItem extends BaseItem {
    constructor() {
        super(...arguments);
        this.leftLabel = null;
        this.rigthLabel = null;
        this.innerStack = new Stack(this.factory, {}, true);
    }
    get kind() {
        return 'proofTree';
    }
    checkItem(item) {
        if (item.isKind('end') && item.getName() === 'prooftree') {
            const node = this.toMml();
            setProperty(node, 'proof', true);
            return [[this.factory.create('mml', node), item], true];
        }
        if (item.isKind('stop')) {
            throw new TexError('EnvMissingEnd', 'Missing \\end{%1}', this.getName());
        }
        this.innerStack.Push(item);
        return BaseItem.fail;
    }
    toMml() {
        const tree = super.toMml();
        const start = this.innerStack.Top();
        if (start.isKind('start') && !start.Size()) {
            return tree;
        }
        this.innerStack.Push(this.factory.create('stop'));
        const prefix = this.innerStack.Top().toMml();
        return this.create('node', 'mrow', [prefix, tree], {});
    }
}
//# sourceMappingURL=BussproofsItems.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./mjs/input/tex/bussproofs/BussproofsMethods.js





function paddedContent(parser, content) {
    const nodes = ParseUtil.internalMath(parser, UnitUtil.trimSpaces(content), 0);
    if (!nodes[0].childNodes[0].childNodes.length) {
        return parser.create('node', 'mrow', []);
    }
    const lpad = parser.create('node', 'mspace', [], { width: '.5ex' });
    const rpad = parser.create('node', 'mspace', [], { width: '.5ex' });
    return parser.create('node', 'mrow', [lpad, ...nodes, rpad]);
}
function createRule(parser, premise, conclusions, left, right, style, rootAtTop) {
    const upper = parser.create('node', 'mtr', [parser.create('node', 'mtd', [premise], {})], {});
    const lower = parser.create('node', 'mtr', [parser.create('node', 'mtd', conclusions, {})], {});
    let rule = parser.create('node', 'mtable', rootAtTop ? [lower, upper] : [upper, lower], { align: 'top 2', rowlines: style, framespacing: '0 0' });
    setProperty(rule, 'inferenceRule', rootAtTop ? 'up' : 'down');
    let leftLabel, rightLabel;
    if (left) {
        leftLabel = parser.create('node', 'mpadded', [left], {
            height: '.25em',
            depth: '+.25em',
            width: '+.5ex',
            voffset: '-.25em',
        });
        setProperty(leftLabel, 'prooflabel', 'left');
    }
    if (right) {
        rightLabel = parser.create('node', 'mpadded', [right], {
            height: '-.25em',
            depth: '+.25em',
            width: '+.5ex',
            voffset: '-.25em',
            lspace: '.5ex',
        });
        setProperty(rightLabel, 'prooflabel', 'right');
    }
    let children, label;
    if (left && right) {
        children = [leftLabel, rule, rightLabel];
        label = 'both';
    }
    else if (left) {
        children = [leftLabel, rule];
        label = 'left';
    }
    else if (right) {
        children = [rule, rightLabel];
        label = 'right';
    }
    else {
        return rule;
    }
    rule = parser.create('node', 'mrow', children);
    setProperty(rule, 'labelledRule', label);
    return rule;
}
function parseFCenterLine(parser, name) {
    const dollar = parser.GetNext();
    if (dollar !== '$') {
        throw new TexError('IllegalUseOfCommand', 'Use of %1 does not match its definition.', name);
    }
    parser.i++;
    const axiom = parser.GetUpTo(name, '$');
    if (!axiom.includes('\\fCenter')) {
        throw new TexError('MissingProofCommand', 'Missing %1 in %2.', '\\fCenter', name);
    }
    const [prem, conc] = axiom.split('\\fCenter');
    const premise = new TexParser(prem, parser.stack.env, parser.configuration).mml();
    const conclusion = new TexParser(conc, parser.stack.env, parser.configuration).mml();
    const fcenter = new TexParser('\\fCenter', parser.stack.env, parser.configuration).mml();
    const left = parser.create('node', 'mtd', [premise], {});
    const middle = parser.create('node', 'mtd', [fcenter], {});
    const right = parser.create('node', 'mtd', [conclusion], {});
    const row = parser.create('node', 'mtr', [left, middle, right], {});
    const table = parser.create('node', 'mtable', [row], {
        columnspacing: '.5ex',
        columnalign: 'center 2',
    });
    setProperty(table, 'sequent', true);
    parser.configuration.addNode('sequent', row);
    return table;
}
const BussproofsMethods = {
    Prooftree(parser, begin) {
        parser.Push(begin);
        const newItem = parser.itemFactory.create('proofTree').setProperties({
            name: begin.getName(),
            line: 'solid',
            currentLine: 'solid',
            rootAtTop: false,
        });
        return newItem;
    },
    Axiom(parser, name) {
        const top = parser.stack.Top();
        if (top.kind !== 'proofTree') {
            throw new TexError('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
        }
        const content = paddedContent(parser, parser.GetArgument(name));
        setProperty(content, 'axiom', true);
        top.Push(content);
    },
    Inference(parser, name, n) {
        const top = parser.stack.Top();
        if (top.kind !== 'proofTree') {
            throw new TexError('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
        }
        if (top.Size() < n) {
            throw new TexError('BadProofTree', 'Proof tree badly specified.');
        }
        const rootAtTop = top.getProperty('rootAtTop');
        const childCount = n === 1 && !top.Peek()[0].childNodes.length ? 0 : n;
        const children = [];
        do {
            if (children.length) {
                children.unshift(parser.create('node', 'mtd', [], {}));
            }
            children.unshift(parser.create('node', 'mtd', [top.Pop()], {
                rowalign: rootAtTop ? 'top' : 'bottom',
            }));
            n--;
        } while (n > 0);
        const row = parser.create('node', 'mtr', children, {});
        const table = parser.create('node', 'mtable', [row], {
            framespacing: '0 0',
        });
        const conclusion = paddedContent(parser, parser.GetArgument(name));
        const style = top.getProperty('currentLine');
        if (style !== top.getProperty('line')) {
            top.setProperty('currentLine', top.getProperty('line'));
        }
        const rule = createRule(parser, table, [conclusion], top.getProperty('left'), top.getProperty('right'), style, rootAtTop);
        top.setProperty('left', null);
        top.setProperty('right', null);
        setProperty(rule, 'inference', childCount);
        parser.configuration.addNode('inference', rule);
        top.Push(rule);
    },
    Label(parser, name, side) {
        const top = parser.stack.Top();
        if (top.kind !== 'proofTree') {
            throw new TexError('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
        }
        const content = ParseUtil.internalMath(parser, parser.GetArgument(name), 0);
        const label = content.length > 1
            ? parser.create('node', 'mrow', content, {})
            : content[0];
        top.setProperty(side, label);
    },
    SetLine(parser, _name, style, always) {
        const top = parser.stack.Top();
        if (top.kind !== 'proofTree') {
            throw new TexError('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
        }
        top.setProperty('currentLine', style);
        if (always) {
            top.setProperty('line', style);
        }
    },
    RootAtTop(parser, _name, where) {
        const top = parser.stack.Top();
        if (top.kind !== 'proofTree') {
            throw new TexError('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
        }
        top.setProperty('rootAtTop', where);
    },
    AxiomF(parser, name) {
        const top = parser.stack.Top();
        if (top.kind !== 'proofTree') {
            throw new TexError('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
        }
        const line = parseFCenterLine(parser, name);
        setProperty(line, 'axiom', true);
        top.Push(line);
    },
    FCenter(_parser, _name) { },
    InferenceF(parser, name, n) {
        const top = parser.stack.Top();
        if (top.kind !== 'proofTree') {
            throw new TexError('IllegalProofCommand', 'Proof commands only allowed in prooftree environment.');
        }
        if (top.Size() < n) {
            throw new TexError('BadProofTree', 'Proof tree badly specified.');
        }
        const rootAtTop = top.getProperty('rootAtTop');
        const childCount = n === 1 && !top.Peek()[0].childNodes.length ? 0 : n;
        const children = [];
        do {
            if (children.length) {
                children.unshift(parser.create('node', 'mtd', [], {}));
            }
            children.unshift(parser.create('node', 'mtd', [top.Pop()], {
                rowalign: rootAtTop ? 'top' : 'bottom',
            }));
            n--;
        } while (n > 0);
        const row = parser.create('node', 'mtr', children, {});
        const table = parser.create('node', 'mtable', [row], {
            framespacing: '0 0',
        });
        const conclusion = parseFCenterLine(parser, name);
        const style = top.getProperty('currentLine');
        if (style !== top.getProperty('line')) {
            top.setProperty('currentLine', top.getProperty('line'));
        }
        const rule = createRule(parser, table, [conclusion], top.getProperty('left'), top.getProperty('right'), style, rootAtTop);
        top.setProperty('left', null);
        top.setProperty('right', null);
        setProperty(rule, 'inference', childCount);
        parser.configuration.addNode('inference', rule);
        top.Push(rule);
    },
};
/* harmony default export */ const bussproofs_BussproofsMethods = (BussproofsMethods);
//# sourceMappingURL=BussproofsMethods.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TokenMap.js
const TokenMap_def = MathJax._.input.tex.TokenMap;
const parseResult = TokenMap_def.parseResult;
const AbstractTokenMap = TokenMap_def.AbstractTokenMap;
const RegExpMap = TokenMap_def.RegExpMap;
const AbstractParseMap = TokenMap_def.AbstractParseMap;
const CharacterMap = TokenMap_def.CharacterMap;
const DelimiterMap = TokenMap_def.DelimiterMap;
const MacroMap = TokenMap_def.MacroMap;
const CommandMap = TokenMap_def.CommandMap;
const EnvironmentMap = TokenMap_def.EnvironmentMap;

;// ./mjs/input/tex/bussproofs/BussproofsMappings.js



new CommandMap('Bussproofs-macros', {
    AxiomC: bussproofs_BussproofsMethods.Axiom,
    UnaryInfC: [bussproofs_BussproofsMethods.Inference, 1],
    BinaryInfC: [bussproofs_BussproofsMethods.Inference, 2],
    TrinaryInfC: [bussproofs_BussproofsMethods.Inference, 3],
    QuaternaryInfC: [bussproofs_BussproofsMethods.Inference, 4],
    QuinaryInfC: [bussproofs_BussproofsMethods.Inference, 5],
    RightLabel: [bussproofs_BussproofsMethods.Label, 'right'],
    LeftLabel: [bussproofs_BussproofsMethods.Label, 'left'],
    AXC: bussproofs_BussproofsMethods.Axiom,
    UIC: [bussproofs_BussproofsMethods.Inference, 1],
    BIC: [bussproofs_BussproofsMethods.Inference, 2],
    TIC: [bussproofs_BussproofsMethods.Inference, 3],
    RL: [bussproofs_BussproofsMethods.Label, 'right'],
    LL: [bussproofs_BussproofsMethods.Label, 'left'],
    noLine: [bussproofs_BussproofsMethods.SetLine, 'none', false],
    singleLine: [bussproofs_BussproofsMethods.SetLine, 'solid', false],
    solidLine: [bussproofs_BussproofsMethods.SetLine, 'solid', false],
    dashedLine: [bussproofs_BussproofsMethods.SetLine, 'dashed', false],
    alwaysNoLine: [bussproofs_BussproofsMethods.SetLine, 'none', true],
    alwaysSingleLine: [bussproofs_BussproofsMethods.SetLine, 'solid', true],
    alwaysSolidLine: [bussproofs_BussproofsMethods.SetLine, 'solid', true],
    alwaysDashedLine: [bussproofs_BussproofsMethods.SetLine, 'dashed', true],
    rootAtTop: [bussproofs_BussproofsMethods.RootAtTop, true],
    alwaysRootAtTop: [bussproofs_BussproofsMethods.RootAtTop, true],
    rootAtBottom: [bussproofs_BussproofsMethods.RootAtTop, false],
    alwaysRootAtBottom: [bussproofs_BussproofsMethods.RootAtTop, false],
    fCenter: bussproofs_BussproofsMethods.FCenter,
    Axiom: bussproofs_BussproofsMethods.AxiomF,
    UnaryInf: [bussproofs_BussproofsMethods.InferenceF, 1],
    BinaryInf: [bussproofs_BussproofsMethods.InferenceF, 2],
    TrinaryInf: [bussproofs_BussproofsMethods.InferenceF, 3],
    QuaternaryInf: [bussproofs_BussproofsMethods.InferenceF, 4],
    QuinaryInf: [bussproofs_BussproofsMethods.InferenceF, 5],
});
new EnvironmentMap('Bussproofs-environments', ParseMethods.environment, {
    prooftree: [bussproofs_BussproofsMethods.Prooftree, null, false],
});
//# sourceMappingURL=BussproofsMappings.js.map
;// ./mjs/input/tex/bussproofs/BussproofsConfiguration.js





const BussproofsConfiguration = Configuration.create('bussproofs', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['Bussproofs-macros'],
        [HandlerType.ENVIRONMENT]: ['Bussproofs-environments'],
    },
    [ConfigurationType.ITEMS]: {
        [ProofTreeItem.prototype.kind]: ProofTreeItem,
    },
    [ConfigurationType.PREPROCESSORS]: [[saveDocument, 1]],
    [ConfigurationType.POSTPROCESSORS]: [
        [clearDocument, 3],
        [makeBsprAttributes, 2],
        [balanceRules, 1],
    ],
});
//# sourceMappingURL=BussproofsConfiguration.js.map
;// ./components/mjs/input/tex/extensions/bussproofs/lib/bussproofs.js








if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/bussproofs', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      bussproofs: {
        BussproofsConfiguration: BussproofsConfiguration_namespaceObject,
        BussproofsItems: BussproofsItems_namespaceObject,
        BussproofsMethods: BussproofsMethods_namespaceObject,
        BussproofsUtil: BussproofsUtil_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/bussproofs/bussproofs.js


/******/ })()
;
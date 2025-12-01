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

// NAMESPACE OBJECT: ./mjs/input/tex/braket/BraketItems.js
var BraketItems_namespaceObject = {};
__webpack_require__.r(BraketItems_namespaceObject);
__webpack_require__.d(BraketItems_namespaceObject, {
  BraketItem: () => (BraketItem)
});

// NAMESPACE OBJECT: ./mjs/input/tex/braket/BraketMethods.js
var BraketMethods_namespaceObject = {};
__webpack_require__.r(BraketMethods_namespaceObject);
__webpack_require__.d(BraketMethods_namespaceObject, {
  "default": () => (braket_BraketMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/braket/BraketConfiguration.js
var BraketConfiguration_namespaceObject = {};
__webpack_require__.r(BraketConfiguration_namespaceObject);
__webpack_require__.d(BraketConfiguration_namespaceObject, {
  BraketConfiguration: () => (BraketConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/StackItem.js
const StackItem_def = MathJax._.input.tex.StackItem;
const MmlStack = StackItem_def.MmlStack;
const BaseItem = StackItem_def.BaseItem;

;// ./components/mjs/core/lib/core/MmlTree/MmlNode.js
const MmlNode_def = MathJax._.core.MmlTree.MmlNode;
const TEXCLASS = MmlNode_def.TEXCLASS;
const TEXCLASSNAMES = MmlNode_def.TEXCLASSNAMES;
const MATHVARIANTS = MmlNode_def.MATHVARIANTS;
const indentAttributes = MmlNode_def.indentAttributes;
const AbstractMmlNode = MmlNode_def.AbstractMmlNode;
const AbstractMmlTokenNode = MmlNode_def.AbstractMmlTokenNode;
const AbstractMmlLayoutNode = MmlNode_def.AbstractMmlLayoutNode;
const AbstractMmlBaseNode = MmlNode_def.AbstractMmlBaseNode;
const AbstractMmlEmptyNode = MmlNode_def.AbstractMmlEmptyNode;
const TextNode = MmlNode_def.TextNode;
const XMLNode = MmlNode_def.XMLNode;

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/core/lib/util/lengths.js
const lengths_def = MathJax._.util.lengths;
const BIGDIMEN = lengths_def.BIGDIMEN;
const UNITS = lengths_def.UNITS;
const RELUNITS = lengths_def.RELUNITS;
const MATHSPACE = lengths_def.MATHSPACE;
const length2em = lengths_def.length2em;
const percent = lengths_def.percent;
const em = lengths_def.em;
const px = lengths_def.px;

;// ./mjs/input/tex/braket/BraketItems.js




const THINSPACE = em(MATHSPACE.thinmathspace);
class BraketItem extends BaseItem {
    constructor() {
        super(...arguments);
        this.barNodes = [];
    }
    get kind() {
        return 'braket';
    }
    get isOpen() {
        return true;
    }
    checkItem(item) {
        if (item.isKind('close')) {
            if (item.getProperty('braketbar')) {
                this.barNodes.push(...super.toMml(true, true).childNodes);
                this.Clear();
                return BaseItem.fail;
            }
            return [[this.factory.create('mml', this.toMml())], true];
        }
        if (item.isKind('mml')) {
            this.Push(item.toMml());
            if (this.getProperty('single')) {
                return [[this.toMml()], true];
            }
            return BaseItem.fail;
        }
        return super.checkItem(item);
    }
    toMml(inferred = true, forceRow) {
        let inner = super.toMml(inferred, forceRow);
        if (!inferred) {
            return inner;
        }
        const open = this.getProperty('open');
        const close = this.getProperty('close');
        if (this.barNodes.length) {
            inner = this.create('node', 'inferredMrow', [...this.barNodes, inner]);
        }
        if (this.getProperty('stretchy')) {
            if (this.getProperty('space')) {
                inner = this.create('node', 'inferredMrow', [
                    this.create('token', 'mspace', { width: THINSPACE }),
                    inner,
                    this.create('token', 'mspace', { width: THINSPACE }),
                ]);
            }
            return ParseUtil.fenced(this.factory.configuration, open, inner, close);
        }
        const attrs = {
            fence: true,
            stretchy: false,
            symmetric: true,
            texClass: TEXCLASS.OPEN,
        };
        const openNode = this.create('token', 'mo', attrs, open);
        attrs.texClass = TEXCLASS.CLOSE;
        const closeNode = this.create('token', 'mo', attrs, close);
        const mrow = this.create('node', 'mrow', [openNode, inner, closeNode], {
            open: open,
            close: close,
        });
        return mrow;
    }
}
//# sourceMappingURL=BraketItems.js.map
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

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./mjs/input/tex/braket/BraketMethods.js



const BraketMethods = {
    Braket(parser, _name, open, close, stretchy, barmax, space = false) {
        const next = parser.GetNext();
        if (next === '') {
            throw new TexError('MissingArgFor', 'Missing argument for %1', parser.currentCS);
        }
        let single = true;
        if (next === '{') {
            parser.i++;
            single = false;
        }
        const node = parser.itemFactory.create('braket');
        node.setProperties({
            barcount: 0,
            barmax,
            open,
            close,
            stretchy,
            single,
            space,
        });
        parser.Push(node);
        node.env.braketItem = parser.stack.height - 1;
    },
    Bar(parser, name) {
        let c = name === '|' ? '|' : '\u2016';
        const n = parser.stack.height - parser.stack.env.braketItem;
        const top = parser.stack.Top(n);
        if (!top ||
            !top.isKind('braket') ||
            top.getProperty('barcount') >= top.getProperty('barmax')) {
            return false;
        }
        if (c === '|' && parser.GetNext() === '|') {
            parser.i++;
            c = '\u2016';
        }
        if (!top.getProperty('stretchy')) {
            const node = parser.create('token', 'mo', { stretchy: false, 'data-braketbar': true, texClass: TEXCLASS.ORD }, c);
            parser.Push(node);
            return true;
        }
        const close = parser.itemFactory
            .create('close')
            .setProperty('braketbar', true);
        parser.Push(close);
        top.barNodes.push(parser.create('node', 'TeXAtom', [], { texClass: TEXCLASS.CLOSE }), parser.create('token', 'mo', { stretchy: true, 'data-braketbar': true, texClass: TEXCLASS.BIN }, c), parser.create('node', 'TeXAtom', [], { texClass: TEXCLASS.OPEN }));
        top.setProperty('barcount', top.getProperty('barcount') + 1);
        return true;
    },
    Macro: BaseMethods.Macro,
};
/* harmony default export */ const braket_BraketMethods = (BraketMethods);
//# sourceMappingURL=BraketMethods.js.map
;// ./mjs/input/tex/braket/BraketMappings.js


new CommandMap('Braket-macros', {
    bra: [braket_BraketMethods.Macro, '{\\langle {#1} \\vert}', 1],
    ket: [braket_BraketMethods.Macro, '{\\vert {#1} \\rangle}', 1],
    braket: [braket_BraketMethods.Braket, '\u27E8', '\u27E9', false, Infinity],
    set: [braket_BraketMethods.Braket, '{', '}', false, 1],
    Bra: [braket_BraketMethods.Macro, '{\\left\\langle {#1} \\right\\vert}', 1],
    Ket: [braket_BraketMethods.Macro, '{\\left\\vert {#1} \\right\\rangle}', 1],
    Braket: [braket_BraketMethods.Braket, '\u27E8', '\u27E9', true, Infinity],
    Set: [braket_BraketMethods.Braket, '{', '}', true, 1, true],
    ketbra: [
        braket_BraketMethods.Macro,
        '{\\vert {#1} \\rangle\\langle {#2} \\vert}',
        2,
    ],
    Ketbra: [
        braket_BraketMethods.Macro,
        '{\\left\\vert {#1} \\right\\rangle\\left\\langle {#2} \\right\\vert}',
        2,
    ],
    '|': braket_BraketMethods.Bar,
});
new MacroMap('Braket-characters', {
    '|': braket_BraketMethods.Bar,
});
//# sourceMappingURL=BraketMappings.js.map
;// ./mjs/input/tex/braket/BraketConfiguration.js




const BraketConfiguration = Configuration.create('braket', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.CHARACTER]: ['Braket-characters'],
        [HandlerType.MACRO]: ['Braket-macros'],
    },
    [ConfigurationType.ITEMS]: {
        [BraketItem.prototype.kind]: BraketItem,
    },
    [ConfigurationType.PRIORITY]: 3,
});
//# sourceMappingURL=BraketConfiguration.js.map
;// ./components/mjs/input/tex/extensions/braket/lib/braket.js







if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/braket', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      braket: {
        BraketConfiguration: BraketConfiguration_namespaceObject,
        BraketItems: BraketItems_namespaceObject,
        BraketMethods: BraketMethods_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/braket/braket.js


/******/ })()
;
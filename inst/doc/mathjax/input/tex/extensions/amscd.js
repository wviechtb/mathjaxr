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

// NAMESPACE OBJECT: ./mjs/input/tex/amscd/AmsCdMethods.js
var AmsCdMethods_namespaceObject = {};
__webpack_require__.r(AmsCdMethods_namespaceObject);
__webpack_require__.d(AmsCdMethods_namespaceObject, {
  "default": () => (amscd_AmsCdMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/amscd/AmsCdConfiguration.js
var AmsCdConfiguration_namespaceObject = {};
__webpack_require__.r(AmsCdConfiguration_namespaceObject);
__webpack_require__.d(AmsCdConfiguration_namespaceObject, {
  AmsCdConfiguration: () => (AmsCdConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseConfiguration.js
const BaseConfiguration_def = MathJax._.input.tex.base.BaseConfiguration;
const Other = BaseConfiguration_def.Other;
const BaseTags = BaseConfiguration_def.BaseTags;
const BaseConfiguration = BaseConfiguration_def.BaseConfiguration;

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

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./mjs/input/tex/amscd/AmsCdMethods.js




const AmsCdMethods = {
    CD(parser, begin) {
        parser.Push(begin);
        const item = parser.itemFactory.create('array');
        const options = parser.configuration.options.amscd;
        item.setProperties({
            minw: parser.stack.env.CD_minw || options.harrowsize,
            minh: parser.stack.env.CD_minh || options.varrowsize,
        });
        item.arraydef = {
            columnalign: 'center',
            columnspacing: options.colspace,
            rowspacing: options.rowspace,
            displaystyle: true,
        };
        return item;
    },
    arrow(parser, name) {
        const c = parser.string.charAt(parser.i);
        if (!c.match(/[><VA.|=]/)) {
            return Other(parser, name);
        }
        else {
            parser.i++;
        }
        let first = parser.stack.Top();
        if (!first.isKind('array') || first.Size()) {
            AmsCdMethods.cell(parser, name);
            first = parser.stack.Top();
        }
        const top = first;
        const arrowRow = top.table.length % 2 === 1;
        let n = (top.row.length + (arrowRow ? 0 : 1)) % 2;
        while (n) {
            AmsCdMethods.cell(parser, name);
            n--;
        }
        let mml;
        const hdef = { minsize: top.getProperty('minw'), stretchy: true };
        const vdef = {
            minsize: top.getProperty('minh'),
            stretchy: true,
            symmetric: true,
            lspace: 0,
            rspace: 0,
        };
        if (c === '|') {
            mml = parser.create('token', 'mo', vdef, '\u2225');
        }
        else if (c === '=') {
            mml = parser.create('token', 'mo', hdef, '=');
        }
        else if (c !== '.') {
            const arrow = {
                '>': '\u2192',
                '<': '\u2190',
                V: '\u2193',
                A: '\u2191',
            }[c];
            let a = parser.GetUpTo(name + c, c);
            const b = parser.GetUpTo(name + c, c);
            if (c === '>' || c === '<') {
                mml = parser.create('token', 'mo', hdef, arrow);
                if (!a) {
                    a = '\\kern ' + top.getProperty('minw');
                }
                const pad = { width: '+.67em', lspace: '.33em' };
                mml = parser.create('node', 'munderover', [mml]);
                const nodeA = new TexParser(a, parser.stack.env, parser.configuration).mml();
                const mpadded = parser.create('node', 'mpadded', [nodeA], pad);
                NodeUtil.setAttribute(mpadded, 'voffset', '.1em');
                NodeUtil.setChild(mml, mml.over, mpadded);
                if (b) {
                    const nodeB = new TexParser(b, parser.stack.env, parser.configuration).mml();
                    NodeUtil.setChild(mml, mml.under, parser.create('node', 'mpadded', [nodeB], pad));
                }
                if (parser.configuration.options.amscd.hideHorizontalLabels) {
                    mml = parser.create('node', 'mpadded', [mml], {
                        depth: 0,
                        height: '.67em',
                    });
                }
            }
            else {
                const arrowNode = parser.create('token', 'mo', vdef, arrow);
                mml = arrowNode;
                if (a || b) {
                    mml = parser.create('node', 'mrow');
                    if (a) {
                        NodeUtil.appendChildren(mml, [
                            new TexParser('\\scriptstyle\\llap{' + a + '}', parser.stack.env, parser.configuration).mml(),
                        ]);
                    }
                    arrowNode.texClass = TEXCLASS.ORD;
                    NodeUtil.appendChildren(mml, [arrowNode]);
                    if (b) {
                        NodeUtil.appendChildren(mml, [
                            new TexParser('\\scriptstyle\\rlap{' + b + '}', parser.stack.env, parser.configuration).mml(),
                        ]);
                    }
                }
            }
        }
        if (mml) {
            parser.Push(mml);
        }
        AmsCdMethods.cell(parser, name);
    },
    cell(parser, name) {
        const top = parser.stack.Top();
        if ((top.table || []).length % 2 === 0 && (top.row || []).length === 0) {
            parser.Push(parser.create('node', 'mpadded', [], { height: '8.5pt', depth: '2pt' }));
        }
        parser.Push(parser.itemFactory
            .create('cell')
            .setProperties({ isEntry: true, name: name }));
    },
    minCDarrowwidth(parser, name) {
        parser.stack.env.CD_minw = parser.GetDimen(name);
    },
    minCDarrowheight(parser, name) {
        parser.stack.env.CD_minh = parser.GetDimen(name);
    },
};
/* harmony default export */ const amscd_AmsCdMethods = (AmsCdMethods);
//# sourceMappingURL=AmsCdMethods.js.map
;// ./mjs/input/tex/amscd/AmsCdMappings.js



new EnvironmentMap('amscd_environment', ParseMethods.environment, {
    CD: amscd_AmsCdMethods.CD,
});
new CommandMap('amscd_macros', {
    minCDarrowwidth: amscd_AmsCdMethods.minCDarrowwidth,
    minCDarrowheight: amscd_AmsCdMethods.minCDarrowheight,
});
new MacroMap('amscd_special', { '@': amscd_AmsCdMethods.arrow });
//# sourceMappingURL=AmsCdMappings.js.map
;// ./mjs/input/tex/amscd/AmsCdConfiguration.js



const AmsCdConfiguration = Configuration.create('amscd', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.CHARACTER]: ['amscd_special'],
        [HandlerType.MACRO]: ['amscd_macros'],
        [HandlerType.ENVIRONMENT]: ['amscd_environment'],
    },
    [ConfigurationType.OPTIONS]: {
        amscd: {
            colspace: '5pt',
            rowspace: '5pt',
            harrowsize: '2.75em',
            varrowsize: '1.75em',
            hideHorizontalLabels: false,
        },
    },
});
//# sourceMappingURL=AmsCdConfiguration.js.map
;// ./components/mjs/input/tex/extensions/amscd/lib/amscd.js






if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/amscd', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      amscd: {
        AmsCdConfiguration: AmsCdConfiguration_namespaceObject,
        AmsCdMethods: AmsCdMethods_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/amscd/amscd.js


/******/ })()
;
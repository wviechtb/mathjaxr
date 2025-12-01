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

// NAMESPACE OBJECT: ./mjs/input/tex/centernot/CenternotConfiguration.js
var CenternotConfiguration_namespaceObject = {};
__webpack_require__.r(CenternotConfiguration_namespaceObject);
__webpack_require__.d(CenternotConfiguration_namespaceObject, {
  CenternotConfiguration: () => (CenternotConfiguration),
  filterCenterOver: () => (filterCenterOver)
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

;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

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

;// ./mjs/input/tex/centernot/CenternotConfiguration.js






function CenterOver(parser, name) {
    const arg = '{' + parser.GetArgument(name) + '}';
    const over = parser.ParseArg(name);
    const base = new TexParser(arg, parser.stack.env, parser.configuration).mml();
    const mml = parser.create('node', 'TeXAtom', [
        new TexParser(arg, parser.stack.env, parser.configuration).mml(),
        parser.create('node', 'mpadded', [
            parser.create('node', 'mpadded', [over], {
                width: 0,
                lspace: '-.5width',
            }),
            parser.create('node', 'mphantom', [base]),
        ], { width: 0, lspace: '-.5width' }),
    ]);
    parser.configuration.addNode('centerOver', base);
    parser.Push(mml);
}
new CommandMap('centernot', {
    centerOver: CenterOver,
    centernot: [BaseMethods.Macro, '\\centerOver{#1}{{\u29F8}}', 1],
});
function filterCenterOver({ data }) {
    for (const base of data.getList('centerOver')) {
        const texClass = NodeUtil.getTexClass(base.childNodes[0].childNodes[0]);
        if (texClass !== null) {
            NodeUtil.setProperties(base.parent.parent.parent.parent.parent.parent, {
                texClass,
            });
        }
    }
}
const CenternotConfiguration = Configuration.create('centernot', {
    [ConfigurationType.HANDLER]: { macro: ['centernot'] },
    [ConfigurationType.POSTPROCESSORS]: [filterCenterOver],
});
//# sourceMappingURL=CenternotConfiguration.js.map
;// ./components/mjs/input/tex/extensions/centernot/lib/centernot.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/centernot', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      centernot: {
        CenternotConfiguration: CenternotConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/centernot/centernot.js


/******/ })()
;
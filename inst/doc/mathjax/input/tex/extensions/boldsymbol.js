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

// NAMESPACE OBJECT: ./mjs/input/tex/boldsymbol/BoldsymbolConfiguration.js
var BoldsymbolConfiguration_namespaceObject = {};
__webpack_require__.r(BoldsymbolConfiguration_namespaceObject);
__webpack_require__.d(BoldsymbolConfiguration_namespaceObject, {
  BoldsymbolConfiguration: () => (BoldsymbolConfiguration),
  BoldsymbolMethods: () => (BoldsymbolMethods),
  createBoldToken: () => (createBoldToken),
  rewriteBoldTokens: () => (rewriteBoldTokens)
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

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexConstants.js
const TexConstants_def = MathJax._.input.tex.TexConstants;
const TexConstant = TexConstants_def.TexConstant;

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

;// ./components/mjs/input/tex-base/lib/input/tex/NodeFactory.js
const NodeFactory_def = MathJax._.input.tex.NodeFactory;
const NodeFactory = NodeFactory_def.NodeFactory;

;// ./mjs/input/tex/boldsymbol/BoldsymbolConfiguration.js






const BOLDVARIANT = {};
BOLDVARIANT[TexConstant.Variant.NORMAL] = TexConstant.Variant.BOLD;
BOLDVARIANT[TexConstant.Variant.ITALIC] = TexConstant.Variant.BOLDITALIC;
BOLDVARIANT[TexConstant.Variant.FRAKTUR] = TexConstant.Variant.BOLDFRAKTUR;
BOLDVARIANT[TexConstant.Variant.SCRIPT] = TexConstant.Variant.BOLDSCRIPT;
BOLDVARIANT[TexConstant.Variant.SANSSERIF] = TexConstant.Variant.BOLDSANSSERIF;
BOLDVARIANT['-tex-calligraphic'] = '-tex-bold-calligraphic';
BOLDVARIANT['-tex-oldstyle'] = '-tex-bold-oldstyle';
BOLDVARIANT['-tex-mathit'] = TexConstant.Variant.BOLDITALIC;
const BoldsymbolMethods = {
    Boldsymbol(parser, name) {
        const boldsymbol = parser.stack.env['boldsymbol'];
        parser.stack.env['boldsymbol'] = true;
        const mml = parser.ParseArg(name);
        parser.stack.env['boldsymbol'] = boldsymbol;
        parser.Push(mml);
    },
};
new CommandMap('boldsymbol', { boldsymbol: BoldsymbolMethods.Boldsymbol });
function createBoldToken(factory, kind, def, text) {
    const token = NodeFactory.createToken(factory, kind, def, text);
    if (kind !== 'mtext' &&
        factory.configuration.parser.stack.env['boldsymbol']) {
        NodeUtil.setProperty(token, 'fixBold', true);
        factory.configuration.addNode('fixBold', token);
    }
    return token;
}
function rewriteBoldTokens(arg) {
    for (const node of arg.data.getList('fixBold')) {
        if (NodeUtil.getProperty(node, 'fixBold')) {
            const variant = NodeUtil.getAttribute(node, 'mathvariant');
            NodeUtil.setAttribute(node, 'mathvariant', BOLDVARIANT[variant] || variant);
            NodeUtil.removeProperties(node, 'fixBold');
        }
    }
}
const BoldsymbolConfiguration = Configuration.create('boldsymbol', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['boldsymbol'] },
    [ConfigurationType.NODES]: { token: createBoldToken },
    [ConfigurationType.POSTPROCESSORS]: [rewriteBoldTokens],
});
//# sourceMappingURL=BoldsymbolConfiguration.js.map
;// ./components/mjs/input/tex/extensions/boldsymbol/lib/boldsymbol.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/boldsymbol', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      boldsymbol: {
        BoldsymbolConfiguration: BoldsymbolConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/boldsymbol/boldsymbol.js


/******/ })()
;
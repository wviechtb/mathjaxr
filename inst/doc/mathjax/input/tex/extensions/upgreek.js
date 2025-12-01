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

// NAMESPACE OBJECT: ./mjs/input/tex/upgreek/UpgreekConfiguration.js
var UpgreekConfiguration_namespaceObject = {};
__webpack_require__.r(UpgreekConfiguration_namespaceObject);
__webpack_require__.d(UpgreekConfiguration_namespaceObject, {
  UpgreekConfiguration: () => (UpgreekConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/TexConstants.js
const TexConstants_def = MathJax._.input.tex.TexConstants;
const TexConstant = TexConstants_def.TexConstant;

;// ./mjs/input/tex/upgreek/UpgreekConfiguration.js




function mathchar0miNormal(parser, mchar) {
    const def = mchar.attributes || {};
    def.mathvariant = TexConstant.Variant.NORMAL;
    const node = parser.create('token', 'mi', def, mchar.char);
    parser.Push(node);
}
new CharacterMap('upgreek', mathchar0miNormal, {
    upalpha: '\u03B1',
    upbeta: '\u03B2',
    upgamma: '\u03B3',
    updelta: '\u03B4',
    upepsilon: '\u03F5',
    upzeta: '\u03B6',
    upeta: '\u03B7',
    uptheta: '\u03B8',
    upiota: '\u03B9',
    upkappa: '\u03BA',
    uplambda: '\u03BB',
    upmu: '\u03BC',
    upnu: '\u03BD',
    upxi: '\u03BE',
    upomicron: '\u03BF',
    uppi: '\u03C0',
    uprho: '\u03C1',
    upsigma: '\u03C3',
    uptau: '\u03C4',
    upupsilon: '\u03C5',
    upphi: '\u03D5',
    upchi: '\u03C7',
    uppsi: '\u03C8',
    upomega: '\u03C9',
    upvarepsilon: '\u03B5',
    upvartheta: '\u03D1',
    upvarpi: '\u03D6',
    upvarrho: '\u03F1',
    upvarsigma: '\u03C2',
    upvarphi: '\u03C6',
    Upgamma: '\u0393',
    Updelta: '\u0394',
    Uptheta: '\u0398',
    Uplambda: '\u039B',
    Upxi: '\u039E',
    Uppi: '\u03A0',
    Upsigma: '\u03A3',
    Upupsilon: '\u03A5',
    Upphi: '\u03A6',
    Uppsi: '\u03A8',
    Upomega: '\u03A9',
});
const UpgreekConfiguration = Configuration.create('upgreek', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['upgreek'] },
});
//# sourceMappingURL=UpgreekConfiguration.js.map
;// ./components/mjs/input/tex/extensions/upgreek/lib/upgreek.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/upgreek', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      upgreek: {
        UpgreekConfiguration: UpgreekConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/upgreek/upgreek.js


/******/ })()
;
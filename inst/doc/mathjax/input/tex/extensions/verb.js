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

// NAMESPACE OBJECT: ./mjs/input/tex/verb/VerbConfiguration.js
var VerbConfiguration_namespaceObject = {};
__webpack_require__.r(VerbConfiguration_namespaceObject);
__webpack_require__.d(VerbConfiguration_namespaceObject, {
  VerbConfiguration: () => (VerbConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./mjs/input/tex/verb/VerbConfiguration.js





const VerbMethods = {
    Verb(parser, name) {
        const c = parser.GetNext();
        const start = ++parser.i;
        if (c === '') {
            throw new TexError('MissingArgFor', 'Missing argument for %1', name);
        }
        while (parser.i < parser.string.length &&
            parser.string.charAt(parser.i) !== c) {
            parser.i++;
        }
        if (parser.i === parser.string.length) {
            throw new TexError('NoClosingDelim', "Can't find closing delimiter for %1", parser.currentCS);
        }
        const text = parser.string.slice(start, parser.i).replace(/ /g, '\u00A0');
        parser.i++;
        parser.Push(parser.create('token', 'mtext', { mathvariant: TexConstant.Variant.MONOSPACE }, text));
    },
};
new CommandMap('verb', { verb: VerbMethods.Verb });
const VerbConfiguration = Configuration.create('verb', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['verb'] },
});
//# sourceMappingURL=VerbConfiguration.js.map
;// ./components/mjs/input/tex/extensions/verb/lib/verb.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/verb', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      verb: {
        VerbConfiguration: VerbConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/verb/verb.js


/******/ })()
;
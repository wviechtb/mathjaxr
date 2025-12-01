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

// NAMESPACE OBJECT: ./mjs/input/tex/enclose/EncloseConfiguration.js
var EncloseConfiguration_namespaceObject = {};
__webpack_require__.r(EncloseConfiguration_namespaceObject);
__webpack_require__.d(EncloseConfiguration_namespaceObject, {
  ENCLOSE_OPTIONS: () => (ENCLOSE_OPTIONS),
  EncloseConfiguration: () => (EncloseConfiguration),
  EncloseMethods: () => (EncloseMethods)
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

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./mjs/input/tex/enclose/EncloseConfiguration.js




const ENCLOSE_OPTIONS = {
    'data-arrowhead': 1,
    color: 1,
    mathcolor: 1,
    background: 1,
    mathbackground: 1,
    'data-padding': 1,
    'data-thickness': 1,
};
const EncloseMethods = {
    Enclose(parser, name) {
        const notation = parser.GetArgument(name).replace(/,/g, ' ');
        const attr = parser.GetBrackets(name, '');
        const math = parser.ParseArg(name);
        const def = ParseUtil.keyvalOptions(attr, ENCLOSE_OPTIONS);
        def.notation = notation;
        parser.Push(parser.create('node', 'menclose', [math], def));
    },
};
new CommandMap('enclose', { enclose: EncloseMethods.Enclose });
const EncloseConfiguration = Configuration.create('enclose', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['enclose'] },
});
//# sourceMappingURL=EncloseConfiguration.js.map
;// ./components/mjs/input/tex/extensions/enclose/lib/enclose.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/enclose', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      enclose: {
        EncloseConfiguration: EncloseConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/enclose/enclose.js


/******/ })()
;
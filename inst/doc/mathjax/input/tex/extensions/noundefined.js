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

// NAMESPACE OBJECT: ./mjs/input/tex/noundefined/NoUndefinedConfiguration.js
var NoUndefinedConfiguration_namespaceObject = {};
__webpack_require__.r(NoUndefinedConfiguration_namespaceObject);
__webpack_require__.d(NoUndefinedConfiguration_namespaceObject, {
  NoUndefinedConfiguration: () => (NoUndefinedConfiguration)
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

;// ./mjs/input/tex/noundefined/NoUndefinedConfiguration.js


function noUndefined(parser, name) {
    const textNode = parser.create('text', '\\' + name);
    const options = parser.options.noundefined;
    const def = {};
    for (const id of ['color', 'background', 'size']) {
        if (options[id]) {
            def['math' + id] = options[id];
        }
    }
    parser.Push(parser.create('node', 'mtext', [], def, textNode));
}
const NoUndefinedConfiguration = Configuration.create('noundefined', {
    [ConfigurationType.FALLBACK]: { [HandlerType.MACRO]: noUndefined },
    [ConfigurationType.OPTIONS]: {
        noundefined: {
            color: 'red',
            background: '',
            size: '',
        },
    },
    [ConfigurationType.PRIORITY]: 3,
});
//# sourceMappingURL=NoUndefinedConfiguration.js.map
;// ./components/mjs/input/tex/extensions/noundefined/lib/noundefined.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/noundefined', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      noundefined: {
        NoUndefinedConfiguration: NoUndefinedConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/noundefined/noundefined.js


/******/ })()
;
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

// NAMESPACE OBJECT: ./mjs/input/tex/noerrors/NoErrorsConfiguration.js
var NoErrorsConfiguration_namespaceObject = {};
__webpack_require__.r(NoErrorsConfiguration_namespaceObject);
__webpack_require__.d(NoErrorsConfiguration_namespaceObject, {
  NoErrorsConfiguration: () => (NoErrorsConfiguration)
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

;// ./mjs/input/tex/noerrors/NoErrorsConfiguration.js


function noErrors(factory, message, _id, expr) {
    const mtext = factory.create('token', 'mtext', {}, expr.replace(/\n/g, ' '));
    const error = factory.create('node', 'merror', [mtext], {
        'data-mjx-error': message,
        title: message,
    });
    return error;
}
const NoErrorsConfiguration = Configuration.create('noerrors', {
    [ConfigurationType.NODES]: { error: noErrors },
});
//# sourceMappingURL=NoErrorsConfiguration.js.map
;// ./components/mjs/input/tex/extensions/noerrors/lib/noerrors.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/noerrors', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      noerrors: {
        NoErrorsConfiguration: NoErrorsConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/noerrors/noerrors.js


/******/ })()
;
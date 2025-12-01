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

// NAMESPACE OBJECT: ./mjs/input/tex/dsfont/DsfontConfiguration.js
var DsfontConfiguration_namespaceObject = {};
__webpack_require__.r(DsfontConfiguration_namespaceObject);
__webpack_require__.d(DsfontConfiguration_namespaceObject, {
  DsfontConfiguration: () => (DsfontConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

;// ./mjs/input/tex/dsfont/DsfontConfiguration.js




function ChooseFont(parser, name) {
    BaseMethods.MathFont(parser, name, parser.options.dsfont.sans ? '-ds-ss' : '-ds-rm');
}
new CommandMap('dsfont', {
    mathds: ChooseFont,
});
const DsfontConfiguration = Configuration.create('dsfont', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['dsfont'],
    },
    [ConfigurationType.OPTIONS]: {
        dsfont: {
            sans: false,
        },
    },
});
//# sourceMappingURL=DsfontConfiguration.js.map
;// ./components/mjs/input/tex/extensions/dsfont/lib/dsfont.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/dsfont', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      dsfont: {
        DsfontConfiguration: DsfontConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/core/lib/util/context.js
const context_def = MathJax._.util.context;
const hasWindow = context_def.hasWindow;
const context = context_def.context;

;// ./components/mjs/input/tex/extension.js



function fontExtension(id, name, pkg = `@mathjax/${name}`) {
  if (MathJax.loader) {
    const FONTPATH = hasWindow ? `https://cdn.jsdelivr.net/npm/${pkg}` : pkg;
    const path = name.replace(/-font-extension$/, '-extension');
    const jax = (MathJax.config?.startup?.output || 'chtml');
    combineDefaults(MathJax.config.loader, 'paths', {[path]: FONTPATH});
    combineDefaults(MathJax.config.loader, 'dependencies', {[`[${path}]/${jax}`]: [`output/${jax}`]});
    MathJax.loader.addPackageData(id, {
      extraLoads: [`[${path}]/${jax}`],
      rendererExtensions: [path]
    });
  }
}

;// ./components/mjs/input/tex/extensions/dsfont/dsfont.js



fontExtension('[tex]/dsfont', 'mathjax-dsfont-font-extension');

/******/ })()
;
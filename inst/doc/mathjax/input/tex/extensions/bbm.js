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

// NAMESPACE OBJECT: ./mjs/input/tex/bbm/BbmConfiguration.js
var BbmConfiguration_namespaceObject = {};
__webpack_require__.r(BbmConfiguration_namespaceObject);
__webpack_require__.d(BbmConfiguration_namespaceObject, {
  BbmConfiguration: () => (BbmConfiguration),
  BbmMethods: () => (BbmMethods)
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

;// ./mjs/input/tex/bbm/BbmConfiguration.js




const BbmMethods = {
    ChooseFont(parser, name, regular, bold) {
        BaseMethods.MathFont(parser, name, parser.options.bbm.bold ? bold : regular);
    },
    ChangeBold(parser, name) {
        const font = parser.GetArgument(name);
        parser.options.bbm.bold = font === 'bold' ? true : false;
    },
    MathFont: BaseMethods.MathFont,
};
new CommandMap('bbm', {
    mathversion: BbmMethods.ChangeBold,
    mathbbm: [BbmMethods.ChooseFont, '-bbm-normal', '-bbm-bold'],
    mathbbmss: [BbmMethods.ChooseFont, '-bbm-sans-serif', '-bbm-sans-serif-bold'],
    mathbbmtt: [BbmMethods.MathFont, '-bbm-monospace'],
});
const BbmConfiguration = Configuration.create('bbm', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['bbm'],
    },
    [ConfigurationType.OPTIONS]: {
        bbm: {
            bold: false,
        },
    },
});
//# sourceMappingURL=BbmConfiguration.js.map
;// ./components/mjs/input/tex/extensions/bbm/lib/bbm.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/bbm', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      bbm: {
        BbmConfiguration: BbmConfiguration_namespaceObject
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

;// ./components/mjs/input/tex/extensions/bbm/bbm.js



fontExtension('[tex]/bbm', 'mathjax-bbm-font-extension');

/******/ })()
;